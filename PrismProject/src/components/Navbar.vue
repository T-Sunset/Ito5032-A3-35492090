<!-- -->
<template>
    <!-- Top Ribbon -->
    <div class="bg-light py-2 border-bottom">
        <div class="container d-flex justify-content-between align-items-center">

            <!-- Left: Logo -->
            <div class="d-flex align-items-center">
                <router-link to="/" class="navbar-brand d-flex align-items-center">
                    <img src="../assets/logo.png" 
                    alt="Prism Project Logo" 
                    class="me-2"
                    style="height:60px; cursor:pointer;"/>
                </router-link>
                
            </div>

            <!-- Right: Login Links & Search Bar -->
            <div class="d-flex align-items-center gap-4">

                <!-- Login Links -->
                <div>
                    <router-link to="/MemberLogin" class="me-3 text-decoration-none">
                        Member Login
                    </router-link>
                    <router-link to="/StaffLogin" class="me-3 text-decoration-none">
                        Staff Login
                    </router-link>
                </div>

                <!-- Search Bar -->
                <form class="d-flex">
                    <input class="form-control form-control-sm me-2"
                    type="search"
                    placeholder="Search"/>
                </form>
            </div>
        </div>
    </div>

    <!-- Main Navigation -->
     <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div class="container align-self-center">

            <!-- Hamburger Menu for Mobile -->
             <button 
             class="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#mainNav">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav mx-auto">

                    <!-- About Us -->
                     <li class="nav-item dropdown mx-2">
                        <a 
                            class="nav-link dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown">
                        About</a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/About">About Us</router-link></li>
                            <li><router-link class="dropdown-item" to="/Mission">Our Mission</router-link></li>
                            <li><router-link class="dropdown-item" to="/Board">Our Team & Board</router-link></li>
                            <li><router-link class="dropdown-item" to="/Partners">Our Partners</router-link></li>
                            <li><router-link class="dropdown-item" to="/Statistics">Statistics & Our Impact</router-link></li>
                        </ul>
                     </li>

                    <!-- News -->
                     <li class="nav-item mx-2">
                        <router-link class="nav-link" to="/News">News</router-link>
                     </li>
                    
                    <!-- Events & Programs -->
                     <li class="nav-item dropdown mx-2">
                        <a 
                            class="nav-link dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown">
                        Events</a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/Events">Our Events</router-link></li>
                            <li><router-link class="dropdown-item" to="/Calendar">Calendar View</router-link></li>
                        </ul>
                     </li>

                    <!-- Find Support -->
                     <li class="nav-item dropdown mx-2">
                        <a 
                            class="nav-link dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown">
                        Support Network</a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/FindSupport">Find Support</router-link></li>
                            <li><router-link class="dropdown-item" to="/Booking">Book a Session</router-link></li>
                            <li><router-link class="dropdown-item" to="/SupportGroup">Support Groups</router-link></li>
                            <li><router-link class="dropdown-item" to="/Crisis">Crisis Support</router-link></li>
                            <li><router-link class="dropdown-item" to="/KnowledgeBase">Knowledge Base / FAQ</router-link></li>
                            <li><router-link class="dropdown-item" to="/Closest">Find your Closest Centre</router-link></li>
                        </ul>
                     </li>

                    <!-- Get Involved -->
                     <li class="nav-item dropdown mx-2">
                        <a 
                            class="nav-link dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown">
                        Involvement</a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/Involved">Get Involved</router-link></li>
                            <li><router-link class="dropdown-item" to="/Volunteer">Volunteering</router-link></li>
                            <li><router-link class="dropdown-item" to="/Donate">Donate Online</router-link></li>
                            <li><router-link class="dropdown-item" to="/Fundraiser">Fundraising Campaigns</router-link></li>
                        </ul>
                     </li>

                    <!-- Contact Us -->
                     <li class="nav-item dropdown mx-2">
                        <a 
                            class="nav-link dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown">
                        Contact</a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/Contact">Contact Us</router-link></li>
                            <li><router-link class="dropdown-item" to="/Enquire">General Enquiries</router-link></li>
                            <li><router-link class="dropdown-item" to="/MediaEnquire">Media Enquiries</router-link></li>
                            <li><router-link class="dropdown-item" to="/Feedback">Feedback & Complaints</router-link></li>
                            <li><router-link class="dropdown-item" to="/Accessibility">Accessibility Support</router-link></li>
                        </ul>
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