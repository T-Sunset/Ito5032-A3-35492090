<script setup lang="ts">
    import ContentPage from '../components/ContentPage.vue';
</script>

<template>
    <ContentPage title="Find your Closest Centre" 
        :links="[
            {label:'Book a Session', to:'/Booking'},
            {label:'Support Groups', to:'/SupportGroup'},
            {label:'Crisis Support', to:'/Crisis'},
            {label:'Knowledge Base', to:'/KnowledgeBase'},
            {label:'Find Support', to:'/FindSupport'}
    ]">
    
   <p>Use this page to locate the Prism Project centre nearest to you — each listing includes opening hours, contact details, and the services available at that site. Our centres offer safe, affirming spaces for drop-in support, counselling appointments, group activities, and community events.</p> <p>If public transport or accessibility is a concern, we can help identify the most convenient option and advise on accessible entrances, quiet rooms, or remote support alternatives. If there’s no centre nearby, we’ll suggest trusted partner services in your region that can help.</p>
    </ContentPage>
</template>