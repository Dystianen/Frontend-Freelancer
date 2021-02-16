<template>
  <div class="container">
    <h1 style="color:purple;">Jasaku</h1>
    <p>Ringkasan jasa yang telah kamu pasang</p>
    <br>
        
    <div class="row">
      <table width="400">
        <tr>
          <td class="text-center table-bordered text-muted"><span class="fa fa-search"></span></td>
          <td><input placeholder="Cari Jasa" class="form-control"></td>
        </tr>
      </table>
      <div class="col-md">
        <button type="submit" class="btn btn-outline-light text-dark">selesai</button>
      </div> 
      <div class="col-md-2">
        <router-link :to="{ name: 'createJasa' }" class="btn btn-warning text-white">Jasa Baru</router-link>
      </div>
    </div>
    <br />

       
    <div class="table-responsive" >
      <table class="table table-hover" style="border: 1px solid #e9ecef;">
        <tbody>
          <tr v-for="service in services" :key="service.id">
            <td>
              <b>{{ service.name }}</b>
              <br><br>
              <small class="text-muted">dipasang {{service.created_at}} oleh <b class="text-warning">Nama Freelancer</b></small>
            </td>
            <td>
              <small class="text-muted">Order Selesai</small><br><br>
              <b>9x</b>
            </td>
            <td>
              <small class="text-muted">Harga Mulai</small><br><br>
              <b>Rp {{ service.minimumprice }}</b>
            </td>
            <td>
                <b-dropdown id="dropdown-dropright" dropright text="setting" variant="primary" class="m-4 sm-3">
                  <b-dropdown-item class="sm-1" href="#"><router-link :to="{name: 'edit', params: { id: service.id }}">Edit</router-link></b-dropdown-item>
                  <b-dropdown-item class="sm-1" href="#"><router-link :to="{name: 'detailJasa', params: { id: service.id }}">Detail Jasa</router-link></b-dropdown-item>
                  <b-dropdown-item class="sm-1" @click.prevent="deletePost(service.id)" href="#">Delete</b-dropdown-item>
                </b-dropdown>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <b-pagination
      v-model="currentPage"
      :per-page="perPage"
      :total-rows="rows"
      align="center"
      v-on:input="pagination">
    </b-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        services: [],
        currentPage: 1,
        rows: 0,
        perPage: 10,
        breadcrumb: [
            {
              text:'Beranda Komunitas',
              to: { name: 'home'},
            },
            {
              text:'Projects',
              to: { name: 'posts'},
            },
            {
              text:'Jasa Freelancer',
              to: { name: 'services'},
            },
            {
              text:'Library',
              active: true
            },
          ]
      }
    },
    methods:{
      deletePost(id) {
        let uri = `services/${id}`;
        let offset = (this.currentPage - 1) * this.perPage;
        this.$swal({
            title: 'Are You Sure?',
            text: 'Apakah anda yakin ingin menghapus jasa ini?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete it!',
            cancelButtonText: 'No, Keep it!',
            showCloseButton: true,
            showLoaderOnConfirm: true
          }).then((result) => {
          //if (confirm("Apakah anda yakin ingin menghapus data ini?")) {
          //this.$bvToast.show("loadingToast");
            if(result.value) {
              this.axios.delete(uri)
              .then(response => {
                this.posts.splice(this.posts.indexOf(id), 1);
                this.message = response.data.message;
                this.created();
                if (response.status == 1) {
                  //this.$bvToast.hide("loadingToast");
                  //this.$bvToast.show("message");
                  this.$swal(this.message,'Jasa Anda telah berhasil dihapus','success');
                  this.created();
                } else {
                  this.$swal(this.message,'Jasa Anda gagal dihapus','error');
                  this.created();
                  //window.location = "/delete";
                }
              })
              .catch(error => {
                console.log(error);
              })
            } else {
              //this.$swal('Cancelled', 'Your file is still intact', 'info')
            }
          })
          //}
        },
      created() {
      let uri = 'services';
      this.axios.get(uri).then(response => {
        this.services = response.data.services;
      });
      },
    },
    mounted(){
      this.created();
    }
  }
</script>
