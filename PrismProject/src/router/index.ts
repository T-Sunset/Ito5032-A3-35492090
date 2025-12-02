import {createRouter, createWebHistory } from 'vue-router'

// Import Pages
// ABOUT
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Mission from '../pages/Mission.vue'
import Board from '../pages/Board.vue'
import Partners from '../pages/Partners.vue'
import Statistics from '../pages/Statistics.vue'

// NEWS
import News from '../pages/News.vue'
import NewsDetail from '../pages/NewsDetail.vue'

// EVENTS
import Events from '../pages/Events.vue'
import Calendar from '../pages/Calendar.vue'
import Details from '../pages/Details.vue'

// FIND SUPPORT
import FindSupport from '../pages/FindSupport.vue'
import Booking from '../pages/Booking.vue'
import SupportGroup from '../pages/SupportGroup.vue'
import Crisis from '../pages/Crisis.vue'
import KnowledgeBase from '../pages/KnowledgeBase.vue'
import Closest from '../pages/Closest.vue'

// GET INVOLVED
import Involved from '../pages/Involved.vue'
import Volunteer from '../pages/Volunteer.vue'
import Donate from '../pages/Donate.vue'
import Fundraiser from '../pages/Fundraiser.vue'

// CONTACT US
import Contact from '../pages/Contact.vue'
import Enquire from '../pages/Enquire.vue'
import MediaEnquire from '../pages/MediaEnquire.vue'
import Feedback from '../pages/Feedback.vue'
import Accessibility from '../pages/Accessibility.vue'

// MEMBER LOGIN
import MemberLogin from '../pages/MemberLogin.vue'
import MemberDashboard from '../pages/MemberDashboard.vue'
import MemberSettings from '../pages/MemberSettings.vue'
import MemberHistory from '../pages/MemberHistory.vue'

// STAFF LOGIN
import StaffLogin from '../pages/StaffLogin.vue'
import ContentManagement from '../pages/ContentManagement.vue'
import BookingManagement from '../pages/BookingManagement.vue'
import MemberManagement from '../pages/MemberManagement.vue'
import Analytics from '../pages/Analytics.vue'
import Settings from '../pages/Settings.vue'

// LOGIN
import Login from '../pages/Login.vue'

// Create Routes Constant
const routes = [
    { path: '/', component: Home },
    { path: '/About', component: About },
    { path: '/Mission', component: Mission },
    { path: '/Board', component: Board },
    { path: '/Partners', component: Partners },
    { path: '/Statistics', component: Statistics },

    { path: '/News', component: News },
    { path: '/News/:id', 
        name:'NewsDetail',
        component: NewsDetail},

    { path: '/Events', component: Events },
    { path: '/Calendar', component: Calendar },
    { path: '/Details', component: Details },

    { path: '/FindSupport', component: FindSupport },
    { path: '/Booking', component: Booking },
    { path: '/SupportGroup', component: SupportGroup },
    { path: '/Crisis', component: Crisis },
    { path: '/KnowledgeBase', component: KnowledgeBase },
    { path: '/Closest', component: Closest },

    { path: '/Involved', component: Involved },
    { path: '/Volunteer', component: Volunteer },
    { path: '/Donate', component: Donate },
    { path: '/Fundraiser', component: Fundraiser },

    { path: '/Contact', component: Contact },
    { path: '/Enquire', component: Enquire },
    { path: '/MediaEnquire', component: MediaEnquire },
    { path: '/Feedback', component: Feedback },
    { path: '/Accessibility', component: Accessibility },

    { path: '/MemberLogin', component: MemberLogin },
    { path: '/MemberDashboard', component: MemberDashboard },
    { path: '/MemberSettings', component: MemberSettings },
    { path: '/MemberHistory', component: MemberHistory },

    { path: '/StaffLogin', component: StaffLogin },
    { path: '/ContentManagement', component: ContentManagement },
    { path: '/BookingManagement', component: BookingManagement },
    { path: '/MemberManagement', component: MemberManagement },
    { path: '/Analytics', component: Analytics },
    { path: '/Settings', component: Settings },

    {path: '/Login', component:Login }
]

// Create Router
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router