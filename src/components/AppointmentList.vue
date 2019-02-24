<template>
    <div class="row mt-3">
        <div class="col">
            <div class="card border-0 text-left rounded-0">
                <div class="card-header">Upcoming Appointments</div>
                <div class="card-body border-0">
                    <div v-for="appointment in appointments" :key="appointment.id" >
                        <p>Appointment With : {{appointment.name}}</p>
                        <p>Appointment Date: {{appointment.date}} <span class="float-right"> {{appointment.comment}}</span> </p>
                        <hr>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'appointmentList',
    data() {
        return {
            appointments: [
                {
                    id: 1,
                    name: 'John Doe',
                    date: '02/02/2019 1:30PM',
                    comment: 'John is looking for a website for his cat',
                    contact: [
                        {
                            type: 'phone',
                            value: '248-990-9900'
                        },
                        {
                            type: 'email',
                            value: 'johndoe@gmail.com'
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Susan Q',
                    date: '02/20/2019 12:00PM',
                    comment: 'Susan Q wants a new logo for her business',
                    contact: [
                        {
                            type: 'phone',
                            value: '248-990-9900'
                        },
                        {
                            type: 'email',
                            value: 'susanQ@gmail.com'
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Alfred Brown',
                    date: '02/02/2019 3:30PM',
                    comment: 'Alfred is looking to change some text on his website',
                    contact: [
                        {
                            type: 'phone',
                            value: '248-990-9900'
                        },
                        {
                            type: 'email',
                            value: 'abrown@gmail.com'
                        }
                    ]
                },

            ]
        }
    }
}
</script>

<style>

</style>

