<template>
    <ContentPage title="Upcoming Events" :links="[{label:'All News', to:'/News'}]">
        <div v-if="events.length === 0">No upcoming events</div>

        <ul>
            <li v-for="ev in events" :key="ev.id">
                <h5 class="text-primary">{{ ev.title }}</h5>
                <p>{{ ev.date.toDate().toLocaleDateString() }} — {{ ev.location }}<br/>
                {{ ev.description }}</p>
            </li>
        </ul>
    </ContentPage>
    <br/><br/>
    <ContentPage v-if="isAdmin" title="Add Event" :links="[]">
        <form @submit.prevent="submitEvent">
            <div class="container p-4">
            <div class="row">
                 <label for="title">Title:</label>
                <input id="title" v-model="title" placeholder="Title" required></input>
            </div>
            <div class="row">
                <label for="location">Location:</label>
                <input id="location" v-model="location" placeholder="Location" required></input>
            </div>
            <div class="row">
                <label for="date">Date:</label>
                <input type="date" v-model="date" required></input>
            </div>
            <div class="row">
                <label for="description">Description:</label>    
                <textarea v-model="description" placeholder="Description"></textarea> 
            </div>
            <button class="text-center btn btn-primary" type="submit">Save Event</button>
        </div>

        </form>
    </ContentPage>
</template>

<script setup>
// Imports 
import ContentPage from '../components/ContentPage.vue'
import { db, currentUser, isAdmin } from '../firebase'
import { addDoc, collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore'
import { ref, onMounted } from 'vue'

// Get events to dynamic list
const events = ref([])

// On Mount
onMounted(async () => {
    const q = query(collection(db, "events"), orderBy("date"))
    const snap = await getDocs(q)
    events.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
});

// Get Event Submission information
const title = ref('')
const date = ref('')
const location = ref('')
const description = ref('')

// Submit new event
const submitEvent = async () => {
    await addDoc(collection(db, "events"), {
        title: title.value,
        location: location.value,
        description: description.value,
        date: Timestamp.fromDate(new Date(date.value))
    })
    alert("Event added!")
}
</script>