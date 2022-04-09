<template>
  <div>
    <p class="forms-title">{{ text }}</p>
    <h1 class="tab-title">{{ text2 }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TabTitle',

  props: {
    text: {
      type: String,
      default: 'SUBTÍTULO PADRÃO'
    },
    text2: {
      type: String,
      default: 'TÍTULO PADRÃO'
    }
  }
}
</script>

<style scoped>
div {
  padding: 4% 5%;
  border-bottom: solid 2px #AAAAAA;
}

.forms-title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #111111;
  margin: 0;
}

.tab-title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #074ee8;
  margin: 0;
}
</style>
