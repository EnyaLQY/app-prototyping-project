<script setup>
defineProps({
    item: {
        type:Object
    }
//   title: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   img: {
//     type: String,
//     required: true
//   }
})
</script>

<script>
export default {
  data() {
    return {
      color: "",
    }
  }

}
</script>

<template>
<div>
  <b-card id = "infocard" no-body class="overflow-hidden" style="max-width: 540px;" >
    <b-row no-gutters>
      <b-col cols="4">
        <b-card-img :src="item.img" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col cols="8">
        <b-card-body>
          <b-card-title style="font-size: 16px; color:#006699" >
            {{ item.title }}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
              <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
            </svg>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg> -->
          </b-card-title>
          <b-card-text style="font-size: 12px">{{ item.description }}</b-card-text>
          <a :href="item.link" class="stretched-link" target="_blank"></a>
        </b-card-body>

      </b-col>
    </b-row>
  </b-card>
</div>
</template>

<style>

#infocard svg{
  margin-bottom:5px;
}

@media (min-width: 576px) {
  #infocard {
    min-height:300px;
  }
}

@media (min-width: 768px) {
  #infocard {
    min-height:350px;
  }
}

@media (min-width: 992px) {
  #infocard {
    min-height:250px;
  }
}

</style>
