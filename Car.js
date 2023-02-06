
let id = 0

class Car {

	constructor(track) {
		this.track = track
		this.id = id
		id += 1
		this.reset()
		this.ready = true
	}

	reset() {
		const start = this.track.getStartPosition()
		this.x = start.x
		this.y = start.y
		this.rot = start.rot
		this.v = 0.1
		this.acc = 0
		this.steer = 0
		this.score = 0
		this.scoreUntil = 0
	}

	move() {
		const dt = 0.016 //framerate browser
		const a = 15
		const omega = 0.5

		this.v = 0.99 * this.v + a * this.acc * dt
		this.rot = (this.rot + omega * this.steer * dt * Math.sign(this.v)) % (2*Math.PI)

		let vx = this.v * Math.cos(this.rot)
		let vy = this.v * Math.sin(this.rot)
		
		this.x = this.x + vx * dt
		this.y = this.y + vy * dt
	}

	checkCollision() {
		return this.track.getOffset(this.x, this.y) > 0.5 * this.track.width
	}

	updateScore() {
		//this.score += 0.01 * ((0.45*this.track.width)**2 - this.track.getOffset(this.x, this.y)) + 0.15 * this.v
		//this.score += 0.0001 * this.v ** 2
		const checkPoint = this.track.getCheckPoint(this.x, this.y)
		if(checkPoint > this.scoreUntil && checkPoint < this.scoreUntil + 5) {
			this.score += checkPoint - this.scoreUntil
			this.scoreUntil = checkPoint
		}
		if(checkPoint < 0.05 * this.scoreUntil) {
			this.score += 0.1
			this.scoreUntil = checkPoint
		}
		return this.score
	}

	// updateScore() {
	// 	return this.track.getScoreFromPoint(this.x, this.y)
	// }



	getScans() {
		let scans = []
		for(let l = 0; l < 5; l++) {
			const dir = this.rot + 0.25 * (l-2) * Math.PI
			let {dist} = this.track.scan(this.x, this.y, dir)
			scans.push(0.5 * dist)
		}
		return scans
	}

}