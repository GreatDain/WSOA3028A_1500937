let x = 0;

const array = [
    '<a href="Blogs/2020/02/17/blog1.html"> Decisions Decisions </a> <br> <p class = "preview"> ‘The Garden of Forking Paths’ is a short story written in 1941 by the writer and poet Jorge Luis Borges. The story revolves around the idea of all possible outcomes of quantum measurements being realized in the physical world, this is known as the many-worlds interpretation (MWI). Borges’ take on this theory has inspired many new media scholars... </p>',
    '<a href="Blogs/2020/02/18/blog2.html"> Character Decription (Updated) </a> <br> <p class = "preview"> My character, named Jozi, is quite literally meant to be the personification of the city of Johannesburg during the city’s most successful time. We always say that we want to be an older self that would make our younger selves proud of and look up to. So here we have Jozi’s younger self looking at the older version of himself, that being the present day we live in, and writing about what he has become, what is he proud of and what he is ashamed of, what he is like today compared to what he dreamed of becoming, these types of things. To do this he has created a character profile website on which he will share his thoughts in the form of blog posts and provide interesting pieces of historical information he (the city) has gone through...</p>',
    '<a href="Blogs/2020/02/18/blog3.html"> Through the ages of the browser wars </a> <br> <p class = "preview"> 1994, the war begins. Netscape and Internet Explorer begin their fight for supremacy in the First Browser Wars during a time when the world wide web and internet were becoming popular around the globe... </p>',
    '<a href="Blogs/2020/02/25/blog4.html"> Semantic Markup </a> <br> <p class = "preview"> Using words semantically means using words in the correct context aligning with the meaning of those words, so semantic markup is quite literally using HTML tags that convey some information about the content to follow. It is also for the purpose of dividing content to keep it neat and presentable... </p>',
    '<a href="Blogs/2020/03/10/JavascriptBlog.html"> Javascript, the "Yes Man" of programming languages </a> <br> <p class = "preview"> Over the past week we have been taught the basics of the Javascript programming language for the purposes of creating this very website you’re reading the blog on. Here is a summary of my understanding of what was learned... </p>',
    '<a href="Blogs/2020/04/7/FictionalCharacterWritingBlog.html"> My first experiences with fictional blog writing and character development </a> <br> <p class = "preview">  What exactly is a blog? A blog is a website that focuses on developer or character written content. Blogs are often personal but can we about any topic imaginable. There is often a connection between the content creator and the readers or audience through a comments section that allows for there to be an interaction and allows for like-minded people to share their ideas and thoughts... </p>',
    '<a href="Blogs/2020/05/28/Close-Reading-Information-Geographies.html"> Close Reading: Towards a study of information geographies </a> <br> <p class = "preview">  Information geography is the existence of information in the physical world. Where this information is found, stored, and created shapes how different parts of the world are understood. Information exists in a material place and is ever evolving and being shaped at that specific location. They start by speaking about space and place and how different groups of people across the globe are trying to impose their narratives of informational augmentations. Who are these people? Why are they the “dominant” force that speaks for others?...  </p>',
    '<a href="Blogs/2020/05/30/Ethics-Morals-and-Law.html"> Ethics, Morals, and the Law </a> <br> <p class = "preview"> Ethics is the factors (values and principles) that determine one’s process of decision making. Values and principles are what defines what is good and right in our lives. They are the basis for the actions we choose to take. Everyone can reflect on a situation and decide on what is the good, right course of action to take... </p>',
    '<a href="Blogs/2020/05/30/Online-Learning.html"> Online Learning </a> <br> <p class = "preview"> With the corona virus epidemic taking the world into a new era it is only natural for education, on a global scale, to move onto online platforms, at least for the time being. How should educational institutions approach online learning to get the most out of its students and educators?... </p>',
    '<a href="Blogs/2020/06/01/Neumorphism-and-Skeuomorphism-in-UI.html"> Neumorphism and Skeuomorphism in UI </a> <br> <p class = "preview"> Skeuomorphism is the design of a user interface that mimics how that/those specific objects function in real life. This can be done by mimicking the way it looks, sounds and by using concepts that the user will recognise. By using familiar objects and concepts the designer can convey to the user how that specific thing should be used... </p>',
    '<a href="Blogs/2020/06/04/Terminator-AI-Inbound.html"> Terminator AI Inbound? </a> <br> <p class = "preview"> Fama uses AI to screen for what that describe as “undesirable” behaviours. Many companies and institutions have taken on this technology and are using it during their interviewing and screen processes. But the AI is notoriously inexplicable and prone to bias so it is very likely it would entrench existing biases (sexism, racism etc)... </p>',
];

function next(){

    document.getElementById('blog');

    if(x < array.length - 1){
        x++;
    }
    else{
        x = 0;
    }

    document.getElementById('blog').innerHTML = array[x];
}

function prev(){
    document.getElementById('blog');

    if(x<=0){
        x = array.length-1;
    }
    else{
        x--;
    }
    document.getElementById('blog').innerHTML = array[x];
}