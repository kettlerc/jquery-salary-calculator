console.log('JS');

let employees = [];

$(document).ready(onReady);

function onReady() {
    console.log('JQ');
    $(document).on('submit', '#inputForm', addEmployee);
    $(document).on('click', '#delete', deleteRow)
} //end onReady

function addEmployee(event) {
    event.preventDefault();
    let employee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNum: $('#idNumIn').val(),
        title: $('#titleIn').val(),
        annualSalary: Number($('#annSalIn').val())
    };
    employees.push(employee);
    console.log(employee);

    $('table tbody').append(`<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.idNum}</td>
        <td>${employee.title}</td>
        <td>$${employee.annualSalary}</td>
        <td><button id="delete">Delete</button></td>`);

    $('input').val('');

    let total = 0;
    for (let employee of employees) {
        total += employee.annualSalary / 12;
    };

    $('#totalMonthlyCost').text(total);
} //end addEmployee

function deleteRow() {
    $(this).parent().parent().remove();
} //end deleteRow

