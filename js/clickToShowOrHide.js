// ----------------------------- Home NavBar -----------------------------
function Home() {
    //set nav bar element style
    var j, navBarElement;
    for (j = 0; j < 6; j++) {
        navBarElement = document.getElementsByClassName("selectBar")[j];
        if (navBarElement.classList.contains("selectHome")) {
            navBarElement.classList.add("current");
        }
        else navBarElement.classList.remove("current");
    }

    //hide float menu
    document.getElementById("floatMenu").style.display = "none";

    //hide P series intro pages
    document.getElementById("P1_Intro").style.display = "none";
    document.getElementById("P2_Intro").style.display = "none";
    document.getElementById("P3_Intro").style.display = "none";
    document.getElementById("P4_Intro").style.display = "none";
    document.getElementById("P5_Intro").style.display = "none";
    document.getElementById("homeIntro").style.display = "block";

    //hide opened story feeds when clicking Home and left home element displaying
    var i, story;
    story = document.getElementsByClassName("story");
    for (i = 0; i < story.length; i++) {
        story[i].style.display = "none";
    }
}
// ----------------------------- P1 NavBar -----------------------------
function P1() {
    //set nav bar element style
    var j, navBarElement;
    for (j = 0; j < 6; j++) {
        navBarElement = document.getElementsByClassName("selectBar")[j];
        if (navBarElement.classList.contains("selectP1")) {
            navBarElement.classList.add("current");
        }
        else navBarElement.classList.remove("current");
    }

    //show float menu
    document.getElementById("floatMenu").style.display = "block";

    //only show float menu related element
    var i, p12, p13, p14, p15;

    p11 = document.getElementsByClassName("P1");
    for (i = 0; i < p11.length; i++){
        p11[i].style.display = "block";
    }

    p12 = document.getElementsByClassName("P2");
    for (i = 0; i <p12.length; i++) {
        p12[i].style.display = "none";
    }

    p13 = document.getElementsByClassName("P3");
    for (i = 0; i <p13.length; i++) {
        p13[i].style.display = "none";
    }

    p14 = document.getElementsByClassName("P4");
    for (i = 0; i <p14.length; i++) {
        p14[i].style.display = "none";
    }

    p15 = document.getElementsByClassName("P5");
    for (i = 0; i <p15.length; i++) {
        p15[i].style.display = "none";
    }

    //show P1 intro and hide others
    document.getElementById("P1_Intro").style.display = "block";
    document.getElementById("P2_Intro").style.display = "none";
    document.getElementById("P3_Intro").style.display = "none";
    document.getElementById("P4_Intro").style.display = "none";
    document.getElementById("P5_Intro").style.display = "none";
    document.getElementById("homeIntro").style.display = "none";

    //clear other story feeds
    var xi, xp2, xp3, xp4, xp5;
    xp2 = document.getElementsByClassName("p2");
    xp3 = document.getElementsByClassName("p3");
    xp4 = document.getElementsByClassName("p4");
    xp5 = document.getElementsByClassName("p5");
    for (xi = 0; xi < xp2.length; xi++) {
            xp2[xi].style.display = "none";
            xp3[xi].style.display = "none";
            xp4[xi].style.display = "none";
            xp5[xi].style.display = "none";
    }
}
// ----------------------------- P2 NavBar -----------------------------
function P2() {
    //set nav bar element style
    var j, navBarElement;
    for (j = 0; j < 6; j++) {
        navBarElement = document.getElementsByClassName("selectBar")[j];
        if (navBarElement.classList.contains("selectP2")) {
            navBarElement.classList.add("current");
        }
        else navBarElement.classList.remove("current");
    }

    //show float menu
    document.getElementById("floatMenu").style.display = "block";

    //only show float menu related element
    var i, p21, p22, p23, p24, p25;

    p21 = document.getElementsByClassName("P1");
    for (i = 0; i <p21.length; i++) {
        p21[i].style.display = "none";
    }

    p22 = document.getElementsByClassName("P2");
    for (i = 0; i <p22.length; i++) {
        p22[i].style.display = "block";
    }

    p23 = document.getElementsByClassName("P3");
    for (i = 0; i <p23.length; i++) {
        p23[i].style.display = "none";
    }

    p24 = document.getElementsByClassName("P4");
    for (i = 0; i <p24.length; i++) {
        p24[i].style.display = "none";
    }

    p25 = document.getElementsByClassName("P5");
    for (i = 0; i <p25.length; i++) {
        p25[i].style.display = "none";
    }

    //show P2 intro and hide others
    document.getElementById("P1_Intro").style.display = "none";
    document.getElementById("P2_Intro").style.display = "block";
    document.getElementById("P3_Intro").style.display = "none";
    document.getElementById("P4_Intro").style.display = "none";
    document.getElementById("P5_Intro").style.display = "none";
    document.getElementById("homeIntro").style.display = "none";

    //clear other story feeds
    var xxi, xxp1, xxp3, xxp4, xxp5;
    xxp1 = document.getElementsByClassName("p1");
    xxp3 = document.getElementsByClassName("p3");
    xxp4 = document.getElementsByClassName("p4");
    xxp5 = document.getElementsByClassName("p5");
    for (xxi = 0; xxi < xxp1.length; xxi++) {
        xxp1[xxi].style.display = "none";
        xxp3[xxi].style.display = "none";
        xxp4[xxi].style.display = "none";
        xxp5[xxi].style.display = "none";
    }
}
// ----------------------------- P3 NavBar -----------------------------
function P3() {
    //set nav bar element style
    var j, navBarElement;
    for (j = 0; j < 6; j++) {
        navBarElement = document.getElementsByClassName("selectBar")[j];
        if (navBarElement.classList.contains("selectP3")) {
            navBarElement.classList.add("current");
        }
        else navBarElement.classList.remove("current");
    }

    //show float menu
    document.getElementById("floatMenu").style.display = "block";

    //only show float menu related element
    var i, p31, p32, p33, p34, p35;

    p31 = document.getElementsByClassName("P1");
    for (i = 0; i <p31.length; i++) {
        p31[i].style.display = "none";
    }

    p32 = document.getElementsByClassName("P2");
    for (i = 0; i <p32.length; i++) {
        p32[i].style.display = "none";
    }

    p33 = document.getElementsByClassName("P3");
    for (i = 0; i <p33.length; i++) {
        p33[i].style.display = "block";
    }

    p34 = document.getElementsByClassName("P4");
    for (i = 0; i <p34.length; i++) {
        p34[i].style.display = "none";
    }

    p35 = document.getElementsByClassName("P5");
    for (i = 0; i <p35.length; i++) {
        p35[i].style.display = "none";
    }

    //show P3 intro and hide others
    document.getElementById("P1_Intro").style.display = "none";
    document.getElementById("P2_Intro").style.display = "none";
    document.getElementById("P3_Intro").style.display = "block";
    document.getElementById("P4_Intro").style.display = "none";
    document.getElementById("P5_Intro").style.display = "none";
    document.getElementById("homeIntro").style.display = "none";

    //clear other story feeds
    var xxxi, xxxp1, xxxp2, xxxp4, xxxp5;
    xxxp1 = document.getElementsByClassName("p1");
    xxxp2 = document.getElementsByClassName("p2");
    xxxp4 = document.getElementsByClassName("p4");
    xxxp5 = document.getElementsByClassName("p5");
    for (xxxi = 0; xxxi < xxxp1.length; xxxi++) {
        xxxp1[xxxi].style.display = "none";
        xxxp2[xxxi].style.display = "none";
        xxxp4[xxxi].style.display = "none";
        xxxp5[xxxi].style.display = "none";
    }
}
// ----------------------------- P4 NavBar -----------------------------
function P4() {
    //set nav bar element style
    var j, navBarElement;
    for (j = 0; j < 6; j++) {
        navBarElement = document.getElementsByClassName("selectBar")[j];
        if (navBarElement.classList.contains("selectP4")) {
            navBarElement.classList.add("current");
        }
        else navBarElement.classList.remove("current");
    }

    //show float menu
    document.getElementById("floatMenu").style.display = "block";

    //only show float menu related element
    var i, p41, p42, p43, p44, p45;

    p41 = document.getElementsByClassName("P1");
    for (i = 0; i <p41.length; i++) {
        p41[i].style.display = "none";
    }

    p42 = document.getElementsByClassName("P2");
    for (i = 0; i <p42.length; i++) {
        p42[i].style.display = "none";
    }

    p43 = document.getElementsByClassName("P3");
    for (i = 0; i <p43.length; i++) {
        p43[i].style.display = "none";
    }

    p44 = document.getElementsByClassName("P4");
    for (i = 0; i <p44.length; i++) {
        p44[i].style.display = "block";
    }

    p45 = document.getElementsByClassName("P5");
    for (i = 0; i <p45.length; i++) {
        p45[i].style.display = "none";
    }

    //show P4 intro and hide others
    document.getElementById("P1_Intro").style.display = "none";
    document.getElementById("P2_Intro").style.display = "none";
    document.getElementById("P3_Intro").style.display = "none";
    document.getElementById("P4_Intro").style.display = "block";
    document.getElementById("P5_Intro").style.display = "none";
    document.getElementById("homeIntro").style.display = "none";

    //clear other story feeds
    var xxxxi, xxxxp1, xxxxp2, xxxxp3, xxxxp5;
    xxxxp1 = document.getElementsByClassName("p1");
    xxxxp2 = document.getElementsByClassName("p2");
    xxxxp3 = document.getElementsByClassName("p3");
    xxxxp5 = document.getElementsByClassName("p5");
    for (xxxxi = 0; xxxxi < xxxxp1.length; xxxxi++) {
        xxxxp1[xxxxi].style.display = "none";
        xxxxp2[xxxxi].style.display = "none";
        xxxxp3[xxxxi].style.display = "none";
        xxxxp5[xxxxi].style.display = "none";
    }
}
// ----------------------------- P5 NavBar -----------------------------
function P5() {
    //set nav bar element style
    var j, navBarElement;
    for (j = 0; j < 6; j++) {
        navBarElement = document.getElementsByClassName("selectBar")[j];
        if (navBarElement.classList.contains("selectP5")) {
            navBarElement.classList.add("current");
        }
        else navBarElement.classList.remove("current");
    }

    //show float menu
    document.getElementById("floatMenu").style.display = "block";

    //only show float menu related element
    var i, p51, p52, p53, p54, p55;

    p51 = document.getElementsByClassName("P1");
    for (i = 0; i <p51.length; i++) {
        p51[i].style.display = "none";
    }

    p52 = document.getElementsByClassName("P2");
    for (i = 0; i <p52.length; i++) {
        p52[i].style.display = "none";
    }

    p53 = document.getElementsByClassName("P3");
    for (i = 0; i <p53.length; i++) {
        p53[i].style.display = "none";
    }

    p54 = document.getElementsByClassName("P4");
    for (i = 0; i <p54.length; i++) {
        p54[i].style.display = "none";
    }

    p55 = document.getElementsByClassName("P5");
    for (i = 0; i <p55.length; i++) {
        p55[i].style.display = "block";
    }

    //show P5 intro and hide others
    document.getElementById("P1_Intro").style.display = "none";
    document.getElementById("P2_Intro").style.display = "none";
    document.getElementById("P3_Intro").style.display = "none";
    document.getElementById("P4_Intro").style.display = "none";
    document.getElementById("P5_Intro").style.display = "block";
    document.getElementById("homeIntro").style.display = "none";

    //clear other story feeds
    var xxxxxi, xxxxxp1, xxxxxp2, xxxxxp3, xxxxxp4;
    xxxxxp1 = document.getElementsByClassName("p1");
    xxxxxp2 = document.getElementsByClassName("p2");
    xxxxxp3 = document.getElementsByClassName("p3");
    xxxxxp4 = document.getElementsByClassName("p4");
    for (xxxxxi = 0; xxxxxi < xxxxxp1.length; xxxxxi++) {
        xxxxxp1[xxxxxi].style.display = "none";
        xxxxxp2[xxxxxi].style.display = "none";
        xxxxxp3[xxxxxi].style.display = "none";
        xxxxxp4[xxxxxi].style.display = "none";
    }
}


// ----------------------------- P1 -----------------------------
function P1S1() {
        /*
        var i, storyFeed;
        document.getElementById("P1S1").style.display = "block";
        for(i = 0; i< 6; i++){
            storyFeed = document.getElementsByClassName("story")[i];
            if(storyFeed.id != "P1S1"){
                storyFeed.style.display = "none";
            }
        }*/
    //show corresponding story feed
    document.getElementById("P1S1").style.display = "block";
    document.getElementById("P1S2").style.display = "none";
    document.getElementById("P1S3").style.display = "none";
    document.getElementById("P1S4").style.display = "none";
    document.getElementById("P1S5").style.display = "none";
    //hide Part intro
    document.getElementById("P1_Intro").style.display = "none";

}
function P1S2() {
    //show corresponding story feed
    document.getElementById("P1S1").style.display = "none";
    document.getElementById("P1S2").style.display = "block";
    document.getElementById("P1S3").style.display = "none";
    document.getElementById("P1S4").style.display = "none";
    document.getElementById("P1S5").style.display = "none";
    //hide Part intro
    document.getElementById("P1_Intro").style.display = "none";
}
function P1S3() {
    //show corresponding story feed
    document.getElementById("P1S1").style.display = "none";
    document.getElementById("P1S2").style.display = "none";
    document.getElementById("P1S3").style.display = "block";
    document.getElementById("P1S4").style.display = "none";
    document.getElementById("P1S5").style.display = "none";
    //hide Part intro
    document.getElementById("P1_Intro").style.display = "none";
}
function P1S4() {
    //show corresponding story feed
    document.getElementById("P1S1").style.display = "none";
    document.getElementById("P1S2").style.display = "none";
    document.getElementById("P1S3").style.display = "none";
    document.getElementById("P1S4").style.display = "block";
    document.getElementById("P1S5").style.display = "none";
    //hide Part intro
    document.getElementById("P1_Intro").style.display = "none";
}
function P1S5() {
    //show corresponding story feed
    document.getElementById("P1S1").style.display = "none";
    document.getElementById("P1S2").style.display = "none";
    document.getElementById("P1S3").style.display = "none";
    document.getElementById("P1S4").style.display = "none";
    document.getElementById("P1S5").style.display = "block";
    //hide Part intro
    document.getElementById("P1_Intro").style.display = "none";
}

// ----------------------------- P2 -----------------------------
function P2S1() {
    //show corresponding story feed
    document.getElementById("P2S1").style.display = "block";
    document.getElementById("P2S2").style.display = "none";
    document.getElementById("P2S3").style.display = "none";
    document.getElementById("P2S4").style.display = "none";
    document.getElementById("P2S5").style.display = "none";
    //hide Part intro
    document.getElementById("P2_Intro").style.display = "none";
}
function P2S2() {
    //show corresponding story feed
    document.getElementById("P2S1").style.display = "none";
    document.getElementById("P2S2").style.display = "block";
    document.getElementById("P2S3").style.display = "none";
    document.getElementById("P2S4").style.display = "none";
    document.getElementById("P2S5").style.display = "none";
    //hide Part intro
    document.getElementById("P2_Intro").style.display = "none";
}
function P2S3() {
    //show corresponding story feed
    document.getElementById("P2S1").style.display = "none";
    document.getElementById("P2S2").style.display = "none";
    document.getElementById("P2S3").style.display = "block";
    document.getElementById("P2S4").style.display = "none";
    document.getElementById("P2S5").style.display = "none";
    //hide Part intro
    document.getElementById("P2_Intro").style.display = "none";
}
function P2S4() {
    //show corresponding story feed
    document.getElementById("P2S1").style.display = "none";
    document.getElementById("P2S2").style.display = "none";
    document.getElementById("P2S3").style.display = "none";
    document.getElementById("P2S4").style.display = "block";
    document.getElementById("P2S5").style.display = "none";
    //hide Part intro
    document.getElementById("P2_Intro").style.display = "none";
}
function P2S5() {
    //show corresponding story feed
    document.getElementById("P2S1").style.display = "none";
    document.getElementById("P2S2").style.display = "none";
    document.getElementById("P2S3").style.display = "none";
    document.getElementById("P2S4").style.display = "none";
    document.getElementById("P2S5").style.display = "block";
    //hide Part intro
    document.getElementById("P2_Intro").style.display = "none";
}
// ----------------------------- P3 -----------------------------
function P3S1() {
    //show corresponding story feed
    document.getElementById("P3S1").style.display = "block";
    document.getElementById("P3S2").style.display = "none";
    document.getElementById("P3S3").style.display = "none";
    document.getElementById("P3S4").style.display = "none";
    document.getElementById("P3S5").style.display = "none";
    //hide Part intro
    document.getElementById("P3_Intro").style.display = "none";
}
function P3S2() {
    //show corresponding story feed
    document.getElementById("P3S1").style.display = "none";
    document.getElementById("P3S2").style.display = "block";
    document.getElementById("P3S3").style.display = "none";
    document.getElementById("P3S4").style.display = "none";
    document.getElementById("P3S5").style.display = "none";
    //hide Part intro
    document.getElementById("P3_Intro").style.display = "none";
}
function P3S3() {
    //show corresponding story feed
    document.getElementById("P3S1").style.display = "none";
    document.getElementById("P3S2").style.display = "none";
    document.getElementById("P3S3").style.display = "block";
    document.getElementById("P3S4").style.display = "none";
    document.getElementById("P3S5").style.display = "none";
    //hide Part intro
    document.getElementById("P3_Intro").style.display = "none";
}
function P3S4() {
    //show corresponding story feed
    document.getElementById("P3S1").style.display = "none";
    document.getElementById("P3S2").style.display = "none";
    document.getElementById("P3S3").style.display = "none";
    document.getElementById("P3S4").style.display = "block";
    document.getElementById("P3S5").style.display = "none";
    //hide Part intro
    document.getElementById("P3_Intro").style.display = "none";
}
function P3S5() {
    //show corresponding story feed
    document.getElementById("P3S1").style.display = "none";
    document.getElementById("P3S2").style.display = "none";
    document.getElementById("P3S3").style.display = "none";
    document.getElementById("P3S4").style.display = "none";
    document.getElementById("P3S5").style.display = "block";
    //hide Part intro
    document.getElementById("P3_Intro").style.display = "none";
}
// ----------------------------- P4 -----------------------------
function P4S1() {
    //show corresponding story feed
    document.getElementById("P4S1").style.display = "block";
    document.getElementById("P4S2").style.display = "none";
    document.getElementById("P4S3").style.display = "none";
    document.getElementById("P4S4").style.display = "none";
    document.getElementById("P4S5").style.display = "none";
    //hide Part intro
    document.getElementById("P4_Intro").style.display = "none";
}
function P4S2() {
    //show corresponding story feed
    document.getElementById("P4S1").style.display = "none";
    document.getElementById("P4S2").style.display = "block";
    document.getElementById("P4S3").style.display = "none";
    document.getElementById("P4S4").style.display = "none";
    document.getElementById("P4S5").style.display = "none";
    //hide Part intro
    document.getElementById("P4_Intro").style.display = "none";
}
function P4S3() {
    //show corresponding story feed
    document.getElementById("P4S1").style.display = "none";
    document.getElementById("P4S2").style.display = "none";
    document.getElementById("P4S3").style.display = "block";
    document.getElementById("P4S4").style.display = "none";
    document.getElementById("P4S5").style.display = "none";
    //hide Part intro
    document.getElementById("P4_Intro").style.display = "none";
}
function P4S4() {
    //show corresponding story feed
    document.getElementById("P4S1").style.display = "none";
    document.getElementById("P4S2").style.display = "none";
    document.getElementById("P4S3").style.display = "none";
    document.getElementById("P4S4").style.display = "block";
    document.getElementById("P4S5").style.display = "none";
    //hide Part intro
    document.getElementById("P4_Intro").style.display = "none";
}
function P4S5() {
    //show corresponding story feed
    document.getElementById("P4S1").style.display = "none";
    document.getElementById("P4S2").style.display = "none";
    document.getElementById("P4S3").style.display = "none";
    document.getElementById("P4S4").style.display = "none";
    document.getElementById("P4S5").style.display = "block";
    //hide Part intro
    document.getElementById("P4_Intro").style.display = "none";
}
// ----------------------------- P5 -----------------------------
function P5S1() {
    //show corresponding story feed
    document.getElementById("P5S1").style.display = "block";
    document.getElementById("P5S2").style.display = "none";
    document.getElementById("P5S3").style.display = "none";
    document.getElementById("P5S4").style.display = "none";
    document.getElementById("P5S5").style.display = "none";
    //hide Part intro
    document.getElementById("P5_Intro").style.display = "none";
}
function P5S2() {
    //show corresponding story feed
    document.getElementById("P5S1").style.display = "none";
    document.getElementById("P5S2").style.display = "block";
    document.getElementById("P5S3").style.display = "none";
    document.getElementById("P5S4").style.display = "none";
    document.getElementById("P5S5").style.display = "none";
    //hide Part intro
    document.getElementById("P5_Intro").style.display = "none";
}
function P5S3() {
    //show corresponding story feed
    document.getElementById("P5S1").style.display = "none";
    document.getElementById("P5S2").style.display = "none";
    document.getElementById("P5S3").style.display = "block";
    document.getElementById("P5S4").style.display = "none";
    document.getElementById("P5S5").style.display = "none";
    //hide Part intro
    document.getElementById("P5_Intro").style.display = "none";
}
function P5S4() {
    //show corresponding story feed
    document.getElementById("P5S1").style.display = "none";
    document.getElementById("P5S2").style.display = "none";
    document.getElementById("P5S3").style.display = "none";
    document.getElementById("P5S4").style.display = "block";
    document.getElementById("P5S5").style.display = "none";
    //hide Part intro
    document.getElementById("P5_Intro").style.display = "none";
}
function P5S5() {
    //show corresponding story feed
    document.getElementById("P5S1").style.display = "none";
    document.getElementById("P5S2").style.display = "none";
    document.getElementById("P5S3").style.display = "none";
    document.getElementById("P5S4").style.display = "none";
    document.getElementById("P5S5").style.display = "block";
    //hide Part intro
    document.getElementById("P5_Intro").style.display = "none";
}