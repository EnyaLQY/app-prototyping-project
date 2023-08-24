<script setup>
import InfoCard from '@/components/InfoCard.vue'
</script>

<template>

<!-- <b-row align-h="center" style="margin: 20px 0 20px 0;">
  <b-col class="col-md-6 col-8">
    <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords">
  </b-col>
  <b-col class="col-md-2 col-4">
    <button class="btn btn-lg w-100" type="submit" style="background-color:#006699; color: white;">Search</button>
  </b-col>
</b-row> -->

<b-card no-body style="margin-bottom: 10rem;">
    <b-tabs card>
      <b-tab title="Research" active>
        <!-- <b-card-text>Tab contents 1</b-card-text> -->
        <b-row>
          <!-- {{ this.research[key].title}} -->
          <b-col id="card" class="col-sm-6 col-md-4 col-12" v-for="res in research">
            <InfoCard :item="res" />
          </b-col>
        </b-row>
      </b-tab>
      <b-tab title="Labs">
        <!-- <b-card-text>Tab contents 2</b-card-text> -->
        <b-row>
          <!-- {{ this.research[key].title}} -->
          <b-col id="card" class="col-sm-6 col-md-4 col-12" v-for="lab in labs">
            <InfoCard :item="lab" />
          </b-col>
        </b-row>
      </b-tab>
      <b-tab title="People">
        <!-- <b-card-text>Tab contents 2</b-card-text> -->
        <b-row>
          <!-- {{ this.research[key].title}} -->
          <b-col id="card" class="col-sm-6 col-12" v-for="ppl in people">
            <InfoCard :item="ppl" />
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </b-card>

</template>

<style>
.card{
  margin-bottom: 10px;
}
</style>
