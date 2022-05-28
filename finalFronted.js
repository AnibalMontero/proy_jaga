class empleado {
    constructor(name, password){
        this.name = name
        this.password = password
    }
}
class nuevoEmpleado {
    constructor(newName, newPassword) {
        this.nuevoNombre = document.getElementById("newName").value
        this.nuevoContraseña = document.getElementById("newPassword").value
    }
}

nuevoUsuario = document.getElementById("newName").value
nuevoContraseña = document.getElementById("newPassword").value

camareroUno = new empleado("camarero1", "1234")
 camareroDos = new empleado("camarero2", "2345")
 camareroTres = new empleado("camarero3", "3456")
 camareroCuatro = new empleado("camarero4", "4567")
 camareroCinco = new empleado("camarero5", "5678")
 camareroSeis = new empleado("camarero6", "6789")
 camareroSiete = new empleado("camarero7", "7890")
 camareroOcho = new nuevoEmpleado(nuevoUsuario, nuevoContraseña)
 camareroNueve = new nuevoEmpleado(nuevoUsuario, nuevoContraseña)
 camareroDiez = new nuevoEmpleado(nuevoUsuario, nuevoContraseña)

 var camareros = []
 camareros.push(camareroUno)
 camareros.push(camareroDos)
 camareros.push(camareroTres)
 camareros.push(camareroCuatro)
 camareros.push(camareroCinco)
 camareros.push(camareroSeis)
 camareros.push(camareroSiete)
 
function registrar() {
    nuevoUsuario = document.getElementById("newName").value
    nuevoContraseña = document.getElementById("newPassword").value
    camareroOcho = new nuevoEmpleado(nuevoUsuario, nuevoContraseña)
    camareroNueve = new nuevoEmpleado(nuevoUsuario, nuevoContraseña)
    camareroDiez = new nuevoEmpleado(nuevoUsuario, nuevoContraseña)
    
    
}
function validar(){
     nombreValido = document.getElementById("nombre").value
     contraseñaValida = document.getElementById("contraseña").value

     if(((camareroUno.name === nombreValido && camareroUno.password === contraseñaValida) || (camareroDos.name === nombreValido && camareroDos.password === contraseñaValida) || 
     (camareroTres.name === nombreValido && camareroTres.password === contraseñaValida) || (camareroCuatro.name === nombreValido && camareroCuatro.password === contraseñaValida) || 
     (camareroCinco.name === nombreValido && camareroCinco.password === contraseñaValida) || (camareroSeis.name === nombreValido && camareroSeis.password === contraseñaValida) || 
     (camareroSiete.name === nombreValido && camareroSiete.password === contraseñaValida) || (camareroSiete.name === nombreValido && camareroSiete.password === contraseñaValida)
     || (camareroOcho.name === nombreValido && camareroOcho.password === contraseñaValida)|| (camareroNueve.name === nombreValido && camareroNueve.password === contraseñaValida)
     || (camareroDiez.name === nombreValido && camareroDiez.password === contraseñaValida))){
         
        window.location.href = "otraPagina.html";
        
        for(i = 0; i < camareros.length; i++){
            if(camareros[i].name == nombreValido){
                sessionStorage.setItem(camareros[i].name ,JSON.stringify(camareros[i]))
            }
        }
     }else{
         parrafo = document.getElementById("p1").innerText = "Usuario no valido"
         parrafo2 = document.getElementById("p2").innerText = "contraseña incorrecta"
    }
}
console.log(camareros)

