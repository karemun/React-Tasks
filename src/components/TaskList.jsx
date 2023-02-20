import TaskCard from './TaskCard'

//Va a traer props o {tasks}
function TaskList({tasks, deleteTask}) {
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
                    <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
                ))
            }
        </div>
    )
}

export default TaskList
