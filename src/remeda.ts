import {
	pickBy,
	mapKeys,
	omit,
	uniqueBy,
	isDeepEqual,
	values,
	mapValues,
	sum,
	prop,
	unique,
	isArray,
	ceil,
	floor,
	round,
	invert,
	map,
	reduce,
	find,
	findIndex,
	range,
	chunk,
	isPlainObject,
	debounce,
	clamp,
	take,
	// objSize,
	first,
	isString,
	isFunction,
	shuffle,
	flatMap,
	filter,
	firstBy,
	hasSubObject,
	isTruthy,
	sortBy,
	indexBy,
	setPath,
	mergeDeep,
} from "remeda";
import memoize from "micro-memoize";
import { kebabCase, camelCase, sentenceCase } from "change-case";

const truncate = (
	str: string,
	options: { length: number; separator: string; omission?: string },
) => {
	const { length, separator, omission = "..." } = options;
	return (
		str.slice(0, length).split(separator).slice(0, -1).join(separator) +
		omission
	);
};

// Examples

// merge - We never want to merge arrays so just always return the new array
const object = {
	a: { b: 2 },
};
const other = {
	a: { c: 3 },
};

export const mergeResult = mergeDeep(object, other);

// pickBy
const object1 = { a: 1, b: "2", c: 3 };
export const pickByResult = pickBy(object1, Number.isInteger);

// mapKeys
const object2 = { a: 1, b: 2 };

function mapK(k: string, v: number) {
	return k + v;
}

export const mapKeysResult = mapKeys(object2, mapK);

// get - Optional Chaining
const object3 = { a: [{ b: { c: 3 } }] };

export const getResult = object3?.a?.[0]?.b?.c;

// defaultTo - ?? operator
export const defaultToResult = 1 ?? 10;

// omit
const object4 = { a: 1, b: "2", c: 3 };

export const omitResult = omit(object4, ["a", "c"]);

// isInteger - Number.isInteger
export const isIntegerResult = Number.isInteger(1);

// kebabCase
export const kebabCaseResult = kebabCase("Foo Bar");

// truncate
export const truncateResult = truncate("hi-diddly-ho there, neighborino", {
	length: 24,
	separator: " ",
});

// uniqueBy
const objects = [
	{ x: 1, y: 2 },
	{ x: 2, y: 1 },
	{ x: 1, y: 2 },
];

export const uniqByResult = uniqueBy(objects, prop("x"));

// isDeepEqual
export const isEqualResult = isDeepEqual("a", "a");

// values
export const valuesResult = values({ a: 1, b: 2 });

// mapValues
const object5 = { a: 1, b: 2 };

function square1(n: number) {
	return n * n;
}

export const mapValuesResult = mapValues(object5, square1);

// sum
export const sumResult = sum([4, 2, 8, 6]);

// uniq
export const uniqResult = unique([2, 1, 2]);

// isArray
export const isArrayResult = isArray([1, 2, 3]);

// ceil
export const ceilResult = ceil(0)(4.006);

// floor
export const floorResult = floor(0)(4.006);

// round
export const roundResult = round(0)(4.006);

// toNumber - Number
export const toNumberResult = [
	Number("3.2"),
	Number(Number.POSITIVE_INFINITY),
	Number(Number.MIN_VALUE),
	Number(Number.MAX_VALUE),
];

// camelCase
export const camelCaseResult = camelCase("Foo Bar");

// upperFirst
export const upperFirstResult = sentenceCase("fred");

// toPairs - Object.entries
export const toPairsResult = Object.entries({ a: 1, b: 2 });

// invert
export const invertResult = invert({ a: "b", c: "d" });

// map
function square(n: number) {
	return n * n;
}

export const mapResult = map([4, 8], square);

// reduce
function sum1(sum: number, n: number) {
	return sum + n;
}

export const reduceResult = reduce([1, 2], sum1, 0);

// find
const users = [
	{ user: "barney", age: 36, active: true },
	{ user: "fred", age: 40, active: false },
];

export const findResult = find(users, (u) => u.age < 40);

// set - Optional Chaining
const object7 = { a: [{ b: 3 }] };
setPath(object7, ["a", 0, "b"], 4);

// findIndex
const users1 = [
	{ user: "barney", age: 36, active: true },
	{ user: "fred", age: 40, active: false },
];

export const findIndexResult = findIndex(users1, (u) => u.age === 36);

// reject
const users2 = [
	{ user: "barney", age: 36, active: false },
	{ user: "fred", age: 40, active: true },
];

export const rejectResult = filter(users2, prop("active"));

// range
export const rangeResult = range(4)(0);

// xor
// WARNING: This is not a drop in replacement solution and
// it might not work for some edge cases. Test your code!
const binaryXor = (arr1: number[], arr2: number[]) => {
	const a = arr1.filter((x) => !arr2.includes(x));
	const b = arr2.filter((x) => !arr1.includes(x));

	return Array.from(new Set([...a, ...b]));
};
export const xorResult = binaryXor([2, 1], [2, 3]);

// chunk
export const chunkResult = chunk(["a", "b", "c", "d"], 2);

// isPlainObject
export const isPlainObjectResult = isPlainObject({});

// minBy
const objects1 = [{ n: 1 }, { n: 2 }];

export const minByResult = firstBy(objects1, (o) => o.n);

// size - Object.keys
export const sizeResult = Object.keys({ a: 1, b: 2 }).length;

// debounce
function log() {}

const debounced = debounce(log, { waitMs: 1000 });

debounced.call();
debounced.call();
debounced.call();

// clamp
export const clampResult = clamp(-10, { min: -5, max: 5 });

// has - Optional Chaining
const object8 = { a: { b: 2 } };
export const hasResult = !!object8?.a?.b;

// trim - String.prototype.trim
export const trimResult = "  abc  ".trim();

// take
export const takeResult = take([1, 2, 3], 2);

// isMatch
const object9 = { a: 1, b: 2 };
export const isMatchResult = hasSubObject(object9, { b: 2 });

// compact
export const compactResult = filter([0, 1, false, 2, "", 3], isTruthy);

// orderBy
const users3 = [
	{ user: "fred", age: 48 },
	{ user: "barney", age: 34 },
	{ user: "fred", age: 40 },
];

export const orderByResult = sortBy(users3, prop("user"), [
	prop("age"),
	"desc",
]);

// // objSize
// export objSizeResult = objSize({ a: 1, b: 2 });
//

// first
export const firstResult = first([1, 2, 3]);

// isString
export const isStringResult = isString("abc");

// memoize
function add(a: number, b: number) {
	return a + b;
}

const memoized = memoize(add);
export const memoizedResult = memoized(1, 2);

// isFunction
export const isFunctionResult = isFunction(add);

// shuffle
export const shuffleResult = shuffle([1, 2, 3, 4]);

// some - Array.prototype.some
export const someResult = [null, 0, "yes", false].some(Boolean);

// random - Math.random, Math.floor
const random = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;
export const randomResult = random(0, 5);

// keyBy
const array = [
	{ dir: "left", code: 97 },
	{ dir: "right", code: 100 },
];

export const keyByResult = indexBy(array, (o) => String.fromCharCode(o.code));

// throttle
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function throttle<T extends (...args: any[]) => void>(
	func: T,
	timeFrame: number,
) {
	let lastTime = 0;
	return (...args: Parameters<T>) => {
		const now = new Date().getTime();
		if (now - lastTime >= timeFrame) {
			func(...args);
			lastTime = now;
		}
	};
}
function update() {}

const throttled = throttle(update, 1000);

throttled();
throttled();
throttled();

// flatMap
export const flatMapResult = flatMap([1, 2], (n) => [n, n]);

// isUndefined - undefined
// biome-ignore lint/suspicious/noSelfCompare: <explanation>
export const isUndefinedResult = undefined === undefined;

// each - Array.prototype.forEach
// biome-ignore lint/complexity/noForEach: <explanation>
[1, 2].forEach((n) => {
	console.log(n);
});
