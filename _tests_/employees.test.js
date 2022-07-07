const Employee = require('../lib/Employee')

test('test name, id,  email of employee', () => {
    
    const newEmployee = new Employee('Dia', 7, 'Dia@email.com')
    expect(newEmployee.name).toBe('Dia')
    expect(newEmployee.id).toBe(7)
    expect(newEmployee.email).toBe('Dia@email.com')
})

