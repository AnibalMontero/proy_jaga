var cocacola=2
var chuleton=29
var yogur=1
var cobrar= {
"mesa1": {
    productos:[cocacola,chuleton,yogur]
    }
}



function pedir(){
    let total = cobrar.mesa1.productos.reduce(function(anterior, actual){
        return anterior + actual;
        });



        var uls = document.querySelector(".lista_comanda");
        var ul1 = uls;
        var padre = ul1.parentNode;
        padre.removeChild(ul1);

   
console.log(total)
}