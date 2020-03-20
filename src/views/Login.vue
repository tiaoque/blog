<template>
  <div class="news-view">
    <input class='password' type='text'/>
    <textarea class='body_input'></textarea>
    <button @click="post">post</button>
    <button @click="login">login</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {
  },
  props: {
  },
  data: () => ({

  }),

  computed: {
  },

  beforeMount () {
  },

  beforeDestroy () {
  },

  watch: {
  },

  methods: {
    saveJwt (jwt){
      localStorage.setItem('jwt', jwt)
    },
    getJwt () {
      return localStorage.getItem('jwt')
    },
    getPassword () {
      let password = this.$el.querySelector('.password').value
      return password
    },
    post () {
      let body = this.$el.querySelector('.body_input').value
      this._post(body)
    },
    _post (post) {
      let token = this.getJwt()
      fetch('http://tiaoque.com:1337/posts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`
        }, 
        body: JSON.stringify({
          type:'top',
          title: new Date(),
          contentBody: post
        })
      })
    },
    // login () {
    //   console.log('login')
    // }
    login () {
      const data = fetch('http://tiaoque.com:1337/auth/local', {
        headers: {
        'content-type': 'application/json'
        },
        method:"POST", 
        body: JSON.stringify({
          identifier: 'nopains@126.com', 
          password: this.getPassword()
        })
      }).then((response) => {
        return response.json();
      }).then((data) => {
        let jwt = data.jwt
        this.saveJwt(jwt)
      }) 
    }
  },
  asyncData ({ store, route: { params: { id }}}) {
    return new Promise((resolve) =>{
      resolve('xxx')
    })
  },
}
</script>

<style lang="stylus">
</style>
