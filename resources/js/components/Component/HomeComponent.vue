<template>
    <div class="container">
        <div class="content-wrapper">
            <div class="row pt-5">
                <div class="col-md-6 col-lg-6 pt-5">
                    <div class="float-right col-md-4 col-lg-4 pt-5">
                      <b-button class="btn btn-lg" style="background-color: purple;">
                        <router-link class="text-white" :to="{name: 'Client'}">
                        AKUN CLIENT
                        </router-link>
                      </b-button>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 pt-5">
                    <div class="float-left col-md-12 col-lg-12 pt-5">
                      <b-button class="btn btn-lg" style="background-color: purple;">
                        <router-link class="text-white" :to="{name: 'Freelancer'}">
                        AKUN FREELANCER
                        </router-link>
                      </b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
