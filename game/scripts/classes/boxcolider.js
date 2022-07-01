class BoxColider {
    constructor(objeto) {
        this.tag = "boxcolider"
    
        this.objeto = objeto

        // estado indicativo de colisão
        this.distCollision = { x: 1000, y: 1000 }
        this.onCollision = false
        this.collisionObject = null
    }

    event(command) {
        
    }

    // Houve uma colisão
    OnCollisionEnter(collision) {
        if (this.onCollision) return;

        this.onCollision = true
        this.collisionObject = collision

        this.objeto.notifyAll({ tag: 'collisionEnter', collision: collision })
    }

    OnCollisionExit() {
        this.onCollision = false
        
        this.objeto.notifyAll({ tag: 'collisionExit', collision: this.collisionObject })

        this.collisionObject = null
    }

    updateCollision(others) {
        if (this.objeto.transform === null) return;

        const transform = this.objeto.transform

        //resetar distancia
        this.distCollision.y = 1000

        //pontos deste objeto
        const posY = transform.y + transform.sy / 2

        //verificar colisão com todos os itens
        for (const itemId in others) {
            const item = others[itemId]

            if (item.boxcolider === null || item.transform === null) continue;

            //pontos do outro objeto
            const halfOx = item.transform.sx / 2
            const posOY = item.transform.y - item.transform.sy / 2

            //objetos estão alinhados horizontalmente
            if(transform.x >= (item.transform.x - halfOx) && transform.x <= (item.transform.x + halfOx)) {
                //este objeto está acima de outro
                if (posY <= posOY) {
                    this.distCollision.y = Math.min(posOY - posY, this.distCollision.y)

                    //colidiu
                    if (posY + 1 > posOY) return this.OnCollisionEnter(item);
                }
            }
        }

        if (this.onCollision) this.OnCollisionExit();
    }
}

export default BoxColider