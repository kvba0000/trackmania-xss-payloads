const url = new URL(document.currentScript.src)
const c1 = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
<style>
	#p1 {
		background-color: rgba(0,0,0,0.7);
		left: 0;
		top: 0;
		position: fixed;
		width: 100vw;
		height: 100vh;
		z-index: 999999999999;
		backdrop-filter: blur(2px);
	}

	#p1 > span {
		color: white;
		font-family: "Roboto", sans-serif;
		font-weight: 500;
		font-size: 3em;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		position: absolute;
		user-select: none;
		pointer-events: none;
	}
</style>
<div id="p1">
	<span>
		Click the screen...
	</span>
<div>
`

const c2 = `
<style>
	#p2 {
		left: 0;
		top: 0;
		position: fixed;
		width: 100vw;
		height: 100vh;
		z-index: 999999999999;
	}
</style>
<img src="${url.origin}/img1.gif" id="p2" />
`
console.log()

const Sequence = class {
	index = 0
	frames = []
	constructor(frames = []) {
		this.frames = frames
	}
	get nextFrame() {
		return this.frames[this.index = (this.index + 1) % this.frames.length]
	}
}


;(document.body||document.documentElement).innerHTML += c1

document.getElementById("p1").addEventListener("click", async ({ target: el1 }) => {
	await new Promise(r => 
		el1.animate([
			{opacity: "100%"},
			{opacity: "0%"}
		], 300).addEventListener("finish", () => {el1.remove();r()})
	)

	const seq = new Sequence([
		"rick rolled!",
		"Rick rolled!",
		"rIck rolled!",
		"riCk rolled!",
		"ricK rolled!",
		"rick Rolled!",
		"rick rOlled!",
		"rick roLled!",
		"rick rolLed!",
		"rick rollEd!",
		"rick rolleD!",
		"rick rolled!"
	])
	const w = window.open("", "", "popup,height=400,width=400,autoplay")

	;(w.document.body||w.document.documentElement).innerHTML += c2
	setInterval(() => w.document.title = seq.nextFrame, 1e2)
})