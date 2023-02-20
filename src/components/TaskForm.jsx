import {useState, useContext} from 'react';
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext) //Para poder usar la funcion de TaskContext

    const handleSubmit = (e) => {
        e.preventDefault(); //No recarga la pagina

        createTask({    //Se mandan los datos del usuario
            title, //title: title
            description
        })
        //Se reinician las variables
        setTitle('')
        setDescription('')
    }

    return (
        <form onSubmit={handleSubmit}> {/* Al mandar el formulario, activa la funcion */}

            <input placeholder="Escribe tu tarea" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus /> {/* Se auto selecciona */}

            <textarea placeholder='Escribe la descripcion de la tarea'
            onChange={(e) => setDescription(e.target.value)}
            value={description} ></textarea>

            <button>Guardar</button>
        </form>
    )
}

export default TaskForm