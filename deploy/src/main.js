/*!
 * Sat Mar 24 2012 03:18:38 GMT-0400 (EDT)
 */
define("ModuleA",[],function(){return{name:"Module A"}}),define("ModuleB",["ModuleA"],function(){return{name:"Module B"}}),define("ModuleC",["ModuleA","ModuleB"],function(a,b){return{name:a.name+", "+b.name+", "+"Module C"}}),require.config({paths:{ModuleA:"app/module.a",ModuleB:"app/module.b",ModuleC:"app/module.c"}}),require(["ModuleC"],function(a){document.getElementById("message").innerHTML=a.name}),define("main",function(){})