// FIXME: Esto debería sumar dos números pero estoy muy pendejo y no se hacerlo. :( ayuda por favor
function dividir(a, b) {
  const c = a + b;
  return c;
}

function mostrarMensaje() {
  // TODO: Parsear los valores a números.

  const a = Number(prompt('Introduce el número 1.'));
  const b = Number(prompt('Introduce el número 2.'));

  const res = alert(dividir(a, b));
}

mostrarMensaje();
