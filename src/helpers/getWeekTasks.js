
import { getNameDay } from "./getNameDay";
import { getMonthName } from "./getMonthName";

export const getWeekTasks = (tasks) => {
    let weekDays = [];
    let today = new Date();

    const oneDay = 24 * 60 * 60 * 1000; // horas * minutos * segundos * milisegundos


    let numWeek = today.getDay(); // recuperamos dia de sem
    let timeDay = today.getTime(); // recuperamos tiempo en milisegundos
    let weekOne = new Date(timeDay - numWeek * oneDay); // restamos los dias de la semana para obtener el primer dia de la semana

    for (let i = 0; i < 7; i++) {
        const newDate = new Date(weekOne.getTime() + i * oneDay); 
        const dateString = new Date(weekOne.getTime() + i * oneDay).toUTCString(); 

        const day = {
            id: crypto.randomUUID(),
            date: dateString,
            day: getNameDay(newDate),
            month: getMonthName(newDate),
            numDay: newDate.getDate(),
            tasks: []
        }
        weekDays.push(day);


    }
    tasks.forEach(task => {
        const taskDate = new Date(task.date);
        weekDays.forEach(day => {
            if (taskDate.getDate() === day.numDay) {
                day.tasks.push(task);
            }
        })
    })
    // console.log(weekDays);
    return weekDays;


}