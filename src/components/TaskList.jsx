import TaskCard from './TaskCard'

//Va a traer props o {tasks}
function TaskList({tasks}) {
    if(tasks.length === 0) {
        return <h1>No hay tareas aun.</h1>
    }

    return (
        <div>
            {
                tasks.map((task) => (
                    <TaskCard key={task.id} task={task} /> //Manda una tarea del arreglo
                ))
            }
        </div>
    )
}

export default TaskList
