<template>
  <div class="col-xs-12 main-content">
    <div class="logincontainer">
      <div class="header-lined">
        <h1>Login <small></small></h1>
      </div>
      <div class="providerLinkingFeedback"></div>
      <div class="row">
        <div class="col-sm-12">
          <form v-on:submit.prevent="Login" method="post" action="login.php" class="login-form" role="form">
            <div class="form-group">
              <label for="inputEmail">Alamat Email</label>
              <input type="email" v-model="email" name="username" class="form-control" id="inputEmail" placeholder="Enter email" autofocus="" required>
            </div>
            <div class="form-group">
              <label for="inputPassword">Password</label>
              <input type="password" v-model="password" name="password" class="form-control" id="inputPassword" placeholder="Password" autocomplete="off" required>
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" name="rememberme"> Remember Me
              </label>      
            </div>
            <div class="text-center margin-bottom"></div>
            <div align="center">
              <input id="login" type="submit" class="btn btn-primary" value="Login"> <a href="register.html" class="btn btn-default">Belum punya akun? Daftar disini</a>
            </div>
          </form>
        </div>
        <div class="col-sm-5 hidden">
        </div>
      </div>
    </div> 
  </div>
</template>

<script> 
    export default {
      data() {
        return {
          email: "",
          password: "",
          }
      },
        
      methods: {
        Login: function(){
          let email = this.email 
          let password = this.password
          this.$store.dispatch('login', { email, password })
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
        }
      },
    }
</script>