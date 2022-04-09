<template>
  <div>
    <input type="checkbox" id="check" />
    <p>I accept the terms and privacy</p>
    <p class="error">Please confirm the terms</p>
  </div>
</template>

<script>
export default {
  name: 'FormCheck'
}
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  padding: 3% 0;
}

input {
  appearance: none;
  -webkit-appearance: none;
  height: 18px;
  width: 18px;
  background-color: white;
  border: solid 1px #ccc;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}

input:hover {
  background-color: rgb(228, 228, 228);
}

input::after {
  justify-content: center;
  display: none;
  height: 18px;
  width: 18px;
  background-color: #074ee8;
  border-radius: 2px;
  content: "\2714";
  color: white;
}

input:checked {
  display: flex;
  border: 0;
}

input:checked::after {
  display: flex;
}

p {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #111111;
}

.error {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ff0000;
  margin-left: 3%;
}
</style>
