<template>
  <div>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'FormText',
  props: {
    text: {
      type: String,
      default: 'Páragrafo padrão'
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
