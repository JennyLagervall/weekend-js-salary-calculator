console.log('hello!')
const monthlySalary = [];

function grabValue(event){
    event.preventDefault();
    const firstNameInput = document.getElementById('first-name-input').value;
    const lastNameInput = document.getElementById("last-name-input").value;
    const idInput = document.getElementById('id-input').value;
    const titleInput = document.getElementById('title-input').value;
    const salaryInput = Number(document.getElementById('salary-input').value);
    

    monthlySalary.push(salaryInput);
    salaryDisplay();
    

    const tradd = document.getElementById("table-add");
    const tabledata = document.createElement('tr');
    tabledata.classList.add('newTr');
    tradd.appendChild(tabledata);
    
   tabledata.innerHTML = 
   `  <td>${firstNameInput}</td>
      <td>${lastNameInput}</td>
      <td>${idInput}</td>
      <td>${titleInput}</td>
      <td> $${salaryInput} </td> 
      <td><button id="delete-button" onClick="deleteValue(event)">Delete</button></td>
      `
    
      document.getElementById('first-name-input').value  = '';
      document.getElementById("last-name-input").value = '';
      document.getElementById('id-input').value = '';
      document.getElementById('title-input').value = '';
      document.getElementById('salary-input').value = '';
}



  
function salaryDisplay(){
    let salSum = 0
    let months = 12;
    for (let i =0; i<monthlySalary.length; i++){
       salSum += monthlySalary[i];
    }

       let monthSum0 = salSum + 75000;
       let monthSum1 = monthSum0/ months;
       let monthSum = monthSum1.toFixed(2);

       const pAdd = document.getElementById("hThreeTwo");
       pAdd.innerText = `$${monthSum}`

       if (monthSum >= 20000){
        pAdd.style.backgroundColor = "red";
        pAdd.style.color = "black";
       }
      

}

// If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.



function deleteValue(event){
    let sumsum= 0
    let months1 =12
    event.target.closest('tr').remove();

    salaryDisplay();
}
   














// <button id="submit-button" onClick="deleteValue(event)">Delete</button></th>