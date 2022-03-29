// FIXME: Esto debería dividir dos números pero estoy muy pendejo y no se hacerlo. :( ayuda por favor
// function dividir(a, b) {
//     const c = a / b;
//     return c;
//   }

//   function mostrarMensaje() {

//   // TODO: Parsear los valores a números.

//     const a = prompt('Introduce el número 1.');
//     const b = prompt('Introduce el número 2.');

//     const res = alert(dividir(a, b));
//   }


//TODO no lo voy a hacer asi porque soy ilegal y me gusta ir contra el sistema cumluis
mostrarMensaje();

function div() {
    var n1 = parseFloat(document.getElementById('Num1').value)
    var n2 = parseFloat(document.getElementById('Num2').value)

    var result = n1/n2
    alert("OLA GUAPO, EL RESULTADO DE LA DIVISION ES: "+result)
}