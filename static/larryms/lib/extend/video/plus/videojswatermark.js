(function(i){if(window.layui&&layui.define){layui.define("videojs",function(e){var n=layui.videojs;e("videojswatermark",i(n))})}else if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=i()}else if(typeof define==="function"&&define.amd){define([],i)}else{var e;if(typeof window!=="undefined"){e=window}else if(typeof global!=="undefined"){e=global}else if(typeof self!=="undefined"){e=self}else{e=this}e.videojsWatermark=i()}})(function(s){layui.link(layui.cache.base+"lib/extend/video/plus/css/videojs-watermark.css");var e,n,i;return function a(o,d,f){function u(i,e){if(!d[i]){if(!o[i]){var n=typeof require=="function"&&require;if(!e&&n)return n(i,!0);if(l)return l(i,!0);var t=new Error("Cannot find module '"+i+"'");throw t.code="MODULE_NOT_FOUND",t}var r=d[i]={exports:{}};o[i][0].call(r.exports,function(e){var n=o[i][1][e];return u(n?n:e)},r,r.exports,a,o,d,f)}return d[i].exports}var l=typeof require=="function"&&require;for(var e=0;e<f.length;e++)u(f[e]);return u}({1:[function(e,u,l){(function(e){"use strict";Object.defineProperty(l,"__esModule",{value:true});function n(e){return e&&e.__esModule?e:{default:e}}var i=typeof window!=="undefined"?window["videojs"]:typeof e!=="undefined"?e["videojs"]:null;var t=n(i);var r={position:"top-right",fadeTime:3e3,url:undefined,image:undefined};var a=function e(n,i){var t=n.el();var r=document.createElement("div");var a=document.createElement("img");r.classList.add("vjs-watermark-content");r.classList.add("vjs-watermark-"+i.position);a.src=i.image;if(i.url){var o=document.createElement("a");o.href=i.url;o.onclick=function(e){e.preventDefault();n.pause();window.open(i.url)};o.appendChild(a);r.appendChild(o)}else{r.appendChild(a)}t.appendChild(r)};var o=function e(n){setTimeout(function(){return document.getElementsByClassName("vjs-watermark-content")[0].classList.add("vjs-watermark-fade")},n.fadeTime)};var d=function e(n,i){n.addClass("vjs-watermark");if(!i.image){return}a(n,i);if(i.fadeTime===null){return}n.on("play",function(){return o(i)})};var f=function e(n){var i=this;this.ready(function(){d(i,s.mergeOptions(r,n))})};s.registerPlugin("watermark",f);f.VERSION="2.0.0";l["default"]=f;u.exports=l["default"]}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}]},{},[1])(1)});