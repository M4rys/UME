class Clock {
    constructor() {
        this.time = 0
    }

    inc() {
        this.time += 0.001
    }
}

export default new Clock()