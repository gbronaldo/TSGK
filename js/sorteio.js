var musica_tocar = [];
var contador = 0;
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
    for(i = 0; i < 4; i++){
    var pastas = ["animacoes","desenhos","games","japan","series"];
    var num_Pasta = random(1,pastas.length);
    var nome_Pasta = pastas[num_Pasta-1];
    // alert('pasta '+num_Pasta);
    switch (num_Pasta) {
        case 1:
            console.log(lista_Animacoes.join('\n'));
            var num_Audio_Animacoes = random(1,lista_Animacoes.length);
            var nome_Audio_Animacoes = lista_Animacoes[num_Audio_Animacoes-1];

            // lista_Animacoes.splice(num_Audio_Animacoes-1,1);

            var nome_Audio = nome_Audio_Animacoes;
            
        break;
        case 2:
            console.log(lista_Desenhos.join('\n'));
            var num_Audio_Desenhos = random(1,lista_Desenhos.length);
            var nome_Audio_Desenhos = lista_Desenhos[num_Audio_Desenhos-1];

            // lista_Desenhos.splice(num_Audio_Desenhos-1,1);

            var nome_Audio = nome_Audio_Desenhos;
        break;
        case 3:
            console.log(lista_Games.join('\n'));
            var num_Audio_Games = random(1,lista_Games.length);
            var nome_Audio_Games = lista_Games[num_Audio_Games-1];

            // lista_Games.splice(num_Audio_Games-1,1);

            var nome_Audio = nome_Audio_Games;
        break;
        case 4:
            console.log(lista_Japan.join('\n'));
            var num_Audio_Japan = random(1,lista_Japan.length);
            var nome_Audio_Japan = lista_Japan[num_Audio_Japan-1];

            // lista_Japan.splice(num_Audio_Japan-1,1);

            var nome_Audio = nome_Audio_Japan;
        break;
        case 5:
            console.log(lista_Series.join('\n'));
            var num_Audio_Series = random(1,lista_Series.length);
            var nome_Audio_Series = lista_Series[num_Audio_Series-1];

            // lista_Series.splice(num_Audio_Series-1,1);

            var nome_Audio = nome_Audio_Series;
        break;
    }
        musica_tocar.push(nome_Audio);

        if(musica_tocar[i] == nomeAudio){
            console.log('REPETIU, TIO');
        }
        // else{
        //     alert('nem');
        // }

        var nomeAudio = nome_Audio.replace(/_/g," ");
        document.getElementById('option0'+(i+1)+'_text').innerHTML = nomeAudio;


    }
    document.getElementById
    console.log('================================================');
    console.log(musica_tocar.join('\n'));
    musica_tocar = [];
    contador++
    console.log('CONTADOR: '+contador);
    // musica_tocar = null;
    console.log('================================================');
    // musica_random(musica_tocar);
}
function musica_random(musica_tocar) {
    console.log('Musica Random '+'\n'+musica_tocar.join('\n'));
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}