//concise object literal declarations using simple fields


//ES6 introduced some nice support for easy defining object literals

const createPerson = (name, age, gender) => //this is an arrow function that takes in three variables, age, name and gender, and returns an object that has series of keyvalue pairs: name, age and gender, and their values, is the passed in variables.
{

    return
        {
            name: name; //We can notice some repition, name, name, age, age, gender, gender. Now, the first name is the key, the second name is the value.
            age: age;
            gender: gender
        };
};

console.log(createPerson("Zodiac Hasbro", 56, "male"));

//There's an easy way to do create stuff like this, where the keyvalue pairs and the 
//...variable passed are the same... See index1.js for this. 

//[to be continued...]