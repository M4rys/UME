class Transform {
    constructor(objeto, x, y, sx, sy) {
        this.objeto = objeto
        
        this.tag = "transform"
        this.provX = x
        this.provY = y
        this.x = x
        this.y = y

        this.sx = sx
        this.sy = sy
    }

    event(command) {

    }

    inRangeX(value) {
        if (this.provX <= value && value <= this.x) return true;
        return false
    }

    inRangeY(value) {
        if (this.provY <= value && value <= this.y) return true;
        return false
    }

    setX(x) {
        this.provX = this.x
        this.x = x
    }

    setY(y) {
        this.provY = this.y
        this.y = y
    }

    resetX() {
        this.x = this.provX
    }

    resetY() {
        this.y = this.provY
    }
}

export default Transform