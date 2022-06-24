class BoxColider {
    constructor(objeto, sx, sy) {
        this.tag = "boxcolider"
    
        this.objeto = objeto
    }

    event(command) {
        
    }

    OnCollisionEnter(collision) {
        if (collision.type == "ground") {
            this.objeto.notifyAll({ tag: 'collision', collision: collision })
        }
    }

    checkCollision(other) {
        if (other.boxcolider === null) return false;
        if (this.objeto.transform === null || other.transform === null) return false;

        const transform = this.objeto.transform
        const halfOx = other.transform.sx / 2

        if(transform.x >= (other.transform.x - halfOx) && transform.x <= (other.transform.x + halfOx)) {
            if (transform.inRangeY(other.transform.y)) {
                return true
            }
        }

        return false
    }
}

export default BoxColider