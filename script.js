let number = parseInt(prompt('Enter a number'));
if(number == 0){
    console.log("number is zero: "+ number);
}
else if(number%2 == 0){
    console.log("number is even: "+ number);
}
else if(number%2 != 0){
    console.log("number is odd: "+ number);
}
else{
    console.log("Enter a number!! ");
}