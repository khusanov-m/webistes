"use strict";const featureCardsContainer=document.getElementById("feature__cards"),featureLeftBtn=document.getElementById("feature-left"),featureRightBtn=document.getElementById("feature-right"),featureCards=document.querySelectorAll(".feature__card");let idx=0,interval=setInterval(run,2e3);function run(){idx++,changeImage()}function changeImage(){idx>featureCards.length-1?idx=0:idx<0&&(idx=featureCards.length-1),featureCardsContainer.style.transform=`translateX(${50*-idx}rem)`}function resetInterval(){clearInterval(interval),interval=setInterval(run,2e3)}featureRightBtn.addEventListener("click",()=>{idx++,changeImage(),resetInterval()}),featureLeftBtn.addEventListener("click",()=>{idx--,changeImage(),resetInterval()});const perfumes=document.getElementById("perfumes"),rightBtn=document.getElementById("right"),leftBtn=document.getElementById("left"),perfume2=document.getElementById("bg-perfume-2"),perfume3=document.getElementById("bg-perfume-3"),bgCircle3=document.querySelector(".bg-circle--3");let x=0;rightBtn.addEventListener("click",()=>{perfumes.style.transform=`translateX(${x-20}rem)`,perfume2.classList.remove("active"),perfume3.classList.add("active"),document.documentElement.clientWidth<=1500&&(perfumes.style.transform=`translateX(${x-25}rem)`),document.documentElement.clientWidth<=900&&(perfumes.style.transform=`translateX(${x-50}rem)`),document.documentElement.clientWidth<=800&&(perfumes.style.transform=`translateX(${x-65}rem)`),document.documentElement.clientWidth<=700&&(perfumes.style.transform=`translateX(${x-85}rem)`),document.documentElement.clientWidth<=600&&(perfumes.style.transform=`translateX(${x-70}rem)`),document.documentElement.clientWidth<=500&&(perfumes.style.transform=`translateX(${x-74}rem)`),document.documentElement.clientWidth<=400&&(perfumes.style.transform=`translateX(${x-67}rem)`)}),leftBtn.addEventListener("click",()=>{perfumes.style.transform=`translateX(${x}px)`,perfume3.classList.remove("active"),perfume2.classList.add("active")});