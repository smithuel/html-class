const employee1 = { firstName: 'Smith', lastName: 'Smith', employeeNo: '00001'};
const employee2 = { firstName: 'Daniel', lastName: 'James', employeeNo: '00002'};
const employee3 = { firstName: 'Richard', lastName: 'Gabriel', employeeNo: '00003'};

{
  // method1 (popular or common)
  const numbers = []; //array
  const scores = [20, 50, 80, 60, 56];
  // scores[4] = scores[-1] = 56
}

{
  // method2
  const numbers = new Array(); // const colors = [];
  const scores = new Array(20, 50, 80, 60, 56) // const scores = [20, 50, 80, 60, 56];
  const employees = [
    { firstName: 'Smith', lastName: 'Smith', employeeNo: '00001'},
    { firstName: 'Daniel', lastName: 'James', employeeNo: '00002'},
    { firstName: 'Richard', lastName: 'Gabriel', employeeNo: '00003'},
  ]

  logger(employees[0]);
  logger(employees[3]);
  logger(employees.length);
  employees.push({firstName: 'Felix', lastName: 'Paul', employeeNo: '00004' });
  logger(employees.length);
  logger(employees[3]);
  logger(employees)
  
  logger(employees.pop())
  logger(employees)

  logger("--------------------------------------------------")
  logger([employees])
  logger("--------------------------------------------------")
  logger("****************************************************************************************************")
  logger([...employees])
  logger("****************************************************************************************************")
  
  logger("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
  const employees2 = [...employees]; //copied the value
  logger("Employees2 before splice")
  logger(employees2)
  employees2.splice(0,2)
  logger("Employees2 after splice")
  logger(employees2)
  logger(employees)
  logger("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
  
  logger("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
  const employees3 = employees; //copied the reference 
  logger("Employees3 before splice")
  logger(employees3)
  employees3.splice(0,2)
  logger("Employees3 after splice")
  logger(employees3)
  logger(employees)
  logger("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

  const numbers2 = [2, 5, 7, 9, 10, 11, 15, 20]
  logger(numbers2)
  numbers2.splice(numbers2.length - 1, 1,  22, 45, 28);
  logger(numbers2)

  for(let i = 0; i < numbers2.length; i++) {
    logger(numbers2[i])
  }


  const employees4 = [
    { firstName: 'Smith', lastName: 'Smith', employeeNo: '00001'},
    { firstName: 'Daniel', lastName: 'James', employeeNo: '00002'},
    { firstName: 'Richard', lastName: 'Gabriel', employeeNo: '00003'},
  ]

  for(let i = 0; i < employees4.length; i++) {
    logger(employees4[i])
  }

  const header = "<thead><tr><th>Employee No</th><th>First Name</th><th>Last Name</th></tr></thead>"
  let table = `<table>${header}<tbody>`
  for(let i = 0; i < employees4.length; i++) {
    const emp = employees4[i];
    table += `<tr><td>${emp.employeeNo}</td><td>${emp.firstName}</td><td>${emp.lastName}</td></tr>`
  }
  table += "</tbody></table>";
  logger(table, false);


  employees4.forEach(employee => logger(employee));
  logger(numbers2);
  logger(numbers2.filter(n  =>  n % 2 === 0));
}
