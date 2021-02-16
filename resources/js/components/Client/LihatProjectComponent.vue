<template>
    <div class="">
        <div class="main-panel">
            <div class="container">
                <b-breadcrumb class="mdi mdi-home-outline menu-icon" :items="breadcrumb"></b-breadcrumb>
            </div>
        </div>
        <div class="content-wrapper" v-for="projects in project" v-bind:key="projects.id">
            <div class="row">
                <div class="col-md-10 col-lg-10">
                    <h3>{{ projects.projectname }}</h3>
                    <h6 class="text-muted">Dipasang Tanggal 17 Juli 2019 Oleh <span class="text-warning">Nama Freelancer</span></h6>
                </div>
                <div class="float-right col-md-2 col-lg-2">
                    <h6 class="text-muted float-right">Anggaran (budget)</h6><br>
                    <h4 class="float-right pl-5">Rp {{ projects.budget }}</h4>
                </div>
            </div><br><br>
            <div class="card badge-outline-dark">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-8 col-lg-8">
                            <h6>Deskripsi</h6>
                            <p>{{ projects.descriptions }}</p>
                            <div class="btn btn-sm btn-icon-text badge-outline-dark">
                                <b>SELENGKAPNYA</b>
                            </div>
                            <div class="">
                                <br><b>Label Project</b>
                                <b-table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="btn btn-xs bg-dark text-white">
                                                    company profile
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </b-table>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-4">
                            <div class="row">
                                <div class="btn disabled btn-sm btn-icon-text bg-secondary">
                                    <span class="mdi mdi-cart-outline"></span>
                                    <b>0 PENAWARAN MASUK</b>
                                </div>
                                <div class="col-sm-1">
                                    <div class="">
                                        <button class="btn btn-sm btn-icon-text bg-primary" v-b-modal.modal_project pill>
                                            <b>PASANG PENAWARAN</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card mt-2">
                                <div class="card-body bg-white">
                                    <h5>
                                        Freelancer Terpilih
                                    </h5>
                                    <div class="row">
                                        <div class="col-sm-2">
                                            <img class="img-sm card-img rounded-circle" src="../../../../public/avatar.png" alt="">
                                        </div>
                                        <div class="col-sm-8 mt-1">
                                            Nama Freelancer <br> <small class="text-muted">With faded secondary text</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <b-modal
                id="modal_project"
                hide-header
                hide-footer>

            <b-container>
                <form @submit.prevent="penawaran" v-for="projects in project" v-bind:key="projects.id">
                    <h5 class="modal-title" id="ModalLabel">Pasang Penawaran</h5>                    
                    <div class="card-body">
                        <div class="description-1">
                            <h6><b>Project</b></h6>
                            {{ projects.projectname }}
                        </div><br/>
                        <div class="description-2">
                            <h6><b>Anggaran (Budget)</b></h6>
                            {{ projects.anggaran }}
                        </div>                         
                    </div>
                    <div class="card-footer">
                        <div class="form-group">
                            <label for="" style="font-size:15px;"><b>Biaya yang Ditawarkan<span style="color:red"> *</span></b></label>
                            <p class="text-gray" style="font-size:11px">Berikan harga pengerjaan project yang sesuai dengan kebutuhan dan budget klien</p>
                            <table width="328">
                                <tr>
                                    <td class="text-center"><b>Rp</b></td>
                                    <td colspan="1"><input type="number" class="form-control" v-model="bidvalue" min="0" required></td>
                                </tr>
                            </table>
                        </div>
                        <div class="form-group">
                            <label for="" style="font-size:15px;"><b>Penawaran<span style="color:red"> *</span></b></label>
                            <p class="text-gray" style="font-size:11px">Berikan penawaran terbaik Anda, sehingga klien memilih menyewa jasa Anda untuk projectnya</p>
                            <textarea class="form-control" v-model="description" rows="5" style="height:100px;" required></textarea>
                        </div>
                        <div class="form-group">
                            <b-button class="btn btn-warning text-white" v-on:click="penawaran" type="submit">
                                KIRIM PENAWARAN
                            </b-button>
                        </div>
                    </div>
                </form>
            </b-container>

            <template v-slot:modal-footer>

            </template>
            </b-modal>
            
            <b-modal
            id="modal_projects"
            hide-header
            hide-footer>

            <b-container class="col-lg-12">
                <h3 class="text-lg-center" style="color: #540352;">Penawaran Berhasil Dikirim</h3><br/>
                <p class="text-sm-center" style="font-size:14px">Pesan penawaran Anda berhasil dikirim. Tunggu balasan dari klien, sampai klien merekrut salah satu Freelancer</p><br/>
            
                <div class="row">
                    <div class="col-sm-4">
                        <b-button @click="closeProject" class="btn btn-light text-black">
                            SELESAI
                        </b-button>
                    </div>
                    <div class="col-sm-4">
                        <b-button class="btn btn-warning text-white">
                            LIHAT PESAN
                        </b-button>
                    </div>
                </div>      
        
            </b-container>

            <template v-slot:modal-footer>
            </template>
            </b-modal>
        
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
        return {
          project: [],
          description: "",
          bidvalue: "",
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
                  text: 'Project Klien',
                  href: '#'
              },
              {
                  text: 'Detail Project',
                  active: true
              }
              ],
          }
        },
        methods: {
            penawaran(){
            let uri = `req/${this.$route.params.id}`;
            let form = new FormData();
            form.append("bidvalue", this.bidvalue);
            form.append("description", this.description);
            this.axios.post(uri, form).then((response) => {
            this.$bvModal.hide("modal_project");
            this.$bvModal.show("modal_projects");
            // this.$router.push({name: 'post'});
            });
            },
            closeProject(){
                this.$bvModal.hide("modal_projects");
            },
            getData(){
            let uri = `project/${this.$route.params.id}`;
            this.axios.get(uri).then((response) => {
              this.project = response.data.project;
            });
        },
        },
        created() {
          let uri = `project/${this.$route.params.id}`;
          this.axios.get(uri).then((response) => {
              this.project = response.data.project;
          });
        },
    }
</script>
