//class shishu

//class shishu ends




var pres_desc = document.getElementById("president_desc");
var princ_desc = document.getElementById("principal_desc");
var vc_m_desc = document.getElementById("vc_morning_desc");
var vc_d_desc = document.getElementById("vc_day_desc");

var pres_btn = documnet.getElementById("president");
var princ_btn = documnet.getElementById("principal");
var vc_m_btn = documnet.getElementById("vc_morning");
var vc_d_btn = documnet.getElementById("vc_day");

function showPres(btn){
    removeClass();
    pres_desc.classList.add("d-block");
}
function showPrinc(btn){
    removeClass();
    princ_desc.classList.add("d-block");
}
function showVc_m(btn){
    removeClass();
    vc_m_desc.classList.add("d-block");
}
function showVc_d(btn){
    removeClass();
    vc_d_desc.classList.add("d-block");
}
//
//function showThis(btn) {    
//    if (btn == pres_btn) {
//        removeClass();
//        pres_desc.classList.remove("d-none");
//        pres_desc.classList.add("vis");
//    } else if (btn == princ_btn) {
//        removeClass();
//        princ_desc.classList.remove("d-none");
//        princ_desc.classList.add("vis");
//    } else if (btn == vc_m_btn) {
//        removeClass();
//        vc_m_desc.classList.remove("d-none");
//        vc_m_desc.classList.add("d-block");
//    } else if (btn == vc_d_btn) {
//        removeClass();
//        vc_d_desc.classList.remove("d-none");
//        vc_d_desc.classList.add("d-block");
//    }
//
//}

function removeClass() {
    // removing class d-block
    pres_desc.classList.remove("d-block");
    princ_desc.classList.remove("d-block");
    vc_m_desc.classList.remove("d-block");
    vc_d_desc.classList.remove("d-block");
    // adding class d-none so that they all becomes invisible
    pres_desc.classList.add("d-none");
    princ_desc.classList.add("d-none");
    vc_m_desc.classList.add("d-none");
    vc_d_desc.classList.add("d-none");
}

//function inside(x) {
//    x.style.transform = "scale(1.2,1.2)";
//    s.style.display = "block";
//}
//
//function outside(x) {
//    x.style.transform = "scale(1,1)";
//}

function alertDeo(){
    alert("this is the alert you might be looking for... isn't it??");
}
function working() {
    alert("we are working on it");
}


function timeDeo(){
    var tm ="";
    var now = new Date();
    var hour = now.getHours();
    if(hour>12) hour-=12;
    var apm = " am";
    if(now.getHours()>12)
    apm = " pm";
    tm += hour + " : " + now.getMinutes() + " : " + now.getSeconds()+apm;
//    str = now.getDate()+" : "+now.getMonth()+" : "+now.getFullYear();
//    document.getElementById("todaysDate").innerHTML = tm;
    alert(tm);
}


function bigNotice(x) {
    x.style.background = "yellow";

}

function normalNotice(x) {
    x.style.background = "orange";
}

function bigSize(x) {
    s.style.height = "500px";
}




function doDate() {
    var str = "";
    var now = new Date();
    str += now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    document.getElementById("todaysDate").innerHTML = str;
}

setInterval(doDate, 1000);
var clk = 0;

function changeText() {
    document.getElementById("sclnm").innerHTML = "Banani Bidyaniketan School and College";
}

//
//$(function () {
//    $('.banner_slider').slick({
//        slidesToShow: 1,
//        slidesToScroll: 1,
//        autoplay: true,
//        autoplaySpeed: 1700,
//        dots: true,
//        arrows: false,
//    });
//
//})
//
//$(function () {
//    $('.ceo_slider').slick({
//        slidesToShow: 1,
//        slidesToScroll: 1,
//        autoplay: true,
//        autoplaySpeed: 1700,
//        dots: true,
//        arrows: false,
//    });
//
//})

var names = document.getElementById('name');
var names_err = document.getElementById('name_err');

var emails = document.getElementById('email');
var emails_err = document.getElementById('email_err');
var email_rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var subs = document.getElementById('sub');
var subs_err = document.getElementById('sub_err');

var msgs = document.getElementById('msg');
var msgs_err = document.getElementById('msg_err');


function form_valid() {
    if (names.value == '') {
        names_err.innerHTML = 'Please Write Your Name';
        names_err.style = 'color: red;';
        names.style = 'border: 1px solid red;';
        names.focus();

        return false;
    } else if (emails.value == '') {
        emails_err.innerHTML = 'Fill your email address';
        emails_err.style = 'color: red;';
        emails.style = 'border: 1px solid red;';
        emails.focus();

        return false;
    } else if (!email_rgx.test(emails.value)) {
        emails_err.innerHTML = 'Please put a valid email address';
        emails_err.style = 'color: red;';
        emails.style = 'border: 1px solid red;';
        emails.focus();

        return false;
    } else if (subs.value == '') {
        subs_err.innerHTML = 'Write a subject';
        subs_err.style = 'color: red;';
        subs.style = 'border: 1px solid red;';
        subs.focus();

        return false;
    } else if (msgs.value == '') {
        msgs_err.innerHTML = 'Please Write a Message for Us';
        msgs_err.style = 'color: red;';
        msgs.style = 'border: 1px solid red;';
        msgs.focus();

        return false;
    }
}

function remove() {
    if (names.value != '') {
        names_err.innerHTML = '';
        names.style = 'border: 1px solid inherit;';
    }

    if (emails.value != '') {
        emails_err.innerHTML = '';
        emails.style = 'border: 1px solid inherit;';
    }

    if (subs.value != '') {
        subs_err.innerHTML = '';
        subs.style = 'border: 1px solid inherit;';
    }
}

names.addEventListener('blur', remove);

emails.addEventListener('blur', remove);

subs.addEventListener('blur', remove);
