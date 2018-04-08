
let age = document.getElementById('age'),
		myName = document.getElementById('name'),
		mySurname = document.getElementById('surname');
 
function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
 
showUser.call(age, mySurname.value, myName.value);

//или:

//showUser.apply(age, [mySurname.value, myName.value]);