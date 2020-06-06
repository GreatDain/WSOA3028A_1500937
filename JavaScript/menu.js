const navigation = document.getElementById("navigation_bar");

if (document.URL.match("https://greatdain.github.io/WSOA3028A_1500937/") || document.URL.includes("index.html")){
navigation.innerHTML = [
    // "<nav>",
    // "<a class=\"flag\" href=\"index.html\"> <img src=\"../../../../AboutMe/Images/1280px-Flag_of_Johannesburg,_South_Africa.svg.png\" alt=\"Flag of Johannesburg\" width=\"200px\" height=\"100px\"></a>",
    // "</nav>",
    // "<h1> <u> JOZI LIFE </u> </h1>",
    "<h1 class=\"name_border\"> <a class=\"name\" href=\"./index.html\"> <img class=\"flag\" src=\"./AboutMe/Images/1280px-Flag_of_Johannesburg,_South_Africa.svg.png\" alt=\"Flag of Johannesburg\" width=\"80px\" height=\"40px\"> JOZI LIFE </a></h1>",
    "<nav>",
    "<ul>",
    "<li class=\"menu_li\"><a href=\"./index.html\"> Home </a></li>",
    // "&nbsp;",
    "<li class=\"menu_li\"><a href=\"./AboutMe/AboutMe.html\"> About Me </a></li>",
    // "&nbsp;",
    "<li class=\"menu_li\"><a href=\"./Blogs/DainBlog.html\"> Dain's Content </a></li>",
    // "&nbsp;",
    "<li class=\"menu_li\"><a href=\"./JoziBlogs/JoziBlog.html\"> Jozi's Content </a></li>",
    "</ul>",
    "</nav>",

].join("\n");
}

if (document.URL.includes("AboutMe.html") || document.URL.includes("DainBlog.html") || document.URL.includes("JoziBlog.html")){
    navigation.innerHTML = [
        "<h1 class=\"name_border\"> <a class=\"name\" href=\"../index.html\"> <img class=\"flag\" src=\"../AboutMe/Images/1280px-Flag_of_Johannesburg,_South_Africa.svg.png\" alt=\"Flag of Johannesburg\" width=\"80px\" height=\"40px\"> JOZI LIFE </a></h1>",
        "<nav>",
        "<ul>",
        "<li class=\"menu_li\"><a href=\"../index.html\"> Home </a></li>",
        "<li class=\"menu_li\"><a href=\"../AboutMe/AboutMe.html\"> About Me </a></li>",
        "<li class=\"menu_li\"><a href=\"../Blogs/DainBlog.html\"> Dain's Content </a></li>",
        "<li class=\"menu_li\"><a href=\"../JoziBlogs/JoziBlog.html\"> Jozi's Content </a></li>",
        "</ul>",
        "</nav>",
    ].join("\n");
}
else if (document.URL.includes("Blogs") || document.URL.includes("OtherEntries") || document.URL.includes("JoziBlog")){
    navigation.innerHTML = [
        "<h1 class=\"name_border\"> <a class=\"name\" href=\"../../../../index.html\"> <img class=\"flag\" src=\"../../../../AboutMe/Images/1280px-Flag_of_Johannesburg,_South_Africa.svg.png\" alt=\"Flag of Johannesburg\" width=\"80px\" height=\"40px\"> JOZI LIFE </a></h1>",
        "<nav>",
        "<ul>",
        "<li class=\"menu_li\"><a href=\"../../../../index.html\"> Home </a></li>",
        "<li class=\"menu_li\"><a href=\"../../../../AboutMe/AboutMe.html\"> About Me </a></li>",
        "<li class=\"menu_li\"><a href=\"../../../../Blogs/DainBlog.html\"> Dain's Content </a></li>",
        "<li class=\"menu_li\"><a href=\"../../../../JoziBlogs/JoziBlog.html\"> Jozi's Content </a></li>",
        "</ul>",
        "</nav>",
    ].join("\n");
}


