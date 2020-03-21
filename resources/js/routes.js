import SocialProofMember from './views/SocialProofMember.vue'
import Promotions from './views/Promotions.vue'
import Dashboard from './views/Dashboard.vue'
import Opportunities from './views/Opportunities.vue'
import Community from './views/Community.vue'
import InviteFriends from './views/InviteFriends.vue'
import MemberDashboard from './views/MemberDashboard.vue'

export default [
    {
      path: '/promotions',
      name: 'promotions',
      component: Promotions
    },
    {
      path: '/member-social-proof',
      name: 'member-social-proof',
      component: SocialProofMember
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/opportunities',
      name: 'opportunities',
      component: Opportunities
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },
    {
      path: '/invite-friends',
      name: 'invite-friends',
      component: InviteFriends
    },
    {
      path: '/member-dashboard',
      name: 'member-dashboard',
      component: MemberDashboard
    }
]
