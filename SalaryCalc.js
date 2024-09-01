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


       let monthSum = salSum/ months;

    console.log(monthSum);




    const tradd = document.getElementById("table-add");
    const tabledata = document.createElement('tr');
    tabledata.classList.add('newTr');
    tradd.appendChild(tabledata);
    
   tabledata.innerHTML = 
   `  <td>${firstNameInput}</td>
      <td>${lastNameInput}</td>
      <td>${idInput}</td>
      <td>${titleInput}</td>
      <td>${salaryInput}</td> 
      <td><button onClick="deleteValue(event)">delete</button></td>
      `
}
  



    
    




    // const salaryObject = {
    //    salary: salaryOutput,
    // }
    // monthlySalary.push(salaryObject);
    // console.log('Updated monthlySalary:', monthlySalary);
    
    // }  
    // const hThreeAdd = document.getElementById("hThree");
    // const hThreeData = document.createElement('div');
    // hThreeAdd.appendChild(hThreeData);
    
    // hThreeData.innerHTML = 
    // `<p>${monthlySalary}</p>`

//   let sum = 0
//   for (let i =0; i < monthlySalary.length; i++);
//   let sumOne = sum += monthlySalary[i];
//   let monthlySum = sumOne / 12;
//   monthlySum

// }
 

    

//     const footAppend = document.getElementById("table-add");
//     const tdata = document.createElement('tr');
//     tradd.appendChild(tdata);
    
//    tdata.innerHTML = 
// }















function deleteValue(event){
    event.target.closest('.newTr').remove()
}















// <button id="submit-button" onClick="deleteValue(event)">Delete</button></th>