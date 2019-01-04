var musica_ID = document.getElementById('musica');
var media_Diretorio = null;
var valor_Resp = null;
var ativar_Botao = true;
var contador = 0;
var con = 0;
var pontuacao = 0;
var lista_Animacoes = [
    "corcunda_notre_dame",
    "frozen",
    "madagascar",
    "moana",
    "mogli",
    "mulan",
    "os_incriveis",
    "pequena_sereia",
    "rei_leao",
    "rei_leao_2",
    "spirit",
    "tarzan",
    "valente"];

var lista_Desenhos = [
    "aladdin",
    "ben10",
    "bob_esponja",
    "caillou",
    "ducktales",
    "he_man",
    "kim_possible",
    "pantera_rosa",
    "phineas_ferb",
    "pica_pau",
    "rugrats",
    "scooby_doo",
    "simpsons",
    "thundercats",
    "tom_jerry",
    "x_men"];

var lista_Games = [
    "gta_san_andreas",
    "mario",
    "megaman",
    "mortal_kombat",
    "prince_of_persia",
    "sonic_theme",
    "street_fighter_guile",
    "tetris",
    "top_gear",
    "zelda"];

var lista_Japan =[
    "cdz_hyoga",
    "cdz_theme",
    "dbgt_theme",
    "dbz_theme",
    "death_note_kira",
    "digimon_brave_heart",
    "fullmetal_alchemist_again",
    "fullmetal_alchemist_melissa",
    "hunter_hunter_densetsu",
    "hunter_hunter_ohayo",
    "inuyasha",
    "jaspion",
    "naruto_loneliness",
    "one_piece",
    "pokemon",
    "power_rangers",
    "sailor_moon",
    "tokyo_ghoul",
    "yu_yu_hakusho"];

var lista_Series = [
    "alf_o_eteimoso",
    "barney",
    "chaves",
    "friends",
    "game_of_thrones",
    "icarly",
    "maluco_no_pedaco",
    "small_ville",
    "teletubbies"];

function random_music(){
    document.getElementById('logo').src = "../tsgk/media/icons/icon.png";
    var musica_tocar = [];
    // var pasta_tocar = [];
    for(i = 0; i < 4; i++){
    document.getElementsByClassName('options')[i].style.backgroundImage = "linear-gradient(to bottom, #EFD56E, #D4BE31)";
    document.getElementsByClassName('options')[i].style.boxShadow = "0px 5px 1px #A9982A";
    document.getElementsByClassName('options')[i].style.color = "#545454";
    document.getElementsByClassName('options')[i].style.borderColor = "#A9982A";

    var pastas = ["animacoes","desenhos","games","japan","series"];
    var num_Pasta = random(1,pastas.length);
    var nome_Pasta = pastas[num_Pasta-1];
    // alert('pasta '+num_Pasta);
    switch (num_Pasta) {
        case 1:
            // console.log(lista_Animacoes.join('\n'));
            var num_Audio_Animacoes = random(1,lista_Animacoes.length);
            var nome_Audio_Animacoes = lista_Animacoes[num_Audio_Animacoes-1];

            // lista_Animacoes.splice(num_Audio_Animacoes-1,1);

            var nome_Audio = nome_Audio_Animacoes;
            
        break;
        case 2:
            // console.log(lista_Desenhos.join('\n'));
            var num_Audio_Desenhos = random(1,lista_Desenhos.length);
            var nome_Audio_Desenhos = lista_Desenhos[num_Audio_Desenhos-1];

            // lista_Desenhos.splice(num_Audio_Desenhos-1,1);

            var nome_Audio = nome_Audio_Desenhos;
        break;
        case 3:
            // console.log(lista_Games.join('\n'));
            var num_Audio_Games = random(1,lista_Games.length);
            var nome_Audio_Games = lista_Games[num_Audio_Games-1];

            // lista_Games.splice(num_Audio_Games-1,1);

            var nome_Audio = nome_Audio_Games;
        break;
        case 4:
            // console.log(lista_Japan.join('\n'));
            var num_Audio_Japan = random(1,lista_Japan.length);
            var nome_Audio_Japan = lista_Japan[num_Audio_Japan-1];

            // lista_Japan.splice(num_Audio_Japan-1,1);

            var nome_Audio = nome_Audio_Japan;
        break;
        case 5:
            // console.log(lista_Series.join('\n'));
            var num_Audio_Series = random(1,lista_Series.length);
            var nome_Audio_Series = lista_Series[num_Audio_Series-1];

            // lista_Series.splice(num_Audio_Series-1,1);

            var nome_Audio = nome_Audio_Series;
        break;
    }
  
    var cot = 0
    musica_tocar.push(nome_Pasta+'/'+nome_Audio);
    // pasta_tocar.push(nome_Pasta);
    for(j = 0; j < 4; j++){
        if((musica_tocar[i] == musica_tocar[j])){
            cot++;
            if (cot > 1) {
               console.log('SHOW'+nome_Audio); 
            //    musica_tocar = [];
               random_music();
            }
            else{
                // console.log('+++');
                // console.log(musica_tocar.join('\n'));
                // console.log('*************************');

                nomeAudio = nome_Audio.replace(/_/g," ");
                document.getElementById('option0'+(i+1)+'_text').innerHTML = nomeAudio;
                if(j == 3){
                console.log('SORTEAR MÚSICA PARA TOCAR');
                console.log('+++');
                var media_Tocar = random(1,musica_tocar.length);
                media_Diretorio = musica_tocar[media_Tocar-1];
                console.log('Diretório: '+media_Diretorio+'.mp3');
                console.log(musica_tocar.join('\n'));
                // console.log(musica_tocar[musica_tocar.length-2]+'/'+musica_tocar[musica_tocar.length-1]);
                console.log('*************************');
                musica_ID.src = "../tsgk/media/musics/"+media_Diretorio+".mp3";
                    // console.log('MOSTRE-ME:'+'\n'+musica_tocar.join('\n'));
                    // console.log('..................................');
                    // console.log('PASTAS:'+'\n'+pasta_tocar.join('\n'));
                }
            }
        }
    }
    }
    document.getElementById('button-music').src = "../tsgk/media/icons/play-btn.png";
    ativar_Botao = true;
    contador++
    console.log('CONTADOR: '+contador+' /////////////');
}
function play() {
    // alert('contador'+contador);
    if (ativar_Botao == true) {
        musica_ID.play();
        document.getElementById('button-music').src = "../tsgk/media/icons/pause.png";
        // alert('PLAY');
        ativar_Botao = false;
    }
    else{
        // alert('PAUSE');
        musica_ID.pause();
        document.getElementById('button-music').src = "../tsgk/media/icons/play-btn.png";
        ativar_Botao = true;
    }
    // alert(ativar_Botao);
}
function resposta(r) {
    // alert('musica: '+media_Diretorio+'resposta '+r);
    // resp = media_Diretorio.replace(nome_Pasta,'');
    console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>');
    console.log('media_Diretorio: '+ media_Diretorio);
    console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>');
    // var carac = media_Diretorio.split('');
    var carac = media_Diretorio.split('');
    var dir_Pasta = '';
    console.log('carac :'+ carac);
    do {
        // console.log('new'+carac[con]);
        dir_Pasta = dir_Pasta + carac[con];
        con++;
    } while (carac[con] != '/');
    // console.log('dir_Pasta: '+dir_Pasta);
    var resp = media_Diretorio.replace(dir_Pasta+'/','');
    resp  = resp.replace(/_/g," ");
    console.log('RESP: '+resp);
    con = 0;

    switch (r) {
        case 'a':
            // console.log(documento.getElementById('option01').innerHTML);
            valor_Resp = document.getElementById('option01_text').innerHTML;
            console.log('RESPOSTA A'+ valor_Resp);
            break;
        case 'b':
            valor_Resp = document.getElementById('option02_text').innerHTML;
            console.log('RESPOSTA B'+ valor_Resp);
            break;
        case 'c':
            valor_Resp = document.getElementById('option03_text').innerHTML;
            console.log('RESPOSTA C'+ valor_Resp);
            break;
        case 'd':
            valor_Resp = document.getElementById('option04_text').innerHTML;
            console.log('RESPOSTA D'+ valor_Resp);
            break;
    }
    if(resp == valor_Resp){
        console.log('RESPOSTA CORRETA');
        for(var op = 1; op < 5; op++){
            var valor_op = document.getElementById('option0'+op+'_text').innerHTML;
            // console.log('Valor op: '+op+' valor_op '+valor_op);
            if(valor_op == valor_Resp){
                // valor_op = valor_op.replace(/ /g,"_");
                console.log('AQUI '+valor_op);
                "../tsgk/media/musics/"+media_Diretorio+".mp3";
                document.getElementById('logo').src = "../tsgk/media/logos/"+media_Diretorio+".png";

                document.getElementById('option0'+op).style.borderColor = "#074900";
                document.getElementsByClassName('options')[op-1].style.backgroundImage = "linear-gradient(to bottom, black, #1B9503)";
                document.getElementsByClassName('options')[op-1].style.color = "white";
                document.getElementsByClassName('options')[op-1].style.boxShadow = "0px 5px 1px #074900";

                document.getElementsByClassName('anime-logo')[0].style.backgroundImage = "linear-gradient(to bottom, black, #1B9503)";
                document.getElementById('logo').style.borderRadius = "100px";

                pontuacao++;
                
                setTimeout(random_music, 2000);
            }
        }
    }
    else{
        console.log('RESPOSTA FALSA');
        // console.log('OPP &&&&&&&');
        // console.log('resp: '+valor_Resp);
        for(var op = 1; op < 5; op++){
            var valor_op = document.getElementById('option0'+op+'_text').innerHTML;
            // console.log('Valor op: '+op+' valor_op '+valor_op);
            if(valor_op == valor_Resp){
                // console.log('AQUI '+valor_op);
                document.getElementById('option0'+op).style.borderColor = "#490000";
                document.getElementsByClassName('options')[op-1].style.backgroundImage = "linear-gradient(to bottom, black, #9E0202)";
                document.getElementsByClassName('options')[op-1].style.color = "white";
                document.getElementsByClassName('options')[op-1].style.boxShadow = "0px 5px 1px #490000";
                location.href = "game_over.html";
                setTimeout(random_music, 1000);
            }
        }
    }
    console.log('PONTUAÇÃO '+pontuacao);
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function pressionando(letra) {
    // alert('ooooo');
    switch (letra) {
        case 'a':
        document.getElementsByClassName('options')[0].style.backgroundImage = "linear-gradient(to bottom, #A9982A, #EFD56E)";

        document.getElementsByClassName('options')[0].addEventListener('mouseout',function () {
        document.getElementsByClassName('options')[0].style.backgroundImage = "linear-gradient(to bottom, #EFD56E, #D4BE31)";
        document.getElementsByClassName('options')[0].style.boxShadow = "0px 5px 1px #A9982A";
        document.getElementsByClassName('options')[0].style.color = "#545454";
        document.getElementsByClassName('options')[0].style.border= "1px solid #A9982A";
        });
            break;
        case 'b':
        document.getElementsByClassName('options')[1].style.backgroundImage = "linear-gradient(to bottom, #A9982A, #EFD56E)";
        document.getElementsByClassName('options')[1].addEventListener('mouseout',function () {
        document.getElementsByClassName('options')[1].style.backgroundImage = "linear-gradient(to bottom, #EFD56E, #D4BE31)";
        document.getElementsByClassName('options')[1].style.boxShadow = "0px 5px 1px #A9982A";
        document.getElementsByClassName('options')[1].style.color = "#545454";
        document.getElementsByClassName('options')[1].style.border= "1px solid #A9982A";
        });
            break;
        case 'c':
        document.getElementsByClassName('options')[2].style.backgroundImage = "linear-gradient(to bottom, #A9982A, #EFD56E)";
        document.getElementsByClassName('options')[2].addEventListener('mouseout',function () {
        document.getElementsByClassName('options')[2].style.backgroundImage = "linear-gradient(to bottom, #EFD56E, #D4BE31)";
        document.getElementsByClassName('options')[2].style.boxShadow = "0px 5px 1px #A9982A";
        document.getElementsByClassName('options')[2].style.color = "#545454";
        document.getElementsByClassName('options')[2].style.border= "1px solid #A9982A";
        });
            break;
        case 'd':
        document.getElementsByClassName('options')[3].style.backgroundImage = "linear-gradient(to bottom, #A9982A, #EFD56E)";
        document.getElementsByClassName('options')[3].addEventListener('mouseout',function () {
        document.getElementsByClassName('options')[3].style.backgroundImage = "linear-gradient(to bottom, #EFD56E, #D4BE31)";
        document.getElementsByClassName('options')[3].style.boxShadow = "0px 5px 1px #A9982A";
        document.getElementsByClassName('options')[3].style.color = "#545454";
        document.getElementsByClassName('options')[3].style.border= "1px solid #A9982A";
        });
            break;
    }
}