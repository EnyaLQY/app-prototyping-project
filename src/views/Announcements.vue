<script setup>
</script>

<!-- <script src="https://kit.fontawesome.com/75436a9dca.js" crossorigin="anonymous"></script> -->

<template>
  <b-container fluid style="margin-bottom: 10rem;">
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1" v-for="(announ, key) in announcements" :key="key">
        <b-card-header id="headline" header-tag="header" class="p-1 d-flex justify-content-between" role="tab">
          <button class="btn" v-b-toggle="key">
            <svg v-if="announ.visible" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>

            <svg v-else xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>

            <img v-if= "announ.type == 'info'" src="/src/assets/info.png" style="width:20px;height:20px;margin:0 10px 5px 5px" alt="">
            <img v-if= "announ.type == 'job'" src="/src/assets/job.png" style="width:20px;height:20px;margin:0 10px 5px 5px" alt="">
            <img v-if= "announ.type == 'social'" src="/src/assets/network.png" style="width:20px;height:20px;margin:0 10px 5px 5px" alt="">
            <!-- <b-button block class="btn btn-link" style="background-color:#B31B1B; color: white;">{{ announ.title }}</b-button> -->
            <h5>{{ announ.title }}</h5>
          </button>
          <div id="date" class="pr-2">{{ announ.date }}</div>
        </b-card-header>
        <b-collapse :id="key" :visible="announ.visible" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ announ.content }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

    </div>
  </b-container>
</template>

<style>

/* #headline .bi {
  transform: rotate(0deg);
}

#headline .collapsed .bi {
  transform: rotate(90deg);
} */

/* .collapsed > .when-opened,
    :not(.collapsed) > .when-closed {
        display: none;
    } */

#headline .btn{
  text-align: left;
  display: inline-flex;
  align-items: center;
}

#headline h5{
  font-size: 16px;
}



@media (max-width: 996px) {
  #headline{
    flex-direction: row;
    align-items: center;
  }
}

@media (max-width: 576px) {
  #headline{
    flex-direction: column;
    align-items: start;
  }
  #date{
    margin-left: 40px;
  }
}

</style>
