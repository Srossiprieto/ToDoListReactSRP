export const deleteTasks = (tasks, id) => {
    return tasks.filter(task => task.id !== id)
}