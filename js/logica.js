var numeros = document.getElementById("numeros");
var letras = document.getElementById("letras");

function Button1(){
    var aux = numeros.innerText;
    var lett = letras.innerText;
    if(aux == null || aux == ''){
    numeros.innerHTML = "1";
    }else{
        if(aux[aux.length - 1] == 0  && lett == ''){
            
        alert("Cadena de numeros terminada, siguen letras");

        }else {
            if(aux[aux.length - 1] != 1){
                alert("Ya existe una cadena de numeros");
            }
        }
    }
    if(aux == 1234567890 && lett == ''){
        letras.innerHTML = "A";
    }else{
        if(aux == 1234567890 && lett == lett){
            alert("Ya hay una cadena de letras");
        }
    }
}
function Button2(){
    var aux = numeros.innerText;
    var lett = letras.innerText;
    if (aux == "1"){
        numeros.innerHTML = aux + "2";
    }else{
        if(aux[aux.length - 1] != 1 && lett == '' ){
            alert("faltan numeros");
        } 
    }
    if(aux == 1234567890 && lett == "A"){
        letras.innerHTML = lett + "B";
    }else{
        if(aux == 1234567890 && lett[lett.length - 1] != "A"){
            alert("Faltan letras");
        }
    }
}
function Button3(){
    var aux = numeros.innerText;
    var lett = letras.innerText;
    if (aux == 12){
        numeros.innerHTML = aux + "3";
    }else{
        if(aux[aux.length - 1] != 12 && lett == '' ){
            alert("faltan numeros");
        } 
    }
    if(aux == 1234567890 && lett == "AB"){
        letras.innerHTML = lett + "C";
    }else{
        if(aux == 1234567890 && lett[lett.length - 1] != "AB"){
            alert("Faltan letras");
        }
    }
}
function Button4(){
    var aux = numeros.innerText;
    var lett = letras.innerText;
    
    if (aux == 123){
        numeros.innerHTML = aux + "4";
    }else{
        if(aux[aux.length - 1] != 123 && lett == '' ){
            alert("faltan numeros");
        } 
    }
    if(aux == 1234567890 && lett == "ABC"){
        letras.innerHTML = lett + "D";
    }else{
        if(aux == 1234567890 && lett[lett.length - 1] != "ABC"){
            alert("Faltan letras");
        }
    }
}
function Button5(){
    var aux = numeros.innerText;
    var lett = letras.innerText;
    if (aux == 1234){
        numeros.innerHTML = aux + "5";
    }else{
        if(aux == '' && lett == '' ){
            alert("falta un numero");
        } 
    }
    if(aux == 1234567890 && lett == "ABCD"){
        letras.innerHTML = lett + "E";
    }else{
        if(aux == 1234567890 && lett==''){
            alert("Falta una letra");
        }
    }
}
function Button6(){
    var aux = numeros.innerText;
    var lett = letras.innerText;
    if (aux == 12345){
        numeros.innerHTML = aux + "6";
    }else{
        if(aux[aux.length - 1] != 12345 && lett == '' ){
            alert("faltan numeros");
        } 
    }
    if(aux == 1234567890 && lett == "ABCDE"){
        letras.innerHTML = lett + "F";
    }else{
        if(aux == 1234567890 && lett[lett.length - 1] != "ABCDE"){
            alert("Faltan letras");
        }
    }
}
function Button7(){
    var aux = numeros.innerText;
    var lett = letras.innerText;
    if (aux == 123456){
        numeros.innerHTML = aux + "7";
    }else{
        if(aux[aux.length - 1] != 123456 && lett == '' ){
            alert("faltan numeros");
        } 
    }
    if(aux == 1234567890 && lett == "ABCDEF"){
        letras.innerHTML = lett + "G";
    }else{
        if(aux == 1234567890 && lett[lett.length - 1] != "ABCDEF"){
            alert("Faltan letras");
        }
    }
}
function Button8(){
    var aux = numeros.innerText;
    var lett = letras.innerText;
    if (aux == 1234567){
        numeros.innerHTML = aux + "8";
    }else{
        if(aux[aux.length - 1] != 1234567 && lett == '' ){
            alert("faltan numeros");
        } 
    }
    if(aux == 1234567890 && lett == "ABCDEFG"){
        letras.innerHTML = lett + "H";
    }else{
        if(aux == 1234567890 && lett[lett.length - 1] != "ABCDEFG"){
            alert("Faltan letras");
        }
    }
}
function Button9(){
    var aux = numeros.innerText;
    var lett = letras.innerText;
    if (aux == 12345678){
        numeros.innerHTML = aux + "9";
    }else{
        if(aux[aux.length - 1] != 12345678 && lett == '' ){
            alert("faltan numeros");
        } 
    }
    if(aux == 1234567890 && lett == "ABCDEFGH"){
        letras.innerHTML = lett + "I";
    }else{
        if(aux == 1234567890 && lett[lett.length - 1] != "ABCDEFGH")
            alert("Faltan letras");
    }
}
function Button0(){
    var aux = numeros.innerText;
    var lett = letras.innerText;
    if (aux == 123456789){
        numeros.innerHTML = aux + "0";
    }else{
        if(aux[aux.length - 1] != 123456789 && lett == '' ){
            alert("faltan numeros");
        } 
    }
    if(aux == 1234567890 && lett == "ABCDEFGHI"){
        letras.innerHTML = lett + "J";
    }else{
        if(aux == 1234567890 && lett[lett.length - 1] != "ABCDEFGHI"){
            alert("Faltan letras");
        }   
    }

    
}

