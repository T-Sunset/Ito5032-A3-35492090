<template>
  <ContentPage title="Book Appointment" :links="[
        {label:'Find Support', to:'/FindSupport'},
        {label:'Support Groups', to:'/SupportGroup'},
        {label:'Crisis Support', to:'/Crisis'},
        {label:'Knowledge Base', to:'/KnowledgeBase'},
        {label:'Find your Closest Centre', to:'/Closest'}
  ]">
    <form @submit.prevent="book">
      <input v-model="service" placeholder="Service name" required />
      <input v-model="datetime" type="datetime-local" required />
      <button type="submit">Book</button>
    </form>
  </ContentPage>
</template>

<script setup>
import ContentPage from '../components/ContentPage.vue'
import { ref } from 'vue'
import { db } from '../firebase'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const service = ref('')
const datetime = ref('')

const book = async () => {
  const user = getAuth().currentUser
  if (!user) return alert("Please log in first.")

  await addDoc(collection(db, "bookings"), {
    userId: user.uid,
    service: service.value,
    datetime: Timestamp.fromDate(new Date(datetime.value))
  })

  alert("Appointment booked!")
}
</script>