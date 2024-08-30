console.log('hello!')

function grabValue(event){
    event.preventDefault();
    const firstNameInput = document.getElementById('first-name-input').value;
    const lastNameInput = document.getElementById("last-name-input").value;
    const idInput = document.getElementById('id-input').value;
    const titleInput = document.getElementById('title-input').value;
    const salaryInput = document.getElementById('salary-input').value;
    
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


// function salaryCal (){
 
    

//     const footAppend = document.getElementById("table-add");
//     const tdata = document.createElement('tr');
//     tradd.appendChild(tdata);
    
//    tdata.innerHTML = 
// }















function deleteValue(event){
    event.target.closest('.newTr').remove()
}















// <button id="submit-button" onClick="deleteValue(event)">Delete</button></th>