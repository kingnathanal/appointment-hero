
const DateCtrl = (() => {

    const days = ["Sunday", 'Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return {
        getMonthAsString: month => {
            return months[month];
        },
        getMonthAsNumber: month => {
            return months.indexOf(month);
        },
        getDayAsString: day => {
            return days[day];
        },
        getDayAsNumber: day => {
            return days.indexOf(day);
        },
        getMonths: () => {
            return months;
        }
    }
})();

const CalendarUI = (() => {

    const monthList = document.querySelector('.calMonths');

    return {
        populateCalendarMonths: months => {
            let outPut = '';
            months.forEach(month => {
                outPut += `<li class="list-group-item list-group-item-action">${month}</li>`;
            });
            monthList.innerHTML = outPut;
        }
        //,
       // populateDaysOfTheWeek: days => {
       //     let html = ''
        //}   
    }

})();

const app = ((DateCtrl, CalendarUI) => {

    //const inputValue = document.querySelector('.testInput');
    //const inputValue = $$('.testInput');
    //console.log(inputValue);
    return {
        init: () => {

            CalendarUI.populateCalendarMonths(DateCtrl.getMonths());


        }
    }
})(DateCtrl, CalendarUI);

//console.log(DateHelper.getMonthAsString(0));
// console.log(DateHelper.getMonthAsNumber('February'));
// console.log(DateHelper.getDayAsString(0));
// console.log(DateHelper.getDayAsNumber('Tuesday'));
//console.log(init.getValue());

app.init();