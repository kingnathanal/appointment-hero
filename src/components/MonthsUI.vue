<template>
    <div class="card rounded-0 shadow-sm">
        <div class="card-header text-center">
            <span class="float-left" @click="previous()"><i class="far fa-arrow-alt-circle-left"></i></span>
            <span>{{selectedYear}}</span>
            <span class="float-right" @click="next()"><i class="far fa-arrow-alt-circle-right"></i></span>
        </div>
        <div class="card-body p-1">
            <ul id="monthList">
                <li class="text-center" style="font-size:9pt;cursor:pointer;" @click="showTodayActive">Today</li>
                <li v-for="(month, index) in months" :key="index" class="month" @click="makeMonthActive(activeClass,index)">{{ month }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'monthUi',
    data()  {
        return {
            isActive: false,
            activeClass: 'month active bg-info',
            nonActiveClass: 'month',
            selectedYear: null,
            selectedMonth: null
        }
    },
    props : {
        months: Array,
        currValues: Object,
        selectedValues: null
    },
    methods: {
        makeMonthActive: function(activeClass,index) {
            const nonActiveClass = 'month';
            const monthList = document.querySelectorAll('.month');
            monthList.forEach(month => {
                if(month.className === activeClass) {
                    month.className = nonActiveClass; 
                }
            });
            monthList[index].className = activeClass;
            this.selectedMonth = index;
            this.$emit('selMonth', {month: this.selectedMonth, year: this.selectedYear});
        },
        makeYearActive: function() {

        },
        previous: function() {
            this.selectedYear = this.selectedYear - 1;
            this.$emit('selMonth', {month: this.selectedMonth, year: this.selectedYear});
        },
        next: function() {
            this.selectedYear = this.selectedYear + 1;
            this.$emit('selMonth', {month: this.selectedMonth, year: this.selectedYear});
        },
        showTodayActive: function() {
            this.setTodayActive();
            this.$emit('selMonth', {month: this.selectedMonth, year: this.selectedYear});
        },
        setTodayActive: function() {
            const monthList = document.querySelectorAll('.month');
            monthList.forEach(month => {
                if(month.innerHTML === this.months[this.currValues.month]) {
                    month.className = this.activeClass;
                }
            });
            this.selectedMonth = this.currValues.month;
            this.selectedYear = this.currValues.year;
        }
    },
    created() {

    },
    mounted() {
        this.setTodayActive();
    },
    watch: {
        selectedValues: function() {
            //console.log('Inside the monthsui: ' + this.selectedValues.month,this.selectedValues.year);
            this.selectedMonth = this.selectedValues.month;
            this.selectedYear = this.selectedValues.year;

            const monthList = document.querySelectorAll('.month');
            monthList.forEach(month => {
                month.className = this.nonActiveClass;
                if(month.innerHTML === this.months[this.selectedMonth]) {
                    month.className = this.activeClass;
                }
            });
        }
    }
}
</script>

<style scoped>
    .month {
        text-decoration: none;
        padding: 5px 2px 5px 5px;
        border-bottom: 1px solid #f4f4f4;
        font-size: 10px;
    }
    .month:hover {
        background: #f4f4f4;
        font-weight: bold;
        cursor: pointer;
    }
    #monthList {
        list-style-type: none;
        text-align: left;
        padding: 0px;
    }
    .card-header {
        text-align: left;
        font-size: 11px;
        padding: 2px 2px 2px 8px;
    }
    .active {
        font-weight: bold;
        color: #fff;
    }
</style>
