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

/*function Button(){

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
    
}*/

let i = 0;

function backbutton(){
    window.history.back();
}

function nextblogdain(){

    // const doc = document.getElementById('blog1');

    document.getElementById('blog1');

    const bloglinks = [
        '<a href="Blogs/2020/02/18/blog2.html"> 17.02.2020 - Character Decription </a>',
        '<a href="Blogs/2020/02/18/blog3.html"> 18.02.2020 - Through the ages of the browser wars </a>',
        '<a href="Blogs/2020/02/25/blog4.html"> 25.02.2020 - Semantic Markup </a>',
        '<a href="Blogs/2020/03/10/JavascriptBlog.html">10.03.2020 - Javascript, the "Yes Man" of programming languages </a>',
        '<a href="Blogs/2020/04/7/FictionalCharacterWritingBlog.html">07.04.2020 - My first experiences with fictional blog writing and character development </a>'
    ];

    if(i < bloglinks.length-1){
        i++;
    }else{
        i = 0;
    }

    document.getElementById('blog1').innerHTML = bloglinks[i];
}

function previousblogdain(){

    // const doc = document.getElementById('blog1');

    document.getElementById('blog1');

    const bloglinks = [
        '<a href="Blogs/2020/02/18/blog2.html"> 17.02.2020 - Character Decription </a>',
        '<a href="Blogs/2020/02/18/blog3.html"> 18.02.2020 - Through the ages of the browser wars </a>',
        '<a href="Blogs/2020/02/25/blog4.html"> 25.02.2020 - Semantic Markup </a>',
        '<a href="Blogs/2020/03/10/JavascriptBlog.html">10.03.2020 - Javascript, the "Yes Man" of programming languages </a>',
        '<a href="Blogs/2020/04/7/FictionalCharacterWritingBlog.html">07.04.2020 - My first experiences with fictional blog writing and character development </a>'
    ];

    if(i <= 0){
        i = bloglinks.length-1;
    }else{
        i--;
    }

    document.getElementById('blog1').innerHTML = bloglinks[i];
}

function nextblogjozi(){
    document.getElementById('joziblog');

    const bloglinks = [
        '<a href="JoziBlogs/2020/03/15/What-a-DISASTER-1.html"> What a DISASTER - Part 1 </a>',
        '<a href="JoziBlogs/2020/03/22/Fast-food-and-earthquakes-1.html"> Fast food and earthquakes - Part 1</a>'
    ]

    if(i < bloglinks.length-1){
        i++;
    }else{
        i = 0;
    }

    document.getElementById('joziblog').innerHTML = bloglinks[i];
}

function previousblogjozi(){
    document.getElementById('joziblog');

    const bloglinks = [
        '<a href="JoziBlogs/2020/03/15/What-a-DISASTER-1.html"> What a DISASTER - Part 1 </a>',
        '<a href="JoziBlogs/2020/03/22/Fast-food-and-earthquakes-1.html"> Fast food and earthquakes - Part 1</a>'
    ]

    if(i <= 0){
        i = bloglinks.length-1;
    }else{
        i--;
    }

    document.getElementById('joziblog').innerHTML = bloglinks[i];
}






