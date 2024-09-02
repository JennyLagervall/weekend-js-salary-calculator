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

    let salSum = 0
    let months = 12
    for (let i =0; i<monthlySalary.length; i++){
       salSum += monthlySalary[i];}


       let monthSum0 = salSum + 75000;
       let monthSum1 = monthSum0/ months;
       let monthSum = monthSum1.toFixed(2);
    


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
      <td><button onClick="deleteValue(event)">delete</button></td>
      `

    const pAdd = document.getElementById("hThree");
    const pData = document.createElement('p');
    pAdd.appendChild(pData);
    pData.innerText = `Total Salary per Month: $${monthSum}`;
}


  
















function deleteValue(event){
    event.target.closest('.newTr').remove()
}















// <button id="submit-button" onClick="deleteValue(event)">Delete</button></th>