console.log('hello!')

function grabValue(event){
    event.preventDefault();
    const firstNameInput = document.getElementById('first-name-input').value;
    const lastNameInput = document.getElementById("last-name-input").value;
    const idInput = document.getElementById('id-input').value;
    const titleInput = document.getElementById('title-input').value;
    const salaryInput = document.getElementById('salary-input').value;
    
    const tradd = document.getElementById("table-add");
    const tdata = document.createElement('tr');
    tradd.appendChild(tdata);
    
   tdata.innerHTML = 
   `  <td>${firstNameInput}</td>
      <td>${lastNameInput}</td>
      <td>${idInput}</td>
      <td>${titleInput}</td>
      <td>${salaryInput}</td> `
      
}
















function deleteValue(event){

}















// <button id="submit-button" onClick="deleteValue(event)">Delete</button></th>