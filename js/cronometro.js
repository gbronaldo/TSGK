var cronometro;
function start(){
    
    var min = 0;
    var seg = 0;
    cronometro = setInterval(function(){
        if (seg == 60) {
            seg = 0;
            min++;
        }
        if((min < 10) && (seg < 10)){
            document.getElementById('timer').innerHTML = "0"+min+":"+"0"+seg;
        }
        else if ((min >= 10) && (seg < 10)){
            document.getElementById('timer').innerHTML = min+":"+"0"+seg;
        }
        else if ((min < 10) && (seg >= 10)){
            document.getElementById('timer').innerHTML = "0"+min+":"+seg;
        }
        else if ((min >= 10) && (seg >= 10)){
            document.getElementById('timer').innerHTML = min+":"+seg;
        }
        if ((min == 60) && (seg == 1)) {
                document.getElementById('timer').innerHTML = "TIME OUT";
                clearInterval(cronometro);
            }
        seg++;
    },1000)
}