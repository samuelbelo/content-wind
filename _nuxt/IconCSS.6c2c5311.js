import{d as p,ay as d,x as m,I as a,b as x,c as S,a1 as I,l as f}from"./entry.c8496453.js";const v=p({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){var c;const s=u;d(n=>({fdac8218:_.value}));const e=m();(c=e==null?void 0:e.nuxtIcon)!=null&&c.aliases;const l=a(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),_=a(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),o=a(()=>{var t,r,i;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((r=e.nuxtIcon)!=null&&r.size))return;const n=s.size||((i=e.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(x(),S("span",{style:I({width:o.value,height:o.value})},null,4))}});const z=f(v,[["__scopeId","data-v-abe1e2b4"]]);export{z as default};
