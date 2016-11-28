// console.log("test");
// global salary variable
var employeeArray = [];
// var totalSalary = [];
var getUserInput = function () {
var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById('lastName').value;
var employeeId = document.getElementById('employeeId').value;
var jobTitle = document.getElementById('jobTitle').value;
var annualSalary = document.getElementById('annualSalary').value;
var getUserInput = [firstName, lastName, employeeId, jobTitle, annualSalary];
employeeArray.push(getUserInput);
document.getElementById('employeeInfo').innerHTML+=("<br>First Name: " + firstName + "<br>");
document.getElementById('employeeInfo').innerHTML+=("Last Name: " + lastName + "<br>");
document.getElementById('employeeInfo').innerHTML+=("Employee ID: " + employeeId + "<br>");
document.getElementById('employeeInfo').innerHTML+=("Job Title: " + jobTitle + "<br>");
document.getElementById('employeeInfo').innerHTML+=("Annual Salary: " + annualSalary + "<br>");
document.getElementById("monthlySalary").innerHTML = ("<br>Montly Salary Total:" + " " + monthlySalaryTotal());
};
//function for monthly cost of salaries
var monthlySalaryTotal = function () {
  var salariesTotal = 0;
  for (var i = 0; i < employeeArray.length; i++){
  salariesTotal += Number(employeeArray[i][4]);
}
  return salariesTotal/12;
};
