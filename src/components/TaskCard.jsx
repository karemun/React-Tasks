//Muestra los datos de la tarea
export default function TaskCard({task, deleteTask}) {
    return (
        <div>
            <h1>{ task.title }</h1>
            <p>{ task.description }</p>

            <button onClick={() => deleteTask(task.id)}>
                Eliminar tarea
            </button>

        </div>
    )
}
