/* empty css                  *//* empty css                 */import{_ as e}from"./Back.vue_vue&type=style&index=0&lang.1aea6dd8.js";/* empty css                   *//* empty css                    *//* empty css                */import"./el-form-item.c6f666bf.js";import{f as a,w as t,x as l,g as s,h as o,j as r,J as i,y as u,z as p,r as d,T as n,a1 as m,C as c,a9 as f,aa as g,ab as y,A as h,B as v,o as b,m as w,D as _,n as V,F as L,H as C,t as j}from"./vendor.555231f0.js";const T={class:"create-type-section"},x={class:"create-type-form"},N=["src"],k=C("正常"),A=C("冻结");var U=a({name:"ArticleType",setup(a){const{proxy:U}=t(),D=l(),I=s(""),J=s(!1),S=U.$serverUrl,$=s("default"),z=s(),B=o({name:"ArticleType",title:"",fileList:[],description:"",status:"0",pageNum:10}),F=s({});s([]);const O=s();r((()=>{let e=D.currentRoute.value.query.typeId;e&&(O.value=e,H())}));const q=o({title:[{required:!0,message:"请输入分类名称",trigger:"blur"}]}),M=e=>{I.value=e.url,J.value=!0},R=e=>{const a=new FormData;for(let t in e)"fileList"==t?(e.fileList.forEach((e=>{a.append("file",e.raw)})),0===e.fileList.length&&a.append("file","")):a.append(t,e[t]);return a};let E={headers:{token:document.cookie,"Content-Type":"multipart/form-data"}};const H=()=>{U.$axios.get("/typeDataByTypeId",{params:{typeId:O.value},headers:{token:document.cookie}}).then((e=>{if(1041==e.data.status)return i({showClose:!0,message:e.data.msg,type:"error"}),D.push({name:"Login"});if(1080==e.data.status){i({showClose:!0,message:e.data.msg,type:"success"});let a=e.data.data[0];if(B.title=a.title,""!=a.imgMore){let e=a.imgMore.split(",");for(let a=0;a<e.length;a++)B.fileList.push({url:S+"/"+e[a]})}B.description=a.description,B.status=Number(a.status).toString(),B.pageNum=a.pageNum,F.value=JSON.parse(JSON.stringify(B))}else i({showClose:!0,message:e.data.msg,type:"error"})})).catch((e=>{console.log("error",e)}))};let P={};const G=async e=>{if(!e)return;let a=R(B);await e.validate(((e,t)=>{var l,s;e?O.value?(e=>{for(let t in B)if("fileList"===t)if(B[t].length==F.value[t].length)for(let e=0;e<B[t].length;e++)F.value[t][e].url!=B[t][e].url&&(P[t]=B[t]);else P[t]=B[t];else F.value[t]!=B[t]&&(P[t]=B[t]);if("{}"==JSON.stringify(P))return D.push({name:"ArticleTypeList"});P.typeId=O.value,P.type="ArticleType";let a=R(P);U.$axios.post("/editType",a,e).then((e=>1041==e.data.status?(i({showClose:!0,message:e.data.msg,type:"error"}),D.push({name:"Login"})):1090==e.data.status?(i({showClose:!0,message:e.data.msg,type:"success"}),D.push({name:"ArticleTypeList"})):void i({showClose:!0,message:e.data.msg,type:"error"}))).catch((e=>{console.log("error",e)}))})(E):(l=a,s=E,U.$axios.post("/createType",l,s).then((e=>1041==e.data.status?(i({showClose:!0,message:e.data.msg,type:"error"}),D.push({name:"Login"})):1050==e.data.status?(i({showClose:!0,message:e.data.msg,type:"success"}),D.push({name:"ArticleTypeList"})):void i({showClose:!0,message:e.data.msg,type:"error"}))).catch((e=>{console.log("error",e)}))):console.log("error submit!",t)}))};return(a,t)=>{const l=u,s=p,o=d("Plus"),r=n,i=m,U=c,D=f,S=g,F=y,R=h,E=v;return b(),w("div",T,[_(e,{title:"添加文章分类"}),V("div",x,[_(E,{ref_key:"typeDataRef",ref:z,model:B,rules:q,"label-width":"120px",class:"demo-ruleForm",size:$.value,"status-icon":""},{default:L((()=>[_(s,{label:"文章类型名称",prop:"title"},{default:L((()=>[_(l,{modelValue:B.title,"onUpdate:modelValue":t[0]||(t[0]=e=>B.title=e),placeholder:"输入类型名称"},null,8,["modelValue"])])),_:1}),_(s,{label:"图片"},{default:L((()=>[_(i,{"list-type":"picture-card","auto-upload":!1,limit:1,"file-list":B.fileList,"onUpdate:file-list":t[1]||(t[1]=e=>B.fileList=e),accept:".png,.jpg,.jpeg,.webp","on-preview":M},{default:L((()=>[_(r,{color:"#999999"},{default:L((()=>[_(o)])),_:1})])),_:1},8,["file-list"]),_(U,{modelValue:J.value,"onUpdate:modelValue":t[2]||(t[2]=e=>J.value=e)},{default:L((()=>[V("img",{"w-full":"",src:I.value,alt:"图片预览"},null,8,N)])),_:1},8,["modelValue"])])),_:1}),_(s,{label:"描述"},{default:L((()=>[_(l,{modelValue:B.description,"onUpdate:modelValue":t[3]||(t[3]=e=>B.description=e),type:"textarea"},null,8,["modelValue"])])),_:1}),_(s,{label:"状态"},{default:L((()=>[_(S,{modelValue:B.status,"onUpdate:modelValue":t[4]||(t[4]=e=>B.status=e)},{default:L((()=>[_(D,{label:"0"},{default:L((()=>[k])),_:1}),_(D,{label:"1"},{default:L((()=>[A])),_:1})])),_:1},8,["modelValue"])])),_:1}),_(s,{label:"页数"},{default:L((()=>[_(F,{modelValue:B.pageNum,"onUpdate:modelValue":t[5]||(t[5]=e=>B.pageNum=e),min:1,max:100},null,8,["modelValue"])])),_:1}),_(s,null,{default:L((()=>[_(R,{type:"primary",onClick:t[6]||(t[6]=e=>G(z.value))},{default:L((()=>[C(j(O.value?"保存":"创建分类"),1)])),_:1})])),_:1})])),_:1},8,["model","rules","size"])])])}}});export{U as default};
