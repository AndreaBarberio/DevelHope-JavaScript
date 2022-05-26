const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

function calculateSalary(role) {
  switch (role) {
    case `ceo`: return `lo stipendio del Ceo è di 2200 euro`;
    case `manager`: return `lo stipendio del Manager è di 1800 euro`;
    case `cto`: return `lo stipendio del cto è di 1800 euro`;
    case `developer`: return `lo stipendio del Developer è di 1500 euro`;
    default: return `lo stipendio di base è 1000`;
  }
}
 // ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);