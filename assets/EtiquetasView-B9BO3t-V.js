import{g as l,j as e,ab as J,a2 as U,z as le,ac as V,a0 as re,a as oe,S as ie,ad as ne,ae as ce,a1 as de,af as xe,ag as me}from"./ui-B8KUiVVv.js";import{E as pe}from"./pdf-B75Uh8yG.js";const C=o=>o.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),c={pequena:{label:"Geladeira 70x30",detail:"7 x 3 cm",className:"w-[420px] h-[180px]",pdf:[70,30]},media:{label:"Prateleira 70x30",detail:"7 x 3 cm",className:"w-[420px] h-[180px]",pdf:[70,30]},grande:{label:"Destaque 70x30",detail:"7 x 3 cm",className:"w-[420px] h-[180px]",pdf:[70,30]},extra:{label:"Promo 70x30",detail:"7 x 3 cm",className:"w-[420px] h-[180px]",pdf:[70,30]}},w={simples:{title:"Simples",subtitle:"Padrão",icon:J},promocao:{title:"Promoção",subtitle:"Destaque",icon:ie},geladeira:{title:"Geladeira",subtitle:"Letra grande",icon:oe},a4:{title:"Grande (A4)",subtitle:"Cartaz",icon:re}};function ue({products:o}){var H;const[i,N]=l.useState("produto"),[v,Q]=l.useState(""),[S,L]=l.useState(((H=o[0])==null?void 0:H.id)||""),[z,P]=l.useState(""),[$,A]=l.useState(""),[d,y]=l.useState("CERVEJA GELADA"),[_,E]=l.useState("simples"),[m,R]=l.useState("pequena"),[W,F]=l.useState(!0),[Z,D]=l.useState(!0),[K,T]=l.useState(!1),[p,b]=l.useState(1),[B,q]=l.useState(null),[O,M]=l.useState([]),X=l.useRef(null),Y=l.useMemo(()=>{const t=v.trim().toLowerCase();return t?o.filter(a=>a.name.toLowerCase().includes(t)||a.category.toLowerCase().includes(t)).slice(0,12):o.slice(0,10)},[o,v]),n=o.find(t=>t.id===S)||o[0],f=i==="produto"?(n==null?void 0:n.price)||0:Number($.replace(",","."))||0,g=i==="produto"?(n==null?void 0:n.name)||"Produto":z.trim()||"PROMOÇÃO DO DIA";i==="produto"&&n!=null&&n.category;const I=t=>{var r;const a=(r=t.target.files)==null?void 0:r[0];if(!a)return;const s=new FileReader;s.onload=()=>q(String(s.result)),s.readAsDataURL(a)},ee=()=>{P(""),A(""),y("CERVEJA GELADA"),E("simples"),R("pequena"),F(!0),D(!0),T(!1),b(1),q(null)},k=t=>{const a=new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});M(s=>[`${a} • ${t}: ${g} ${C(f)}`,...s].slice(0,8))},te=(t=!1)=>{const[a,s]=c[m].pdf,r=t?{width:`${a}mm`,height:`${s}mm`,borderRadius:"0",boxShadow:"none"}:void 0;return e.jsxs("div",{className:`${t?"":c[m].className} relative overflow-hidden bg-white text-black shadow-2xl flex flex-col`,style:r,children:[e.jsx("div",{className:"h-[21%] flex items-center justify-center bg-black text-white",children:e.jsx("span",{className:"font-display font-black uppercase tracking-[0.18em] text-[13px]",children:"PIT STOP COHAB"})}),e.jsxs("div",{className:"flex-1 px-3 py-1.5 flex flex-col items-center justify-center text-center",children:[d&&e.jsx("div",{className:"text-[9px] font-black uppercase tracking-[0.18em] text-slate-600 leading-none mb-1 max-w-full truncate",children:d}),e.jsx("h2",{className:"font-display font-black uppercase leading-[0.95] tracking-tight text-[24px] text-black max-w-full whitespace-normal break-words line-clamp-2",children:g}),e.jsxs("div",{className:"mt-1 flex items-end justify-center gap-1.5 font-display font-black leading-none text-black",children:[e.jsx("span",{className:"text-[18px] mb-1",children:"R$"}),e.jsx("span",{className:"text-[44px] tracking-tighter",children:f.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})})]})]})]})},se=()=>{k("Impressão");const[t,a]=c[m].pdf,s=f.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),r=g.toUpperCase(),x=d.toUpperCase(),j=`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Etiqueta PitStop Cohab 70x30</title>
          <style>
            @page { size: ${t}mm ${a}mm; margin: 0; }
            * { box-sizing: border-box; }
            html, body {
              width: ${t}mm;
              min-height: ${a}mm;
              margin: 0;
              padding: 0;
              background: #fff;
              font-family: Arial, Helvetica, sans-serif;
            }
            .label-page {
              width: ${t}mm;
              height: ${a}mm;
              page-break-after: always;
              overflow: hidden;
              background: #fff;
              color: #000;
              display: flex;
              flex-direction: column;
            }
            .brand {
              height: 6.2mm;
              background: #000;
              color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 9pt;
              font-weight: 900;
              letter-spacing: 1.4pt;
              text-transform: uppercase;
              white-space: nowrap;
            }
            .body {
              flex: 1;
              padding: 1.2mm 2.2mm 0.8mm;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
            }
            .small {
              font-size: 5.8pt;
              font-weight: 900;
              letter-spacing: 1.1pt;
              color: #444;
              text-transform: uppercase;
              line-height: 1;
              max-width: 65mm;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-bottom: 0.7mm;
            }
            .name {
              width: 65mm;
              min-height: 7mm;
              max-height: 9mm;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: ${r.length>22?"12.5pt":r.length>16?"14.5pt":"16.5pt"};
              font-weight: 900;
              line-height: 0.95;
              text-transform: uppercase;
              overflow: hidden;
              word-break: normal;
              overflow-wrap: anywhere;
            }
            .price {
              margin-top: 0.4mm;
              display: flex;
              align-items: flex-end;
              justify-content: center;
              gap: 1.1mm;
              font-weight: 900;
              line-height: 0.86;
            }
            .currency {
              font-size: 12pt;
              padding-bottom: 1.2mm;
            }
            .value {
              font-size: 30pt;
              letter-spacing: -1pt;
            }
          </style>
        </head>
        <body>
          ${Array.from({length:p}).map(()=>`
            <div class="label-page">
              <div class="brand">PIT STOP COHAB</div>
              <div class="body">
                ${x?`<div class="small">${x}</div>`:""}
                <div class="name">${r}</div>
                <div class="price"><span class="currency">R$</span><span class="value">${s}</span></div>
              </div>
            </div>`).join("")}
          <script>window.onload = () => setTimeout(() => window.print(), 300);<\/script>
        </body>
      </html>`,h=window.open("","_blank");h&&(h.document.write(j),h.document.close())},ae=()=>{k("PDF");const[t,a]=c[m].pdf,s=new pe({orientation:"landscape",unit:"mm",format:[t,a]}),r=f.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),x=g.toUpperCase(),j=d.toUpperCase(),h=(u=!1)=>{u||s.addPage([t,a],"landscape"),s.setFillColor(255,255,255),s.rect(0,0,t,a,"F"),s.setFillColor(0,0,0),s.rect(0,0,t,6.2,"F"),s.setFont("helvetica","bold"),s.setTextColor(255,255,255),s.setFontSize(9),s.text("PIT STOP COHAB",t/2,4.25,{align:"center"}),s.setTextColor(68,68,68),s.setFontSize(5.8),j&&s.text(j,t/2,9.8,{align:"center",maxWidth:64}),s.setTextColor(0,0,0),s.setFontSize(x.length>22?12.5:x.length>16?14.5:16.5);const G=s.splitTextToSize(x,64).slice(0,2);s.text(G,t/2,G.length>1?15.1:16.8,{align:"center",lineHeightFactor:.85}),s.setFontSize(12),s.text("R$",21,26.2),s.setFontSize(30),s.text(r,44,27.1,{align:"center"})};for(let u=0;u<p;u+=1)h(u===0);s.save(`etiqueta-pitstop-70x30-${g.toLowerCase().replace(/[^a-z0-9]+/g,"-")||"produto"}.pdf`)};return e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(J,{className:"w-7 h-7 text-gold-500"}),e.jsx("h1",{className:"font-display font-black text-3xl text-white tracking-tight",children:"Etiquetas"})]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Etiqueta limpa 70x30mm para geladeira: marca simples, produto legível e preço grande."})]}),e.jsxs("button",{type:"button",onClick:()=>M([]),className:"px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm font-bold text-slate-300 hover:text-white hover:border-gold-500/40 transition flex items-center gap-2",children:[e.jsx(U,{className:"w-4 h-4"})," Limpar histórico"]})]}),e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-[1fr_1.08fr] gap-4",children:[e.jsxs("section",{className:"bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden",children:[e.jsxs("div",{className:"grid grid-cols-2 bg-slate-950/60 border-b border-slate-800",children:[e.jsx("button",{type:"button",onClick:()=>N("produto"),className:`py-4 text-sm font-black ${i==="produto"?"text-slate-950 bg-gold-500":"text-slate-400 hover:text-white"}`,children:"Produto cadastrado"}),e.jsx("button",{type:"button",onClick:()=>N("personalizada"),className:`py-4 text-sm font-black ${i==="personalizada"?"text-slate-950 bg-gold-500":"text-slate-400 hover:text-white"}`,children:"Personalizada"})]}),e.jsxs("div",{className:"p-5 space-y-5",children:[i==="produto"?e.jsxs("div",{className:"space-y-3",children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Buscar produto"}),e.jsxs("div",{className:"relative",children:[e.jsx(le,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"}),e.jsx("input",{value:v,onChange:t=>Q(t.target.value),placeholder:"Digite nome ou categoria...",className:"w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white outline-none focus:border-gold-500/60"})]}),e.jsx("div",{className:"bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden max-h-64 overflow-y-auto",children:Y.map(t=>e.jsxs("button",{type:"button",onClick:()=>L(t.id),className:`w-full flex items-center justify-between gap-3 px-4 py-3 text-left border-b border-slate-900 last:border-b-0 hover:bg-slate-900/70 ${S===t.id?"bg-gold-500/10":""}`,children:[e.jsxs("div",{children:[e.jsx("strong",{className:"text-white text-sm",children:t.name}),e.jsx("p",{className:"text-[10px] text-slate-500 uppercase tracking-wider",children:t.category})]}),e.jsx("span",{className:"text-gold-400 font-black text-sm",children:C(t.price)})]},t.id))})]}):e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Nome / descrição"}),e.jsx("input",{value:z,maxLength:50,onChange:t=>P(t.target.value),placeholder:"Ex: BRAHMA ROMARINHO",className:"mt-2 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-gold-500/60"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Preço"}),e.jsx("input",{value:$,onChange:t=>A(t.target.value),placeholder:"2,99",className:"mt-2 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-gold-500/60"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Texto pequeno"}),e.jsx("input",{value:d,maxLength:30,onChange:t=>y(t.target.value),placeholder:"Ex: CERVEJA GELADA",className:"mt-2 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-gold-500/60"})]})]}),i==="produto"&&e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Texto pequeno"}),e.jsx("input",{value:d,maxLength:30,onChange:t=>y(t.target.value),placeholder:"Ex: CERVEJA GELADA",className:"mt-2 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-gold-500/60"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Logo personalizada"}),e.jsxs("label",{className:"mt-2 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 hover:border-gold-500/50 cursor-pointer flex items-center justify-between gap-3",children:[e.jsx("span",{children:B?"Logo carregada":"Usar outra logo"}),e.jsx(V,{className:"w-4 h-4 text-gold-500"}),e.jsx("input",{type:"file",accept:"image/*",onChange:I,className:"hidden"})]})]})]}),i==="personalizada"&&e.jsxs("div",{children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Logo personalizada"}),e.jsxs("label",{className:"mt-2 w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 hover:border-gold-500/50 cursor-pointer flex items-center justify-between gap-3",children:[e.jsx("span",{children:B?"Logo carregada":"Usar outra logo"}),e.jsx(V,{className:"w-4 h-4 text-gold-500"}),e.jsx("input",{type:"file",accept:"image/*",onChange:I,className:"hidden"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Modelo da etiqueta"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mt-2",children:Object.keys(w).map(t=>{const a=w[t].icon;return e.jsxs("button",{type:"button",onClick:()=>E(t),className:`p-3 rounded-xl border text-center transition ${_===t?"border-gold-500 bg-gold-500/10 text-gold-300":"border-slate-800 bg-slate-950 text-slate-400 hover:text-white"}`,children:[e.jsx(a,{className:"w-5 h-5 mx-auto mb-2"}),e.jsx("strong",{className:"block text-xs",children:w[t].title}),e.jsx("span",{className:"text-[10px] opacity-70",children:w[t].subtitle})]},t)})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Tamanho"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mt-2",children:Object.keys(c).map(t=>e.jsxs("button",{type:"button",onClick:()=>R(t),className:`p-3 rounded-xl border text-center transition ${m===t?"border-gold-500 bg-gold-500/10 text-gold-300":"border-slate-800 bg-slate-950 text-slate-400 hover:text-white"}`,children:[e.jsx("strong",{className:"block text-xs",children:c[t].label}),e.jsx("span",{className:"text-[10px] opacity-70",children:c[t].detail})]},t))})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[["Exibir logo",W,F],["Borda dourada",Z,D],["Selo promoção",K,T]].map(([t,a,s])=>e.jsxs("label",{className:"flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs font-bold text-slate-300",children:[String(t),e.jsx("input",{type:"checkbox",checked:!!a,onChange:r=>s(r.target.checked),className:"accent-gold-500 w-4 h-4"})]},String(t)))}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest",children:"Quantidade"}),e.jsxs("div",{className:"mt-2 flex items-center bg-slate-950 border border-slate-800 rounded-xl overflow-hidden w-full sm:w-56",children:[e.jsx("button",{type:"button",onClick:()=>b(Math.max(1,p-1)),className:"w-12 h-11 text-xl text-white hover:bg-slate-900",children:"-"}),e.jsx("input",{value:p,onChange:t=>b(Math.min(50,Math.max(1,Number(t.target.value)||1))),className:"flex-1 bg-transparent text-center text-white font-black outline-none"}),e.jsx("button",{type:"button",onClick:()=>b(Math.min(50,p+1)),className:"w-12 h-11 text-xl text-white hover:bg-slate-900",children:"+"})]})]})]})]}),e.jsxs("section",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-5 flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-white font-display font-black text-lg",children:"Pré-visualização"}),e.jsx("p",{className:"text-xs text-slate-500",children:"A aparência final pode variar conforme a impressora."})]}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-[10px] font-black uppercase tracking-widest",children:i==="produto"?"Produto":"Personalizada"})]}),e.jsx("div",{ref:X,className:"min-h-[260px] rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-center p-5 overflow-auto",children:te()}),e.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3",children:[e.jsxs("button",{type:"button",onClick:ee,className:"py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white font-black text-sm flex items-center justify-center gap-2",children:[e.jsx(U,{className:"w-4 h-4"}),"Limpar"]}),e.jsxs("button",{type:"button",onClick:()=>k("Pré-visualização"),className:"py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2",children:[e.jsx(ne,{className:"w-4 h-4"}),"Pré-visualizar"]}),e.jsxs("button",{type:"button",onClick:ae,className:"py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white font-black text-sm flex items-center justify-center gap-2",children:[e.jsx(ce,{className:"w-4 h-4"}),"Baixar PDF"]}),e.jsxs("button",{type:"button",onClick:se,className:"py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center justify-center gap-2",children:[e.jsx(de,{className:"w-4 h-4"}),"Imprimir"]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsxs("section",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-white font-display font-black",children:"Produtos recentes"}),e.jsx(xe,{className:"w-5 h-5 text-gold-500"})]}),e.jsx("div",{className:"divide-y divide-slate-800 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden",children:o.slice(0,6).map(t=>e.jsxs("button",{type:"button",onClick:()=>{N("produto"),L(t.id)},className:"w-full flex items-center justify-between px-4 py-3 hover:bg-slate-900/70 text-left",children:[e.jsx("span",{className:"text-sm font-bold text-white",children:t.name}),e.jsx("span",{className:"text-sm font-black text-gold-400",children:C(t.price)})]},t.id))})]}),e.jsxs("section",{className:"bg-slate-900 border border-slate-800 rounded-3xl p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-white font-display font-black",children:"Histórico de impressões"}),e.jsx(me,{className:"w-5 h-5 text-gold-500"})]}),e.jsx("div",{className:"space-y-2",children:O.length===0?e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-slate-500",children:"Nenhuma impressão registrada nesta sessão."}):O.map(t=>e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-300",children:t},t))})]})]})]})}export{ue as default};
