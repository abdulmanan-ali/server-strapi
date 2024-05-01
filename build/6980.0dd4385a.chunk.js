"use strict";(self.webpackChunknews_auth=self.webpackChunknews_auth||[]).push([[6980,128],{96980:(V,I,s)=>{s.d(I,{ProtectedCreateView:()=>N});var t=s(19968),P=s(16048),m=s(70516),v=s(56008),C=s(10128),g=s(62552),c=s(17892),O=s(31212),_=s(85816),D=s(54320),e=s(5240),a=s(91892),Q=s(36196),G=s(20880),y=s(21424),j=s(69476),L=s(18424),K=s(52540),x=s(21968),A=s(12132),l=s(48632),X=s(85676),k=s(35184),H=s(99568),w=s(96556),b=s(13192),q=s(30840),ss=s(77784),ts=s(79371),_s=s(67888),ns=s(52600),as=s(95752),Es=s(37388),os=s(61840),rs=s(49108),es=s(44632),ds=s(50840),Ms=s(20252),is=s(86432),Ps=s(22612),Os=s(24808),Ds=s(24024),ls=s(40960),Ts=s(33656),ms=s(43280),vs=s(79804),Cs=s(19632),Ls=s(29576),As=s(61152),Bs=s(9589),Us=s(45488),Rs=s(75516),Is=s(76723),Ks=s(74288);const N=()=>{const z=(0,m.w1)(v.s);return(0,t.jsx)(P.rF,{permissions:z.settings?.["transfer-tokens"].create,children:(0,t.jsx)(C.M,{})})}},10128:(V,I,s)=>{s.d(I,{M:()=>J,ProtectedEditView:()=>Ws});var t=s(19968),P=s(62552),m=s(48112),v=s(42816),C=s(48936),g=s(5e3),c=s(63358),O=s(28724),_=s(70996),D=s(28464),e=s(35676),a=s(16048),Q=s(53305),G=s(69476),y=s(14632),j=s(49008),L=s(52540),K=s(85816),x=s(76723),A=s(49748),l=s(74288),X=s(54320),k=s(5240),H=s(91892),w=s(36196),b=s(20880),q=s(21424),ss=s(70516),ts=s(18424),_s=s(21968),ns=s(12132),as=s(48632),Es=s(85676),os=s(35184),rs=s(99568),es=s(96556),ds=s(13192),Ms=s(30840),is=s(77784),Ps=s(79371),Os=s(67888),Ds=s(52600),ls=s(95752),Ts=s(37388),ms=s(61840),vs=s(49108),Cs=s(44632),Ls=s(50840),As=s(20252),Bs=s(86432),Us=s(22612),Rs=s(24808),Is=s(24024),Ks=s(40960),N=s(33656),z=s(43280),Vs=s(79804),Qs=s(19632),Gs=s(29576),Ns=s(61152),zs=s(9589),Js=s(45488),Zs=s(75516);const fs=L.kt().shape({name:L.Qb().max(100).required(a.aO.required),description:L.Qb().nullable(),lifespan:L.CQ().integer().min(0).nullable().defined(a.aO.required),permissions:L.Qb().required(a.aO.required)}),J=()=>{(0,a.G0)();const{formatMessage:o}=(0,y.c)(),{lockApp:r,unlockApp:f}=(0,a.H6)(),M=(0,a.eo)(),B=(0,j.Uz)(),{state:W}=(0,j.IT)(),[E,U]=P.useState(W&&"accessKey"in W.transferToken?{...W.transferToken}:null),{trackUsage:T}=(0,a.m4)(),{setCurrentStep:cs}=(0,a.sg)(),ys=(0,K.j)(d=>d.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:js,canUpdate:xs,canRegenerate:ps}}=(0,a.aU)(ys),p=(0,j.SU)("/settings/transfer-tokens/:id")?.params?.id,i=p==="create",{_unstableFormatAPIError:u,_unstableFormatValidationErrors:Z}=(0,a.An)();P.useEffect(()=>{T(i?"didAddTokenFromList":"didEditTokenFromList",{tokenType:A.T})},[i,T]);const{data:S,error:F}=(0,x.u)(p,{skip:i||E!==null||!p});P.useEffect(()=>{F&&M({type:"warning",message:u(F)})},[F,u,M]),P.useEffect(()=>{S&&U(S)},[S]);const[us]=(0,x.a)(),[Ss]=(0,x.b)(),Fs=async(d,R)=>{T(i?"willCreateToken":"willEditToken",{tokenType:A.T}),r();const h=d.permissions.split("-");if((n=>n.length===1?n[0]==="push"||n[0]==="pull":n[0]==="push"&&n[1]==="pull")(h))try{if(i){const n=await us({...d,permissions:h});if("error"in n){(0,K.x)(n.error)&&n.error.name==="ValidationError"?R.setErrors(Z(n.error)):M({type:"warning",message:u(n.error)});return}U(n.data),M({type:"success",message:o({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),T("didCreateToken",{type:E?.permissions,tokenType:A.T}),B.push(`/settings/transfer-tokens/${n.data.id}`,{transferToken:n.data}),cs("transferTokens.success")}else{const n=await Ss({id:p,name:d.name,description:d.description,permissions:h});if("error"in n){(0,K.x)(n.error)&&n.error.name==="ValidationError"?R.setErrors(Z(n.error)):M({type:"warning",message:u(n.error)});return}U(n.data),M({type:"success",message:o({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),T("didEditToken",{type:E?.permissions,tokenType:A.T})}}catch{M({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{f()}},Y=xs&&!i||js&&i;return!i&&!E?(0,t.jsx)(gs,{}):(0,t.jsxs)(m.G,{children:[(0,t.jsx)(a.K8,{name:"Transfer Tokens"}),(0,t.jsx)(G.QJ,{validationSchema:fs,validateOnChange:!1,initialValues:{name:E?.name||"",description:E?.description||"",lifespan:E?.lifespan??null,permissions:E?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(d,R)=>Fs(d,R),children:({errors:d,handleChange:R,isSubmitting:h,values:$})=>(0,t.jsxs)(a.QF,{children:[(0,t.jsx)(l.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:E,setToken:U,canEditInputs:Y,canRegenerate:ps,isSubmitting:h,regenerateUrl:"/admin/transfer/tokens/"}),(0,t.jsx)(v.S,{children:(0,t.jsxs)(C.C,{direction:"column",alignItems:"stretch",gap:6,children:[E&&Boolean(E?.name)&&"accessKey"in E&&(0,t.jsx)(l.c,{token:E.accessKey,tokenType:A.T}),(0,t.jsx)(hs,{errors:d,onChange:R,canEditInputs:Y,isCreating:i,values:$,transferToken:E})]})})]})})]})},Ws=()=>{const o=(0,K.j)(r=>r.admin_app.permissions.settings?.["transfer-tokens"].read);return(0,t.jsx)(a.rF,{permissions:o,children:(0,t.jsx)(J,{})})},hs=({errors:o={},onChange:r,canEditInputs:f,isCreating:M,values:B,transferToken:W={}})=>{const{formatMessage:E}=(0,y.c)(),U=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,t.jsx)(g.k,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(C.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(c.O,{variant:"delta",as:"h2",children:E({id:"global.details",defaultMessage:"Details"})}),(0,t.jsxs)(O.y,{gap:5,children:[(0,t.jsx)(_.C,{col:6,xs:12,children:(0,t.jsx)(l.T,{error:o.name,value:B.name,canEditInputs:f,onChange:r})},"name"),(0,t.jsx)(_.C,{col:6,xs:12,children:(0,t.jsx)(l.a,{error:o.description,value:B.description,canEditInputs:f,onChange:r})},"description"),(0,t.jsx)(_.C,{col:6,xs:12,children:(0,t.jsx)(l.L,{isCreating:M,error:o.lifespan,value:B.lifespan,onChange:r,token:W})},"lifespan"),(0,t.jsx)(_.C,{col:6,xs:12,children:(0,t.jsx)(l.b,{name:"permissions",value:B.permissions,error:o.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:T=>{r({target:{name:"permissions",value:T}})},options:U,canEditInputs:f})},"permissions")]})]})})},gs=({transferTokenName:o})=>{const{formatMessage:r}=(0,y.c)();return(0,a.G0)(),(0,t.jsxs)(m.G,{"aria-busy":"true",children:[(0,t.jsx)(a.K8,{name:"Transfer Tokens"}),(0,t.jsx)(D.a,{primaryAction:(0,t.jsx)(e.Z,{disabled:!0,startIcon:(0,t.jsx)(Q.c,{}),type:"button",size:"L",children:r({id:"global.save",defaultMessage:"Save"})}),title:o||r({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,t.jsx)(v.S,{children:(0,t.jsx)(a.Wm,{})})]})}},76723:(V,I,s)=>{s.d(I,{a:()=>C,b:()=>c,c:()=>m,d:()=>g,u:()=>v});var t=s(85816);const P=t.m.injectEndpoints({endpoints:O=>({getTransferTokens:O.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:_=>_.data,providesTags:(_,D)=>[..._?.map(({id:e})=>({type:"TransferToken",id:e}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:O.query({query:_=>`/admin/transfer/tokens/${_}`,transformResponse:_=>_.data,providesTags:(_,D,e)=>[{type:"TransferToken",id:e}]}),createTransferToken:O.mutation({query:_=>({url:"/admin/transfer/tokens",method:"POST",data:_}),transformResponse:_=>_.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:O.mutation({query:_=>({url:`/admin/transfer/tokens/${_}`,method:"DELETE"}),transformResponse:_=>_.data,invalidatesTags:(_,D,e)=>[{type:"TransferToken",id:e}]}),updateTransferToken:O.mutation({query:({id:_,...D})=>({url:`/admin/transfer/tokens/${_}`,method:"PUT",data:D}),transformResponse:_=>_.data,invalidatesTags:(_,D,{id:e})=>[{type:"TransferToken",id:e}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:m,useGetTransferTokenQuery:v,useCreateTransferTokenMutation:C,useDeleteTransferTokenMutation:g,useUpdateTransferTokenMutation:c}=P}}]);