class Objeto {
    constructor() {
        //modulos
        this.transform = null
        this.rigidbody = null
        this.boxcolider = null
        this.movimento = null
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

    notifyAll(command) {
        if (this.transform !== null) this.transform.event(command)
        if (this.rigidbody !== null) this.rigidbody.event(command)
        if (this.boxcolider !== null) this.boxcolider.event(command)
        if (this.movimento !== null) this.movimento.event(command)
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
    }
}

export class Item extends Objeto {
    constructor(tipo, id) {
        super()

        this.tipo = tipo
        this.id = id
    }
}

export class Personagem extends Objeto {
    constructor(id) {
        super()

        this.tipo = "character"
        this.id = id
    }
}

export default { Item, Personagem }