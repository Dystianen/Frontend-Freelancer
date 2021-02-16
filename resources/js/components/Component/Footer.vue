<template>
 <div class=" page-body-wrapper">
    <div class="content-wrapper">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <footer class="footer">
      <div class="text-center w-100 clearfix">
        <span class="text-muted d-block d-sm-inline-block">Berbagi Project © 2018 JagoanHosting.com</span>
      </div>
    </footer>
  </div>
</template>