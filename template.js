module.exports = function createPage(employees) {

    const employeeCards = employees.map(employee =>
        
        `
        <div>
        <li> ${employee.name} </li>
        <li> ${employee.id} </li>
        <li> ${employee.email} </li>
        
        </div>`
        )

    return 

    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${employeeCards}
    </body>
    </html>`
}
