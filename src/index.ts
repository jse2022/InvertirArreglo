import "./styles.css";
let dimensionArreglo: number = Number(prompt(`Ingrese dimension del arreglo`));
let arregloNumeros: number[] = new Array(dimensionArreglo);
let b: number = 0;
let contador: number = 1;
for (let x = 0; x < dimensionArreglo; x++) {
  let numeroArreglo: number = Number(
    prompt(`Ingrese Numero: ${contador} de ${dimensionArreglo}`)
  );

  arregloNumeros[x] = numeroArreglo;
  contador++;
}
console.log(`Array sin invertir: ${arregloNumeros}`);
console.log(`Array invertido: ${arregloNumeros.reverse()}`);
