import { ClassUnion } from "../class/Mixin.js";
declare const XmlElement_base: Pick<{
    new (...input: any[]): {};
}, "prototype"> & (new (...args: any[]) => {}) & {
    mix?: <TT extends ClassUnion<typeof import("../class/Mixin.js").ZeroBaseClass, typeof import("../class/Mixin.js").ZeroBaseClass, typeof import("../class/Mixin.js").ZeroBaseClass, typeof import("../class/Mixin.js").ZeroBaseClass, typeof import("../class/Mixin.js").ZeroBaseClass, typeof import("../class/Mixin.js").ZeroBaseClass, typeof import("../class/Mixin.js").ZeroBaseClass, typeof import("../class/Mixin.js").ZeroBaseClass, typeof import("../class/Mixin.js").ZeroBaseClass, typeof import("../class/Mixin.js").ZeroBaseClass>>(base: TT) => TT extends (new (...input: any[]) => infer BI) & infer BS ? (new (...input: any[]) => BI & {}) & BS & {
        new (...input: any[]): {};
    } : never;
    derive?: <TT_1 extends (new (...input: any[]) => object) & object>(base: TT_1) => TT_1 extends (new (...input: any[]) => infer BI_1) & infer BS_1 ? (new (...input: any[]) => BI_1 & import("../class/Mixin.js").ZeroBaseClass & {}) & BS_1 & (new (...input: any[]) => import("../class/Mixin.js").ZeroBaseClass) & {
        prototype: import("../class/Mixin.js").ZeroBaseClass;
    } & {
        new (...input: any[]): {};
    } : never;
};
export declare class XmlElement extends XmlElement_base {
}
export {};
