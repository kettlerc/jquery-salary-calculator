console.log('JS');

$(document).ready(onReady);

function onReady() {
    console.log('JQ');
    
    $(document).on('click', '#submit', addEmployee);
    $(document).on('click', '#delete', deleteRow)
}

function addEmployee() {
    console.log('button works');
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
}

function deleteRow() {
    $(this).parent().parent().remove();
}