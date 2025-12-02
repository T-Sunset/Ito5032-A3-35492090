<script setup lang="ts">
    import ContentPage from '../components/ContentPage.vue';
</script>

<template>
    <ContentPage title="Find Support" 
        :links="[
            {label:'Book a Session', to:'/Booking'},
            {label:'Support Groups', to:'/SupportGroup'},
            {label:'Crisis Support', to:'/Crisis'},
            {label:'Knowledge Base', to:'/KnowledgeBase'},
            {label:'Find your Closest Centre', to:'/Closest'}
    ]">
    
   <p>If you’re seeking support, you’re not alone — the Prism Project offers a range of confidential services designed with LGBTQIA+ young people in mind. Whether you need someone to talk to, guidance on health and wellbeing, or help navigating local services, our team can connect you with the right supports quickly and respectfully.</p> <p>We prioritise safety, privacy and inclusivity: our staff and volunteers are trained in trauma-informed care and work to provide non-judgmental, practical help. Get in touch to arrange a one-to-one chat, an online drop-in, or to be referred to specialist services in your area.</p>
    </ContentPage>
</template>