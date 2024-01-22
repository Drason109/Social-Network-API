//function changes the abbreviation of the number it currently 
const generateDay = (day) => {
    const lastDigit = Number(day.toString().split('').pop())

    if(lastDigit === 1) {
        return `${day}st`
    }else if(lastDigit === 2){
        return `${day}nd`
    }else if(lastDigit === 3){
        return `${day}rd`
    }else {
        return `${day}th`
    }
}
//function changes to standard time
const standardTime = (hour) => {
    hour = hour % 12;
    if(hour === 0){
        hour = 12;
    }else{
        return hour;
    }
    
}

//function changes am and pm depending on the the hour in military
const generateAmPm = (hour) => {
    
    if(hour < 12) {
        hour = 'am'
    }else {
        hour = 'pm'
    }
    return hour;
}

//function add a zero to the hours with a single digit
const addZero = (i) => {
    if(i< 10) {i = '0' + i}
    return i;
}


//gets the calendar days and time and adds it to a string
module.exports = {
    format_date: date => {
        const min =  addZero(date.getMinutes())
        const hour = date.getHours()
        const day = date.getDate()
        const month = date.toLocaleString('default', {month: 'short'})
        const year = new Date(date).getFullYear()
        return `${month} ${generateDay(day)}, ${year} at ${standardTime(hour)}:${min} ${generateAmPm()}`
    }
}