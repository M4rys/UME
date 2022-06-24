import { Item, Personagem } from './objetos.js'
import Transform from './classes/transform.js'
import RigidBody from './classes/rigidbody.js'
import BoxColider from './classes/boxcolider.js'
import Movimento from './classes/movimento.js'
import clock from "./clock.js"

class Game {
    constructor() {
        this.state = {
            personagens: {},
            itens: {},
            current: '0'
        }

        this.OnKeyPress = this.OnKeyPress.bind(this)
    }

    OnKeyPress(command) {
        const personagem = this.state.personagens[this.state.current]
        if (!personagem) return;
        if (personagem.movimento === null) return;

        const { key, tipo } = command

        const functions = this.moverPersonagem(tipo)
        const keyFunction = functions[key]

        if (keyFunction) {
            keyFunction({ id: this.state.current })
        }
    }

    criarPersonagem(command) {
        const id = command.id
        const x = command.x
        const y = command.y

        const personagem = new Personagem(id)
        personagem.addComponent(new Transform(personagem, x, y, 64, 64))
        personagem.addComponent(new RigidBody(personagem))
        personagem.addComponent(new BoxColider(personagem))
        personagem.addComponent(new Movimento(personagem))

        this.state.personagens[id] = personagem
    }

    deletarPersonagem(command) {
        const id = command.id

        delete this.state.personagens[id]
    }

    moverPersonagem(tipo) {
        const keyUp = {
            a: (command) => {
                const person = this.state.personagens[command.id]
                person.movimento.andar(0)
            },
            d: (command) => {
                const person = this.state.personagens[command.id]
                person.movimento.andar(0)
            },
        }

        const keyDown = {
            ' ': (command) => {
                const person = this.state.personagens[command.id]
                person.movimento.pular()
            },
            a: (command) => {
                const person = this.state.personagens[command.id]
                person.movimento.andar(-1)
            },
            d: (command) => {
                const person = this.state.personagens[command.id]
                person.movimento.andar(1)
            },
        }

        return { keyUp, keyDown }[tipo]
    }

    criarObjeto(command) {
        const item = new Item(command.tipo, command.id)
        item.addComponent(new Transform(item, command.x, command.y, 128, 20))
        item.addComponent(new BoxColider(item, command.x, command.y))

        this.state.itens[command.id] = item
    }

    deletarObjeto(command) {
        const id = command.id

        delete this.state.itens[id]
    }

    update() {
        clock.inc()

        for (const personagemId in this.state.personagens) {
            const personagem = this.state.personagens[personagemId]

            // verificar colisões
            if (personagem.transform !== null && personagem.boxcolider !== null) {

                for (const itemId in this.state.itens) {
                    const item = this.state.itens[itemId]

                    if (personagem.boxcolider.checkCollision(item)) {
                        personagem.boxcolider.OnCollisionEnter(item)
                    }
                }

                if (personagem.transform.y > 512) {
                    this.deletarPersonagem({ id: this.state.current })
                    this.criarPersonagem({ id: this.state.current, x: 128, y: 100 })
                }
            }

            personagem.update()
        }
        
        // for (const p1Id in this.state.personagens) {
        //     for (const p2Id in this.state.personagens) {
        //     const personagem = this.state.personagens[personagemId]

        //     personagem.update()
        // }
    }
}

export default Game