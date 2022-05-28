 var array_tiket = []
function cobrar() {
    var cocacola = 2
    var chuleton = 29
    var yogur = 1
    var mesa = "mesa2"
   
    var camareroActivo=JSON.stringify(sessionStorage).split(",")[1].split('"')[1]
    
    
    //var dataLocalStorage = JSON.parse(localStorage.getItem(camareroActivo));
    var productos = [cocacola, chuleton, yogur, yogur]
    var total = 0
    for (let i = 0; i < productos.length; i++) {
        total += productos[i]
    }

    array_tiket.push([mesa, productos, total])
    for(let i=0; i<sessionStorage.length; i++) {
        let lala = sessionStorage.key(1);
        if(lala==camareroActivo){
console.log(sessionStorage)
          // sessionStorage.setItem(camareroActivo,JSON.stringify(array_tiket))        
          localStorage.setItem(camareroActivo,JSON.stringify(array_tiket))
        }
    }
    
}