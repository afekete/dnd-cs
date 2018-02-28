class Modifier {
    constructor(name, type, operator, value) {
        this.name = name
        this.type = type
        this.operator = operator
        this.value = value
        Object.freeze(this)
    }
}

export default Modifier