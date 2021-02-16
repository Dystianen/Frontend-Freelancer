<template>
    <div class="container">
        <b-breadcrumb class="mdi mdi-home-outline p-3 mb-2 bg-transparent text-dark" :items="breadcrumb" style="border-radius:1rem"></b-breadcrumb>

        <h2 class="f-ungu"><b>Pasang Jasa Baru</b></h2>
        <p style="font-family:'Times New Roman', Times, serif; font-size:19px;">Buat Jasa agar client dapat menemukan keahlianmu</p><br/>

        <form v-on:submit="addPost">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="" style="font-size:15px;"><b>Judul Jasa<span style="color:red"> *</span></b></label>
                    <p class="text-gray">Contoh: Terima Jasa Pembuatan Website Company Profile</p>
                    <input type="text" class="form-control" v-model="name" required>
                </div>
            </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
                <label for="" style="font-size:15px;"><b>Deskripsi Jasa<span style="color:red"> *</span></b></label>
                <p class="text-gray">Tuliskan deskripsi singkat tentang jasa yang kamu jual</p>
                <textarea class="form-control" v-model="descriptions" rows="5" style="height:100px;" required></textarea>
            </div>
            </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
                <label for="" style="font-size:15px;"><b>Harga Mulai<span style="color:red"> *</span></b></label>
                <p class="text-gray">Masukkan nominal perkiraan biaya untuk jasamu</p>
                <table width="400">
                    <tr>
                        <td class="text-center"><b>Rp</b></td>
                        <td colspan="1"><input type="number" class="form-control" v-model="minimumprice" min="0" required></td>
                    </tr>
                </table>
            </div>
          </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="" style="font-size:15px;"><b>Label Project
                       <span class="text-gray">(Opsional)</span><span style="color:red"> *</span></b></label>
                    <p class="text-gray">Sertakan label untuk memudahkan client menemukan project ini</p>
                    <div id="labelProject" class="form-control" v-html="selectedLabel" style="display: inline-table"></div><br>
                    <p class="text-gray">Saran label   
                      <button type="button" class="btn btn-sm btn-dark" @click="addLabel('Company Profile')">Company Profile</button>
                      <button type="button" class="btn btn-sm btn-dark" @click="addLabel('Website Builder')">Website Builder</button> 
                      <button type="button" class="btn btn-sm btn-dark" @click="addLabel('Wordpress')">Wordpress</button>
                    </p>
                </div>
            </div>
        </div>
        <hr><br>
        <div>
          <b-button class="btn btn-warning text-white" v-on:click="addPost">PASANG JASA</b-button>
        </div>
        </form>
    
        <b-modal
          id="modal_create"
          border-variant="light"
          hide-header
          hide-footer>

          <b-container>
            <h5 class="modal-title">Jasa Berhasil Dipasang</h5>
              <div class="card" style="float:center">  
                <div class="card-body col-sm-12">
                  <h5 class="text-warning">{{ name }}</h5>
                  <p>{{ descriptions }}</p>
                  <div class="row">
                    <div class="col-sm-7">
                      <p>Harga Mulai</p>
                      <h4 class="text-gray" style="font-size:18px;">{{ minimumprice }}</h4>
                    </div>
                    <div class="col-sm-3 float-right">
                      <a href="#" class="btn btn-warning text-white" style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight:bold;">LIHAT JASA</a>
                    </div>
                  </div>
                </div>
              </div><br/>
              <div class="share">
                <div class="share-header">
                  <p>Bagikan tautan jasa:</p>
                </div>
                <div class="share-body">
                  <a href="#" class="btn btn-icon btn-primary"><i class="fab fa-facebook-f"></i></a> <a href="#" class="btn btn-icon btn-info"><i class="fab fa-twitter"></i></a>
                  <a href="#" class="btn btn-icon btn-primary"><i class="fab fa-linkedin-in"></i></a> <a href="#" class="btn btn-icon btn-dark"><i class="fas fa-paperclip"></i></a>
                </div><br/>
                <div class="share-footer">
                  <a href="#" class="btn btn-outline-secondary text-black" style="font-weight:bold">SELESAI</a>                     
                </div>
              </div>
          </b-container>
        
          <template v-slot:modal-footer>

          </template>
        </b-modal>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        name : "",
        descriptions : "",
        minimumprice : "",
        saranLabel: "", //ke API
        selectedLabel: "",
        post : [],
        breadcrumb: [
          {
            text: 'Dashboard',
            to: { name: 'dashboard'},
          },
          {
            text: 'Portal Freelancer',
            to: { name: 'portal_freelancer'},
          },
          {
            text: 'Jasaku',
            to: { name: 'jasaku'},
          },
          {
            text: 'Dashboard',
            to: { name: 'dashboard'},
          },
          {
            text: 'Pasang Jasa Baru',
            to: { name: 'pasang_jasa_baru'},
            active: true
          },
        ]
      }
    },
    methods: {
      addPost : function(){
        let uri = 'services';
        let form = new FormData();
        form.append("id", null);
        form.append("userid", 1); //harus di ubah ketika login sudah jadi
        form.append("name", this.name);
        form.append("descriptions", this.descriptions);
        form.append("minimumprice", this.minimumprice);
        form.append("selectLabel", this.saranLabel);
        axios.post(uri, form)
          .then((response) => {
            if(response.data.status == 1){
              this.$bvModal.show("modal_create");
            }
          });
      },
      addLabel(val){
          var labels = this.saranLabel
          labels = labels.split(',')
          //this.selectedLabel = ''
          var cek = 0
          for (let i = 0; i < labels.length; i++) {
              if(labels[i] === val){
                cek += 1
              }
          }
          if(cek == 0){
            this.saranLabel = this.saranLabel + val + ','
            this.selectedLabel += '<button type="button" class="btn btn-sm btn-dark">'
                                + val +
                              '</button>&nbsp;';
          } else {
            return val.replace(/<\/?[^>]+>/ig, " "); 
          }
       return val
      },
    }
  }
</script>

<style>
    h2{
      font-family: 'Times New Roman';
      color: #540352;
    }

    .form-control{
      padding: 20px;
      font-size: 15px;
      width: 100%;
      height: 30px;
      border: 1px solid grey;
      border-radius: 10px;
    }

    p{
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
    }

    label{
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 20px;
    }

    .text-gray{
      font-size: 13px;
    }
    
    .modal-content{
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      padding: 10px 26px;
    }

    .modal-header{
      justify-content: center;
    }

    .modal-title{
      margin-bottom: 0;
      line-height: 2;
      color: #540352;
      font-family: 'Times New Roman', Times, serif;
      font-weight: bold;
      font-size: 25px;
      text-align: center;
    }

    .card-body h5{
      font-weight:bold; 
      line-height:1.3; 
      font-family:arial;
      word-spacing: 1px;
    }

    .card-body p{
      font-family: 'Times New Roman', Times, serif;
      font-size: 16px;
      line-height: 1.4;
    }

    .card-body .row{
      font-weight: bold;
      font-family: 'Times New Roman', Times, serif;
    }

    .share{
      position: relative;
      text-align: center;
    }

    .share-header p{
      font-size: 16px;
      font-family: 'Times New Roman', Times, serif;
      word-spacing: 1.5px;
    }

    .share-body .btn{
      margin: 5px 8px 10px 5px;
      padding: 8px 10px;
      top: 50px;
    }
</style>