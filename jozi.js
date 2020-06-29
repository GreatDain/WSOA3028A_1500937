let y = 0;

const arrayJozi = ['<a class="recents" href="JoziBlogs/2020/03/15/What-a-DISASTER-1.html"> What a DISASTER - Part 1 </a> <br> <p class = "preview"> I’ve woken up to a pile of hair in my face. It’s a bit dry. I have the urge to stay in bed, but I also desperately need the bathroom. 15 minutes in and I’m still in bed but my alarm is giving me a headache, so I eventually wake up. Bathroom duties occur as per usual. I brush my teeth and look in the mirror. I’m a 20-year-old girl, apparently… Wait, am I?... My reflection in the mirror looks like a boy, but my body parts say otherwise. So, I’m a confused 20-year-old girl lol...</p>',
'<a class="recents" href="JoziBlogs/2020/03/15/What-a-DISASTER-2.html"> What a DISASTER - Part 2 </a> <br> <p class="preview"> We made it to the Gautrain station and walk to towards the platform. The schedule reads “Midrand -20mins”, I’m definitely going to be late. There were many spaces available on the benches, but we sit on a step instead. I will admit, those benches are badly designed, it’s hard not to slowly slide off them. People pass by, some in a hurry, some laid back and relaxed, most dressed in business attire. Some try to talk to us, so we put our earphones in and pretend like they don’t exist. 20 minutes pass by slowly and the train finally arrives... </p>',
'<a class="recents" href="JoziBlogs/2020/03/22/Fast-food-and-earthquakes-1.html"> Fast food and earthquakes - Part 1</a> <br> <p class="preview"> So, here is my story about today. It all started at 1pm, my spirit got zapped across the city and into the heart of Sandton. The office I found myself in was quite fancy. Glass desk, black leather couches, large stocked bookshelf, whiskey on a side table next to a seat overlooking Sandton through large glass office windows. There were many awards and fancy paintings on the walls. It was impressive. All fancy things aside, something felt strange, it felt like a weight was being lifted, and it was, quite literally being lifted. A giant gut appeared in my peripherals as I stood up, apparently this was mine for today. Two thoughts popped into my mind, “please let me be a pregnant lady” and “please don’t be a fat guy”. The boobs were there, the belly was there, but so was the beard… I was indeed in the body of a fat guy... </p>',
];

function nextjozi(){

    document.getElementById('blogJozi');

    if(y < arrayJozi.length - 1){
        y++;
    }
    else{
        y = 0;
    }

    document.getElementById('blogJozi').innerHTML = arrayJozi[y];
}

function prevjozi(){
    document.getElementById('blogJozi');

    if(y<=0){
        y = arrayJozi.length-1;
    }
    else{
        y--;
    }
    document.getElementById('blogJozi').innerHTML = arrayJozi[y];
}