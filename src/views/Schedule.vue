<script>
// import items from '@/components/items.json'
// import meals from '@/components/meals.json'
// import more from '@/components/more.json'

export default {
  // data() {
  //   return {
  //     items: [],
  //     meals:[],
  //     more:[],
  //   }
  // }
  // mounted() {
  //   this.items = items
  //   this.meals = meals
  //   this.more = more
  // }
}
</script>

<template>


<div>
    <RouterLink  style="text-decoration: none; color: inherit;" to="/announcements" >
      <b-row class="announce" align="center">
        <b-col cols="2" class="logo">
          <img src="/logo.svg" alt="logo">
         </b-col>
        <b-col cols="10" offset="1">
          <h3 class="welcome"> To all students admitted to the Cornell Information Science PhD Program,
            <br>
            <br>
          On behalf of Cornell and the IS graduate student community, congratulations! Cornell is an excellent school, home to many enthusiastic researchers with diverse interests. We are excited to host you as you consider Cornell for your graduate studies. </h3>
        </b-col>
    </b-row>
    </RouterLink>
  </div>

  <b-row class="justify-content-evenly" style="margin-bottom: 10rem;">
    <b-col class="col-md-5 col-10" v-for="(item, route) in items">
        <b-card
        id="daily"
        :title="item.day"
        :img-src="item.img"
        img-alt="Image"
        img-top
        >
        <b-card-text>
          {{ item.description }}
        </b-card-text>

        <b-button :to="`/schedule/${route}`" variant="primary">See Detail</b-button>
      </b-card>
    </b-col>
    <b-col class="col-md-5 col-10">
    </b-col>
  </b-row>





  <!-- <main>
    <div class="row">
      <div class="col-sm-6 col-12">
        <b-card class="text-center" border-variant="secondary" header="ITINERARY"
          header-border-variant="secondary" header-text-variant="dark" align="center">
          <div>
            <dl v-for="item in items" :key="item.day">
              <h1 v-if= "item.day" class="days">{{ item.day }}</h1>
              <dt v-if= "item.event1" class="text">{{ item.event1 }}</dt>
              <dt v-if= "item.event2" class="text">{{ item.event2 }}</dt>
              <dt v-if= "item.event3" class="text">{{ item.event3 }}</dt>
              <dt v-if= "item.event4" class="text">{{ item.event4 }}</dt>
              <dt v-if= "item.event5" class="text">{{ item.event5 }}</dt>
            </dl>
          </div>
        </b-card>
      </div>
      <div class="col-sm-6 col-12">
        <div class="column">
          <div>
            <b-card class="text-center" border-variant="secondary" header="MEALS"
              header-border-variant="secondary" header-text-variant="dark" align="center"
              id="meal-card">
              <div>
                <dl v-for="(meal, key) in this.meals">
                  <h1 v-if= "meal.day" class="days">{{ meal.day }}</h1>
                  <dt v-if= "meal.breakfast" class="text">{{ meal.breakfast }}</dt>
                  <dt v-if= "meal.lunch" class="text">{{ meal.lunch }}</dt>
                  <dt v-if= "meal.dinner" class="text">{{ meal.dinner }}</dt>
                </dl>
              </div>
            </b-card>
          </div>

          <div class="col-12">
            <b-card class="text-center" border-variant="secondary" header="MORE"
              header-border-variant="secondary" header-text-variant="dark" align="center"
              id="more-card">
              <div>
                <dl v-for="info in more" :key="info.info1">
                  <dt class="text"><a href="https://www.cornell.edu/visit/" style="color: inherit;">{{ info.info1 }}</a></dt>
                  <dt class="text"><a href="https://gradschool.cornell.edu/admissions/admitted-students/living-in-ithaca/visiting-and-getting-around/" style="color: inherit;">{{ info.info2 }}</a></dt>
                  <dt class="text"><a href="https://gradschool.cornell.edu/admissions/admitted-students/living-in-ithaca/" style="color: inherit;">{{ info.info3 }}</a></dt>
                </dl>
              </div>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </main> -->

</template>


<!-- <script>
export default {
  data() {
    return {
      event_1: this.schedule[this.$route.params.schedule].event1,
      event_2: this.schedule[this.$route.params.schedule].event2,
      event_3: this.schedule[this.$route.params.schedule].event3,

    }
  }
}
</script> -->

<style>
#daily{
  margin-bottom: 3em;
}

#daily title{
  color: #073949;
}

#daily img{
  aspect-ratio: 3/1.8;
  object-fit: cover;
}



.welcome {
  font-size: 1.5em;
  text-align: left;
  /* padding: 1em; */
}

.logo {
  max-width: 100%;
  max-height: 100%;
}
.announce {
  padding: 1em;
  margin: 2em;
  border: 3px solid #B31B1B;
  color: #073949;
  background-color: #b31b1b5f;
  text-decoration: none;
  border-radius: 5px;
  /* width: 75%; */
  justify-items: center;
}

.text-center {
  padding: 0.5em;
  font-weight: bold;
}

.days {
  color: #073949;
}

.text{
  font-weight: normal;
  color: rgb(255, 255, 255);
  background-color: #b31b1bc5;
  border-radius: 25px;
  /* border-color: #B31B1B;
  border-style: solid; */
  margin: 0.75em;
  padding: 2em 1em 2em 1em;
  /* text-align: left; */
}
 /*
.cards{
  padding: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
*/
.announce .row {
  padding: 1em;
}

.column {
  display: flex;
  flex-direction: column;
}

#meal-card {
  margin-bottom: 1em;
}

#more-card {
  margin-top: 1em;
}

@media (max-width: 767.98px) {
  #meal-card {
  margin-top: 2em;
  /* margin-bottom: 0em; */
    }

  #more-card {
  margin-top: 1em;
  margin-bottom: 5em;
  /* padding-bottom: 1.5em; */
  }

  .welcome{
    font-size:16px;
  }

}

/* #itinerary-card {
  flex: 1;
}

#meal-card1 {
  flex: 1;
}

#meal-card2 {
  flex: 1;
  margin-top: 20px;
} */
</style>
