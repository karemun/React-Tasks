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
        <div className='max-w-md mx-auto'>
            <form className='bg-slate-800 p-8 mb-4'
            onSubmit={handleSubmit}> {/* Al mandar el formulario, activa la funcion */}
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
                <input placeholder="Escribe tu tarea" 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className='bg-slate-300 p-2 w-full mb-2'
                autoFocus /> {/* Se auto selecciona */}

                <textarea placeholder='Escribe la descripcion de la tarea'
                onChange={(e) => setDescription(e.target.value)}
                className='bg-slate-300 p-3 w-full mb-2'
                value={description} ></textarea>

                <button
                className='bg-indigo-500 px-3 py-1 text-white rounded-md mt-4 hover:bg-blue-300'>
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default TaskForm