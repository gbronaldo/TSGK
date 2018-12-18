function clicked(optionNum){
    switch (optionNum) {
        case 01:
            // document.getElementById('option01').style.borderColor = "#490000";
            document.getElementsByClassName('options')[0].style.backgroundImage = "linear-gradient(to bottom, #A9982A, #EFD56E)";
            // document.getElementsByClassName('options')[0].style.color = "white";
            // document.getElementsByClassName('options')[0].style.boxShadow = "0px 5px 1px #490000";
        break;
        case 02: 
        document.getElementsByClassName('options')[1].style.backgroundImage = "linear-gradient(to bottom, #A9982A, #EFD56E)";
        break;
        case 03:
        document.getElementsByClassName('options')[2].style.backgroundImage = "linear-gradient(to bottom, #A9982A, #EFD56E)";
        break;
        case 04:
        document.getElementsByClassName('options')[3].style.backgroundImage = "linear-gradient(to bottom, #A9982A, #EFD56E)";
        break;
        // error
        // document.getElementById('option01').style.borderColor = "#490000";
        // document.getElementsByClassName('options')[0].style.backgroundImage = "linear-gradient(to bottom, black, #9E0202)";
        // document.getElementsByClassName('options')[0].style.color = "white";
        // document.getElementsByClassName('options')[0].style.boxShadow = "0px 5px 1px #490000";
    }
}
function normal(){ 
    document.getElementsByClassName('options')[0].style.backgroundImage = "linear-gradient(to bottom, #EFD56E, #D4BE31)";
    document.getElementsByClassName('options')[1].style.backgroundImage = "linear-gradient(to bottom, #EFD56E, #D4BE31)";
    document.getElementsByClassName('options')[2].style.backgroundImage = "linear-gradient(to bottom, #EFD56E, #D4BE31)";
    document.getElementsByClassName('options')[3].style.backgroundImage = "linear-gradient(to bottom, #EFD56E, #D4BE31)";
}