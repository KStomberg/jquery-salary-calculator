$(document).ready(function () {
  console.log('JS AND JQ Ready');
  submitButton();
});

let employees = []; // List of all employees

let totalYearlyCost = 0; // Total cost of all employee.annualSalary values

function submitButton() {
  $('#submitButton').on('click', function () {
    let firstNameInput = $('#firstName').val();
    let lastNameInput = $('#lastName').val();
    let idNumberInput = Number($('#idNumber').val());
    let jobTitleInput = $('#jobTitle').val();
    let annualSalaryInput = Number($('#annualSalary').val());
    let employee = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      idNumber: idNumberInput,
      jobTitle: jobTitleInput,
      annualSalary: annualSalaryInput,
    };
    employees.push(employee);
    console.log(employees);
    $('.employeeList').append(
      `<tr> <td>` +
        employee.firstName +
        `</td> <td>` +
        employee.lastName +
        `</td> <td class="employeeId">` +
        employee.idNumber +
        `</td> <td>` +
        employee.jobTitle +
        `</td> <td class="employeeSalary">` +
        employee.annualSalary +
        `</td> <td> <button class="deleteButton">Delete</button>` +
        `</td> </tr>`
    );
    salaryCalculator();
    $('.deleteButton').on('click', deleteRow);
  });
}
let salaryCombiner = 0;
function salaryCalculator() {
  for (const employee of employees) {
    // start for of
    salaryCombiner = salaryCombiner + Number(employee.annualSalary);
    totalYearlyCost = salaryCombiner;
    console.log(salaryCombiner);
  } // end for of
  salaryCombiner = 0; // after the for of, 'empty' it so it can be used again
  if (totalYearlyCost > 20000) { // if over 20000, turn red, if removed below 20000, make white
    $('#totalSalary').html(
      `Total cost of all employee salaries:` + totalYearlyCost
    );
    $('#totalSalary').css(`background-color`, `red`);
  } else {
    $('#totalSalary').html(
      `Total cost of all employee salaries:` + totalYearlyCost
    );
    $('#totalSalary').css(`background-color`, `white`);
  }
  return totalYearlyCost;
}
function testCompare(test) {
  if (test === employees.length) return test;
}

function deleteRow() {// for some reason this function splices more than one thing at a time, I would love a explanation as to what I did wrong here.
    let test = $(this).closest('tr').find('employeeId').text();
    console.log(test);
    let matched = employees.findIndex(function (item) {
      return item.employeeId === testCompare(test);
    });
    console.log(matched);
    $(this).closest('tr').remove();
    employees.splice(matched);
    salaryCalculator();
}