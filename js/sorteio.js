function random_music(){
    for(i = 0; i < 4; i++){
    var pastas = ["animacoes","desenhos","games","japan","series"];
    var num_Pasta = random(1,pastas.length);
    var nome_Pasta = pastas[num_Pasta-1];
    // alert('pasta '+num_Pasta);
    switch (num_Pasta) {
        case 1:
        var lista = [
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
        break;
        case 2:
        var lista = [
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
        break;
        case 3:
        var lista = [
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
        break;
        case 4:
        var lista = [
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
        break;
        case 5:
        var lista = [
            "alf_o_eteimoso",
            "barney",
            "chaves",
            "friends",
            "game_of_thrones",
            "icarly",
            "maluco_no_pedaco",
            "small_ville",
            "teletubbies"];
        break;
    }
        var viewLista = lista.join(" |==| ");   
        var num_Audio = random(1,lista.length);
        var nome_Audio = lista[num_Audio-1];
        // alert(' TESTE Num pasta '+num_Pasta+' pasta '+nome_Pasta+' num de lista de  '+num_Audio+' nome '+nome_Audio);
        
        // document.getElementById('option0'+(i+1)+'_text').innerHTML = nome_Audio;
        
        // alert(viewLista+i);
        
        lista.splice(num_Audio-1,1);
        var viewLista = lista.join(" |==| ");
        // alert(viewLista+i);
        document.getElementById('option0'+(i+1)+'_text').innerHTML = formatar_texto(nome_Audio);
        
    }
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function formatar_texto(nome_Audio) {
    var str = nome_Audio;
    var res = str.split("_");

    var alternativa = res;

    var palavra = "";
    var letra = "";
    for (cont = 0; cont < alternativa.length; cont++){
    alternativa[cont] = alternativa[cont].split("");
    palavra = palavra + alternativa[cont];
    for(y = 0; y < alternativa[cont].length; y++){
        // SEPARANDO PALAVRAS PELA PRIMEIRA LETRA
        if(y == 0){
            letra = letra+ " " + alternativa[cont][y].toUpperCase();
        }
        else{
            letra = letra + alternativa[cont][y];
        }
    }
    }
    return letra;
}