const Engineer = require('../lib/Engineer')

test('test name, id,  email, github of Engineer', () => {
    
    //const github= 'joe7'
    const newEngineer = new Engineer('Joe', 7, 'joe@email.com', 'joe7')
    expect(newEngineer.name).toBe('Joe')
    expect(newEngineer.id).toBe(7)
    expect(newEngineer.email).toBe('joe@email.com')
    // expect(newEngineer.getGitHub).toBe(github)
})