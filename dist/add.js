"use strict";function r(){$(".loader").length&&$(".loader").fadeOut(1e3,(function(){$(".loader").remove()}))}$(document).ready((function(){r()})),setTimeout((function(){r()}),1e4),$(document).ready((function(){$(".burger").click((function(r){$(".menu").toggleClass("menu-active"),$(".body").toggleClass("hide"),$(".dark").toggleClass("show-dark"),$(".ul2").toggleClass("hide")}))}));if(setTimeout((function(){$(".dark2").css("opacity","0")}),1200),$(document).ready((function(){$(".collections").mouseover((function(r){$(".ul2").css("opacity","1"),$(".ul2").css("pointer-events","auto"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".musems").removeClass("a-hover"),$(".musems").css("color","#8F969E"),$(".vistv").removeClass("a-hover"),$(".vistv").css("color","#8F969E"),$(".posit").removeClass("a-hover"),$(".posit").css("color","#8F969E"),$(".hud").removeClass("a-hover"),$(".hud").css("color","#8F969E"),$(".contacts").removeClass("a-hover"),$(".contacts").css("color","#8F969E")})),window.innerWidth<=540&&$(".collections").click((function(r){$(".ul2_mobile").toggleClass("active"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".musems").removeClass("a-hover"),$(".musems").css("color","#8F969E"),$(".vistv").removeClass("a-hover"),$(".vistv").css("color","#8F969E"),$(".posit").removeClass("a-hover"),$(".posit").css("color","#8F969E"),$(".hud").removeClass("a-hover"),$(".hud").css("color","#8F969E"),$(".contacts").removeClass("a-hover"),$(".contacts").css("color","#8F969E")})),$(".musems").mouseover((function(r){$(".ul2").css("opacity","0"),$(".ul2").css("pointer-events","none"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".collections").removeClass("a-hover"),$(".collections").css("color","#8F969E"),$(".vistv").removeClass("a-hover"),$(".vistv").css("color","#8F969E"),$(".posit").removeClass("a-hover"),$(".posit").css("color","#8F969E"),$(".hud").removeClass("a-hover"),$(".hud").css("color","#8F969E"),$(".contacts").removeClass("a-hover"),$(".contacts").css("color","#8F969E")})),$(".vistv").mouseover((function(r){$(".ul2").css("opacity","0"),$(".ul2").css("pointer-events","none"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".collections").removeClass("a-hover"),$(".collections").css("color","#8F969E"),$(".musems").removeClass("a-hover"),$(".musems").css("color","#8F969E"),$(".posit").removeClass("a-hover"),$(".posit").css("color","#8F969E"),$(".hud").removeClass("a-hover"),$(".hud").css("color","#8F969E"),$(".contacts").removeClass("a-hover"),$(".contacts").css("color","#8F969E")})),$(".posit").mouseover((function(r){$(".ul2").css("opacity","0"),$(".ul2").css("pointer-events","none"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".collections").removeClass("a-hover"),$(".collections").css("color","#8F969E"),$(".musems").removeClass("a-hover"),$(".musems").css("color","#8F969E"),$(".vistv").removeClass("a-hover"),$(".vistv").css("color","#8F969E"),$(".hud").removeClass("a-hover"),$(".hud").css("color","#8F969E"),$(".contacts").removeClass("a-hover"),$(".contacts").css("color","#8F969E")})),$(".hud").mouseover((function(r){$(".ul2").css("opacity","0"),$(".ul2").css("pointer-events","none"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".collections").removeClass("a-hover"),$(".collections").css("color","#8F969E"),$(".musems").removeClass("a-hover"),$(".musems").css("color","#8F969E"),$(".vistv").removeClass("a-hover"),$(".vistv").css("color","#8F969E"),$(".posit").removeClass("a-hover"),$(".posit").css("color","#8F969E"),$(".contacts").removeClass("a-hover"),$(".contacts").css("color","#8F969E")})),$(".contacts").mouseover((function(r){$(".ul2").css("opacity","0"),$(".ul2").css("pointer-events","none"),$(this).css("color","white"),$(this).addClass("a-hover"),$(".collections").removeClass("a-hover"),$(".collections").css("color","#8F969E"),$(".musems").removeClass("a-hover"),$(".musems").css("color","#8F969E"),$(".vistv").removeClass("a-hover"),$(".vistv").css("color","#8F969E"),$(".posit").removeClass("a-hover"),$(".posit").css("color","#8F969E"),$(".hud").removeClass("a-hover"),$(".hud").css("color","#8F969E")}))})),window.innerWidth>=1e3){gsap.registerPlugin(ScrollTrigger,ScrollSmoother),ScrollSmoother.create({wrapper:".wrapper",content:".content",smooth:1.5,effects:!0});var o=gsap.timeline({defaults:{duration:.7}});o.from(".header",{opacity:0,y:-80}).from(".menu-active",{opacity:0}),o.add((function(){gsap.timeline({}).to("#block-1-h1",{opacity:0,scrollTrigger:{trigger:"#block-1",start:"-300",pin:"#block-1-h1",scrub:!0}}).to("#block-1-cta",{opacity:0,scrollTrigger:{trigger:"#block-1",start:"-300",pin:"#block-1-cta",scrub:!0}})})),gsap.from(".menu-active",{opacity:0,duration:5}),document.querySelectorAll(".img-block1").forEach((function(r){document.addEventListener("mousemove",(function(o){r.style.cssText="--move-x: ".concat(o.clientX,"px; --move-y:").concat(o.clientY,"px")}))})),document.querySelectorAll(".cursor").forEach((function(r){document.addEventListener("mousemove",(function(o){r.style.cssText="--move-x: ".concat(o.clientX,"px; --move-y:").concat(o.clientY,"px")}))}));var t=gsap.utils.toArray(".title-block-5"),e=gsap.utils.toArray(".item-block-5"),s=gsap.utils.toArray(".info-item-block-5").reverse();t.forEach((function(r){gsap.fromTo(".text-block2:nth-child(1)",{paddingLeft:"100%",opacity:0},{opacity:1,paddingLeft:"0%",scrollTrigger:{trigger:".first-row-block2",end:"-300",scrub:!0}}),gsap.fromTo(".text-block2:nth-child(2)",{paddingRight:"100%",opacity:0},{opacity:1,paddingRight:"0%",scrollTrigger:{trigger:".first-row-block2",end:"-300",scrub:!0}}),gsap.utils.toArray(".text-elem").forEach((function(r){gsap.fromTo(r,{y:150,opacity:0},{y:0,opacity:1,scrollTrigger:{trigger:r,start:"-850",end:"-300",scrub:!0}}),e.forEach((function(r){gsap.fromTo(r,{x:150,opacity:0},{x:0,opacity:1,scrollTrigger:{trigger:r,start:"-550",scrub:!0,stagger:.25}})})),s.forEach((function(r){gsap.fromTo(r,{x:-150,opacity:0},{x:0,opacity:1,delay:5,scrollTrigger:{trigger:r,start:"-850",end:"-300",scrub:!0}},console.log(r))}))})),gsap.set(".block-3-text-left",{paddingLeft:"33%"}),gsap.to(".block-3",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:window.innerHeight-280+"",markers:!1,scrub:!0},y:600}),gsap.set(".block-3",{opacity:0}),gsap.to(".block-3",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:780-window.innerHeight+"",markers:!1,scrub:!0},opacity:1}),gsap.set(".block-3-cards",{opacity:0}),gsap.to(".block-3-cards",{scrollTrigger:{trigger:".block-3",start:480-window.innerHeight+"",end:980-window.innerHeight+"",scrub:!0,markers:!1},opacity:1}),gsap.to(".block-3-top_block",{scrollTrigger:{trigger:".block-3",start:480-window.innerHeight+"",end:980-window.innerHeight+"",scrub:!0,markers:!1},y:-200}),gsap.to(".block-3-bottom_block",{scrollTrigger:{trigger:".block-3",start:480-window.innerHeight+"",end:980-window.innerHeight+"",scrub:!0},y:205}),window.innerWidth>820&&(gsap.set(".block-3-cta",{y:-100,opacity:0}),gsap.to(".block-3-cta",{scrollTrigger:{trigger:".block-3",start:480-window.innerHeight+"",end:980-window.innerHeight+"",scrub:!0},y:30,opacity:1.5})),(window.innerWidth<=1920&&window.innerWidth>1600||window.innerWidth>=1920)&&(gsap.to(".block-3-text-left",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0,markers:!1},x:"-58.5%"}),gsap.to(".block-3-text-right",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0},x:"33.25%"})),window.innerWidth<=1600&&window.innerWidth>1280&&(gsap.to(".block-3-text-left",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0,markers:!1},x:"-59.6%"}),gsap.to(".block-3-text-right",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0},x:"34.5%"})),window.innerWidth<=1280&&window.innerWidth>1170&&(gsap.to(".block-3-text-left",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0,markers:!1},x:"-57.2%"}),gsap.to(".block-3-text-right",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0},x:"31.5%"})),window.innerWidth<=1170&&window.innerWidth>1020&&(gsap.to(".block-3-text-left",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0,markers:!1},x:"-56%"}),gsap.to(".block-3-text-right",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0},x:"30%"})),window.innerWidth<=1020&&window.innerWidth>820&&(gsap.to(".block-3-text-left",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0,markers:!1},x:"-54%"}),gsap.to(".block-3-text-right",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0},x:"25%"})),window.innerWidth<=820&&window.innerWidth>700&&(gsap.to(".block-3-text-left",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0,markers:!1},x:"-51%"}),gsap.to(".block-3-text-right",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0},x:"21%"}),gsap.set(".block-3-adaptive-cards-card-1",{x:"600",opacity:0}),gsap.to(".block-3-adaptive-cards-card-1",{scrollTrigger:{trigger:".block-3",start:"-1100",end:"-100",scrub:!0,markers:!1},x:"0",opacity:1}),gsap.set(".block-3-adaptive-cards-card-2",{x:"-600",opacity:0}),gsap.to(".block-3-adaptive-cards-card-2",{scrollTrigger:{trigger:".block-3",start:"-935",end:"65",scrub:!0,markers:!1},x:"0",opacity:1}),gsap.set(".block-3-cta",{y:-100,opacity:0}),gsap.to(".block-3-cta",{scrollTrigger:{trigger:".block-3",start:"-435",end:"265",scrub:!0,markers:!1},y:30,opacity:1})),window.innerWidth<=700&&window.innerWidth>610&&(gsap.to(".block-3-text-left",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0,markers:!1},x:"-47%"}),gsap.to(".block-3-text-right",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0},x:"17%"}),gsap.set(".block-3-adaptive-cards-card-1",{x:"600",opacity:0}),gsap.to(".block-3-adaptive-cards-card-1",{scrollTrigger:{trigger:".block-3",start:"-1100",end:"-100",scrub:!0,markers:!1},x:"0",opacity:1}),gsap.set(".block-3-adaptive-cards-card-2",{x:"-600",opacity:0}),gsap.to(".block-3-adaptive-cards-card-2",{scrollTrigger:{trigger:".block-3",start:"-935",end:"65",scrub:!0,markers:!1},x:"0",opacity:1}),gsap.set(".block-3-cta",{y:250,opacity:0}),gsap.to(".block-3-cta",{scrollTrigger:{trigger:".block-3",start:"50",end:"400",scrub:!0,markers:!1},opacity:1,y:400})),window.innerWidth<=610&&window.innerWidth>520&&(gsap.to(".block-3-text-left",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0,markers:!1},x:"-45%"}),gsap.to(".block-3-text-right",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0},x:"13%"}),gsap.set(".block-3-adaptive-cards-card-1-img_adaptive",{x:"600",opacity:0}),gsap.to(".block-3-adaptive-cards-card-1-img_adaptive",{scrollTrigger:{trigger:".block-3",start:"-1000",end:"-250",scrub:!0,markers:!1},x:"0",opacity:1}),gsap.set(".block-3-adaptive-cards-card-1-text",{x:"-600",opacity:0}),gsap.to(".block-3-adaptive-cards-card-1-text",{scrollTrigger:{trigger:".block-3",start:"-735",end:"-150",scrub:!0,markers:!1},x:"0",opacity:1}),gsap.set(".block-3-adaptive-cards-card-2-img_adaptive",{x:"600",opacity:0}),gsap.to(".block-3-adaptive-cards-card-2-img_adaptive",{scrollTrigger:{trigger:".block-3",start:"-800",end:"150",scrub:!0,markers:!1},x:"0",opacity:1}),gsap.set(".block-3-adaptive-cards-card-2-text",{x:"-600",opacity:0}),gsap.to(".block-3-adaptive-cards-card-2-text",{scrollTrigger:{trigger:".block-3",start:"-200",end:"350",scrub:!0,markers:!0},x:"0",opacity:1}),gsap.set(".block-3-cta",{y:250,opacity:0}),gsap.to(".block-3-cta",{scrollTrigger:{trigger:".block-3",start:"50",end:"500",scrub:!0,markers:!1},opacity:1,y:350})),window.innerWidth<=520&&window.innerWidth>430&&(gsap.to(".block-3-text-left",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0,markers:!1},x:"-42%"}),gsap.to(".block-3-text-right",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0},x:"5%"}),gsap.set(".block-3-adaptive-cards-card-1-img_adaptive",{x:"600",opacity:0}),gsap.to(".block-3-adaptive-cards-card-1-img_adaptive",{scrollTrigger:{trigger:".block-3",start:"-1000",end:"-250",scrub:!0,markers:!1},x:"0",opacity:1}),gsap.set(".block-3-adaptive-cards-card-1-text",{x:"-600",opacity:0}),gsap.to(".block-3-adaptive-cards-card-1-text",{scrollTrigger:{trigger:".block-3",start:"-735",end:"-150",scrub:!0,markers:!1},x:"0",opacity:1}),gsap.set(".block-3-adaptive-cards-card-2-img_adaptive",{x:"600",opacity:0}),gsap.to(".block-3-adaptive-cards-card-2-img_adaptive",{scrollTrigger:{trigger:".block-3",start:"-800",end:"150",scrub:!0,markers:!1},x:"0",opacity:1}),gsap.set(".block-3-adaptive-cards-card-2-text",{x:"-600",opacity:0}),gsap.to(".block-3-adaptive-cards-card-2-text",{scrollTrigger:{trigger:".block-3",start:"-200",end:"350",scrub:!0,markers:!0},x:"0",opacity:1}),gsap.set(".block-3-cta",{y:250,opacity:0}),gsap.to(".block-3-cta",{scrollTrigger:{trigger:".block-3",start:"50",end:"500",scrub:!0,markers:!1},opacity:1,y:350})),window.innerWidth<=430&&(gsap.to(".block-3-text-left",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0,markers:!1},x:"-39%"}),gsap.to(".block-3-text-right",{scrollTrigger:{trigger:".block-3",start:80-window.innerHeight+"",end:480-window.innerHeight+"",scrub:!0},x:"0%"}),gsap.set(".block-3-adaptive-cards-card-1-img_adaptive",{x:"600",opacity:0}),gsap.to(".block-3-adaptive-cards-card-1-img_adaptive",{scrollTrigger:{trigger:".block-3",start:"-1000",end:"-250",scrub:!0,markers:!1},x:"0",opacity:1}),gsap.set(".block-3-adaptive-cards-card-1-text",{x:"-600",opacity:0}),gsap.to(".block-3-adaptive-cards-card-1-text",{scrollTrigger:{trigger:".block-3",start:"-735",end:"-150",scrub:!0,markers:!1},x:"0",opacity:1}),gsap.set(".block-3-adaptive-cards-card-2-img_adaptive",{x:"600",opacity:0}),gsap.to(".block-3-adaptive-cards-card-2-img_adaptive",{scrollTrigger:{trigger:".block-3",start:"-800",end:"150",scrub:!0,markers:!1},x:"0",opacity:1}),gsap.set(".block-3-adaptive-cards-card-2-text",{x:"-600",opacity:0}),gsap.to(".block-3-adaptive-cards-card-2-text",{scrollTrigger:{trigger:".block-3",start:"-200",end:"350",scrub:!0,markers:!1},x:"0",opacity:1}),gsap.set(".block-3-cta",{y:250,opacity:0}),gsap.to(".block-3-cta",{scrollTrigger:{trigger:".block-3",start:"50",end:"400",scrub:!0,markers:!1},opacity:1,y:400})),gsap.utils.toArray(".h2-text-block-4").forEach((function(r){gsap.fromTo(r,{x:200},{x:0,scrollTrigger:{trigger:r,end:"-100",scrub:!0}})})),document.querySelectorAll(".block-6-cursor").forEach((function(r){document.addEventListener("mousemove",(function(o){r.style.cssText="--move-x: ".concat(o.pageX,"px; --move-y: ").concat(o.pageY,"px;")}))})),gsap.set(".block-7-header-text-span_word",{opacity:0}),gsap.to(".block-7-header-text-span_word",{scrollTrigger:{trigger:".block-7",start:180-window.innerHeight+"",end:730-window.innerHeight+"",scrub:!0},opacity:1}),gsap.set(".block-7-form-main_text",{y:-100,opacity:0}),gsap.to(".block-7-form-main_text",{scrollTrigger:{trigger:".block-7",start:380-window.innerHeight+"",end:580-window.innerHeight+"",scrub:!0},opacity:1,y:0}),gsap.set(".block-7-form-input_name",{y:-100,opacity:0}),gsap.to(".block-7-form-input_name",{scrollTrigger:{trigger:".block-7",start:580-window.innerHeight+"",end:730-window.innerHeight+"",scrub:!0},opacity:1,y:0}),gsap.set(".block-7-form-input-email",{y:-50,opacity:0}),gsap.to(".block-7-form-input-email",{scrollTrigger:{trigger:".block-7",start:"-350",end:"-250",scrub:!0},opacity:1,y:0}),gsap.set(".block-7-form-button",{opacity:0}),gsap.to(".block-7-form-button",{scrollTrigger:{trigger:".block-7",start:"-300",end:"-150",scrub:!0},opacity:1.5});document.querySelector(".footer-logo");gsap.set(".footer-logo",{y:-100,opacity:0}),gsap.to(".footer-logo",{y:0,opacity:1,scrollTrigger:{trigger:".footer-logo",toggleActions:"restart none none none"},duration:1.5,scrub:!0}),gsap.set(".nav-footer-item",{x:-100,opacity:0}),gsap.to(".nav-footer-item",{x:0,opacity:1,scrollTrigger:{trigger:".nav-footer-item",toggleActions:"restart none none none"},duration:1,scrub:!0}),gsap.set(".ul-foo",{x:100,opacity:0}),gsap.to(".ul-foo",{x:0,opacity:1,scrollTrigger:{trigger:".ul-foo",toggleActions:"restart none none none"},duration:.7,scrub:!0}),gsap.set(".footer-or",{x:-100,opacity:0}),gsap.to(".footer-or",{x:0,opacity:1,scrollTrigger:{trigger:".footer-or",toggleActions:"restart none none none"},duration:.7,scrub:!0})}))}