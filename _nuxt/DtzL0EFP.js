import{u as D,b as L,c as N,d as _,e as ee,f as c,g as z,a as A,h as f,i as R,m as F,j as V,k as ae,l as j,n as S,o as r,p as w,q as te,r as ne,s as le,t as se,v as ie,w as de,x as ce,L as re,y as ue,z as ve,A as oe,B as me,C as ye,D as ge,R as ke}from"./CD6qchRj.js";import{s as u,u as E,b as n,x as k,y as M,I as g,z as be,F as x,A as B,n as Ce,B as fe,C as Ve}from"./Ctp-ZhlU.js";const Ie=k({start:Boolean,end:Boolean,icon:g,image:String,text:String,...w(),...r(),...S(),...j(),...ae(),...V(),...M(),...F({variant:"flat"})},"VAvatar"),T=u()({name:"VAvatar",props:Ie(),setup(e,l){let{slots:a}=l;const{themeClasses:t}=E(e),{borderClasses:v}=D(e),{colorClasses:i,colorStyles:o,variantClasses:m}=L(e),{densityClasses:y}=N(e),{roundedClasses:d}=_(e),{sizeClasses:s,sizeStyles:I}=ee(e);return c(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,v.value,i.value,y.value,d.value,s.value,m.value,e.class],style:[o.value,I.value,e.style]},{default:()=>[a.default?n(f,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[a.default()]}):e.image?n(z,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(A,{key:"icon",icon:e.icon},null):e.text,R(!1,"v-avatar")]})),{}}}),Ae=u()({name:"VCardActions",props:r(),setup(e,l){let{slots:a}=l;return be({VBtn:{slim:!0,variant:"text"}}),c(()=>{var t;return n("div",{class:["v-card-actions",e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),Se=k({opacity:[Number,String],...r(),...V()},"VCardSubtitle"),Pe=u()({name:"VCardSubtitle",props:Se(),setup(e,l){let{slots:a}=l;return c(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},a)),{}}}),he=te("v-card-title"),xe=k({appendAvatar:String,appendIcon:g,prependAvatar:String,prependIcon:g,subtitle:[String,Number],title:[String,Number],...r(),...S()},"VCardItem"),Be=u()({name:"VCardItem",props:xe(),setup(e,l){let{slots:a}=l;return c(()=>{var d;const t=!!(e.prependAvatar||e.prependIcon),v=!!(t||a.prepend),i=!!(e.appendAvatar||e.appendIcon),o=!!(i||a.append),m=!!(e.title!=null||a.title),y=!!(e.subtitle!=null||a.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?n(f,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},a.prepend):n(x,null,[e.prependAvatar&&n(T,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(A,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[m&&n(he,{key:"title"},{default:()=>{var s;return[((s=a.title)==null?void 0:s.call(a))??e.title]}}),y&&n(Pe,{key:"subtitle"},{default:()=>{var s;return[((s=a.subtitle)==null?void 0:s.call(a))??e.subtitle]}}),(d=a.default)==null?void 0:d.call(a)]),o&&n("div",{key:"append",class:"v-card-item__append"},[a.append?n(f,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},a.append):n(x,null,[e.appendIcon&&n(A,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(T,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Te=k({opacity:[Number,String],...r(),...V()},"VCardText"),De=u()({name:"VCardText",props:Te(),setup(e,l){let{slots:a}=l;return c(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},a)),{}}}),Le=k({appendAvatar:String,appendIcon:g,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:g,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...w(),...r(),...S(),...ge(),...ye(),...me(),...oe(),...ve(),...j(),...ue(),...V(),...M(),...F({variant:"elevated"})},"VCard"),ze=u()({name:"VCard",directives:{Ripple:ke},props:Le(),setup(e,l){let{attrs:a,slots:t}=l;const{themeClasses:v}=E(e),{borderClasses:i}=D(e),{colorClasses:o,colorStyles:m,variantClasses:y}=L(e),{densityClasses:d}=N(e),{dimensionStyles:s}=ne(e),{elevationClasses:I}=le(e),{loaderClasses:O}=se(e),{locationStyles:q}=ie(e),{positionClasses:H}=de(e),{roundedClasses:G}=_(e),b=ce(e,a),J=B(()=>e.link!==!1&&b.isLink.value),C=B(()=>!e.disabled&&e.link!==!1&&(e.link||b.isClickable.value));return c(()=>{const K=J.value?"a":e.tag,Q=!!(t.title||e.title!=null),U=!!(t.subtitle||e.subtitle!=null),W=Q||U,X=!!(t.append||e.appendAvatar||e.appendIcon),Y=!!(t.prepend||e.prependAvatar||e.prependIcon),Z=!!(t.image||e.image),$=W||Y||X,p=!!(t.text||e.text!=null);return Ce(n(K,Ve({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":C.value},v.value,i.value,o.value,d.value,I.value,O.value,H.value,G.value,y.value,e.class],style:[m.value,s.value,q.value,e.style],onClick:C.value&&b.navigate,tabindex:e.disabled?-1:void 0},b.linkProps),{default:()=>{var P;return[Z&&n("div",{key:"image",class:"v-card__image"},[t.image?n(f,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(z,{key:"image-img",cover:!0,src:e.image},null)]),n(re,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),$&&n(Be,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),p&&n(De,{key:"text"},{default:()=>{var h;return[((h=t.text)==null?void 0:h.call(t))??e.text]}}),(P=t.default)==null?void 0:P.call(t),t.actions&&n(Ae,null,{default:t.actions}),R(C.value,"v-card")]}}),[[fe("ripple"),C.value&&e.ripple]])}),{}}});export{De as V,T as a,ze as b};
