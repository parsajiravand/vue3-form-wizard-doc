import{_ as r,r as s,o as i,f as _,w as t,a as o,d as n}from"./app.54491f80.js";const d={methods:{onComplete:function(){alert("Yay. Done!")}}},l=n(" My first tab content "),p=n(" My second tab content "),u=n(" Yuhuuu! This seems pretty damn simple ");function f(m,h,C,b,x,a){const e=s("tab-content"),c=s("form-wizard");return i(),_(c,{onOnComplete:a.onComplete,shape:"square",color:"#3498db"},{default:t(()=>[o(e,{title:"Personal details",icon:"ti-user"},{default:t(()=>[l]),_:1}),o(e,{title:"Additional Info",icon:"ti-settings"},{default:t(()=>[p]),_:1}),o(e,{title:"Last step",icon:"ti-check"},{default:t(()=>[u]),_:1})]),_:1},8,["onOnComplete"])}const y=r(d,[["render",f],["__file","squared-step.vue"]]);export{y as default};