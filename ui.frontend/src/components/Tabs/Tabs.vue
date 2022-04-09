<template>
  <div id="navHeader">
        <button @click="handleBasic">Basic</button>
        <button @click="handleSocial">Social</button>
        <button @click="handleCertificates">Certificates</button>
  </div>
</template>

<script>
import router from '@/src/main.ts'
export default {
  name: 'Tabs',
  methods: {
    handleBasic () {
      router.push({name: 'basic'})
      location.reload()
    },
    handleSocial () {
      router.push({name: 'social'})
      location.reload()
    },
    handleCertificates () {
      router.push({name: 'certificates'})
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>