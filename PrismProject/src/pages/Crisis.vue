<script setup lang="ts">
    import ContentPage from '../components/ContentPage.vue';
</script>

<template>
    <ContentPage title="Crisis Support" 
        :links="[
            {label:'Book a Session', to:'/Booking'},
            {label:'Find Support', to:'/FindSupport'},
            {label:'Support Groups', to:'/SupportGroup'},
            {label:'Knowledge Base', to:'/KnowledgeBase'},
            {label:'Find your Closest Centre', to:'/Closest'}
    ]">
    
   <p>If you are in immediate danger or at risk of harming yourself, please call your local emergency services right away. For urgent emotional support, contact your local crisis line or a national helpline — we keep an up-to-date list of 24/7 crisis resources and can help connect you to urgent care if needed.</p> <p>For non-immediate but pressing concerns, reach out to the Prism Project and we’ll prioritise you for expedited support. Our team can assist with safety planning, urgent referrals, and getting you the medical or mental health care you need as quickly and safely as possible.</p>
    </ContentPage>
</template>