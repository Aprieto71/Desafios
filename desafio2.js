data2 = function (){
    var peso = document.getElementById("peso").value;
    var estatura = document.getElementById("estatura").value;
    var imc;
    imc = peso / (estatura*estatura);

    document.write("Tu indice de masa corporal es:" + " " + imc.toFixed(2));
}