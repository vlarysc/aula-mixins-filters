<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p> {{ cpf | cpf | inverter }} </p>
		<hr>
		<Frutas />
		<div>
      <ul>
          <li v-for='fruta in frutas' :key="fruta">{{ fruta }}</li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="add">
  </div>
	</div>
	
</template>

<script>
import FrutasMixin from './FrutasMixin'
import Frutas from './Frutas'
export default {
	components: { Frutas, FrutasMixin },
	mixins: [FrutasMixin],
	filters: {
		cpf(valor) {
			const arr = valor.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data() {
		return {
			cpf: '51515151121321',
			
		}
	},
	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
