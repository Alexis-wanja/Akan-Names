let maleNames= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
let femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function generateAkan(){
  let year = document.getElementById("year").value;

  let month = document.getElementById("month").value;

  let day = document.getElementById("day").value;

  let gender = document.getElementById ("gender").value;

  let birthday = new Date(`${year}-${month}-${day}`)

  let dateString = birthday.toDateString()

  let birthDate = birthday.getDay()

  if (month > 12 || month < 1){
    alert ("Not a month")
 }
 if (day > 31 || month <1){
   alert ("Not a date")
 }

  if (gender == "male"){
    let name = maleNames[birthDate]
    alert ("Born on " +  dateString + " Thus Akan Name is " + name)
  }

  else if (gender == "female"){
    let name = femaleNames[birthDate]
    alert ("Born on " +  dateString + " Thus Akan Name is " + name)
  }

  else {
    alert("Gender undefined")
  }    

  if (month > 12 || month < 1){
     alert ("Not a month")
  }
  if (day > 31 || month <1){
    alert ("Not a date")
  }
}