<template>
  <div id="app">
    <NavBar />
    <b-container fluid>
    <b-row>
        <b-col col sm="6" md="3" lg="2" xl="2" class="sidebar">
          <MonthsUI v-bind:months="months" v-bind:currValues="currToday" v-on:selMonth="selMonth"/>
        </b-col>
        <b-col col sm="7" md="9" lg="10" xl="10" class="p-2">
          <CalendarUI v-bind:currValues="currToday" v-bind:months="months" v-bind:selected="selected"/>
        </b-col>
    </b-row>
    </b-container>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import MonthsUI from './components/MonthsUI.vue'
import CalendarUI from './components/CalendarUI.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    NavBar,
    MonthsUI,
    CalendarUI
  },
  data() {
    return {
      days: ["Sunday", 'Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      currToday: null,
      selected: null
    }
  },
  methods: {
    selMonth(selected) {
      //console.log(selected);
      this.selected = selected;
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
</style>
