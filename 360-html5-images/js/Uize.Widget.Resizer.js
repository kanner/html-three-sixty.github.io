/*
	UIZE JAVASCRIPT FRAMEWORK 2010-08-30

	http://www.uize.com/reference/Uize.Widget.Resizer.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Resizer',required:['Uize.Node','Uize.Widget.Drag'],builder:function(c_a){var c_b=true,c_c=false,c_d=Uize.Node,c_e=c_d.isIe;var c_f=c_a.subclass(function(){this.c_g={};}),c_h=c_f.prototype;var c_i=c_e&&document.compatMode!='CSS1Compat',c_j={northWest:[0,0],north:[.5,0],northEast:[1,0],west:[0,.5],move:['both','both'],east:[1,.5],southWest:[0,1],south:[.5,1],southEast:[1,1]};c_h.c_k=function(c_l,c_m){var c_n=c_m[c_l];return c_n!=.5&&(c_n=='both'|| !(c_l?this.c_o:this.c_p));};c_h.c_q=function(){var c_r=this;if(c_r.isWired){for(var c_s in c_j){var c_m=c_j[c_s];c_r.children[c_s].set({enabled:c_r.c_k(0,c_m)||c_r.c_k(1,c_m)?'inherit':c_c});}}};c_h.c_t=function(){var c_r=this;if(c_r.isWired&& !(c_r.c_u=c_r.c_v)){var c_w=c_d.getDimensions(c_r.getNode('shell'));if(c_w.width&&c_w.height)c_r.c_u=[0,0,c_w.width-1,c_w.height-1];}};c_h.c_x=function(){var c_r=this;c_r.c_t();var c_u=c_r.c_u;if(c_u){c_r.c_y=[c_u[2]-c_u[0]+1,c_u[3]-c_u[1]+1];c_r.c_z();}};var c_z=c_h.c_z=function(){var c_r=this;
if(c_r.isWired&&(!c_r.c_A||c_r.c_B)){c_r.c_t();if(c_r.c_u){var c_C=c_r.c_C,c_u=c_r.c_u,c_y=c_r.c_y,c_D=c_r.c_D,c_E=c_r.c_E,c_F=c_r.c_F,c_G=c_r.c_G,c_H,c_I,c_J=c_r.c_J;if(c_J!=null){c_H=c_F;c_I=c_G;}else{c_H=c_f.constrain(c_F,c_r.c_K,c_C?c_y[0]:Infinity);c_I=c_f.constrain(c_G,c_r.c_L,c_C?c_y[1]:Infinity);}var c_M=c_C?c_f.constrain(c_D,c_u[0],c_u[2]-c_H+1):c_D,c_N=c_C?c_f.constrain(c_E,c_u[1],c_u[3]-c_I+1):c_E;if(c_M!=c_D||c_N!=c_E||c_H!=c_F||c_I!=c_G)c_r.set({c_D:c_M,c_E:c_N,c_F:c_H,c_G:c_I});}}};c_h.setPositionDuringDrag=function(c_D,c_E,c_F,c_G){var c_r=this;if(c_D!=c_r.c_D||c_E!=c_r.c_E||c_F!=c_r.c_F||c_G!=c_r.c_G){c_r.set({left:c_D,top:c_E,width:c_F,height:c_G});c_r.fire('Position Changed');}};c_h.getCoords=function(){var c_r=this;return{left:c_r.c_D,top:c_r.c_E,width:c_r.c_F,height:c_r.c_G};};c_h.updateUi=function(){var c_r=this;if(c_r.isWired){function c_O(c_P){function c_Q(c_R){return parseInt(c_d.getStyle(c_S,'border'+c_R+'Width'))||0;}var c_S=c_r.getNode(c_P);if(c_S){var c_T=Math.max(
c_r.c_F-(c_i?0:c_Q('Left')+c_Q('Right')),0);if(c_e)c_T==c_r.c_g[c_P]?c_r.displayNode('jiggler',c_r.c_U= !c_r.c_U):(c_r.c_g[c_P]=c_T);c_d.setStyle(c_S,{left:c_r.c_D,top:c_r.c_E,width:c_T,height:Math.max(c_r.c_G-(c_i?0:c_Q('Top')+c_Q('Bottom')),0)});}}for(var c_V= -1,c_W=c_r.c_W,c_X=c_W.length;++c_V<c_X;)c_O(c_W[c_V]);}};c_h.wireUi=function(){var c_r=this;if(!c_r.isWired){var c_u,c_Y,c_m,c_Z,c_0=Uize.Widget.Drag;function c_1(c_s){c_m=c_j[c_s];var c_2=c_r.addChild(c_s,c_0,{cursor:c_s=='move'?c_s:c_s.charAt(0)+(c_s.match(/[A-Z]|$/))[0]+'-resize',dragRestTime:c_r.c_3,node:c_r.getNode(c_s),resizerInfo:{c_s:c_s,c_m:c_m}});c_2.wire({'Before Drag Start':function(c_4){c_r.fire(c_4)},'Drag Start':function(c_4){c_r.c_5=c_4.source;c_r.set({c_A:c_b});c_r.c_x();c_u=c_r.c_u;c_Y=[c_u[2]/2,c_u[3]/2];c_Z=[c_r.c_D,c_r.c_E,c_r.c_D+c_r.c_F-1,c_r.c_E+c_r.c_G-1];c_r.fire(c_4);},'Drag Update':function(){var c_J=c_r.c_J,c_6=c_r.c_5.resizerInfo,c_m=c_6.c_m,c_7=c_m.concat(),c_8=c_Z.concat();function c_9(c_l){if(c_r.c_k(c_l,c_m)){var
 c_n=c_m[c_l],c_ba=c_2.eventDeltaPos[c_l];if(c_n=='both'){if(c_r.c_C)c_ba=c_f.constrain(c_ba,c_u[c_l]-c_8[c_l],c_u[c_l+2]-c_8[c_l+2]);c_8[c_l]+=c_ba;c_8[c_l+2]+=c_ba;}else{var c_bb=c_l+c_n*2;c_8[c_bb]+=c_ba;if(c_r.c_C)c_8[c_bb]=c_f.constrain(c_8[c_bb],c_u[c_l],c_u[c_l+2]);if(c_J==null&&c_8[c_l]>c_8[c_l+2]){var c_bc=c_8[c_l];c_8[c_l]=c_8[c_l+2];c_8[c_l+2]=c_bc;c_7[c_l]=1-c_7[c_l];}}}}c_9(0);c_9(1);var c_bd=[Math.max(c_8[2]-c_8[0]+1,c_r.c_K),Math.max(c_8[3]-c_8[1]+1,c_r.c_L)],c_be=[(c_8[0]+c_8[2])/2,(c_8[1]+c_8[3])/2];if(c_J!=null){if(c_bd[0]/c_bd[1]!=c_J){var c_bf=[c_bd[1]*c_J,c_bd[0]/c_J];function c_bg(c_l,c_bh){c_bd[c_l]=c_bf[c_l];if(c_r.c_C){c_bd[c_l]=Math.min(c_bd[c_l],c_bh);c_bd[1-c_l]=c_bd[c_l]*Math.pow(c_J,c_l*2-1);}}function c_bi(c_l){c_bg(c_l,(c_be[c_l]<c_Y[c_l]?(c_be[c_l]+.5):c_u[c_l+2]-c_be[c_l])*2);}function c_bj(c_l){c_bg(c_l,(c_m[c_l]?c_u[c_l+2]-c_8[c_l]:c_8[c_l+2])+1);}if(c_m[0]==.5){c_bi(0);}else if(c_m[1]==.5){c_bi(1);}else if(c_bd[1]*c_bf[0]>c_bd[0]*c_bf[1]){c_bj(0);}else{c_bj(1);}}
function c_bk(c_l){if(!c_m[c_l]){c_8[c_l]=c_8[c_l+2]-c_bd[c_l]+1;}else if(c_m[c_l]==.5){c_8[c_l]=c_be[c_l]-(c_bd[c_l]-1)/2;}}c_bk(0);c_bk(1);}c_r.set({activeHandleEffectivePointIdX:c_7[0],activeHandleEffectivePointIdY:c_7[1]});c_r.setPositionDuringDrag(c_8[0],c_8[1],c_bd[0],c_bd[1]);},'Drag Rest':function(c_4){c_r.fire(c_4)},'Drag Done':function(c_4){c_r.set({c_A:c_c});c_r.fire(c_4);c_r.set({c_B:c_c});c_r.updateUi();}});}for(var c_s in c_j)c_1(c_s);c_r.c_q();if(c_e){var c_P=c_r.getNode(c_r.c_W[0]);if(c_P){var c_bl=document.createElement('div');c_bl.id=c_r.get('idPrefix')+'-jiggler';c_d.setStyle(c_bl,{position:'absolute'});c_P.appendChild(c_bl);}}c_a.prototype.wireUi.call(c_r);c_r.c_x();}};c_f.pointIdsMap=c_j;var c_bm='updateUi',c_bn=[c_bm,c_h.c_q],c_bo=[c_z,c_bm];c_f.registerProperties({c_bp:'activeHandleEffectivePointIdX',c_bq:'activeHandleEffectivePointIdY',c_W:{name:'areaNodes',value:['']},c_J:{name:'aspectRatio',onChange:c_bm,value:null},c_C:{name:'constrain',value:c_b,onChange:c_z},c_v:{
name:'constrainBounds',value:null,onChange:c_h.c_x},c_B:{name:'creatingNew',value:c_c},c_3:{name:'dragRestTime',onChange:function(){c_f.callOn(this.children,'set',[{dragRestTime:this.c_3}])},value:250},c_p:{name:'fixedX',onChange:c_bn,value:c_c},c_o:{name:'fixedY',onChange:c_bn,value:c_c},c_G:{name:'height',onChange:c_bo,value:200},c_A:{name:'inDrag',value:c_c},c_D:{name:'left',onChange:c_bo,value:0},c_L:{name:'minHeight',value:10,onChange:c_z},c_K:{name:'minWidth',value:10,onChange:c_z},c_E:{name:'top',onChange:c_bo,value:0},c_F:{name:'width',onChange:c_bo,value:200}});return c_f;}});