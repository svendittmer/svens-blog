---

title: Today I started building an HTML5 game
date: 2017-08-21 18:07 UTC
tags: babylonjs

---

Ah, the good old times. Good old games. Remember ogame? Port Royale? Patrizier 2? Stuff for legends and fansites. When games were supposed to be fun, instead of addicting and time consuming. 

I've been dreaming of creating an own game since I could play.
I gave it a try, building a browser game like ogame when I was 16 or so.
The single advise you'd get back then was
"Don't build a browser game! It's more work than you think, you are not prepared."
More than 10 years later, I have become a Ruby on Rails developer, and this advice is no longer true for me.
Unfortunately, browsergames of the "tables on the internet" kind are not a thing anymore. Ogame still has it's fanbase, but if I want my game to gain attention, I must build something different, more modern.

Enter Sea-Traders!

I'm going to build a game that combines a trading simulation with MMO.
Using WebGL, my aim is to build a game that is playable both on desktop and mobile.

Here's a prototype. I'm still fiddling with the game engine, but hey, it works :)

<script src="/js/babylon.js"></script>
<script src="/js/game.js"></script>

<style>
	#renderCanvas {
		width: 100%;
		touch-action: none;
	}
</style>

<canvas id="renderCanvas"></canvas>

