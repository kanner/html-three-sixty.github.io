/*
	UIZE JAVASCRIPT FRAMEWORK 2010-10-02

	http://www.uize.com/reference/Uize.Widget.Options.Accordion.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Options.Accordion',required:['Uize.Node','Uize.Fade'],builder:function(d_a){var d_b=true,d_c=false,d_d=null,d_e=Uize.Node;var d_f=d_a.subclass(d_d,function(){var d_g=this;d_g.fade=new Uize.Fade({curve:Uize.Fade.celeration(0,1),duration:500});}),d_h=d_f.prototype;d_h.d_i=function(d_j){return d_f.isNumber(d_j)?d_j:this.getValueNoFromValue(d_j);};d_h.d_k=function(d_j){return this.getNode('option'+this.d_i(d_j)+'TabBody');};d_h.d_l=function(d_m,d_n){var d_o=this.getOptionButton(d_m),d_p=d_o.getNode('toggle'),d_q=d_p?d_p.parentNode:d_d,d_r=d_q?d_e.getDimensions(d_q):d_d;d_p&&d_e.setStyle(d_p,{top:d_n? -d_r.height:0});};d_h.d_s=function(d_t){var d_g=this,d_u=d_g.get('valueNo'),d_v=d_g.d_v,d_w=d_v.length,d_x=0;if(d_t){if(d_u!=d_g.d_y){d_g.fade.stop();d_g.d_z=d_g.d_k(d_u);d_g.d_A=d_g.d_k(d_g.d_y);for(var d_B= -1;++d_B<d_w;){d_g.displayNode(d_g.d_k(d_B),(d_B==d_u||d_B==d_g.d_y));d_g.d_l(d_B,d_u==d_B);}d_e.setStyle(d_g.d_z,{height:1});d_e.setStyle(d_g.d_A,{height:d_g.d_C});
d_g.fade.start();}}else{for(var d_B= -1;++d_B<d_w;){var d_D=d_g.d_k(d_B);d_g.getOptionButton(d_B).setNodeStyle('',{top:d_x});d_x+=d_v[d_B];if(d_u==d_B){d_g.displayNode(d_D);d_e.setStyle(d_D,{top:d_x,height:d_g.d_C});d_x+=d_g.d_C;}else{d_g.displayNode(d_D,d_c);}d_g.d_l(d_B,d_u==d_B);}}};d_h.getOptionButton=function(d_j){return this.children['option'+this.d_i(d_j)];};d_h.tabExists=function(d_j){var d_o=this.getOptionButton(d_j);return(d_o&&(d_o.getNode()||this.d_k(d_j))?true:false);};d_h.wireUi=function(){var d_g=this;if(!d_g.isWired){d_a.prototype.wireUi.call(d_g);var d_E=d_g.get('values'),d_F=d_e.getCoords(d_g.getNode()).height,d_G=0;d_g.d_v=[];for(var d_u= -1,d_E=d_g.get('values'),d_H=d_E.length;++d_u<d_H;){var d_I=d_g.getOptionButton(d_u).getNode(),d_D=d_g.d_k(d_u);d_g.d_v[d_u]=d_e.getCoords(d_I).height;d_G+=d_g.d_v[d_u];d_e.setStyle([d_I,d_D],{position:'absolute'});}d_g.d_C=d_F-d_G;d_g.d_J=d_g.d_K=d_d;if(d_g.get('valueNo')<0)d_g.set({valueNo:0});d_g.d_y=d_g.get('valueNo');d_g.fade.set({startValue:0,
endValue:d_g.d_C});d_g.fade.wire({'Changed.value':function(){var d_u=d_g.get('valueNo'),d_x=0,d_L= +d_g.fade,d_M=d_g.d_C-d_L;d_e.setStyle(d_g.d_z,{height:d_L});d_e.setStyle(d_g.d_A,{height:d_M});for(var d_B= -1,d_v=d_g.d_v,d_w=d_v.length;++d_B<d_w;){d_g.getOptionButton(d_B).setNodeStyle('',{top:d_x});d_x+=d_v[d_B];if(d_B==d_u){d_e.setStyle(d_g.d_z,{top:d_x});d_x+=d_L;}else if(d_B==d_g.d_y){d_e.setStyle(d_g.d_A,{top:d_x});d_x+=d_M;}}},Done:function(){d_g.displayNode(d_g.d_A,d_c);d_g.d_y=d_g.get('valueNo');}});d_g.wire('Changed.value',function(){d_g.d_s(d_b);});d_g.d_s(d_c);}};return d_f;}});