const Intern = require('../lib/Intern')

test('test name,id, email, school of intern', () => {
    const newIntern = new Intern('Dora', 20, 'Dora@email.com', 'UCB')
    expect(newIntern.name).toBe('Dora')
    expect(newIntern.Id).toBe('20')
    expect(newIntern.email).toBe('Dora@email.com')
    expect(newIntern.school).toBe('UCB')
})