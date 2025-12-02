<script setup lang="ts">
    import ContentPage from '../components/ContentPage.vue';
</script>

<template>
    <ContentPage title="Support Groups" 
        :links="[
            {label:'Book a Session', to:'/Booking'},
            {label:'Find Support', to:'/FindSupport'},
            {label:'Crisis Support', to:'/Crisis'},
            {label:'Knowledge Base', to:'/KnowledgeBase'},
            {label:'Find your Closest Centre', to:'/Closest'}
    ]">
    
   <p>Our support groups are welcoming spaces where young people can share experiences, learn from peers, and build supportive friendships. Sessions are facilitated by trained staff and cover a variety of themes — from coming out and identity exploration to mental health and relationships — with an emphasis on mutual respect and confidentiality.</p> <p>Groups run both in-person and online to make attendance easier; we also offer themed short-runs and ongoing drop-in groups so you can find the right fit for your needs. If you’re unsure which group is right for you, contact us and we’ll help you choose or arrange a trial session.</p>
    </ContentPage>
</template>