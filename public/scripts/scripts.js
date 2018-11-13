function clock() {
    const date = new Date();

    const dayOfWeek = date.getDay();
    const month = date.getMonth();
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    const hours =  date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourDisplay = document.querySelector("#hourDisplay");
    const minuteDisplay = document.querySelector("#minuteDisplay");
    const secondDisplay = document.querySelector("#secondDisplay");

    const dayOfWeekDisplay = document.querySelector("#dayOfWeekDisplay")
    const monthDisplay = document.querySelector("#monthDisplay");
    const dayDisplay = document.querySelector("#dayofMonthDisplay");
    const yearDisplay = document.querySelector("#yearDisplay");

    const weekDays = 
                    {
                        "0": "Mon",
                        "1": "Tues",
                        "2": "Wed",
                        "3": "Thur",
                        "4": "Fri",
                        "5": "Sat",
                        "6": "Sun"
                    };
    const months = 
                    {
                        "0": "Jan",
                        "1": "Feb",
                        "2": "Mar",
                        "3": "Apr",
                        "4": "May",
                        "5": "June",
                        "6": "July",
                        "7": "Aug",
                        "8": "Sept",
                        "9": "Oct",
                        "10": "Nov",
                        "11": "Dec"
                    }

    function setDateTime() {
        let monthNum = month;
        let day = dayOfWeek;

        if (months.hasOwnProperty(monthNum)) {
            monthDisplay.textContent = months[monthNum];
        }

        if (weekDays.hasOwnProperty(day)) {
            dayOfWeekDisplay.textContent = weekDays[day];
        }

        hourDisplay.textContent = hours;
        minuteDisplay.textContent = minutes;
        secondDisplay.textContent = seconds;

        dayOfMonthDisplay.textContent = dayOfMonth;
        yearDisplay.textContent = year;
    }

    setDateTime();
}

setInterval(clock, 1000);