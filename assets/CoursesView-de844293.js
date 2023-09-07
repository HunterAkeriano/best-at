import{_ as Y,L as ee,a as m,c as I,b as e,t as u,u as c,T as r,e as o,w as V,g as L,f as S,p as j,k as D,r as _,l as te,m as se,n as P,v as A,F as ae,d as le,q as E,s as F,h as M,i as q,x as ne,j as U}from"./index-d52695da.js";import{T as ie}from"./ThePagination-233397cf.js";import{_ as v}from"./TheSelect-0d37ec32.js";const g=a=>(j("data-v-5d2411b9"),a=a(),D(),a),oe={class:"course"},ce={class:"course__date"},re={class:"course__title"},ue={class:"course__teacher"},_e=["src"],de=g(()=>e("div",{class:"course__teacher-position"},"преподаватель",-1)),ve={class:"course__teacher-name"},he={class:"course__tags"},me={class:"course__tags-item course__tags-item--mini course__tags-item--time"},pe={class:"course__tags-item course__tags-item--mini course__tags-item--lvl"},ge={class:"course__tags-item course__tags-item--mini course__tags-item--years"},fe={class:"course__first-row"},ye={style:{"margin-right":"40px"}},be=g(()=>e("div",{class:"course__label"},"Зарегистрировались",-1)),xe={class:"course__value"},$e=g(()=>e("div",{class:"course__label"},"Максимум:",-1)),Ie={class:"course__value"},Te=g(()=>e("hr",null,null,-1)),we={class:"course__row"},Ce=g(()=>e("p",null,"Стоимость курса",-1)),Ve={__name:"CourseCard",props:{card:{type:Object,default:()=>{}},teacher:{type:Object,default:()=>{}}},setup(a){return(d,f)=>{const T=ee("router-link");return m(),I("div",oe,[e("div",ce,u(a.card.date),1),e("div",re,u(a.card.name),1),e("div",ue,[e("img",{class:"course__teacher-pfp",src:a.teacher.photo,alt:"",width:"50",height:"50"},null,8,_e),e("div",null,[de,e("div",ve,u(a.teacher.name),1)])]),e("div",he,[e("div",me,u(c(r).timeLessons[a.card.time].title),1),e("div",pe,u(c(r).typed[a.card.lvl].title),1),e("div",ge,u(c(r).years[a.card.years].title),1)]),e("div",fe,[e("div",ye,[be,e("div",xe,u(a.card.student.length)+" человек",1)]),e("div",null,[$e,e("div",Ie,u(a.card.maxStudent)+" человек",1)])]),Te,e("div",we,[Ce,e("span",null,u(a.card.pricelessons)+" $",1)]),o(T,{to:{path:`/courses/${a.card.id}`}},{default:V(()=>[o(L,{width:380,padding:16,"uppercase-text":""},{default:V(()=>[S(" Забронировать ")]),_:1})]),_:1},8,["to"])])}}},Se=Y(Ve,[["__scopeId","data-v-5d2411b9"]]);const i=a=>(j("data-v-9dc4106a"),a=a(),D(),a),Ne={class:"main page"},ke={class:"container"},Be=i(()=>e("div",{class:"page__navigation"},[e("a",{class:"page__navigation-link"}," Главная "),e("p",{class:"page__navigation-current"},[e("span",null,"/"),S(" Список курсов ")])],-1)),Pe=i(()=>e("h1",{class:"page__title"},"Список курсов",-1)),Ae={class:"page__content"},Ee={class:"page__content-filter"},Fe=i(()=>e("div",{class:"filter__title"},"Фильтры",-1)),Me=i(()=>e("div",{class:"filter__label"},"Язык преподавания",-1)),qe=i(()=>e("div",{class:"filter__label"},"Время преподавания",-1)),Ue=i(()=>e("div",{class:"filter__label"},"Страна преподавателя",-1)),Ye=i(()=>e("div",{class:"filter__label"},"Язык общения",-1)),Le={class:"filter__range"},je=i(()=>e("div",{class:"filter__label"},"Цена",-1)),De={class:"range"},Oe={class:"range__input"},Ge={class:"range__input-one"},He=i(()=>e("span",null,"-",-1)),Re={class:"range__input-two"},ze=["max"],Je={class:"range__slider"},Ke=i(()=>e("div",{class:"filter__label"},"Пол",-1)),Qe=i(()=>e("div",{class:"filter__label"},"Подготовка к тестам",-1)),We=i(()=>e("div",{class:"filter__label"},"Аспекты обучения",-1)),Xe=i(()=>e("div",{class:"filter__label"},"Возраст обучения",-1)),Ze={key:0,class:"page__content-wrapper"},et={class:"page__content-courses"},tt={__name:"CoursesView",setup(a){const d=_([]),f=_([]);async function T(){(await M(q(U,"publishedTeachers"))).forEach(s=>{f.value.push(s.data())})}async function O(){(await M(q(U,"course"))).forEach(s=>{d.value.push(s.data())})}function G(t){const s=f.value[t].photo,l=f.value[t].nameUser;return{photo:s,name:l}}const n=_([0,1e6]),N=_(0),h=_(1e6);function H(){let t=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,l;for(let C=d.value.length-1;C>=0;C--)l=+d.value[C].pricelessons,l<t&&(t=l),l>s&&(s=l);n.value[0]=N.value=t,n.value[1]=h.value=s}te(()=>{T(),O().then(()=>{H(),$()})});const y=_(!1),b=_(void 0);function R(t){b.value=t}function z(t){const s=t.target.value.replace(/[^0-9]/g,"");n.value[0]=s!==""?parseInt(s):0,n.value[0]>h.value&&(n.value[0]=h.value)}function J(t){const s=t.target.value.replace(/[^0-9]/g,"");n.value[1]=s!==""?parseInt(s):0,n.value[1]>h.value&&(n.value[1]=h.value)}const x=_(void 0);function K(t){x.value=t}function Q(){return b.value!==void 0?d.value.filter(t=>t.time===b.value):d.value}function k(){return Q().filter(t=>Number(t.pricelessons)>=n.value[0]&&Number(t.pricelessons)<=n.value[1])}function w(){return x.value!==void 0?k().filter(t=>t.years===x.value):k()}const p=_(1),B=se(()=>y.value?Math.ceil(w().length/6):Math.ceil(d.value.length/6));function W(t){p.value=t}function $(){let t=(p.value-1)*6,s=t+6;return y.value?(console.log(w()),w().slice(t,s)):d.value.slice(t,s)}function X(){$(),y.value=!0,p.value=1}function Z(){b.value=void 0,x.value=void 0,y.value=!1,p.value=1}return(t,s)=>(m(),I("div",Ne,[e("div",ke,[Be,Pe,e("div",Ae,[e("div",Ee,[Fe,Me,o(v,{items:c(r).langeuages,style:{"margin-bottom":"15px"}},null,8,["items"]),qe,o(v,{onSetActiveSelect:R,items:c(r).times,style:{"margin-bottom":"15px"}},null,8,["items"]),Ue,o(v,{items:c(r).country,style:{"margin-bottom":"15px"}},null,8,["items"]),Ye,o(v,{items:c(r).langeuages,style:{"margin-bottom":"15px"}},null,8,["items"]),e("div",Le,[je,e("div",De,[e("div",Oe,[e("div",Ge,[P(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=l=>n.value[0]=l),onInput:z},null,544),[[A,n.value[0]]])]),He,e("div",Re,[P(e("input",{type:"text",max:h.value,"onUpdate:modelValue":s[1]||(s[1]=l=>n.value[1]=l),onInput:J},null,40,ze),[[A,n.value[1]]])])]),e("div",Je,[o(c(ne),{modelValue:n.value,"onUpdate:modelValue":s[2]||(s[2]=l=>n.value=l),min:N.value,max:h.value,step:100},null,8,["modelValue","min","max"])])])]),Ke,o(v,{items:c(r).gender,style:{"margin-bottom":"15px"}},null,8,["items"]),Qe,o(v,{items:c(r).timeLessons,style:{"margin-bottom":"15px"}},null,8,["items"]),We,o(v,{items:c(r).asspects,style:{"margin-bottom":"15px"}},null,8,["items"]),Xe,o(v,{onSetActiveSelect:K,items:c(r).years,style:{"margin-bottom":"15px"}},null,8,["items"]),o(L,{width:220,padding:16,"uppercase-text":"",class:"filter__button",onClick:X},{default:V(()=>[S(" Применить ")]),_:1}),e("div",{class:"filter__reset",onClick:Z},"Сбросить фильтр")]),$().length>0?(m(),I("div",Ze,[e("div",et,[(m(!0),I(ae,null,le($(),l=>(m(),E(Se,{key:l.idx,card:l,teacher:G(l.teachers)},null,8,["card","teacher"]))),128))]),B.value>1?(m(),E(ie,{key:0,"total-pages":B.value,"current-page":p.value,onChangePage:W},null,8,["total-pages","current-page"])):F("",!0)])):F("",!0)])])]))}},nt=Y(tt,[["__scopeId","data-v-9dc4106a"]]);export{nt as default};