<template>
    <ContentPage v-if="post" 
        :title="post.title" 
        :links="[{label:'All News', to:'/News'}]">
    
    <p class="text-muted">By {{ post.author }} on {{ post.createdAt?.toDate().toLocaleDateString() }}</p>
    <img v-if="post.imageUrl" :src="post.imageUrl" class="img-fluid mb-3"></img>
    <p>{{ post.content }}</p>
    </ContentPage>
</template>

<script setup lang="ts">
    import ContentPage from '../components/ContentPage.vue';
    import {ref, onMounted} from 'vue';
    import {db} from '../firebase';
    import {doc, getDoc} from 'firebase/firestore';
    import {useRoute} from 'vue-router';

    // Get Router
    const route = useRoute();

    // Get post as dynamic field
    const post = ref();

    // On Mount
    onMounted(async () => {
        // Find news story reference
        const docRef = doc(db, "news", route.params.id as string);

        // Get snapshot
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            post.value = docSnap.data();
        } else {
            console.error("Post not found.");
        }
    });
</script>
