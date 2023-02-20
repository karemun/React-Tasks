import TaskList from './TaskList'
import TaskForm from './TaskForm'
import {tasks as data} from './tasks' //Se le asigna un alias
import {useEffect, useState} from 'react'
//imp
//rfce

function App() {
  const [tasks, setTasks] = useState([]) //Inicia con arreglo vacio

    useEffect(() => { //La primera ves que carga, se asigna data a setTasks
        setTasks(data)
    }, [])

    //FUNCION QUE CREA UNA TAREA
    function createTask(taskTitle) {   //Se le transfiere el titulo de una tarea
      setTasks([...tasks, {            //Se juntan las tareas
        id: tasks.length, //Se rellena solo
        title: taskTitle, //Se guarda el titulo del parametro
        description: 'Nueva tarea'
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
