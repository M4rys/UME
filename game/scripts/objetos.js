class Objeto {
    constructor() {
        this.transform = null
        this.rigidbody = null
        this.boxcolider = null
        this.movimento = null
    }

    notifyAll(command) {
        if (this.transform !== null) this.transform.event(command)
        if (this.rigidbody !== null) this.rigidbody.event(command)
        if (this.boxcolider !== null) this.boxcolider.event(command)
        if (this.movimento !== null) this.movimento.event(command)
    }

    addComponent(component) {
        if (component.tag == "transform") this.transform = component
        else if (component.tag == "rigidbody") this.rigidbody = component
        else if (component.tag == "boxcolider") this.boxcolider = component
        else if (component.tag == "movimento") this.movimento = component
    }

    addImg(img) {
        this.img = img
    }

    update() {
        if (this.transform === null) return;

        //movimento
        if (this.movimento !== null) {
            this.movimento.update()
        }

        //rigidbody
        if (this.rigidbody !== null) {
            this.rigidbody.gravidade()
        }

        // this.acelerarX(this.walkingDirection)

        // fisica.aplicarGravidade(this)
        // fisica.aplicarAtrito(this)

        // this.provXY = [this.x, this.y]

        // this.x += this.velocidade.x + 0.5 * this.aceleration.x
        // this.y += this.aceleration.y

        // //retirar depois
        // if (this.x > 960) this.x = 0
        // if (this.x < 0) this.x = 960
    }
}

export class Item extends Objeto {
    constructor(type, id) {
        super()

        this.type = type
        this.id = id
    }
}

export class Personagem extends Objeto {
    constructor(id) {
        super()

        this.type = "character"
        this.id = id
    }
}

export default { Item, Personagem }