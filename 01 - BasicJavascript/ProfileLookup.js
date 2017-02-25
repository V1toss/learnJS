/**
 * Created by Karetko Victor on 23.02.2017.
 *
 * The function should check if firstName is an actual contact's firstName and the given property (prop) is a property of that contact.
 * If both are true, then return the "value" of that property.
 * If firstName does not correspond to any contacts then return "No such contact".
 * If prop does not correspond to any valid properties then return "No such property".
 */
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
  var index = -1;
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == firstName) {
       index = i;
    }
  }
  
  if (index == -1) {
    return "No such contact";
  } else if (contacts[index].hasOwnProperty(prop)) {
    return contacts[index][prop];
  } else {
    return "No such property";
  }
}

lookUpProfile("Akira", "likes");
