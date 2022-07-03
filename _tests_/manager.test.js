const Manager = require('../lib/Manager')

test('test name of manager', () => {
    const name = 'Awa'
    const newManager = new Manager(name)
    expect(newManager.name).toBe('Awa')
})