<template>
  <div>
      <ul>
          <li v-for='fruta in frutas' :key="fruta">{{ fruta }}</li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="add">
  </div>
</template>

<script>
import FrutasMixin from './FrutasMixin'
export default {
    components: { FrutasMixin },
    mixins: [FrutasMixin],

}
</script>

<style>

</style>