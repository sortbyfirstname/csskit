export type Attribute = {
    name: string;
    value: string;
}

export type ColorType = 'hex' | 'rgb' | 'hsl';

export type Color = {
    type: ColorType;
    value: string;
}

export type Rule = {
    selector: string;
    attributes: Attribute[];
    colors: Color[];
}

export type Stylesheet = {
    name: string;
    rules: Rule[];
}