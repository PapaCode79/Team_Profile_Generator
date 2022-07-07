const Manager = require('../lib/Manager')

test('test name, id, email, phone of manager', () => {
    const newManger = new Manager('Moussa', 20, 'Moussa@email.com', '703-627')
    expect(newManager.name).toBe('Moussa')
    expect(newManager.id).toBe(20)   
    expect(newManager.email).toBe('Moussa@email.com')
    expect(newManger.phone).toBe('703-627')
})