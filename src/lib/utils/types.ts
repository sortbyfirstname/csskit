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
};
