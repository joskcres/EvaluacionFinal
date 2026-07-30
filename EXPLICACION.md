# Explicacion de los componentes creados
## Componente mascotas Form

Este componente lo que maneja es el formulario para agreagar mascotas agregando las validaciones necesarias para evitar errores a la hora de agregar a las mascotas con el uso se la funcion onAgregar() que manda a llamar al dispatch para añadir la mascota al arreglo creada en base a una clases despues de pasar las validaciones

## Componente de las Estadisticas Mascotas

Practicamente este componente lo que maneja son simples datos de como estan las mascotas en la aplicacion desde cuantos hay adoptado o disponibles y cuantos hay en total

## Componente Mascotas List 

En este componente esta tanto el filtro como el contenedor de las tarjetas de las mascotas vigilando siempre que tarjetas son lss que deben renderizar gracias al filtro  con el metodo de arrays map.

## Componente filtro mascotas 

Aca lo que pasa es que se tiene un slect que al activar el evento onChange le avisa a el componente padre que en este caso es el MascotaList cuales son las tarjetas de las mascotas que se deben renderizar mediante el tipo de busqueda

## Componente mascota cards

En este componente es en donde se le muestra al usuario la informacion de una mascota en especifico y se le mandan las acciones al reducer para que se cambie el estado de la mascota o se elimine de la lista.

# Reducer

### Agregar 

Esta accion lo que hace es agregar una nueva mascota al arreglo de mascotas con una instancia de la clase mascota previamente creada por el evento on Submit del formilario.

### Cambiar

Esta accion solo le cambia el estado de Disponible a Adoptado o de Adoptado a Activo dependiendo como este previemente al cambio

### Eliminar

Esta ultima accion elimina la mascota que le pidamos por medio de un id para que ya no aparezca mas en la lista de mascotas


