let arrayPedido = [];
let mesactiva = '';

function activarMesa(num) {
  sessionStorage.setItem('mesaActiva', `Mesa${num}`);

  if (sessionStorage.getItem(`Mesa${num}`) == null) {
    sessionStorage.setItem(`Mesa${num}`, JSON.stringify([]));
  }

  let nomeac = document.querySelector('#nomeac');
  nomeac.style.display = 'block';
  nomeac.textContent = `Mesa${num}`;
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

function mesaOcupada() {
  for (let i = 0; i < sessionStorage.length; i++) {
    let key = sessionStorage.key(i);
    if (sessionStorage.getItem(key) != '[]') {
      let ocupada = document.querySelector(`#${key.toLowerCase()}`);
      ocupada.style.backgroundImage = "url('./img/mesaocupada.png')";
    }
  }
}

function pagar() {
  let mesactiva = sessionStorage.getItem('mesaActiva');

  let arrayPedido = JSON.parse(sessionStorage.getItem(mesactiva));

  cargarComanda();
  let total = 0;
  arrayPedido.forEach((elem) => {
    let precios = Object.values(elem);
    precios.forEach((precio) => {
      total += Number(precio);
    });
  });
  let capacargo = document.querySelector('#capacargo');
  let cargo = document.querySelector('#total');
  capacargo.style.display = 'block';
  cargo.textContent = `${total} €`;

  let array = JSON.parse(sessionStorage.getItem('cajaDia'));
  let obj = {};
  obj[mesactiva] = total;
  array.push(obj);

  sessionStorage.setItem('cajaDia', JSON.stringify(array));
  setTimeout(() => {
    capacargo.style.display = 'none';
    lista_comanda.textContent = '';
    cargo.textContent = '';
  }, 3000);
}

function salir() {
  let cajaDia = sessionStorage.getItem('cajaDia');

  let camarero = sessionStorage.getItem('camareroActivo');
  camarero = camarero.substring(1, camarero.length - 1);
  localStorage.setItem([camarero], [cajaDia]);
  sessionStorage.clear();
  window.location.href = 'index.html';
}

function vpaGrafica(camarero) {
  let cam1 = JSON.parse(localStorage.getItem(camarero));
  let valores = [];
  cam1.forEach((elem) => {
    let valor = Object.values(elem);
    valores.push(Math.floor(valor[0]));
  });
  return valores;
}

function mpaGrafica(camarero) {
  let mesas = JSON.parse(localStorage.getItem(camarero));
  let claves = [];
  mesas.forEach((elem) => {
    let clave = Object.keys(elem);
    claves.push(clave[0]);
  });
  return claves;
}

function leerlT() {
  let camareros = JSON.parse(localStorage.getItem('camareros'));
  nombreCamarero = [];
  camareros.forEach((elem) => {
    nombreCamarero.push(elem.name);
  });

  let claveslt = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (nombreCamarero.includes(key)) {
      claveslt.push(key);
    }
  }

  return claveslt;
}

function graficarDinero() {
  const labels = leerlT();
  labels.forEach((elem) => {
    console.log(elem);
    console.log(vpaGrafica(elem));
  });
}

function graficarCmesa() {
  const labels = leerlT();
  labels.forEach((elem) => {
    console.log(elem);
    console.log(mpaGrafica(elem));
  });
}
graficarCmesa();
