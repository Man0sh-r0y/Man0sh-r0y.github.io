var id = document.getElementById("auicon");
var id1 = document.getElementById("auicon1");
var id2 = document.getElementById("auicon2");
var id3 = document.getElementById("auicon3");

    var mysong = document.getElementById("mySong");
    id.onclick = function name() {
        if(mysong.paused) {
            mysong.play();
            id.src = "./img/pause.png"
        } else {
            mysong.pause();
            id.src = "./img/play.png"
        }
    }
    id3.onclick = function name() {
        if(mysong.paused) {
            mysong.play();
            id3.src = "./img/pause.png"
        } else {
            mysong.pause();
            id3.src = "./img/play.png"
        }
    }
    id1.onclick = function name() {
        if(mysong.paused) {
            mysong.play();
            id1.src = "./img/pause.png"
        } else {
            mysong.pause();
            id1.src = "./img/play.png"
        }
    }
    id2.onclick = function name() {
        if(mysong.paused) {
            mysong.play();
            id2.src = "./img/pause.png"
        } else {
            mysong.pause();
            id2.src = "./img/play.png"
        }
    }