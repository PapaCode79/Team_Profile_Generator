const Employee = require('../lib/Employee')

test('test name, id,  email of employee', () => {
    
    const newEmployee = new Employee('Joe', 7, 'joe@email.com')
    expect(newEmployee.name).toBe('Joe')
    expect(newEmployee.id).toBe(7)
    expect(newEmployee.email).toBe('joe@email.com')
})

