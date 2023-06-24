"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[210],{4210:(T,h,a)=>{a.r(h),a.d(h,{AddressModule:()=>I});var p=a(6895),r=a(4006),s=a(8833),Z=a(9841),A=a(9650),m=a(4357),c=a(7672),n=a(2963),U=a(5382),g=a(798);let f=(()=>{class e{constructor(t,o,i,u,l,_){this.data=t,this.formBuilder=o,this.activatedRoute=i,this.router=u,this.service=l,this.toastrService=_,this.loaded=!1,this.submmited=!1}createForm(){}submit(){this.submmited=!0,!this.form.invalid&&this.commit()}commit(){}back(){this.router.navigate(["../list"],{relativeTo:this.activatedRoute})}getStatus(t){return this.form.get(t).valid&&(this.form.get(t).touched||this.submmited)?"success":this.form.get(t).valid||!this.form.get(t).touched&&!this.submmited?"basic":"danger"}get name(){return this.form.get("name")}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(U.D),n.Y36(r.qu),n.Y36(c.gz),n.Y36(c.F0),n.Y36(g.D),n.Y36(s.quB))},e.\u0275cmp=n.Xpm({type:e,selectors:[["ngx-address"]],decls:1,vars:0,template:function(t,o){1&t&&n._UZ(0,"router-outlet")},dependencies:[c.lC],encapsulation:2}),e})();var b=a(7426);let v=(()=>{class e extends f{constructor(t,o,i,u,l,_){super(t,o,i,u,l,_),this.data=t,this.formBuilder=o,this.activatedRoute=i,this.router=u,this.service=l,this.toastrService=_}ngOnInit(){this.createForm()}createForm(){this.form=this.formBuilder.group({name:[null,r.kI.required]})}commit(){this.service.save(this.form.value).subscribe(()=>{this.toastrService.success("Sucesso","Novo Registro adicionado"),this.router.navigate(["../list"],{relativeTo:this.activatedRoute})},t=>{this.toastrService.danger(t.error.detail,"N\xe3o foi possivel realizar a a\xe7\xe3o")})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(U.D),n.Y36(r.qu),n.Y36(c.gz),n.Y36(c.F0),n.Y36(g.D),n.Y36(s.quB))},e.\u0275cmp=n.Xpm({type:e,selectors:[["ngx-address-add"]],features:[n.qOj],decls:47,vars:4,consts:[[3,"formGroup","submit"],[1,"row"],[1,"col-lg-12"],[1,"row","mb-3"],[1,"col-12"],["for","name",1,"label"],["id","name","type","text","nbInput","","fullWidth","","placeholder","Nome:","formControlName","name",3,"status"],[3,"message","show"],[1,"d-flex","justify-content-between"],["type","button","nbButton","","outline","","status","basic",3,"click"],["icon","arrow-back-outline"],["type","submit","nbButton","","outline","","status","success"],["icon","save-outline"]],template:function(t,o){1&t&&(n.TgZ(0,"form",0),n.NdJ("submit",function(){return o.submit()}),n._uU(1,"\n  "),n.TgZ(2,"div",1),n._uU(3,"\n    "),n.TgZ(4,"div",2),n._uU(5,"\n      "),n.TgZ(6,"nb-card"),n._uU(7,"\n\n        "),n.TgZ(8,"nb-card-header"),n._uU(9,"\n          Novo Endere\xe7o\n        "),n.qZA(),n._uU(10,"\n\n        "),n.TgZ(11,"nb-card-body"),n._uU(12,"\n          "),n.TgZ(13,"div",3),n._uU(14,"\n\n            "),n.TgZ(15,"div",4),n._uU(16,"\n              "),n.TgZ(17,"label",5),n._uU(18,"Nome:"),n.qZA(),n._uU(19,"\n              "),n._UZ(20,"input",6),n._uU(21,"\n              "),n._UZ(22,"error-message",7),n._uU(23,"\n            "),n.qZA(),n._uU(24,"\n\n          "),n.qZA(),n._uU(25,"\n\n        "),n.qZA(),n._uU(26,"\n        "),n.TgZ(27,"nb-card-footer"),n._uU(28,"\n\n          "),n.TgZ(29,"div",8),n._uU(30,"\n            "),n.TgZ(31,"button",9),n.NdJ("click",function(){return o.back()}),n._uU(32,"\n              "),n._UZ(33,"nb-icon",10),n._uU(34,"\n            "),n.qZA(),n._uU(35,"\n\n            "),n.TgZ(36,"button",11),n._uU(37,"\n              "),n._UZ(38,"nb-icon",12),n._uU(39,"\n            "),n.qZA(),n._uU(40,"\n          "),n.qZA(),n._uU(41,"\n\n        "),n.qZA(),n._uU(42,"\n      "),n.qZA(),n._uU(43,"\n\n    "),n.qZA(),n._uU(44,"\n\n  "),n.qZA(),n._uU(45,"\n"),n.qZA(),n._uU(46,"\n")),2&t&&(n.Q6J("formGroup",o.form),n.xp6(20),n.Q6J("status",o.getStatus("name")),n.xp6(2),n.Q6J("message","Nome \xe9 obrigat\xf3rio")("show",(null==o.name.errors?null:o.name.errors.required)&&(o.submmited||o.form.touched)))},dependencies:[s.Asz,s.yKW,s.XWE,s.ndF,s.h8i,s.DPz,b.H,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,s.fMN]}),e})();function C(e,d){if(1&e){const t=n.EpF();n.TgZ(0,"div"),n._uU(1,"\n    "),n.TgZ(2,"div",1),n._uU(3,"\n      "),n.TgZ(4,"div",2),n._uU(5,"\n        "),n.TgZ(6,"nb-card"),n._uU(7,"\n\n          "),n.TgZ(8,"nb-card-header"),n._uU(9,"\n            Delete Endere\xe7o\n          "),n.qZA(),n._uU(10,"\n\n          "),n.TgZ(11,"nb-card-body"),n._uU(12,"\n            "),n.TgZ(13,"div",3),n._uU(14,"\n\n              "),n.TgZ(15,"div",4),n._uU(16,"\n                "),n.TgZ(17,"label",5),n._uU(18,"Nome:"),n.qZA(),n._uU(19,"\n                "),n.TgZ(20,"input",6),n.NdJ("ngModelChange",function(i){n.CHM(t);const u=n.oxw();return n.KtG(u.address.name=i)}),n.qZA(),n._uU(21,"\n              "),n.qZA(),n._uU(22,"\n\n            "),n.qZA(),n._uU(23,"\n\n          "),n.qZA(),n._uU(24,"\n          "),n.TgZ(25,"nb-card-footer"),n._uU(26,"\n\n            "),n.TgZ(27,"div",7),n._uU(28,"\n              "),n.TgZ(29,"button",8),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.back())}),n._uU(30,"\n                "),n._UZ(31,"nb-icon",9),n._uU(32,"\n              "),n.qZA(),n._uU(33,"\n\n              "),n.TgZ(34,"button",10),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.commit())}),n._uU(35,"\n                "),n._UZ(36,"nb-icon",11),n._uU(37,"\n              "),n.qZA(),n._uU(38,"\n            "),n.qZA(),n._uU(39,"\n\n          "),n.qZA(),n._uU(40,"\n        "),n.qZA(),n._uU(41,"\n\n      "),n.qZA(),n._uU(42,"\n\n    "),n.qZA(),n._uU(43,"\n\n"),n.qZA()}if(2&e){const t=n.oxw();n.xp6(20),n.Q6J("ngModel",t.address.name)}}let q=(()=>{class e extends f{constructor(t,o,i,u,l,_){super(t,i,u,l,o,_),this.data=t,this.service=o,this.formBuilder=i,this.activatedRoute=u,this.router=l,this.toastrService=_}ngOnInit(){this.createForm()}createForm(){this.data.id||this.back(),this.id=this.data.id,this.service.getById(this.id).subscribe(t=>{this.address=t,this.loaded=!0})}commit(){this.service.delete(this.data.id).subscribe(()=>{this.toastrService.success("Sucesso","Novo Registro adicionado"),this.router.navigate(["../list"],{relativeTo:this.activatedRoute})},t=>{this.toastrService.danger(t.error.detail,"N\xe3o foi possivel realizar a a\xe7\xe3o")})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(U.D),n.Y36(g.D),n.Y36(r.qu),n.Y36(c.gz),n.Y36(c.F0),n.Y36(s.quB))},e.\u0275cmp=n.Xpm({type:e,selectors:[["ngx-address-delete"]],features:[n.qOj],decls:3,vars:1,consts:[[4,"ngIf"],[1,"row"],[1,"col-lg-12"],[1,"row","mb-3"],[1,"col-12"],["for","name",1,"label"],["id","name","type","text","nbInput","","fullWidth","","placeholder","Nome:","disabled","",3,"ngModel","ngModelChange"],[1,"d-flex","justify-content-between"],["type","button","nbButton","","outline","","status","basic",3,"click"],["icon","arrow-back-outline"],["type","button","nbButton","","outline","","status","danger",3,"click"],["icon","trash-2-outline"]],template:function(t,o){1&t&&(n._uU(0,"\n"),n.YNc(1,C,44,1,"div",0),n._uU(2,"\n")),2&t&&(n.xp6(1),n.Q6J("ngIf",o.loaded))},dependencies:[p.O5,s.Asz,s.yKW,s.XWE,s.ndF,s.h8i,s.DPz,r.Fj,r.JJ,r.On,s.fMN]}),e})();function x(e,d){if(1&e){const t=n.EpF();n.TgZ(0,"div"),n._uU(1,"\n  "),n.TgZ(2,"form",1),n.NdJ("submit",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.submit())}),n._uU(3,"\n    "),n.TgZ(4,"div",2),n._uU(5,"\n      "),n.TgZ(6,"div",3),n._uU(7,"\n        "),n.TgZ(8,"nb-card"),n._uU(9,"\n\n          "),n.TgZ(10,"nb-card-header"),n._uU(11,"\n            Atualizar Endere\xe7o\n          "),n.qZA(),n._uU(12,"\n\n          "),n.TgZ(13,"nb-card-body"),n._uU(14,"\n            "),n.TgZ(15,"div",4),n._uU(16,"\n\n              "),n.TgZ(17,"div",5),n._uU(18,"\n                "),n.TgZ(19,"label",6),n._uU(20,"Nome:"),n.qZA(),n._uU(21,"\n                "),n._UZ(22,"input",7),n._uU(23,"\n                "),n._UZ(24,"error-message",8),n._uU(25,"\n              "),n.qZA(),n._uU(26,"\n\n            "),n.qZA(),n._uU(27,"\n\n          "),n.qZA(),n._uU(28,"\n          "),n.TgZ(29,"nb-card-footer"),n._uU(30,"\n\n            "),n.TgZ(31,"div",9),n._uU(32,"\n              "),n.TgZ(33,"button",10),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.back())}),n._uU(34,"\n                "),n._UZ(35,"nb-icon",11),n._uU(36,"\n              "),n.qZA(),n._uU(37,"\n\n              "),n.TgZ(38,"button",12),n._uU(39,"\n                "),n._UZ(40,"nb-icon",13),n._uU(41,"\n              "),n.qZA(),n._uU(42,"\n            "),n.qZA(),n._uU(43,"\n\n          "),n.qZA(),n._uU(44,"\n        "),n.qZA(),n._uU(45,"\n\n      "),n.qZA(),n._uU(46,"\n\n    "),n.qZA(),n._uU(47,"\n  "),n.qZA(),n._uU(48,"\n\n"),n.qZA()}if(2&e){const t=n.oxw();n.xp6(2),n.Q6J("formGroup",t.form),n.xp6(20),n.Q6J("status",t.getStatus("name")),n.xp6(2),n.Q6J("message","Nome \xe9 obrigat\xf3rio")("show",(null==t.name.errors?null:t.name.errors.required)&&(t.submmited||t.form.touched))}}let y=(()=>{class e extends f{constructor(t,o,i,u,l,_){super(t,i,u,l,o,_),this.data=t,this.service=o,this.formBuilder=i,this.activatedRoute=u,this.router=l,this.toastrService=_}ngOnInit(){this.createForm()}createForm(){this.data.id||this.back(),this.id=this.data.id,this.service.getById(this.id).subscribe(t=>{this.address=t,this.form=this.formBuilder.group({id:[t.id,r.kI.required],name:[t.name,r.kI.required]}),this.loaded=!0})}commit(){this.service.update(this.form.value).subscribe(()=>{this.toastrService.success("Sucesso","Registro editado"),this.router.navigate(["../list"],{relativeTo:this.activatedRoute})},t=>{this.toastrService.danger(t.error.detail,"N\xe3o foi possivel realizar a a\xe7\xe3o")})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(U.D),n.Y36(g.D),n.Y36(r.qu),n.Y36(c.gz),n.Y36(c.F0),n.Y36(s.quB))},e.\u0275cmp=n.Xpm({type:e,selectors:[["ngx-address-edit"]],features:[n.qOj],decls:3,vars:1,consts:[[4,"ngIf"],[3,"formGroup","submit"],[1,"row"],[1,"col-lg-12"],[1,"row","mb-3"],[1,"col-12"],["for","name",1,"label"],["id","name","type","text","nbInput","","fullWidth","","placeholder","Nome:","formControlName","name",3,"status"],[3,"message","show"],[1,"d-flex","justify-content-between"],["type","button","nbButton","","outline","","status","basic",3,"click"],["icon","arrow-back-outline"],["type","submit","nbButton","","outline","","status","warning"],["icon","edit-2-outline"]],template:function(t,o){1&t&&(n._uU(0,"\n"),n.YNc(1,x,49,4,"div",0),n._uU(2,"\n")),2&t&&(n.xp6(1),n.Q6J("ngIf",o.loaded))},dependencies:[p.O5,s.Asz,s.yKW,s.XWE,s.ndF,s.h8i,s.DPz,b.H,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,s.fMN]}),e})();class M{constructor(){this.id="",this.name="",this.page=0,this.pageSize=10,this.direction="ASC",this.sortedField="id"}reset(){this.page=0,this.pageSize=10,this.direction="ASC",this.sortedField="id",this.id="",this.name=""}}var N=a(7620),F=a(5656),J=a(319);function w(e,d){1&e&&n._UZ(0,"nb-icon",14)}function E(e,d){1&e&&n._UZ(0,"nb-icon",15)}function O(e,d){if(1&e){const t=n.EpF();n.TgZ(0,"tr"),n._uU(1,"\n          "),n.TgZ(2,"td",16),n._uU(3),n.qZA(),n._uU(4,"\n\n          "),n.TgZ(5,"td",16),n._uU(6,"\n            "),n.TgZ(7,"button",17),n.NdJ("click",function(){const u=n.CHM(t).$implicit,l=n.oxw();return n.KtG(l.edit(u.id))}),n._uU(8,"\n              "),n._UZ(9,"nb-icon",18),n._uU(10,"\n            "),n.qZA(),n._uU(11,"\n          "),n.qZA(),n._uU(12,"\n\n          "),n.TgZ(13,"td",16),n._uU(14,"\n            "),n.TgZ(15,"button",19),n.NdJ("click",function(){const u=n.CHM(t).$implicit,l=n.oxw();return n.KtG(l.remove(u.id))}),n._uU(16,"\n              "),n._UZ(17,"nb-icon",20),n._uU(18,"\n            "),n.qZA(),n._uU(19,"\n          "),n.qZA(),n._uU(20,"\n        "),n.qZA()}if(2&e){const t=d.$implicit;n.xp6(3),n.Oqu(t.name)}}function Y(e,d){if(1&e){const t=n.EpF();n.TgZ(0,"td",21),n._uU(1,"\n            "),n.TgZ(2,"ngx-app-table-footer",22),n.NdJ("search",function(i){n.CHM(t);const u=n.oxw();return n.KtG(u.paginate(i))}),n._uU(3,"\n            "),n.qZA(),n._uU(4,"\n          "),n.qZA()}if(2&e){const t=n.oxw();n.xp6(2),n.Q6J("page",t.page)}}const k=[{path:"",component:f,children:[{path:"list",component:(()=>{class e extends N.n{constructor(t,o,i,u){super(t,o,i,u),this.service=t,this.activatedRoute=o,this.router=i,this.dataService=u,this.filter=new M,this.loading=!1}ngOnInit(){super.init()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(g.D),n.Y36(c.gz),n.Y36(c.F0),n.Y36(U.D))},e.\u0275cmp=n.Xpm({type:e,selectors:[["ngx-address-list"]],features:[n.qOj],decls:73,vars:6,consts:[[3,"nbSpinner"],[1,"col-9","align-middle",3,"click"],["icon","arrow-ios-upward-outline",4,"ngIf"],["icon","arrow-ios-downward-outline",4,"ngIf"],["colspan","2",1,"col-1","align-middle"],["nbButton","","outline","","status","basic","fullWidth","",3,"click"],["icon","plus-outline"],["type","text","nbInput","","placeholder","Nome","fullWidth","",3,"ngModel","keydown.enter","ngModelChange"],["nbButton","","outline","","status","basic","type","button","fullWidth","",3,"click"],["icon","undo-outline"],["nbButton","","outline","","status","success","fullWidth","",3,"click"],["icon","funnel-outline"],[4,"ngFor","ngForOf"],["colspan","4",4,"ngIf"],["icon","arrow-ios-upward-outline"],["icon","arrow-ios-downward-outline"],[1,"align-middle"],["nbButton","","outline","","status","warning","fullWidth","",3,"click"],["icon","edit-2-outline"],["nbButton","","outline","","status","danger","fullWidth","",3,"click"],["icon","trash-2-outline"],["colspan","4"],[3,"page","search"]],template:function(t,o){1&t&&(n.TgZ(0,"nb-card"),n._uU(1,"\n\n  "),n.TgZ(2,"nb-card-header"),n._uU(3,"\n    Endere\xe7os\n  "),n.qZA(),n._uU(4,"\n\n  "),n.TgZ(5,"nb-card-body"),n._uU(6,"\n\n    "),n.TgZ(7,"ngx-app-table",0),n._uU(8,"\n      "),n.TgZ(9,"thead"),n._uU(10,"\n        "),n.TgZ(11,"tr"),n._uU(12,"\n          "),n.TgZ(13,"th",1),n.NdJ("click",function(){return o.order("name")}),n._uU(14,"\n              Nome:\n              "),n.YNc(15,w,1,0,"nb-icon",2),n._uU(16,"\n              "),n.YNc(17,E,1,0,"nb-icon",3),n._uU(18,"\n          "),n.qZA(),n._uU(19,"\n\n          "),n.TgZ(20,"th",4),n._uU(21,"\n            "),n.TgZ(22,"button",5),n.NdJ("click",function(){return o.add()}),n._uU(23,"\n              "),n._UZ(24,"nb-icon",6),n._uU(25,"\n            "),n.qZA(),n._uU(26,"\n          "),n.qZA(),n._uU(27,"\n\n        "),n.qZA(),n._uU(28,"\n      "),n.qZA(),n._uU(29,"\n\n      "),n.TgZ(30,"thead"),n._uU(31,"\n        "),n.TgZ(32,"tr"),n._uU(33,"\n\n          "),n.TgZ(34,"th"),n._uU(35,"\n            "),n.TgZ(36,"input",7),n.NdJ("keydown.enter",function(){return o.search()})("ngModelChange",function(u){return o.filter.name=u}),n.qZA(),n._uU(37,"\n          "),n.qZA(),n._uU(38,"\n\n          "),n.TgZ(39,"th"),n._uU(40,"\n            "),n.TgZ(41,"button",8),n.NdJ("click",function(){return o.reset()}),n._uU(42,"\n              "),n._UZ(43,"nb-icon",9),n._uU(44,"\n            "),n.qZA(),n._uU(45,"\n          "),n.qZA(),n._uU(46,"\n\n          "),n.TgZ(47,"th"),n._uU(48,"\n            "),n.TgZ(49,"button",10),n.NdJ("click",function(){return o.search()}),n._uU(50,"\n              "),n._UZ(51,"nb-icon",11),n._uU(52,"\n            "),n.qZA(),n._uU(53,"\n          "),n.qZA(),n._uU(54,"\n\n        "),n.qZA(),n._uU(55,"\n      "),n.qZA(),n._uU(56,"\n\n      "),n.TgZ(57,"tbody"),n._uU(58,"\n        "),n.YNc(59,O,21,1,"tr",12),n._uU(60,"\n      "),n.qZA(),n._uU(61,"\n\n      "),n.TgZ(62,"tfoot"),n._uU(63,"\n        "),n.TgZ(64,"tr"),n._uU(65,"\n          "),n.YNc(66,Y,5,1,"td",13),n._uU(67,"\n        "),n.qZA(),n._uU(68,"\n      "),n.qZA(),n._uU(69,"\n\n    "),n.qZA(),n._uU(70,"\n\n  "),n.qZA(),n._uU(71,"\n\n"),n.qZA(),n._uU(72,"\n")),2&t&&(n.xp6(7),n.Q6J("nbSpinner",o.loading),n.xp6(8),n.Q6J("ngIf","name"===o.filter.sortedField&&"ASC"===o.filter.direction),n.xp6(2),n.Q6J("ngIf","name"===o.filter.sortedField&&"DESC"===o.filter.direction),n.xp6(19),n.Q6J("ngModel",o.filter.name),n.xp6(23),n.Q6J("ngForOf",null==o.page?null:o.page.content),n.xp6(7),n.Q6J("ngIf",o.page))},dependencies:[p.sg,p.O5,s.Asz,s.yKW,s.ndF,s.h8i,s.DPz,F.M,J.L,s.Q7R,r.Fj,r.JJ,r.On,s.fMN],styles:["[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{border:none;padding-top:var(--card-header-with-select-padding-top);padding-bottom:var(--card-header-with-select-padding-bottom)}nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}nb-card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:1rem}.full-name-inputs[_ngcontent-%COMP%], .validation-checkboxes[_ngcontent-%COMP%]{display:flex;margin:0 -.5rem}.full-name-inputs[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .validation-checkboxes[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 .5rem}.checkbox-radio[_ngcontent-%COMP%]{display:flex}.demo-items[_ngcontent-%COMP%]{flex:1 0 33%}"]}),e})()},{path:"add",component:v},{path:"edit",component:y},{path:"delete",component:q},{path:"",redirectTo:"list",pathMatch:"full"},{path:"**",redirectTo:"list"}]}];let D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[c.Bz.forChild(k),c.Bz]}),e})(),I=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[g.D],imports:[p.ez,D,s.zyh,s.nKr,s.T2N,Z.I,s.uuI,r.u5,r.UX,s.KdK,A.d,s.V7y,m.yI.forChild()]}),e})()},798:(T,h,a)=>{a.d(h,{D:()=>A});var p=a(2340),r=a(6603),s=a(2963),Z=a(529);let A=(()=>{class m extends r.T{constructor(n){super(n)}get env(){return`${p.N.address}`}}return m.\u0275fac=function(n){return new(n||m)(s.LFG(Z.eN))},m.\u0275prov=s.Yz7({token:m,factory:m.\u0275fac}),m})()}}]);