<template>
    <div class="row">
        <div class="col">
            <div class="card rounded-0 shadow-sm">
                <div class="card-header bg-light">
                    <div class="row">
                        <div class="col">
                            <span class="float-left" @click="previous()" ><i class="far fa-arrow-alt-circle-left arrow"></i></span>
                        </div>
                        <div class="col">{{ months[selectedMonth] }} - {{selectedYear}}</div>
                        <div class="col">
                            <span class="float-right" @click="next()"><i class="far fa-arrow-alt-circle-right arrow"></i></span>
                        </div>
                    </div>
                </div>
                <div class="card-body"> 
                    <div class="card-group cal-header">
                        <div v-for="(day, i) in daysOfTheWeek" :key="i" class="card rounded-0">
                            <span>{{day}}</span>
                        </div>      
                    </div>    
                    <div class="cal-body"></div>
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
            selectedYear: null,
            selectedMonth:null,
            selectedDate: null,
            hover: false,
            weeks: 6,
            date: 1,
            firstDayOfTheMonth: (new Date(this.selectedYear,this.selectedMonth)).getDay()
        }
    },
    props: {
        currValues: Object,
        months: Array,
        selectedFromApp: Object,
        daysOfTheWeek: Array
    },
    methods: {
        createCalendar(month, year) {
            // get first day of the month
            const firstDay = (new Date(year,month)).getDay();

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
                            card = this.makeCard(date,'card card-cal-date text-left bg-info text-white p-1 rounded-0');
                        } else {
                            card = this.makeCard(date,'card card-cal-date text-left p-1 rounded-0 calday');
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

            let year = (this.selectedMonth === 11) ? this.selectedYear + 1 : this.selectedYear;
            let month = (this.selectedValues.month + 1) % 12;
            this.selectedValues = {month:month, year:year };
            this.createCalendar(this.selectedValues.month, this.selectedValues.year);
        },
        previous() {
            let year = (this.selectedValues.month === 0) ? this.selectedValues.year - 1 : this.selectedValues.year;
            let month = (this.selectedValues.month === 0) ? 11 : this.selectedValues.month -1 ;
            this.selectedValues = {month:month, year:year };
            this.createCalendar(this.selectedValues.month, this.selectedValues.year);
        },
        jump() {
            this.createCalendar(this.selectedValues.month, this.selectedValues.year);
        },
        makeCard(data, style='card card-cal-date p-1 rounded-0') {
            let card = document.createElement('div');
            card.className = style;
            let cardBody = `<div class="card-body p-1 text-center">${data}</div>`;
            card.innerHTML = cardBody;
            return card;
        },
        makeCardBody(date) {
            const newData = date;
            date++;
            return `${newData}`;
        }
    },
    created() {
      
    },
    mounted() {
        this.selectedValues = {month:this.selectedFromApp.month, year:this.selectedFromApp.year };
    },
    updated() {

    },
    computed: {
      selectedValues: {
          get: function() {
              return {month:this.selectedMonth, year:this.selectedYear }
          },
          set: function (newSelected) {
              this.selectedYear = newSelected.year;
              this.selectedMonth = newSelected.month;
          }
      }
    },
    watch: {
        selectedValues: function() {
            this.$emit('selectedValues', {month:this.selectedMonth, year:this.selectedYear });
            this.jump();
        },
        selectedFromApp: function() {
           this.selectedValues = {month:this.selectedFromApp.month, year:this.selectedFromApp.year };
        }
    }
}
</script>

<style>
    .table td {
        height:100px;
    }
    .card-group .cal-header .card {
        
        font-size:8px;
    }
    .card .card-cal-date .card-body {
        height:100px;
    }
    .card .calday:hover {
        background-color: rgb(201, 200, 198); 
        color: white;
        font-weight:400;
        cursor: pointer;
    }
    .card {
        background-color: #f4f4f4;
    }
    .card-cal-date:hover {
        
    }
    .hover {
        background-color: #333333;
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
    @media (max-width:575px) {
    .display-4 {
        font-size: 1.5rem;
    }
    .day h5 {
        background-color: #f8f9fa;
        padding: 3px 5px 5px;
        margin: -8px -8px 8px -8px;
    }
    .date {
        padding-left: 4px;
    }
}

@media (min-width: 576px) {
    .day {
        height: 14.2857vw;
    }
}
</style>
