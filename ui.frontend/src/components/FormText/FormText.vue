<template>
  <div>
    <p>Your data has been sent successfully!</p>
    <p>Full name: {{fullname}} </p>
    <p>Email: {{email}} </p>
    <p>Birthday:{{day}}/{{month}}/{{year}} </p>
    <p>Age: {{age}} </p>
    <p>Github: {{github}} </p>
    <p>Certificates: {{certificates}} </p>
    <p>Team Name: {{teamname}} </p>
    <p>Instituition: {{instituition}} </p>
    <p>Graduation: {{graduation}} </p>
  </div>
</template>

<script>
export default {
  name: 'FormText',

  computed: {
    fullname () {
      return localStorage.getItem('fullname')
    },

    email () {
      return localStorage.getItem('email')
    },

    age () {
      return localStorage.getItem('age')
    },

    day () {
      return localStorage.getItem('day')
    },

    month () {
      return (localStorage.getItem('month'))
    },

    year () {
      return localStorage.getItem('year')
    },

    github () {
      return localStorage.getItem('github')
    },

    certificates () {
      return localStorage.getItem('certificates')
    },

    teamname () {
      return localStorage.getItem('teamname')
    },

    instituition () {
      return localStorage.getItem('instituition')
    },

    graduation () {
      return localStorage.getItem('graduation')
    }
  }
}
</script>

<style scoped>
p {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #000000;
}
</style>
