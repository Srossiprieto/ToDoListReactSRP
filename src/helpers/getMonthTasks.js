export const getMonthTasks = (tasks) => {
    const dateNow = new Date()
  
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  
    let newMonths = monthNames.map(item => {
      return {
        id: crypto.randomUUID(),
        month: item,
        year: dateNow.getFullYear(),
        tasks: []
      }
    })
  
    // Este código hace lo mismo que el original, pero de una manera más eficiente. Recorre cada tarea en tasks, obtiene el mes de la fecha de la tarea, y luego agrega la tarea a la lista de tareas en la entrada correspondiente de newMonths.
    tasks.forEach(task => {
        const month = new Date(task.date).getMonth();
        newMonths[month].tasks.push(task);
    });
  
    return newMonths;
  }