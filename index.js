// Escrevendo as classes de um jogo

class heroe{
	constructor(name, age, type){
		this.name = name
		this.age = age
		this.type = type // Guerreiro, Mago, Monge, Ninja
	}
    
    attack(){
		if(this.type == "Guerreiro"){
			console.log(`O ${this.type} atacou usando espada!`)
		}
		if(this.type == "Mago"){
			console.log(`O ${this.type} atacou usando magia!`)
		}
		if(this.type == "Monge"){
			console.log(`O ${this.type} atacou usando artes marciais!`)
		}
		if(this.type == "Ninja"){
			console.log(`O ${this.type} atacou usando shuriken!`)
		}
	}
}
