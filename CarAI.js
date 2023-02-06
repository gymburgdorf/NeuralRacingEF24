class CarAI extends Car {

	constructor(track) {
		super(track)
		this.nn = new NeuralNetwork(6) // 100 in gen 3 // 300 also fine!
		this.nn.addLayer(4)
		this.nn.addLayer(2)
	}

	control() {
		let scans = this.getScans()
		let results = this.nn.feedForward([...scans, this.v])
		this.acc = -1 + 2 * clamp(results[0], 0, 1)
		this.steer = -1 + 2 * clamp(results[1], 0, 1)
	}

}

function clamp(x, min, max) {
	if(x < min) return min
	if(x > max) return max
	return x
}