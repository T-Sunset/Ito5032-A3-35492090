<script setup lang="ts">
    import ContentPage from '../components/ContentPage.vue';
</script>

<template>
    <ContentPage title="Statistics & Our Impact" 
        :links="[
            {label:'Our Mission', to:'/Mission'},
            {label:'Our Team', to:'/Board'},
            {label:'Our Partners', to:'/Partners'},
            {label:'About Us', to:'/About'}
    ]">
    
    <p>The Prism Project is a youth-focused health and wellbeing organisation dedicated to creating safe, 
        inclusive, and empowering spaces for LGBTQIA+ young people. Founded on the belief that every young person 
        deserves access to compassionate support, our work centres on mental health, community connection, and the 
        celebration of diverse identities. We collaborate with educators, healthcare professionals, and community 
        groups to build programs that address real needs and create long-term positive change.<br/><br/>

        Over the years, the Prism Project has grown into a trusted presence within the community. 
        Whether through counselling services, peer support groups, educational workshops, or advocacy efforts, 
        we strive to equip young people with the tools and confidence they need to thrive. Our commitment to 
        accessibility ensures that all our services are welcoming, youth-led, and grounded in respect.</p>
    </ContentPage>
</template>