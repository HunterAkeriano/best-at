import{V as c,r as i,a as u,c as v,d as s,G as _,H as p,I as g,f as d,t as h,g as m,w as f,i as w,W as k,K as y,h as S}from"./index-b3376b73.js";import{I as x,a as V}from"./ShowPassTwo-5a6e1d2c.js";const b={class:"login"},E={class:"container"},I=s("div",{class:"login__links"},[s("p",null,"Главная"),s("span",null,"/"),s("p",null,"Авторизация")],-1),O={class:"login__forms"},D=s("h3",null,"Авторизация",-1),N={class:"login__forms-block"},B={class:"login__forms-input"},C=s("h5",null,"Ваш email",-1),P={class:"login__forms-input",style:{"margin-top":"15px"}},R=s("h5",null,"Ваш пароль",-1),W=["type"],A={class:"login__forms-btn"},U={__name:"LoginViews",setup(H){c();const t=i(!0),o=i(""),a=i({login:"",password:""});async function r(){k(y,a.value.login,a.value.password).then(n=>{localStorage.setItem("user",JSON.stringify(n.user))}).catch(n=>{switch(n.code){case"auth/invalid-email":o.value="Не верный емаил";break;case"auth/user-not-found":o.value="Пользователь не найден";break;case"auth/wrong-password":o.value="Не верный пароль";break;default:o.value="Неизвестная ошибка";break}})}return(n,e)=>(u(),v("div",b,[s("div",E,[I,s("div",O,[D,s("div",N,[s("div",B,[C,_(s("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>a.value.login=l)},null,512),[[p,a.value.login]])]),s("div",P,[R,_(s("input",{type:t.value?"password":"text","onUpdate:modelValue":e[1]||(e[1]=l=>a.value.value=l)},null,8,W),[[g,a.value.value]]),t.value?(u(),d(x,{key:0,onClick:e[2]||(e[2]=l=>t.value=!t.value),class:"showpass"})):(u(),d(V,{key:1,onClick:e[3]||(e[3]=l=>t.value=!t.value),class:"showpass"}))]),s("p",null,h(o.value),1),s("div",A,[m(w,{width:130,padding:9,lineHeight:21,style:{"margin-top":"20px"},onClick:r},{default:f(()=>[S("Войти")]),_:1})])])])])]))}};export{U as default};
