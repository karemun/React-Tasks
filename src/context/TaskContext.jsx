import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/tasks'     //Se le asigna un alias
export const TaskContext = createContext();     //Funcion que almacena los datos


export function TaskContextProvider(props) {    //Componente que engloba a los demas
    const [tasks, setTasks] = useState([])      //Inicia con arreglo vacio
    
    //FUNCION QUE CREA UNA TAREA
    function createTask(task) {             //Se le transfiere el objeto de una tarea
        setTasks([...tasks, {               //Se juntan las tareas
            id: tasks.length,               //Se rellena solo
            title: task.title,              //Se guarda solo el titulo
            description: task.description   //Se guarda solo la descripcion
        }])
    }

    //FUNCION QUE ELIMINA UNA TAREA
    function deleteTask(taskId) {
        //Si es true, el elemento se queda, se actualiza el arreglo
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    //SE EJECUTA Y GUARDA LAS TAREAS
    useEffect(() => { //La primera ves que carga, se asigna data a setTasks
        setTasks(data)
    }, [])

    return (
        <TaskContext.Provider value={{      //Se mandan los elementos a exportar
            tasks, //tasks:tasks
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
