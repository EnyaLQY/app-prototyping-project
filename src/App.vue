<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>



<template>
  <header class="side">
    <div class="mb-3">
      <div class="weather-bar">
        <nav class="navbar navbar-light bg-light justify-content-between">
          <div class="d-flex align-items-center">
            <h3 class="navbar-brand d-inline-block align-top mr-2" href="#" style="margin:auto;margin-left:10px">Ithaca, NY</h3>
          </div>
          <!-- <img src="../../images/day.svg" class="d-inline-block align-top" alt=""> -->
          <div class="d-flex align-items-center justify-content-between">
            <h4 style="margin:auto;margin-right: 10px;text-align: center;font-size: 2em;">🌤 </h4>
            <h4 style="margin:auto;margin-right: 10px;text-align: center; font-size: 1em;">71°F </h4>
            <h4 style="margin:auto;margin-right: 5px;text-align: center; font-size: 1em;" > Partly Cloudy</h4>
          </div>

        </nav>

      </div>

      <div class="mobile-nav">
        <nav class="navbar navbar-expand navbar-dark bg-dark fixed-bottom">
        <ul class="navbar-nav w-100 justify-content-between">
          <li class="nav-item active">
            <b-nav-item RouterLink to="/" class="text-white text-center w-100">
              <img src="/src/assets/schedule.png" style="width:40px;height:40px;" alt="">
              <h5>Itinerary</h5>
            </b-nav-item>
            <!-- <b-nav-item RouterLink to="/" class="text-white text-center"> 🗓  Schedule</b-nav-item> -->
          </li>
          <li class="nav-item">
            <b-nav-item RouterLink to="/resources" class="text-white text-center w-100">
              <img src="/src/assets/resources.png" style="width:40px;height:40px;" alt="">
              <h5>Resources</h5>
            </b-nav-item>
            <!-- <b-nav-item RouterLink to="/resources" class="text-white text-center"> 👤  Resources</b-nav-item> -->
          </li>
          <li class="nav-item">
            <b-nav-item RouterLink to="/announcements" class="text-white text-center w-100">
              <img src="/src/assets/announcement.png" style="width:40px;height:40px;" alt="">
              <h5>Announcement</h5>
            </b-nav-item>
            <!-- <b-nav-item RouterLink to="/announcements" class="text-white text-center"> 📣  Announcements</b-nav-item> -->
          </li>
          <li class="nav-item">
            <b-nav-item RouterLink to="/reimbursement" class="text-white text-center w-100">
              <img src="/src/assets/reimbursement.png" style="width:40px;height:40px;" alt="">
              <h5>Reimbursement</h5>
            </b-nav-item>
            <!-- <b-nav-item RouterLink to="/reimbursement" class="text-white text-center"> 💵  Reimbursement</b-nav-item> -->
          </li>
        </ul>
      </nav>
      </div>

      <!-- <b-navbar toggleable="lg" type="dark" variant="secondary" class="text-white"> -->

      <!-- <b-button v-b-toggle.my-sidebar>Toggle Sidebar</b-button> -->
      <div class="desktop-nav">
        <b-navbar toggleable="lg" type="light" class="text-white" style="background-color:#B31B1B;">
        <!-- <b-navbar toggleable="lg" class="navbar navbar-expand navbar-dark bg-dark"> -->
        <!-- <b-navbar-brand href="#">Menu</b-navbar-brand> -->
        <b-navbar-brand v-b-toggle.nav-collapse class="text-white">Menu</b-navbar-brand>



        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav class="justify-content-between navbar-dark">
          <b-navbar-nav>
            <!-- <b-nav-item RouterLink to="/">Schedule</b-nav-item>
            <RouterLink to="/">Schedule</RouterLink> -->
            <b-nav-item RouterLink to="/" class="navbar-dark">Schedule</b-nav-item>

            <b-nav-item RouterLink to="/resources" class="navbar-dark">Resources</b-nav-item>

            <b-nav-item RouterLink to="/announcements" class="navbar-dark">Announcements</b-nav-item>

            <b-nav-item RouterLink to="/reimbursement" class="navbar-dark">Reimbursement</b-nav-item>

          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <h4 style="margin:auto;margin-right: 5px;text-align: center">🌤 </h4>
            <h4 style="margin:auto;margin-right: 15px;text-align: center; font-size: 1em;">71°F </h4>
            <h4 style="margin:auto;text-align: center; font-size: 1em;" > Partly Cloudy</h4>
            <!-- <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      </div>
    </div>
  </header>

  <RouterView />
</template>

<style>
.nav-item h5{
  /* margin-top: 0.5rem; */
  font-size: 0.6rem;
  /* text-align: center; */
}

.mobile-nav .nav-item{
  width: 25%; /* Four links of equal widths */
  display: flex;
  justify-content: center;
}

.mobile-nav{
  display: none;
}

.weather-bar{
  display:none
}

@media (max-width: 767.98px) {
    .desktop-nav {
      display: none;
    }
    .mobile-nav {
      display: block;
    }

    .weather-bar {
      display: block;
      /* margin: 0.5em; */
    }
  }
/* @media (max-width: 767.98px) {
  .desktop-nav {
    display: none;
  }

  .mobile-nav {
    display: block;
  }
}

@media (min-width: 768px) {
  .desktop-nav {
    display: block;
  }

  .mobile-nav {
    display: none;
  }
} */
/* .side {
  display: flex;
}

.side .mb-3 {
  flex: 0 0 auto;
  width: 250px;
}

.side .navbar {
  flex: 1 1 auto;
  flex-direction: column;
  height: 100vh;
} */
</style>
