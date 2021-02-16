<template>
    <div id="nav">
        <div class="horizontal-menu">
          <nav class="navbar top-navbar col-lg-12 col-12 p-0">
            <div class="nav-top flex-grow-1" style="background-color: purple;">
              <div class="container d-flex flex-row align-items-center">
                <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                  <a class="navbar-brand brand-logo" href="index.html"><img src="../../../../public/jagoanhosting.png"></a>
                </div>
                <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end flex-grow-1">
                  <ul class="navbar-nav navbar-nav-right">
                    <li class="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" class="nav-link text-white">
                      <i class="far fa-bell"></i></a></li>
                    <li class="nav-item nav-profile dropdown">
                      <router-link to="/" class="nav-link text-white dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                        <a class="navbar-brand brand-logo" href="index.html" ><img rounded="circle" src="../../../../public/avatar.png" alt=""></a>
                      <span class="text-muted">Account</span>
                      <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                        <a class="dropdown-item">
                          <i class="mdi mdi-logout text-primary"></i>
                          Logout
                        </a>
                      </div>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> 
          </nav>
          <nav class="bottom-navbar">
            <div class="container">
              <ul class="nav page-navigation">
                <li class="nav-item">
                  <a class="nav-link">
                    <router-link to="/" class="nav-link text-dark" href="#">
                    <i class="mdi mdi-view-dashboard-outline menu-icon"></i>
                    <span class="menu-title">Portal Freelancer</span>
                    </router-link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                     <router-link to="/project" class="nav-link text-dark">
                    <i class="mdi mdi-account-settings menu-icon"></i>
                    <span class="menu-title">Project</span>
                    </router-link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <router-link to="/service" class="nav-link text-dark">
                    <i class="mdi mdi-file-document-box-outline menu-icon"></i>
                    <span class="menu-title">Jasaku</span>
                    </router-link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <i class="mdi mdi-codepen menu-icon"></i>
                    <span class="menu-title">akun</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
</template>