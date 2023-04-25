const datosPersonales = {
    nombre:"victor",
    apellido:"vergara",
    edad:39,
    altura:1.80,
    eresDesarrollador: true
}

const edad = datosPersonales.edad


const lista = [
    {...datosPersonales},
    {
        nombre:"Juan",
        apellido:"polo",
        edad:35,
        altura:1.50,
        eresDesarrollador: true
    },
    {
        nombre:"Elena",
        apellido:"Mendez",
        edad:36,
        altura:1.60,
        eresDesarrollador: true
    }
]

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const listaOrdenada = lista.sort((a,b)=> b.edad -a.edad)
console.log(listaOrdenada);