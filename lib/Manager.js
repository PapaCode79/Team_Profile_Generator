const Employee = require('./Employee')

class Manager extends Employee{
    constructor (name, id, email, phone) {
        super(name, id, email);
        this.phone = phone
    }
    getRoble() {
        return "Manager"
    }
}

module.export = Manager