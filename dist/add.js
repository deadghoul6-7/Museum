"use strict";gsap.registerPlugin(ScrollTrigger,ScrollSmoother),ScrollSmoother.create({wrapper:".wrapper",content:".content",smooth:1.5,effects:!0});var e=gsap.timeline({defaults:{duration:.7}});e.from(".header",{opacity:0,duration:.7,y:-80}),e.from(".menu-active",{opacity:0,duration:.7}),e.from("h1",{opacity:0,display:"none"}).add((function(){gsap.timeline({defaults:{duration:.7}}).to("h1",{opacity:0,scrollTrigger:{trigger:".block-1",start:"top",scrub:!0}})})),e.to("#block-1-cta",{opacity:0,display:"none",scrollTrigger:{trigger:".block-1",start:"top",scrub:!0}}),document.querySelectorAll(".img-block1").forEach((function(e){document.addEventListener("mousemove",(function(o){e.style.cssText="--move-x: ".concat(o.clientX,"px; --move-y:").concat(o.clientY,"px")}))})),$(document).ready((function(){$(".burger").click((function(e){$(".menu").toggleClass("menu-active")}))})),$(document).ready((function(){$(".collections").mouseover((function(e){$(".ul2").css("opacity","1"),$(".ul2").css("pointer-events","auto")})),$(".musems").mouseover((function(e){$(".ul2").css("opacity","0"),$(".ul2").css("pointer-events","none")}))}));