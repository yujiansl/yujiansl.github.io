(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{"Tb/n":function(X,g,o){"use strict";o.r(g);var R=o("tJVT"),i=o("q1tI"),G=o.n(i),s=o("nKUr"),Q=o.n(s),O="13Vp",p=function(n){var U="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",x=6,L=50,C=n.width,d=C===void 0?120:C,P=n.height,_=P===void 0?40:P,S=n.letters,y=S===void 0?U:S,T=n.length,f=T===void 0?4:T,b=n.minFontSize,w=b===void 0?20:b,M=n.maxFontSize,j=M===void 0?30:M,W=n.change,u=Object(i.useRef)(null),A=Object(i.useState)(),D=Object(R.a)(A,2),t=D[0],B=D[1];Object(i.useEffect)(function(){B(u.current.getContext("2d"))},[u]),Object(i.useEffect)(function(){t&&m()},[t]);var F=function(){m()};Object(i.useImperativeHandle)(n.onRef,function(){return{drawCodeImg:m}});var m=function(){t.fillStyle=h(200,230),t.fillRect(0,0,d,_),K(),z(),$()},a=function(e,r){return Math.floor(Math.random()*(r-e)+e)},h=function(e,r){return"rgb(".concat(a(e,r),", ").concat(a(e,r),", ").concat(a(e,r),")")},K=function(){for(var e="",r=0;r<f;r++){var v=a(w,j),l=j-w+6,E=(d-l*f)/(f+1),V=(r+1)*E+l*r,k=a(22,_),J=a(-40,40),N=a(0,y.length),I=y[N];t.textBaseline="alphabetic",t.font="".concat(v,"px Simhei"),t.fillStyle=h(60,150),t.save(),t.translate(V,k),t.rotate(J*Math.PI/180),t.fillText(I,0,0),t.restore(),e+=I}W(e)},z=function(){for(var e=0;e<x;e++){var r=a(0,t.canvas.clientWidth),v=a(0,t.canvas.clientHeight),l=a(0,t.canvas.clientWidth),E=a(0,t.canvas.clientHeight);t.beginPath(),t.moveTo(r,v),t.lineTo(l,E),t.lineWidth=1,t.strokeStyle=h(150,250),t.stroke()}},$=function(){for(var e=0;e<L;e++){var r=a(0,t.canvas.clientWidth),v=a(0,t.canvas.clientHeight),l=a(1,2);t.beginPath(),t.arc(r,v,l,0,2*Math.PI),t.fillStyle=h(100,200),t.fill()}},H={width:d,height:_,border:"1px solid #d9d9d9"};return Object(s.jsx)("div",{style:H,_nk:"".concat(O,"11"),children:Object(s.jsx)("canvas",{onClick:F,ref:u,width:d-2,height:_-2,_nk:"".concat(O,"21")})})};g.default=p}}]);
