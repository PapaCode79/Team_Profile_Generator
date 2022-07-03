const Employee = require('../lib/Employee')

test('test name of employee', () => {
    const name = 'Joe'
    const newEmployee = new Employee(name)
    expect(newEmployee.name).toBe('Joe')
})

test('test id of employee', () => {
    const id = 7
    const newEmployee = new Employee(id)
    expect(newEmployee.id).toBe(7)
})