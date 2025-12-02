<script setup lang="ts">
    import ContentPage from '../components/ContentPage.vue';
</script>

<template>
    <ContentPage title="Our Board" 
        :links="[
            {label:'Our Mission', to:'/Mission'},
            {label:'About Us', to:'/About'},
            {label:'Our Partners', to:'/Partners'},
            {label:'Our Impact', to:'/Statistics'}
    ]">
    
    <p>Our team is made up of passionate professionals, volunteers, and community leaders who 
        share a dedication to supporting LGBTQIA+ young people. From counsellors and youth workers to 
        educators and outreach coordinators, each member brings unique expertise to our programs. We believe 
        in collaborative leadership, lived experience, and ongoing development to ensure our work remains responsive 
        and relevant. <br/><br/>

        Our Board of Directors oversees organisational direction, governance, and long-term strategy. Comprised of advocates,
         health professionals, and individuals with extensive experience in youth services, the Board ensures we remain transparent, 
         ethical, and effective in everything we do. Their guidance helps us uphold our mission and continue to grow sustainably.</p>
    </ContentPage>
</template>