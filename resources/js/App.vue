<template>
    <div class="container-scroller">
      <router-view name="header"/>
      <transition name="fade">
        <router-view />
      </transition>
      <router-view name="footer"/>
    </div>
        <!-- <nav class="navbar navbar-expand-lg bg-white navbar-white"> -->
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

<script>

    export default{
    }
</script>