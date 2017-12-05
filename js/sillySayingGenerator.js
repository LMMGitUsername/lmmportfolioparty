/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var sayings = new Array("upsetting by design!","chickachickacha!","pensively pizza-eating", "lovingly crafting", "anxiously snarfing", "bad and klugey", "thinkin' 'bout dancin'", "Why so serious?", "artin' 'n' fartin'", "WAT", "strivin' 'n' thrivin'?", "caution", "♪ it's not a sexual thing ♫", "♪ it is a sexual thing ♫");

var res = sayings[Math.floor(Math.random() * sayings.length)];  
/*
document.getElementById("randomText").innerText = res;
*/
/*
var randomTextNode = document.createTextNode(res);
document.getElementById("randomText").appendChild(randomTextNode);
*/
/*
var p = document.createElement("h6");
var t = document.createTextNode(res);
p.appendChild(t);
document.getElementById("randomText").appendChild(p);
*/
var mydiv = document.getElementById("randomText");
var randomText = document.createElement('h6');
randomText.innerText = res;
mydiv.appendChild(randomText); 
