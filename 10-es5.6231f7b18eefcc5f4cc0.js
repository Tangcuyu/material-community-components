function _defineProperties(e,t){for(var i=0;i<t.length;i++){var c=t[i];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{UTEa:function(e,t,i){"use strict";i.r(t),i.d(t,"TimerPickerModule",(function(){return D}));var c,r,n,o,b=i("ofXK"),a=i("3Pt+"),m=i("Wp6s"),u=i("kmnG"),s=i("zkoq"),l=i("NFeN"),P=i("qFsG"),d=i("wZkO"),p=i("tyNb"),h=i("psLn"),f=i("fXoL"),O=((c=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=f.Eb({type:c,selectors:[["app-timer-picker-api"]],decls:101,vars:0,consts:[[1,"table-api-documentation"],[1,"api-description"]],template:function(e,t){1&e&&(f.Pb(0,"h2"),f.uc(1,"Components"),f.Ob(),f.Pb(2,"h3"),f.uc(3,"MccTimerPicker"),f.Ob(),f.Pb(4,"p"),f.uc(5,"This is the main class of the component."),f.Ob(),f.Pb(6,"h4"),f.uc(7,"Inputs"),f.Ob(),f.Pb(8,"table",0),f.Pb(9,"thead"),f.Pb(10,"tr"),f.Pb(11,"th"),f.uc(12,"Name"),f.Ob(),f.Pb(13,"th"),f.uc(14,"Description"),f.Ob(),f.Ob(),f.Ob(),f.Pb(15,"tbody"),f.Pb(16,"tr"),f.Pb(17,"td"),f.Pb(18,"code"),f.uc(19,"hideButtons: boolean"),f.Ob(),f.Ob(),f.Pb(20,"td",1),f.uc(21,"Hide the buttons (confirm/cancel)"),f.Ob(),f.Ob(),f.Pb(22,"tr"),f.Pb(23,"td"),f.Pb(24,"code"),f.uc(25,"mccTimerPickerFormat: MccTimerPickerFormat"),f.Ob(),f.Ob(),f.Pb(26,"td",1),f.uc(27,"Define the format that timer-picker will output the selected time (default: 12)"),f.Ob(),f.Ob(),f.Pb(28,"tr"),f.Pb(29,"td"),f.Pb(30,"code"),f.uc(31,"mccTimerPickerMin: string"),f.Ob(),f.Ob(),f.Pb(32,"td",1),f.uc(33,"Define the minimum allowed time (default: 00:00 am, accepts both formats)"),f.Ob(),f.Ob(),f.Pb(34,"tr"),f.Pb(35,"td"),f.Pb(36,"code"),f.uc(37,"mccTimerPickerMax: string"),f.Ob(),f.Ob(),f.Pb(38,"td",1),f.uc(39,"Define the maximum allowed time (default: 12:00 pm, accepts both formats)"),f.Ob(),f.Ob(),f.Pb(40,"tr"),f.Pb(41,"td"),f.Pb(42,"code"),f.uc(43,"btnCancel: string"),f.Ob(),f.Ob(),f.Pb(44,"td",1),f.uc(45,"Cancel button text (default: Cancel)"),f.Ob(),f.Ob(),f.Pb(46,"tr"),f.Pb(47,"td"),f.Pb(48,"code"),f.uc(49,"btnConfirm: string"),f.Ob(),f.Ob(),f.Pb(50,"td",1),f.uc(51,"Confirm button text (default: Confirm)"),f.Ob(),f.Ob(),f.Ob(),f.Ob(),f.Pb(52,"h4"),f.uc(53,"Outputs"),f.Ob(),f.Pb(54,"table",0),f.Pb(55,"thead"),f.Pb(56,"tr"),f.Pb(57,"th"),f.uc(58,"Name"),f.Ob(),f.Pb(59,"th"),f.uc(60,"Description"),f.Ob(),f.Ob(),f.Ob(),f.Pb(61,"tbody"),f.Pb(62,"tr"),f.Pb(63,"td"),f.Pb(64,"code"),f.uc(65,"selected: string"),f.Ob(),f.Ob(),f.Pb(66,"td",1),f.uc(67,"Output the selected timer"),f.Ob(),f.Ob(),f.Ob(),f.Ob(),f.Lb(68,"hr"),f.Pb(69,"h2"),f.uc(70,"Directives"),f.Ob(),f.Pb(71,"h3"),f.uc(72,"MccTimerPickerOriginDirective"),f.Ob(),f.Pb(73,"p"),f.uc(74,"This directive is used on the trigger component. If we associate the directive an input text, when the input is focused the timer picker will open on the screen"),f.Ob(),f.Pb(75,"h3"),f.uc(76,"MccConnectedTimerPickerDirective"),f.Ob(),f.Pb(77,"p"),f.uc(78,"Directive used on the "),f.Pb(79,"code"),f.uc(80,"MccTimerPickerComponent"),f.Ob(),f.uc(81," to connect to an element ( "),f.Pb(82,"code"),f.uc(83,"MccTimerPickerOriginDirective"),f.Ob(),f.uc(84,")"),f.Ob(),f.Pb(85,"h4"),f.uc(86,"Inputs"),f.Ob(),f.Pb(87,"table",0),f.Pb(88,"thead"),f.Pb(89,"tr"),f.Pb(90,"th"),f.uc(91,"Name"),f.Ob(),f.Pb(92,"th"),f.uc(93,"Description"),f.Ob(),f.Ob(),f.Ob(),f.Pb(94,"tbody"),f.Pb(95,"tr"),f.Pb(96,"td"),f.Pb(97,"code"),f.uc(98,"mccConnectedTimerPickerOrigin: MccTimerPickerOriginDirective"),f.Ob(),f.Ob(),f.Pb(99,"td",1),f.uc(100,"Element that timer picker has to connect"),f.Ob(),f.Ob(),f.Ob(),f.Ob())},encapsulation:2,changeDetection:0}),c),g=i("3dsp"),k=i("2Vo4"),T=((o=function(){function e(t,i){var c=this;_classCallCheck(this,e),this.elementRef=t,this.renderer=i,this.change=new k.a(""),this.hasFocus=new k.a(!1),i.listen(t.nativeElement,"focus",(function(){return c.hasFocus.next(!0)}))}return _createClass(e,[{key:"writeValue",value:function(e){this.renderer.setProperty(this.elementRef.nativeElement,"value",e),this.change.next(e),this.propagateChanges&&this.propagateChanges(e)}},{key:"writeValueFromTimerPicker",value:function(e){this.renderer.setProperty(this.elementRef.nativeElement,"value",e),this.propagateChanges(e)}},{key:"writeValueFromKeyup",value:function(e){this.change.next(e),this.propagateChanges(e)}},{key:"registerOnChange",value:function(e){this.propagateChanges=e}},{key:"registerOnTouched",value:function(e){}},{key:"setDisabledState",value:function(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",e)}}]),e}()).\u0275fac=function(e){return new(e||o)(f.Kb(f.l),f.Kb(f.E))},o.\u0275dir=f.Fb({type:o,selectors:[["","mccTimerPickerOrigin",""],["","mcc-timer-picker-origin",""]],outputs:{change:"change",hasFocus:"hasFocus"},exportAs:["mccTimerPickerOrigin"],features:[f.yb([{provide:a.o,useExisting:Object(f.T)((function(){return o})),multi:!0}])]}),o),C=((n=function(){function e(t,i){_classCallCheck(this,e),this.timerPicker=t,this.changeDetectorRef=i,this.timerPicker.connected=!0}return _createClass(e,[{key:"ngAfterViewInit",value:function(){this._timerPickerSub||(this.timerPicker.trigger=this.origin,this._attachTimerPicker())}},{key:"ngOnDestroy",value:function(){this._originFocus&&!this._originFocus.closed&&this._originFocus.unsubscribe(),this._timerPickerSub&&!this._timerPickerSub.closed&&this._timerPickerSub.unsubscribe()}},{key:"_attachTimerPicker",value:function(){var e=this;this._originFocus=this.origin.hasFocus.subscribe((function(t){e.timerPicker.focus="hour",e.timerPicker.isOpen=t,e.changeDetectorRef.detectChanges()})),this._timerPickerSub=this.timerPicker.selected.subscribe((function(t){return e.origin.writeValueFromTimerPicker(t)}))}}]),e}()).\u0275fac=function(e){return new(e||n)(f.Kb(g.a),f.Kb(f.h))},n.\u0275dir=f.Fb({type:n,selectors:[["","mccConnectedTimerPicker",""],["","mcc-connected-timer-picker",""]],inputs:{origin:["mccConnectedTimerPickerOrigin","origin"]},exportAs:["mccConnectedTimerPicker"]}),n),v=((r=function(){function e(t){_classCallCheck(this,e),this.formBuilder=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({timer:[""]})}},{key:"onSubmit",value:function(e){var t=e.value,i=e.valid;console.log(i,t)}}]),e}()).\u0275fac=function(e){return new(e||r)(f.Kb(a.f))},r.\u0275cmp=f.Eb({type:r,selectors:[["app-timer-picker-examples"]],decls:46,vars:10,consts:[["novalidate","",3,"formGroup","ngSubmit"],["mccConnectedTimerPicker","",3,"mccConnectedTimerPickerOrigin"],["matInput","","mccTimerPickerOrigin","","placeholder","Timer","formControlName","timer"],["inputTrigger","mccTimerPickerOrigin"],["mccConnectedTimerPicker","","mccTimerPickerMin","09:45","mccTimerPickerMax","20:30",3,"mccConnectedTimerPickerOrigin"],["minMaxInputTrigger","mccTimerPickerOrigin"],["mccConnectedTimerPicker","",3,"mccConnectedTimerPickerOrigin","mccTimerPickerFormat"],["formatTrigger","mccTimerPickerOrigin"],["mccConnectedTimerPicker","",3,"mccConnectedTimerPickerOrigin","hideButtons"],["buttonTrigger","mccTimerPickerOrigin"]],template:function(e,t){if(1&e&&(f.Pb(0,"mat-card"),f.Pb(1,"mat-card-header"),f.Pb(2,"mat-card-title"),f.uc(3," Connect with an input "),f.Ob(),f.Ob(),f.Pb(4,"mat-card-content"),f.Pb(5,"form",0),f.Wb("ngSubmit",(function(){return t.onSubmit(t.form)})),f.Pb(6,"mat-form-field"),f.Lb(7,"mcc-timer-picker",1),f.Lb(8,"input",2,3),f.Ob(),f.Ob(),f.Ob(),f.Ob(),f.Pb(10,"mat-card"),f.Pb(11,"mat-card-header"),f.Pb(12,"mat-card-title"),f.uc(13," Use custom range "),f.Ob(),f.Ob(),f.Pb(14,"mat-card-content"),f.Pb(15,"form",0),f.Wb("ngSubmit",(function(){return t.onSubmit(t.form)})),f.Pb(16,"mat-form-field"),f.Lb(17,"mcc-timer-picker",4),f.Lb(18,"input",2,5),f.Ob(),f.Ob(),f.Ob(),f.Ob(),f.Pb(20,"mat-card"),f.Pb(21,"mat-card-header"),f.Pb(22,"mat-card-title"),f.uc(23," Convert value to 24h "),f.Ob(),f.Ob(),f.Pb(24,"mat-card-content"),f.Pb(25,"form",0),f.Wb("ngSubmit",(function(){return t.onSubmit(t.form)})),f.Pb(26,"mat-form-field"),f.Lb(27,"mcc-timer-picker",6),f.Lb(28,"input",2,7),f.Ob(),f.Ob(),f.Ob(),f.Ob(),f.Pb(30,"mat-card"),f.Pb(31,"mat-card-header"),f.Pb(32,"mat-card-title"),f.uc(33," Hide buttons "),f.Ob(),f.Ob(),f.Pb(34,"mat-card-content"),f.Pb(35,"form",0),f.Wb("ngSubmit",(function(){return t.onSubmit(t.form)})),f.Pb(36,"mat-form-field"),f.Lb(37,"mcc-timer-picker",8),f.Lb(38,"input",2,9),f.Ob(),f.Ob(),f.Ob(),f.Ob(),f.Pb(40,"mat-card"),f.Pb(41,"mat-card-header"),f.Pb(42,"mat-card-title"),f.uc(43," Opened component "),f.Ob(),f.Ob(),f.Pb(44,"mat-card-content"),f.Lb(45,"mcc-timer-picker"),f.Ob(),f.Ob()),2&e){var i=f.kc(9),c=f.kc(19),r=f.kc(29),n=f.kc(39);f.zb(5),f.fc("formGroup",t.form),f.zb(2),f.fc("mccConnectedTimerPickerOrigin",i),f.zb(8),f.fc("formGroup",t.form),f.zb(2),f.fc("mccConnectedTimerPickerOrigin",c),f.zb(8),f.fc("formGroup",t.form),f.zb(2),f.fc("mccConnectedTimerPickerOrigin",r)("mccTimerPickerFormat","24"),f.zb(8),f.fc("formGroup",t.form),f.zb(2),f.fc("mccConnectedTimerPickerOrigin",n)("hideButtons",!0)}},directives:[m.a,m.c,m.e,m.b,a.E,a.r,a.j,u.b,g.a,C,P.a,a.c,T,a.q,a.i],encapsulation:2,changeDetection:0}),r);function y(e,t){1&e&&f.uc(0," Overview ")}function w(e,t){1&e&&f.uc(0," API ")}function _(e,t){1&e&&f.uc(0," Examples ")}var x,F,M=[{path:"",component:(x=function(){function e(t){_classCallCheck(this,e),this.formBuilder=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({timer:[""]})}},{key:"onSubmit",value:function(e){var t=e.value,i=e.valid;console.log(i,t)}}]),e}(),x.\u0275fac=function(e){return new(e||x)(f.Kb(a.f))},x.\u0275cmp=f.Eb({type:x,selectors:[["app-timer-picker"]],decls:42,vars:4,consts:[[1,"page-title"],[1,"page-subtitle"],["mat-tab-label",""],["cols","4","rowHeight","70px"],["colspan","3"],["href","https://github.com/tiaguinho/material-community-components/tree/master/src/lib/timer-picker","target","_blank"],["src","https://tiaguinho.github.io/material-community-components/demo-app/assets/img/source-code.png","alt","Source Code",1,"source-code"],[1,"code-snippet"],[1,"lang-typescript"],[1,"hljs-variable"],[1,"hljs-attribute"],["label","Examples"]],template:function(e,t){1&e&&(f.Pb(0,"h1",0),f.Pb(1,"mat-icon"),f.uc(2,"timer"),f.Ob(),f.uc(3," Timer Picker\n"),f.Ob(),f.Pb(4,"p",1),f.uc(5,"Some examples of how to use the "),f.Pb(6,"span"),f.uc(7,"mcc-timer-picker"),f.Ob(),f.uc(8," component"),f.Ob(),f.Pb(9,"mat-tab-group"),f.Pb(10,"mat-tab"),f.sc(11,y,1,0,"ng-template",2),f.Pb(12,"mat-grid-list",3),f.Pb(13,"mat-grid-tile",4),f.Pb(14,"h2"),f.uc(15,"MccTimerPicker"),f.Ob(),f.Ob(),f.Pb(16,"mat-grid-tile"),f.Pb(17,"a",5),f.Lb(18,"img",6),f.Ob(),f.Ob(),f.Ob(),f.Pb(19,"p"),f.uc(20,"This is a implementation of timer picker for material design."),f.Ob(),f.Pb(21,"p"),f.uc(22,"To use this component, just import the module from "),f.Pb(23,"code"),f.uc(24,"material-community-component"),f.Ob(),f.uc(25," package."),f.Ob(),f.Pb(26,"pre",7),f.Pb(27,"code",8),f.uc(28),f.Pb(29,"span",9),f.uc(30,"@NgModule"),f.Ob(),f.uc(31),f.Pb(32,"span",10),f.uc(33,"imports"),f.Ob(),f.uc(34),f.Ob(),f.uc(35,"\n"),f.Ob(),f.Ob(),f.Pb(36,"mat-tab"),f.sc(37,w,1,0,"ng-template",2),f.Lb(38,"app-timer-picker-api"),f.Ob(),f.Pb(39,"mat-tab",11),f.sc(40,_,1,0,"ng-template",2),f.Lb(41,"app-timer-picker-examples"),f.Ob(),f.Ob()),2&e&&(f.zb(28),f.xc("  import ","{"," MccTimerPickerModule ","}"," from 'material-community-components';\n\n  "),f.zb(3),f.wc("(","{","\n    ...\n    "),f.zb(3),f.wc(": [\n      MccTimerPickerModule\n    ]\n    ...\n  ","}",")\n  "))},directives:[l.a,d.b,d.a,d.c,s.a,s.c,O,v],styles:[".mat-grid-list{border-bottom:1px solid #dadada}  .mat-grid-tile:first-child .mat-figure{justify-content:flex-start;align-items:flex-start}  .mat-grid-tile:first-child .mat-figure h2{border:0}.source-code[_ngcontent-%COMP%]{height:35px}"],changeDetection:0}),x)}],D=((F=function e(){_classCallCheck(this,e)}).\u0275mod=f.Ib({type:F}),F.\u0275inj=f.Hb({factory:function(e){return new(e||F)},imports:[[b.c,p.c.forChild(M),a.y,m.d,P.b,u.d,l.b,s.b,d.d,h.e]]}),F)}}]);