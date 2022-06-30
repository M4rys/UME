import { Constants } from '../utils.js'

class Movimento {
    constructor(objeto) {
        this.objeto = objeto
        
        this.tag = "movimento"
        this.onGround = false
        this.walkingDirection = 0

        this.velocidade = { x: 0, y: 0 }
        this.aceleration = { x: 0, y: 0 }
    }

    event(command) {
        if (command.tag == 'collisionEnter') {
            this.OnCollisionEnter(command.collision)
        } else if (command.tag == 'collisionExit') {
            this.OnCollisionExit(command.collision)
        }
    }

    OnCollisionEnter(objeto) {
        if (this.objeto.transform === null) return;
        if (objeto.transform === null) return;
        
        if (objeto.tipo == "ground") {
            this.aceleration.y = Constants.aceleration_y
            //this.objeto.transform.setY(this.objeto.transform.y)

            this.onGround = true
        }
    }

    OnCollisionExit(objeto) {
        if (objeto.tipo == "ground") {
            this.onGround = false
        }
    }

    resetMovementX() {
        this.aceleration.x = 0
    }


    acelerarX(aceleration_x) {
        this.aceleration.x = aceleration_x
    }

    acelerarY(aceleration_y) {
        this.aceleration.y += aceleration_y
    }

    pular() {
        if (!this.onGround) return;

        this.aceleration.y = 0
        this.acelerarY(-Constants.aceleration_y)
        this.onGround = false
    }

    andar(direction) {
        if (direction == 0) return this.walkingDirection = 0;
        if (this.walkingDirection != 0) return;

        //esquerda
        if (direction < 0) {
            this.acelerarX(-Constants.aceleration_x)
            this.walkingDirection = -Constants.aceleration_x
        //direita
        } else if (direction > 0) {
            this.acelerarX(Constants.aceleration_x)
            this.walkingDirection = Constants.aceleration_x
        }
    }

    update() {
        const transform = this.objeto.transform

        this.acelerarX(this.walkingDirection)

        //atrito
        let atrito = (this.onGround) ? Constants.atrito : Constants.resistenciaAr

        this.aceleration.x += this.velocidade.x * atrito
        this.velocidade.x += this.aceleration.x

        //limitar velocidade
        if (this.velocidade.x > 0)
            this.velocidade.x = Math.min(this.velocidade.x, Constants.limit_speed)
        else
            this.velocidade.x = Math.max(this.velocidade.x, -Constants.limit_speed)

        transform.setX(transform.x + this.velocidade.x + 0.5 * this.aceleration.x)

        if (this.objeto.boxcolider !== null) {
            transform.setY(transform.y + Math.min(this.objeto.boxcolider.distCollision.y, this.aceleration.y))
        } else {
            transform.setY(transform.y + this.aceleration.y)
        }


        //retirar depois
        if (transform.x > 960) transform.setX(0)
        if (transform.x < 0) transform.setX(960)

        //if (objeto.transform.y > (512 - 64)) objeto.transform.y = 0
        //if (objeto.transform.y < 0) objeto.transform.y = (512 - 64)
    }
}

export default Movimento