data = function (){
    var horas = document.getElementById("horas").value;
    var valor = document.getElementById("valor").value;
    precio = horas * valor;
    alert("el valor a pagar es:" + " " + precio );
}