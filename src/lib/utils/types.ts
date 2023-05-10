export type Converted<T> = {
	original: T;
	converted: T;
};

export type Size = {
	value: number;
	unit: string;
};

export type Attribute = {
	name: string;
	value: string | string[];
};

export type Rule = {
	selector: string;
	attributes: Attribute[];
};

export type StylesheetContent = {
	rules: Rule[];
	comments: string[];
};

export type Stylesheet = {
	name: string;
	content: StylesheetContent;
	raw: string;
};
