const now = new Date(); 
const past = new Date('2021-01-22 00:00:00'); 
const diff = Math.abs(now.getTime() - past.getTime()); 
const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); 
let ano ='';
let mes = '';
let dia = '';


function timeWedding(){

    
    let year = 365;
    let timeYears = Math.trunc(days / year);
    let timeMouths = ( days - (Math.trunc(timeYears) * year) ) / 30;
    let timeDays = ( days - ( Math.trunc(timeYears) * 365) ) - ( Math.trunc(timeMouths ) * 30)

   
    if(timeYears == 1 ) {
        ano = ' ano '
    } else {
        ano = ' anos '
    }
    
    if(timeMouths < 1 ) {
        mes = ' mes '
    } else {
        mes = ' meses '
    }

    if(timeDays == 1 ) {
        dia = ' dia '
    } else {
        dia = ' dias '
    }
    
    const textHtml = document.querySelector('#titulo').innerHTML = 'Entre 22/01/2021 até agora já se passaram ' + timeYears + ano + Math.trunc(timeMouths) + mes +' e ' + timeDays + dia + '!';
    return textHtml;
    
}    

timeWedding();
