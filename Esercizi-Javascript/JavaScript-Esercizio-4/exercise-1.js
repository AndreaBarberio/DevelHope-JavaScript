// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('base');


function calculateSalary(role) {
  if (role === `ceo`) {
    return `lo stipendio del ${role} è di 2200 euro`;
  }

  if (role === `manager` || role === `cto`) {
    return `lo stipendio del ${role} è di 1800 euro`;
  }
  if (role === `developer`) {
    return `lo stipendio del ${role} è di 1500 euro`;
  }
  else {
    return `lo stipendio base è di 1000 euro` ;
  }
}

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);