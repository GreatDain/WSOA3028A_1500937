//console.log('wat');

/* DONT USE VAR!!!!!

let b = 2; //cant redefine let
b = 3;

// safe!
const c = 3; //can be set to string, boolean etc... const = "", const =  true
c = 4;

*/

/*TYPES:  There are 8. 

1. Boolean
2. null
3. undefined
4. Number
5. BigInt
6. String
7. Symbol
8. Object

*/

//NB! check cache validation when reloading page after changes.

// Falsey values: false, null, undefined, 0, "", [] === false

// idiomatic: the best expressive way of using a language

/* Functions:

e.g function wat(thingy){
        console.log("thingy");
    }

    wat(2);

    console will output wat2

*/

/*

Classes:

e.g class MyAwesomeClass{
        wat(thingy){
            console.log('wat',  thingy);
        }
    }

    const a =  new MyAwesomeClass();
    a.wat('42');

*/

/*

Document (DOM):

console.log(window.document);

*/

function Button(){

    //access button element
    const doc = document.getElementById("btn");

    //create button element
    const button = document.createElement('Button');

    //text displayed on button
    const btnText = document.createTextNode("A Button");

    // append text to the actual button
    button.appendChild(btnText);

    // append button to doc
    doc.appendChild(button);
    
}

function backbutton(){
    window.history.back();
}