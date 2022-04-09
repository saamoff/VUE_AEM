<template>
  <div>
    <button :class="classtype">{{ text }}</button>
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
  }
}
</script>

<style scoped>

.next {
  background: #074ee8;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-family: 'Inter';
  border: 0;
  text-decoration: none;
  padding: 12px 12px;
  cursor: pointer;
}

.finish {
  background: #074ee8;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-family: 'Inter';
  border: 0;
  text-decoration: none;
  padding: 12px 12px;
  cursor: pointer;
}

.more {
  background: #074ee8;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-family: 'Inter';
  border: 0;
  text-decoration: none;
  padding: 12px 12px;
  cursor: pointer;
}

.return {
  background: #074ee8;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-family: 'Inter';
  border: 0;
  text-decoration: none;
  padding: 12px 12px;
  cursor: pointer;
}

</style>
