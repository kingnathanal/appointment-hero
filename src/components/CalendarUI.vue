<template>
    <div class="card">
        <div class="card-header bg-light">
            <div class="row">
                <div class="col">
                    <span class="float-left" @click="previous()" ><i class="far fa-arrow-alt-circle-left arrow"></i></span>
                </div>
                <div class="col">{{ months[selectedMonth] }}</div>
                <div class="col">
                    <span class="float-right" @click="next()"><i class="far fa-arrow-alt-circle-right arrow"></i></span>
                </div>
            </div>
            
            
        </div>
        <div class="card-body"> 
            <div class="card-group cal-header">
                <div class="card"><span>Sunday</span></div>
                <div class="card"><span>Monday</span></div>    
                <div class="card"><span>Tuesday</span></div>    
                <div class="card"><span>Wednesday</span></div>    
                <div class="card"><span>Thursday</span></div>    
                <div class="card"><span>Friday</span></div> 
                <div class="card"><span>Saturday</span></div>        
            </div>    
            <div class="cal-body">


            </div>
            <div>
                <div v-for="(week, i) in weeks" :key="i" class="card-group">
                    <div :id="week">
            
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'calendarUi',
    data() {
        return {
            year: 2019,
            month: 1,
            selectedYear: null,
            selectedMonth: null,
            selectedDate: null,
            hover: false,
            weeks: 6,
            weekDays: 7
        }
    },
    props: {
        currValues: Object,
        months: Array,
        selected: Object
    },
    methods: {
        createCalendar(month, year) {
            // get first day of the month
            let firstDay = (new Date(year,month)).getDay();

            let section = document.querySelector('.cal-body');
            let innerSection = document.createElement('div');

            let date = 1;
            // loop through number of weeks
            for (let i=0; i < 6; i++) {

                let row = document.createElement('div');
                row.className = 'card-group border-0';

                let isNotEmpty = false;
                //loop through days of the week
                for (let j = 0; j < 7; j++) {
                    
                    if (i === 0 && j < firstDay) {
                        let card = this.makeCard('');
                        row.appendChild(card);

                    } else if (date > this.daysInMonth(month,year)) {
                        if (j < 7) {
                            for (let x = j; x < 7; x++) {
                                let card = this.makeCard('');
                                row.appendChild(card);
                            }
                        }
                        break;
                    } else {
                        isNotEmpty = true;
                        let card;
                        if(date === this.currValues.date && month === this.currValues.month && year === this.currValues.year) {
                            card = this.makeCard(date,'card card-cal-date text-left bg-info text-white p-1');
                        } else {
                            card = this.makeCard(date,'card card-cal-date text-left p-1');
                        }
                        row.appendChild(card);
                        date++;
                    }
                }
                if(isNotEmpty) {
                    innerSection.appendChild(row);
                }
                
            }
            section.innerHTML = '';
            section.appendChild(innerSection);

            //console.log(firstDay);
        },
        daysInMonth(month, year) {
            // gets the number of days within a month
            return 32 - new Date(year, month, 32).getDate();
        },
        next() {
            this.selectedYear = (this.selectedMonth === 11) ? this.selectedYear + 1 : this.selectedYear;
            this.selectedMonth = (this.selectedMonth + 1) % 12;
            this.createCalendar(this.selectedMonth, this.selectedYear);
        },
        previous() {
            this.selectedYear = (this.selectedMonth === 0) ? this.selectedYear - 1 : this.selectedYear;
            this.selectedMonth = (this.selectedMonth === 0) ? 11 : this.selectedMonth -1 ;
            this.createCalendar(this.selectedMonth, this.selectedYear);
        },
        jump() {
            this.selectedYear = 2020;
            this.selectedMonth = 0;
            this.createCalendar(this.selectedMonth, this.selectedYear);
        }
        ,makeCard(data, style='card card-cal-date p-1') {
            let card = document.createElement('div');
            card.className = style;
            let cardBody = `<div class="card-body p-1 text-center">${data}</div>`;
            card.innerHTML = cardBody;
            return card;
        },
        checkIfCardIsBlack(i,j) {
            return i === 0 && j < firstDay;
        }
    },
    created() {

    },
    mounted() {
        this.createCalendar(this.selected.month, this.selected.year);
        this.selectedYear = this.selected.year;
        this.selectedMonth = this.selected.month;
    },
    updated() {
        this.createCalendar(this.selected.month, this.selected.year);
        console.log('updated!!');
        //this.selectedYear = this.selected.year;
        //this.selectedMonth = this.selected.month;
        //console.log(this.selectedMonth);
    },
    watch: {
        selectedYear: function() {
            console.log('from watch: ' + this.selectedYear);
        }
    }
}
</script>

<style>
    .table td {
        height:100px;
    }
    .card-group .cal-header .card {
        padding:2px;
        font-size:8px;
    }
    .card .card-cal-date .card-body {
        height:100px;
    }
    .card {
        background-color: #f4f4f4;
    }
    .card-cal-date:hover {
        background-color: #f4f4f4;
        cursor: pointer;
    }
    .hover {
        background-color: #f4f4f4;
    }
    .nohover {
        background-color: #fff;
    }
    .arrowHover {
        color: orange;
    }
    .arrow:hover {
        color: orange;
    }
</style>
