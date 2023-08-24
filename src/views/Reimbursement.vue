<script>
export default{
    data() {
      return {
        percentage: 0,
      }
    },
    methods: {
        uploaded(){
                var intval = setInterval(()=>{
                    if(this.percentage<100){
                        this.percentage+=.1;
                    }
                    else{
                        clearInterval(intval);
                    }
            })
        }
    }
}
</script>
<template>
    <div class="reimbursement">
     <b-card title="Upload Your Files Here" subtitle="Get your reimbursement by uploading receipts and reimbursement from" class="text-center" border-variant="danger">
        <img src="/src/assets/upload.png" class="mb-3">
        <input class="mb-3" type="file" id="myfile" name="myfile">
        <div id="button">
            <b-button variant="primary" @click="uploaded" >Upload</b-button>
        </div>
        </b-card>
     <h5>Status</h5>
     <b-progress class="w-100" height="1.5rem">
        <b-progress-bar v-bind:value="percentage" show-progress/>
    </b-progress>
    </div>
</template>

<style>
.reimbursement{
    margin: 0 20px 0 20px;
}

.reimbursement img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
}
.reimbursement input{
    margin-left: 20%;
}
</style>
