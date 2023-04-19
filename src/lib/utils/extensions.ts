export {}
declare global {
    export interface String {
        includesAny(values: string[]): boolean;
        remove(value: string): string;
        splitByEmptyLines(): string[];
        splitLines(): string[];
        textAfter(after: string): string;
        textAfter(after: string, inclusive: boolean): string;
        textBefore(before: string): string;
        textBefore(before: string, inclusive: boolean): string;
        trimOutside(): string;
    }
}