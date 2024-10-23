// Escrevendo as classes de um jogo

class heroe{
	constructor(name, age, type){
		this.name = name
		this.age = age
		this.type = type // Guerreiro, Mago, Monge, Ninja
	}

    attack(){
		if(this.type == "Guerreiro"){
			console.log(`O ${this.type} ${this.name} atacou usando espada!`)
		}
		if(this.type == "Mago"){
			console.log(`O ${this.type} ${this.name} atacou usando magia!`)
		}
		if(this.type == "Monge"){
			console.log(`O ${this.type} ${this.name} atacou usando artes marciais!`)
		}
		if(this.type == "Ninja"){
			console.log(`O ${this.type} ${this.name} atacou usando shuriken!`)
		}
	}
}

let heroe1 = new heroe("Json", 49, "Guerreiro")
let heroe2 = new heroe("Rasmodius", 102, "Mago")
let heroe3 = new heroe("Herobrine", 21, "Monge")
let heroe4 = new heroe("Jackie Chan", 70, "Ninja")

heroe1.attack()
heroe2.attack()
heroe3.attack()
heroe4.attack()