export const getYearTasks = (tasks) => {
    const years = [ '2020', '2021','2022', '2023', '2024', '2025', '2026', '2027', '2028']

    let yearsTasks = years.map(item => {
        return {
            id: crypto.randomUUID(),
            year: item,
            tasks: []
        }
    })

    tasks.forEach(task => {
        // Asegúrate de que task.date es una cadena.
        if (typeof task.date === 'string') {
            const year = task.date.split('-')[0]
            const index = yearsTasks.findIndex(item => item.year === year)
            if (index !== -1) {
                yearsTasks[index].tasks.push(task)
            }
        }
    })
    return yearsTasks
}