<template>
  <div id="navHeader">
    <button id="basic" @click="handleBasic">Basic</button>
    <button id="social" @click="handleSocial">Social</button>
    <button id="ceritificates" @click="handleCertificates">Certificates</button>
  </div>
</template>

<script>
import router from '../../main'
export default {
  name: 'Tabs',
  methods: {
    handleBasic () {
      router.push({ name: 'basic' })
      location.reload()
    },
    handleSocial () {
      router.push({ name: 'social' })
      location.reload()
    },
    handleCertificates () {
      router.push({ name: 'certificates' })
      location.reload()
    }
  }
}
</script>

<style scoped>
#navHeader {
  font-family: 'Nunito';
  display: flex;
  justify-content: center;
  width: 102%;
  height: 4vh;
}

button {
  font-size: 16px;
  font-family: 'Nunito';
  font-weight: 500;
  width: 100%;
  height: 4vh;
  padding-bottom: 1%;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #aaaaaa;
  cursor: pointer;
}
#basic {
border-bottom: 2px solid #074EE8;
color: #074EE8;
}

#social {
border-bottom: 2px solid #aaaaaa;
color: black;
}

#certificates {
border-bottom: 2px solid #aaaaaa;
color: black;
}

</style>
