export class TrackRenderer {

	constructor(track, background) {
		this.drawArea = document.querySelector(".drawing")
		this.background = background
		this.distCache = {}
		this.render(track)
	}

	render(track) {
		const {points, width} = track
		if(this.background) {
			document.querySelector(".wrap").style.backgroundImage = `url(${this.background})`
			document.querySelector(".wrap").style.backgroundColor = this.background
		}
		const d = `M ${points[0][0]} ${points[0][1]} L ${points.slice(1).map(p=>`${p[0]} ${p[1]}`).join(", ")} Z`
		this.drawArea.insertAdjacentHTML("beforeend", `
			<path d="${d}" style="stroke-width: ${Math.round(1.3*width)}; stroke: red;"></path>
			<path d="${d}" style="stroke-width: ${Math.round(1.3*width)}; stroke: white; stroke-dasharray: ${0.5*width};"></path>
			<path d="${d}" style="stroke-width: ${Math.round(0.8*width)};"></path>`
		)
	}
}