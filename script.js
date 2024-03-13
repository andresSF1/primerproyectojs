let tareas = [];
function agregarTarea(nombredetarea){
    tareas.push (nombredetarea) 
    alert ("tarea"+ " " + nombredetarea + " " + "agregada")
}

agregarTarea ("limpiar el arenero")
agregarTarea ("ir al baño")
agregarTarea ("correr")
agregarTarea ("morir")
console.log(tareas)

function eliminarTarea (index){
    const tareaEliminada = tareas[index];  
    tareas.splice (index, 1)
    alert ("tarea" + " " + tareaEliminada + " " + "eliminada")
}

eliminarTarea (1)
console.log(tareas)

function mostrarTareas (){
    alert (tareas.join(", "))
    }
mostrarTareas ()

while (true) {
    const opciones = prompt ("Seleccione una de estas opciones, 1 agregar tarea, 2 eliminar tarea, 3 mostrar tarea, 4 salir")
    
    if (opciones == 1) {
        const nuevaTarea = prompt("ingrese el nombre de la tarea");
        agregarTarea(nuevaTarea);
    }
    else if (opciones == 2) {
        const quitartarea = prompt("que tarea desea eliminar?");
        eliminarTarea(quitartarea);
    }
    else if (opciones == 3) {
        mostrarTareas ()
    }
    else if (opciones > 3) {
        break;
    }
    else if (opciones < 1) {
        break;
    }
}
alert ("No ingresaste ninguna tarea")