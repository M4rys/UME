class KeyboardListener {

    constructor() {
        this.observers = []

        this.eventHandler = this.eventHandler.bind(this)
        // descobre qual tecla o usuario esta apertando para mexer o personagem
        document.addEventListener("keyup",  (event) => this.eventHandler(event, "keyUp"))
        document.addEventListener("keydown", (event) => this.eventHandler(event, "keyDown"))
        document.addEventListener("mouseup",  (event) => this.eventHandler(event, "keyUp"))
        document.addEventListener("mousedown", (event) => this.eventHandler(event, "keyDown"))
    }

    subscribe(callback) {
        this.observers.push(callback)
    }

    notifyAll(key) {
        for (const cb of this.observers) {
            cb(key)
        }
    }

    eventHandler(event, tipo) {
        let command

        if (event.key){
            command = { key: event.key, tipo: tipo }
        } else {
            command = { key: ' ', tipo: tipo }
        }

        this.notifyAll(command)
    }
}

export default KeyboardListener