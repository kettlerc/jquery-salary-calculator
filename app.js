console.log('JS');

let employees = [];

$(document).ready(onReady);

function onReady() {
    console.log('JQ');
    $(document).on('submit', '#inputForm', addEmployee);
    $(document).on('click', '.delete', deleteRow);
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

    calculateMonthlyCost();
    renderToDom();
} //end addEmployee

function calculateMonthlyCost() {
    let total = 0;
    for (let employee of employees) {
        total += employee.annualSalary / 12;  
    };
    $('#totalMonthlyCost').text(total.toFixed(2));
    if (total > 20000) {
        console.log('too much');
        $('#totalCost').addClass('inTheRed');
    }
} //end calculateMonthlyCost

function deleteRow() {
    employees.splice($(this).data( 'index' ), 1 );
    $(this).parent().parent().remove();
    calculateMonthlyCost();
} //end deleteRow

function renderToDom() {
    $('table tbody').empty();
    for (let i=0; i<employees.length; i++) {
        const thisEmployee = employees[ i ];
    $('table tbody').append(`<tr>
        <td>${thisEmployee.firstName}</td>
        <td>${thisEmployee.lastName}</td>
        <td>${thisEmployee.idNum}</td>
        <td>${thisEmployee.title}</td>
        <td>$${thisEmployee.annualSalary}</td>
        <td><button class="delete" data-index="{i}">Delete</button></td>`);
    };
    $('input').val('');
} //end renderToDom