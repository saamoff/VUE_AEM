<template>
  <div class="container">
    <div id="labelTxt">
      <h1 id="jsLabel">{{ labeltext }}</h1>
      <p :class="inputid">{{ text }}</p>
    </div>
    <input
      @blur="getValue"
      v-model="content"
      :id="inputid"
      :type="inputtype"
      :placeholder="placetext"
    />
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
    },
    inputid: {
      type: String,
      default: 'fullname'
    }
  },
  methods: {
    getValue () {
      if (this.inputid === 'fullname') {
        localStorage.setItem('fullname', this.content)
      }
      if (this.inputid === 'email') {
        localStorage.setItem('email', this.content)
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 3%;
}

#fullname {
  color: #767676;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  border: 2px solid #ccc;
  padding: 8px;
  border-radius: 4px;
}

#nickname {
  color: #767676;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  border: 2px solid #ccc;
  padding: 8px;
  border-radius: 4px;
}

#email {
  color: #767676;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  border: 2px solid #ccc;
  padding: 8px;
  border-radius: 4px;
}

input:focus {
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
.fullname {
  margin: 0;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: red;
  visibility: hidden;
}

.email {
  margin: 0;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: red;
  visibility: hidden;
}
</style>
