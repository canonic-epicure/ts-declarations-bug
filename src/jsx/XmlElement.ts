import { Base } from "../class/Base.js"
import { ClassUnion, Mixin } from "../class/Mixin.js"

//---------------------------------------------------------------------------------------------------------------------

export class XmlElement extends Mixin(
    [ Base ],
    (base : ClassUnion<typeof Base>) =>

    class XmlElement extends base {
    }
){}


export class XmlElement2 extends Mixin(
    [ Base ],
    (base : ClassUnion<typeof Base>) => {

    class XmlElement2 extends base {
    }

    return XmlElement2
}){}

