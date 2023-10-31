/*2a. At a restaurant you ordered 1 soup for $10,3 burgers for $8 each and 1 ice cream for $5.Use JavaScript to calculate the cost of the order.*/

10+(8*3)+5      //$39

/*2b. You're at a restaurant with you're two friends and made the same order as 2a.Calculate how much each persons pays.*/

(10+(8*3)+5)*3     //$157
((10+(8*3)+5)*3)/3          //$39

/*2c. Calculate the total coaster ($18.50) and 2 shirts($70.50)each with a 20% tax.
1850+(2*7050)/0.2       //72350
(1850+(2*7050)/0.2)/100       //$723.5

//Challenge Exercises
/*Convert the temperatures 
    Formulas:Celsius=(Fahrenheit-32)*5/9
            :Fahrenheit=(Celsius*9/5)+32*/
    
//The temperature is 25 degree Celsius.Convert it into Fahrenheit.
(25*9/5)+32     //77 degree Fahrenheit

//The temperature is -5 degree Celsius.Convert it into Fahrenheit.
(-5*9/5)+32     //23 degree Fahrenheit

//Round a number down from 2.8=>2 and 2.2=>3    note:I'm confuse on how are you going to manipulate the second one to make it equal or more than 3. I already tried 100 to the .toFixed function and I also tried the Math.round

var num1= 2.8;
var num2= 2.2;
let result1=num1.toFixed();
let result2=num2.toFixed();
console.log(result1);       //3
console.log(result2);       //2

//At a restaurant,you ordered 1 coffee ($5) and 2 bagel ($3 each).Calculate the total cost and create the text: Total Cost: $ (replace with calculated cost) 

`Total Cost: $${5+(3*3)}`       //Total Cost: $14

//Displat the result in a pop up alert

alert(`Total Cost: $${5+(3*3)}` )