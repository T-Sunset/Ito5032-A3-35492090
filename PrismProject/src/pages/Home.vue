<template>
    <div class="home-page">

        <!-- Hero Image / Carousel Slide Show -->
         <section class="hero-carousel mb-5">
            <div id="prismCarousel" class="carousel slide shadow-lg rounded-3" data-bs-ride="carousel">

                <!-- Indicators -->
                 <div class="carousel-indicators">
                    <button type="button" data-bs-target="#prismCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#prismCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#prismCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#prismCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                 </div>

                 <!-- Slides -->
                 <div class="carousel-inner rounded-3">
                    <!-- Slide 1: Welcome & Mission -->
                     <div class="carousel-item active" data-bs-interval="7000">
                        <img :src="getPlaceholderImage(1200,500, 'Welcome to Prism')" class="d-block w-100" alt="Placeholder Image"></img>
                        <div class="carousel-caption d-flex align-items-center justify-content-center">
                            <div class="caption-content d-none d-lg-block">
                                <h1 class="text-secondary">Shine Brighter, Together.</h1>
                                <p>Dedicated support and resources for LGBTQIA+ youth and their families.</p>
                                <router-link to="/Mission" class="btn btn-secondary btn-lg fw-bold mt-3">Our Mission</router-link>
                            </div>
                        </div>
                     </div>

                     <!-- Slide 2: Programs Focus -->
                    <div class="carousel-item" data-bs-interval="7000">
                        <img :src="getPlaceholderImage(1200, 500, 'Youth Programs')" class="d-block w-100" alt="Placeholder Image">
                        <div class="carousel-caption d-flex align-items-center justify-content-center">
                        <div class="caption-content d-none d-lg-block">
                            <h1 class="text-secondary">Find Your Support Network.</h1>
                            <p>Explore our free mentorship, mental health, and social programs across the country.</p>
                            <router-link to="/SupportGroup" class="btn btn-info btn-lg fw-bold mt-3">View Our Programs</router-link>
                        </div>
                        </div>
                    </div>
                    
                    <!-- Slide 3: Call for Volunteers -->
                    <div class="carousel-item" data-bs-interval="7000">
                        <img :src="getPlaceholderImage(1200, 500, 'Volunteer Today')" class="d-block w-100" alt="Placeholder Image">
                        <div class="carousel-caption d-flex align-items-center justify-content-center">
                            <div class="caption-content d-none d-lg-block">
                                <h1 class="text-secondary">Be the Change You Want to See.</h1>
                                <p>Your time and compassion can transform a young person's life.</p>
                                <router-link to="/Volunteer" class="btn btn-primary btn-lg fw-bold mt-3">Become a Volunteer</router-link>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 4: Fundraising/Donation -->
                    <div class="carousel-item" data-bs-interval="7000">
                        <img :src="getPlaceholderImage(1200, 500, 'Donate Now')" class="d-block w-100" alt="Placeholder Image">
                        <div class="carousel-caption d-flex align-items-center justify-content-center">
                            <div class="caption-content d-none d-lg-block">
                                <h1 class="text-secondary">Fuel the Future.</h1>
                                <p>Every dollar directly funds crisis support and essential resources for youth in need.</p>
                                <router-link to="/Donate" class="btn btn-secondary btn-lg fw-bold mt-3">Donate to the Project</router-link>
                            </div>
                        </div>
                    </div>
                 </div>

                 <!-- Left/Right Controls -->
                <button class="carousel-control-prev" type="button" data-bs-target="#prismCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#prismCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
            </div>
         </section>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

// Generate placeholder images
const getPlaceholderImage = (width: number, height:number, text:string): string => {
    const color = '1c1c1c';
    const textColor = 'ffffff';

    const hash = Math.random().toString(36).substring(2,7);

    return `https://placehold.co/${width}x${height}/${color}/${textColor}?text=${encodeURIComponent(text.toUpperCase())}`
}
</script>