export const getNameDay = (date) => {
    const numberDay = date.getDay(); // retorna un dia de la semana 0-6
    const weeksDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    return weeksDays[numberDay];

} 