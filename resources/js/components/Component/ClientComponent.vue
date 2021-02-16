<template>
    <div class="container">
        <div class="content-wrapper">
            <div class="text-center col-md-12">
                <h2>
                    <span style="color: #540352;">Kamu Telah Siap Menggunakan Jasa Freelancer</span>
                </h2><br>
                <h6 class="text-muted">Kamu bisa mulai dari pilihan bawah ini. Pilih sesuai dengan kebutuhanmu</h6>
            </div><br>
            <div class="row">
                <div class="col-md-6 col-lg-6">
                    <div class="float-right col-md-8 col-lg-8">
                        <div class="card bg-gradient-dark text-white text-center card-shadow-dark">
                            <div class="card-body">
                                <b-card-img class="img-lg" src="../../images/jagoanhosting.png"></b-card-img><br><br>
                                <p class="card-title float-center"><b>Pasang Project Baru</b></p>
                                <p>Pasang kebutuhan projectmu agar <br>
                                ditemukan dan dapat dikerjakan oleh <br>
                                Freelancer</p>
                                <b-button class="btn btn-sm btn-warning">
                                <router-link class="text-white" :to="{name: 'buatProject'}">
                                PASANG PROJECT BARU
                                </router-link>
                                </b-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="float-left col-md-8 col-lg-8">
                        <div class="card bg-gradient-dark text-white text-center card-shadow-dark">
                            <div class="card-body">
                                <b-card-img class="img-lg" src="../../images/jagoanhosting.png"></b-card-img><br><br>
                                <p class="card-title float-center"><b>Cari Jasa Freelancer</b></p>
                                <p>Temukan Jasa Freelancer yang paling <br>
                                cocok dengan kualifikasi project yang <br>
                                kamu butuhkan</p>
                                <b-button class="btn btn-sm btn-warning">
                                <router-link class="text-white" :to="{name: 'services'}">
                                CARI JASA FREELANCER
                                </router-link>
                                </b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
