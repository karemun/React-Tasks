import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import {tasks as data} from './data/tasks' //Se le asigna un alias
import {useEffect, useState} from 'react'
//imp
//rfce

function App() {
  const [tasks, setTasks] = useState([]) //Inicia con arreglo vacio

    useEffect(() => { //La primera ves que carga, se asigna data a setTasks
        setTasks(data)
    }, [])

    //FUNCION QUE CREA UNA TAREA
    function createTask(task) {   //Se le transfiere el objeto de una tarea
      setTasks([...tasks, {       //Se juntan las tareas
        id: tasks.length,         //Se rellena solo
        title: task.title,        //Se guarda solo el titulo
        description: task.description //Se guarda solo la descripcion
      }])
    }

  return (
    <>
      <TaskForm createTask={createTask} />  {/* Envia la funcion createTask */}
      <TaskList tasks={tasks} />            {/* Envia el arreglo de datos */}
    </>
  )
}

export default App
