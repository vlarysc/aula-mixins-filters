export default {
    data() {
		return {
			cpf: '51515151121321',
			fruta: '',
            frutas: ['Banana', 'Maçã', 'Laranja']
		}
	},
	methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}