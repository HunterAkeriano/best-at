import{a as r,c as n,Z as l,$ as u,a0 as i,D as o}from"./index-babbce2f.js";const p={__name:"HelpersPage",setup(d){async function s(){const t=await l(u(o,"publicTeachers")),e=i(o);t.forEach(c=>{const a=c.ref;e.delete(a)});try{await e.commit(),console.log("All documents deleted successfully.")}catch(c){console.error("Error deleting documents:",c)}}return(t,e)=>(r(),n("button",{onClick:s},"Удалить юзеров"))}};export{p as default};
