import{r as s,a as L,c as D,y as o,z as a,b as l,C as T,D as k,E as B,G as E,H as C}from"./index-71b7d9d9.js";const H={class:"help",style:{"margin-top":"100px"}},I={class:"lol"},P={class:"lol"},z={class:"lol"},A={class:"lol"},G={class:"lol"},M={class:"lol"},N={class:"lol"},W={class:"lol"},$={class:"lol"},j={class:"lol"},q={class:"lol"},F={class:"lol"},J={class:"lol"},K={class:"lol"},O={class:"lol"},Q={class:"lol"},X={__name:"HelpersPage",setup(R){const n=s(""),u=s(""),d=s(""),p=s(""),i=s(""),v=s(""),r=s(""),m=s(""),c=s(""),y=s(""),U=s(""),b=s(""),V=s(""),h=s(""),x=s(""),g=s(""),f=s("");async function w(){let _="teacher-"+Date.now();const e={nameUser:n.value,countryUser:u.value,teacherLessons:d.value,youtbeIframe:p.value,payment:i.value,timedLessons:v.value,langTeacher:r.value,mans:m.value,testing:c.value,asspcts:y.value,age:U.value,rate:b.value,students:V.value,isLessons:h.value,id:_};await T(k,x.value,g.value),await B(E(C,"publicTeacher",`${_}`),e)}return(_,e)=>(L(),D("div",H,[o(l("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>n.value=t),placeholder:"Имя Фамилия"},null,512),[[a,n.value]]),l("div",I,[o(l("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=t=>u.value=t),placeholder:"Страна цифрой"},null,512),[[a,u.value]])]),l("div",P,[o(l("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=t=>d.value=t),placeholder:"Язык обучения цифрой"},null,512),[[a,d.value]])]),l("div",z,[o(l("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=t=>p.value=t),placeholder:"Ссылка на видео из айфрейма"},null,512),[[a,p.value]])]),l("div",A,[o(l("input",{type:"number","onUpdate:modelValue":e[4]||(e[4]=t=>i.value=t),placeholder:"Цена цифрой"},null,512),[[a,i.value]])]),l("div",G,[o(l("input",{type:"number","onUpdate:modelValue":e[5]||(e[5]=t=>v.value=t),placeholder:"Время преподавания цифрой"},null,512),[[a,v.value]])]),l("div",M,[o(l("input",{type:"number","onUpdate:modelValue":e[6]||(e[6]=t=>r.value=t),placeholder:"Язык общения цифрой"},null,512),[[a,r.value]])]),l("div",N,[o(l("input",{type:"number","onUpdate:modelValue":e[7]||(e[7]=t=>m.value=t),placeholder:"Пол цифрой"},null,512),[[a,m.value]])]),l("div",W,[o(l("input",{type:"number","onUpdate:modelValue":e[8]||(e[8]=t=>c.value=t),placeholder:"Подготовка к тестам цифрой"},null,512),[[a,c.value]])]),l("div",$,[o(l("input",{type:"number","onUpdate:modelValue":e[9]||(e[9]=t=>y.value=t),placeholder:"Аспекты обучения цифрой"},null,512),[[a,y.value]])]),l("div",j,[o(l("input",{type:"number","onUpdate:modelValue":e[10]||(e[10]=t=>U.value=t),placeholder:"Возраст цифрой массива"},null,512),[[a,U.value]])]),l("div",q,[o(l("input",{type:"number","onUpdate:modelValue":e[11]||(e[11]=t=>b.value=t),placeholder:"Рейтинг от 1 до 5"},null,512),[[a,b.value]])]),l("div",F,[o(l("input",{type:"number","onUpdate:modelValue":e[12]||(e[12]=t=>V.value=t),placeholder:"Кол-во учеников"},null,512),[[a,V.value]])]),l("div",J,[o(l("input",{type:"number","onUpdate:modelValue":e[13]||(e[13]=t=>h.value=t),placeholder:"Кол-во уроков"},null,512),[[a,h.value]])]),l("div",K,[o(l("input",{type:"text","onUpdate:modelValue":e[14]||(e[14]=t=>f.value=t),placeholder:"Описание"},null,512),[[a,f.value]])]),l("div",O,[o(l("input",{type:"text","onUpdate:modelValue":e[15]||(e[15]=t=>x.value=t),placeholder:"email"},null,512),[[a,x.value]])]),l("div",Q,[o(l("input",{type:"text","onUpdate:modelValue":e[16]||(e[16]=t=>g.value=t),placeholder:"password"},null,512),[[a,g.value]])]),l("button",{onClick:w},"Отправть данные на сервак")]))}};export{X as default};
