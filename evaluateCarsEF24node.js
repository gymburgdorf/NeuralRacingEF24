import { carOfSmilan, carOfTristan, carOfJohannes } from "./raceCarsEF24.js"
import { setupMonaco , setupBaku, setupJeddah, setupMonza, setupSpecial} from "./Monaco.js"
import fs from "fs"


const tracks = {
	monaco: setupMonaco(),
	baku: setupBaku(),
	jeddah: setupJeddah(),
	monza: setupMonza(),
	special: setupSpecial(),
}

for(let [name, track] of Object.entries(tracks)) {
	const cars = {smilan: carOfSmilan(track), tristan: carOfTristan(track), johannes: carOfJohannes(track)}
	for(let carname in cars) {
		const car = cars[carname]
		let steps = 0
		while(!car.gameOver && steps++ < 5000) {
			car.control() 
			car.move()
			if(car.checkCollision()) {
				car.gameOver = true
			}
		}
		fs.writeFileSync(`./data/traces_${name}_${carname}.json`, JSON.stringify([car.traces]), {encoding: "utf8"})
	}
}

