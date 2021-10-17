let userNameFromInput = document.querySelector("#userName");
let userSurnameFromInput = document.querySelector("#userSurname");
let userAgeFromInput = document.querySelector("#userAge");
let addBtn = document.querySelector(".addBtn")
let tableName=document.querySelector(".tableName");
let tableSurname=document.querySelector(".tableSurname");
let tableAge = document.querySelector(".tableAge");
let tableDisplay = document.querySelector("#tableDisplay");

let changeableInputName;
let changeableInputSurname;
let changeableInputAge;

const userList = [];


userNameFromInput.addEventListener("change",function(e) {
   if(e.target.value.length <= 3){
    return   alert("Ad 3 herfden az olmamildi")
   }
   else
   changeableInputName = e.target.value;
});

userSurnameFromInput.addEventListener("change",function(e){
    changeableInputSurname = e.target.value;
})

userAgeFromInput.addEventListener("change",function(e){
    changeableInputAge = e.target.value;
   
})

function renderList(){
 let table = document.querySelector("#tableDisplay").querySelector('tbody');
 table.innerHTML = '';
  userList.forEach((user)=>{
       let row = table.insertRow(0);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);
  cell1.innerHTML = `${user.name}`;
  cell2.innerHTML = `${user.surname}`;
  cell3.innerHTML = `${user.age}`;
  cell4.innerHTML = `<i class="fas fa-check"></i>`;
  cell5.innerHTML = `<i class="fas fa-edit"></i>`;
  cell6.innerHTML = `<i class="fas fa-minus-square"></i>`;
  cell4.onclick = () => {
      row.classList.toggle("style");
  } 
  cell5.onclick = () => {
      userNameFromInput.value = user.name;
      userSurnameFromInput.value = user.surname;
      userAgeFromInput.value = user.age;
  }
 
  })

 
}

addBtn.addEventListener("click",function(){
 const user = {
     name:changeableInputName,
     surname:changeableInputSurname,
     age:changeableInputAge
 }
userList.push(user);
renderList();
});


