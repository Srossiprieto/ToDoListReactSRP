// creamos copia, modificamos atributo, devolvimos y creamos nuevo arreglo


export const taskDone = (id, tasks) => {
    const newTasks = tasks.map(item => {
        const idTask = item.id;
        let task = Object.assign({}, item) //copia de estado actual (item)
        if(id === idTask){
            task.done = !task.done
        }
        return task;
    })
    return newTasks;
}