import {
	merge,
	pickBy,
	mapKeys,
	get,
	defaultTo,
	omit,
	isInteger,
	kebabCase,
	truncate,
	uniqBy,
	isEqual,
	values,
	mapValues,
	sum,
	uniq,
	isArray,
	ceil,
	floor,
	round,
	toNumber,
	camelCase,
	upperFirst,
	toPairs,
	invert,
	map,
	reduce,
	find,
	set,
	findIndex,
	reject,
	range,
	xor,
	chunk,
	isPlainObject,
	minBy,
	size,
	debounce,
	clamp,
	has,
	trim,
	take,
	isMatch,
	compact,
	orderBy,
	first,
	isString,
	memoize,
	isFunction,
	shuffle,
	some,
	random,
	keyBy,
	throttle,
	flatMap,
	isUndefined,
	each,
	// } from "lodash-es";
} from "lodash";

// Examples

// merge
const object = {
	a: { b: 2 },
};
const other = {
	a: { c: 3 },
};
export const mergeResult = merge(object, other);

// pickBy
const object1 = { a: 1, b: "2", c: 3 };
export const pickByResult = pickBy(object1, isInteger);

// mapKeys
const object2 = { a: 1, b: 2 };

function mapK(v: number, k: string) {
	return k + v;
}

export const mapKeysResult = mapKeys(object2, mapK);

// get
const object3 = { a: [{ b: { c: 3 } }] };

export const getResult = get(object3, "a[0].b.c");

// defaultTo
export const defaultToResult = defaultTo(1, 10);

// omit
const object4 = { a: 1, b: "2", c: 3 };

export const omitResult = omit(object4, ["a", "c"]);

// isInteger
export const isIntegerResult = isInteger(1);

// kebabCase
export const kebabCaseResult = kebabCase("Foo Bar");

// truncate
export const truncateResult = truncate("hi-diddly-ho there, neighborino", {
	length: 24,
	separator: " ",
});

// uniqBy
const objects = [
	{ x: 1, y: 2 },
	{ x: 2, y: 1 },
	{ x: 1, y: 2 },
];

export const uniqByResult = uniqBy(objects, "x");

// isEqual
export const isEqualResult = isEqual("a", "a");

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
export const uniqResult = uniq([2, 1, 2]);

// isArray
export const isArrayResult = isArray([1, 2, 3]);

// ceil
export const ceilResult = ceil(4.006);

// floor
export const floorResult = floor(4.006);

// round
export const roundResult = round(4.006);

// toNumber
export const toNumberResult = [
	toNumber("3.2"),
	toNumber(Number.POSITIVE_INFINITY),
	toNumber(Number.MIN_VALUE),
	toNumber(Number.MAX_VALUE),
];

// camelCase
export const camelCaseResult = camelCase("Foo Bar");

// upperFirst
export const upperFirstResult = upperFirst("fred");

// toPairs
export const toPairsResult = toPairs({ a: 1, b: 2 });

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

// set
const object7 = { a: [{ b: { c: 3 } }] };
set(object7, "a[0].b.c", 4);

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

export const rejectResult = reject(users2, (u) => !u.active);

// range
export const rangeResult = range(4);

// xor
export const xorResult = xor([2, 1], [2, 3]);

// chunk
export const chunkResult = chunk(["a", "b", "c", "d"], 2);

// isPlainObject
export const isPlainObjectResult = isPlainObject({});

// minBy
const objects1 = [{ n: 1 }, { n: 2 }];

export const minByResult = minBy(objects1, (o) => o.n);

// size
export const sizeResult = size({ a: 1, b: 2 });

// debounce
function log() {}

const debounced = debounce(log, 1000);

debounced();
debounced();
debounced();

// clamp
export const clampResult = clamp(-10, -5, 5);

// has
const object8 = { a: { b: 2 } };
export const hasResult = has(object8, "a.b");

// trim
export const trimResult = trim("  abc  ");

// take
export const takeResult = take([1, 2, 3], 2);

// isMatch
const object9 = { a: 1, b: 2 };
export const isMatchResult = isMatch(object9, { b: 2 });

// compact
export const compactResult = compact([0, 1, false, 2, "", 3]);

// orderBy
const users3 = [
	{ user: "fred", age: 48 },
	{ user: "barney", age: 34 },
	{ user: "fred", age: 40 },
];

export const orderByResult = orderBy(users3, ["user", "age"], ["asc", "desc"]);

// // objSize
// export objSizeResultsult44 = objSize({ a: 1, b: 2 });
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

// some
export const someResult = some([null, 0, "yes", false], Boolean);

// random
export const randomResult = random(0, 5);

// keyBy
const array = [
	{ dir: "left", code: 97 },
	{ dir: "right", code: 100 },
];

export const keyByResult = keyBy(array, (o) => String.fromCharCode(o.code));

// throttle
function update() {}

const throttled = throttle(update, 1000);

throttled();
throttled();
throttled();

// flatMap
export const flatMapResult = flatMap([1, 2], (n) => [n, n]);

// isUndefined
export const isUndefinedResult = isUndefined(undefined);

// each
each([1, 2], (n) => {
	console.log(n);
});
