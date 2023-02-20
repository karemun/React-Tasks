import {useState} from 'react';

function TaskForm({createTask}) {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); //No recarga la pagina
        createTask(title)   //Se manda el nuevo titulo
    }

    return (
        <form onSubmit={handleSubmit}> {/* Al mandar el formulario, activa la funcion */}
            <input placeholder="Escribe tu tarea" 
            onChange={(e) => setTitle(e.target.value)}/> {/* Almacena lo escrito por el usuario en title */}
            <button>Guardar</button>
        </form>
    )
}

export default TaskForm