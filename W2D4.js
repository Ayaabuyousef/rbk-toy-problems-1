//1.Write a function called sameLength that takes two strings as parmeters, 
//and returns true if those strings have the same length, and false otherwise.
function sameLength(str1,str2){
	var c = str1.length
	var v =str2.length
	if (c===v ){return true
	}else return false
}

//2.Write a function called passwordLongEnough that takes a 'password' as a parameter 
//and returns true if that password is long enough -- you get to decide what constitutes long enough.
function passwordLongEnough(password){


}
//3.Write a function called rentalCar that takes a person's name and age as parmeters, 
//and returns either 'You cannot have the keys, .', or "Have fun driving", 
// depending on whether or not the person is old enough. 
//In the US, most rental car companies do not allow you to rent a car until you are 21.
function rentalCar(personsname, age){
	var c=personsname
	var i=age
	if (i>=21){ return c && "Have fun driving"}
		else if (i<21){return  (c &&'You cannot have the keys')}

}

// 4.Write a function called max that takes two numbers as parameters, 
//and returns the larger one.

// 5.Write a function called  min that takes two numbers as parameters,
// and returns the smaller one.