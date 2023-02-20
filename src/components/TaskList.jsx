import {useContext} from 'react'
import TaskCard from './TaskCard'
import {TaskContext} from '../context/TaskContext'

//Va a traer props o {tasks}
function TaskList() {
    const { tasks } = useContext(TaskContext)

    if(tasks.length === 0) {
        return <h1>No hay tareas aun.</h1>
    }

    return (
        <div>
            {
                tasks.map((task) => (
                    /**
                     * Se pone el key para evitar errores
                     * Manda una tarea del arreglo, y la funcion delete
                     */
                    <TaskCard key={task.id} task={task} />
                ))
            }
        </div>
    )
}

export default TaskList
