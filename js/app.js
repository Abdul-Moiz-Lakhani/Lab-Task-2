/* 
Name     : Abdul Moiz Lakhani
Roll No. : 5093
Batch    : 4.1 (Bright Section)
*/

// Question # 1

// Question # 2

// Question # 3

var stringArr = [ "a", "b", "c", "ab", "ac", "ca" ];

// Question # 4

var numArr = [ 1, 3, 5, 7, 9, 11, 13, 15 ];

// Question # 5

var boolArr = [ true, false ];

// Question # 6

var mixedArr = [ "cat", "fish", 1, 3, 4, true, false ];

// Question # 7

var mobNetworks = [ "Warid", "Ufone", "Telenor", "Zong", "Jazz" ];

// Question # 8

var qualifications = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. PHIL", "PhD" ];

console.log("Qualifications:");
console.log("---------------\n");

for (var i = 0; i<qualifications.length; i++)
{
    console.log( (i+1) + ") " + qualifications[i] );
}

// Question # 9

console.log("\n\nTop Movies of 2015:");
console.log("-------------------\n");

var movies = [];

movies[0] = "Avengers: Age of Ultron";
movies[1] = "Spectre";
movies[2] = "Jurassic World";
movies[3] = "Inside Out";

for (var i = 0; i<movies.length; i++)
{
    console.log( (i+1) + ") " + movies[i] );
}

console.log("\nLength of the Array: " + movies.length);

// Question # 10

console.log("\n\nFavorite Cars:");
console.log("--------------\n");

var favCars =
    [
        "Audi",
        "volvo",
        "Ford",
        "Lamborghini"
    ];

console.log("\n" + favCars[0] + ", " + favCars[1] + ", " + favCars[2] + ", " + favCars[3]);
console.log("\nFirst index of an Array: " + favCars.indexOf("Audi") );
console.log("Car at First index of the Array: " + favCars[0]);
console.log("Last index of the Array: " + (favCars.length - 1) );
console.log("Car at Last index of the Array: " + favCars[3] + "\n\n\n");

// Question # 11

var studentNames = [ "Michael", "John", "Tony" ];
var studentNumbers = [ 320, 230, 480 ];
var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++)
{
    console.log("Score of " + studentNames[i] + " is " + studentNumbers[i] + ". Percentage: " + ( studentNumbers[i]*100)/totalMarks + "%" );
}

// Question # 12 (a)

var colorNames = [ "Red", "Green", "Blue", "Yellow", "Orange", "Violet", "White" ];

console.log("\n\nColors in an Array:\n\n" + colorNames);

var userColor = prompt("Enter Color You want to place at Beginning");

var userColorIndex = colorNames.indexOf(userColor);

if( userColorIndex != 0 )
{    
    colorNames.splice(userColorIndex, 1);
    colorNames.unshift(userColor);
    console.log("\n\nUpdated Array:\n\n" + colorNames);
}
else
{
    console.log("\nEntered Color is already at the Beginning of the Array.");
}

// Question # 12 (b)

var colorNames = [ "Red", "Green", "Blue", "Yellow", "Orange", "Violet", "White" ];

console.log("\n\nColors in an Array:\n\n" + colorNames);

var userColor = prompt("Enter Color You want to place at the End");

var userColorIndex = colorNames.indexOf(userColor);

if( userColorIndex != colorNames.length-1 )
{    
    colorNames.splice(userColorIndex, 1);
    colorNames.push(userColor);
    console.log("\n\nUpdated Array:\n\n" + colorNames);
}
else
{
    console.log("\nEntered Color is already at the End of the Array.");
}

// Question # 12 (c)

var colorNames = [ "Red", "Green", "Blue", "Yellow", "Orange", "Violet", "White" ];

console.log("\n\nColors in an Array:\n\n" + colorNames);

console.log("\nAfter adding two Colors in the beginning of the Array:\n\n");

colorNames.unshift("Gray", "Black");

console.log(" " + colorNames);

// Question # 12 (d)

var colorNames = [ "Red", "Green", "Blue", "Yellow", "Orange", "Violet", "White" ];

console.log("\n\nColors in an Array:\n\n" + colorNames);

console.log("\nAfter deleting the First Color from the Array:\n\n");

colorNames.shift();

console.log(" " + colorNames);

// Question # 12 (e)

var colorNames = [ "Red", "Green", "Blue", "Yellow", "Orange", "Violet", "White" ];

console.log("\n\nColors in an Array:\n\n" + colorNames);

console.log("\nAfter deleting the Last Color from the Array:\n\n");

colorNames.pop();

console.log(" " + colorNames);

// Question # 12 (f)

var colorNames = [];
colorNames[0] = "Red";
colorNames[1] = "Green";
colorNames[2] = "Blue";
colorNames[3] = "Yellow";

console.log("\n\nColors in an Array:\n\n");
console.log(colorNames);

var userDecision = prompt("Do you want to Add any color? ( Yes or No )");

if( userDecision == "Yes" || userDecision == "yes" )
{    
    var userColorInputIndex = prompt("At which Index do you want to add the color?");
    
    userColorInputIndex = userColorInputIndex-1;

    if (isNaN(userColorInputIndex))
    {
        console.log("\nPlease insert a Numeric Value!");
    }
    else
    {
        var userColorInput = prompt("Please Enter the Name of Color you want to Add");
        
        colorNames[userColorInputIndex] = userColorInput;

        console.log("\nUpdated Array:\n\n");
        console.log(colorNames);
        console.log("Length of an Array: " + colorNames.length);
    }
}
else if (userDecision == "No" || userDecision == "no")
{
    console.log("\nThanks for Using!");
}
else
{
    console.log("\nWrong Insert!");
}

// Question # 12 (g)

var colorNames = [ "Red", "Green", "Blue", "Yellow", "Orange", "Violet", "White" ];

console.log("\n\nColors in an Array:\n\n" + colorNames);

var userDeleteIndex = parseInt(prompt("From which index do you want to start delete?"));

userDeleteIndex = userDeleteIndex-1;

    if (isNaN(userDeleteIndex))
    {
        console.log("\nPlease insert a Numeric Value!");
    }
    else
    {
        var userDeleteTerms = parseInt(prompt("How many colors you want to delete?"));
        
        if (userDeleteTerms >= colorNames.length)
        {
            console.log("Out of Range!");
        }
        else
        {
        colorNames.splice(userDeleteIndex, userDeleteTerms);

        console.log("\nUpdated Array:\n\n" + colorNames);
        }
    }

// Question # 13

var studentScores = [ 100, 30, 25, 79, 87, 99, 120, 7 ];

console.log("\n\nScores of Students: " + studentScores);

studentScores = studentScores.sort(function(a, b){return a-b});

console.log("\nOrdered Scores of Students: " + studentScores);

// Question # 14

var fruitsList = [ "Pineapple", "Banana", "Apple", "Stawberry", "Orange" ];

console.log("\n\nFruits List:\n" + fruitsList);

fruitsList = fruitsList.sort();

console.log("\nOrdered Fruits List:\n" + fruitsList);

// Question # 15

var cities = [ "Karachi", "Lahore", "Quetta", "Peshawar", "Faisalabad", "Islamabad" ];

var selectedCities = [ cities[5], cities[2] ];

console.log("\n\nCities List:\n" + cities);
console.log("\nSelected Cities List:\n" + selectedCities);

// Question # 16

var stringArr = [ "This", " is", " my", " cat" ];
var string = stringArr[0] + stringArr[1] + stringArr[2] + stringArr[3];

console.log("\n\nString Array:\n" + stringArr);
console.log("\nString:\n" + string);

// Question # 17

var devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");

console.log("\n\nDevices:\n" + devices);
console.log("\nOut:\n" + devices.shift());
console.log("Out:\n" + devices.shift());
console.log("Out:\n" + devices.shift());
console.log("Out:\n" + devices.shift());

// Question # 18

var devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");

console.log("\n\nDevices:\n" + devices);
console.log("\nOut:\n" + devices.pop());
console.log("Out:\n" + devices.pop());
console.log("Out:\n" + devices.pop());
console.log("Out:\n" + devices.pop());

// Question # 19

// Question # 20

var multiArr = 
[
    [ 2, 4, 6 ],
    [ 1, 3, 7 ],
];

// Question # 20

var multiArr =
[
    [ "0 ", "1 ", "2 ", "3" ],
    [ "1 ", "0 ", "1 ", "2" ],
    [ "2 ", "1 ", "0 ", "1" ]
];

console.log("\n\nMultidimentional Array:");
console.log("-----------------------");
console.log("\n" + multiArr[0][0] + multiArr[0][1] + multiArr[0][2] + multiArr[0][3] );
console.log( multiArr[1][0] + multiArr[1][1] + multiArr[1][2] + multiArr[1][3] + "\n");
console.log( multiArr[2][0] + multiArr[2][1] + multiArr[2][2] + multiArr[2][3] );