const navigation = document.getElementById("navigation_bar");

navigation.innerHTML = [
    // "<nav>",
    // "<a class=\"flag\" href=\"index.html\"> <img src=\"../../../../AboutMe/Images/1280px-Flag_of_Johannesburg,_South_Africa.svg.png\" alt=\"Flag of Johannesburg\" width=\"200px\" height=\"100px\"></a>",
    // "</nav>",
    // "<h1> <u> JOZI LIFE </u> </h1>",
    "<h1 class=\"name_border\"> <a class=\"name\" href=\"../../../../index.html\"> <img class=\"flag\" src=\"../../../../AboutMe/Images/1280px-Flag_of_Johannesburg,_South_Africa.svg.png\" alt=\"Flag of Johannesburg\" width=\"80px\" height=\"40px\"> JOZI LIFE </a></h1>",
    "<nav>",
    "<ul>",
    "<li class=\"menu_li\"><a href=\"../../../../index.html\"> Home </a></li>",
    // "&nbsp;",
    "<li class=\"menu_li\"><a href=\"../../../../AboutMe/AboutMe.html\"> About Me </a></li>",
    // "&nbsp;",
    "<li class=\"menu_li\"><a href=\"../../../../Blogs/DainBlog.html\"> Dain's Entries </a></li>",
    // "&nbsp;",
    "<li class=\"menu_li\"><a href=\"../../../../JoziBlogs/JoziBlog.html\"> Jozi's Entries </a></li>",
    "</ul>",
    "</nav>",

].join("\n");