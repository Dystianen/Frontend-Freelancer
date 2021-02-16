<template>
    <div class="">
        <div class="main-panel">
            <div class="container">
                <b-breadcrumb class="mdi mdi-home-outline menu-icon" :items="breadcrumb"></b-breadcrumb>
            </div>
        </div>
        <div class="content-wrapper" v-for="services in service" v-bind:key="services.id">
            <div class="row">
                <div class="col-md-10">
                    <h3>{{ services.name }}</h3>
                    <h6 class="text-muted">Dipasang Tanggal {{ services.created_at }} Oleh <span class="text-warning">Nama Freelancer</span></h6>
                </div>
                <div class="float-right col-md-2">
                  <h6 class="text-muted float-right">Harga Mulai</h6><br>
                  <h4 class="float-right pl-5">Rp {{ services.minimumprice }}</h4>
                </div>
            </div><br><br>
            <div class="card badge-outline-dark">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-8 col-lg-8">
                            <h6>Deskripsi Jasa</h6>
                            <p>{{ services.descriptions }}</p>
                            <div class="btn btn-sm btn-icon-text badge-outline-dark">
                                <b>SELENGKAPNYA</b>
                            </div>
                            <div class="">
                                <br><b>Label Jasa</b>
                                <b-table striped hover :items="selectLabel" :fields="field">
                                </b-table>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-4">
                            <div class="row">
                                <div class="btn disabled btn-sm btn-icon-text bg-secondary">
                                    <span class="mdi mdi-cart-outline"></span>
                                    <b>9X ORDER DISELESAIKAN</b>
                                </div>
                                <div class="col-sm-1">
                                    <div class="">
                                        <button class="btn btn-sm btn-icon-text bg-primary">
                                            <b>Order Jasa</b>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card mt-2">
                                <div class="card-body bg-white">
                                    <h5>
                                        Profil Freelancer
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
    </div>
</template>

<script>
    export default {
        data() {
        return {
          field: [],
          selectLabel: [],
          service: [],
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

        methods: {
          getData() {
            let uri = `services/${this.$route.params.id}`;
            axios.get(uri).then(response => {
                this.service = response.data.service;

            });
          },
        },
        mounted(){
          this.getData();
        }
      }
</script>
