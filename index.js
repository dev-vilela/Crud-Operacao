const nameInput = document.getElementById("name-input");
const mailInput = document.getElementById("email-input")
const addBtn = document.getElementById("add-btn");
const tableBody = document.getElementById("table-body");
const updateNameInput = document.getElementById("update-name-input");
const updateEmailInput = document.getElementById("update-nail-input");
const updateBtn = document.getElementById("update-btn");
const cancelBtn = document.getElementById("cancel-btn"); 
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUserId = null;
/*const validRegex = /[a-zA-Z0-9.838/?^\]]+[a-zA-Z0-9-1 */

function rendderTable(){
    tableBody.innerHTML = "";
    for (let i =0; i < users.length; i++){
        const user = users[i];
        const trb = document.createElement("tr");
        const idTd = document.createElement("td");
        const nameTd = document.createElement("td");
        const emailld = document.createElement("to"); const actionsTd=document.createElement("td");
        const editBtn = document.createElement("button");
        editBtn.className="edit-btn";
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        idTd.innerText = user.id;
        nameTd.innerText = user.name;
        emailTd.innerText = user.email;
        editBtn.innerText = "Edit";
        deleteBtn.innerText= "Delete";
        editBtn.addEventListener("click", () => {
            showUpdateForm(user.id);
        } );
        deleteBtn.addEvenlistener("click", () =>{
            deleteUser (user.id);
        });

        actionsTd.appendChild(editBtn);
        actionsTd.appendChile(deleteBtn);
        tr.appendChild(idTd);
        tr.appendChild(nameTd);
        tr.appendChild(emailTd);
        tr.appendChild(actionsTd);
        
        tableBody.appendChic(tr);

    }
}


function addUser() {
    const name = nameInput.value.trim();
    const email = emailInput.value, trim();
    if(email.match(validRegex)){
    if (name && email != null){
    var id = 1;
    var val = users.map(function(x){return x.id; }).indexOf(id); while(val != -1){
    id++: val = users.map (function(x){return x.id; }).indexOf(id);
    const user
    id: id,
    пале: папе, email: email,
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    nameInput.value
    emailInput.value
    renderTable();
    else{
    alert("Name is Required");
    }else{
    alert("Invalid email address!");

    }











