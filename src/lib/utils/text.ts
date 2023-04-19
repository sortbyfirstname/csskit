import { ColorTranslator } from 'colortranslator';
import type { Attribute, Color, ColorType, Rule, Stylesheet } from "./types";

const regex = {
    byEmptyLines: /\n\s*\n/,
    byLine: /\r?\n|\r|\n/g,
    hex: /^#([0-9a-f]{3}){1,2}$/i
};

String.prototype.includesAny = function(strings: string[]){
    return strings.some(str => this.includes(str));
}

String.prototype.remove = function(value: string){
    return this.replace(value, '');
}

String.prototype.splitByEmptyLines = function () {
    return this.split(regex.byEmptyLines);
};

String.prototype.splitLines = function(){
    return this.split(regex.byLine);
}

String.prototype.textAfter = function(after: string, inclusive: boolean = false){
    return inclusive 
        ? this.substring(this.indexOf(after)).trimOutside()
        : this.substring(this.indexOf(after)).replace(after, '').trimOutside();
}

String.prototype.textBefore = function(before: string, inclusive: boolean = false){
    return inclusive 
        ? this.substring(0, this.indexOf(before)).trimOutside() + before
        : this.substring(0, this.indexOf(before)).trimOutside()
}

String.prototype.trimOutside = function(){
    return this.trimStart().trimEnd();
}

const colorDeclarations = ['#', 'rgb(', 'hsl(']

const validateColor = (color: Color) => 
    color.type == 'hex'
        ? regex.hex.test(color.value)
        : true;

const colorValueOnly = (color: Color) => color.type == 'hex' ? color.value.split(' ')[0] : color.value.textBefore(')', true);

const getAttribute = (line: string): Attribute => ({name: line.textBefore(':'), value: line.textAfter(':')});

const whereAttribute = (lines: string[]) => lines.filter(line => line.includes(':'));

const getAttributes = (lines: string[]) => whereAttribute(lines).map(line => getAttribute(line));

const getColorType = (value: string): ColorType => value.includes('#') ? 'hex' : value.includes('rgb(') ? 'rgb' : value.includes('hsl(') ? 'hsl' : 'hex';

const getColorSymbol = (type: ColorType) => type == 'hex' ? '#' : type;

const getColor = (attribute: Attribute): Color => ({type: getColorType(attribute.value), value: attribute.value.textAfter(getColorSymbol(getColorType(attribute.value)), true).remove(';')});

const whereColor = (attributes: Attribute[]) => attributes.filter(attribute => attribute.value.includesAny(colorDeclarations));

const convertColor = (color: Color): Color => ({type: 'hsl', value: ColorTranslator.toHSL(colorValueOnly(color)) });

const getColors = (attributes: Attribute[]) => whereColor(attributes).map(attribute => getColor(attribute)).filter(col => validateColor(col)).map(c => convertColor(c));

const getRule = (block: string): Rule => ({selector: block.textBefore('{'), attributes: getAttributes(block.splitLines()), colors: getColors(getAttributes(block.splitLines()))});

const getRules = (blocks: string[]) => blocks.map(block => getRule(block));

export const processStylesheet = (raw: string) => getRules(raw.splitByEmptyLines());

export const colorsOnly = (stylesheets: Stylesheet[]) => stylesheets.flatMap((s) => s.rules).flatMap((r) => r.colors);