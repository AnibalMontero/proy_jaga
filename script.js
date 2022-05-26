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

  
      
      //  comanda_ul= document.createElement("ul");
       // comanda_ul.setAttribute("class", "lista_comanda");
        //padre.appendChild(comanda_ul)
        

   
console.log(total)
}