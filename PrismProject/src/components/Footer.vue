<!-- Footer for each page. Universal. -->
<template> 
    <footer class="bg-dark app-footer text-light py-5 mt-5">
        <!-- Container -->
         <div class="container">
            <!-- Top Row: Centred Title (and maybe a logo?)-->
            <div class="row">
                <div class="justify-content-center">
                    <h5 class="footer-title text-center text-secondary">The Prism Project</h5>
                    <p class="text-small text-center">
                        Empowering the LGBTQIA+ Community to Shine Brightly.
                    </p>
                </div>
            </div>

            <!-- Next: Two columns, centred, with adjusted footer content -->
            <div class="row">
                <!-- First Column: Quick Links -->
                <div class="col-6 mb-4">
                    <h5 class="footer-title text-center text-secondary">Quick Links</h5>
                    <ul class="list-unstyled text-center">
                        <li><router-link to="/About" class="footer-link">About Us</router-link></li>
                        <li><router-link to="/Events" class="footer-link">Our Events</router-link></li>
                        <li><router-link to="/Involved" class="footer-link">Get Involved</router-link></li>
                        <li><router-link to="/Contact" class="footer-link">Contact Us</router-link></li>
                        <li><router-link to="/Donate" class="footer-link">Donate</router-link></li>
                    </ul>
                </div>

                <!-- Connect w/ Us! -->
                <div class="col-6 mb-4">
                    <h5 class="footer-title text-center text-secondary">Connect</h5>
                    <p class="text-center">
                        Email: <a href="mailto:dcha0124@student.monash.edu" class="footer-link">info@prismproject.org</a><br/>
                        Phone: 04 1234 5678
                    </p>
                </div>
            </div>

            <!-- Copyright -->
             <hr class="mt-4 mb-3"/>
             <div class="text-center">
                <p class="mb-0 text-small">&copy; {{ new Date().getFullYear() }} The Prism Project. All Rights Reserved.</p>
                <p class="mb-0 text-small"><router-link to="/" class="footer-link">Privacy Policy</router-link></p>
             </div>
         </div>
    </footer>
</template>  

<script>

</script>

<style scoped lang="scss">
/* Increase the weight of the title*/
.footer-title {
    font-weight: 700;
}

/* Style internal links */
.footer-link {
    color: var(--bs-light); /* White / Light gray */
    text-decoration: none;
    transition: color 0.3s ease;
    /* On hover... */
    &:hover {
        color: var(--bs-secondary); /* Ease to magenta */
        text-decoration: underline; /* Get underline */
    }
}

/* Style small text */
.text-small {
    font-size: 0.85rem;
    opacity: 0.9;
}
</style>