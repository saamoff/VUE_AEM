<template>
  <div id="navHeader">
    <p :id="Idb">Basic</p>
    <p :id="Ids">Social</p>
    <p :id="Idc">Certificates</p>
  </div>
</template>

<script>

export default {
  name: 'Tabs',
  props: {
    Idb: {
      type: String
    },
    Ids: {
      type: String
    },
    Idc: {
      type: String
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
  margin-bottom: 5%;
}

p {
  font-size: 16px;
  font-family: 'Nunito';
  text-align: center;
  font-weight: 500;
  width: 100%;
  height: 4vh;
  padding-bottom: 1%;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #aaaaaa;
  cursor: pointer;
}

#colorTab {
border-bottom: 2px solid #074EE8;
color: #074EE8;
}

</style>
