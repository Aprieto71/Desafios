
esPalindromo = function(cadena = document.getElementById("palindromo").value){
    let array = cadena.split("");
    let reverse = array.reverse();
    
    if(cadena == reverse.join("")){
        alert(" Si es un Palindromo" + " "+ cadena + "=" + reverse.join(""));
    }else{
        alert(" No es un Palindromo" + " "+ cadena + "=" + reverse.join(""));
    }
}