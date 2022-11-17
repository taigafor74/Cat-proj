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
import ConfirmBill from "../pages/ConfirmBill";
import SearchAll from "../pages/SearchAll";
import PayPage from "../pages/PayPage";
import BuyCinema from "../pages/BuyCinema";
import UserLogin from "../components/UserControl/UserLogin";
import MyOrder from "../components/UserControl/MyOrder";
import MyInfo from "../components/UserControl/MyInfo";
import MyMovie from "../components/UserControl/MyMovie";
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
      path: "/ConfirmBill",
      component: ConfirmBill,
    },
    {
      path: "/UserPage",
      component: UserPage,
    },
    {
      path: "/MyInfo",
      component: MyInfo,
    },
    {
      path: "/PayPage",
      component: PayPage,
    },
    {
      path: "/MyOrder",
      component: MyOrder,
    },
    {
      path: "/MyMovie",
      component: MyMovie,
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
