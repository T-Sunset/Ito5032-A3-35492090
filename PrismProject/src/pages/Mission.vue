<script setup lang="ts">
    import ContentPage from '../components/ContentPage.vue';
</script>

<template>
    <ContentPage title="Our Mission" 
        :links="[
            {label:'About Us', to:'/About'},
            {label:'Our Team', to:'/Board'},
            {label:'Our Partners', to:'/Partners'},
            {label:'Our Impact', to:'/Statistics'}
    ]">
    
    <p>The Prism Project exists to uplift and empower LGBTQIA+ youths by providing accessible, affirming, 
        and community-driven support. We aim to break down barriers to healthcare, foster confidence and resilience, 
        and ensure that young people always have a safe place to turn. Through evidence-based programs and trauma-informed 
        practices, we work to create pathways toward healthier futures.<br/><br/>

        At the heart of our mission is a commitment to equity, diversity, and intersectionality. 
        We recognise that every young person’s experience is shaped by multiple aspects of their identity, 
        and our services are designed to honour and reflect that complexity. Our ultimate goal is to cultivate 
        a society where LGBTQIA+ youth can thrive without fear, stigma, or limitation.</p>
    </ContentPage>
</template>