var persona = {
    nombre: 'Fabri',
    saludo: function(){
        console.log('Hola, ' + this.nombre)
    }
}

persona.nombre = 'Fabrizio',

console.log(persona.saludo)