<template>
  <div id="app">
    <NavBar />
    <b-container fluid>
    <b-row>
        <b-col col sm="12" md="12" lg="2" xl="2" class="sidebar">
          <MonthsUI v-bind:months="months" v-bind:currValues="currToday" v-on:selMonth="selMonth" v-bind:selectedValues="selectedVals"/>
        </b-col>
        <b-col col sm="12" md="12" lg="9" xl="9" class="p-2">
          <div class="row">
            <div class="col text-left">
              <div class="alert alert-secondary rounded-0 shadow-sm">
                <button class="btn btn-sm bg-info rounded-0 text-white m-2 shadow-sm">New Appointment</button>
              </div>
              
            </div>
          </div>
          <CalendarUI v-bind:currValues="currToday" v-bind:months="months" v-bind:daysOfTheWeek="daysOfTheWeek" v-bind:selectedFromApp="selected" v-on:selectedValues="selectedVal"/>
          <AppointmentList />
        </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import MonthsUI from './components/MonthsUI.vue'
import CalendarUI from './components/CalendarUI.vue'
import AppointmentList from './components/AppointmentList.vue'
import $ from 'jquery'

export default {
  name: 'app',
  components: {
    //HelloWorld,
    NavBar,
    MonthsUI,
    CalendarUI,
    AppointmentList
  },
  data() {
    return {
      daysOfTheWeek: ["Sunday", 'Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      currToday: null,
      selected: null,
      selectedVals: Object
    }
  },
  methods: {
    selMonth(selected) {
      this.selected = selected;
    },
    selectedVal(newselected) {
      this.selectedVals = newselected; 
    }
  },
  created() {
    var TodayDate = new Date();
    var m = TodayDate.getMonth();
    var d = TodayDate.getDay();
    var y = TodayDate.getFullYear();
    var date = TodayDate.getDate();

    this.currToday = { month:m, day:d, date:date, year:y };
    this.selected = {month: this.currToday.month, year: this.currToday.year};
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .sidebar {
    padding: 8px;
  }
  body {
    background-color:#333333;
  }
</style>
