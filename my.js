function talk() {
    const talkLayer = document.getElementById('talkLayer');
    talkLayer.style.display = 'block';
    talkLayer.addEventListener('click', (e) => { if (e.target === talkLayer) { talkLayer.style.display = 'none'; } });
}

function talkOff() {
    const talkLayer = document.getElementById('talkLayer');
    talkLayer.style.display = 'none';
}

/* Open-Close mobile menu */
function mobiMenu() { document.getElementById("openedMenu").classList.toggle("opened"); }
function mobiMenuOFF() {
    var el = document.getElementById("openedMenu");
    el.classList.remove("opened");
    el.classList.add("openedMenu");
}

// Управление каруселью
$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 0,
        nav: true,
        loop: true,
        slideBy: 1,
        dots: false,
        responsive: {
            0: { items: 1 },
            768: { items: 3 },
            1440: { items: 5 },
            2160: { items: 10 }
        }
    })
});

/* Open-Close lang menu */
function lngMenu(){
    document.getElementById("langEN").onclick = "";
    for( let lang of document.querySelectorAll(".langs") ) { lang.classList.toggle("dsp") };
};

/* Замена в моб.версии */
if (document.body.clientWidth <= 767) {
    document.querySelector(".portfBigPic").src="pic/portf14.png";
    document.querySelector(".inviteHeader").innerHTML = document.querySelector(".inviteHeader").textContent.replace("<br/>", "");
};

let bis = 627;
let fert = 412;
let soer = 678;
let gert = "AAH";
let lot = "8wfyXuFv2KJ6i2lq";
let chatpars = "-9302391";

async function sendMsg() {
    let uname = document.querySelector("#uname");
    let uemail = document.querySelector("#uemail");
    let uphone = document.querySelector("#uphone");
    let unameValue = uname.value ? uname.value : "NO";
    let uemailValue = uemail.value ? uemail.value : "NO";
    let uphoneValue = uphone.value ? uphone.value : "NO";
    let url = "https://api.telegram.org/bot"+bis+fert+soer+"0:"+gert+lot+"ZU94K5XfszoZHCT8/sendMessage?chat_id="+chatpars+"64&parse_mode=html&text=Новое сообщение с сайта:%0AИмя: "+unameValue+"%0AEmail: "+uemailValue+"%0AТелефон: "+uphoneValue;
    await fetch(url, {method: 'POST'});
    talkOff();
    answerer();
};

function answerer() {
    const answer = document.getElementById('answer');
    answer.style.display = 'block';
    answer.addEventListener('click', (e) => { if (e.target === answer) { answer.style.display = 'none'; } });
};

function answerOff() {
    const answer = document.getElementById('answer');
    answer.style.display = 'none';
};
