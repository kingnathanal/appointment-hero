<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-xl">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add New Appointment</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div>
            <input type="input" name id v-bind:value="getSelectedDate()">
            <input type="text" name="appointmentName" id>
            <input type="datetime-local" name="fromDate">
            <input type="datetime-local" name="toDate" id>
            <textarea name="comments" id cols="30" rows="10"></textarea>
            {{currToday.month}}/{{currToday.day}}/{{currToday.year}}
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-success">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newAppointment",
  props: {
    currToday: Object,
    getSelectedDate: Function
  }
};

//console.log("JUMP");
</script>

<style>
</style>

