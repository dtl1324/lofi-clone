const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// full-screen mode
$('.fullscreen').onclick = () => {
    let html = $('html');
    let isfullscreen = document.fullscreenElement;
    if (isfullscreen === null) {
        html.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}
// ---------------display and close modal-----------
// introduction modal
$('#tutorial').onclick = (e) => {
    e.preventDefault();
    $('.introduction').classList.remove('hide');
}
$('.close-introducton-btn').onclick = (e) => {
    e.preventDefault();
    $('.introduction').classList.add('hide');
}
// chose slider introduction
const mediaitems = $$('.media-item');
const chosenbtns = $$('.chosen-btn');
const descriptitems = $$('.descript-item');
const nextbtns = $$('.next-btn');
chosenbtns.forEach((element, index) => {
    let mediaitem = mediaitems[index];
    let descriptitem = descriptitems[index];
    let nextbtn = nextbtns[index];
    let chosenbtn = chosenbtns[index];
    let newindex = index + 1;
    element.onclick = () => {
        $('.chosen-btn.active').classList.remove('active');
        $('.media-item.active').classList.remove('active');
        $('.descript-item.active').classList.remove('active');
        $('.next-btn.active').classList.remove('active');
        chosenbtn.classList.add('active');
        mediaitem.classList.add('active');
        descriptitem.classList.add('active');
        nextbtn.classList.add('active');
    }
    if (index < 4) {
        nextbtn.onclick = () => {

            chosenbtn = chosenbtns[newindex]
            nextbtn = nextbtns[newindex];
            mediaitem = mediaitems[newindex];
            descriptitem = descriptitems[newindex];
            $('.chosen-btn.active').classList.remove('active');
            $('.media-item.active').classList.remove('active');
            $('.descript-item.active').classList.remove('active');
            $('.next-btn.active').classList.remove('active');
            chosenbtn.classList.add('active');
            mediaitem.classList.add('active');
            descriptitem.classList.add('active');
            nextbtn.classList.add('active');
        }
    } else {
        nextbtn.onclick = () => {
            $('.introduction').classList.add('hide');
            $('.register').classList.remove('hide');
            $('.close-register-btn').onclick = () => {
                $('.register').classList.add('hide');
            }
        }

    }

})
// pricing modal
$('#pricing').onclick = (e) => {
    e.preventDefault();
    $('.pricing').classList.remove('hide');
}
$('.close-price-btn').onclick = () => {
    $('.pricing').classList.add('hide');
}
$('.slide-img').onmousedown = () => {
    $('.slide-img img').style.animationPlayState = 'paused';
    $('.slide-img img').style.cursor = 'grabbing';
}
$('.slide-img').onmouseup = () => {
    $('.slide-img img').style.animationPlayState = 'running';
    $('.slide-img img').style.cursor = 'grab';
}
// switch chose pay for month or year
function payoption() {
    let ispayforyear = false;
    $('#input').addEventListener('change', function () {
        if (ispayforyear == false) {
            ispayforyear = true;
            $('.pay-for-yearly').style.opacity = 0.6;
            $('.pay-for-monthly').style.opacity = 1;
            $('.price-saleoff').style.opacity = 0;
            $('.premium-price').innerHTML = `$3.99<span>/month</span>`
        } else {
            ispayforyear = false;
            $('.premium-price').innerHTML = `$2.99<span>/month</span>`
            $('.pay-for-monthly').style.opacity = 0.6;
            $('.pay-for-yearly').style.opacity = 1;
            $('.price-saleoff').style.opacity = 1;
        }
    }
    )
}
payoption();

// contact modal
$('#contact').onclick = (e) => {
    e.preventDefault();
    $('.contact').classList.remove('hide')
}
$('.close-contact-btn').onclick = (e) => {
    $('.contact').classList.add('hide')
}
// about us
$('#about').onclick = (e) => {
    e.preventDefault();
    $('.about-modal').classList.remove('hide')
}
$('.close-aboutus-btn').onclick = (e) => {
    $('.about-modal').classList.add('hide')
}
// share modal and drag/drop share modal
$('.share-btn').onclick = () => {
    $('.share').classList.remove('hide');
}
$('.close-share-btn ').onclick = () => {
    $('.share').classList.add('hide');
}
$('.share-modal').ondragend = function (e) {
    e.stopPropagation();
    var left = e.clientX;
    var top = e.clientY;
    $('.share-modal').style.top = top + 'px'
    $('.share-modal').style.left = left + 'px'
}

// signup modal
$('.signup-btn').onclick = () => {
    $('.register').classList.remove('hide');
}
$('.close-register-btn').onclick = () => {
    $('.register').classList.add('hide');
}
$('#login').onclick = (e) => {
    e.preventDefault();
    $('.register').classList.add('hide');
    $('.login').classList.remove('hide');
}
// login modal
$('.signin-btn').onclick = (e) => {
    e.preventDefault();
    $('.login').classList.remove('hide');
}
$('.close-login-btn').onclick = () => {
    $('.login').classList.add('hide');
}
$('#signup').onclick = (e) => {
    e.preventDefault();
    $('.login').classList.add('hide');
    $('.register').classList.remove('hide');
}
//-----user customization modal
// setting-modal
$('#settings').onclick = () => {
    $('.settings-icon').classList.toggle('color-active');
    $('.settings-board').classList.toggle('hide');
    $('.templates-icon').classList.remove('color-active');
    $('.templates-board').classList.add('hide');
    $('.sets-icon').classList.remove('color-active');
    $('.sets-board').classList.add('hide');
    $('.focus-icon').classList.remove('color-active');
    $('.focus-mode-board').classList.add('hide');

}
$('.settings-board').onclick = (e) => {
    e.stopPropagation();
}
// chose mood mode
let boxmoods = $$('.box-mood')
let moodicons = $$('.mood-icon')
boxmoods.forEach((element, index) => {
    let moodicon = moodicons[index];
    element.onclick = () => {
        $('.mood-icon.color-active').classList.remove('color-active');
        moodicon.classList.add('color-active');
    }
})
// templates modal
$('#templates').onclick = () => {
    $('.templates-icon').classList.toggle('color-active');
    $('.templates-board').classList.toggle('hide');
    $('.settings-icon').classList.remove('color-active');
    $('.settings-board').classList.add('hide');
    $('.sets-icon').classList.remove('color-active');
    $('.sets-board').classList.add('hide');
    $('.focus-icon').classList.remove('color-active');
    $('.focus-mode-board').classList.add('hide');
}
$('.templates-board').onclick = (e) => {
    e.stopPropagation();
}
// sets modal
$('#sets').onclick = () => {
    $('.sets-icon').classList.toggle('color-active');
    $('.sets-board').classList.toggle('hide');
    $('.focus-icon').classList.remove('color-active');
    $('.focus-mode-board').classList.add('hide');
    $('.templates-icon').classList.remove('color-active');
    $('.templates-board').classList.add('hide');
    $('.settings-icon').classList.remove('color-active');
    $('.settings-board').classList.add('hide');
}
$('.sets-board').onclick = (e) => {
    e.stopPropagation();
}
// focus modal
$('#focus-mode').onclick = () => {
    $('.focus-icon').classList.toggle('color-active');
    $('.focus-mode-board').classList.toggle('hide');
    $('.settings-icon').classList.remove('color-active');
    $('.settings-board').classList.add('hide');
    $('.templates-icon').classList.remove('color-active');
    $('.templates-board').classList.add('hide');
    $('.sets-icon').classList.remove('color-active');
    $('.sets-board').classList.add('hide');
}
$('.focus-mode-board').onclick = (e) => {
    e.stopPropagation();
}
// open pricing modal
$$('.pricing-btn')[0].onclick = () => {
    $('.pricing').classList.remove('hide');
}
$$('.pricing-btn')[1].onclick = () => {
    $('.pricing').classList.remove('hide');
}
// click outside the customize them close the board
$$('.main-video').forEach(element => {
    element.onclick = () => {
        $('.settings-icon').classList.remove('color-active');
        $('.settings-board').classList.add('hide');
        $('.templates-icon').classList.remove('color-active');
        $('.templates-board').classList.add('hide');
        $('.sets-icon').classList.remove('color-active');
        $('.sets-board').classList.add('hide');
        $('.focus-icon').classList.remove('color-active');
        $('.focus-mode-board').classList.add('hide');

    }
});
// term and condition modal
$('#term').onclick = ()=> {
    $('.register').classList.add('hide');
   $('.overlay-term').classList.remove('hide');
}
$('.close-term-btn').onclick = ()=> {
    $('.overlay-term').classList.add('hide');
 }
 $('.back-to-about').onclick = ()=>{
    $('.overlay-term').classList.add('hide');
    $('.about-modal').classList.remove('hide');
 }

// --------------end modal handle-----------
// -------------change background----------
$('.switch').onchange = (e) => {
    if (e.target.checked) {
        $('#day-video').style.opacity = 1;
        $('#night-video').style.opacity = 0;
    } else {
        $('#day-video').style.opacity = 0;
        $('#night-video').style.opacity = 1;
    }
}
let preinputvalue = 0;
$('#cityrain-adjust').oninput = (e) => {
    if (e.target.value != 0 && preinputvalue == 0) {
        preinputvalue = e.target.value;
        $('#day-video').style.opacity = 0;
        $('#night-video').style.opacity = 0;
        setTimeout(function () {
            $('#day-video').src = './assets/media/RAINY_DAY.mp4';
            $('#night-video').src = './assets/media/RAINY_NIGHT.mp4';
            if ($('#bg-adjust').checked) {
                $('#day-video').style.opacity = 1;
                $('#night-video').style.opacity = 0;
            } else {
                $('#day-video').style.opacity = 0;
                $('#night-video').style.opacity = 1;
            }
        }, 2000)
    } else if (e.target.value == 0 && preinputvalue != 0) {
        preinputvalue = e.target.value;
        $('#day-video').style.opacity = 0;
        $('#night-video').style.opacity = 0;
        setTimeout(function () {
            $('#day-video').src = './assets/media/DAY.mp4';
            $('#night-video').src = './assets/media/NIGHT.mp4';
            if ($('#bg-adjust').checked) {
                $('#day-video').style.opacity = 1;
                $('#night-video').style.opacity = 0;
            } else {
                $('#day-video').style.opacity = 0;
                $('#night-video').style.opacity = 1;
            }
        }, 2000)
    }
}
// music player
const mainaudio = $('#main-audio');
const playsongbtn = $('.toggle-btn')
const nextsongbtn = $('.nextbtn ')
const prevsongbtn = $('.prevbtn ')
const music = {
    song: [
        {
            name: "Star Sky",
            path: "./assets/song/starsky.mp3"
        },
        {
            name: "All Falls Down",
            path: "./assets/song/allfallsdown.mp3"
        },
        {
            name: "Lost Control",
            path: "./assets/song/lostcontrol.mp3"
        },
        {
            name: "Sea Sky",
            path: "./assets/song/seasky.mp3"
        },
        {
            name: "Victory",
            path: "./assets/song/victory.mp3"
        },
        {
            name: "Unstoppable",
            path: "./assets/song/unstoppable.mp3"
        },
        {
            name: "Futari Kimochi",
            path: "./assets/song/futarikimochi.mp3"
        },
        {
            name: "Pretty Girl",
            path: "./assets/song/prettygirl.mp3"
        },
        {
            name: "The Spectre",
            path: "./assets/song/thespectre.mp3"
        },
        {
            name: "Holo",
            path: "./assets/song/holo.mp3"
        },
        {
            name: "Dislocation Time & Space",
            path: "./assets/song/dislocationoftimeandspace.mp3"
        },
        {
            name: "Clear Wind",
            path: "./assets/song/clearwind.mp3"
        }, {
            name: "Fly Away",
            path: "./assets/song/flyaway.mp3"
        }, {
            name: "Glad You Came",
            path: "./assets/song/gladyoucame.mp3"
        }, {
            name: "Here With You",
            path: "./assets/song/herewithyou.mp3"
        }, {
            name: "Symphony Of Justice",
            path: "./assets/song/symphonyofjustice.mp3"
        }, {
            name: "Buddha Sound",
            path: "./assets/song/buddhasound.mp3"
        }, {
            name: "Windy Hill",
            path: "./assets/song/windy hill.mp3"
        }, {
            name: "Butterfly",
            path: "./assets/song/butterfly.mp3"
        }
    ],
    currentindex: 0,
    isplaying: false,
    loadcurrensong: function () {
        const html = this.song[this.currentindex].name;
        mainaudio.src = this.song[this.currentindex].path;
        $('#name-song').innerHTML = html;
    },
    handler: function () {
        const _this = this;
        // play/pause button
        playsongbtn.onclick = function () {
            // _this.loadcurrensong();
            if (_this.isplaying == true) {
                mainaudio.pause();
                // _this.isplaying = false;
                // playsongbtn.classList.remove('playing')

            } else {
                mainaudio.play();
                // _this.isplaying = true;
                // playsongbtn.classList.add('playing')
            }

        }

        // when song is playing
        mainaudio.onplaying = function () {

            _this.isplaying = true;
            playsongbtn.classList.add('playing')
        }
        // when song is paused
        mainaudio.onpause = function () {
            _this.isplaying = false;
            playsongbtn.classList.remove('playing')
        }
        //next song 
        nextsongbtn.onclick = function () {
            _this.currentindex++;
            if (_this.currentindex > _this.song.length - 1) {
                _this.currentindex = 0;
            }
            _this.loadcurrensong()
            mainaudio.play();
        }
        // previous song
        prevsongbtn.onclick = function () {
            _this.currentindex--;
            if (_this.currentindex < 0) {
                _this.currentindex = _this.song.length - 1;
            }
            _this.loadcurrensong();
            mainaudio.play();

        }
        // when a song ending
        mainaudio.onended = function () {
            nextsongbtn.click();
        }
    },
    start: function () {
        this.loadcurrensong();
        this.handler();
    }
}
music.start();
// adjust volume
// ------main audio volume
$('#volume-adjust').oninput = function (e) {
    mainaudio.volume = e.target.value / 100;
}
// -------city rain volume
$('#cityrain-adjust').addEventListener('input', function (e) {
    $('#city-rain-music').play();
    $('#city-rain-music').volume = e.target.value / 100;
})
// ---------city traaffic volume
$('#citytraffic-adjust').addEventListener('input', function (e) {
    $('#city-traffic-music').play();
    $('#city-traffic-music').volume = e.target.value / 100;
})
// ----------
$('#fireplace-adjust').addEventListener('input', function (e) {
    $('#fireplace-music').play();
    $('#fireplace-music').volume = e.target.value / 100;
})

