"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[92],{3092:(v,_,l)=>{l.r(_),l.d(_,{NgxAuthModule:()=>q});var d=l(6895),r=l(4006),p=l(7672),m=l(9766),n=l(2963),a=l(8833);function c(e,i){if(1&e&&(n.TgZ(0,"li",18),n._uU(1),n.qZA()),2&e){const o=i.$implicit;n.xp6(1),n.Oqu(o)}}function f(e,i){if(1&e&&(n.TgZ(0,"nb-alert",14),n._uU(1,"\n  "),n.TgZ(2,"p",15)(3,"b"),n._uU(4,"Oh snap!"),n.qZA()(),n._uU(5,"\n  "),n.TgZ(6,"ul",16),n._uU(7,"\n    "),n.YNc(8,c,2,1,"li",17),n._uU(9,"\n  "),n.qZA(),n._uU(10,"\n"),n.qZA()),2&e){const o=n.oxw();n.xp6(8),n.Q6J("ngForOf",o.errors)}}function h(e,i){if(1&e&&(n.TgZ(0,"li",18),n._uU(1),n.qZA()),2&e){const o=i.$implicit;n.xp6(1),n.Oqu(o)}}function x(e,i){if(1&e&&(n.TgZ(0,"nb-alert",19),n._uU(1,"\n  "),n.TgZ(2,"p",15)(3,"b"),n._uU(4,"Hooray!"),n.qZA()(),n._uU(5,"\n  "),n.TgZ(6,"ul",16),n._uU(7,"\n    "),n.YNc(8,h,2,1,"li",17),n._uU(9,"\n  "),n.qZA(),n._uU(10,"\n"),n.qZA()),2&e){const o=n.oxw();n.xp6(8),n.Q6J("ngForOf",o.messages)}}function U(e,i){1&e&&(n.TgZ(0,"p",21),n._uU(1,"\n        Us\xfaario \xe9 obrigatorio!\n      "),n.qZA())}function Z(e,i){if(1&e&&(n.ynx(0),n._uU(1,"\n      "),n.YNc(2,U,2,0,"p",20),n._uU(3,"\n    "),n.BQk()),2&e){n.oxw();const o=n.MAs(16);n.xp6(2),n.Q6J("ngIf",null==o.errors?null:o.errors.required)}}function A(e,i){1&e&&(n.TgZ(0,"p",21),n._uU(1,"\n        Senha \xe9 obrigatorio!\n      "),n.qZA())}function N(e,i){if(1&e&&(n.TgZ(0,"p",21),n._uU(1),n.qZA()),2&e){const o=n.oxw(2);n.xp6(1),n.AsE("\n        Password should contains\n        from ",o.getConfigValue("forms.validation.password.minLength"),"\n        to ",o.getConfigValue("forms.validation.password.maxLength"),"\n        characters\n      ")}}function T(e,i){if(1&e&&(n.ynx(0),n._uU(1,"\n      "),n.YNc(2,A,2,0,"p",20),n._uU(3,"\n      "),n.YNc(4,N,2,2,"p",20),n._uU(5,"\n    "),n.BQk()),2&e){n.oxw();const o=n.MAs(27);n.xp6(2),n.Q6J("ngIf",null==o.errors?null:o.errors.required),n.xp6(2),n.Q6J("ngIf",(null==o.errors?null:o.errors.minlength)||(null==o.errors?null:o.errors.maxlength))}}const b=[{path:"",component:m.AC,children:[{path:"login",component:(()=>{class e extends m.Yx{}return e.\u0275fac=function(){let i;return function(t){return(i||(i=n.n5z(e)))(t||e)}}(),e.\u0275cmp=n.Xpm({type:e,selectors:[["ngx-login"]],features:[n.qOj],decls:38,vars:17,consts:[["id","title",1,"title"],["outline","danger","role","alert",4,"ngIf"],["outline","success","role","alert",4,"ngIf"],["aria-labelledby","title",3,"ngSubmit"],["form","ngForm"],[1,"form-control-group"],["for","input-email",1,"label"],["nbInput","","fullWidth","","name","email","id","input-email","placeholder","Us\xfaario","autofocus","",3,"ngModel","status","required","ngModelChange"],["email","ngModel"],[4,"ngIf"],["for","input-password",1,"label"],["nbInput","","fullWidth","","name","password","type","password","id","input-password","placeholder","Password",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["password","ngModel"],["nbButton","","fullWidth","","status","success",3,"disabled"],["outline","danger","role","alert"],[1,"alert-title"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["outline","success","role","alert"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"]],template:function(o,t){if(1&o&&(n.TgZ(0,"h1",0),n._uU(1,"Logar"),n.qZA(),n._uU(2,"\n\n"),n.YNc(3,f,11,1,"nb-alert",1),n._uU(4,"\n\n"),n.YNc(5,x,11,1,"nb-alert",2),n._uU(6,"\n\n"),n.TgZ(7,"form",3,4),n.NdJ("ngSubmit",function(){return t.login()}),n._uU(9,"\n\n  "),n.TgZ(10,"div",5),n._uU(11,"\n    "),n.TgZ(12,"label",6),n._uU(13,"Us\xfaario:"),n.qZA(),n._uU(14,"\n    "),n.TgZ(15,"input",7,8),n.NdJ("ngModelChange",function(u){return t.user.username=u}),n.qZA(),n._uU(17,"\n    "),n.YNc(18,Z,4,1,"ng-container",9),n._uU(19,"\n  "),n.qZA(),n._uU(20,"\n\n  "),n.TgZ(21,"div",5),n._uU(22,"\n    "),n.TgZ(23,"label",10),n._uU(24,"Password:"),n.qZA(),n._uU(25,"\n    "),n.TgZ(26,"input",11,12),n.NdJ("ngModelChange",function(u){return t.user.password=u}),n.qZA(),n._uU(28,"\n    "),n.YNc(29,T,6,2,"ng-container",9),n._uU(30,"\n  "),n.qZA(),n._uU(31,"\n\n  "),n._UZ(32,"hr"),n._uU(33,"\n\n  "),n.TgZ(34,"button",13),n._uU(35,"\n    Entrar\n  "),n.qZA(),n._uU(36,"\n"),n.qZA(),n._uU(37,"\n\n")),2&o){const g=n.MAs(8),u=n.MAs(16),s=n.MAs(27);n.xp6(3),n.Q6J("ngIf",t.showMessages.error&&(null==t.errors?null:t.errors.length)&&!t.submitted),n.xp6(2),n.Q6J("ngIf",t.showMessages.success&&(null==t.messages?null:t.messages.length)&&!t.submitted),n.xp6(10),n.Q6J("ngModel",t.user.username)("status",u.dirty?u.invalid?"danger":"success":"basic")("required",t.getConfigValue("forms.validation.email.required")),n.uIk("aria-invalid",!(!u.invalid||!u.touched)||null),n.xp6(3),n.Q6J("ngIf",u.invalid&&u.touched),n.xp6(8),n.Q6J("ngModel",t.user.password)("status",s.dirty?s.invalid?"danger":"success":"basic")("required",t.getConfigValue("forms.validation.password.required"))("minlength",t.getConfigValue("forms.validation.password.minLength"))("maxlength",t.getConfigValue("forms.validation.password.maxLength")),n.uIk("aria-invalid",!(!s.invalid||!s.touched)||null),n.xp6(3),n.Q6J("ngIf",s.invalid&&s.touched),n.xp6(5),n.ekj("btn-pulse",t.submitted),n.Q6J("disabled",t.submitted||!g.valid)}},dependencies:[d.sg,d.O5,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.wO,r.nD,r.On,r.F,a.$9b,a.h8i,a.DPz],encapsulation:2}),e})()},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login"}]}];let M=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[p.Bz.forChild(b),p.Bz]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[d.ez,r.u5,p.Bz,a.PYG,a.nKr,a.T2N,a.MfT,M,m.S]}),e})()}}]);