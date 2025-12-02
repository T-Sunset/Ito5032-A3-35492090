<template>
  <div class="container py-5">
        <div class="row">

        <!-- Main Content on the left side (col-8 on desktop) -->
            <div class="col-12 col-lg-8">
                <div class="content-wrapper p-4">
                    <h1 class="mb-4 text-secondary">News</h1>

                    <!-- Content Goes Here -->
                    <!-- If no news is posted... -->
                     <div v-if="posts.length === 0">No news posts yet.</div>

                    <!-- Display news posts -->
                     <div v-for="post in posts" :key="post.id" class="card mb-3" @click="goToPost(post.id)" style="cursor:pointer;">
                        <div class="card-body">
                            <h5 class="card-title text-primary">{{ post.title }}</h5>
                            <p class="card-text">{{ post.content.substring(0,120) }}...</p>
                            <small class="text-muted">By {{ post.author }} on {{ post.createdAt?.toDate().toLocaleDateString() }}</small>
                        </div>
                     </div> 
                </div>
            </div>
        </div>
    </div>

    <!-- Admin Only: Add new News posts form -->
     <div v-if="isAdmin" class="container py-5">
        <div class="row">
            <div class="col-12 col-lg-8">
                <div class="content-wrapper p-4">
                    <h1 class="mb-4 text-secondary">Create New Post</h1>

                    <!-- Create Post Form -->
                    <label for="title">Title:</label>
                    <input id="title" v-model="title" class="form-control mb-2" placeholder="Title"></input>
                    <br/><label for="content">Content:</label>
                    <textarea v-model="content" class="form-control mb-2" placeholder="Content"></textarea>
                    <br/><label for="image">Image URL:</label>
                    <input v-model="imageUrl" class="form-control mb-2" placeholder="Image URL (optional)"></input>
                    <button type="button" class="btn btn-primary text-center" @click="createPost">Publish</button>
                </div>
            </div>
        </div>
     </div>
</template>

<script setup lang="js">
// Imports
import {ref, onMounted} from 'vue';
import {db, currentUser, isAdmin} from '../firebase';
import {collection, getDocs, addDoc, query, orderBy, serverTimestamp} from 'firebase/firestore';
import {useRouter} from 'vue-router';

// Posts constant, dynamic
const posts = ref([]);

// Get router
const router = useRouter();

// On Mounted
onMounted(async() => {
    // Get news query search snapshot
    const newsQuery = query(collection(db, "news"), orderBy("createdAt"));
    const snapshot = await getDocs(newsQuery);

    // Set posts to our snapshot result from Firestore db 'news'
    posts.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

const goToPost = (id) => {
    router.push(`/News/${id}`);
}

// Create Post Form Functionality
const title = ref('');
const content = ref('');
const imageUrl = ref('');

// Create Post Function
const createPost = async() => {
    // Only works if there's a title and content added
    if (!title.value || !content.value) return;

    // Add Doc to Firestore
    await addDoc(collection(db, "news"), {
        title:title.value,
        content:content.value,
        author:currentUser.value.email,
        createdAt:serverTimestamp(),
        imageUrl:imageUrl.value || ''
    });

    // Reset Form
    title.value = '';
    content.value = '';
    imageUrl.value = '';
}
</script>

<style scoped>
    .content-wrapper, 
    .sidebar-wrapper {
        background: #fff;
        border-radius: 10px;
        border: 1px solid #e5e5e5;
        box-shadow: 0 1px 4px rgba(0,0,0,0.08);
    }
</style>