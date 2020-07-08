//Setup
var contacts = [
{
"firstName": "Akira",
"lastName": "Laine",
"number": "0543236543",
"likes": ["Pizza", "Coding", "Brownie Points"]
},
{
"firstName": "Harry",
"lastName": "Potter",
"number": "0994372684",
"likes": ["Hogwarts", "Magic", "Hagrid"]
},
{
"firstName": "Sherlock",
"lastName": "Holmes",
"number": "0487345643",
"likes": ["Intriguing Cases", "Violin"]
},
{
"firstName": "Kristian",
"lastName": "Vos",
"number": "unknown",
"likes": ["Javascript", "Gaming", "Foxes"]
}
];


function lookUpProfile(firstName, prop){

// Only change code below this line
var result;
  for(var i=0;i<contacts.length;i++){
      if(contacts[i].firstName!==firstName){
           result= "No such contact";
      }
       if (!contacts[i].hasOwnProperty(prop)){
        result= "No such property";
      }

    if(contacts[i].firstName===firstName && contacts[i].hasOwnProperty(prop)){
     return	contacts[i][prop];
    }
  }
  return result;
// Only change code above this line
}
// Change these values to test your function

var result =lookUpProfile("Bob", "number");
console.log(result);