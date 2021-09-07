 data3 = function(){
     var dulce = document.getElementById("dulces").value;
     var precio = 450 * dulce;
     var preciode = precio*0.5; 
     var factura = ["Cantidad de dulces:"+" "+ dulce +'<br>'+
                    "Precio sin descuento:"+" "+precio + '<br>'+
                    "Descuento aplicado: 50%" + '<br>'+
                    "Valor a pagar:"+" "+ preciode];
    document.write("Factura:"+" "+ factura);
 }