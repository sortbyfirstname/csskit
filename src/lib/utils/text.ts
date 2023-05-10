export const regex = {
	comment: /\/\*(?<=\/\*).+?(?=\*\/)\*\//g,
	byEmptyLines: /\n\s*\n/,
	byLine: /\r?\n|\r|\n/g,
	hex: /^#(?:[0-9a-fA-F]{2}){3,4}$/,
	pixel: /^\d+px$/,
	point: /^\d+pt$/,
	semicolon: /;(?!.*[)"])/
};

export const appendIfNone = (str: string, append: string) => `${str.endsWith(append) ? str : str + append}`;

export const replaceMany = (str: string, find: string[], replace: string[]) => {
	var replaceString = str;
	for (var i = 0; i < find.length; i++) {
		replaceString = replaceString.replace(find[i], replace[i]);
	}
	return replaceString;
};

export const remove = (str: string, value: string) => str.replace(value, '');

export const removeAll = (str: string, values: string[]) => {
	let res = str.toString();
	values.forEach((value) => {
		res = res.split(value).join('');
	});
	return res;
};

export const splitByEmptyLines = (str: string) => str.split(regex.byEmptyLines);

export const splitInclusive = (str: string, value: string) =>
	str
		.split(value)
		.map((v) => v + value)
		.filter((v) => v != value);

export const splitInclusiveRegex = (str: string, exp: RegExp, include: string) =>
	str
		.split(exp)
		.map((v) => v + include)
		.filter((v) => v != include);

export const splitLines = (str: string) => str.split(regex.byLine);

export const textAfter = (str: string, after: string, inclusive: boolean = false) =>
	inclusive ? str.substring(str.indexOf(after)).trim() : str.substring(str.indexOf(after)).replace(after, '').trim();

export const textBefore = (str: string, before: string, inclusive: boolean = false) =>
	inclusive ? str.substring(0, str.indexOf(before)).trim() + before : str.substring(0, str.indexOf(before)).trim();

export const textBeforeLast = (str: string, before: string, inclusive: boolean = false) =>
	inclusive ? str.substring(0, str.lastIndexOf(before)).trim() + before : str.substring(0, str.lastIndexOf(before)).trim();
