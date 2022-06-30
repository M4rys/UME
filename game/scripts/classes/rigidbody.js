import clock from "../clock.js"
import { Constants } from "../utils.js"

class RigidBody {
    constructor(objeto) {
        this.objeto = objeto

        this.tag = "rigidbody"
        this.time = clock.time
    }

    event(command) {
        if (command.tag == 'collisionEnter') {
            this.OnCollision()
        }
    }

    OnCollision() {
        this.time = clock.time
    }

    gravidade() {
        if (this.objeto.movimento === null) return;
        if (this.objeto.boxcolider !== null && this.objeto.boxcolider.onCollision) {
            return this.OnCollision()
        }

        let v = Constants.gravidade * (clock.time - this.time)
        this.objeto.movimento.acelerarY(v)
    }
}

export default RigidBody

/*

export class RigidBody {
    constructor() {
        this.tag = "rigidbody"

        this.velocidade = { x: 0, y: 0 }
        this.aceleration = { x: 0, y: 0 }
        this.time = 0

        this.onGround = true
        this.walkingDirection = 0
        this.OnCollisionEnter = this.OnCollisionEnter.bind(this)
    }

    OnCollisionGround() {
        this.resetMovementY();
        this.onGround = true
    }

    resetMovementX() {
        //this.x = this.provXY[0]

        this.aceleration.x = 0
    }

    resetMovementY() {
        this.y = this.provXY[1]

        this.aceleration.y = 0
        this.time = fisica.time
    }

    acelerarX(aceleration_x) {
        this.aceleration.x = aceleration_x
    }

    acelerarY(aceleration_y) {
        this.aceleration.y += aceleration_y
    }

    pular() {
        if (!this.onGround) return;

        this.resetMovementY()
        this.acelerarY(-fisica.aceleration_y)
        this.onGround = false
    }

    andar(direction) {
        if (direction == 0) {
            //logica de parar de andar

            return this.walkingDirection = 0;
        }
        if (this.walkingDirection != 0) return;

        //direita
        if (direction > 0) {
            //if (this.aceleration.x < 0) this.aceleration.x *= -1
            this.acelerarX(fisica.aceleration_x)
            this.walkingDirection = fisica.aceleration_x
        //esquerda
        } else if (direction < 0) {
            //if (this.aceleration.x > 0) this.aceleration.x *= -1
            this.acelerarX(-fisica.aceleration_x)
            this.walkingDirection = -fisica.aceleration_x
        }
    }

    updatePos() {
        this.acelerarX(this.walkingDirection)

        fisica.aplicarGravidade(this)
        fisica.aplicarAtrito(this)

        this.provXY = [this.x, this.y]

        this.x += this.velocidade.x + 0.5 * this.aceleration.x
        this.y += this.aceleration.y

        //retirar depois
        if (this.x > 960) this.x = 0
        if (this.x < 0) this.x = 960
    }

}

*/