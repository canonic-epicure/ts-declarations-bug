export declare const identity: (a: any) => {
    new (): {
        [x: string]: any;
    };
    [x: string]: any;
};
export declare class ZeroBaseClass {
}
declare type SuppressNew<T> = {
    [K in keyof T]: T[K];
};
/**
 * A type that represents a function with the `Result` return type.
 */
export declare type AnyFunction<Result = any> = (...input: any[]) => Result;
declare type AnyConstructorRaw<Instance extends object = object, Static extends object = object> = (new (...input: any[]) => Instance) & Static;
/**
 * A type that represents a constructor function, that returns `Instance` type on instantiation. The properties of the function itself
 * are typed with `Static` argument. These properties will correspond to the static methods/properties of the class.
 */
export declare type AnyConstructor<Instance extends object = object, Static extends object = object> = (new (...input: any[]) => Instance) & SuppressNew<Static>;
export declare type Mixin<T extends AnyFunction> = InstanceType<ReturnType<T>>;
declare type ZeroBaseClassConstructor = typeof ZeroBaseClass;
/**
 * Type helper for mixins creation. Supports up to 5 class constructor arguments. May lead to compilation errors in some edges cases.
 * See the [[Mixin]] for details.
 */
export declare type ClassUnion<C1 extends AnyConstructor = ZeroBaseClassConstructor, C2 extends AnyConstructor = ZeroBaseClassConstructor, C3 extends AnyConstructor = ZeroBaseClassConstructor, C4 extends AnyConstructor = ZeroBaseClassConstructor, C5 extends AnyConstructor = ZeroBaseClassConstructor, C6 extends AnyConstructor = ZeroBaseClassConstructor, C7 extends AnyConstructor = ZeroBaseClassConstructor, C8 extends AnyConstructor = ZeroBaseClassConstructor, C9 extends AnyConstructor = ZeroBaseClassConstructor, C10 extends AnyConstructor = ZeroBaseClassConstructor> = (new (...input: any[]) => InstanceType<C1> & InstanceType<C2> & InstanceType<C3> & InstanceType<C4> & InstanceType<C5> & InstanceType<C6> & InstanceType<C7> & InstanceType<C8> & InstanceType<C9> & InstanceType<C10>) & SuppressNew<C1 & C2 & C3 & C4 & C5 & C6 & C7 & C8 & C9 & C10>;
declare type Omit2<T, K extends keyof any> = T extends AnyConstructorRaw<infer I> ? Pick<T, Exclude<keyof T, K>> & (new (...args: any[]) => I) : never;
declare type MixinClassConstructor<T> = T extends AnyFunction<infer M> ? Omit2<M, 'mix' | 'derive'> & {
    mix?: Parameters<T> extends [infer Base] ? Base extends AnyConstructorRaw ? M extends AnyConstructorRaw<infer MI, infer MS> ? <TT extends Base>(base: TT) => TT extends AnyConstructorRaw<infer BI, infer BS> ? AnyConstructorRaw<BI & MI, BS & MS> : never : never : never : never;
    derive?: Parameters<T> extends [infer Base] ? Base extends AnyConstructorRaw<infer I, infer S> ? M extends AnyConstructorRaw<infer MI, infer MS> ? <TT extends AnyConstructorRaw>(base: TT) => TT extends AnyConstructorRaw<infer BI, infer BS> ? AnyConstructorRaw<BI & I & MI, BS & S & MS> : never : never : never : never;
} : never;
declare type MixinHelperFuncAny = <T>(required: AnyConstructor[], arg: T) => T extends AnyFunction ? MixinClassConstructor<T> : never;
declare type MixinHelperFunc0 = <T>(required: [], arg: T) => T extends AnyFunction ? Parameters<T> extends [infer Base] ? Base extends AnyConstructor<object> ? object extends InstanceType<Base> ? MixinClassConstructor<T> : never : never : never : never;
declare type MixinHelperFunc1 = <A1 extends AnyConstructor, T>(required: [A1], arg: T) => T extends AnyFunction ? Parameters<T> extends [infer Base] ? Base extends AnyConstructor<InstanceType<A1>, A1> ? InstanceType<A1> extends InstanceType<Base> ? MixinClassConstructor<T> : never : never : never : never;
declare type MixinHelperFunc2 = <A1 extends AnyConstructor, A2 extends AnyConstructor, T>(required: [A1, A2], arg: T) => T extends AnyFunction ? Parameters<T> extends [infer Base] ? Base extends AnyConstructor<InstanceType<A1> & InstanceType<A2>, A1 & A2> ? InstanceType<A1> & InstanceType<A2> extends InstanceType<Base> ? MixinClassConstructor<T> : never : never : never : never;
declare type MixinHelperFunc3 = <A1 extends AnyConstructor, A2 extends AnyConstructor, A3 extends AnyConstructor, T>(required: [A1, A2, A3], arg: T) => T extends AnyFunction ? Parameters<T> extends [infer Base] ? Base extends AnyConstructor<InstanceType<A1> & InstanceType<A2> & InstanceType<A3>, A1 & A2 & A3> ? InstanceType<A1> & InstanceType<A2> & InstanceType<A3> extends InstanceType<Base> ? MixinClassConstructor<T> : never : never : never : never;
declare type MixinHelperFunc4 = <A1 extends AnyConstructor, A2 extends AnyConstructor, A3 extends AnyConstructor, A4 extends AnyConstructor, T>(required: [A1, A2, A3, A4], arg: T) => T extends AnyFunction ? Parameters<T> extends [infer Base] ? Base extends AnyConstructor<InstanceType<A1> & InstanceType<A2> & InstanceType<A3> & InstanceType<A4>, A1 & A2 & A3 & A4> ? InstanceType<A1> & InstanceType<A2> & InstanceType<A3> & InstanceType<A4> extends InstanceType<Base> ? MixinClassConstructor<T> : never : never : never : never;
declare type MixinHelperFunc5 = <A1 extends AnyConstructor, A2 extends AnyConstructor, A3 extends AnyConstructor, A4 extends AnyConstructor, A5 extends AnyConstructor, T>(required: [A1, A2, A3, A4, A5], arg: T) => T extends AnyFunction ? Parameters<T> extends [infer Base] ? Base extends AnyConstructor<InstanceType<A1> & InstanceType<A2> & InstanceType<A3> & InstanceType<A4> & InstanceType<A5>, A1 & A2 & A3 & A4 & A5> ? InstanceType<A1> & InstanceType<A2> & InstanceType<A3> & InstanceType<A4> & InstanceType<A5> extends InstanceType<Base> ? MixinClassConstructor<T> : never : never : never : never;
declare type MixinHelperFunc6 = <A1 extends AnyConstructor, A2 extends AnyConstructor, A3 extends AnyConstructor, A4 extends AnyConstructor, A5 extends AnyConstructor, A6 extends AnyConstructor, T>(required: [A1, A2, A3, A4, A5, A6], arg: T) => T extends AnyFunction ? Parameters<T> extends [infer Base] ? Base extends AnyConstructor<InstanceType<A1> & InstanceType<A2> & InstanceType<A3> & InstanceType<A4> & InstanceType<A5> & InstanceType<A6>, A1 & A2 & A3 & A4 & A5 & A6> ? InstanceType<A1> & InstanceType<A2> & InstanceType<A3> & InstanceType<A4> & InstanceType<A5> & InstanceType<A6> extends InstanceType<Base> ? MixinClassConstructor<T> : never : never : never : never;
declare type MixinHelperFunc7 = <A1 extends AnyConstructor, A2 extends AnyConstructor, A3 extends AnyConstructor, A4 extends AnyConstructor, A5 extends AnyConstructor, A6 extends AnyConstructor, A7 extends AnyConstructor, T>(required: [A1, A2, A3, A4, A5, A6, A7], arg: T) => T extends AnyFunction ? Parameters<T> extends [infer Base] ? Base extends AnyConstructor<InstanceType<A1> & InstanceType<A2> & InstanceType<A3> & InstanceType<A4> & InstanceType<A5> & InstanceType<A6> & InstanceType<A7>, A1 & A2 & A3 & A4 & A5 & A6 & A7> ? InstanceType<A1> & InstanceType<A2> & InstanceType<A3> & InstanceType<A4> & InstanceType<A5> & InstanceType<A6> & InstanceType<A7> extends InstanceType<Base> ? MixinClassConstructor<T> : never : never : never : never;
declare type MixinHelperFunc8 = <A1 extends AnyConstructor, A2 extends AnyConstructor, A3 extends AnyConstructor, A4 extends AnyConstructor, A5 extends AnyConstructor, A6 extends AnyConstructor, A7 extends AnyConstructor, A8 extends AnyConstructor, T>(required: [A1, A2, A3, A4, A5, A6, A7, A8], arg: T) => T extends AnyFunction ? Parameters<T> extends [infer Base] ? Base extends AnyConstructor<InstanceType<A1> & InstanceType<A2> & InstanceType<A3> & InstanceType<A4> & InstanceType<A5> & InstanceType<A6> & InstanceType<A7> & InstanceType<A8>, A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8> ? InstanceType<A1> & InstanceType<A2> & InstanceType<A3> & InstanceType<A4> & InstanceType<A5> & InstanceType<A6> & InstanceType<A7> & InstanceType<A8> extends InstanceType<Base> ? MixinClassConstructor<T> : never : never : never : never;
declare type MixinHelperFunc9 = <A1 extends AnyConstructor, A2 extends AnyConstructor, A3 extends AnyConstructor, A4 extends AnyConstructor, A5 extends AnyConstructor, A6 extends AnyConstructor, A7 extends AnyConstructor, A8 extends AnyConstructor, A9 extends AnyConstructor, T>(required: [A1, A2, A3, A4, A5, A6, A7, A8, A9], arg: T) => T extends AnyFunction ? Parameters<T> extends [infer Base] ? Base extends AnyConstructor<InstanceType<A1> & InstanceType<A2> & InstanceType<A3> & InstanceType<A4> & InstanceType<A5> & InstanceType<A6> & InstanceType<A7> & InstanceType<A8> & InstanceType<A9>, A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8 & A9> ? InstanceType<A1> & InstanceType<A2> & InstanceType<A3> & InstanceType<A4> & InstanceType<A5> & InstanceType<A6> & InstanceType<A7> & InstanceType<A8> & InstanceType<A9> extends InstanceType<Base> ? MixinClassConstructor<T> : never : never : never : never;
declare type MixinHelperFunc10 = <A1 extends AnyConstructor, A2 extends AnyConstructor, A3 extends AnyConstructor, A4 extends AnyConstructor, A5 extends AnyConstructor, A6 extends AnyConstructor, A7 extends AnyConstructor, A8 extends AnyConstructor, A9 extends AnyConstructor, A10 extends AnyConstructor, T>(required: [A1, A2, A3, A4, A5, A6, A7, A8, A9, A10], arg: T) => T extends AnyFunction ? Parameters<T> extends [infer Base] ? Base extends AnyConstructor<InstanceType<A1> & InstanceType<A2> & InstanceType<A3> & InstanceType<A4> & InstanceType<A5> & InstanceType<A6> & InstanceType<A7> & InstanceType<A8> & InstanceType<A9> & InstanceType<A10>, A1 & A2 & A3 & A4 & A5 & A6 & A7 & A8 & A9 & A10> ? InstanceType<A1> & InstanceType<A2> & InstanceType<A3> & InstanceType<A4> & InstanceType<A5> & InstanceType<A6> & InstanceType<A7> & InstanceType<A8> & InstanceType<A9> & InstanceType<A10> extends InstanceType<Base> ? MixinClassConstructor<T> : never : never : never : never;
/**
 * This is the `instanceof` analog for the classes created with [[Mixin]] helper. It also provides [typeguard](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards).
 *
 * There's no strict need to use it, as the native `instanceof` is also supported for the mixins created with the [[Mixin]] helper and also provides
 * typeguarding.
 *
 * @param instance Any value, normally an instance of the mixin class
 * @param func The constructor function of the class, created with [[Mixin]]
 */
export declare const isInstanceOf: <T extends AnyConstructor<object, object>>(instance: any, func: T) => instance is T extends AnyConstructor<infer A, object> ? A : unknown;
/**
 * This function allows you to create mixin classes. Mixin classes solves the well-known problem with "classical" single-class inheritance,
 * in which class hierarchy must form a tree. When using mixins, class hierarchy becomes an arbitrary acyclic graph.
 *
 * Another view on mixins is that, if "classical" class is a point (a vertice of the graph), mixin class is an arrow between the points
 * (an edge in the graph, or rather, a description of the edge).
 *
 * Some background information about the mixin pattern can be found [here](https://mariusschulz.com/blog/typescript-2-2-mixin-classes)
 * and [here](https://www.bryntum.com/blog/the-mixin-pattern-in-typescript-all-you-need-to-know/).
 *
 * The pattern, being described here, is the evolution of the previous work, and main advantage is that it solves the compilation error
 * for circular references.
 *
 * Mixin definition. Requirements
 * ------------------------------
 *
 * The pattern looks like:
 *
 *     class Mixin1 extends Mixin(
 *         [],
 *         (base : AnyConstructor) =>
 *
 *         class Mixin1 extends base {
 *             prop1        : string
 *             method1 () : string {
 *                 return this.prop1
 *             }
 *             static static1 : number
 *         }
 *     ){}
 *
 * The core of the definition above is the mixin lambda - a function which receives a base class as its argument and returns a class,
 * extending the base class with additional properties.
 *
 * The example above creates a mixin `Mixin1` which has no requirements. Requirements are the other mixins,
 * which needs to be included in the base class of this mixin.
 *
 * There's also a special type of the requirement,
 * called "base class requirement". It is optional and can only appear as the last argument of the requirements
 * array. It does not have to be a mixin, created with the `Mixin` function, but can be any JS class. This requirement
 * specifies, that the base class of this mixin should be a subclass of the given class (or that class itself).
 *
 * The requirements of the mixin needs to be listed 3 times:
 * - as an array of constructor functions, in the 1st argument of the `Mixin` function
 * - as an instance type intersection, in the 1st type argument for the [[AnyConstructor]] type
 * - as an static type intersection, in the 2nd type argument for the [[AnyConstructor]] type
 *
 * For example, `Mixin2` requires `Mixin1`:
 *
 *     class Mixin2 extends Mixin(
 *         [ Mixin1 ],
 *         (base : AnyConstructor<Mixin1, typeof Mixin1>) =>
 *
 *         class Mixin2 extends base {
 *         }
 *     ){}
 *
 * And `Mixin3` requires both `Mixin1` and `Mixin2` (even that its redundant, since `Mixin2` already requires `Mixin1`,
 * but suppose we don't know the implementation details of the `Mixin2`):
 *
 *     class Mixin3 extends Mixin(
 *         [ Mixin1, Mixin2 ],
 *         (base : AnyConstructor<Mixin1 & Mixin2, typeof Mixin1 & typeof Mixin2>) =>
 *
 *         class Mixin3 extends base {
 *         }
 *     ){}
 *
 * Now, `Mixin4` requires `Mixin3`, plus, it requires the base class to be `SomeBaseClass`:
 *
 *     class SomeBaseClass {}
 *
 *     class Mixin4 extends Mixin(
 *         [ Mixin3, SomeBaseClass ],
 *         (base : AnyConstructor<
 *             Mixin3 & SomeBaseClass, typeof Mixin3 & typeof SomeBaseClass
 *         >) =>
 *
 *         class Mixin4 extends base {
 *         }
 *     ){}
 *
 * As already briefly mentioned, the requirements are "scanned" deep and included only once. Also all minimal classes are cached -
 * for example the creation of the Mixin3 will reuse the minimal class of the Mixin2 instead of creating a new intermediate class.
 * This means that all edges of the mixin dependencies graph are created only once (up to the base class).
 *
 * Requirements can not form cycles - that will generate both compilation error and run-time stack overflow.
 *
 * The typing for the `Mixin` function will provide a compilation error, if the requirements don't match, e.g. some requirement is
 * listed in the array, but missed in the types. This protects you from trivial mistakes. However, the typing is done up to 10 requirements only.
 * If you need more than 10 requirements for the mixin, use the [[MixinAny]] function, which is an exact analog of `Mixin`, but without
 * this type-level protection for requirements mismatch.
 *
 * It is possible to simplify the type of the `base` argument a bit, by using the [[ClassUnion]] helper. However, it seems in certain edge cases
 * it may lead to compilation errors. If your scenarios are not so complex you should give it a try. Using the [[ClassUnion]] helper, the
 * `Mixin3` can be defined as:
 *
 *     class Mixin3 extends Mixin(
 *         [ Mixin1, Mixin2 ],
 *         (base : ClassUnion<typeof Mixin1, typeof Mixin2>) =>
 *
 *         class Mixin3 extends base {
 *         }
 *     ){}
 *
 * Note, that due to this [issue](https://github.com/Microsoft/TypeScript/issues/7342), if you use decorators in your mixin class,
 * the declaration needs to be slightly more verbose (can not use compact notation for the arrow functions):
 *
 *     class Mixin2 extends Mixin(
 *         [ Mixin1 ],
 *         (base : AnyConstructor<Mixin1, typeof Mixin1>) => {
 *             class Mixin2 extends base {
 *                 @decorator
 *                 prop2 : string
 *             }
 *             return Mixin2
 *         }
 *     ){}
 *
 * As you noticed, the repeating listing of the requirements is somewhat verbose. Suggestions how the pattern can be improved
 * are [very welcomed](mailto:nickolay8@gmail.com).
 *
 * Mixin instantiation. Mixin constructor. `instanceof`
 * --------------------------------
 *
 * You can instantiate any mixin class just by using its constructor:
 *
 *     const instance1 = new Mixin1()
 *     const instance2 = new Mixin2()
 *
 * As explained in details [here](https://mariusschulz.com/blog/typescript-2-2-mixin-classes), mixin constructor should accept variable number of arguments
 * with the `any` type. This is simply because the mixin is supposed to be applicable to any other base class, which may have its own type
 * of the constructor arguments.
 *
 *     class Mixin2 extends Mixin(
 *         [ Mixin1 ],
 *         (base : AnyConstructor<Mixin1, typeof Mixin1>) => {
 *             class Mixin2 extends base {
 *                 prop2 : string
 *
 *                 constructor (...args: any[]) {
 *                     super(...args)
 *                     this.prop2 = ''
 *                 }
 *             }
 *             return Mixin2
 *         }
 *     ){}
 *
 * In other words, its not possible to provide any type-safety for mixin instantiation using regular class constructor.
 *
 * However, if we change the way we create class instances a little, we can get the type-safety back. For that,
 * we need to use a "uniform" class constructor - a constructor which has the same form for all classes. The [[Base]] class
 * provides such constructor as its static [[Base.new|new]] method. The usage of `Base` class is not required - you can use
 * any other base class.
 *
 * The `instanceof` operator works as expected for instances of the mixin classes. It also takes into account all the requirements.
 * For example:
 *
 *     const instance2 = new Mixin2()
 *
 *     const isMixin2 = instance2 instanceof Mixin2 // true
 *     const isMixin1 = instance2 instanceof Mixin1 // true, since Mixin2 requires Mixin1
 *
 * See also [[isInstanceOf]].
 *
 * "Manual" class derivation
 * --------------------------------
 *
 * You have defined a mixin using the `Mixin` function. Now you want to apply it to some base class to get the "specific" class to be able
 * to instantiate it. As described above - you don't have to, you can instantiate it directly.
 *
 * Sometimes however, you still want to derive the class "manually". For that, you can use static methods `mix` and `derive`, available
 * on all mixins.
 *
 * The `mix` method provides a direct access to the mixin lambda. It does not take requirements into account - that's the implementor's responsibility.
 * The `derive` method is something like "accumulated" mixin lambda - mixin lambda with all requirements.
 *
 * Both `mix` and `derive` provide the reasonably typed outcome.
 *
 *     class Mixin1 extends Mixin(
 *         [],
 *         (base : AnyConstructor) =>
 *
 *         class Mixin1 extends base {
 *             prop1        : string
 *         }
 *     ){}
 *
 *     class Mixin2 extends Mixin(
 *         [ Mixin1 ],
 *         (base : AnyConstructor<Mixin1, typeof Mixin1>) =>
 *
 *         class Mixin2 extends base {
 *             prop2        : string
 *         }
 *     ){}
 *
 *     const ManualMixin1 = Mixin1.mix(Object)
 *     const ManualMixin2 = Mixin2.mix(Mixin1.mix(Object))
 *
 *     const AnotherManualMixin1 = Mixin1.derive(Object)
 *     const AnotherManualMixin2 = Mixin2.derive(Object)
 *
 * Generics
 * --------
 *
 * Using generics with mixins is tricky because TypeScript does not have higher-kinded types and type inference for generics. Still some form
 * of generic arguments is possible, using the interface merging trick.
 *
 * Here's the pattern:
 *
 * ```ts
 * class Duplicator<Element> extends Mixin(
 *     [],
 *     (base : AnyConstructor) =>
 *
 *     class Duplicator extends base {
 *         Element                 : any
 *
 *         duplicate (value : this[ 'Element' ]) : this[ 'Element' ][] {
 *             return [ value, value ]
 *         }
 *     }
 * ){}
 *
 * interface Duplicator<Element> {
 *     Element : Element
 * }
 *
 * const dup = new Duplicator<boolean>()
 *
 * dup.duplicate('foo') // TS2345: Argument of type '"foo"' is not assignable to parameter of type 'boolean'.
 * ```
 *
 * In the example above, we've defined a generic argument `Element` for the outer mixin class, but in fact, that argument is not used anywhere in the
 * nested class definition in the mixin lambda. Instead, in the nested class, we define a property `Element`, which plays the role of the
 * generic argument.
 *
 * Mixin class methods then can refer to the generic type as `this[ 'Element' ]`.
 *
 * The generic arguments of the outer and nested classes are tied together in the additional interface declaration, which, by TypeScript rules
 * is merged together with the class definition. In this declaration, we specify that property `Element` has type of the `Element` generic argument.
 *
 * Limitations
 * ---------
 *
 * The most important limitation we found (which affect the old pattern as well) is the compilation error, which will be issued for
 * the private/protected methods, when compiling with declarations emitting (*.d.ts files generation).
 *
 * This is a [well-known problem](https://github.com/microsoft/TypeScript/issues/35822) in the TypeScript world – the *.d.ts files do not represent
 * the internal data structures of the TypeScript compiler well. Instead they use some simplified syntax, optimized for human editing.
 * This is why the compiler may generate false positives in the incremental compilation mode – it uses *.d.ts files internally.
 *
 * This can be a show-stopper for the people that use declaration files (usually for publishing). Keep in mind though, that you can always
 * publish actual TypeScript sources along with the generated JavaScript files, instead of publishing JavaScript + declarations files.
 *
 */
export declare const Mixin: MixinHelperFunc0 & MixinHelperFunc1 & MixinHelperFunc2 & MixinHelperFunc3 & MixinHelperFunc4 & MixinHelperFunc5 & MixinHelperFunc6 & MixinHelperFunc7 & MixinHelperFunc8 & MixinHelperFunc9 & MixinHelperFunc10;
/**
 * This is an exact analog of the [[Mixin]] function, but without type-level protection for requirements mismatch.
 * It supports unlimited number of requirements.
 */
export declare const MixinAny: MixinHelperFuncAny;
export declare type PrototypeOf<A> = A;
export {};
