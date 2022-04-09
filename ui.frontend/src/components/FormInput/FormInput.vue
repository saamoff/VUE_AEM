<template>
  <div class="container">
    <div id="labelTxt">
      <h1 id="jsLabel">{{ labeltext }}</h1>
      <p id="jsError">{{ text }}</p>
    </div>
    <input
      v-model="content"
      id="inputStyle"
      :type="inputtype"
      :placeholder="placetext"
    />
    <p> {{content}} </p>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  data () {
    return {
      content: ''
    }
  },
  props: {
    text: {
      type: String,
      default: 'Mensagem de erro'
    },
    inputtype: {
      type: String,
      default: 'text'
    },
    labeltext: {
      type: String,
      default: 'Label'
    },
    placetext: {
      type: String
    }
  },
  methods: {
    inputValue () {

    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 3%;
}

#inputStyle {
  color: #767676;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  border: 2px solid #ccc;
  padding: 8px;
  border-radius: 4px;
}
#inputStyle:focus {
  outline: none;
}
#labelTxt {
  display: flex;
}
#jsLabel {
  margin: 0;
  margin-right: 3%;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #767676;
}
#jsError {
  margin: 0;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: red;
}
</style>
