<template>
  <div>
    <SeatTab :cinema="cinema" :movie="movie" :schedule="schedule"></SeatTab>
    <SelectSeat></SelectSeat>
  </div>
</template>

<script>
import SelectSeat from "@/components/UserControl/SelectSeat.vue";
import SeatTab from "@/components/UserControl/SeatTab.vue";
import axios from "@/utils/request";
export default {
  name: "ChoseSeat",
  components: { SelectSeat, SeatTab },
  mounted() {
    this.getCinema(this.$route.query.cinema_id);
    this.getMovie(this.$route.query.movie_id);
    this.getSchedule(this.$route.query.schedule_id);
  },
  data() {
    return {
      cinema: "",
      movie: {},
      schedule: {},
    };
  },
  methods: {
    getCinema(id) {
      axios.get(`/api/getCurrentCinemaDetail?cinemaId=${id}`).then((res) => {
        this.cinema = res.data.data.cinema_name;
      });
    },
    getMovie(id) {
      axios.get(`/api/getMovieDetail?movieId=${id}`).then((res) => {
        this.movie = res.data.data[0];
      });
    },
    getSchedule(id) {
      axios.get(`/api/getScheduleById?scheduleId=${id}`).then((res) => {
        this.schedule = res.data.data;
      });
    },
  },
};
</script>

<style></style>
