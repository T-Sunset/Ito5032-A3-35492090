<script setup lang="ts">
    import ContentPage from '../components/ContentPage.vue';
</script>

<template>
    <ContentPage title="Knowledge Base" 
        :links="[
            {label:'Book a Session', to:'/Booking'},
            {label:'Find Support', to:'/FindSupport'},
            {label:'Support Groups', to:'/SupportGroup'},
            {label:'Crisis Support', to:'/Crisis'},
            {label:'Find your Closest Centre', to:'/Closest'}
    ]">
    
   <p>Our Knowledge Base gathers clear, practical information on topics young LGBTQIA+ people ask about most — from accessing healthcare and rights information to practical tips on wellbeing and relationships. Content is written in plain language and reviewed by specialists to keep it accurate and accessible.</p> <p>If you can’t find an answer, our FAQ also includes quick guidance on where to get specialised help; and you can submit a question for a personal response. We update resources regularly to reflect changes in services, legal guidance, and best practice.</p>
    </ContentPage>
</template>