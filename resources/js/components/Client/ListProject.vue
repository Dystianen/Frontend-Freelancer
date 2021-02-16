<template>
  <div>
    <div class="main-panel container">
      <b-breadcrumb class="mdi mdi-home-outline menu-icon" :items="breadcrumb"></b-breadcrumb>
    </div>
    <div class="container">
      <h1 style="color:purple;">Project Klien</h1>
      <p>Cari dan bantu klien selesaikan project mereka</p>
      <br>
      <form @submit.prevent="searching">
        <div class="row">
          <table width="400">
            <tr>
              <td class="text-center text-muted table-bordered"><span class="fa fa-search"></span></td>
              <td><input v-model="search" placeholder="Cari Jasa" class="form-control"></td>
            </tr>
          </table>
          <div class="col-md">
            <button type="submit" class="btn btn-outline-light text-dark">selesai</button>
          </div>
          <div class="col-md-2">
            <router-link :to="{ name: 'buatProject' }" class="btn btn-warning text-white">Project Baru</router-link>
          </div>
        </div><br/>
      </form>
      
      
      <div class="table-responsive" >
        <!-- <div>
          <b-alert class="text-center" variant="danger" show>
            {{ message }}
          </b-alert>
        </div> -->
        <div>
          <b-card no-body class="text-center">
            <div class="bg-danger text-white">
              {{ message }}
            </div>
          </b-card>
        </div>

        <table class="table table-hover" > 
          <tbody>
            <tr style=" border: 1px solid #e9ecef;" v-for="projects in project" :key="projects.id">
              <td>
                <b>{{ projects.projectname }}</b>
                <br><br>
                <small class="text-muted">dipasang {{projects.created_at}} oleh <b class="text-warning">Nama klien</b></small>
              </td>
              <td>
                <small class="text-muted">Status</small><br><br>
                <b>{{ projects.status }}</b>
              </td>
              <td>
                <small class="text-muted">Anggaran (budget)</small><br><br>
                <b>Rp {{ projects.budget }}</b>
              </td>
              <td>
                <small class="text-muted">Penawaran Masuk</small><br><br>
                {{ projects.total_penawaran }}
              </td>
              <td><router-link :to="{name: 'detailProject', params: { id: projects.id }}" class="btn btn-warning text-white">LIHAT PROJECT</router-link></td>
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
  </div>
</template>

<script>
  export default {
      data() {
        return {
          project: [],
          message:"",
          currentPage: 1,
          rows: 0,
          perPage: 10,
          count: "",
          search: "",
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
              text:'Project Klien',
              to: { name: 'posts'},
            },
            {
              text:'Library',
              active: true
            },
          ]
        }
      },
      
    methods: {
      searching() {
        let offset = (this.currentPage - 1) * this.perPage;
        let uri = 'project/search';
        
        let form = new FormData();
        form.append("data", this.search);
        form.append("limit", this.perPage);
        form.append("offset", offset);
        this.axios.post (uri, form).then(response => {
          if(response.data.status == 1){
            this.message = ""
            this.project = response.data.data
            this.rows = response.data.count
          } else{
            this.message = "Data Tidak DItemukan!"
            this.rows = response.data.count
            this.project = []
          }
        });
      },
      
      created() {
      let offset = (this.currentPage - 1) * this.perPage;
      // let uri = 'project/'+this.perPage+"/"+offset;
      let uri = 'project/';
      this.axios.get(uri).then(response => {
        this.project = response.data.projects;
        this.rows = response.data.count;
        });
      },
       
      pagination : function(){
        if(this.search == ""){
          this.created();
        } else {
          this.searching();
        } 
      },
    },
    
    mounted() {
      this.created();
    }
}
</script>

