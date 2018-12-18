var cont = 0;
function play(){
    if( cont % 2 == 0){
        document.getElementById('button-music').src = "media/icons/pause.png";
        cont = 0;
    }
    else{
        document.getElementById('button-music').src = "media/icons/play-btn.png";
    }
    cont++;
}