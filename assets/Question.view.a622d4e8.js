import{_ as l,S as Q,B as k,u as x}from"./index.716fcbcf.js";import{r,o as t,c as n,F as f,m as C,h as d,w as _,a as i,t as u,e as q,b as $,d as N}from"./vendor.76321782.js";const A={name:"assessmentNavigation",props:["questions"]},B={class:"assessmentNavigation"},w={class:"btn btn-round"};function P(e,p,s,o,m,a){const h=r("RouterLink");return t(),n("div",B,[(t(!0),n(f,null,C(s.questions,c=>(t(),d(h,{key:c.id,to:`/questions/${c.id}`},{default:_(()=>[i("button",w,u(c.id),1)]),_:2},1032,["to"]))),128))])}var b=l(A,[["render",P]]);const L={name:"Proposition",props:["proposition"]},V={class:"proposition"},D={class:"title"},E={class:"content"};function F(e,p,s,o,m,a){return t(),n("div",V,[i("p",D,"Proposition "+u(s.proposition.id)+" :",1),i("div",E,[i("p",null,u(s.proposition.label),1)])])}var M=l(L,[["render",F]]);const R={name:"Correction",props:["question"],computed:{}},H={class:"correction"},T={class:"content"},W={key:0,class:"validation validation__correct"},j={key:1,class:"validation validation__wrong"};function z(e,p,s,o,m,a){return t(),n("div",H,[i("div",T,[s.question.userAnswer?(t(),n("h3",W,"Correct")):(t(),n("h3",j,"Wrong")),i("p",null,u(s.question.correction),1)]),q(e.$slots,"actions")])}var G=l(R,[["render",z]]);const I={name:"Question",components:{SectionComponent:Q,ButtonComponent:k,AssessmentNavigation:b,Proposition:M,Correction:G},props:["id"],data(){return{}},setup(){const e=x();return e.startAssessment(),{assessmentStore:e}},created(){this.$router.push(`/questions/${this.assessmentStore.currentQuestion.id}`)},mounted(){},updated(){this.assessmentStore.nextQuestion(this.id)},methods:{validateQuestion(e){this.correctionMode=!0,this.assessmentStore.validateQuestion(e)},nextQuestion(){this.correctionMode=!1,this.assessmentStore.nextQuestion(),this.assessmentStore.status==="END"?this.$router.push("/results"):this.$router.push(`/questions/${this.assessmentStore.currentQuestion.id}`)}}},J={class:"content"},K={key:0,class:"propositions"},O=N("Continue");function U(e,p,s,o,m,a){const h=r("AssessmentNavigation"),c=r("Proposition"),S=r("ButtonComponent"),g=r("Correction"),y=r("SectionComponent");return t(),d(y,{type:"splited",height:"fullHeight"},{left:_(()=>[i("div",J,[$(h,{questions:o.assessmentStore.assessment.questions},null,8,["questions"]),i("h1",null,"Question "+u(o.assessmentStore.currentQuestion.id)+" :",1)])]),right:_(()=>[o.assessmentStore.currentQuestion.userAnswer===null?(t(),n("div",K,[(t(!0),n(f,null,C(o.assessmentStore.currentQuestion.proposals,v=>(t(),d(c,{key:v.id,proposition:v,onClick:X=>a.validateQuestion(v.id)},null,8,["proposition","onClick"]))),128))])):(t(),d(g,{key:1,question:o.assessmentStore.currentQuestion},{actions:_(()=>[$(S,{type:"large",onClick:a.nextQuestion},{default:_(()=>[O]),_:1},8,["onClick"])]),_:1},8,["question"]))]),_:1})}var tt=l(I,[["render",U]]);export{tt as default};
