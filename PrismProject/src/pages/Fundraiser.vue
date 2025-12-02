<script setup lang="ts">
    import ContentPage from '../components/ContentPage.vue';
</script>

<template>
    <ContentPage title="Fundraising Campaigns" 
        :links="[
            {label:'News', to:'/News'},
            {label:'Events', to:'/Events'}
    ]">
    
   <p>Our fundraising campaigns power the services, events and outreach that keep the Prism Project running. Whether we’re raising for a new counselling programme, a youth weekend away, or expanded regional support, every donation helps us do more for LGBTQIA+ young people.</p> <p>You can support us by donating, organising a peer fundraising event, or spreading the word. We provide resources and guidance for individual and group fundraisers, and we’ll acknowledge and support your efforts while keeping fundraising transparent and accountable.</p>
    </ContentPage>
</template>