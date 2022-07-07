const Employee = require('./Employee')

class Manager extends Employee{
    constructor (name, id, email, phone) {
        super(name, id, email);
        this.phone = phone
    }

    getPhone() {
        return this.phone
    }

    
    getRoble() {
        return "Manager"
    }
}

module.exports = Manager