<template>
    <div class="">
      <div class="">
        <div class="container">
           <b-breadcrumb class="mdi mdi-home-outline" :items="breadcrumb"></b-breadcrumb>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="text-bold">
          <h3 class="" style="color:purple;"><b>Edit Jasa {{ name }}</b></h3>
          <p class="text-muted" style="font-family:'Times New Roman', Times, serif; font-size:19px;">
            Edit Jasa Jika Ada Perubahan Tentang Jasa Anda</p><br/>
        </div>

        <form v-on:submit="edit">
          <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="" style="font-size:15px;"><b>Judul Jasa<span style="color:red"> *</span></b></label>
                    <p class="text-muted">Contoh: Terima Jasa Pembuatan Website Company Profile</p>
                    <input type="text" class="form-control" v-model="name" required>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="" style="font-size:15px;"><b>Deskripsi Jasa<span style="color:red"> *</span></b></label>
                    <p class="text-muted">Tuliskan deskripsi singkat tentang jasa yang kamu jual</p>
                    <textarea class="form-control" v-model="descriptions" style="height:100px;" rows="4"></textarea>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="" style="font-size:15px;"><b>Harga Mulai<span style="color:red"> *</span></b></label>
                    <p class="text-muted">Masukkan perkiraan biaya untuk jasamu</p>
                    <table width="400">
                      <tr class="col-sm-4">
                          <td class="text-center form-control" colspan="1"><b>Rp</b></td>
                          <td colspan="1"><input type="number" class="form-control" v-model="minimumprice" min="0" required></td>
                      </tr>
                    </table>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="" style="font-size:15px;"><b>Status Jasa<span style="color:red"> *</span></b></label>
                    <p class="text-muted">Status Jasa Active / Non-Active</p>
                    <select class="form-control" v-model="status">
                      <option value="active">Active</option>
                      <option value="nonactive">Non-Active</option>
                    </select>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="" style="font-size:15px;"><b>Label Jasa <span class="text-muted">(Opsional)</span></b></label>
                    <p class="text-muted">Sertakan label untuk memudahkan client menemukan project ini</p>
                    <input type="text" class="form-control" v-model="label"><br/>
                    <p class="text-muted">Saran label   <button class="btn btn-sm btn-dark">Company Profile</button> <button class="btn btn-sm btn-dark">Website Builder</button> <button class="btn btn-sm btn-dark">Wordpress</button></p>
                </div>
            </div>
        </div>
        <hr><br>
            <div>
              <b-button class="btn btn-warning text-white" v-on:click="edit">EDIT JASA</b-button>
            </div>
        </form>
      </div>

      <b-toast id="message" title="Message">
        <strong class="text-success">{{ message }}</strong>
      </b-toast>

      <b-modal
        id="modal_jasa"
        hide-header
        hide-footer>

        <b-container class="col-lg-8" fluid>
          <h3 class="text-lg-center" style="color: #540352;">Jasa Berhasil Diupdate</h3>
          <div class="modal-body">
            <div class="card">
              <div class="card-body">
                <h6 class="text-warning">{{ name }}</h6>
                <p>{{ descriptions }}</p>
                <br>
                <div class="row">
                  <div class="col-md-6">
                    <h6>Harga Mulai</h6>
                    <h6 class="text-muted">Rp. {{ minimumprice }}</h6>
                  </div>
                  <div class="col-md-6">
                    <router-link :to="{name: 'services'}">
                      <b-button class="btn btn-warning text-white">
                        LIHAT JASA
                      </b-button>
                    </router-link>   
                  </div>
                </div>
              </div>
            </div><br>
            <div class="modal-body text-center text-muted">
              <h6>Bagikan Tautan Jasa:</h6><br>
              <div class="">
                <a href="#" class="btn btn-icon btn-primary"><span class="mdi mdi-facebook-box"></span></a> <a href="#" class="btn btn-icon btn-info"><span class="mdi mdi-twitter-box"></span></a>
                <a href="#" class="btn btn-icon btn-primary"><span class="mdi mdi-linkedin-box"></span></a> <a href="#" class="btn btn-icon btn-dark"><span class="mdi mdi-paperclip"></span></a>
              </div><br/>
              <a href="#" style="font-weight:bold">
                <router-link   class="btn btn-outline-secondary text-black">SELESAI</router-link> 
              </a>
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
      data() {
        return {
          message : "",
          name : "",
          descriptions : "",
          minimumprice : "",
          status : "",
          label: "",
          breadcrumb: [
            {
                text: 'Beranda Komunitas',
                to: { name: 'home' }
            },
            {
                text: 'Project',
                href: '#'
            },
            {
                text: 'Jasa Freelancer',
                href: '#'
            },
            {
                text: 'Library',
                active: true
            }
            ],
          }
        },
      created() {
        let uri = `services/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.name = response.data.service[0].name;
            this.descriptions = response.data.service[0].descriptions;
            this.minimumprice = response.data.service[0].minimumprice;
            this.status = response.data.service[0].status;
        });
      },
      methods: {
        edit : function(){
          let uri = `services/${this.$route.params.id}`;
          // let form = new FormData();
          // form.append("name", this.name);
          // form.append("descriptions", this.descriptions);
          // form.append("minimumprice", this.minimumprice);
          // form.append("status", this.status);
          let form = {
            name : this.name,
            descriptions : this.descriptions,
            minimumprice : this.minimumprice,
            status : this.status
          }
          axios.put(uri, form)
            .then((response) => {
              if(response.data.status == 1){
                this.$bvModal.show("modal_jasa");
              }
            });
        },
      },
    }
</script>
