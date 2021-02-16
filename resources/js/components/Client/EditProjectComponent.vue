<template>
    <div class="">
      <div class="">
        <div class="container">
           <b-breadcrumb class="mdi mdi-home-outline" :items="breadcrumb"></b-breadcrumb>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="text-bold">
          <h3 class="" style="color:purple;"><b>Edit Project {{ name }}</b></h3>
          <p class="text-muted" style="font-family:'Times New Roman', Times, serif; font-size:19px;">
            Edit Project Jika Ada Perubahan Tentang Project Anda</p><br/>
        </div>

        <form v-on:submit="edit">
          <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="" style="font-size:15px;"><b>Judul Project<span style="color:red"> *</span></b></label>
                    <p class="text-muted">Contoh: Butuh Dibuatkan Website Company Profile</p>
                    <input type="text" class="form-control" v-model="projectname" required>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="" style="font-size:15px;"><b>Deskripsi Project<span style="color:red"> *</span></b></label>
                    <p class="text-muted">Tuliskan Instruksi Singkat Tentang Kebutuhan Project Ini</p>
                    <textarea class="form-control" v-model="descriptions" style="height:100px;" rows="4"></textarea>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="" style="font-size:15px;"><b>Anggaran (Budget)<span style="color:red"> *</span></b></label>
                    <p class="text-muted">Masukkan Nominal Biaya yang Kamu Punya untuk Project Ini</p>
                    <table width="400">
                      <tr class="col-sm-4">
                          <td class="text-center form-control" colspan="1"><b>Rp</b></td>
                          <td colspan="1"><input type="number" class="form-control" v-model="budget" min="0" required></td>
                      </tr>
                    </table>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="" style="font-size:15px;"><b>Type Project<span style="color:red"> *</span></b></label>
                    <p class="text-muted"></p>
                    <select class="form-control" v-model="type">
                      <option value="private">Private</option>
                      <option value="public">Public</option>
                    </select>
                </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="" style="font-size:15px;"><b>Label Jasa <span class="text-muted">(Opsional)</span></b></label>
                    <p class="text-muted">Sertakan label untuk memudahkan freelancer menemukan project ini</p>
                    <input type="text" class="form-control" v-model="label"><br/>
                    <button type="button" class="btn btn-sm btn-dark" @click="addLabel('Company Profile')">Company Profile</button>
                    <button type="button" class="btn btn-sm btn-dark" @click="addLabel('Website Builder')">Website Builder</button>
                    <button type="button" class="btn btn-sm btn-dark" @click="addLabel('Wordpress')">Wordpress</button>
                </div>
            </div>
        </div>
        <hr><br>
            <div>
              <b-button class="btn btn-warning text-white" v-on:click="edit">EDIT PROJECT</b-button>
            </div>
        </form>
      </div>

      <b-toast id="message" title="Message">
        <strong class="text-success">{{ message }}</strong>
      </b-toast>

      <b-modal
        id="modal_project"
        hide-header
        hide-footer>

        <b-container class="col-lg-12" fluid>
          <h3 class="text-lg-center" style="color: #540352;">Project Berhasil Dipasang</h3>
          <div class="modal-body">
            <div class="card">
              <div class="card-body">
                <h6 style="color: #ff8c00;">{{ projectname }}</h6>
                <p>{{ descriptions }}</p>
                <br>
                <div class="row">
                  <div class="col-md-6">
                    <h6>Anggaran (budget)</h6>
                    <h6 class="text-muted">Rp. {{ budget }}</h6>
                  </div>
                  <div class="col-md-6">
                    <b-button style="background-color: #ff8c00;" class="btn text-white">
                      LIHAT PROJECT
                    </b-button>
                  </div>
                </div>
              </div>
            </div><br>
            <div class="modal-body text-center text-muted">
              <h6>Bagikan Tautan Project:</h6><br>
              <div class="">
                <a href="#" style="background-color: blue;" class="btn btn-icon"><span class="mdi mdi-facebook-box icon-lg"></span></a> <a href="#" style="background-color: #2cd2de;" class="btn btn-icon"><span class="mdi mdi-twitter icon-lg"></span></a>
                <a href="#" class="btn btn-icon btn-primary"><span class="mdi mdi-linkedin icon-lg"></span></a> <a href="#" class="btn btn-icon btn-dark"><span class="mdi mdi-paperclip icon-lg"></span></a>
              </div><br/>
              <a href="#" class="btn btn-outline-secondary btn-lg" style="font-color: black" v-on:click="close">SELESAI</a>
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
          projectname : "",
          descriptions : "",
          budget : "",
          type : "",
          status: "",
          selectLabel: "",
          label: "",
          project : [],
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
        let uri = `project/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
          this.projectname = response.data.project[0].projectname;
          this.descriptions = response.data.project[0].descriptions;
          this.budget = response.data.project[0].budget;
          this.status = response.data.project[0].status;
          this.type = response.data.project[0].type;
        });
      },
      methods: {
        close : function(){
          this.$bvModal.hide("modal_project");
        },
        edit : function(){
          let uri = `project/${this.$route.params.id}`;
          // let form = new FormData();
          // form.append("projectname", this.projectname);
          // form.append("descriptions", this.descriptions);
          // form.append("budget", this.budget);
          // form.append("type", this.type);
          // form.append("status", this.status);
          let form = {
            projectname : this.projectname,
            descriptions : this.descriptions,
            budget : this.budget,
            type : this.type,
            status : this.status
          }
          axios.put(uri, form)
            .then((response) => {
              if(response.data.status == 1){
                this.$bvModal.show("modal_project");
              }
            });
        },
      },
    }
</script>
