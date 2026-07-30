class Mascota {
    constructor({ nombre, tipo, edad, tamanio }) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
        this.tamanio = tamanio
        this.estado = 'Disponible'
        this.id = Date.now() + Math.floor(Math.random() * 1000)
    }
}

export { Mascota }