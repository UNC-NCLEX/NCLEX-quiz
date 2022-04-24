import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js";
import HomePage from "../views/HomePage.vue";
import ProfilePage from "../views/ProfilePage.vue";
import StudentDashboard from "../views/StudentDashboard.vue";
import InstructorDashboard from "../views/InstructorDashboard.vue";
import Roster from "../views/Roster.vue";
import NotFound from "../views/NotFound.vue";
import QuizMain from "../views/QuizMain.vue";
import UserAuthenticationPage from "../views/UserAuthentication.vue";
import PasswordRecovery from "../views/PasswordRecovery.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/Auth",
    name: "User Authentication",
    component: UserAuthenticationPage,
    props: true,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/Auth/PasswordRecovery",
    name: "Password Recovery",
    component: PasswordRecovery,
    props: true,
    meta: {
      requiresAuth: true,
      authType: "password-recovery"
    }
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
    meta: {
      requiresAuth: true,
      authType: "student-only"
    }
  },
  {
    path: "/InstructorDashboard",
    name: "Instructor Dashboard",
    component: InstructorDashboard,
    meta: {
      requiresAuth: true,
      authType: "instructor-only"
    }
  },
  {
    path: "/Roster",
    name: "Roster",
    component: Roster,
    meta: {
      requiresAuth: true,
      authType: "instructor-only"
    }
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
    meta: {
      requiresAuth: false
    }
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

let prevPath = "";
router.beforeEach((to) => {
  const path = window.location.href;
  const isPasswordRecovery = (path.indexOf("type=recovery") > -1) ? true : false;
  const isEmailVerification = (path.indexOf("type=signup") > -1) ? true : false;

  let authRequired;
  let authType;
  let signedIn;
  let userType;

  if (isPasswordRecovery) {
    authRequired = true;
    authType = "password-recovery";
  } else if (isEmailVerification) {
    authRequired = false;
    authType = "none";
  } else {
    authRequired = to.meta.requiresAuth;
    authType = (typeof to.meta.authType !== "undefined") ? to.meta.authType : "none";
    signedIn = store.state.signedIn;
    userType = store.state.user.userType;
  }

  let isRoutingToSamePage = (to.path == prevPath) ? true : false;
  if (!isRoutingToSamePage && authRequired && isPasswordRecovery) {
    let token = path.slice(path.indexOf("=") + 1);
    token = token.slice(0, token.indexOf("&"));
    store.state.user.jwt = token;
    prevPath = "/Auth/PasswordRecovery";
    router.push({name: "Password Recovery"});
  } else if (!isRoutingToSamePage && isEmailVerification) {
    prevPath = "/Auth";
    router.push({name: "User Authentication", params: {id: "signin"}});
  } else if (!isRoutingToSamePage && authRequired && !signedIn) {
    prevPath = path;
    router.push("/Auth");
  } else if (!isRoutingToSamePage && authRequired && signedIn && authType === userType) {
    prevPath = path;
    router.push(to.path);
  }
});
export default router;
