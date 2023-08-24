<template>
    <b-container>
    <b-row>
        <b-col cols="2" class="text-center">
            <b-button to="/" variant="warning">Back</b-button>
        </b-col>
    </b-row>
      <b-row style="margin-bottom: 10rem;">
        <b-col class="col-md-8 offset-md-2 col-12 text-center">
            <div>
            <dl>
              <h1 v-if= "items[date_key].day" class="days">{{ items[date_key].day }}</h1>
              <dt v-if= "items[date_key].event1" class="text">{{ items[date_key].event1 }}</dt>
              <dt v-if= "items[date_key].event2" class="text">{{ items[date_key].event2 }}</dt>
              <dt v-if= "items[date_key].event3" class="text">{{ items[date_key].event3 }}</dt>
              <dt v-if= "items[date_key].event4" class="text">{{ items[date_key].event4 }}</dt>
              <dt v-if= "items[date_key].event5" class="text">{{ items[date_key].event5 }}</dt>
            </dl>
          </div>

        </b-col>
      </b-row>
    </b-container>
  <!--
    <p>testing</p>
    <p>{{ this.fixtures[this.city_key] }}</p> -->

  </template>

  <script>
    import items from '../items.json'
    export default {
      data(){
        return {
          date_key: this.$route.params.date_key,
          items: items
        }
      }
    }
  </script>

  <style>

  </style>
