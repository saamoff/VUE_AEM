<template>
  <div>
    <h1 :class="classtype">{{ text }}</h1>
    <p>{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'FormTitle',
  props: {
    text: {
      type: String,
      default: 'TÍTULO FORMULÁRIO'
    },

    classtype: {
      type: String,
      default: 'forms'
    },

    error: {
      type: String,
      default: ' '
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
}

.title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #111111;
}

.birthday {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 16px;
  color: #767676;
}

p {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ff0000;
  margin-left: 3%;
}
</style>
