const teamGenerationStation = team => {

  const managerGeneration = manager => {
      return `
        <div class="card teamcard-card">
        <div class="teamcard-header">
            <h3 class="teamcard-title">${manager.getName()}</h3>
            <h5 class="teamcard-title">${manager.getPosition()}</h5>
        </div>
        <div class="teamcard-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: ${manager.getEmail()}</li>
            <li class="list-group-item">Office Suite: ${manager.getOfficeNumber()}</li>
          </ul>
        </div>

        </div>
      `;
  };

  const engineerGeneration = engineer => {
      return `
        <div class="card teamcard-card">
        <div class="teamcard-header">
          <h3 class="teamcard-title">${engineer.getName()}</h3>
          <h5 class="teamcard-title">${engineer.getPosition()}</h5>
        </div>

        <div class="teamcard-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: ${engineer.getEmail()}</li>
            <li class="list-group-item">GitHub username: ${engineer.getGithubuser()}</li>
        </ul>
        </div>

        </div>
      `;
  };

  const internGeneration = intern => {
      return `
        <div class="card teamcard-card">
        <div class="teamcard-header">
            <h3 class="teamcard-title">${intern.getName()}</h3>
            <h5 class="teamcard-title">${intern.getPosition()}</h5>
        </div>

        <div class="teamcard-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: ${intern.getEmail()}</li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
        </div>

        </div>
      `;
  };

  const html = [];

  html.push(team 
      .filter(employee => employee.getPosition() === "Manager")
      .map(manager => managerGeneration(manager))
  );
  html.push(team
      .filter(employee => employee.getPosition() === "Engineer")
      .map(engineer => engineerGeneration(engineer))
      .join("")
  );
  html.push(team
      .filter(employee => employee.getPosition() === "Intern")
      .map(intern => internGeneration(intern))
      .join("")
  );

  return html.join("");
   
}

module.exports = team => {

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Meet the Team!</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/c17b4fdab5.js" crossorigin="anonymous"></script>
    </head>
    
    <body>
    
    <div class="container-fluid">
      <div class="row">
      <div class="col-12 jumbotron mb-3 title-header">
        <h1 class="text-center">The Squad</h1>
      </div>
      </div>
    </div>
    
    <div class="container">
      <div class="row">
      <div class="teamcard-grid col-12 d-flex justify-content-center">
        ${teamGenerationStation(team)}
      </div>
      </div>
    </div>
    </body>
    </html>
 `;
};