let dias = ["Lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

dias.forEach(d => {console.log (d)})

document.querySelector('.text0')

const parrafos = (document.querySelectorAll('.texto'))

let contador = 0
let colores =  [`blue`, `red`, `yellow`, `pink`, `green`]
parrafos.forEach(p => {
    p.style.color = colores [contador]
    contador++
    p.innerHTML = `nuevo texto ${contador}` }
    )
//cantidad de elementos
const cantidad = colores.length
console.log (`Cantidad:${cantidad}`)

//agregar un elemento
colores.push(`orange`)
colores.forEach(c => console.log(c))
console.log(colores)

//buscar un valor dentro del array
const encontrado = colores.find(c => c == `green`)
if (encontrado ){
    console.log(`${encontrado} existe`)
    }else{
        console.log('el elemento no existe')
    }

//obtener indice de un elemento dentro del array
const nroIndice = colores.findIndex(c => c == `green`)
if(nroIndice == -1){
    console.log('no existe el elemento')
    }else{
    console.log(`indice ${nroIndice }`)
    }

//modificar valor utiizando nroIndice
colores[nroIndice]='violet'
console.log(colores)

//eliminar valor utilizando numero de indice 
colores.splice(nroIndice, 1) // cantidad de elementos a eliminar
console.log(colores)