const Engineer = require('../lib/Engineer')

test('test name, id,  email, github of Engineer', () => {
    
    //const github= 'Awa20'
    const newEngineer = new Engineer('Awa', 20, 'Awa@email.com', 'Awa20')
    expect(newEngineer.name).toBe('Awa')
    expect(newEngineer.id).toBe(20)
    expect(newEngineer.email).toBe('Awa@email.com')
    expect(newEngineer.github).toBe('Awa20')
    // expect(newEngineer.getGitHub).toBe(github)
})