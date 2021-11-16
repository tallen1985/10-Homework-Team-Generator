const fs = require('fs')

const writeToFile = team => {
    const file = './dist/index.html';
    const html = generateHTML(team)

    fs.writeFile(file, html, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(roster(team))
        } 
    })
}

const roster = (team) => {
    let rosterString = 'Team roster created with ';
    for (let x = 0; x < team.length; x++) {
        if (x == team.length - 1) {
            rosterString += `and ${team[x].name}`
        } else {
            rosterString += `${team[x].name}, `
        }
    }
    return rosterString;
}

const employeeCard = (team) => {
    let htmlCards = ''
    let icon = '';
    let special = ''
    for (const member of team) {
        if (member.getRole() === 'Manager') {
            icon = '<i class="fas fa-mug-hot"></i>'
            special = `Office No: ${member.officeNumber}`
        } else if (member.getRole() === 'Intern') {
            icon = '<i class="fas fa-user-graduate"></i>'
            special = `School: ${member.school}`
        } else {
            icon = '<i class="fas fa-glasses"></i>';
            special = `GitHub: <a href="https://www.github.com/${member.gitHub}">${member.gitHub}</a>`
        }
        htmlCards += `<div class="card m-2 shadow" style="width: 18rem;">
        <div class="card-body">
              <h5 class="card-title bg-dark text-light border rounded text-center">${member.getRole()}</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><h3>${icon} - ${member.name}</h3></li>
                <li class="list-group-item"><a href="mailto:${member.getEmail()}">${member.getEmail()}</a>
                <li class="list-group-item">${special}</li>
                <li class="list-group-item">ID: ${member.id}</li>
              </ul>
            </div>
          </div>
      </div>`
    }
    return htmlCards;
}

const generateHTML = (team) => {
    return  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
    </head>
    <body class="bg-info">
        <header class="container col-10 mx-auto bg-light text-center my-5 border rounded">
            <h1>${team[0].teamName}</h1>
        </header>
        <main class="d-flex col-10 mx-auto flex-wrap justify-content-around">
    
        ${employeeCard(team)}
    
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
    </html>`;
}


module.exports = {
    writeToFile,
    generateHTML
}