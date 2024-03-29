function trainCarAI() {
	
	const track = setupMonaco()
	const carRenderer = new CarRenderer(track)

	let cars = [] 
	for(let i = 0; i < 50; i++) {
		cars.push(new CarAI(track))
	}
	let scores = []

	// jump to next generation by pressing "n"
	skip = false
	window.addEventListener("keydown", e=>{
		if(e.key === "n") {
			skip = true;
		}
	})

	function step(stepIndex) {
		for(let car of cars) {
			if(car.gameOver) continue
			car.control()
			car.move()
			car.updateScore()
			if(car.checkCollision() || car.score + 30  < 0.015 * stepIndex**1.1 || car.score > 2000)  {
				car.gameOver = true
				scores.push({id: car.id, score: car.score})
			}
		}
		if(cars.some(c=>!c.gameOver) && !skip) {
			return false
		}
		else {
			return scores
		}
	}

	async function renderStep(stepIndex) {
		return new Promise(resolve=>{
			requestAnimationFrame(()=>{
				const result = step(stepIndex)
				for(let car of cars) {
					carRenderer.render(car)
				}
				resolve(result)
			})
		})
	}

	async function run() {
		let steps = 0
		scores = []
		let carsAlive = true
		while(carsAlive) {
			step(steps++)
			step(steps++)
			const result = await renderStep(steps)
			if(result) {
				carsAlive = false
				skip = false
				return result
			}
			steps++
		}
	}

	async function runGenerations() {
		for(let generation = 0; generation < 1000; generation++) {
			let scores = await run()
			scores.sort((a, b)=>b.score - a.score)
			console.log(`Generation ${generation} done!!! Scores: ${scores.slice(0, 3).map(x=>Math.round(x.score)).join(" - ")}`);	
			const bestThreeScores = scores.slice(0, 3)
			const bestThreeCars = bestThreeScores.map(s=>cars.find(car=>car.id === s.id))
			const bestThreeNetworks = bestThreeCars.map(car=>car.nn.clone())
			for(let car of cars) {
				carRenderer.remove(car)
			}
			for(let i = 0; i < 3; i++) {
				cars[i] = new CarAI(track)
				cars[i].nn = bestThreeNetworks[i].clone()
				//console.log(bestThree[i].nn.exportState());
				//console.log(cars[i].nn.exportState());
			}
			for(let i = 3; i < cars.length; i++) {
				cars[i] = new CarAI(track)
				const car = cars[i]
				car.nn = bestThreeNetworks[i%3].clone()
				car.nn.randomAdjust(i / (generation+1))
			}
			bestThreeNetworks[0].exportData()
		}
	}

	runGenerations()
}

