import VueRouter from "vue-router";
import MainPage from "../pages/MainPage";
import FilmDetail from "../pages/FilmDetail";
import TestInsert from "../pages/TestInsert";
import ForAdmin from "../pages/ForAdmin";
import AdminAddfilm from "../components/Admin/AdminAddfilm";
import AdminAdduser from "../components/Admin/AdminAdduser";
import ChoseSeat from "../pages/ChoseSeat";
import FilmPage from "../pages/FilmPage";
import CinemaPage from "../pages/CinemaPage";
import CinemaDetail from "../components/Cinema/CinemaDetail";
import UserPage from "../pages/UserPage";
import SearchMovie from "../pages/SearchMovie";
import SearchCinema from "../pages/SearchCinema";
import SearchAll from "../pages/SearchAll";
import BuyCinema from "../pages/BuyCinema";
import UserLogin from "../components/UserControl/UserLogin";
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/FilmDetail",
      component: FilmDetail,
    },
    {
      path: "/TestInsert",
      component: TestInsert,
    },
    {
      path: "/ChoseSeat",
      component: ChoseSeat,
    },
    {
      path: "/FilmPage",
      component: FilmPage,
    },
    {
      path: "/UserLogin",
      component: UserLogin,
    },
    {
      path: "/UserPage",
      component: UserPage,
    },
    {
      path: "/SearchMovie",
      component: SearchMovie,
    },
    {
      path: "/SearchCinema",
      component: SearchCinema,
    },
    {
      path: "/SearchAll",
      component: SearchAll,
    },
    {
      path: "/BuyCinema",
      component: BuyCinema,
    },
    {
      path: "/CinemaPage",
      component: CinemaPage,
    },
    {
      path: "/CinemaDetail",
      component: CinemaDetail,
    },
    {
      path: "/ForAdmin",
      component: ForAdmin,
      children: [
        {
          path: "/ForAdmin/AdminAddfilm",
          component: AdminAddfilm,
        },
        {
          path: "/ForAdmin/AdminAdduser",
          component: AdminAdduser,
        },
      ],
    },
  ],
  scrollBehavior() {
    // 始终滚动到顶部
    return { x: 0, y: 0 };
  },
});
