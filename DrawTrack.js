import {Track} from "./Track.js"
import {TrackRenderer} from "./TrackRenderer.js"



const drawArea = document.querySelector(".pointerdraw")
drawArea.addEventListener("pointermove", collectPoints)
drawArea.addEventListener("pointerdown", startDrawing)
drawArea.addEventListener("pointerup", stopDrawing)
//drawArea.addEventListener("pointerleave", stopDrawing)

const [,, W, H] = drawArea.getAttribute('viewBox').split(/\s+|,/);


let isDrawing = false
let points = []


function startDrawing() {
	isDrawing = true
}

function stopDrawing(e) {
	isDrawing = false
	points = []
}

function collectPoints(event) {
	if(isDrawing) {
		var rect = drawArea.getBoundingClientRect();
		points.push({
			x: (event.clientX - rect.left) / rect.width * W,
			y: (event.clientY - rect.top) / rect.height * H
		})
		if(points.length > 2) {
			const d = `M ${points[0].x} ${points[0].y} L ${points.slice(1).map(p=>`${p.x} ${p.y}`).join(", ")} Z`
			drawArea.innerHTML = `<path d="${d}"></path>`
			const s = simplify(points)
			if(s.length > 2) {
				const ds = `M ${s[0][0]} ${s[0][1]} L ${s.slice(1).map(p=>`${p[0]} ${p[1]}`).join(", ")} Z`
				drawArea.innerHTML += `<path class="simple" d="${ds}"></path>`
				document.querySelector(".asArray").textContent = "["+s.map(p=>`[${p[0].toFixed(0)},${p[1].toFixed(0)}]`).join(",")+"]"
			}

		}
	}
}

function simplify(points, d=W/200) {
	const simplified = []
	let tempx = null
	let tempy = null
	let n = 0
	for(let p of points) {
		if(n == 0) {
			tempx = p.x
			tempy = p.y
			n++
		}
		else if((p.x-tempx)**2 + (p.y-tempy)**2 < d**2) {
			tempx = n/(n+1)*tempx + 1/(n+1)*p.x
			tempy = n/(n+1)*tempy + 1/(n+1)*p.y
			n++
		}
		else {
			simplified.push([Math.round(tempx), Math.round(tempy)])
			tempx = p.x
			tempy = p.y
			n = 1
		}
	}
	return simplified
}

renderSVGbutton.addEventListener("click", render)
function render() {
	const smoothPoints = JSON.parse(document.querySelector(".asArray").textContent)
	const track = new Track(smoothPoints, 100)
	console.log(track);
	const trackRenderer = new TrackRenderer(track)

}