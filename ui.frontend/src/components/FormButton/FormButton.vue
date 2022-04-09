<template>
  <div>
    <button @click="switchPage" :class="classtype">{{ text }}</button>
    <img src="" alt="">
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
        alert('')
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
  font-family: 'Inter';
  border: 0;
  text-decoration: none;
  padding: 12px 12px;
  cursor: pointer;
}

.next2 {
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
