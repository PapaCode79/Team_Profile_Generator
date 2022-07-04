const Intern = require('../lib/Intern')

test('test name of intern', () => {
    const name = 'Badara'
    const newIntern = new Intern(name)
    expect(newIntern.name).toBe(name)
})