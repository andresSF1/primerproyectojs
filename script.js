alert("Bienvenido a tu organizador de tareas.")

let tareas = [];
function agregarTarea(nombredetarea){
    tareas.push (nombredetarea) 
    alert ("tarea"+ " " + nombredetarea + " " + "agregada")
}

function eliminarTarea (index){
    if (index >= 0 && index < tareas.length) {
    const tareaEliminada = tareas[index];  
    tareas.splice (index, 1);
    alert ("tarea" + " " + tareaEliminada + " " + "eliminada");
    }
    else {
        alert ("Esta tarea no se encuentra en tu lista de tareas");
    }
}

function mostrarTareas() {
    let listaTareas = "";
    tareas.forEach((quehacer, index) => {
      listaTareas += (index + 1) + ". " + quehacer + "\n";
    });
    if (tareas.length === 0) {
        alert ("no hay tareas disponibles.");
    }
    else {alert(listaTareas);}
  }

while (true) {
    const opciones = prompt ("Seleccione una de estas opciones, 1 agregar tarea, 2 eliminar tarea, 3 mostrar tarea, 4 salir")
    
    if (opciones == 1) {
        const nuevaTarea = prompt("ingrese el nombre de la tarea");
        agregarTarea(nuevaTarea);
    }
    else if (opciones == 2) {
        const quitartarea = Number(prompt("Ingrese el numero de la tarea a eliminar."));
        eliminarTarea(quitartarea -1);
    }
    else if (opciones == 3) {
        mostrarTareas ()
    }
    else if (opciones == 4) {
        confirm ("Estas saliendo del gestor de tareas");
        break;
    }
    else if (opciones < 1 || opciones > 4) {
        alert("no ingresaste una opción valida, re-ingresa tu opción.")
        continue;
    }
}
