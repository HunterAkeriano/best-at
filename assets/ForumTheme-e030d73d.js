import{T as w}from"./ThePagination-233476a2.js";import{s as I,T as B}from"./StateForum-647b8dfb.js";import{_ as C,a6 as D,r as _,s as N,q as P,I as S,a as u,c,u as d,b as e,t as r,F as V,e as E,h as M,d as p,k as O,l as $,$ as q,G,m as h,g as f,w as L,i as g,p as R,f as U}from"./index-7e2379f8.js";const n=l=>(R("data-v-dfb16143"),l=l(),U(),l),j={class:"forum"},z={key:0,class:"container"},A=n(()=>e("span",null,"/",-1)),H=n(()=>e("p",null,"Список разделов форума",-1)),J=n(()=>e("span",null,"/",-1)),K=n(()=>e("p",null,"Список тем форума",-1)),Q={class:"forum__title"},W=n(()=>e("h4",null,"Форум",-1)),X=n(()=>e("div",{class:"forum__el"},[e("p",null,"Название тем"),e("p",null,"Обновления"),e("p",null,"Темы"),e("p",null,"Создана")],-1)),Y={class:"forum__theme",style:{height:"432px","border-bottom":"1px solid #ccc"}},Z={class:"forum__theme-item"},ee={__name:"ForumTheme",setup(l){const v=D(),t=I(),i=_(1);function F(){let o=(i.value-1)*9,s=o+9;return t.forum[t.idForum].theme.slice(o,s)}const m=N(()=>Math.ceil(t.forum[t.idForum].theme.length/9));function k(o){i.value=o}async function x(){if(t.forum.length>0)return;(await O($(h,"forum"))).forEach(s=>{t.forum.push({idx:s.id,id:s.data().id,router:s.data().router,theme:s.data().theme,timed:s.data().timed,title:s.data().title})})}P(()=>{x().then(()=>{t.forum.forEach(o=>{o.router==v.params.id&&(t.idForum=o.id)})})});const y=_([{id:2,title:"Влад учит новые слова",inOut:"Владислав Андрейко",timed:"28.08.2023",out:"Николай Николаевич",messangers:[],created:"29.08.2023",router:"theme-lessons-word"}]);async function T(){t.forum[t.idForum].theme.push(y.value[0]);const o={theme:t.forum[t.idForum].theme};await q(G(h,"forum",t.forum[t.idForum].idx),o)}return(o,s)=>{const b=S("router-link");return u(),c("div",j,[d(t).idForum!==null?(u(),c("div",z,[e("div",{class:"forum__links"},[e("p",{onClick:T},"Главная"),A,H,J,K]),e("div",Q,[W,e("h5",null,r(d(t).forum[d(t).idForum].title),1)]),X,e("div",Y,[(u(!0),c(V,null,E(F(),a=>(u(),c("div",Z,[f(b,{to:{path:`/forum/${a.router}`}},{default:L(()=>[f(B),e("p",null,[g(r(a.title)+" ",1),e("span",null,"от "+r(a.inOut),1)]),e("p",null,[g(r(a.timed)+" ",1),e("span",null,"от "+r(a.out),1)]),e("p",null,r(a.messangers.length),1),e("p",null,r(a.timed),1)]),_:2},1032,["to"])]))),256))]),m.value>1?(u(),M(w,{key:0,"total-pages":m.value,"current-page":i.value,onChangePage:k},null,8,["total-pages","current-page"])):p("",!0)])):p("",!0)])}}},ae=C(ee,[["__scopeId","data-v-dfb16143"]]);export{ae as default};