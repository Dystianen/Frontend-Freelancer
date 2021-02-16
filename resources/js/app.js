  require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import VueSweetalert2 from 'vue-sweetalert2'
Vue.use(VueSweetalert2, options);

axios.defaults.baseURL = 'http://103.27.207.31:8000/api'
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};
//import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/dist/sweetalert2.min.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
Vue.use(VueAxios, axios);
import store from './store'

import HomeComponent from './components/Component/HomeComponent.vue';
import FreelancerComponent from './components/Component/FreelancerComponent.vue';
import ClientComponent from './components/Component/ClientComponent.vue';
import CreateJasa from './components/Freelancer/CreateJasa.vue';
import LihatJasaComponent from './components/Freelancer/LihatJasaComponent.vue';
import EditJasa from './components/Freelancer/EditJasa.vue';
import ListJasa from './components/Freelancer/ListJasa.vue';
import NavbarClient from './components/Component/NavbarClient.vue';
import NavbarFreelancer from './components/Component/NavbarFreelancer.vue';
import Footer from './components/Component/Footer.vue';
import ListProject from './components/Client/ListProject.vue';
import ListProjectFreelancer from './components/Freelancer/ListProject.vue';
import LihatProjectComponent from './components/Client/LihatProjectComponent.vue';
import LihatProjectComponentFreelancer from './components/Freelancer/LihatProjectComponent.vue';
import BuatProjectComponent from './components/Client/BuatProjectComponent.vue';
import EditProjectComponent from './components/Client/EditProjectComponent.vue';
import PenawaranMasuk from './components/Client/PenawaranMasuk.vue';
import Login from './components/login.vue';


const routes = [
  //UMUM
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    name: 'home',
    path: '/',
    components: {
      default: HomeComponent,
      header: NavbarClient
    },
    meta: { 
      requiresAuth: true
    }
  },

  //FREELANCER
  {
    name: 'Freelancer',
    path: '/freelancerhome',
    components: {
      default: FreelancerComponent,
      header: NavbarClient,
      footer: Footer,
    }
  },
  {
    name: 'detailJasa',
    path: '/detailJasa/:id',
    components: {
      default: LihatJasaComponent,
      header: NavbarFreelancer,
      footer: Footer,
    }
  },
  {
    name: 'createJasa',
    path: '/create',
    components: {
      default: CreateJasa,
      header: NavbarFreelancer,
      footer: Footer,
    }
  },
  {
    name: 'edit',
    path: '/editservice/:id',
    components: {
      default: EditJasa,
      header: NavbarFreelancer,
      footer: Footer,
    }
  },
  {
    name: 'services',
    path: '/freelancer/service',
    components: {
      default: ListJasa,
      header: NavbarFreelancer,
      footer: Footer,
    }
  },
  {
    name: 'project_freelancer',
    path: '/freelancer/project',
    components: {
      default: ListProjectFreelancer,
      header: NavbarFreelancer,
      footer: Footer,
    }
  },
  {
    name: 'detailProject_freelancer',
    path: '/freelancer/detailProject/:id',
    components: {
      default: LihatProjectComponentFreelancer,
      header: NavbarFreelancer,
      footer: Footer
    }
  },

  //CLIENT
  {
    name: 'Client',
    path: '/client/clientcomponent',
    components: {
      default: ClientComponent,
      header: NavbarClient,
      footer: Footer,
    }
  },
  {
    name: 'posts',
    path: '/client/project',
    components: {
      default: ListProject,
      header: NavbarClient,
      footer: Footer,
    }
  },
  {
    name: 'detailProject',
    path: '/client/detailProject/:id',
    components: {
      default: LihatProjectComponent,
      header: NavbarClient,
      footer: Footer
    }
  },
  {
    name: 'buatProject',
    path: '/client/buatProject',
    components: {
      default: BuatProjectComponent,
      header: NavbarClient,
      footer: Footer
    }
  },
  {
    name: 'editProject',
    path: '/client/editProject/:id',
    components: {
      default: EditProjectComponent,
      header: NavbarClient,
      footer: Footer
    }
  },
  {
    name: 'servicesClient',
    path: '/client/service',
    components: {
      default: ListJasa,
      header: NavbarFreelancer,
      footer: Footer,
    }
  },
  {
    name: 'penawaranMasuk',
    path: '/client/penawaranMasuk',
    components: {
      default: PenawaranMasuk,
      header: NavbarClient,
      footer: Footer
    }
  },
];

const router = new VueRouter({ 
  mode: 'history', 
  base: process.env.BASE_URL,
  routes: routes});

  router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next()
        return
      }
      next('/login') 
    } else {
      next() 
    }
  })
  
const app = new Vue(Vue.util.extend({ 
  router,
  store,
  methods: {
    isAuthenticate : function(){
      if(localStorage.getItem("Authorization")){
      let conf = { headers : {"Authorization" : "Bearer " + localStorage.getItem("Authorization")} };
      this.axios.get("/login/check", conf)
      .then(response => {
      if(response.data.auth == false || response.data.status == 0){
      this.$store.commit('logout')
      } else {
      this.$store.commit('userDetail', response.data.user)
      }
      })
      .catch(error => {
      this.$store.commit('logout')
      });
      } else {
      this.$store.commit('logout')
      }
    },
  },
  mounted(){
    this.isAuthenticate()
  },
  render: h => h(App)
})).$mount('#app');
