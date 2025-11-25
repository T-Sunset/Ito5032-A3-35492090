<!-- -->
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">

            <!-- Branding goes here -->
            <router-link class="navbar-brand" to="/">Prism Project</router-link>

            <!-- Mobile Toggle -->
            <button class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav">

            <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Collapsible Menu -->
             <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">

                    <!-- Home -->
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Homepage</router-link>
                    </li>

                    <!-- About Us-->
                    <li class="nav-item">
                        <router-link class="nav-link" to="/About">About Us</router-link>
                    </li>

                    <!-- News -->
                     <li class="nav-item">
                        <router-link class="nav-link" to="/News">News</router-link>
                    </li>

                    <!-- Events -->
                     <li class="nav-item">
                        <router-link class="nav-link" to="/Events">Events & Programs</router-link>
                    </li>

                    <!-- Find Support -->
                    <li class="nav-item">
                        <router-link class="nav-link" to="/FindSupport">Find Support</router-link>
                    </li>

                    <!-- Get Involved -->
                    <li class="nav-item">
                        <router-link class="nav-link" to="/Involved">Get Involved</router-link>
                    </li>

                    <!-- Contact Us -->
                     <li class="nav-item">
                        <router-link class="nav-link" to="/Contact">Contact Us</router-link>
                    </li>
                </ul>
             </div>
        </div>
    </nav>
</template>

<!-- -->
<script>

</script>

<!-- -->
<style scoped>

</style>