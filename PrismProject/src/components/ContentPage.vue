<template>
  <div class="container py-5">
    <div class="row">

      <!-- Main Content on the left side (col-8 on desktop) -->
      <div class="col-12 col-lg-8">
        <div class="content-wrapper p-4">
          <h1 class="mb-4 text-secondary">{{ title }}</h1>

          <!-- Content Goes Here -->
           <!-- This is where content put inside ContentPage tags should go -->
            <slot/>
        </div>
      </div>

      <!-- Sidebar with 'Quick Links' to related pages (col-4 on desktop) -->
      <div class="col-12 col-lg-4">
        <div class="sidebar-wrapper p-4">
          <h4 class="mb-3 text-secondary">Related Pages</h4>

          <!-- Create a downward list of buttons to related pages -->
          <div class="d-grid gap-2">
            <!-- Loop through array of link objects -->
            <button
              v-for="(link, index) in links"
              :key="index"
              class="btn btn-outline-primary"
              @click="$router.push(link.to)"
            >
              {{ link.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    // Create a function that allows us to set a title for left-side content and create a list of right-side buttons labelled _label to route us on-click to _to
    defineProps<{
        title: string;
        links?: Array<{ label: string; to: string }>;
    }>();
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
