import{r as c,o as k,ad as E,a as l,c as n,b as a,t as d,e as C,ai as y,F as S,d as h,E as w}from"./index-d52695da.js";const L={class:"select-comp__item"},g=["onClick"],N={__name:"TheSelect",props:{items:{type:Array,default:()=>[]},idx:{type:Number,default:0}},emits:["setActiveSelect","click"],setup(o,{emit:m}){const s=o,i=c(s.items[s.idx]),e=c(!1);function _(){e.value=!e.value}function p(t){e.value=!1,i.value=s.items[t],m("setActiveSelect",t)}k(()=>{window.addEventListener("click",u)}),E(()=>{window.removeEventListener("click",u)});const r=c(null);function u(t){e.value&&!r.value.contains(t.target)&&(e.value=!1)}return(t,x)=>(l(),n("div",{class:w(["select-comp",{"select-comp_opened":e.value}]),ref_key:"selectComp",ref:r},[a("div",{class:"select-comp__selected",onClick:_},[a("p",null,d(i.value.title),1),C(y)]),a("div",L,[(l(!0),n(S,null,h(o.items,(v,f)=>(l(),n("p",{onClick:A=>p(f)},d(v.title),9,g))),256))])],2))}};export{N as _};
