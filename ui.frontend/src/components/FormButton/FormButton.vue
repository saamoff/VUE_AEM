<template>
  <div>
    <button @click="switchPage" :class="classtype">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: 'FormButton',
  props: {
    text: {
      type: String
    },
    classtype: {
      type: String
    }
  },

  methods: {
    switchPage () {
      if (this.classtype === 'next1') {
        if (
          localStorage.getItem('fullname') &&
          localStorage.getItem('email') &&
          document.querySelector('#check').checked
        ) {
          this.$router.replace({ name: 'social' })
          location.reload()
        } else {
          if (localStorage.getItem('email')) {
            document.getElementById('email').style.visibility = 'hidden'
            document.getElementById('fullname').style.visibility = 'visible'
            document.getElementById('check-error').style.visibility = 'visible'
          }
          if (localStorage.getItem('fullname')) {
            document.getElementById('fullname').style.visibility = 'hidden'
            document.getElementById('email').style.visibility = 'visible'
            document.getElementById('check-error').style.visibility = 'visible'
          }
          if (
            !localStorage.getItem('fullname') &&
            !localStorage.getItem('email') &&
            document.querySelector('#check').checked
          ) {
            document.getElementById('email').style.visibility = 'visible'
            document.getElementById('fullname').style.visibility = 'visible'
            document.getElementById('check-error').style.visibility = 'hidden'
          }
          if (
            !document.querySelector('#check').checked &&
            localStorage.getItem('email') &&
            localStorage.getItem('fullname')
          ) {
            document.getElementById('check-error').style.visibility = 'visible'
            document.getElementById('email').style.visibility = 'hidden'
            document.getElementById('fullname').style.visibility = 'hidden'
          }
          if (
            !document.querySelector('#check').checked &&
            !localStorage.getItem('email') &&
            !localStorage.getItem('fullname')
          ) {
            document.getElementById('check-error').style.visibility = 'visible'
            document.getElementById('email').style.visibility = 'visible'
            document.getElementById('fullname').style.visibility = 'visible'
          }
          if (
            document.querySelector('#check').checked &&
            localStorage.getItem('email') &&
            !localStorage.getItem('fullname')
          ) {
            document.getElementById('check-error').style.visibility = 'hidden'
            document.getElementById('email').style.visibility = 'hidden'
            document.getElementById('fullname').style.visibility = 'visible'
          }

          if (
            document.querySelector('#check').checked &&
            !localStorage.getItem('email') &&
            localStorage.getItem('fullname')
          ) {
            document.getElementById('check-error').style.visibility = 'hidden'
            document.getElementById('email').style.visibility = 'visible'
            document.getElementById('fullname').style.visibility = 'hidden'
          }
        }
      }
      if (this.classtype === 'next2') {
        if (localStorage.getItem('github')) {
          this.$router.replace({ name: 'certificates' })
          location.reload()
        } else {
          document.getElementById('github').style.visibility = 'visible'
        }
      }

      if (this.classtype === 'finish') {
        if (
          localStorage.getItem('teamname') &&
          localStorage.getItem('instituition') &&
          localStorage.getItem('graduation')
        ) {
          this.$router.replace({ name: 'sucess' })
          location.reload()
        } else {
          if (
            !localStorage.getItem('teamname') &&
            !localStorage.getItem('instituition') &&
            !localStorage.getItem('graduation')
          ) {
            document.getElementById('teamname').style.visibility = 'visible'
            document.getElementById('instituition').style.visibility = 'visible'
            document.getElementById('graduation').style.visibility = 'visible'
          }

          if (localStorage.getItem('teamname')) {
            document.getElementById('teamname').style.visibility = 'hidden'
            document.getElementById('instituition').style.visibility = 'visible'
            document.getElementById('graduation').style.visibility = 'visible'
          }

          if (localStorage.getItem('instituition')) {
            document.getElementById('teamname').style.visibility = 'visible'
            document.getElementById('instituition').style.visibility = 'hidden'
            document.getElementById('graduation').style.visibility = 'visible'
          }

          if (localStorage.getItem('graduation')) {
            document.getElementById('teamname').style.visibility = 'visible'
            document.getElementById('instituition').style.visibility = 'visible'
            document.getElementById('graduation').style.visibility = 'hidden'
          }

          if (
            localStorage.getItem('teamname') &&
            localStorage.getItem('instituition')
          ) {
            document.getElementById('teamname').style.visibility = 'hidden'
            document.getElementById('instituition').style.visibility = 'hidden'
            document.getElementById('graduation').style.visibility = 'visible'
          }

          if (
            localStorage.getItem('teamname') &&
            localStorage.getItem('graduation')
          ) {
            document.getElementById('teamname').style.visibility = 'hidden'
            document.getElementById('instituition').style.visibility = 'visible'
            document.getElementById('graduation').style.visibility = 'hidden'
          }

          if (
            localStorage.getItem('graduation') &&
            localStorage.getItem('instituition')
          ) {
            document.getElementById('teamname').style.visibility = 'visible'
            document.getElementById('instituition').style.visibility = 'hidden'
            document.getElementById('graduation').style.visibility = 'hidden'
          }
        }
      }
      if (this.classtype === 'return') {
        this.$router.replace({ name: 'basic' })
        location.reload()
      }
    }
  }
}
</script>

<style scoped>

.next1 {
  background: #074ee8;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-family: "Inter";
  border: 0;
  width: 5em;
  height: 2.5em;
  text-decoration: none;
  padding: 0;
  cursor: pointer;
  margin-left: 60%;
}

.next2 {
  background: #074ee8;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-family: "Inter";
  border: 0;
  width: 5em;
  height: 2.5em;
  text-decoration: none;
  padding: 0;
  cursor: pointer;
  margin-left: 60%;

}

.finish {
  background: #074ee8;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-family: "Inter";
  border: 0;
  width: 5em;
  height: 2.5em;
  text-decoration: none;
  padding: 0;
  margin-left: 60%;
}

.more {
  background: #074ee8;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-family: "Inter";
  border: 0;
  width: 5em;
  height: 2.5em;
  text-decoration: none;
  padding: 0;
  margin-left: 60%;
}

.return {
  background: #074ee8;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-family: "Inter";
  border: 0;
  width: 5em;
  height: 2.5em;
  text-decoration: none;
  padding: 0;
  margin-left: 60%;

}
</style>
