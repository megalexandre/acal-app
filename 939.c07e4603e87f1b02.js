"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[939],{5939:(B,b,a)=>{a.r(b),a.d(b,{PlaceModule:()=>W});var T=a(3313),C=a(798),g=a(6895),s=a(4006),u=a(8833),A=a(9841),v=a(9650),p=a(4357),c=a(7672),e=a(2963),U=a(5382),m=a(3132);let h=(()=>{class o{constructor(n,t,r,i,d,_){this.data=n,this.formBuilder=t,this.activatedRoute=r,this.router=i,this.service=d,this.toastrService=_,this.loaded=!1,this.submmited=!1}createForm(){}selectAddress(n){this.address.setValue(n)}submit(){this.submmited=!0,!this.form.invalid&&this.commit()}commit(){}back(){this.router.navigate(["../list"],{relativeTo:this.activatedRoute})}getStatus(n){return this.form.get(n).valid&&(this.form.get(n).touched||this.submmited)?"success":this.form.get(n).valid||!this.form.get(n).touched&&!this.submmited?"basic":"danger"}get number(){return this.form.get("number")}get letter(){return this.form.get("letter")}get address(){return this.form.get("address")}get hasHydrometer(){return this.form.get("hasHydrometer")}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(U.D),e.Y36(s.qu),e.Y36(c.gz),e.Y36(c.F0),e.Y36(m.k),e.Y36(u.quB))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ngx-place"]],decls:1,vars:0,template:function(n,t){1&n&&e._UZ(0,"router-outlet")},dependencies:[c.lC],encapsulation:2}),o})();var f=a(7426),Z=a(4891);let q=(()=>{class o extends h{constructor(n,t,r,i,d,_){super(n,t,r,i,d,_),this.data=n,this.formBuilder=t,this.activatedRoute=r,this.router=i,this.service=d,this.toastrService=_}ngOnInit(){this.createForm()}createForm(){this.form=this.formBuilder.group({number:[null,s.kI.required],letter:[null,s.kI.required],address:[null,s.kI.required],other:[null],hasHydrometer:[null]})}commit(){this.service.save(this.form.value).subscribe(()=>{this.toastrService.success("Sucesso","Novo Registro adicionado"),this.router.navigate(["../list"],{relativeTo:this.activatedRoute})},n=>{this.toastrService.danger(n.error.detail,"N\xe3o foi possivel realizar a a\xe7\xe3o")})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(U.D),e.Y36(s.qu),e.Y36(c.gz),e.Y36(c.F0),e.Y36(m.k),e.Y36(u.quB))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ngx-place-add"]],features:[e.qOj],decls:84,vars:12,consts:[[3,"formGroup","submit"],[1,"row"],[1,"col-lg-12"],[1,"row","mb-3"],[1,"col-12"],[3,"status","addressChange"],[3,"message","show"],[1,"col-md-6","col-12"],["for","number",1,"label"],["id","number","mask","0*","nbInput","","fullWidth","","placeholder","N\xfamero:","formControlName","number",3,"status"],["for","letter",1,"label"],["id","letter","type","text","mask","A*","nbInput","","fullWidth","","placeholder","Letra:","formControlName","letter",3,"status"],["id","letter","type","text","nbInput","","fullWidth","","placeholder","Observa\xe7\xf5es:","formControlName","other",3,"status"],[1,"col-md-6","col-12","form-inline"],["title","Possui Hidr\xf4metro","formControlName","hasHydrometer","status","basic",3,"status"],[1,"d-flex","justify-content-between"],["type","button","nbButton","","outline","","status","basic",3,"click"],["icon","arrow-back-outline"],["type","submit","nbButton","","outline","","status","success"],["icon","save-outline"]],template:function(n,t){1&n&&(e.TgZ(0,"form",0),e.NdJ("submit",function(){return t.submit()}),e._uU(1,"\n  "),e.TgZ(2,"div",1),e._uU(3,"\n    "),e.TgZ(4,"div",2),e._uU(5,"\n      "),e.TgZ(6,"nb-card"),e._uU(7,"\n\n        "),e.TgZ(8,"nb-card-header"),e._uU(9,"\n          Nova Matr\xedcula\n        "),e.qZA(),e._uU(10,"\n\n        "),e.TgZ(11,"nb-card-body"),e._uU(12,"\n\n          "),e.TgZ(13,"div",3),e._uU(14,"\n\n            "),e.TgZ(15,"div",4),e._uU(16,"\n              "),e.TgZ(17,"ngx-select-address",5),e.NdJ("addressChange",function(i){return t.selectAddress(i)}),e.qZA(),e._uU(18,"\n              "),e._UZ(19,"error-message",6),e._uU(20,"\n            "),e.qZA(),e._uU(21,"\n\n          "),e.qZA(),e._uU(22,"\n\n          "),e.TgZ(23,"div",3),e._uU(24,"\n\n            "),e.TgZ(25,"div",7),e._uU(26,"\n              "),e.TgZ(27,"label",8),e._uU(28,"N\xfamero:"),e.qZA(),e._uU(29,"\n              "),e._UZ(30,"input",9),e._uU(31,"\n              "),e._UZ(32,"error-message",6),e._uU(33,"\n            "),e.qZA(),e._uU(34,"\n\n            "),e.TgZ(35,"div",7),e._uU(36,"\n              "),e.TgZ(37,"label",10),e._uU(38,"Letra:"),e.qZA(),e._uU(39,"\n              "),e._UZ(40,"input",11),e._uU(41,"\n              "),e._UZ(42,"error-message",6),e._uU(43,"\n            "),e.qZA(),e._uU(44,"\n\n            "),e.TgZ(45,"div",4),e._uU(46,"\n              "),e.TgZ(47,"label",10),e._uU(48,"Observa\xe7\xf5es:"),e.qZA(),e._uU(49,"\n              "),e._UZ(50,"textarea",12),e._uU(51,"\n            "),e.qZA(),e._uU(52,"\n          "),e.qZA(),e._uU(53,"\n\n          "),e.TgZ(54,"div",1),e._uU(55,"\n            "),e.TgZ(56,"div",13),e._uU(57,"\n              "),e.TgZ(58,"nb-checkbox",14),e._uU(59,"Possui Hidr\xf4metro?"),e.qZA(),e._uU(60,"\n            "),e.qZA(),e._uU(61,"\n          "),e.qZA(),e._uU(62,"\n\n        "),e.qZA(),e._uU(63,"\n        "),e.TgZ(64,"nb-card-footer"),e._uU(65,"\n\n          "),e.TgZ(66,"div",15),e._uU(67,"\n            "),e.TgZ(68,"button",16),e.NdJ("click",function(){return t.back()}),e._uU(69,"\n              "),e._UZ(70,"nb-icon",17),e._uU(71,"\n            "),e.qZA(),e._uU(72,"\n\n            "),e.TgZ(73,"button",18),e._uU(74,"\n              "),e._UZ(75,"nb-icon",19),e._uU(76,"\n            "),e.qZA(),e._uU(77,"\n          "),e.qZA(),e._uU(78,"\n\n        "),e.qZA(),e._uU(79,"\n      "),e.qZA(),e._uU(80,"\n\n    "),e.qZA(),e._uU(81,"\n\n  "),e.qZA(),e._uU(82,"\n"),e.qZA(),e._uU(83,"\n")),2&n&&(e.Q6J("formGroup",t.form),e.xp6(17),e.Q6J("status",t.getStatus("address")),e.xp6(2),e.Q6J("message","Endere\xe7o \xe9 obrigat\xf3rio")("show",(null==t.address.errors?null:t.address.errors.required)&&(t.submmited||t.form.touched)),e.xp6(11),e.Q6J("status",t.getStatus("number")),e.xp6(2),e.Q6J("message","N\xfamero \xe9 obrigat\xf3rio")("show",(null==t.number.errors?null:t.number.errors.required)&&(t.submmited||t.form.touched)),e.xp6(8),e.Q6J("status",t.getStatus("letter")),e.xp6(2),e.Q6J("message","Letra \xe9 obrigat\xf3rio")("show",(null==t.letter.errors?null:t.letter.errors.required)&&(t.submmited||t.form.touched)),e.xp6(8),e.Q6J("status",t.getStatus("other")),e.xp6(8),e.Q6J("status",t.getStatus("hasHydrometer")))},dependencies:[u.Asz,u.yKW,u.XWE,u.ndF,u.h8i,u.DPz,f.H,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,u.fMN,p.hx,Z.H,u.NTf],styles:["nb-checkbox[_ngcontent-%COMP%]{margin-bottom:1rem}.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%]{flex:1}.form-inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 1.5rem 1.5rem 0}nb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding-bottom:0}"]}),o})();function P(o,l){if(1&o){const n=e.EpF();e.TgZ(0,"div"),e._uU(1,"\n    "),e.TgZ(2,"div",1),e._uU(3,"\n      "),e.TgZ(4,"div",2),e._uU(5,"\n        "),e.TgZ(6,"nb-card"),e._uU(7,"\n\n          "),e.TgZ(8,"nb-card-header"),e._uU(9,"\n            Deletar Matr\xedcula\n          "),e.qZA(),e._uU(10,"\n\n          "),e.TgZ(11,"nb-card-body"),e._uU(12,"\n            "),e.TgZ(13,"div",3),e._uU(14,"\n\n              "),e.TgZ(15,"div",4),e._uU(16,"\n                "),e.TgZ(17,"input",5),e.NdJ("ngModelChange",function(r){e.CHM(n);const i=e.oxw();return e.KtG(i.place.address.name=r)}),e.qZA(),e._uU(18,"\n              "),e.qZA(),e._uU(19,"\n\n            "),e.qZA(),e._uU(20,"\n\n            "),e.TgZ(21,"div",3),e._uU(22,"\n\n              "),e.TgZ(23,"div",6),e._uU(24,"\n                "),e.TgZ(25,"label",7),e._uU(26,"N\xfamero:"),e.qZA(),e._uU(27,"\n                "),e.TgZ(28,"input",8),e.NdJ("ngModelChange",function(r){e.CHM(n);const i=e.oxw();return e.KtG(i.place.number=r)}),e.qZA(),e._uU(29,"\n              "),e.qZA(),e._uU(30,"\n\n              "),e.TgZ(31,"div",6),e._uU(32,"\n                "),e.TgZ(33,"label",9),e._uU(34,"Letra:"),e.qZA(),e._uU(35,"\n                "),e.TgZ(36,"input",10),e.NdJ("ngModelChange",function(r){e.CHM(n);const i=e.oxw();return e.KtG(i.place.letter=r)}),e.qZA(),e._uU(37,"\n              "),e.qZA(),e._uU(38,"\n\n              "),e.TgZ(39,"div",4),e._uU(40,"\n                "),e.TgZ(41,"label",9),e._uU(42,"Observa\xe7\xf5es:"),e.qZA(),e._uU(43,"\n                "),e.TgZ(44,"textarea",11),e.NdJ("ngModelChange",function(r){e.CHM(n);const i=e.oxw();return e.KtG(i.place.other=r)}),e.qZA(),e._uU(45,"\n              "),e.qZA(),e._uU(46,"\n\n            "),e.qZA(),e._uU(47,"\n\n            "),e.TgZ(48,"div",1),e._uU(49,"\n              "),e.TgZ(50,"div",12),e._uU(51,"\n                "),e.TgZ(52,"nb-checkbox",13),e.NdJ("ngModelChange",function(r){e.CHM(n);const i=e.oxw();return e.KtG(i.place.hasHydrometer=r)}),e._uU(53,"Possui Hidr\xf4metro?"),e.qZA(),e._uU(54,"\n              "),e.qZA(),e._uU(55,"\n            "),e.qZA(),e._uU(56,"\n\n\n          "),e.qZA(),e._uU(57,"\n          "),e.TgZ(58,"nb-card-footer"),e._uU(59,"\n\n            "),e.TgZ(60,"div",14),e._uU(61,"\n              "),e.TgZ(62,"button",15),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.back())}),e._uU(63,"\n                "),e._UZ(64,"nb-icon",16),e._uU(65,"\n              "),e.qZA(),e._uU(66,"\n\n              "),e.TgZ(67,"button",17),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.submit())}),e._uU(68,"\n                "),e._UZ(69,"nb-icon",18),e._uU(70,"\n              "),e.qZA(),e._uU(71,"\n            "),e.qZA(),e._uU(72,"\n\n          "),e.qZA(),e._uU(73,"\n        "),e.qZA(),e._uU(74,"\n\n      "),e.qZA(),e._uU(75,"\n\n    "),e.qZA(),e._uU(76,"\n\n"),e.qZA()}if(2&o){const n=e.oxw();e.xp6(17),e.Q6J("ngModel",n.place.address.name),e.xp6(11),e.Q6J("ngModel",n.place.number),e.xp6(8),e.Q6J("ngModel",n.place.letter),e.xp6(8),e.Q6J("ngModel",n.place.other)("disabled",!0),e.xp6(8),e.Q6J("ngModel",n.place.hasHydrometer)}}let x=(()=>{class o extends h{constructor(n,t,r,i,d,_){super(n,r,i,d,t,_),this.data=n,this.service=t,this.formBuilder=r,this.activatedRoute=i,this.router=d,this.toastrService=_}ngOnInit(){this.createForm()}createForm(){this.data.id||this.back(),this.id=this.data.id,this.service.getById(this.id).subscribe(n=>{this.place=n,this.loaded=!0})}commit(){this.service.delete(this.data.id).subscribe(()=>{this.toastrService.success("Sucesso","Novo Registro adicionado"),this.router.navigate(["../list"],{relativeTo:this.activatedRoute})},n=>{this.toastrService.danger(n.error.detail,"N\xe3o foi possivel realizar a a\xe7\xe3o")})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(U.D),e.Y36(m.k),e.Y36(s.qu),e.Y36(c.gz),e.Y36(c.F0),e.Y36(u.quB))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ngx-place-delete"]],features:[e.qOj],decls:3,vars:1,consts:[[4,"ngIf"],[1,"row"],[1,"col-lg-12"],[1,"row","mb-3"],[1,"col-12"],["nbInput","","fullWidth","","disabled","",3,"ngModel","ngModelChange"],[1,"col-md-6","col-12"],["for","number",1,"label"],["id","number","mask","0*","nbInput","","fullWidth","","placeholder","N\xfamero:","disabled","",3,"ngModel","ngModelChange"],["for","letter",1,"label"],["id","letter","type","text","mask","A*","nbInput","","fullWidth","","placeholder","Letra:","disabled","",3,"ngModel","ngModelChange"],["id","letter","type","text","nbInput","","fullWidth","","placeholder","Observa\xe7\xf5es:",3,"ngModel","disabled","ngModelChange"],[1,"col-md-6","col-12","form-inline"],["title","Possui Hidr\xf4metro","disabled","","status","basic",3,"ngModel","ngModelChange"],[1,"d-flex","justify-content-between"],["type","button","nbButton","","outline","","status","basic",3,"click"],["icon","arrow-back-outline"],["type","submit","nbButton","","outline","","status","danger",3,"click"],["icon","trash-2-outline"]],template:function(n,t){1&n&&(e._uU(0,"\n"),e.YNc(1,P,77,6,"div",0),e._uU(2,"\n")),2&n&&(e.xp6(1),e.Q6J("ngIf",t.loaded))},dependencies:[g.O5,u.Asz,u.yKW,u.XWE,u.ndF,u.h8i,u.DPz,s.Fj,s.JJ,s.On,u.fMN,p.hx,u.NTf]}),o})();function M(o,l){if(1&o){const n=e.EpF();e.TgZ(0,"div"),e._uU(1,"\n  "),e.TgZ(2,"form",1),e.NdJ("submit",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.submit())}),e._uU(3,"\n    "),e.TgZ(4,"div",2),e._uU(5,"\n      "),e.TgZ(6,"div",3),e._uU(7,"\n        "),e.TgZ(8,"nb-card"),e._uU(9,"\n\n          "),e.TgZ(10,"nb-card-header"),e._uU(11,"\n            Atualizar Matr\xedcula\n          "),e.qZA(),e._uU(12,"\n\n          "),e.TgZ(13,"nb-card-body"),e._uU(14,"\n            "),e.TgZ(15,"div",4),e._uU(16,"\n\n              "),e.TgZ(17,"div",5),e._uU(18,"\n                "),e.TgZ(19,"ngx-select-address",6),e.NdJ("addressChange",function(r){e.CHM(n);const i=e.oxw();return e.KtG(i.selectAddress(r))}),e.qZA(),e._uU(20,"\n                "),e._UZ(21,"error-message",7),e._uU(22,"\n              "),e.qZA(),e._uU(23,"\n\n            "),e.qZA(),e._uU(24,"\n\n            "),e.TgZ(25,"div",4),e._uU(26,"\n\n              "),e.TgZ(27,"div",8),e._uU(28,"\n                "),e.TgZ(29,"label",9),e._uU(30,"N\xfamero:"),e.qZA(),e._uU(31,"\n                "),e._UZ(32,"input",10),e._uU(33,"\n                "),e._UZ(34,"error-message",7),e._uU(35,"\n              "),e.qZA(),e._uU(36,"\n\n              "),e.TgZ(37,"div",8),e._uU(38,"\n                "),e.TgZ(39,"label",11),e._uU(40,"Letra:"),e.qZA(),e._uU(41,"\n                "),e._UZ(42,"input",12),e._uU(43,"\n                "),e._UZ(44,"error-message",7),e._uU(45,"\n              "),e.qZA(),e._uU(46,"\n\n              "),e.TgZ(47,"div",5),e._uU(48,"\n                "),e.TgZ(49,"label",11),e._uU(50,"Observa\xe7\xf5es:"),e.qZA(),e._uU(51,"\n                "),e._UZ(52,"textarea",13),e._uU(53,"\n              "),e.qZA(),e._uU(54,"\n            "),e.qZA(),e._uU(55,"\n\n            "),e.TgZ(56,"div",2),e._uU(57,"\n              "),e.TgZ(58,"div",14),e._uU(59,"\n                "),e.TgZ(60,"nb-checkbox",15),e._uU(61,"Possui Hidr\xf4metro?"),e.qZA(),e._uU(62,"\n              "),e.qZA(),e._uU(63,"\n            "),e.qZA(),e._uU(64,"\n\n          "),e.qZA(),e._uU(65,"\n\n          "),e.TgZ(66,"nb-card-footer"),e._uU(67,"\n\n            "),e.TgZ(68,"div",16),e._uU(69,"\n              "),e.TgZ(70,"button",17),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.back())}),e._uU(71,"\n                "),e._UZ(72,"nb-icon",18),e._uU(73,"\n              "),e.qZA(),e._uU(74,"\n\n              "),e.TgZ(75,"button",19),e._uU(76,"\n                "),e._UZ(77,"nb-icon",20),e._uU(78,"\n              "),e.qZA(),e._uU(79,"\n            "),e.qZA(),e._uU(80,"\n\n          "),e.qZA(),e._uU(81,"\n        "),e.qZA(),e._uU(82,"\n\n      "),e.qZA(),e._uU(83,"\n\n    "),e.qZA(),e._uU(84,"\n  "),e.qZA(),e._uU(85,"\n\n"),e.qZA()}if(2&o){const n=e.oxw();e.xp6(2),e.Q6J("formGroup",n.form),e.xp6(17),e.Q6J("status",n.getStatus("address"))("address",n.address.value),e.xp6(2),e.Q6J("message","Endere\xe7o \xe9 obrigat\xf3rio")("show",(null==n.address.errors?null:n.address.errors.required)&&(n.submmited||n.form.touched)),e.xp6(11),e.Q6J("status",n.getStatus("number")),e.xp6(2),e.Q6J("message","N\xfamero \xe9 obrigat\xf3rio")("show",(null==n.number.errors?null:n.number.errors.required)&&(n.submmited||n.form.touched)),e.xp6(8),e.Q6J("status",n.getStatus("letter")),e.xp6(2),e.Q6J("message","Letra \xe9 obrigat\xf3rio")("show",(null==n.letter.errors?null:n.letter.errors.required)&&(n.submmited||n.form.touched)),e.xp6(8),e.Q6J("status",n.getStatus("other")),e.xp6(8),e.Q6J("status",n.getStatus("hasHydrometer"))}}let J=(()=>{class o extends h{constructor(n,t,r,i,d,_){super(n,r,i,d,t,_),this.data=n,this.service=t,this.formBuilder=r,this.activatedRoute=i,this.router=d,this.toastrService=_}ngOnInit(){this.createForm()}createForm(){this.data.id||this.back(),this.id=this.data.id,this.service.getById(this.id).subscribe(n=>{this.place=n,this.form=this.formBuilder.group({id:[n.id,s.kI.required],number:[n.number,s.kI.required],letter:[n.letter,s.kI.required],address:[n.address,s.kI.required],hasHydrometer:[n.hasHydrometer],other:[n.other]}),this.loaded=!0})}commit(){this.service.update(this.form.value).subscribe(()=>{this.toastrService.success("Sucesso","Novo Registro adicionado"),this.router.navigate(["../list"],{relativeTo:this.activatedRoute})},n=>{this.toastrService.danger(n.error.detail,"N\xe3o foi possivel realizar a a\xe7\xe3o")})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(U.D),e.Y36(m.k),e.Y36(s.qu),e.Y36(c.gz),e.Y36(c.F0),e.Y36(u.quB))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ngx-place-edit"]],features:[e.qOj],decls:3,vars:1,consts:[[4,"ngIf"],[3,"formGroup","submit"],[1,"row"],[1,"col-lg-12"],[1,"row","mb-3"],[1,"col-12"],[3,"status","address","addressChange"],[3,"message","show"],[1,"col-md-6","col-12"],["for","number",1,"label"],["id","number","mask","0*","nbInput","","fullWidth","","placeholder","N\xfamero:","formControlName","number",3,"status"],["for","letter",1,"label"],["id","letter","type","text","mask","A*","nbInput","","fullWidth","","placeholder","Letra:","formControlName","letter",3,"status"],["id","letter","type","text","nbInput","","fullWidth","","placeholder","Observa\xe7\xf5es:","formControlName","other",3,"status"],[1,"col-md-6","col-12","form-inline"],["title","Possui Hidr\xf4metro","formControlName","hasHydrometer","status","basic",3,"status"],[1,"d-flex","justify-content-between"],["type","button","nbButton","","outline","","status","basic",3,"click"],["icon","arrow-back-outline"],["type","submit","nbButton","","outline","","status","warning"],["icon","edit-2-outline"]],template:function(n,t){1&n&&(e._uU(0,"\n"),e.YNc(1,M,86,13,"div",0),e._uU(2,"\n")),2&n&&(e.xp6(1),e.Q6J("ngIf",t.loaded))},dependencies:[g.O5,u.Asz,u.yKW,u.XWE,u.ndF,u.h8i,u.DPz,f.H,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,u.fMN,p.hx,Z.H,u.NTf]}),o})();var y=a(7620),F=a(1141),N=a(5656),k=a(319);function w(o,l){1&o&&e._UZ(0,"nb-icon",17)}function O(o,l){1&o&&e._UZ(0,"nb-icon",18)}function I(o,l){1&o&&e._UZ(0,"nb-icon",17)}function L(o,l){1&o&&e._UZ(0,"nb-icon",18)}function Y(o,l){1&o&&e._UZ(0,"nb-icon",17)}function Q(o,l){1&o&&e._UZ(0,"nb-icon",18)}function E(o,l){if(1&o){const n=e.EpF();e.TgZ(0,"tr"),e._uU(1,"\n          "),e.TgZ(2,"td",19),e._uU(3),e.qZA(),e._uU(4,"\n          "),e.TgZ(5,"td",19),e._uU(6),e.qZA(),e._uU(7,"\n          "),e.TgZ(8,"td",19),e._uU(9),e.qZA(),e._uU(10,"\n\n          "),e.TgZ(11,"td",19),e._uU(12,"\n            "),e.TgZ(13,"button",20),e.NdJ("click",function(){const i=e.CHM(n).$implicit,d=e.oxw();return e.KtG(d.edit(i.id))}),e._uU(14,"\n              "),e._UZ(15,"nb-icon",21),e._uU(16,"\n            "),e.qZA(),e._uU(17,"\n          "),e.qZA(),e._uU(18,"\n\n          "),e.TgZ(19,"td",19),e._uU(20,"\n            "),e.TgZ(21,"button",22),e.NdJ("click",function(){const i=e.CHM(n).$implicit,d=e.oxw();return e.KtG(d.remove(i.id))}),e._uU(22,"\n              "),e._UZ(23,"nb-icon",23),e._uU(24,"\n            "),e.qZA(),e._uU(25,"\n          "),e.qZA(),e._uU(26,"\n        "),e.qZA()}if(2&o){const n=l.$implicit;e.xp6(3),e.Oqu(n.address.name),e.xp6(3),e.Oqu(n.number),e.xp6(3),e.Oqu(n.letter)}}function H(o,l){if(1&o){const n=e.EpF();e.TgZ(0,"td",24),e._uU(1,"\n            "),e.TgZ(2,"ngx-app-table-footer",25),e.NdJ("search",function(r){e.CHM(n);const i=e.oxw();return e.KtG(i.paginate(r))}),e._uU(3,"\n            "),e.qZA(),e._uU(4,"\n          "),e.qZA()}if(2&o){const n=e.oxw();e.xp6(2),e.Q6J("page",n.page)}}const S=[{path:"",component:h,children:[{path:"list",component:(()=>{class o extends y.n{constructor(n,t,r,i){super(n,t,r,i),this.service=n,this.activatedRoute=t,this.router=r,this.data=i,this.filter=new F.x}ngOnInit(){super.init()}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(m.k),e.Y36(c.gz),e.Y36(c.F0),e.Y36(U.D))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ngx-place-list"]],features:[e.qOj],decls:97,vars:14,consts:[[3,"nbSpinner"],[1,"col-9","align-middle",3,"click"],["icon","arrow-ios-upward-outline",4,"ngIf"],["icon","arrow-ios-downward-outline",4,"ngIf"],[1,"col-1","align-middle",3,"click"],["colspan","2",1,"col-1","align-middle"],["nbButton","","outline","","status","basic","fullWidth","",3,"click"],["icon","plus-outline"],[3,"address","showTitle","addSelectOption","addressChange"],["type","text","mask","0*","nbInput","","placeholder","N\xfamero","fullWidth","",3,"ngModel","keydown.enter","ngModelChange"],["type","text","mask","A*","nbInput","","placeholder","Letra","fullWidth","",3,"ngModel","keydown.enter","ngModelChange"],["nbButton","","outline","","status","basic","type","button","fullWidth","",3,"click"],["icon","undo-outline"],["nbButton","","outline","","status","success","fullWidth","",3,"click"],["icon","funnel-outline"],[4,"ngFor","ngForOf"],["colspan","5",4,"ngIf"],["icon","arrow-ios-upward-outline"],["icon","arrow-ios-downward-outline"],[1,"align-middle"],["nbButton","","outline","","status","warning","fullWidth","",3,"click"],["icon","edit-2-outline"],["nbButton","","outline","","status","danger","fullWidth","",3,"click"],["icon","trash-2-outline"],["colspan","5"],[3,"page","search"]],template:function(n,t){1&n&&(e.TgZ(0,"nb-card"),e._uU(1,"\n\n  "),e.TgZ(2,"nb-card-header"),e._uU(3,"\n    Matr\xedculas\n  "),e.qZA(),e._uU(4,"\n\n  "),e.TgZ(5,"nb-card-body"),e._uU(6,"\n\n    "),e.TgZ(7,"ngx-app-table",0),e._uU(8,"\n      "),e.TgZ(9,"thead"),e._uU(10,"\n        "),e.TgZ(11,"tr"),e._uU(12,"\n          "),e.TgZ(13,"th",1),e.NdJ("click",function(){return t.order("address.name")}),e._uU(14,"\n            Logradouro:\n            "),e.YNc(15,w,1,0,"nb-icon",2),e._uU(16,"\n            "),e.YNc(17,O,1,0,"nb-icon",3),e._uU(18,"\n          "),e.qZA(),e._uU(19,"\n\n          "),e.TgZ(20,"th",4),e.NdJ("click",function(){return t.order("number")}),e._uU(21,"\n              N\xfamero:\n              "),e.YNc(22,I,1,0,"nb-icon",2),e._uU(23,"\n              "),e.YNc(24,L,1,0,"nb-icon",3),e._uU(25,"\n          "),e.qZA(),e._uU(26,"\n\n          "),e.TgZ(27,"th",4),e.NdJ("click",function(){return t.order("letter")}),e._uU(28,"\n            Letra:\n            "),e.YNc(29,Y,1,0,"nb-icon",2),e._uU(30,"\n            "),e.YNc(31,Q,1,0,"nb-icon",3),e._uU(32,"\n          "),e.qZA(),e._uU(33,"\n\n          "),e.TgZ(34,"th",5),e._uU(35,"\n            "),e.TgZ(36,"button",6),e.NdJ("click",function(){return t.add()}),e._uU(37,"\n              "),e._UZ(38,"nb-icon",7),e._uU(39,"\n            "),e.qZA(),e._uU(40,"\n          "),e.qZA(),e._uU(41,"\n\n        "),e.qZA(),e._uU(42,"\n      "),e.qZA(),e._uU(43,"\n\n      "),e.TgZ(44,"thead"),e._uU(45,"\n        "),e.TgZ(46,"tr"),e._uU(47,"\n\n          "),e.TgZ(48,"th"),e._uU(49,"\n            "),e.TgZ(50,"ngx-select-address",8),e.NdJ("addressChange",function(i){return t.filter.address=i})("addressChange",function(){return t.search()}),e.qZA(),e._uU(51,"\n          "),e.qZA(),e._uU(52,"\n\n          "),e.TgZ(53,"th"),e._uU(54,"\n            "),e.TgZ(55,"input",9),e.NdJ("keydown.enter",function(){return t.search()})("ngModelChange",function(i){return t.filter.number=i}),e.qZA(),e._uU(56,"\n          "),e.qZA(),e._uU(57,"\n\n          "),e.TgZ(58,"th"),e._uU(59,"\n            "),e.TgZ(60,"input",10),e.NdJ("keydown.enter",function(){return t.search()})("ngModelChange",function(i){return t.filter.letter=i}),e.qZA(),e._uU(61,"\n          "),e.qZA(),e._uU(62,"\n\n          "),e.TgZ(63,"th"),e._uU(64,"\n            "),e.TgZ(65,"button",11),e.NdJ("click",function(){return t.reset()}),e._uU(66,"\n              "),e._UZ(67,"nb-icon",12),e._uU(68,"\n            "),e.qZA(),e._uU(69,"\n          "),e.qZA(),e._uU(70,"\n\n          "),e.TgZ(71,"th"),e._uU(72,"\n            "),e.TgZ(73,"button",13),e.NdJ("click",function(){return t.search()}),e._uU(74,"\n              "),e._UZ(75,"nb-icon",14),e._uU(76,"\n            "),e.qZA(),e._uU(77,"\n          "),e.qZA(),e._uU(78,"\n\n        "),e.qZA(),e._uU(79,"\n      "),e.qZA(),e._uU(80,"\n\n      "),e.TgZ(81,"tbody"),e._uU(82,"\n        "),e.YNc(83,E,27,3,"tr",15),e._uU(84,"\n      "),e.qZA(),e._uU(85,"\n\n      "),e.TgZ(86,"tfoot"),e._uU(87,"\n        "),e.TgZ(88,"tr"),e._uU(89,"\n          "),e.YNc(90,H,5,1,"td",16),e._uU(91,"\n        "),e.qZA(),e._uU(92,"\n      "),e.qZA(),e._uU(93,"\n\n    "),e.qZA(),e._uU(94,"\n\n  "),e.qZA(),e._uU(95,"\n\n"),e.qZA(),e._uU(96,"\n")),2&n&&(e.xp6(7),e.Q6J("nbSpinner",t.loading),e.xp6(8),e.Q6J("ngIf","address.name"===t.filter.sortedField&&"ASC"===t.filter.direction),e.xp6(2),e.Q6J("ngIf","address.name"===t.filter.sortedField&&"DESC"===t.filter.direction),e.xp6(5),e.Q6J("ngIf","number"===t.filter.sortedField&&"ASC"===t.filter.direction),e.xp6(2),e.Q6J("ngIf","number"===t.filter.sortedField&&"DESC"===t.filter.direction),e.xp6(5),e.Q6J("ngIf","letter"===t.filter.sortedField&&"ASC"===t.filter.direction),e.xp6(2),e.Q6J("ngIf","letter"===t.filter.sortedField&&"DESC"===t.filter.direction),e.xp6(19),e.Q6J("address",t.filter.address)("showTitle",!1)("addSelectOption",!0),e.xp6(5),e.Q6J("ngModel",t.filter.number),e.xp6(5),e.Q6J("ngModel",t.filter.letter),e.xp6(23),e.Q6J("ngForOf",null==t.page?null:t.page.content),e.xp6(7),e.Q6J("ngIf",t.page))},dependencies:[g.sg,g.O5,u.Asz,u.yKW,u.ndF,u.h8i,u.DPz,N.M,k.L,u.Q7R,s.Fj,s.JJ,s.On,u.fMN,p.hx,Z.H],styles:["[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{border:none;padding-top:var(--card-header-with-select-padding-top);padding-bottom:var(--card-header-with-select-padding-bottom)}nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}nb-card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:1rem}.full-name-inputs[_ngcontent-%COMP%], .validation-checkboxes[_ngcontent-%COMP%]{display:flex;margin:0 -.5rem}.full-name-inputs[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .validation-checkboxes[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 .5rem}.checkbox-radio[_ngcontent-%COMP%]{display:flex}.demo-items[_ngcontent-%COMP%]{flex:1 0 33%}"]}),o})()},{path:"add",component:q},{path:"edit",component:J},{path:"delete",component:x},{path:"",redirectTo:"list",pathMatch:"full"},{path:"**",redirectTo:"list"}]}];let D=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(S),c.Bz]}),o})(),W=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[m.k,C.D],imports:[g.ez,D,u.zyh,u.nKr,u.T2N,A.I,u.uuI,s.u5,s.UX,u.KdK,v.d,u.V7y,p.yI.forChild(),u.IIj,T.D,u.MfT]}),o})()}}]);