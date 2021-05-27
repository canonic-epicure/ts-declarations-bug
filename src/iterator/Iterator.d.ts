export declare type FalseAsEarlyExit = false | void;
/**
 * Given a single `Iterable`, returns an array of 2 iterables, mirroring the original one (which should not be used anymore).
 *
 * For example:
 *
 *     const gen = function* () { yield 1; yield 2; yield 3 }
 *
 *     const [ iterable1, iterable2 ] = split(gen())
 *     const [ iter1, iter2 ] = [
 *         iterable1[ Symbol.iterator ](),
 *         iterable2[ Symbol.iterator ]()
 *     ]
 *
 *     iter1.next() // 1
 *     iter2.next() // 1
 *     iter2.next() // 2
 *     iter2.next() // 3
 *     iter1.next() // 2
 *     iter1.next() // 3
 *     iter1.next() // done
 *     iter2.next() // done
 *
 * @param iterable
 */
export declare function split<Element>(iterable: Iterable<Element>): [Iterable<Element>, Iterable<Element>];
export declare function zip2<Element1, Element2>(iterable1: Iterable<Element1>, iterable2: Iterable<Element2>): Iterable<[Element1, Element2]>;
export declare function zip3<Element1, Element2, Element3>(iterable1: Iterable<Element1>, iterable2: Iterable<Element2>, iterable3: Iterable<Element3>): Iterable<[Element1, Element2, Element3]>;
export declare function inBatchesBySize<Element>(iterator: Iterable<Element>, batchSize: number): Iterable<Element[]>;
export declare function filter<Element>(iterator: Iterable<Element>, func: (el: Element, index: number) => boolean): Iterable<Element>;
export declare function drop<Element>(iterator: Iterable<Element>, howMany: number): Iterable<Element>;
export declare function every<Element>(iterator: Iterable<Element>, func: (el: Element, index: number) => boolean): boolean;
export declare function some<Element>(iterator: Iterable<Element>, func: (el: Element, index: number) => boolean): boolean;
export declare function map<Element, Result>(iterator: Iterable<Element>, func: (el: Element, index: number) => Result): Iterable<Result>;
export declare function forEach<Element>(iterator: Iterable<Element>, func: (el: Element, index: number) => FalseAsEarlyExit): FalseAsEarlyExit;
export declare function reduce<Element, Result>(iterator: Iterable<Element>, func: (acc: Result, el: Element, index: number) => Result, initialAcc: Result): Result;
export declare function size<Element>(iterator: Iterable<Element>): number;
export declare function uniqueOnly<Element>(iterator: Iterable<Element>): Iterable<Element>;
export declare function uniqueOnlyBy<Element, UniqueBy>(iterator: Iterable<Element>, func: (el: Element) => UniqueBy): Iterable<Element>;
export declare function reverse<Element>(iterator: Iterable<Element>): Iterable<Element>;
export declare function takeWhile<Element>(iterator: Iterable<Element>, func: (el: Element, index: number) => boolean): Iterable<Element>;
export declare function takeUntilIncluding<Element>(iterator: Iterable<Element>, func: (el: Element, index: number) => boolean): Iterable<Element>;
export declare function takeUntilExcluding<Element>(iterator: Iterable<Element>, func: (el: Element, index: number) => boolean): Iterable<Element>;
export declare function concat<Element>(...iterators: Iterable<Element>[]): Iterable<Element>;
export declare function concatIterable<Element>(iteratorsProducer: Iterable<Iterable<Element>>): Iterable<Element>;
export declare class ChainedIteratorClass<T> {
    iterable: Iterable<T>;
    constructor(iterable: Iterable<T>);
    derive<K>(iterable: Iterable<K>): ChainedIteratorClass<K>;
    copy(): ChainedIteratorClass<T>;
    split(): [ChainedIteratorClass<T>, ChainedIteratorClass<T>];
    inBatchesBySize(batchSize: number): ChainedIteratorClass<T[]>;
    filter(func: (el: T, index: number) => boolean): ChainedIteratorClass<T>;
    drop(howMany: number): ChainedIteratorClass<T>;
    forEach(func: (el: T, index?: number) => FalseAsEarlyExit): FalseAsEarlyExit;
    map<Result>(func: (el: T, index: number) => Result): ChainedIteratorClass<Result>;
    reduce<Result>(func: (acc: Result, el: T, index: number) => Result, initialAcc: Result): Result;
    get size(): number;
    concat(): T extends Iterable<infer K> ? ChainedIteratorClass<K> : never;
    uniqueOnly(): ChainedIteratorClass<T>;
    uniqueOnlyBy<UniqueBy>(func: (el: T) => UniqueBy): ChainedIteratorClass<T>;
    every(func: (el: T, index: number) => boolean): boolean;
    some(func: (el: T, index: number) => boolean): boolean;
    takeWhile(func: (el: T, index: number) => boolean): ChainedIteratorClass<T>;
    take(howMany: number): T[];
    [Symbol.iterator](): IterableIterator<T>;
    sort(order: (v1: T, v2: T) => number): T[];
    sorted(order: (v1: T, v2: T) => number): ChainedIteratorClass<T>;
    toArray(): T[];
    toSet(): Set<T>;
    toMap(): T extends [infer K, infer V] ? Map<K, V> : never;
    flush(): void;
    memoize(): MemoizedIteratorClass<T>;
}
export declare const ChainedIterator: <T>(iterator: Iterable<T>) => ChainedIteratorClass<T>;
export declare const CI: <T>(iterator: Iterable<T>) => ChainedIteratorClass<T>;
export declare type ChainedIterator<T> = ChainedIteratorClass<T>;
export declare class MemoizedIteratorClass<T> extends ChainedIteratorClass<T> {
    elements: T[];
    $iterable: Iterable<T>;
    $iterator: Iterator<T>;
    get iterable(): Iterable<T>;
    set iterable(iterable: Iterable<T>);
    derive<K>(iterable: Iterable<K>): ChainedIteratorClass<K>;
    [Symbol.iterator](): IterableIterator<T>;
}
export declare const MemoizedIterator: <T>(iterator: Iterable<T>) => MemoizedIteratorClass<T>;
export declare const MI: <T>(iterator: Iterable<T>) => MemoizedIteratorClass<T>;
export declare type MemoizedIterator<T> = MemoizedIteratorClass<T>;
