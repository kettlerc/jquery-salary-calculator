console.log('JS');

$(document).ready(onReady);

function onReady() {
    console.log('JQ');
    
    $(document).on('submit', '#inputForm', addEmployee);
    $(document).on('click', '#delete', deleteRow)
} //end onReady

function addEmployee(event) {
    event.preventDefault();
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNum = $('#idNumIn').val();
    let title = $('#titleIn').val();
    let annualSalary = $('#annSalIn').val();
    let markup = `<tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNum}</td>
        <td>${title}</td>
        <td>${annualSalary}</td>
        <td><button id="delete">Delete</button></td>`;
    $('table tbody').append(markup);
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumIn').val('');
    $('#titleIn').val('');
    $('#annSalIn').val('');
} //end addEmployee

function deleteRow() {
    $(this).parent().parent().remove();
} //end deleteRow

