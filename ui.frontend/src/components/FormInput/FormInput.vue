<template>
  <div class="container">
    <div id="labelTxt">
      <h1 id="jsLabel">{{ labeltext }}</h1>
      <p :id="inputid">{{ text }}</p>
    </div>
    <input
      @blur="setValue"
      v-model="content"
      :class="inputid"
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
      default: ''
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
    setValue () {
      if (this.inputid === 'fullname') {
        localStorage.setItem('fullname', this.content)
      }
      if (this.inputid === 'nickname') {
        localStorage.setItem('nickname', this.content)
      }
      if (this.inputid === 'email') {
        localStorage.setItem('email', this.content)
      }
      if (this.inputid === 'github') {
        localStorage.setItem('github', this.content)
      }
      if (this.inputid === 'certificates') {
        localStorage.setItem('certificates', this.content)
      }
      if (this.inputid === 'teamname') {
        localStorage.setItem('teamname', this.content)
      }
      if (this.inputid === 'instituition') {
        localStorage.setItem('instituition', this.content)
      }
      if (this.inputid === 'graduation') {
        localStorage.setItem('graduation', this.content)
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 3%;
}

.fullname {
  color: #767676;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  border: 2px solid #ccc;
  padding: 8px;
  border-radius: 4px;
}

.nickname {
  color: #767676;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  border: 2px solid #ccc;
  padding: 8px;
  border-radius: 4px;
}

.email {
  color: #767676;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  border: 2px solid #ccc;
  padding: 8px;
  border-radius: 4px;
}

.github {
  color: #767676;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  border: 2px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 20%;
}

.teamname {
  color: #767676;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  border: 2px solid #ccc;
  padding: 8px;
  border-radius: 4px;
}

.instituition {
  color: #767676;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  border: 2px solid #ccc;
  padding: 8px;
  border-radius: 4px;
}

.graduation {
  color: #767676;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  border: 2px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 5%;
}

.certificates {
  color: #767676;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  border: 2px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 5%;
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
#fullname {
  margin: 0;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: red;
  visibility: hidden;
}

#email {
  margin: 0;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: red;
  visibility: hidden;
}

#github {
  margin: 0;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: red;
  visibility: hidden;
}

#teamname {
  margin: 0;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: red;
  visibility: hidden;
}

#instituition {
  margin: 0;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: red;
  visibility: hidden;
}

#graduation {
  margin: 0;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: red;
  visibility: hidden;
}
</style>
