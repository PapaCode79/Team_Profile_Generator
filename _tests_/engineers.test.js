const Engineer = require('../lib/Engineer')

test('test name of engineer', () => {
    const name = 'Dia'
    const newEngineer = new Engineer(name)
    expect(newEngineer.name).toBe('Dia')
})