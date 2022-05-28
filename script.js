let arrayPedido = [];
let mesactiva = '';

function activarMesa(num) {
  sessionStorage.setItem('mesaActiva', `Mesa${num}`);

  if (sessionStorage.getItem(`Mesa${num}`) == null) {
    sessionStorage.setItem(`Mesa${num}`, JSON.stringify([]));
  }

  let comanda = document.querySelector('.comanda');

  let nodoDiv = document.createElement('div');
  let span = document.createElement('span');

  let info = document.createTextNode(`Mesa${num}`);
  comanda.appendChild(nodoDiv);
  nodoDiv.appendChild(span);
  span.appendChild(info);
}

function comandarProducto(nombre, precio) {
  // let mesactiva = sessionStorage.getItem('mesaActiva');

  let lista_comanda = document.querySelector('#lista_comanda');
  let nodoLi = document.createElement('li');
  let nodoTexto = document.createTextNode(`${nombre}:${precio},`);
  lista_comanda.appendChild(nodoLi);
  nodoLi.appendChild(nodoTexto);
  nodoLi.setAttribute('onclick', 'borrarProducto(this)');
  let botonG = document.querySelector('#btn_gua');
  botonG.style.display = 'block';
  let botonM = document.querySelector('#btn_mod');
  botonM.style.display = 'block';
  let botonP = document.querySelector('#btn_pag');
  botonP.style.display = 'block';
}
function borrarProducto(prod) {
  prod.parentNode.removeChild(prod);
}

function guardarComanda() {
  let lista_comanda = document.querySelector('#lista_comanda');
  let mesactiva = sessionStorage.getItem('mesaActiva');

  if (sessionStorage.getItem(mesactiva)) {
    sessionStorage.setItem(mesactiva, JSON.stringify([]));
  }
  arrayPedido = JSON.parse(sessionStorage.getItem(mesactiva));
  let pedidos = lista_comanda.textContent.split(',');

  pedidos.forEach((elem) => {
    let obj = {};
    if (elem != '') {
      let element = elem.split(':');
      obj[`${element[0]}`] = element[1];
      arrayPedido.push(obj);
    }
  });

  sessionStorage.setItem(mesactiva, JSON.stringify(arrayPedido));
  lista_comanda.textContent = '';
}

function cargarComanda() {
  let mesactiva = sessionStorage.getItem('mesaActiva');
  let arrayPedido = JSON.parse(sessionStorage.getItem(mesactiva));

  if (arrayPedido.length == 0) {
    console.log('la mesa está vacia');
  } else {
    let lista_comanda = document.querySelector('#lista_comanda');
    let mesactiva = sessionStorage.getItem('mesaActiva');
    arrayPedido = JSON.parse(sessionStorage.getItem(mesactiva));

    arrayPedido.forEach((element) => {
      let claves = Object.keys(element);
      let valores = Object.values(element);
      claves.forEach((elem, i) => {
        let nodoLi = document.createElement('li');
        let nodoTexto = document.createTextNode(`${elem}:${valores[i]},`);
        lista_comanda.appendChild(nodoLi);
        nodoLi.appendChild(nodoTexto);
        nodoLi.setAttribute('onclick', 'borrarProducto(this)');
      });
    });

    sessionStorage.setItem(mesactiva, JSON.stringify([]));
  }
}

function cambiarCF() {
  let mesas = document.querySelectorAll('.mesa');

  mesas.forEach((mesa) => {
    let mesactiva = sessionStorage.getItem('mesaActiva');

    if (mesactiva.toLowerCase() == mesa.id) {
      mesa.style.backgroundImage = "url('./img/mesactiva.png')";
    } else {
      mesa.style.backgroundImage = "url('./img/iconomesa.png')";
    }
  });
}


let img_mesa = document.querySelector('.contenedor_mesas');
img_mesa.addEventListener('click', cambiarCF);
