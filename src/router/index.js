import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProfilePage from "../views/ProfilePage.vue";
import StudentDashboard from "../views/StudentDashboard.vue";
import InstructorDash from "../views/InstructorDash.vue";
import Roster from "../views/Roster.vue";
import NotFound from "../views/NotFound.vue";
import QuizMain from "../views/QuizMain.vue";
import SigninSignupPage from "../views/SigninSignupPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/Signin",
    beforeEnter() {
      window.location.href =
        "https://shibboleth-dept-nclex-interactive-quiz.apps.cloudapps.unc.edu";
    },
  },
  {
    path: "/auth",
    name: "User Authentication",
    component: SigninSignupPage
  },
  {
    path: "/Profile",
    name: "Profile",
    component: ProfilePage
  },
  {
    path: "/StudentDashboard",
    name: "Student Dashboard",
    component: StudentDashboard,
  },
  {
    path: "/InstructorDashboard",
    name: "Instructor Dashboard",
    component: InstructorDash,
  },
  {
    path: "/Roster",
    name: "Roster",
    component: Roster,
  },
  {
    path: "/Quiz/:id",
    name: "QuizMain",
    component: QuizMain,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
