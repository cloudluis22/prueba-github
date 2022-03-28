// FIXME: Esto debería multiplicar dos números pero estoy muy pendejo y no se hacerlo. :( ayuda por favor
function multiplicar(a, b) {
    const c = a * b;
    return c;
  }

  function mostrarMensaje() {

  // TODO: Parsear los valores a números.

    const a = prompt('Introduce el número 1.');
    const b = prompt('Introduce el número 2.');

    parseFloat(a, b);

    const res = alert(multiplicar(a, b));
  }

  mostrarMensaje();