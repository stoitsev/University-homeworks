goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__6536 = (((x == null))?null:x);
if((p[goog.typeOf(x__6536)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__6537__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6537 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6537__delegate.call(this, array, i, idxs);
};
G__6537.cljs$lang$maxFixedArity = 2;
G__6537.cljs$lang$applyTo = (function (arglist__6538){
var array = cljs.core.first(arglist__6538);
var i = cljs.core.first(cljs.core.next(arglist__6538));
var idxs = cljs.core.rest(cljs.core.next(arglist__6538));
return G__6537__delegate(array, i, idxs);
});
G__6537.cljs$lang$arity$variadic = G__6537__delegate;
return G__6537;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____6623 = this$;
if(and__3822__auto____6623)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6623;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2361__auto____6624 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6625 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6624)]);
if(or__3824__auto____6625)
{return or__3824__auto____6625;
} else
{var or__3824__auto____6626 = (cljs.core._invoke["_"]);
if(or__3824__auto____6626)
{return or__3824__auto____6626;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6627 = this$;
if(and__3822__auto____6627)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6627;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2361__auto____6628 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6629 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6628)]);
if(or__3824__auto____6629)
{return or__3824__auto____6629;
} else
{var or__3824__auto____6630 = (cljs.core._invoke["_"]);
if(or__3824__auto____6630)
{return or__3824__auto____6630;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6631 = this$;
if(and__3822__auto____6631)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6631;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2361__auto____6632 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6633 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6632)]);
if(or__3824__auto____6633)
{return or__3824__auto____6633;
} else
{var or__3824__auto____6634 = (cljs.core._invoke["_"]);
if(or__3824__auto____6634)
{return or__3824__auto____6634;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6635 = this$;
if(and__3822__auto____6635)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6635;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2361__auto____6636 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6637 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6636)]);
if(or__3824__auto____6637)
{return or__3824__auto____6637;
} else
{var or__3824__auto____6638 = (cljs.core._invoke["_"]);
if(or__3824__auto____6638)
{return or__3824__auto____6638;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6639 = this$;
if(and__3822__auto____6639)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6639;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2361__auto____6640 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6641 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6640)]);
if(or__3824__auto____6641)
{return or__3824__auto____6641;
} else
{var or__3824__auto____6642 = (cljs.core._invoke["_"]);
if(or__3824__auto____6642)
{return or__3824__auto____6642;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6643 = this$;
if(and__3822__auto____6643)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6643;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2361__auto____6644 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6645 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6644)]);
if(or__3824__auto____6645)
{return or__3824__auto____6645;
} else
{var or__3824__auto____6646 = (cljs.core._invoke["_"]);
if(or__3824__auto____6646)
{return or__3824__auto____6646;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6647 = this$;
if(and__3822__auto____6647)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6647;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2361__auto____6648 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6649 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6648)]);
if(or__3824__auto____6649)
{return or__3824__auto____6649;
} else
{var or__3824__auto____6650 = (cljs.core._invoke["_"]);
if(or__3824__auto____6650)
{return or__3824__auto____6650;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6651 = this$;
if(and__3822__auto____6651)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6651;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2361__auto____6652 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6653 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6652)]);
if(or__3824__auto____6653)
{return or__3824__auto____6653;
} else
{var or__3824__auto____6654 = (cljs.core._invoke["_"]);
if(or__3824__auto____6654)
{return or__3824__auto____6654;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6655 = this$;
if(and__3822__auto____6655)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6655;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2361__auto____6656 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6657 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6656)]);
if(or__3824__auto____6657)
{return or__3824__auto____6657;
} else
{var or__3824__auto____6658 = (cljs.core._invoke["_"]);
if(or__3824__auto____6658)
{return or__3824__auto____6658;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6659 = this$;
if(and__3822__auto____6659)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6659;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2361__auto____6660 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6661 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6660)]);
if(or__3824__auto____6661)
{return or__3824__auto____6661;
} else
{var or__3824__auto____6662 = (cljs.core._invoke["_"]);
if(or__3824__auto____6662)
{return or__3824__auto____6662;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6663 = this$;
if(and__3822__auto____6663)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6663;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2361__auto____6664 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6665 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6664)]);
if(or__3824__auto____6665)
{return or__3824__auto____6665;
} else
{var or__3824__auto____6666 = (cljs.core._invoke["_"]);
if(or__3824__auto____6666)
{return or__3824__auto____6666;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6667 = this$;
if(and__3822__auto____6667)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6667;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2361__auto____6668 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6669 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6668)]);
if(or__3824__auto____6669)
{return or__3824__auto____6669;
} else
{var or__3824__auto____6670 = (cljs.core._invoke["_"]);
if(or__3824__auto____6670)
{return or__3824__auto____6670;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6671 = this$;
if(and__3822__auto____6671)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6671;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2361__auto____6672 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6673 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6672)]);
if(or__3824__auto____6673)
{return or__3824__auto____6673;
} else
{var or__3824__auto____6674 = (cljs.core._invoke["_"]);
if(or__3824__auto____6674)
{return or__3824__auto____6674;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6675 = this$;
if(and__3822__auto____6675)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6675;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2361__auto____6676 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6677 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6676)]);
if(or__3824__auto____6677)
{return or__3824__auto____6677;
} else
{var or__3824__auto____6678 = (cljs.core._invoke["_"]);
if(or__3824__auto____6678)
{return or__3824__auto____6678;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6679 = this$;
if(and__3822__auto____6679)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6679;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2361__auto____6680 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6681 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6680)]);
if(or__3824__auto____6681)
{return or__3824__auto____6681;
} else
{var or__3824__auto____6682 = (cljs.core._invoke["_"]);
if(or__3824__auto____6682)
{return or__3824__auto____6682;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6683 = this$;
if(and__3822__auto____6683)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6683;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2361__auto____6684 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6685 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6684)]);
if(or__3824__auto____6685)
{return or__3824__auto____6685;
} else
{var or__3824__auto____6686 = (cljs.core._invoke["_"]);
if(or__3824__auto____6686)
{return or__3824__auto____6686;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6687 = this$;
if(and__3822__auto____6687)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6687;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2361__auto____6688 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6689 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6688)]);
if(or__3824__auto____6689)
{return or__3824__auto____6689;
} else
{var or__3824__auto____6690 = (cljs.core._invoke["_"]);
if(or__3824__auto____6690)
{return or__3824__auto____6690;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6691 = this$;
if(and__3822__auto____6691)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6691;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2361__auto____6692 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6693 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6692)]);
if(or__3824__auto____6693)
{return or__3824__auto____6693;
} else
{var or__3824__auto____6694 = (cljs.core._invoke["_"]);
if(or__3824__auto____6694)
{return or__3824__auto____6694;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6695 = this$;
if(and__3822__auto____6695)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6695;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2361__auto____6696 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6697 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6696)]);
if(or__3824__auto____6697)
{return or__3824__auto____6697;
} else
{var or__3824__auto____6698 = (cljs.core._invoke["_"]);
if(or__3824__auto____6698)
{return or__3824__auto____6698;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6699 = this$;
if(and__3822__auto____6699)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6699;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2361__auto____6700 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6701 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6700)]);
if(or__3824__auto____6701)
{return or__3824__auto____6701;
} else
{var or__3824__auto____6702 = (cljs.core._invoke["_"]);
if(or__3824__auto____6702)
{return or__3824__auto____6702;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6703 = this$;
if(and__3822__auto____6703)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6703;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2361__auto____6704 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6705 = (cljs.core._invoke[goog.typeOf(x__2361__auto____6704)]);
if(or__3824__auto____6705)
{return or__3824__auto____6705;
} else
{var or__3824__auto____6706 = (cljs.core._invoke["_"]);
if(or__3824__auto____6706)
{return or__3824__auto____6706;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____6711 = coll;
if(and__3822__auto____6711)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6711;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2361__auto____6712 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6713 = (cljs.core._count[goog.typeOf(x__2361__auto____6712)]);
if(or__3824__auto____6713)
{return or__3824__auto____6713;
} else
{var or__3824__auto____6714 = (cljs.core._count["_"]);
if(or__3824__auto____6714)
{return or__3824__auto____6714;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6719 = coll;
if(and__3822__auto____6719)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6719;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2361__auto____6720 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6721 = (cljs.core._empty[goog.typeOf(x__2361__auto____6720)]);
if(or__3824__auto____6721)
{return or__3824__auto____6721;
} else
{var or__3824__auto____6722 = (cljs.core._empty["_"]);
if(or__3824__auto____6722)
{return or__3824__auto____6722;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6727 = coll;
if(and__3822__auto____6727)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6727;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2361__auto____6728 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6729 = (cljs.core._conj[goog.typeOf(x__2361__auto____6728)]);
if(or__3824__auto____6729)
{return or__3824__auto____6729;
} else
{var or__3824__auto____6730 = (cljs.core._conj["_"]);
if(or__3824__auto____6730)
{return or__3824__auto____6730;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____6739 = coll;
if(and__3822__auto____6739)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6739;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2361__auto____6740 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6741 = (cljs.core._nth[goog.typeOf(x__2361__auto____6740)]);
if(or__3824__auto____6741)
{return or__3824__auto____6741;
} else
{var or__3824__auto____6742 = (cljs.core._nth["_"]);
if(or__3824__auto____6742)
{return or__3824__auto____6742;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6743 = coll;
if(and__3822__auto____6743)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6743;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2361__auto____6744 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6745 = (cljs.core._nth[goog.typeOf(x__2361__auto____6744)]);
if(or__3824__auto____6745)
{return or__3824__auto____6745;
} else
{var or__3824__auto____6746 = (cljs.core._nth["_"]);
if(or__3824__auto____6746)
{return or__3824__auto____6746;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____6751 = coll;
if(and__3822__auto____6751)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6751;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2361__auto____6752 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6753 = (cljs.core._first[goog.typeOf(x__2361__auto____6752)]);
if(or__3824__auto____6753)
{return or__3824__auto____6753;
} else
{var or__3824__auto____6754 = (cljs.core._first["_"]);
if(or__3824__auto____6754)
{return or__3824__auto____6754;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6759 = coll;
if(and__3822__auto____6759)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6759;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2361__auto____6760 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6761 = (cljs.core._rest[goog.typeOf(x__2361__auto____6760)]);
if(or__3824__auto____6761)
{return or__3824__auto____6761;
} else
{var or__3824__auto____6762 = (cljs.core._rest["_"]);
if(or__3824__auto____6762)
{return or__3824__auto____6762;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6767 = coll;
if(and__3822__auto____6767)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6767;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2361__auto____6768 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6769 = (cljs.core._next[goog.typeOf(x__2361__auto____6768)]);
if(or__3824__auto____6769)
{return or__3824__auto____6769;
} else
{var or__3824__auto____6770 = (cljs.core._next["_"]);
if(or__3824__auto____6770)
{return or__3824__auto____6770;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____6779 = o;
if(and__3822__auto____6779)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6779;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2361__auto____6780 = (((o == null))?null:o);
return (function (){var or__3824__auto____6781 = (cljs.core._lookup[goog.typeOf(x__2361__auto____6780)]);
if(or__3824__auto____6781)
{return or__3824__auto____6781;
} else
{var or__3824__auto____6782 = (cljs.core._lookup["_"]);
if(or__3824__auto____6782)
{return or__3824__auto____6782;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6783 = o;
if(and__3822__auto____6783)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6783;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2361__auto____6784 = (((o == null))?null:o);
return (function (){var or__3824__auto____6785 = (cljs.core._lookup[goog.typeOf(x__2361__auto____6784)]);
if(or__3824__auto____6785)
{return or__3824__auto____6785;
} else
{var or__3824__auto____6786 = (cljs.core._lookup["_"]);
if(or__3824__auto____6786)
{return or__3824__auto____6786;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____6791 = coll;
if(and__3822__auto____6791)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6791;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2361__auto____6792 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6793 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2361__auto____6792)]);
if(or__3824__auto____6793)
{return or__3824__auto____6793;
} else
{var or__3824__auto____6794 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6794)
{return or__3824__auto____6794;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6799 = coll;
if(and__3822__auto____6799)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6799;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2361__auto____6800 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6801 = (cljs.core._assoc[goog.typeOf(x__2361__auto____6800)]);
if(or__3824__auto____6801)
{return or__3824__auto____6801;
} else
{var or__3824__auto____6802 = (cljs.core._assoc["_"]);
if(or__3824__auto____6802)
{return or__3824__auto____6802;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6807 = coll;
if(and__3822__auto____6807)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6807;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2361__auto____6808 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6809 = (cljs.core._dissoc[goog.typeOf(x__2361__auto____6808)]);
if(or__3824__auto____6809)
{return or__3824__auto____6809;
} else
{var or__3824__auto____6810 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6810)
{return or__3824__auto____6810;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6815 = coll;
if(and__3822__auto____6815)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6815;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2361__auto____6816 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6817 = (cljs.core._key[goog.typeOf(x__2361__auto____6816)]);
if(or__3824__auto____6817)
{return or__3824__auto____6817;
} else
{var or__3824__auto____6818 = (cljs.core._key["_"]);
if(or__3824__auto____6818)
{return or__3824__auto____6818;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6823 = coll;
if(and__3822__auto____6823)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6823;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2361__auto____6824 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6825 = (cljs.core._val[goog.typeOf(x__2361__auto____6824)]);
if(or__3824__auto____6825)
{return or__3824__auto____6825;
} else
{var or__3824__auto____6826 = (cljs.core._val["_"]);
if(or__3824__auto____6826)
{return or__3824__auto____6826;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6831 = coll;
if(and__3822__auto____6831)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6831;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2361__auto____6832 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6833 = (cljs.core._disjoin[goog.typeOf(x__2361__auto____6832)]);
if(or__3824__auto____6833)
{return or__3824__auto____6833;
} else
{var or__3824__auto____6834 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6834)
{return or__3824__auto____6834;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6839 = coll;
if(and__3822__auto____6839)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6839;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2361__auto____6840 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6841 = (cljs.core._peek[goog.typeOf(x__2361__auto____6840)]);
if(or__3824__auto____6841)
{return or__3824__auto____6841;
} else
{var or__3824__auto____6842 = (cljs.core._peek["_"]);
if(or__3824__auto____6842)
{return or__3824__auto____6842;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6847 = coll;
if(and__3822__auto____6847)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6847;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2361__auto____6848 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6849 = (cljs.core._pop[goog.typeOf(x__2361__auto____6848)]);
if(or__3824__auto____6849)
{return or__3824__auto____6849;
} else
{var or__3824__auto____6850 = (cljs.core._pop["_"]);
if(or__3824__auto____6850)
{return or__3824__auto____6850;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6855 = coll;
if(and__3822__auto____6855)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6855;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2361__auto____6856 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6857 = (cljs.core._assoc_n[goog.typeOf(x__2361__auto____6856)]);
if(or__3824__auto____6857)
{return or__3824__auto____6857;
} else
{var or__3824__auto____6858 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6858)
{return or__3824__auto____6858;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6863 = o;
if(and__3822__auto____6863)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6863;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2361__auto____6864 = (((o == null))?null:o);
return (function (){var or__3824__auto____6865 = (cljs.core._deref[goog.typeOf(x__2361__auto____6864)]);
if(or__3824__auto____6865)
{return or__3824__auto____6865;
} else
{var or__3824__auto____6866 = (cljs.core._deref["_"]);
if(or__3824__auto____6866)
{return or__3824__auto____6866;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6871 = o;
if(and__3822__auto____6871)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6871;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2361__auto____6872 = (((o == null))?null:o);
return (function (){var or__3824__auto____6873 = (cljs.core._deref_with_timeout[goog.typeOf(x__2361__auto____6872)]);
if(or__3824__auto____6873)
{return or__3824__auto____6873;
} else
{var or__3824__auto____6874 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6874)
{return or__3824__auto____6874;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6879 = o;
if(and__3822__auto____6879)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6879;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2361__auto____6880 = (((o == null))?null:o);
return (function (){var or__3824__auto____6881 = (cljs.core._meta[goog.typeOf(x__2361__auto____6880)]);
if(or__3824__auto____6881)
{return or__3824__auto____6881;
} else
{var or__3824__auto____6882 = (cljs.core._meta["_"]);
if(or__3824__auto____6882)
{return or__3824__auto____6882;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6887 = o;
if(and__3822__auto____6887)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6887;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2361__auto____6888 = (((o == null))?null:o);
return (function (){var or__3824__auto____6889 = (cljs.core._with_meta[goog.typeOf(x__2361__auto____6888)]);
if(or__3824__auto____6889)
{return or__3824__auto____6889;
} else
{var or__3824__auto____6890 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6890)
{return or__3824__auto____6890;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____6899 = coll;
if(and__3822__auto____6899)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6899;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2361__auto____6900 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6901 = (cljs.core._reduce[goog.typeOf(x__2361__auto____6900)]);
if(or__3824__auto____6901)
{return or__3824__auto____6901;
} else
{var or__3824__auto____6902 = (cljs.core._reduce["_"]);
if(or__3824__auto____6902)
{return or__3824__auto____6902;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6903 = coll;
if(and__3822__auto____6903)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6903;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2361__auto____6904 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6905 = (cljs.core._reduce[goog.typeOf(x__2361__auto____6904)]);
if(or__3824__auto____6905)
{return or__3824__auto____6905;
} else
{var or__3824__auto____6906 = (cljs.core._reduce["_"]);
if(or__3824__auto____6906)
{return or__3824__auto____6906;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____6911 = coll;
if(and__3822__auto____6911)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6911;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2361__auto____6912 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6913 = (cljs.core._kv_reduce[goog.typeOf(x__2361__auto____6912)]);
if(or__3824__auto____6913)
{return or__3824__auto____6913;
} else
{var or__3824__auto____6914 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6914)
{return or__3824__auto____6914;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6919 = o;
if(and__3822__auto____6919)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6919;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2361__auto____6920 = (((o == null))?null:o);
return (function (){var or__3824__auto____6921 = (cljs.core._equiv[goog.typeOf(x__2361__auto____6920)]);
if(or__3824__auto____6921)
{return or__3824__auto____6921;
} else
{var or__3824__auto____6922 = (cljs.core._equiv["_"]);
if(or__3824__auto____6922)
{return or__3824__auto____6922;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6927 = o;
if(and__3822__auto____6927)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6927;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2361__auto____6928 = (((o == null))?null:o);
return (function (){var or__3824__auto____6929 = (cljs.core._hash[goog.typeOf(x__2361__auto____6928)]);
if(or__3824__auto____6929)
{return or__3824__auto____6929;
} else
{var or__3824__auto____6930 = (cljs.core._hash["_"]);
if(or__3824__auto____6930)
{return or__3824__auto____6930;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6935 = o;
if(and__3822__auto____6935)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6935;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2361__auto____6936 = (((o == null))?null:o);
return (function (){var or__3824__auto____6937 = (cljs.core._seq[goog.typeOf(x__2361__auto____6936)]);
if(or__3824__auto____6937)
{return or__3824__auto____6937;
} else
{var or__3824__auto____6938 = (cljs.core._seq["_"]);
if(or__3824__auto____6938)
{return or__3824__auto____6938;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____6943 = coll;
if(and__3822__auto____6943)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6943;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2361__auto____6944 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6945 = (cljs.core._rseq[goog.typeOf(x__2361__auto____6944)]);
if(or__3824__auto____6945)
{return or__3824__auto____6945;
} else
{var or__3824__auto____6946 = (cljs.core._rseq["_"]);
if(or__3824__auto____6946)
{return or__3824__auto____6946;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6951 = coll;
if(and__3822__auto____6951)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6951;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2361__auto____6952 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6953 = (cljs.core._sorted_seq[goog.typeOf(x__2361__auto____6952)]);
if(or__3824__auto____6953)
{return or__3824__auto____6953;
} else
{var or__3824__auto____6954 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6954)
{return or__3824__auto____6954;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6959 = coll;
if(and__3822__auto____6959)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6959;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2361__auto____6960 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6961 = (cljs.core._sorted_seq_from[goog.typeOf(x__2361__auto____6960)]);
if(or__3824__auto____6961)
{return or__3824__auto____6961;
} else
{var or__3824__auto____6962 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6962)
{return or__3824__auto____6962;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6967 = coll;
if(and__3822__auto____6967)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6967;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2361__auto____6968 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6969 = (cljs.core._entry_key[goog.typeOf(x__2361__auto____6968)]);
if(or__3824__auto____6969)
{return or__3824__auto____6969;
} else
{var or__3824__auto____6970 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6970)
{return or__3824__auto____6970;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6975 = coll;
if(and__3822__auto____6975)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6975;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2361__auto____6976 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6977 = (cljs.core._comparator[goog.typeOf(x__2361__auto____6976)]);
if(or__3824__auto____6977)
{return or__3824__auto____6977;
} else
{var or__3824__auto____6978 = (cljs.core._comparator["_"]);
if(or__3824__auto____6978)
{return or__3824__auto____6978;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6983 = o;
if(and__3822__auto____6983)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6983;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2361__auto____6984 = (((o == null))?null:o);
return (function (){var or__3824__auto____6985 = (cljs.core._pr_seq[goog.typeOf(x__2361__auto____6984)]);
if(or__3824__auto____6985)
{return or__3824__auto____6985;
} else
{var or__3824__auto____6986 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6986)
{return or__3824__auto____6986;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6991 = d;
if(and__3822__auto____6991)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6991;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2361__auto____6992 = (((d == null))?null:d);
return (function (){var or__3824__auto____6993 = (cljs.core._realized_QMARK_[goog.typeOf(x__2361__auto____6992)]);
if(or__3824__auto____6993)
{return or__3824__auto____6993;
} else
{var or__3824__auto____6994 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6994)
{return or__3824__auto____6994;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6999 = this$;
if(and__3822__auto____6999)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6999;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2361__auto____7000 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7001 = (cljs.core._notify_watches[goog.typeOf(x__2361__auto____7000)]);
if(or__3824__auto____7001)
{return or__3824__auto____7001;
} else
{var or__3824__auto____7002 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____7002)
{return or__3824__auto____7002;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____7007 = this$;
if(and__3822__auto____7007)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____7007;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2361__auto____7008 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7009 = (cljs.core._add_watch[goog.typeOf(x__2361__auto____7008)]);
if(or__3824__auto____7009)
{return or__3824__auto____7009;
} else
{var or__3824__auto____7010 = (cljs.core._add_watch["_"]);
if(or__3824__auto____7010)
{return or__3824__auto____7010;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____7015 = this$;
if(and__3822__auto____7015)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____7015;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2361__auto____7016 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7017 = (cljs.core._remove_watch[goog.typeOf(x__2361__auto____7016)]);
if(or__3824__auto____7017)
{return or__3824__auto____7017;
} else
{var or__3824__auto____7018 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____7018)
{return or__3824__auto____7018;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____7023 = coll;
if(and__3822__auto____7023)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____7023;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2361__auto____7024 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7025 = (cljs.core._as_transient[goog.typeOf(x__2361__auto____7024)]);
if(or__3824__auto____7025)
{return or__3824__auto____7025;
} else
{var or__3824__auto____7026 = (cljs.core._as_transient["_"]);
if(or__3824__auto____7026)
{return or__3824__auto____7026;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____7031 = tcoll;
if(and__3822__auto____7031)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____7031;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2361__auto____7032 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7033 = (cljs.core._conj_BANG_[goog.typeOf(x__2361__auto____7032)]);
if(or__3824__auto____7033)
{return or__3824__auto____7033;
} else
{var or__3824__auto____7034 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____7034)
{return or__3824__auto____7034;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____7039 = tcoll;
if(and__3822__auto____7039)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____7039;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2361__auto____7040 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7041 = (cljs.core._persistent_BANG_[goog.typeOf(x__2361__auto____7040)]);
if(or__3824__auto____7041)
{return or__3824__auto____7041;
} else
{var or__3824__auto____7042 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____7042)
{return or__3824__auto____7042;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____7047 = tcoll;
if(and__3822__auto____7047)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____7047;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2361__auto____7048 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7049 = (cljs.core._assoc_BANG_[goog.typeOf(x__2361__auto____7048)]);
if(or__3824__auto____7049)
{return or__3824__auto____7049;
} else
{var or__3824__auto____7050 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____7050)
{return or__3824__auto____7050;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____7055 = tcoll;
if(and__3822__auto____7055)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____7055;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2361__auto____7056 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7057 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2361__auto____7056)]);
if(or__3824__auto____7057)
{return or__3824__auto____7057;
} else
{var or__3824__auto____7058 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____7058)
{return or__3824__auto____7058;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____7063 = tcoll;
if(and__3822__auto____7063)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____7063;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2361__auto____7064 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7065 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2361__auto____7064)]);
if(or__3824__auto____7065)
{return or__3824__auto____7065;
} else
{var or__3824__auto____7066 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____7066)
{return or__3824__auto____7066;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____7071 = tcoll;
if(and__3822__auto____7071)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____7071;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2361__auto____7072 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7073 = (cljs.core._pop_BANG_[goog.typeOf(x__2361__auto____7072)]);
if(or__3824__auto____7073)
{return or__3824__auto____7073;
} else
{var or__3824__auto____7074 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____7074)
{return or__3824__auto____7074;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____7079 = tcoll;
if(and__3822__auto____7079)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____7079;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2361__auto____7080 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7081 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2361__auto____7080)]);
if(or__3824__auto____7081)
{return or__3824__auto____7081;
} else
{var or__3824__auto____7082 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____7082)
{return or__3824__auto____7082;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____7087 = x;
if(and__3822__auto____7087)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____7087;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2361__auto____7088 = (((x == null))?null:x);
return (function (){var or__3824__auto____7089 = (cljs.core._compare[goog.typeOf(x__2361__auto____7088)]);
if(or__3824__auto____7089)
{return or__3824__auto____7089;
} else
{var or__3824__auto____7090 = (cljs.core._compare["_"]);
if(or__3824__auto____7090)
{return or__3824__auto____7090;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____7095 = coll;
if(and__3822__auto____7095)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____7095;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2361__auto____7096 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7097 = (cljs.core._drop_first[goog.typeOf(x__2361__auto____7096)]);
if(or__3824__auto____7097)
{return or__3824__auto____7097;
} else
{var or__3824__auto____7098 = (cljs.core._drop_first["_"]);
if(or__3824__auto____7098)
{return or__3824__auto____7098;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____7103 = coll;
if(and__3822__auto____7103)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____7103;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2361__auto____7104 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7105 = (cljs.core._chunked_first[goog.typeOf(x__2361__auto____7104)]);
if(or__3824__auto____7105)
{return or__3824__auto____7105;
} else
{var or__3824__auto____7106 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____7106)
{return or__3824__auto____7106;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____7111 = coll;
if(and__3822__auto____7111)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____7111;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2361__auto____7112 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7113 = (cljs.core._chunked_rest[goog.typeOf(x__2361__auto____7112)]);
if(or__3824__auto____7113)
{return or__3824__auto____7113;
} else
{var or__3824__auto____7114 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____7114)
{return or__3824__auto____7114;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____7119 = coll;
if(and__3822__auto____7119)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____7119;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2361__auto____7120 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7121 = (cljs.core._chunked_next[goog.typeOf(x__2361__auto____7120)]);
if(or__3824__auto____7121)
{return or__3824__auto____7121;
} else
{var or__3824__auto____7122 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____7122)
{return or__3824__auto____7122;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____7124 = (x === y);
if(or__3824__auto____7124)
{return or__3824__auto____7124;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7125__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7126 = y;
var G__7127 = cljs.core.first.call(null,more);
var G__7128 = cljs.core.next.call(null,more);
x = G__7126;
y = G__7127;
more = G__7128;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7125 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7125__delegate.call(this, x, y, more);
};
G__7125.cljs$lang$maxFixedArity = 2;
G__7125.cljs$lang$applyTo = (function (arglist__7129){
var x = cljs.core.first(arglist__7129);
var y = cljs.core.first(cljs.core.next(arglist__7129));
var more = cljs.core.rest(cljs.core.next(arglist__7129));
return G__7125__delegate(x, y, more);
});
G__7125.cljs$lang$arity$variadic = G__7125__delegate;
return G__7125;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__7130 = null;
var G__7130__2 = (function (o,k){
return null;
});
var G__7130__3 = (function (o,k,not_found){
return not_found;
});
G__7130 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7130__2.call(this,o,k);
case 3:
return G__7130__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7130;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__7131 = null;
var G__7131__2 = (function (_,f){
return f.call(null);
});
var G__7131__3 = (function (_,f,start){
return start;
});
G__7131 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7131__2.call(this,_,f);
case 3:
return G__7131__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7131;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__7132 = null;
var G__7132__2 = (function (_,n){
return null;
});
var G__7132__3 = (function (_,n,not_found){
return not_found;
});
G__7132 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7132__2.call(this,_,n);
case 3:
return G__7132__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7132;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto____7133 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____7133)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____7133;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__7146 = cljs.core._count.call(null,cicoll);
if((cnt__7146 === 0))
{return f.call(null);
} else
{var val__7147 = cljs.core._nth.call(null,cicoll,0);
var n__7148 = 1;
while(true){
if((n__7148 < cnt__7146))
{var nval__7149 = f.call(null,val__7147,cljs.core._nth.call(null,cicoll,n__7148));
if(cljs.core.reduced_QMARK_.call(null,nval__7149))
{return cljs.core.deref.call(null,nval__7149);
} else
{{
var G__7158 = nval__7149;
var G__7159 = (n__7148 + 1);
val__7147 = G__7158;
n__7148 = G__7159;
continue;
}
}
} else
{return val__7147;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7150 = cljs.core._count.call(null,cicoll);
var val__7151 = val;
var n__7152 = 0;
while(true){
if((n__7152 < cnt__7150))
{var nval__7153 = f.call(null,val__7151,cljs.core._nth.call(null,cicoll,n__7152));
if(cljs.core.reduced_QMARK_.call(null,nval__7153))
{return cljs.core.deref.call(null,nval__7153);
} else
{{
var G__7160 = nval__7153;
var G__7161 = (n__7152 + 1);
val__7151 = G__7160;
n__7152 = G__7161;
continue;
}
}
} else
{return val__7151;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7154 = cljs.core._count.call(null,cicoll);
var val__7155 = val;
var n__7156 = idx;
while(true){
if((n__7156 < cnt__7154))
{var nval__7157 = f.call(null,val__7155,cljs.core._nth.call(null,cicoll,n__7156));
if(cljs.core.reduced_QMARK_.call(null,nval__7157))
{return cljs.core.deref.call(null,nval__7157);
} else
{{
var G__7162 = nval__7157;
var G__7163 = (n__7156 + 1);
val__7155 = G__7162;
n__7156 = G__7163;
continue;
}
}
} else
{return val__7155;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__7176 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7177 = (arr[0]);
var n__7178 = 1;
while(true){
if((n__7178 < cnt__7176))
{var nval__7179 = f.call(null,val__7177,(arr[n__7178]));
if(cljs.core.reduced_QMARK_.call(null,nval__7179))
{return cljs.core.deref.call(null,nval__7179);
} else
{{
var G__7188 = nval__7179;
var G__7189 = (n__7178 + 1);
val__7177 = G__7188;
n__7178 = G__7189;
continue;
}
}
} else
{return val__7177;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7180 = arr.length;
var val__7181 = val;
var n__7182 = 0;
while(true){
if((n__7182 < cnt__7180))
{var nval__7183 = f.call(null,val__7181,(arr[n__7182]));
if(cljs.core.reduced_QMARK_.call(null,nval__7183))
{return cljs.core.deref.call(null,nval__7183);
} else
{{
var G__7190 = nval__7183;
var G__7191 = (n__7182 + 1);
val__7181 = G__7190;
n__7182 = G__7191;
continue;
}
}
} else
{return val__7181;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7184 = arr.length;
var val__7185 = val;
var n__7186 = idx;
while(true){
if((n__7186 < cnt__7184))
{var nval__7187 = f.call(null,val__7185,(arr[n__7186]));
if(cljs.core.reduced_QMARK_.call(null,nval__7187))
{return cljs.core.deref.call(null,nval__7187);
} else
{{
var G__7192 = nval__7187;
var G__7193 = (n__7186 + 1);
val__7185 = G__7192;
n__7186 = G__7193;
continue;
}
}
} else
{return val__7185;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7194 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7195 = this;
if(((this__7195.i + 1) < this__7195.a.length))
{return (new cljs.core.IndexedSeq(this__7195.a,(this__7195.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7196 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7197 = this;
var c__7198 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7198 > 0))
{return (new cljs.core.RSeq(coll,(c__7198 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7199 = this;
var this__7200 = this;
return cljs.core.pr_str.call(null,this__7200);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7201 = this;
if(cljs.core.counted_QMARK_.call(null,this__7201.a))
{return cljs.core.ci_reduce.call(null,this__7201.a,f,(this__7201.a[this__7201.i]),(this__7201.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7201.a[this__7201.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7202 = this;
if(cljs.core.counted_QMARK_.call(null,this__7202.a))
{return cljs.core.ci_reduce.call(null,this__7202.a,f,start,this__7202.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7203 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7204 = this;
return (this__7204.a.length - this__7204.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7205 = this;
return (this__7205.a[this__7205.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7206 = this;
if(((this__7206.i + 1) < this__7206.a.length))
{return (new cljs.core.IndexedSeq(this__7206.a,(this__7206.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7207 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7208 = this;
var i__7209 = (n + this__7208.i);
if((i__7209 < this__7208.a.length))
{return (this__7208.a[i__7209]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7210 = this;
var i__7211 = (n + this__7210.i);
if((i__7211 < this__7210.a.length))
{return (this__7210.a[i__7211]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__7212 = null;
var G__7212__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7212__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7212 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7212__2.call(this,array,f);
case 3:
return G__7212__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7212;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7213 = null;
var G__7213__2 = (function (array,k){
return (array[k]);
});
var G__7213__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7213 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7213__2.call(this,array,k);
case 3:
return G__7213__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7213;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7214 = null;
var G__7214__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7214__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7214 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7214__2.call(this,array,n);
case 3:
return G__7214__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7214;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7215 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7216 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7217 = this;
var this__7218 = this;
return cljs.core.pr_str.call(null,this__7218);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7219 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7220 = this;
return (this__7220.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7221 = this;
return cljs.core._nth.call(null,this__7221.ci,this__7221.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7222 = this;
if((this__7222.i > 0))
{return (new cljs.core.RSeq(this__7222.ci,(this__7222.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7223 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7224 = this;
return (new cljs.core.RSeq(this__7224.ci,this__7224.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7225 = this;
return this__7225.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7229__7230 = coll;
if(G__7229__7230)
{if((function (){var or__3824__auto____7231 = (G__7229__7230.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7231)
{return or__3824__auto____7231;
} else
{return G__7229__7230.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7229__7230.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7229__7230);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7229__7230);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7236__7237 = coll;
if(G__7236__7237)
{if((function (){var or__3824__auto____7238 = (G__7236__7237.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7238)
{return or__3824__auto____7238;
} else
{return G__7236__7237.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7236__7237.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7236__7237);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7236__7237);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__7239 = cljs.core.seq.call(null,coll);
if((s__7239 == null))
{return null;
} else
{return cljs.core._first.call(null,s__7239);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__7244__7245 = coll;
if(G__7244__7245)
{if((function (){var or__3824__auto____7246 = (G__7244__7245.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7246)
{return or__3824__auto____7246;
} else
{return G__7244__7245.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7244__7245.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7244__7245);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7244__7245);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__7247 = cljs.core.seq.call(null,coll);
if(!((s__7247 == null)))
{return cljs.core._rest.call(null,s__7247);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7251__7252 = coll;
if(G__7251__7252)
{if((function (){var or__3824__auto____7253 = (G__7251__7252.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7253)
{return or__3824__auto____7253;
} else
{return G__7251__7252.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7251__7252.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7251__7252);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7251__7252);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__7255 = cljs.core.next.call(null,s);
if(!((sn__7255 == null)))
{{
var G__7256 = sn__7255;
s = G__7256;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__7257__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7258 = conj.call(null,coll,x);
var G__7259 = cljs.core.first.call(null,xs);
var G__7260 = cljs.core.next.call(null,xs);
coll = G__7258;
x = G__7259;
xs = G__7260;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7257 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7257__delegate.call(this, coll, x, xs);
};
G__7257.cljs$lang$maxFixedArity = 2;
G__7257.cljs$lang$applyTo = (function (arglist__7261){
var coll = cljs.core.first(arglist__7261);
var x = cljs.core.first(cljs.core.next(arglist__7261));
var xs = cljs.core.rest(cljs.core.next(arglist__7261));
return G__7257__delegate(coll, x, xs);
});
G__7257.cljs$lang$arity$variadic = G__7257__delegate;
return G__7257;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__7264 = cljs.core.seq.call(null,coll);
var acc__7265 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__7264))
{return (acc__7265 + cljs.core._count.call(null,s__7264));
} else
{{
var G__7266 = cljs.core.next.call(null,s__7264);
var G__7267 = (acc__7265 + 1);
s__7264 = G__7266;
acc__7265 = G__7267;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__7274__7275 = coll;
if(G__7274__7275)
{if((function (){var or__3824__auto____7276 = (G__7274__7275.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7276)
{return or__3824__auto____7276;
} else
{return G__7274__7275.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7274__7275.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7274__7275);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7274__7275);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__7277__7278 = coll;
if(G__7277__7278)
{if((function (){var or__3824__auto____7279 = (G__7277__7278.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7279)
{return or__3824__auto____7279;
} else
{return G__7277__7278.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7277__7278.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7277__7278);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7277__7278);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__7282__delegate = function (coll,k,v,kvs){
while(true){
var ret__7281 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7283 = ret__7281;
var G__7284 = cljs.core.first.call(null,kvs);
var G__7285 = cljs.core.second.call(null,kvs);
var G__7286 = cljs.core.nnext.call(null,kvs);
coll = G__7283;
k = G__7284;
v = G__7285;
kvs = G__7286;
continue;
}
} else
{return ret__7281;
}
break;
}
};
var G__7282 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7282__delegate.call(this, coll, k, v, kvs);
};
G__7282.cljs$lang$maxFixedArity = 3;
G__7282.cljs$lang$applyTo = (function (arglist__7287){
var coll = cljs.core.first(arglist__7287);
var k = cljs.core.first(cljs.core.next(arglist__7287));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7287)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7287)));
return G__7282__delegate(coll, k, v, kvs);
});
G__7282.cljs$lang$arity$variadic = G__7282__delegate;
return G__7282;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__7290__delegate = function (coll,k,ks){
while(true){
var ret__7289 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7291 = ret__7289;
var G__7292 = cljs.core.first.call(null,ks);
var G__7293 = cljs.core.next.call(null,ks);
coll = G__7291;
k = G__7292;
ks = G__7293;
continue;
}
} else
{return ret__7289;
}
break;
}
};
var G__7290 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7290__delegate.call(this, coll, k, ks);
};
G__7290.cljs$lang$maxFixedArity = 2;
G__7290.cljs$lang$applyTo = (function (arglist__7294){
var coll = cljs.core.first(arglist__7294);
var k = cljs.core.first(cljs.core.next(arglist__7294));
var ks = cljs.core.rest(cljs.core.next(arglist__7294));
return G__7290__delegate(coll, k, ks);
});
G__7290.cljs$lang$arity$variadic = G__7290__delegate;
return G__7290;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__7298__7299 = o;
if(G__7298__7299)
{if((function (){var or__3824__auto____7300 = (G__7298__7299.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7300)
{return or__3824__auto____7300;
} else
{return G__7298__7299.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7298__7299.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7298__7299);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7298__7299);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__7303__delegate = function (coll,k,ks){
while(true){
var ret__7302 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7304 = ret__7302;
var G__7305 = cljs.core.first.call(null,ks);
var G__7306 = cljs.core.next.call(null,ks);
coll = G__7304;
k = G__7305;
ks = G__7306;
continue;
}
} else
{return ret__7302;
}
break;
}
};
var G__7303 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7303__delegate.call(this, coll, k, ks);
};
G__7303.cljs$lang$maxFixedArity = 2;
G__7303.cljs$lang$applyTo = (function (arglist__7307){
var coll = cljs.core.first(arglist__7307);
var k = cljs.core.first(cljs.core.next(arglist__7307));
var ks = cljs.core.rest(cljs.core.next(arglist__7307));
return G__7303__delegate(coll, k, ks);
});
G__7303.cljs$lang$arity$variadic = G__7303__delegate;
return G__7303;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__7309 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7309);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7309;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7311 = (cljs.core.string_hash_cache[k]);
if(!((h__7311 == null)))
{return h__7311;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____7313 = goog.isString(o);
if(and__3822__auto____7313)
{return check_cache;
} else
{return and__3822__auto____7313;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7317__7318 = x;
if(G__7317__7318)
{if((function (){var or__3824__auto____7319 = (G__7317__7318.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7319)
{return or__3824__auto____7319;
} else
{return G__7317__7318.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7317__7318.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7317__7318);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7317__7318);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7323__7324 = x;
if(G__7323__7324)
{if((function (){var or__3824__auto____7325 = (G__7323__7324.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7325)
{return or__3824__auto____7325;
} else
{return G__7323__7324.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7323__7324.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7323__7324);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7323__7324);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7329__7330 = x;
if(G__7329__7330)
{if((function (){var or__3824__auto____7331 = (G__7329__7330.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7331)
{return or__3824__auto____7331;
} else
{return G__7329__7330.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7329__7330.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7329__7330);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7329__7330);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7335__7336 = x;
if(G__7335__7336)
{if((function (){var or__3824__auto____7337 = (G__7335__7336.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7337)
{return or__3824__auto____7337;
} else
{return G__7335__7336.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7335__7336.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7335__7336);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7335__7336);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7341__7342 = x;
if(G__7341__7342)
{if((function (){var or__3824__auto____7343 = (G__7341__7342.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7343)
{return or__3824__auto____7343;
} else
{return G__7341__7342.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7341__7342.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7341__7342);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7341__7342);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7347__7348 = x;
if(G__7347__7348)
{if((function (){var or__3824__auto____7349 = (G__7347__7348.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7349)
{return or__3824__auto____7349;
} else
{return G__7347__7348.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7347__7348.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7347__7348);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7347__7348);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7353__7354 = x;
if(G__7353__7354)
{if((function (){var or__3824__auto____7355 = (G__7353__7354.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7355)
{return or__3824__auto____7355;
} else
{return G__7353__7354.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7353__7354.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7353__7354);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7353__7354);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7359__7360 = x;
if(G__7359__7360)
{if((function (){var or__3824__auto____7361 = (G__7359__7360.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7361)
{return or__3824__auto____7361;
} else
{return G__7359__7360.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7359__7360.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7359__7360);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7359__7360);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7365__7366 = x;
if(G__7365__7366)
{if((function (){var or__3824__auto____7367 = (G__7365__7366.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7367)
{return or__3824__auto____7367;
} else
{return G__7365__7366.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7365__7366.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7365__7366);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7365__7366);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7371__7372 = x;
if(G__7371__7372)
{if(cljs.core.truth_((function (){var or__3824__auto____7373 = null;
if(cljs.core.truth_(or__3824__auto____7373))
{return or__3824__auto____7373;
} else
{return G__7371__7372.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7371__7372.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7371__7372);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7371__7372);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__7374__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7374 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7374__delegate.call(this, keyvals);
};
G__7374.cljs$lang$maxFixedArity = 0;
G__7374.cljs$lang$applyTo = (function (arglist__7375){
var keyvals = cljs.core.seq(arglist__7375);;
return G__7374__delegate(keyvals);
});
G__7374.cljs$lang$arity$variadic = G__7374__delegate;
return G__7374;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__7377 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7377.push(key);
}));
return keys__7377;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7381 = i;
var j__7382 = j;
var len__7383 = len;
while(true){
if((len__7383 === 0))
{return to;
} else
{(to[j__7382] = (from[i__7381]));
{
var G__7384 = (i__7381 + 1);
var G__7385 = (j__7382 + 1);
var G__7386 = (len__7383 - 1);
i__7381 = G__7384;
j__7382 = G__7385;
len__7383 = G__7386;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7390 = (i + (len - 1));
var j__7391 = (j + (len - 1));
var len__7392 = len;
while(true){
if((len__7392 === 0))
{return to;
} else
{(to[j__7391] = (from[i__7390]));
{
var G__7393 = (i__7390 - 1);
var G__7394 = (j__7391 - 1);
var G__7395 = (len__7392 - 1);
i__7390 = G__7393;
j__7391 = G__7394;
len__7392 = G__7395;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__7399__7400 = s;
if(G__7399__7400)
{if((function (){var or__3824__auto____7401 = (G__7399__7400.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7401)
{return or__3824__auto____7401;
} else
{return G__7399__7400.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7399__7400.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7399__7400);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7399__7400);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7405__7406 = s;
if(G__7405__7406)
{if((function (){var or__3824__auto____7407 = (G__7405__7406.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7407)
{return or__3824__auto____7407;
} else
{return G__7405__7406.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7405__7406.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7405__7406);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7405__7406);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____7410 = goog.isString(x);
if(and__3822__auto____7410)
{return !((function (){var or__3824__auto____7411 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7411)
{return or__3824__auto____7411;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7410;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7413 = goog.isString(x);
if(and__3822__auto____7413)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7413;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7415 = goog.isString(x);
if(and__3822__auto____7415)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7415;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7420 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7420)
{return or__3824__auto____7420;
} else
{var G__7421__7422 = f;
if(G__7421__7422)
{if((function (){var or__3824__auto____7423 = (G__7421__7422.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7423)
{return or__3824__auto____7423;
} else
{return G__7421__7422.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7421__7422.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7421__7422);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7421__7422);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7425 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7425)
{return (n == n.toFixed());
} else
{return and__3822__auto____7425;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____7428 = coll;
if(cljs.core.truth_(and__3822__auto____7428))
{var and__3822__auto____7429 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7429)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7429;
}
} else
{return and__3822__auto____7428;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__7438__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7434 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__7435 = more;
while(true){
var x__7436 = cljs.core.first.call(null,xs__7435);
var etc__7437 = cljs.core.next.call(null,xs__7435);
if(cljs.core.truth_(xs__7435))
{if(cljs.core.contains_QMARK_.call(null,s__7434,x__7436))
{return false;
} else
{{
var G__7439 = cljs.core.conj.call(null,s__7434,x__7436);
var G__7440 = etc__7437;
s__7434 = G__7439;
xs__7435 = G__7440;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__7438 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7438__delegate.call(this, x, y, more);
};
G__7438.cljs$lang$maxFixedArity = 2;
G__7438.cljs$lang$applyTo = (function (arglist__7441){
var x = cljs.core.first(arglist__7441);
var y = cljs.core.first(cljs.core.next(arglist__7441));
var more = cljs.core.rest(cljs.core.next(arglist__7441));
return G__7438__delegate(x, y, more);
});
G__7438.cljs$lang$arity$variadic = G__7438__delegate;
return G__7438;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__7445__7446 = x;
if(G__7445__7446)
{if(cljs.core.truth_((function (){var or__3824__auto____7447 = null;
if(cljs.core.truth_(or__3824__auto____7447))
{return or__3824__auto____7447;
} else
{return G__7445__7446.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7445__7446.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7445__7446);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7445__7446);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__7452 = cljs.core.count.call(null,xs);
var yl__7453 = cljs.core.count.call(null,ys);
if((xl__7452 < yl__7453))
{return -1;
} else
{if((xl__7452 > yl__7453))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7452,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7454 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7455 = (d__7454 === 0);
if(and__3822__auto____7455)
{return ((n + 1) < len);
} else
{return and__3822__auto____7455;
}
})())
{{
var G__7456 = xs;
var G__7457 = ys;
var G__7458 = len;
var G__7459 = (n + 1);
xs = G__7456;
ys = G__7457;
len = G__7458;
n = G__7459;
continue;
}
} else
{return d__7454;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__7461 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7461))
{return r__7461;
} else
{if(cljs.core.truth_(r__7461))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__7463 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7463,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7463);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____7469 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7469)
{var s__7470 = temp__3971__auto____7469;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7470),cljs.core.next.call(null,s__7470));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7471 = val;
var coll__7472 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7472)
{var nval__7473 = f.call(null,val__7471,cljs.core.first.call(null,coll__7472));
if(cljs.core.reduced_QMARK_.call(null,nval__7473))
{return cljs.core.deref.call(null,nval__7473);
} else
{{
var G__7474 = nval__7473;
var G__7475 = cljs.core.next.call(null,coll__7472);
val__7471 = G__7474;
coll__7472 = G__7475;
continue;
}
}
} else
{return val__7471;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__7477 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7477);
return cljs.core.vec.call(null,a__7477);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__7484__7485 = coll;
if(G__7484__7485)
{if((function (){var or__3824__auto____7486 = (G__7484__7485.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7486)
{return or__3824__auto____7486;
} else
{return G__7484__7485.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7484__7485.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7484__7485);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7484__7485);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7487__7488 = coll;
if(G__7487__7488)
{if((function (){var or__3824__auto____7489 = (G__7487__7488.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7489)
{return or__3824__auto____7489;
} else
{return G__7487__7488.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7487__7488.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7487__7488);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7487__7488);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__7490 = this;
return this__7490.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__7491__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7491 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7491__delegate.call(this, x, y, more);
};
G__7491.cljs$lang$maxFixedArity = 2;
G__7491.cljs$lang$applyTo = (function (arglist__7492){
var x = cljs.core.first(arglist__7492);
var y = cljs.core.first(cljs.core.next(arglist__7492));
var more = cljs.core.rest(cljs.core.next(arglist__7492));
return G__7491__delegate(x, y, more);
});
G__7491.cljs$lang$arity$variadic = G__7491__delegate;
return G__7491;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__7493__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7493 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7493__delegate.call(this, x, y, more);
};
G__7493.cljs$lang$maxFixedArity = 2;
G__7493.cljs$lang$applyTo = (function (arglist__7494){
var x = cljs.core.first(arglist__7494);
var y = cljs.core.first(cljs.core.next(arglist__7494));
var more = cljs.core.rest(cljs.core.next(arglist__7494));
return G__7493__delegate(x, y, more);
});
G__7493.cljs$lang$arity$variadic = G__7493__delegate;
return G__7493;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__7495__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7495 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7495__delegate.call(this, x, y, more);
};
G__7495.cljs$lang$maxFixedArity = 2;
G__7495.cljs$lang$applyTo = (function (arglist__7496){
var x = cljs.core.first(arglist__7496);
var y = cljs.core.first(cljs.core.next(arglist__7496));
var more = cljs.core.rest(cljs.core.next(arglist__7496));
return G__7495__delegate(x, y, more);
});
G__7495.cljs$lang$arity$variadic = G__7495__delegate;
return G__7495;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__7497__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7497 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7497__delegate.call(this, x, y, more);
};
G__7497.cljs$lang$maxFixedArity = 2;
G__7497.cljs$lang$applyTo = (function (arglist__7498){
var x = cljs.core.first(arglist__7498);
var y = cljs.core.first(cljs.core.next(arglist__7498));
var more = cljs.core.rest(cljs.core.next(arglist__7498));
return G__7497__delegate(x, y, more);
});
G__7497.cljs$lang$arity$variadic = G__7497__delegate;
return G__7497;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__7499__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7500 = y;
var G__7501 = cljs.core.first.call(null,more);
var G__7502 = cljs.core.next.call(null,more);
x = G__7500;
y = G__7501;
more = G__7502;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7499 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7499__delegate.call(this, x, y, more);
};
G__7499.cljs$lang$maxFixedArity = 2;
G__7499.cljs$lang$applyTo = (function (arglist__7503){
var x = cljs.core.first(arglist__7503);
var y = cljs.core.first(cljs.core.next(arglist__7503));
var more = cljs.core.rest(cljs.core.next(arglist__7503));
return G__7499__delegate(x, y, more);
});
G__7499.cljs$lang$arity$variadic = G__7499__delegate;
return G__7499;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__7504__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7505 = y;
var G__7506 = cljs.core.first.call(null,more);
var G__7507 = cljs.core.next.call(null,more);
x = G__7505;
y = G__7506;
more = G__7507;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7504 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7504__delegate.call(this, x, y, more);
};
G__7504.cljs$lang$maxFixedArity = 2;
G__7504.cljs$lang$applyTo = (function (arglist__7508){
var x = cljs.core.first(arglist__7508);
var y = cljs.core.first(cljs.core.next(arglist__7508));
var more = cljs.core.rest(cljs.core.next(arglist__7508));
return G__7504__delegate(x, y, more);
});
G__7504.cljs$lang$arity$variadic = G__7504__delegate;
return G__7504;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__7509__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7510 = y;
var G__7511 = cljs.core.first.call(null,more);
var G__7512 = cljs.core.next.call(null,more);
x = G__7510;
y = G__7511;
more = G__7512;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7509 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7509__delegate.call(this, x, y, more);
};
G__7509.cljs$lang$maxFixedArity = 2;
G__7509.cljs$lang$applyTo = (function (arglist__7513){
var x = cljs.core.first(arglist__7513);
var y = cljs.core.first(cljs.core.next(arglist__7513));
var more = cljs.core.rest(cljs.core.next(arglist__7513));
return G__7509__delegate(x, y, more);
});
G__7509.cljs$lang$arity$variadic = G__7509__delegate;
return G__7509;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__7514__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7515 = y;
var G__7516 = cljs.core.first.call(null,more);
var G__7517 = cljs.core.next.call(null,more);
x = G__7515;
y = G__7516;
more = G__7517;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7514 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7514__delegate.call(this, x, y, more);
};
G__7514.cljs$lang$maxFixedArity = 2;
G__7514.cljs$lang$applyTo = (function (arglist__7518){
var x = cljs.core.first(arglist__7518);
var y = cljs.core.first(cljs.core.next(arglist__7518));
var more = cljs.core.rest(cljs.core.next(arglist__7518));
return G__7514__delegate(x, y, more);
});
G__7514.cljs$lang$arity$variadic = G__7514__delegate;
return G__7514;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__7519__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7519 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7519__delegate.call(this, x, y, more);
};
G__7519.cljs$lang$maxFixedArity = 2;
G__7519.cljs$lang$applyTo = (function (arglist__7520){
var x = cljs.core.first(arglist__7520);
var y = cljs.core.first(cljs.core.next(arglist__7520));
var more = cljs.core.rest(cljs.core.next(arglist__7520));
return G__7519__delegate(x, y, more);
});
G__7519.cljs$lang$arity$variadic = G__7519__delegate;
return G__7519;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__7521__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7521 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7521__delegate.call(this, x, y, more);
};
G__7521.cljs$lang$maxFixedArity = 2;
G__7521.cljs$lang$applyTo = (function (arglist__7522){
var x = cljs.core.first(arglist__7522);
var y = cljs.core.first(cljs.core.next(arglist__7522));
var more = cljs.core.rest(cljs.core.next(arglist__7522));
return G__7521__delegate(x, y, more);
});
G__7521.cljs$lang$arity$variadic = G__7521__delegate;
return G__7521;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__7524 = (n % d);
return cljs.core.fix.call(null,((n - rem__7524) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7526 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7526));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__7529 = (v - ((v >> 1) & 1431655765));
var v__7530 = ((v__7529 & 858993459) + ((v__7529 >> 2) & 858993459));
return ((((v__7530 + (v__7530 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__7531__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7532 = y;
var G__7533 = cljs.core.first.call(null,more);
var G__7534 = cljs.core.next.call(null,more);
x = G__7532;
y = G__7533;
more = G__7534;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7531 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7531__delegate.call(this, x, y, more);
};
G__7531.cljs$lang$maxFixedArity = 2;
G__7531.cljs$lang$applyTo = (function (arglist__7535){
var x = cljs.core.first(arglist__7535);
var y = cljs.core.first(cljs.core.next(arglist__7535));
var more = cljs.core.rest(cljs.core.next(arglist__7535));
return G__7531__delegate(x, y, more);
});
G__7531.cljs$lang$arity$variadic = G__7531__delegate;
return G__7531;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__7539 = n;
var xs__7540 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7541 = xs__7540;
if(and__3822__auto____7541)
{return (n__7539 > 0);
} else
{return and__3822__auto____7541;
}
})()))
{{
var G__7542 = (n__7539 - 1);
var G__7543 = cljs.core.next.call(null,xs__7540);
n__7539 = G__7542;
xs__7540 = G__7543;
continue;
}
} else
{return xs__7540;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__7544__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7545 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7546 = cljs.core.next.call(null,more);
sb = G__7545;
more = G__7546;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7544 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7544__delegate.call(this, x, ys);
};
G__7544.cljs$lang$maxFixedArity = 1;
G__7544.cljs$lang$applyTo = (function (arglist__7547){
var x = cljs.core.first(arglist__7547);
var ys = cljs.core.rest(arglist__7547);
return G__7544__delegate(x, ys);
});
G__7544.cljs$lang$arity$variadic = G__7544__delegate;
return G__7544;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__7548__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7549 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7550 = cljs.core.next.call(null,more);
sb = G__7549;
more = G__7550;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7548 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7548__delegate.call(this, x, ys);
};
G__7548.cljs$lang$maxFixedArity = 1;
G__7548.cljs$lang$applyTo = (function (arglist__7551){
var x = cljs.core.first(arglist__7551);
var ys = cljs.core.rest(arglist__7551);
return G__7548__delegate(x, ys);
});
G__7548.cljs$lang$arity$variadic = G__7548__delegate;
return G__7548;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__7552){
var fmt = cljs.core.first(arglist__7552);
var args = cljs.core.rest(arglist__7552);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7555 = cljs.core.seq.call(null,x);
var ys__7556 = cljs.core.seq.call(null,y);
while(true){
if((xs__7555 == null))
{return (ys__7556 == null);
} else
{if((ys__7556 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7555),cljs.core.first.call(null,ys__7556)))
{{
var G__7557 = cljs.core.next.call(null,xs__7555);
var G__7558 = cljs.core.next.call(null,ys__7556);
xs__7555 = G__7557;
ys__7556 = G__7558;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__7559_SHARP_,p2__7560_SHARP_){
return cljs.core.hash_combine.call(null,p1__7559_SHARP_,cljs.core.hash.call(null,p2__7560_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__7564 = 0;
var s__7565 = cljs.core.seq.call(null,m);
while(true){
if(s__7565)
{var e__7566 = cljs.core.first.call(null,s__7565);
{
var G__7567 = ((h__7564 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7566)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7566)))) % 4503599627370496);
var G__7568 = cljs.core.next.call(null,s__7565);
h__7564 = G__7567;
s__7565 = G__7568;
continue;
}
} else
{return h__7564;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7572 = 0;
var s__7573 = cljs.core.seq.call(null,s);
while(true){
if(s__7573)
{var e__7574 = cljs.core.first.call(null,s__7573);
{
var G__7575 = ((h__7572 + cljs.core.hash.call(null,e__7574)) % 4503599627370496);
var G__7576 = cljs.core.next.call(null,s__7573);
h__7572 = G__7575;
s__7573 = G__7576;
continue;
}
} else
{return h__7572;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7597__7598 = cljs.core.seq.call(null,fn_map);
if(G__7597__7598)
{var G__7600__7602 = cljs.core.first.call(null,G__7597__7598);
var vec__7601__7603 = G__7600__7602;
var key_name__7604 = cljs.core.nth.call(null,vec__7601__7603,0,null);
var f__7605 = cljs.core.nth.call(null,vec__7601__7603,1,null);
var G__7597__7606 = G__7597__7598;
var G__7600__7607 = G__7600__7602;
var G__7597__7608 = G__7597__7606;
while(true){
var vec__7609__7610 = G__7600__7607;
var key_name__7611 = cljs.core.nth.call(null,vec__7609__7610,0,null);
var f__7612 = cljs.core.nth.call(null,vec__7609__7610,1,null);
var G__7597__7613 = G__7597__7608;
var str_name__7614 = cljs.core.name.call(null,key_name__7611);
(obj[str_name__7614] = f__7612);
var temp__3974__auto____7615 = cljs.core.next.call(null,G__7597__7613);
if(temp__3974__auto____7615)
{var G__7597__7616 = temp__3974__auto____7615;
{
var G__7617 = cljs.core.first.call(null,G__7597__7616);
var G__7618 = G__7597__7616;
G__7600__7607 = G__7617;
G__7597__7608 = G__7618;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7619 = this;
var h__2190__auto____7620 = this__7619.__hash;
if(!((h__2190__auto____7620 == null)))
{return h__2190__auto____7620;
} else
{var h__2190__auto____7621 = cljs.core.hash_coll.call(null,coll);
this__7619.__hash = h__2190__auto____7621;
return h__2190__auto____7621;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7622 = this;
if((this__7622.count === 1))
{return null;
} else
{return this__7622.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7623 = this;
return (new cljs.core.List(this__7623.meta,o,coll,(this__7623.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7624 = this;
var this__7625 = this;
return cljs.core.pr_str.call(null,this__7625);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7626 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7627 = this;
return this__7627.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7628 = this;
return this__7628.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7629 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7630 = this;
return this__7630.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7631 = this;
if((this__7631.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7631.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7632 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7633 = this;
return (new cljs.core.List(meta,this__7633.first,this__7633.rest,this__7633.count,this__7633.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7634 = this;
return this__7634.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7635 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7636 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7637 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7638 = this;
return (new cljs.core.List(this__7638.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7639 = this;
var this__7640 = this;
return cljs.core.pr_str.call(null,this__7640);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7641 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7642 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7643 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7644 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7645 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7646 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7647 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7648 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7649 = this;
return this__7649.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7650 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7654__7655 = coll;
if(G__7654__7655)
{if((function (){var or__3824__auto____7656 = (G__7654__7655.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7656)
{return or__3824__auto____7656;
} else
{return G__7654__7655.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7654__7655.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7654__7655);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7654__7655);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__7657__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7657 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7657__delegate.call(this, x, y, z, items);
};
G__7657.cljs$lang$maxFixedArity = 3;
G__7657.cljs$lang$applyTo = (function (arglist__7658){
var x = cljs.core.first(arglist__7658);
var y = cljs.core.first(cljs.core.next(arglist__7658));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7658)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7658)));
return G__7657__delegate(x, y, z, items);
});
G__7657.cljs$lang$arity$variadic = G__7657__delegate;
return G__7657;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7659 = this;
var h__2190__auto____7660 = this__7659.__hash;
if(!((h__2190__auto____7660 == null)))
{return h__2190__auto____7660;
} else
{var h__2190__auto____7661 = cljs.core.hash_coll.call(null,coll);
this__7659.__hash = h__2190__auto____7661;
return h__2190__auto____7661;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7662 = this;
if((this__7662.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7662.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7663 = this;
return (new cljs.core.Cons(null,o,coll,this__7663.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7664 = this;
var this__7665 = this;
return cljs.core.pr_str.call(null,this__7665);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7666 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7667 = this;
return this__7667.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7668 = this;
if((this__7668.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7668.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7669 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7670 = this;
return (new cljs.core.Cons(meta,this__7670.first,this__7670.rest,this__7670.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7671 = this;
return this__7671.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7672 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7672.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7677 = (coll == null);
if(or__3824__auto____7677)
{return or__3824__auto____7677;
} else
{var G__7678__7679 = coll;
if(G__7678__7679)
{if((function (){var or__3824__auto____7680 = (G__7678__7679.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7680)
{return or__3824__auto____7680;
} else
{return G__7678__7679.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7678__7679.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7678__7679);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7678__7679);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7684__7685 = x;
if(G__7684__7685)
{if((function (){var or__3824__auto____7686 = (G__7684__7685.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7686)
{return or__3824__auto____7686;
} else
{return G__7684__7685.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7684__7685.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7684__7685);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7684__7685);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7687 = null;
var G__7687__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7687__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7687 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7687__2.call(this,string,f);
case 3:
return G__7687__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7687;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7688 = null;
var G__7688__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7688__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7688 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7688__2.call(this,string,k);
case 3:
return G__7688__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7688;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7689 = null;
var G__7689__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7689__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7689 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7689__2.call(this,string,n);
case 3:
return G__7689__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7689;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__7701 = null;
var G__7701__2 = (function (this_sym7692,coll){
var this__7694 = this;
var this_sym7692__7695 = this;
var ___7696 = this_sym7692__7695;
if((coll == null))
{return null;
} else
{var strobj__7697 = coll.strobj;
if((strobj__7697 == null))
{return cljs.core._lookup.call(null,coll,this__7694.k,null);
} else
{return (strobj__7697[this__7694.k]);
}
}
});
var G__7701__3 = (function (this_sym7693,coll,not_found){
var this__7694 = this;
var this_sym7693__7698 = this;
var ___7699 = this_sym7693__7698;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__7694.k,not_found);
}
});
G__7701 = function(this_sym7693,coll,not_found){
switch(arguments.length){
case 2:
return G__7701__2.call(this,this_sym7693,coll);
case 3:
return G__7701__3.call(this,this_sym7693,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7701;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym7690,args7691){
var this__7700 = this;
return this_sym7690.call.apply(this_sym7690,[this_sym7690].concat(args7691.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7710 = null;
var G__7710__2 = (function (this_sym7704,coll){
var this_sym7704__7706 = this;
var this__7707 = this_sym7704__7706;
return cljs.core._lookup.call(null,coll,this__7707.toString(),null);
});
var G__7710__3 = (function (this_sym7705,coll,not_found){
var this_sym7705__7708 = this;
var this__7709 = this_sym7705__7708;
return cljs.core._lookup.call(null,coll,this__7709.toString(),not_found);
});
G__7710 = function(this_sym7705,coll,not_found){
switch(arguments.length){
case 2:
return G__7710__2.call(this,this_sym7705,coll);
case 3:
return G__7710__3.call(this,this_sym7705,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7710;
})()
;
String.prototype.apply = (function (this_sym7702,args7703){
return this_sym7702.call.apply(this_sym7702,[this_sym7702].concat(args7703.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7712 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7712;
} else
{lazy_seq.x = x__7712.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7713 = this;
var h__2190__auto____7714 = this__7713.__hash;
if(!((h__2190__auto____7714 == null)))
{return h__2190__auto____7714;
} else
{var h__2190__auto____7715 = cljs.core.hash_coll.call(null,coll);
this__7713.__hash = h__2190__auto____7715;
return h__2190__auto____7715;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7716 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7717 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7718 = this;
var this__7719 = this;
return cljs.core.pr_str.call(null,this__7719);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7720 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7721 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7722 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7723 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7724 = this;
return (new cljs.core.LazySeq(meta,this__7724.realized,this__7724.x,this__7724.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7725 = this;
return this__7725.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7726 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7726.meta);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7727 = this;
return this__7727.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7728 = this;
var ___7729 = this;
(this__7728.buf[this__7728.end] = o);
return this__7728.end = (this__7728.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7730 = this;
var ___7731 = this;
var ret__7732 = (new cljs.core.ArrayChunk(this__7730.buf,0,this__7730.end));
this__7730.buf = null;
return ret__7732;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7733 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7733.arr[this__7733.off]),(this__7733.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7734 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7734.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7735 = this;
if((this__7735.off === this__7735.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7735.arr,(this__7735.off + 1),this__7735.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7736 = this;
return (this__7736.arr[(this__7736.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7737 = this;
if((function (){var and__3822__auto____7738 = (i >= 0);
if(and__3822__auto____7738)
{return (i < (this__7737.end - this__7737.off));
} else
{return and__3822__auto____7738;
}
})())
{return (this__7737.arr[(this__7737.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7739 = this;
return (this__7739.end - this__7739.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__7740 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7741 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7742 = this;
return cljs.core._nth.call(null,this__7742.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7743 = this;
if((cljs.core._count.call(null,this__7743.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7743.chunk),this__7743.more,this__7743.meta));
} else
{if((this__7743.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7743.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7744 = this;
if((this__7744.more == null))
{return null;
} else
{return this__7744.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7745 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7746 = this;
return (new cljs.core.ChunkedCons(this__7746.chunk,this__7746.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7747 = this;
return this__7747.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7748 = this;
return this__7748.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7749 = this;
if((this__7749.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7749.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__7753__7754 = s;
if(G__7753__7754)
{if(cljs.core.truth_((function (){var or__3824__auto____7755 = null;
if(cljs.core.truth_(or__3824__auto____7755))
{return or__3824__auto____7755;
} else
{return G__7753__7754.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7753__7754.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7753__7754);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7753__7754);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7758 = [];
var s__7759 = s;
while(true){
if(cljs.core.seq.call(null,s__7759))
{ary__7758.push(cljs.core.first.call(null,s__7759));
{
var G__7760 = cljs.core.next.call(null,s__7759);
s__7759 = G__7760;
continue;
}
} else
{return ary__7758;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7764 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7765 = 0;
var xs__7766 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7766)
{(ret__7764[i__7765] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7766)));
{
var G__7767 = (i__7765 + 1);
var G__7768 = cljs.core.next.call(null,xs__7766);
i__7765 = G__7767;
xs__7766 = G__7768;
continue;
}
} else
{}
break;
}
return ret__7764;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__7776 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7777 = cljs.core.seq.call(null,init_val_or_seq);
var i__7778 = 0;
var s__7779 = s__7777;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7780 = s__7779;
if(and__3822__auto____7780)
{return (i__7778 < size);
} else
{return and__3822__auto____7780;
}
})()))
{(a__7776[i__7778] = cljs.core.first.call(null,s__7779));
{
var G__7783 = (i__7778 + 1);
var G__7784 = cljs.core.next.call(null,s__7779);
i__7778 = G__7783;
s__7779 = G__7784;
continue;
}
} else
{return a__7776;
}
break;
}
} else
{var n__2525__auto____7781 = size;
var i__7782 = 0;
while(true){
if((i__7782 < n__2525__auto____7781))
{(a__7776[i__7782] = init_val_or_seq);
{
var G__7785 = (i__7782 + 1);
i__7782 = G__7785;
continue;
}
} else
{}
break;
}
return a__7776;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__7793 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7794 = cljs.core.seq.call(null,init_val_or_seq);
var i__7795 = 0;
var s__7796 = s__7794;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7797 = s__7796;
if(and__3822__auto____7797)
{return (i__7795 < size);
} else
{return and__3822__auto____7797;
}
})()))
{(a__7793[i__7795] = cljs.core.first.call(null,s__7796));
{
var G__7800 = (i__7795 + 1);
var G__7801 = cljs.core.next.call(null,s__7796);
i__7795 = G__7800;
s__7796 = G__7801;
continue;
}
} else
{return a__7793;
}
break;
}
} else
{var n__2525__auto____7798 = size;
var i__7799 = 0;
while(true){
if((i__7799 < n__2525__auto____7798))
{(a__7793[i__7799] = init_val_or_seq);
{
var G__7802 = (i__7799 + 1);
i__7799 = G__7802;
continue;
}
} else
{}
break;
}
return a__7793;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__7810 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7811 = cljs.core.seq.call(null,init_val_or_seq);
var i__7812 = 0;
var s__7813 = s__7811;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7814 = s__7813;
if(and__3822__auto____7814)
{return (i__7812 < size);
} else
{return and__3822__auto____7814;
}
})()))
{(a__7810[i__7812] = cljs.core.first.call(null,s__7813));
{
var G__7817 = (i__7812 + 1);
var G__7818 = cljs.core.next.call(null,s__7813);
i__7812 = G__7817;
s__7813 = G__7818;
continue;
}
} else
{return a__7810;
}
break;
}
} else
{var n__2525__auto____7815 = size;
var i__7816 = 0;
while(true){
if((i__7816 < n__2525__auto____7815))
{(a__7810[i__7816] = init_val_or_seq);
{
var G__7819 = (i__7816 + 1);
i__7816 = G__7819;
continue;
}
} else
{}
break;
}
return a__7810;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__7824 = s;
var i__7825 = n;
var sum__7826 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7827 = (i__7825 > 0);
if(and__3822__auto____7827)
{return cljs.core.seq.call(null,s__7824);
} else
{return and__3822__auto____7827;
}
})()))
{{
var G__7828 = cljs.core.next.call(null,s__7824);
var G__7829 = (i__7825 - 1);
var G__7830 = (sum__7826 + 1);
s__7824 = G__7828;
i__7825 = G__7829;
sum__7826 = G__7830;
continue;
}
} else
{return sum__7826;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7835 = cljs.core.seq.call(null,x);
if(s__7835)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7835))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7835),concat.call(null,cljs.core.chunk_rest.call(null,s__7835),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7835),concat.call(null,cljs.core.rest.call(null,s__7835),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7839__delegate = function (x,y,zs){
var cat__7838 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7837 = cljs.core.seq.call(null,xys);
if(xys__7837)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7837))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7837),cat.call(null,cljs.core.chunk_rest.call(null,xys__7837),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7837),cat.call(null,cljs.core.rest.call(null,xys__7837),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__7838.call(null,concat.call(null,x,y),zs);
};
var G__7839 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7839__delegate.call(this, x, y, zs);
};
G__7839.cljs$lang$maxFixedArity = 2;
G__7839.cljs$lang$applyTo = (function (arglist__7840){
var x = cljs.core.first(arglist__7840);
var y = cljs.core.first(cljs.core.next(arglist__7840));
var zs = cljs.core.rest(cljs.core.next(arglist__7840));
return G__7839__delegate(x, y, zs);
});
G__7839.cljs$lang$arity$variadic = G__7839__delegate;
return G__7839;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__7841__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7841 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7841__delegate.call(this, a, b, c, d, more);
};
G__7841.cljs$lang$maxFixedArity = 4;
G__7841.cljs$lang$applyTo = (function (arglist__7842){
var a = cljs.core.first(arglist__7842);
var b = cljs.core.first(cljs.core.next(arglist__7842));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7842)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7842))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7842))));
return G__7841__delegate(a, b, c, d, more);
});
G__7841.cljs$lang$arity$variadic = G__7841__delegate;
return G__7841;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__7884 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7885 = cljs.core._first.call(null,args__7884);
var args__7886 = cljs.core._rest.call(null,args__7884);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7885);
} else
{return f.call(null,a__7885);
}
} else
{var b__7887 = cljs.core._first.call(null,args__7886);
var args__7888 = cljs.core._rest.call(null,args__7886);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7885,b__7887);
} else
{return f.call(null,a__7885,b__7887);
}
} else
{var c__7889 = cljs.core._first.call(null,args__7888);
var args__7890 = cljs.core._rest.call(null,args__7888);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7885,b__7887,c__7889);
} else
{return f.call(null,a__7885,b__7887,c__7889);
}
} else
{var d__7891 = cljs.core._first.call(null,args__7890);
var args__7892 = cljs.core._rest.call(null,args__7890);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7885,b__7887,c__7889,d__7891);
} else
{return f.call(null,a__7885,b__7887,c__7889,d__7891);
}
} else
{var e__7893 = cljs.core._first.call(null,args__7892);
var args__7894 = cljs.core._rest.call(null,args__7892);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7885,b__7887,c__7889,d__7891,e__7893);
} else
{return f.call(null,a__7885,b__7887,c__7889,d__7891,e__7893);
}
} else
{var f__7895 = cljs.core._first.call(null,args__7894);
var args__7896 = cljs.core._rest.call(null,args__7894);
if((argc === 6))
{if(f__7895.cljs$lang$arity$6)
{return f__7895.cljs$lang$arity$6(a__7885,b__7887,c__7889,d__7891,e__7893,f__7895);
} else
{return f__7895.call(null,a__7885,b__7887,c__7889,d__7891,e__7893,f__7895);
}
} else
{var g__7897 = cljs.core._first.call(null,args__7896);
var args__7898 = cljs.core._rest.call(null,args__7896);
if((argc === 7))
{if(f__7895.cljs$lang$arity$7)
{return f__7895.cljs$lang$arity$7(a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897);
} else
{return f__7895.call(null,a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897);
}
} else
{var h__7899 = cljs.core._first.call(null,args__7898);
var args__7900 = cljs.core._rest.call(null,args__7898);
if((argc === 8))
{if(f__7895.cljs$lang$arity$8)
{return f__7895.cljs$lang$arity$8(a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899);
} else
{return f__7895.call(null,a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899);
}
} else
{var i__7901 = cljs.core._first.call(null,args__7900);
var args__7902 = cljs.core._rest.call(null,args__7900);
if((argc === 9))
{if(f__7895.cljs$lang$arity$9)
{return f__7895.cljs$lang$arity$9(a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901);
} else
{return f__7895.call(null,a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901);
}
} else
{var j__7903 = cljs.core._first.call(null,args__7902);
var args__7904 = cljs.core._rest.call(null,args__7902);
if((argc === 10))
{if(f__7895.cljs$lang$arity$10)
{return f__7895.cljs$lang$arity$10(a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903);
} else
{return f__7895.call(null,a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903);
}
} else
{var k__7905 = cljs.core._first.call(null,args__7904);
var args__7906 = cljs.core._rest.call(null,args__7904);
if((argc === 11))
{if(f__7895.cljs$lang$arity$11)
{return f__7895.cljs$lang$arity$11(a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905);
} else
{return f__7895.call(null,a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905);
}
} else
{var l__7907 = cljs.core._first.call(null,args__7906);
var args__7908 = cljs.core._rest.call(null,args__7906);
if((argc === 12))
{if(f__7895.cljs$lang$arity$12)
{return f__7895.cljs$lang$arity$12(a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905,l__7907);
} else
{return f__7895.call(null,a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905,l__7907);
}
} else
{var m__7909 = cljs.core._first.call(null,args__7908);
var args__7910 = cljs.core._rest.call(null,args__7908);
if((argc === 13))
{if(f__7895.cljs$lang$arity$13)
{return f__7895.cljs$lang$arity$13(a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905,l__7907,m__7909);
} else
{return f__7895.call(null,a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905,l__7907,m__7909);
}
} else
{var n__7911 = cljs.core._first.call(null,args__7910);
var args__7912 = cljs.core._rest.call(null,args__7910);
if((argc === 14))
{if(f__7895.cljs$lang$arity$14)
{return f__7895.cljs$lang$arity$14(a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905,l__7907,m__7909,n__7911);
} else
{return f__7895.call(null,a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905,l__7907,m__7909,n__7911);
}
} else
{var o__7913 = cljs.core._first.call(null,args__7912);
var args__7914 = cljs.core._rest.call(null,args__7912);
if((argc === 15))
{if(f__7895.cljs$lang$arity$15)
{return f__7895.cljs$lang$arity$15(a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905,l__7907,m__7909,n__7911,o__7913);
} else
{return f__7895.call(null,a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905,l__7907,m__7909,n__7911,o__7913);
}
} else
{var p__7915 = cljs.core._first.call(null,args__7914);
var args__7916 = cljs.core._rest.call(null,args__7914);
if((argc === 16))
{if(f__7895.cljs$lang$arity$16)
{return f__7895.cljs$lang$arity$16(a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905,l__7907,m__7909,n__7911,o__7913,p__7915);
} else
{return f__7895.call(null,a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905,l__7907,m__7909,n__7911,o__7913,p__7915);
}
} else
{var q__7917 = cljs.core._first.call(null,args__7916);
var args__7918 = cljs.core._rest.call(null,args__7916);
if((argc === 17))
{if(f__7895.cljs$lang$arity$17)
{return f__7895.cljs$lang$arity$17(a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905,l__7907,m__7909,n__7911,o__7913,p__7915,q__7917);
} else
{return f__7895.call(null,a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905,l__7907,m__7909,n__7911,o__7913,p__7915,q__7917);
}
} else
{var r__7919 = cljs.core._first.call(null,args__7918);
var args__7920 = cljs.core._rest.call(null,args__7918);
if((argc === 18))
{if(f__7895.cljs$lang$arity$18)
{return f__7895.cljs$lang$arity$18(a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905,l__7907,m__7909,n__7911,o__7913,p__7915,q__7917,r__7919);
} else
{return f__7895.call(null,a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905,l__7907,m__7909,n__7911,o__7913,p__7915,q__7917,r__7919);
}
} else
{var s__7921 = cljs.core._first.call(null,args__7920);
var args__7922 = cljs.core._rest.call(null,args__7920);
if((argc === 19))
{if(f__7895.cljs$lang$arity$19)
{return f__7895.cljs$lang$arity$19(a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905,l__7907,m__7909,n__7911,o__7913,p__7915,q__7917,r__7919,s__7921);
} else
{return f__7895.call(null,a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905,l__7907,m__7909,n__7911,o__7913,p__7915,q__7917,r__7919,s__7921);
}
} else
{var t__7923 = cljs.core._first.call(null,args__7922);
var args__7924 = cljs.core._rest.call(null,args__7922);
if((argc === 20))
{if(f__7895.cljs$lang$arity$20)
{return f__7895.cljs$lang$arity$20(a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905,l__7907,m__7909,n__7911,o__7913,p__7915,q__7917,r__7919,s__7921,t__7923);
} else
{return f__7895.call(null,a__7885,b__7887,c__7889,d__7891,e__7893,f__7895,g__7897,h__7899,i__7901,j__7903,k__7905,l__7907,m__7909,n__7911,o__7913,p__7915,q__7917,r__7919,s__7921,t__7923);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__7939 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7940 = cljs.core.bounded_count.call(null,args,(fixed_arity__7939 + 1));
if((bc__7940 <= fixed_arity__7939))
{return cljs.core.apply_to.call(null,f,bc__7940,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7941 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7942 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7943 = cljs.core.bounded_count.call(null,arglist__7941,(fixed_arity__7942 + 1));
if((bc__7943 <= fixed_arity__7942))
{return cljs.core.apply_to.call(null,f,bc__7943,arglist__7941);
} else
{return f.cljs$lang$applyTo(arglist__7941);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7941));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7944 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7945 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7946 = cljs.core.bounded_count.call(null,arglist__7944,(fixed_arity__7945 + 1));
if((bc__7946 <= fixed_arity__7945))
{return cljs.core.apply_to.call(null,f,bc__7946,arglist__7944);
} else
{return f.cljs$lang$applyTo(arglist__7944);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7944));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7947 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7948 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7949 = cljs.core.bounded_count.call(null,arglist__7947,(fixed_arity__7948 + 1));
if((bc__7949 <= fixed_arity__7948))
{return cljs.core.apply_to.call(null,f,bc__7949,arglist__7947);
} else
{return f.cljs$lang$applyTo(arglist__7947);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7947));
}
});
var apply__6 = (function() { 
var G__7953__delegate = function (f,a,b,c,d,args){
var arglist__7950 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7951 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7952 = cljs.core.bounded_count.call(null,arglist__7950,(fixed_arity__7951 + 1));
if((bc__7952 <= fixed_arity__7951))
{return cljs.core.apply_to.call(null,f,bc__7952,arglist__7950);
} else
{return f.cljs$lang$applyTo(arglist__7950);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7950));
}
};
var G__7953 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7953__delegate.call(this, f, a, b, c, d, args);
};
G__7953.cljs$lang$maxFixedArity = 5;
G__7953.cljs$lang$applyTo = (function (arglist__7954){
var f = cljs.core.first(arglist__7954);
var a = cljs.core.first(cljs.core.next(arglist__7954));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7954)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7954))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7954)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7954)))));
return G__7953__delegate(f, a, b, c, d, args);
});
G__7953.cljs$lang$arity$variadic = G__7953__delegate;
return G__7953;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__7955){
var obj = cljs.core.first(arglist__7955);
var f = cljs.core.first(cljs.core.next(arglist__7955));
var args = cljs.core.rest(cljs.core.next(arglist__7955));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__7956__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7956 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7956__delegate.call(this, x, y, more);
};
G__7956.cljs$lang$maxFixedArity = 2;
G__7956.cljs$lang$applyTo = (function (arglist__7957){
var x = cljs.core.first(arglist__7957);
var y = cljs.core.first(cljs.core.next(arglist__7957));
var more = cljs.core.rest(cljs.core.next(arglist__7957));
return G__7956__delegate(x, y, more);
});
G__7956.cljs$lang$arity$variadic = G__7956__delegate;
return G__7956;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__7958 = pred;
var G__7959 = cljs.core.next.call(null,coll);
pred = G__7958;
coll = G__7959;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____7961 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7961))
{return or__3824__auto____7961;
} else
{{
var G__7962 = pred;
var G__7963 = cljs.core.next.call(null,coll);
pred = G__7962;
coll = G__7963;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__7964 = null;
var G__7964__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7964__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7964__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7964__3 = (function() { 
var G__7965__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7965 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7965__delegate.call(this, x, y, zs);
};
G__7965.cljs$lang$maxFixedArity = 2;
G__7965.cljs$lang$applyTo = (function (arglist__7966){
var x = cljs.core.first(arglist__7966);
var y = cljs.core.first(cljs.core.next(arglist__7966));
var zs = cljs.core.rest(cljs.core.next(arglist__7966));
return G__7965__delegate(x, y, zs);
});
G__7965.cljs$lang$arity$variadic = G__7965__delegate;
return G__7965;
})()
;
G__7964 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7964__0.call(this);
case 1:
return G__7964__1.call(this,x);
case 2:
return G__7964__2.call(this,x,y);
default:
return G__7964__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7964.cljs$lang$maxFixedArity = 2;
G__7964.cljs$lang$applyTo = G__7964__3.cljs$lang$applyTo;
return G__7964;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7967__delegate = function (args){
return x;
};
var G__7967 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7967__delegate.call(this, args);
};
G__7967.cljs$lang$maxFixedArity = 0;
G__7967.cljs$lang$applyTo = (function (arglist__7968){
var args = cljs.core.seq(arglist__7968);;
return G__7967__delegate(args);
});
G__7967.cljs$lang$arity$variadic = G__7967__delegate;
return G__7967;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__7975 = null;
var G__7975__0 = (function (){
return f.call(null,g.call(null));
});
var G__7975__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7975__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7975__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7975__4 = (function() { 
var G__7976__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7976 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7976__delegate.call(this, x, y, z, args);
};
G__7976.cljs$lang$maxFixedArity = 3;
G__7976.cljs$lang$applyTo = (function (arglist__7977){
var x = cljs.core.first(arglist__7977);
var y = cljs.core.first(cljs.core.next(arglist__7977));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7977)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7977)));
return G__7976__delegate(x, y, z, args);
});
G__7976.cljs$lang$arity$variadic = G__7976__delegate;
return G__7976;
})()
;
G__7975 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7975__0.call(this);
case 1:
return G__7975__1.call(this,x);
case 2:
return G__7975__2.call(this,x,y);
case 3:
return G__7975__3.call(this,x,y,z);
default:
return G__7975__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7975.cljs$lang$maxFixedArity = 3;
G__7975.cljs$lang$applyTo = G__7975__4.cljs$lang$applyTo;
return G__7975;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7978 = null;
var G__7978__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7978__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7978__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7978__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7978__4 = (function() { 
var G__7979__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7979 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7979__delegate.call(this, x, y, z, args);
};
G__7979.cljs$lang$maxFixedArity = 3;
G__7979.cljs$lang$applyTo = (function (arglist__7980){
var x = cljs.core.first(arglist__7980);
var y = cljs.core.first(cljs.core.next(arglist__7980));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7980)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7980)));
return G__7979__delegate(x, y, z, args);
});
G__7979.cljs$lang$arity$variadic = G__7979__delegate;
return G__7979;
})()
;
G__7978 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7978__0.call(this);
case 1:
return G__7978__1.call(this,x);
case 2:
return G__7978__2.call(this,x,y);
case 3:
return G__7978__3.call(this,x,y,z);
default:
return G__7978__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7978.cljs$lang$maxFixedArity = 3;
G__7978.cljs$lang$applyTo = G__7978__4.cljs$lang$applyTo;
return G__7978;
})()
});
var comp__4 = (function() { 
var G__7981__delegate = function (f1,f2,f3,fs){
var fs__7972 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7982__delegate = function (args){
var ret__7973 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7972),args);
var fs__7974 = cljs.core.next.call(null,fs__7972);
while(true){
if(fs__7974)
{{
var G__7983 = cljs.core.first.call(null,fs__7974).call(null,ret__7973);
var G__7984 = cljs.core.next.call(null,fs__7974);
ret__7973 = G__7983;
fs__7974 = G__7984;
continue;
}
} else
{return ret__7973;
}
break;
}
};
var G__7982 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7982__delegate.call(this, args);
};
G__7982.cljs$lang$maxFixedArity = 0;
G__7982.cljs$lang$applyTo = (function (arglist__7985){
var args = cljs.core.seq(arglist__7985);;
return G__7982__delegate(args);
});
G__7982.cljs$lang$arity$variadic = G__7982__delegate;
return G__7982;
})()
;
};
var G__7981 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7981__delegate.call(this, f1, f2, f3, fs);
};
G__7981.cljs$lang$maxFixedArity = 3;
G__7981.cljs$lang$applyTo = (function (arglist__7986){
var f1 = cljs.core.first(arglist__7986);
var f2 = cljs.core.first(cljs.core.next(arglist__7986));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7986)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7986)));
return G__7981__delegate(f1, f2, f3, fs);
});
G__7981.cljs$lang$arity$variadic = G__7981__delegate;
return G__7981;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__7987__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7987 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7987__delegate.call(this, args);
};
G__7987.cljs$lang$maxFixedArity = 0;
G__7987.cljs$lang$applyTo = (function (arglist__7988){
var args = cljs.core.seq(arglist__7988);;
return G__7987__delegate(args);
});
G__7987.cljs$lang$arity$variadic = G__7987__delegate;
return G__7987;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7989__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7989 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7989__delegate.call(this, args);
};
G__7989.cljs$lang$maxFixedArity = 0;
G__7989.cljs$lang$applyTo = (function (arglist__7990){
var args = cljs.core.seq(arglist__7990);;
return G__7989__delegate(args);
});
G__7989.cljs$lang$arity$variadic = G__7989__delegate;
return G__7989;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7991__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7991 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7991__delegate.call(this, args);
};
G__7991.cljs$lang$maxFixedArity = 0;
G__7991.cljs$lang$applyTo = (function (arglist__7992){
var args = cljs.core.seq(arglist__7992);;
return G__7991__delegate(args);
});
G__7991.cljs$lang$arity$variadic = G__7991__delegate;
return G__7991;
})()
;
});
var partial__5 = (function() { 
var G__7993__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7994__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7994 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7994__delegate.call(this, args);
};
G__7994.cljs$lang$maxFixedArity = 0;
G__7994.cljs$lang$applyTo = (function (arglist__7995){
var args = cljs.core.seq(arglist__7995);;
return G__7994__delegate(args);
});
G__7994.cljs$lang$arity$variadic = G__7994__delegate;
return G__7994;
})()
;
};
var G__7993 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7993__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7993.cljs$lang$maxFixedArity = 4;
G__7993.cljs$lang$applyTo = (function (arglist__7996){
var f = cljs.core.first(arglist__7996);
var arg1 = cljs.core.first(cljs.core.next(arglist__7996));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7996)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7996))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7996))));
return G__7993__delegate(f, arg1, arg2, arg3, more);
});
G__7993.cljs$lang$arity$variadic = G__7993__delegate;
return G__7993;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__7997 = null;
var G__7997__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7997__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7997__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7997__4 = (function() { 
var G__7998__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7998 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7998__delegate.call(this, a, b, c, ds);
};
G__7998.cljs$lang$maxFixedArity = 3;
G__7998.cljs$lang$applyTo = (function (arglist__7999){
var a = cljs.core.first(arglist__7999);
var b = cljs.core.first(cljs.core.next(arglist__7999));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7999)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7999)));
return G__7998__delegate(a, b, c, ds);
});
G__7998.cljs$lang$arity$variadic = G__7998__delegate;
return G__7998;
})()
;
G__7997 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7997__1.call(this,a);
case 2:
return G__7997__2.call(this,a,b);
case 3:
return G__7997__3.call(this,a,b,c);
default:
return G__7997__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7997.cljs$lang$maxFixedArity = 3;
G__7997.cljs$lang$applyTo = G__7997__4.cljs$lang$applyTo;
return G__7997;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__8000 = null;
var G__8000__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__8000__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__8000__4 = (function() { 
var G__8001__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__8001 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8001__delegate.call(this, a, b, c, ds);
};
G__8001.cljs$lang$maxFixedArity = 3;
G__8001.cljs$lang$applyTo = (function (arglist__8002){
var a = cljs.core.first(arglist__8002);
var b = cljs.core.first(cljs.core.next(arglist__8002));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8002)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8002)));
return G__8001__delegate(a, b, c, ds);
});
G__8001.cljs$lang$arity$variadic = G__8001__delegate;
return G__8001;
})()
;
G__8000 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8000__2.call(this,a,b);
case 3:
return G__8000__3.call(this,a,b,c);
default:
return G__8000__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8000.cljs$lang$maxFixedArity = 3;
G__8000.cljs$lang$applyTo = G__8000__4.cljs$lang$applyTo;
return G__8000;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__8003 = null;
var G__8003__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__8003__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__8003__4 = (function() { 
var G__8004__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__8004 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8004__delegate.call(this, a, b, c, ds);
};
G__8004.cljs$lang$maxFixedArity = 3;
G__8004.cljs$lang$applyTo = (function (arglist__8005){
var a = cljs.core.first(arglist__8005);
var b = cljs.core.first(cljs.core.next(arglist__8005));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8005)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8005)));
return G__8004__delegate(a, b, c, ds);
});
G__8004.cljs$lang$arity$variadic = G__8004__delegate;
return G__8004;
})()
;
G__8003 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8003__2.call(this,a,b);
case 3:
return G__8003__3.call(this,a,b,c);
default:
return G__8003__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8003.cljs$lang$maxFixedArity = 3;
G__8003.cljs$lang$applyTo = G__8003__4.cljs$lang$applyTo;
return G__8003;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__8021 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8029 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8029)
{var s__8030 = temp__3974__auto____8029;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8030))
{var c__8031 = cljs.core.chunk_first.call(null,s__8030);
var size__8032 = cljs.core.count.call(null,c__8031);
var b__8033 = cljs.core.chunk_buffer.call(null,size__8032);
var n__2525__auto____8034 = size__8032;
var i__8035 = 0;
while(true){
if((i__8035 < n__2525__auto____8034))
{cljs.core.chunk_append.call(null,b__8033,f.call(null,(idx + i__8035),cljs.core._nth.call(null,c__8031,i__8035)));
{
var G__8036 = (i__8035 + 1);
i__8035 = G__8036;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8033),mapi.call(null,(idx + size__8032),cljs.core.chunk_rest.call(null,s__8030)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__8030)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__8030)));
}
} else
{return null;
}
}),null));
});
return mapi__8021.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8046 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8046)
{var s__8047 = temp__3974__auto____8046;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8047))
{var c__8048 = cljs.core.chunk_first.call(null,s__8047);
var size__8049 = cljs.core.count.call(null,c__8048);
var b__8050 = cljs.core.chunk_buffer.call(null,size__8049);
var n__2525__auto____8051 = size__8049;
var i__8052 = 0;
while(true){
if((i__8052 < n__2525__auto____8051))
{var x__8053 = f.call(null,cljs.core._nth.call(null,c__8048,i__8052));
if((x__8053 == null))
{} else
{cljs.core.chunk_append.call(null,b__8050,x__8053);
}
{
var G__8055 = (i__8052 + 1);
i__8052 = G__8055;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8050),keep.call(null,f,cljs.core.chunk_rest.call(null,s__8047)));
} else
{var x__8054 = f.call(null,cljs.core.first.call(null,s__8047));
if((x__8054 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__8047));
} else
{return cljs.core.cons.call(null,x__8054,keep.call(null,f,cljs.core.rest.call(null,s__8047)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__8081 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8091 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8091)
{var s__8092 = temp__3974__auto____8091;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8092))
{var c__8093 = cljs.core.chunk_first.call(null,s__8092);
var size__8094 = cljs.core.count.call(null,c__8093);
var b__8095 = cljs.core.chunk_buffer.call(null,size__8094);
var n__2525__auto____8096 = size__8094;
var i__8097 = 0;
while(true){
if((i__8097 < n__2525__auto____8096))
{var x__8098 = f.call(null,(idx + i__8097),cljs.core._nth.call(null,c__8093,i__8097));
if((x__8098 == null))
{} else
{cljs.core.chunk_append.call(null,b__8095,x__8098);
}
{
var G__8100 = (i__8097 + 1);
i__8097 = G__8100;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8095),keepi.call(null,(idx + size__8094),cljs.core.chunk_rest.call(null,s__8092)));
} else
{var x__8099 = f.call(null,idx,cljs.core.first.call(null,s__8092));
if((x__8099 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8092));
} else
{return cljs.core.cons.call(null,x__8099,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8092)));
}
}
} else
{return null;
}
}),null));
});
return keepi__8081.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8186 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8186))
{return p.call(null,y);
} else
{return and__3822__auto____8186;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8187 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8187))
{var and__3822__auto____8188 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____8188))
{return p.call(null,z);
} else
{return and__3822__auto____8188;
}
} else
{return and__3822__auto____8187;
}
})());
});
var ep1__4 = (function() { 
var G__8257__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8189 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8189))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____8189;
}
})());
};
var G__8257 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8257__delegate.call(this, x, y, z, args);
};
G__8257.cljs$lang$maxFixedArity = 3;
G__8257.cljs$lang$applyTo = (function (arglist__8258){
var x = cljs.core.first(arglist__8258);
var y = cljs.core.first(cljs.core.next(arglist__8258));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8258)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8258)));
return G__8257__delegate(x, y, z, args);
});
G__8257.cljs$lang$arity$variadic = G__8257__delegate;
return G__8257;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8201 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8201))
{return p2.call(null,x);
} else
{return and__3822__auto____8201;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8202 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8202))
{var and__3822__auto____8203 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8203))
{var and__3822__auto____8204 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8204))
{return p2.call(null,y);
} else
{return and__3822__auto____8204;
}
} else
{return and__3822__auto____8203;
}
} else
{return and__3822__auto____8202;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8205 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8205))
{var and__3822__auto____8206 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8206))
{var and__3822__auto____8207 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8207))
{var and__3822__auto____8208 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8208))
{var and__3822__auto____8209 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8209))
{return p2.call(null,z);
} else
{return and__3822__auto____8209;
}
} else
{return and__3822__auto____8208;
}
} else
{return and__3822__auto____8207;
}
} else
{return and__3822__auto____8206;
}
} else
{return and__3822__auto____8205;
}
})());
});
var ep2__4 = (function() { 
var G__8259__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8210 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8210))
{return cljs.core.every_QMARK_.call(null,(function (p1__8056_SHARP_){
var and__3822__auto____8211 = p1.call(null,p1__8056_SHARP_);
if(cljs.core.truth_(and__3822__auto____8211))
{return p2.call(null,p1__8056_SHARP_);
} else
{return and__3822__auto____8211;
}
}),args);
} else
{return and__3822__auto____8210;
}
})());
};
var G__8259 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8259__delegate.call(this, x, y, z, args);
};
G__8259.cljs$lang$maxFixedArity = 3;
G__8259.cljs$lang$applyTo = (function (arglist__8260){
var x = cljs.core.first(arglist__8260);
var y = cljs.core.first(cljs.core.next(arglist__8260));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8260)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8260)));
return G__8259__delegate(x, y, z, args);
});
G__8259.cljs$lang$arity$variadic = G__8259__delegate;
return G__8259;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8230 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8230))
{var and__3822__auto____8231 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8231))
{return p3.call(null,x);
} else
{return and__3822__auto____8231;
}
} else
{return and__3822__auto____8230;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8232 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8232))
{var and__3822__auto____8233 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8233))
{var and__3822__auto____8234 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8234))
{var and__3822__auto____8235 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8235))
{var and__3822__auto____8236 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8236))
{return p3.call(null,y);
} else
{return and__3822__auto____8236;
}
} else
{return and__3822__auto____8235;
}
} else
{return and__3822__auto____8234;
}
} else
{return and__3822__auto____8233;
}
} else
{return and__3822__auto____8232;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8237 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8237))
{var and__3822__auto____8238 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8238))
{var and__3822__auto____8239 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8239))
{var and__3822__auto____8240 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8240))
{var and__3822__auto____8241 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8241))
{var and__3822__auto____8242 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____8242))
{var and__3822__auto____8243 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8243))
{var and__3822__auto____8244 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____8244))
{return p3.call(null,z);
} else
{return and__3822__auto____8244;
}
} else
{return and__3822__auto____8243;
}
} else
{return and__3822__auto____8242;
}
} else
{return and__3822__auto____8241;
}
} else
{return and__3822__auto____8240;
}
} else
{return and__3822__auto____8239;
}
} else
{return and__3822__auto____8238;
}
} else
{return and__3822__auto____8237;
}
})());
});
var ep3__4 = (function() { 
var G__8261__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8245 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8245))
{return cljs.core.every_QMARK_.call(null,(function (p1__8057_SHARP_){
var and__3822__auto____8246 = p1.call(null,p1__8057_SHARP_);
if(cljs.core.truth_(and__3822__auto____8246))
{var and__3822__auto____8247 = p2.call(null,p1__8057_SHARP_);
if(cljs.core.truth_(and__3822__auto____8247))
{return p3.call(null,p1__8057_SHARP_);
} else
{return and__3822__auto____8247;
}
} else
{return and__3822__auto____8246;
}
}),args);
} else
{return and__3822__auto____8245;
}
})());
};
var G__8261 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8261__delegate.call(this, x, y, z, args);
};
G__8261.cljs$lang$maxFixedArity = 3;
G__8261.cljs$lang$applyTo = (function (arglist__8262){
var x = cljs.core.first(arglist__8262);
var y = cljs.core.first(cljs.core.next(arglist__8262));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8262)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8262)));
return G__8261__delegate(x, y, z, args);
});
G__8261.cljs$lang$arity$variadic = G__8261__delegate;
return G__8261;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__8263__delegate = function (p1,p2,p3,ps){
var ps__8248 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8058_SHARP_){
return p1__8058_SHARP_.call(null,x);
}),ps__8248);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8059_SHARP_){
var and__3822__auto____8253 = p1__8059_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8253))
{return p1__8059_SHARP_.call(null,y);
} else
{return and__3822__auto____8253;
}
}),ps__8248);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8060_SHARP_){
var and__3822__auto____8254 = p1__8060_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8254))
{var and__3822__auto____8255 = p1__8060_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____8255))
{return p1__8060_SHARP_.call(null,z);
} else
{return and__3822__auto____8255;
}
} else
{return and__3822__auto____8254;
}
}),ps__8248);
});
var epn__4 = (function() { 
var G__8264__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8256 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8256))
{return cljs.core.every_QMARK_.call(null,(function (p1__8061_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8061_SHARP_,args);
}),ps__8248);
} else
{return and__3822__auto____8256;
}
})());
};
var G__8264 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8264__delegate.call(this, x, y, z, args);
};
G__8264.cljs$lang$maxFixedArity = 3;
G__8264.cljs$lang$applyTo = (function (arglist__8265){
var x = cljs.core.first(arglist__8265);
var y = cljs.core.first(cljs.core.next(arglist__8265));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8265)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8265)));
return G__8264__delegate(x, y, z, args);
});
G__8264.cljs$lang$arity$variadic = G__8264__delegate;
return G__8264;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__8263 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8263__delegate.call(this, p1, p2, p3, ps);
};
G__8263.cljs$lang$maxFixedArity = 3;
G__8263.cljs$lang$applyTo = (function (arglist__8266){
var p1 = cljs.core.first(arglist__8266);
var p2 = cljs.core.first(cljs.core.next(arglist__8266));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8266)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8266)));
return G__8263__delegate(p1, p2, p3, ps);
});
G__8263.cljs$lang$arity$variadic = G__8263__delegate;
return G__8263;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____8347 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8347))
{return or__3824__auto____8347;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8348 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8348))
{return or__3824__auto____8348;
} else
{var or__3824__auto____8349 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____8349))
{return or__3824__auto____8349;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8418__delegate = function (x,y,z,args){
var or__3824__auto____8350 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8350))
{return or__3824__auto____8350;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8418 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8418__delegate.call(this, x, y, z, args);
};
G__8418.cljs$lang$maxFixedArity = 3;
G__8418.cljs$lang$applyTo = (function (arglist__8419){
var x = cljs.core.first(arglist__8419);
var y = cljs.core.first(cljs.core.next(arglist__8419));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8419)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8419)));
return G__8418__delegate(x, y, z, args);
});
G__8418.cljs$lang$arity$variadic = G__8418__delegate;
return G__8418;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____8362 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8362))
{return or__3824__auto____8362;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8363 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8363))
{return or__3824__auto____8363;
} else
{var or__3824__auto____8364 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8364))
{return or__3824__auto____8364;
} else
{var or__3824__auto____8365 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8365))
{return or__3824__auto____8365;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8366 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8366))
{return or__3824__auto____8366;
} else
{var or__3824__auto____8367 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8367))
{return or__3824__auto____8367;
} else
{var or__3824__auto____8368 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8368))
{return or__3824__auto____8368;
} else
{var or__3824__auto____8369 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8369))
{return or__3824__auto____8369;
} else
{var or__3824__auto____8370 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8370))
{return or__3824__auto____8370;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8420__delegate = function (x,y,z,args){
var or__3824__auto____8371 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8371))
{return or__3824__auto____8371;
} else
{return cljs.core.some.call(null,(function (p1__8101_SHARP_){
var or__3824__auto____8372 = p1.call(null,p1__8101_SHARP_);
if(cljs.core.truth_(or__3824__auto____8372))
{return or__3824__auto____8372;
} else
{return p2.call(null,p1__8101_SHARP_);
}
}),args);
}
};
var G__8420 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8420__delegate.call(this, x, y, z, args);
};
G__8420.cljs$lang$maxFixedArity = 3;
G__8420.cljs$lang$applyTo = (function (arglist__8421){
var x = cljs.core.first(arglist__8421);
var y = cljs.core.first(cljs.core.next(arglist__8421));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8421)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8421)));
return G__8420__delegate(x, y, z, args);
});
G__8420.cljs$lang$arity$variadic = G__8420__delegate;
return G__8420;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____8391 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8391))
{return or__3824__auto____8391;
} else
{var or__3824__auto____8392 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8392))
{return or__3824__auto____8392;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8393 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8393))
{return or__3824__auto____8393;
} else
{var or__3824__auto____8394 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8394))
{return or__3824__auto____8394;
} else
{var or__3824__auto____8395 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8395))
{return or__3824__auto____8395;
} else
{var or__3824__auto____8396 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8396))
{return or__3824__auto____8396;
} else
{var or__3824__auto____8397 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8397))
{return or__3824__auto____8397;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8398 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8398))
{return or__3824__auto____8398;
} else
{var or__3824__auto____8399 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8399))
{return or__3824__auto____8399;
} else
{var or__3824__auto____8400 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8400))
{return or__3824__auto____8400;
} else
{var or__3824__auto____8401 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8401))
{return or__3824__auto____8401;
} else
{var or__3824__auto____8402 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8402))
{return or__3824__auto____8402;
} else
{var or__3824__auto____8403 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____8403))
{return or__3824__auto____8403;
} else
{var or__3824__auto____8404 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8404))
{return or__3824__auto____8404;
} else
{var or__3824__auto____8405 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8405))
{return or__3824__auto____8405;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__8422__delegate = function (x,y,z,args){
var or__3824__auto____8406 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8406))
{return or__3824__auto____8406;
} else
{return cljs.core.some.call(null,(function (p1__8102_SHARP_){
var or__3824__auto____8407 = p1.call(null,p1__8102_SHARP_);
if(cljs.core.truth_(or__3824__auto____8407))
{return or__3824__auto____8407;
} else
{var or__3824__auto____8408 = p2.call(null,p1__8102_SHARP_);
if(cljs.core.truth_(or__3824__auto____8408))
{return or__3824__auto____8408;
} else
{return p3.call(null,p1__8102_SHARP_);
}
}
}),args);
}
};
var G__8422 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8422__delegate.call(this, x, y, z, args);
};
G__8422.cljs$lang$maxFixedArity = 3;
G__8422.cljs$lang$applyTo = (function (arglist__8423){
var x = cljs.core.first(arglist__8423);
var y = cljs.core.first(cljs.core.next(arglist__8423));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8423)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8423)));
return G__8422__delegate(x, y, z, args);
});
G__8422.cljs$lang$arity$variadic = G__8422__delegate;
return G__8422;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__8424__delegate = function (p1,p2,p3,ps){
var ps__8409 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__8103_SHARP_){
return p1__8103_SHARP_.call(null,x);
}),ps__8409);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8104_SHARP_){
var or__3824__auto____8414 = p1__8104_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8414))
{return or__3824__auto____8414;
} else
{return p1__8104_SHARP_.call(null,y);
}
}),ps__8409);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8105_SHARP_){
var or__3824__auto____8415 = p1__8105_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8415))
{return or__3824__auto____8415;
} else
{var or__3824__auto____8416 = p1__8105_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8416))
{return or__3824__auto____8416;
} else
{return p1__8105_SHARP_.call(null,z);
}
}
}),ps__8409);
});
var spn__4 = (function() { 
var G__8425__delegate = function (x,y,z,args){
var or__3824__auto____8417 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8417))
{return or__3824__auto____8417;
} else
{return cljs.core.some.call(null,(function (p1__8106_SHARP_){
return cljs.core.some.call(null,p1__8106_SHARP_,args);
}),ps__8409);
}
};
var G__8425 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8425__delegate.call(this, x, y, z, args);
};
G__8425.cljs$lang$maxFixedArity = 3;
G__8425.cljs$lang$applyTo = (function (arglist__8426){
var x = cljs.core.first(arglist__8426);
var y = cljs.core.first(cljs.core.next(arglist__8426));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8426)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8426)));
return G__8425__delegate(x, y, z, args);
});
G__8425.cljs$lang$arity$variadic = G__8425__delegate;
return G__8425;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__8424 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8424__delegate.call(this, p1, p2, p3, ps);
};
G__8424.cljs$lang$maxFixedArity = 3;
G__8424.cljs$lang$applyTo = (function (arglist__8427){
var p1 = cljs.core.first(arglist__8427);
var p2 = cljs.core.first(cljs.core.next(arglist__8427));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8427)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8427)));
return G__8424__delegate(p1, p2, p3, ps);
});
G__8424.cljs$lang$arity$variadic = G__8424__delegate;
return G__8424;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8446 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8446)
{var s__8447 = temp__3974__auto____8446;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8447))
{var c__8448 = cljs.core.chunk_first.call(null,s__8447);
var size__8449 = cljs.core.count.call(null,c__8448);
var b__8450 = cljs.core.chunk_buffer.call(null,size__8449);
var n__2525__auto____8451 = size__8449;
var i__8452 = 0;
while(true){
if((i__8452 < n__2525__auto____8451))
{cljs.core.chunk_append.call(null,b__8450,f.call(null,cljs.core._nth.call(null,c__8448,i__8452)));
{
var G__8464 = (i__8452 + 1);
i__8452 = G__8464;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8450),map.call(null,f,cljs.core.chunk_rest.call(null,s__8447)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8447)),map.call(null,f,cljs.core.rest.call(null,s__8447)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8453 = cljs.core.seq.call(null,c1);
var s2__8454 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8455 = s1__8453;
if(and__3822__auto____8455)
{return s2__8454;
} else
{return and__3822__auto____8455;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8453),cljs.core.first.call(null,s2__8454)),map.call(null,f,cljs.core.rest.call(null,s1__8453),cljs.core.rest.call(null,s2__8454)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8456 = cljs.core.seq.call(null,c1);
var s2__8457 = cljs.core.seq.call(null,c2);
var s3__8458 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8459 = s1__8456;
if(and__3822__auto____8459)
{var and__3822__auto____8460 = s2__8457;
if(and__3822__auto____8460)
{return s3__8458;
} else
{return and__3822__auto____8460;
}
} else
{return and__3822__auto____8459;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8456),cljs.core.first.call(null,s2__8457),cljs.core.first.call(null,s3__8458)),map.call(null,f,cljs.core.rest.call(null,s1__8456),cljs.core.rest.call(null,s2__8457),cljs.core.rest.call(null,s3__8458)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8465__delegate = function (f,c1,c2,c3,colls){
var step__8463 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8462 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8462))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8462),step.call(null,map.call(null,cljs.core.rest,ss__8462)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__8267_SHARP_){
return cljs.core.apply.call(null,f,p1__8267_SHARP_);
}),step__8463.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8465 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8465__delegate.call(this, f, c1, c2, c3, colls);
};
G__8465.cljs$lang$maxFixedArity = 4;
G__8465.cljs$lang$applyTo = (function (arglist__8466){
var f = cljs.core.first(arglist__8466);
var c1 = cljs.core.first(cljs.core.next(arglist__8466));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8466)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8466))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8466))));
return G__8465__delegate(f, c1, c2, c3, colls);
});
G__8465.cljs$lang$arity$variadic = G__8465__delegate;
return G__8465;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____8469 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8469)
{var s__8470 = temp__3974__auto____8469;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8470),take.call(null,(n - 1),cljs.core.rest.call(null,s__8470)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__8476 = (function (n,coll){
while(true){
var s__8474 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8475 = (n > 0);
if(and__3822__auto____8475)
{return s__8474;
} else
{return and__3822__auto____8475;
}
})()))
{{
var G__8477 = (n - 1);
var G__8478 = cljs.core.rest.call(null,s__8474);
n = G__8477;
coll = G__8478;
continue;
}
} else
{return s__8474;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8476.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__8481 = cljs.core.seq.call(null,coll);
var lead__8482 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8482)
{{
var G__8483 = cljs.core.next.call(null,s__8481);
var G__8484 = cljs.core.next.call(null,lead__8482);
s__8481 = G__8483;
lead__8482 = G__8484;
continue;
}
} else
{return s__8481;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8490 = (function (pred,coll){
while(true){
var s__8488 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8489 = s__8488;
if(and__3822__auto____8489)
{return pred.call(null,cljs.core.first.call(null,s__8488));
} else
{return and__3822__auto____8489;
}
})()))
{{
var G__8491 = pred;
var G__8492 = cljs.core.rest.call(null,s__8488);
pred = G__8491;
coll = G__8492;
continue;
}
} else
{return s__8488;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8490.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8495 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8495)
{var s__8496 = temp__3974__auto____8495;
return cljs.core.concat.call(null,s__8496,cycle.call(null,s__8496));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8501 = cljs.core.seq.call(null,c1);
var s2__8502 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8503 = s1__8501;
if(and__3822__auto____8503)
{return s2__8502;
} else
{return and__3822__auto____8503;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8501),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8502),interleave.call(null,cljs.core.rest.call(null,s1__8501),cljs.core.rest.call(null,s2__8502))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8505__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8504 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8504))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8504),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8504)));
} else
{return null;
}
}),null));
};
var G__8505 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8505__delegate.call(this, c1, c2, colls);
};
G__8505.cljs$lang$maxFixedArity = 2;
G__8505.cljs$lang$applyTo = (function (arglist__8506){
var c1 = cljs.core.first(arglist__8506);
var c2 = cljs.core.first(cljs.core.next(arglist__8506));
var colls = cljs.core.rest(cljs.core.next(arglist__8506));
return G__8505__delegate(c1, c2, colls);
});
G__8505.cljs$lang$arity$variadic = G__8505__delegate;
return G__8505;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__8516 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8514 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8514)
{var coll__8515 = temp__3971__auto____8514;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8515),cat.call(null,cljs.core.rest.call(null,coll__8515),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8516.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__8517__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8517 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8517__delegate.call(this, f, coll, colls);
};
G__8517.cljs$lang$maxFixedArity = 2;
G__8517.cljs$lang$applyTo = (function (arglist__8518){
var f = cljs.core.first(arglist__8518);
var coll = cljs.core.first(cljs.core.next(arglist__8518));
var colls = cljs.core.rest(cljs.core.next(arglist__8518));
return G__8517__delegate(f, coll, colls);
});
G__8517.cljs$lang$arity$variadic = G__8517__delegate;
return G__8517;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8528 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8528)
{var s__8529 = temp__3974__auto____8528;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8529))
{var c__8530 = cljs.core.chunk_first.call(null,s__8529);
var size__8531 = cljs.core.count.call(null,c__8530);
var b__8532 = cljs.core.chunk_buffer.call(null,size__8531);
var n__2525__auto____8533 = size__8531;
var i__8534 = 0;
while(true){
if((i__8534 < n__2525__auto____8533))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8530,i__8534))))
{cljs.core.chunk_append.call(null,b__8532,cljs.core._nth.call(null,c__8530,i__8534));
} else
{}
{
var G__8537 = (i__8534 + 1);
i__8534 = G__8537;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8532),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8529)));
} else
{var f__8535 = cljs.core.first.call(null,s__8529);
var r__8536 = cljs.core.rest.call(null,s__8529);
if(cljs.core.truth_(pred.call(null,f__8535)))
{return cljs.core.cons.call(null,f__8535,filter.call(null,pred,r__8536));
} else
{return filter.call(null,pred,r__8536);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__8540 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8540.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8538_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8538_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8544__8545 = to;
if(G__8544__8545)
{if((function (){var or__3824__auto____8546 = (G__8544__8545.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8546)
{return or__3824__auto____8546;
} else
{return G__8544__8545.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8544__8545.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8544__8545);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8544__8545);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__8547__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8547 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8547__delegate.call(this, f, c1, c2, c3, colls);
};
G__8547.cljs$lang$maxFixedArity = 4;
G__8547.cljs$lang$applyTo = (function (arglist__8548){
var f = cljs.core.first(arglist__8548);
var c1 = cljs.core.first(cljs.core.next(arglist__8548));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8548)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8548))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8548))));
return G__8547__delegate(f, c1, c2, c3, colls);
});
G__8547.cljs$lang$arity$variadic = G__8547__delegate;
return G__8547;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8555 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8555)
{var s__8556 = temp__3974__auto____8555;
var p__8557 = cljs.core.take.call(null,n,s__8556);
if((n === cljs.core.count.call(null,p__8557)))
{return cljs.core.cons.call(null,p__8557,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8556)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8558 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8558)
{var s__8559 = temp__3974__auto____8558;
var p__8560 = cljs.core.take.call(null,n,s__8559);
if((n === cljs.core.count.call(null,p__8560)))
{return cljs.core.cons.call(null,p__8560,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8559)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8560,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__8565 = cljs.core.lookup_sentinel;
var m__8566 = m;
var ks__8567 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8567)
{var m__8568 = cljs.core._lookup.call(null,m__8566,cljs.core.first.call(null,ks__8567),sentinel__8565);
if((sentinel__8565 === m__8568))
{return not_found;
} else
{{
var G__8569 = sentinel__8565;
var G__8570 = m__8568;
var G__8571 = cljs.core.next.call(null,ks__8567);
sentinel__8565 = G__8569;
m__8566 = G__8570;
ks__8567 = G__8571;
continue;
}
}
} else
{return m__8566;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__8572,v){
var vec__8577__8578 = p__8572;
var k__8579 = cljs.core.nth.call(null,vec__8577__8578,0,null);
var ks__8580 = cljs.core.nthnext.call(null,vec__8577__8578,1);
if(cljs.core.truth_(ks__8580))
{return cljs.core.assoc.call(null,m,k__8579,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8579,null),ks__8580,v));
} else
{return cljs.core.assoc.call(null,m,k__8579,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__8581,f,args){
var vec__8586__8587 = p__8581;
var k__8588 = cljs.core.nth.call(null,vec__8586__8587,0,null);
var ks__8589 = cljs.core.nthnext.call(null,vec__8586__8587,1);
if(cljs.core.truth_(ks__8589))
{return cljs.core.assoc.call(null,m,k__8588,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8588,null),ks__8589,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8588,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8588,null),args));
}
};
var update_in = function (m,p__8581,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8581, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8590){
var m = cljs.core.first(arglist__8590);
var p__8581 = cljs.core.first(cljs.core.next(arglist__8590));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8590)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8590)));
return update_in__delegate(m, p__8581, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8593 = this;
var h__2190__auto____8594 = this__8593.__hash;
if(!((h__2190__auto____8594 == null)))
{return h__2190__auto____8594;
} else
{var h__2190__auto____8595 = cljs.core.hash_coll.call(null,coll);
this__8593.__hash = h__2190__auto____8595;
return h__2190__auto____8595;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8596 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8597 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8598 = this;
var new_array__8599 = this__8598.array.slice();
(new_array__8599[k] = v);
return (new cljs.core.Vector(this__8598.meta,new_array__8599,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8630 = null;
var G__8630__2 = (function (this_sym8600,k){
var this__8602 = this;
var this_sym8600__8603 = this;
var coll__8604 = this_sym8600__8603;
return coll__8604.cljs$core$ILookup$_lookup$arity$2(coll__8604,k);
});
var G__8630__3 = (function (this_sym8601,k,not_found){
var this__8602 = this;
var this_sym8601__8605 = this;
var coll__8606 = this_sym8601__8605;
return coll__8606.cljs$core$ILookup$_lookup$arity$3(coll__8606,k,not_found);
});
G__8630 = function(this_sym8601,k,not_found){
switch(arguments.length){
case 2:
return G__8630__2.call(this,this_sym8601,k);
case 3:
return G__8630__3.call(this,this_sym8601,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8630;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8591,args8592){
var this__8607 = this;
return this_sym8591.call.apply(this_sym8591,[this_sym8591].concat(args8592.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8608 = this;
var new_array__8609 = this__8608.array.slice();
new_array__8609.push(o);
return (new cljs.core.Vector(this__8608.meta,new_array__8609,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8610 = this;
var this__8611 = this;
return cljs.core.pr_str.call(null,this__8611);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8612 = this;
return cljs.core.ci_reduce.call(null,this__8612.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8613 = this;
return cljs.core.ci_reduce.call(null,this__8613.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8614 = this;
if((this__8614.array.length > 0))
{var vector_seq__8615 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8614.array.length))
{return cljs.core.cons.call(null,(this__8614.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8615.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8616 = this;
return this__8616.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8617 = this;
var count__8618 = this__8617.array.length;
if((count__8618 > 0))
{return (this__8617.array[(count__8618 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8619 = this;
if((this__8619.array.length > 0))
{var new_array__8620 = this__8619.array.slice();
new_array__8620.pop();
return (new cljs.core.Vector(this__8619.meta,new_array__8620,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8621 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8622 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8623 = this;
return (new cljs.core.Vector(meta,this__8623.array,this__8623.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8624 = this;
return this__8624.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8625 = this;
if((function (){var and__3822__auto____8626 = (0 <= n);
if(and__3822__auto____8626)
{return (n < this__8625.array.length);
} else
{return and__3822__auto____8626;
}
})())
{return (this__8625.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8627 = this;
if((function (){var and__3822__auto____8628 = (0 <= n);
if(and__3822__auto____8628)
{return (n < this__8627.array.length);
} else
{return and__3822__auto____8628;
}
})())
{return (this__8627.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8629 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8629.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2308__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8632 = pv.cnt;
if((cnt__8632 < 32))
{return 0;
} else
{return (((cnt__8632 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8638 = level;
var ret__8639 = node;
while(true){
if((ll__8638 === 0))
{return ret__8639;
} else
{var embed__8640 = ret__8639;
var r__8641 = cljs.core.pv_fresh_node.call(null,edit);
var ___8642 = cljs.core.pv_aset.call(null,r__8641,0,embed__8640);
{
var G__8643 = (ll__8638 - 5);
var G__8644 = r__8641;
ll__8638 = G__8643;
ret__8639 = G__8644;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8650 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8651 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8650,subidx__8651,tailnode);
return ret__8650;
} else
{var child__8652 = cljs.core.pv_aget.call(null,parent,subidx__8651);
if(!((child__8652 == null)))
{var node_to_insert__8653 = push_tail.call(null,pv,(level - 5),child__8652,tailnode);
cljs.core.pv_aset.call(null,ret__8650,subidx__8651,node_to_insert__8653);
return ret__8650;
} else
{var node_to_insert__8654 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8650,subidx__8651,node_to_insert__8654);
return ret__8650;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8658 = (0 <= i);
if(and__3822__auto____8658)
{return (i < pv.cnt);
} else
{return and__3822__auto____8658;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8659 = pv.root;
var level__8660 = pv.shift;
while(true){
if((level__8660 > 0))
{{
var G__8661 = cljs.core.pv_aget.call(null,node__8659,((i >>> level__8660) & 31));
var G__8662 = (level__8660 - 5);
node__8659 = G__8661;
level__8660 = G__8662;
continue;
}
} else
{return node__8659.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8665 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8665,(i & 31),val);
return ret__8665;
} else
{var subidx__8666 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8665,subidx__8666,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8666),i,val));
return ret__8665;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8672 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8673 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8672));
if((function (){var and__3822__auto____8674 = (new_child__8673 == null);
if(and__3822__auto____8674)
{return (subidx__8672 === 0);
} else
{return and__3822__auto____8674;
}
})())
{return null;
} else
{var ret__8675 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8675,subidx__8672,new_child__8673);
return ret__8675;
}
} else
{if((subidx__8672 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8676 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8676,subidx__8672,null);
return ret__8676;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8679 = this;
return (new cljs.core.TransientVector(this__8679.cnt,this__8679.shift,cljs.core.tv_editable_root.call(null,this__8679.root),cljs.core.tv_editable_tail.call(null,this__8679.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8680 = this;
var h__2190__auto____8681 = this__8680.__hash;
if(!((h__2190__auto____8681 == null)))
{return h__2190__auto____8681;
} else
{var h__2190__auto____8682 = cljs.core.hash_coll.call(null,coll);
this__8680.__hash = h__2190__auto____8682;
return h__2190__auto____8682;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8683 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8684 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8685 = this;
if((function (){var and__3822__auto____8686 = (0 <= k);
if(and__3822__auto____8686)
{return (k < this__8685.cnt);
} else
{return and__3822__auto____8686;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8687 = this__8685.tail.slice();
(new_tail__8687[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8685.meta,this__8685.cnt,this__8685.shift,this__8685.root,new_tail__8687,null));
} else
{return (new cljs.core.PersistentVector(this__8685.meta,this__8685.cnt,this__8685.shift,cljs.core.do_assoc.call(null,coll,this__8685.shift,this__8685.root,k,v),this__8685.tail,null));
}
} else
{if((k === this__8685.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8685.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8735 = null;
var G__8735__2 = (function (this_sym8688,k){
var this__8690 = this;
var this_sym8688__8691 = this;
var coll__8692 = this_sym8688__8691;
return coll__8692.cljs$core$ILookup$_lookup$arity$2(coll__8692,k);
});
var G__8735__3 = (function (this_sym8689,k,not_found){
var this__8690 = this;
var this_sym8689__8693 = this;
var coll__8694 = this_sym8689__8693;
return coll__8694.cljs$core$ILookup$_lookup$arity$3(coll__8694,k,not_found);
});
G__8735 = function(this_sym8689,k,not_found){
switch(arguments.length){
case 2:
return G__8735__2.call(this,this_sym8689,k);
case 3:
return G__8735__3.call(this,this_sym8689,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8735;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8677,args8678){
var this__8695 = this;
return this_sym8677.call.apply(this_sym8677,[this_sym8677].concat(args8678.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8696 = this;
var step_init__8697 = [0,init];
var i__8698 = 0;
while(true){
if((i__8698 < this__8696.cnt))
{var arr__8699 = cljs.core.array_for.call(null,v,i__8698);
var len__8700 = arr__8699.length;
var init__8704 = (function (){var j__8701 = 0;
var init__8702 = (step_init__8697[1]);
while(true){
if((j__8701 < len__8700))
{var init__8703 = f.call(null,init__8702,(j__8701 + i__8698),(arr__8699[j__8701]));
if(cljs.core.reduced_QMARK_.call(null,init__8703))
{return init__8703;
} else
{{
var G__8736 = (j__8701 + 1);
var G__8737 = init__8703;
j__8701 = G__8736;
init__8702 = G__8737;
continue;
}
}
} else
{(step_init__8697[0] = len__8700);
(step_init__8697[1] = init__8702);
return init__8702;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8704))
{return cljs.core.deref.call(null,init__8704);
} else
{{
var G__8738 = (i__8698 + (step_init__8697[0]));
i__8698 = G__8738;
continue;
}
}
} else
{return (step_init__8697[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8705 = this;
if(((this__8705.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8706 = this__8705.tail.slice();
new_tail__8706.push(o);
return (new cljs.core.PersistentVector(this__8705.meta,(this__8705.cnt + 1),this__8705.shift,this__8705.root,new_tail__8706,null));
} else
{var root_overflow_QMARK___8707 = ((this__8705.cnt >>> 5) > (1 << this__8705.shift));
var new_shift__8708 = ((root_overflow_QMARK___8707)?(this__8705.shift + 5):this__8705.shift);
var new_root__8710 = ((root_overflow_QMARK___8707)?(function (){var n_r__8709 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8709,0,this__8705.root);
cljs.core.pv_aset.call(null,n_r__8709,1,cljs.core.new_path.call(null,null,this__8705.shift,(new cljs.core.VectorNode(null,this__8705.tail))));
return n_r__8709;
})():cljs.core.push_tail.call(null,coll,this__8705.shift,this__8705.root,(new cljs.core.VectorNode(null,this__8705.tail))));
return (new cljs.core.PersistentVector(this__8705.meta,(this__8705.cnt + 1),new_shift__8708,new_root__8710,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8711 = this;
if((this__8711.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8711.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8712 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8713 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8714 = this;
var this__8715 = this;
return cljs.core.pr_str.call(null,this__8715);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8716 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8717 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8718 = this;
if((this__8718.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8719 = this;
return this__8719.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8720 = this;
if((this__8720.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8720.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8721 = this;
if((this__8721.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8721.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8721.meta);
} else
{if((1 < (this__8721.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8721.meta,(this__8721.cnt - 1),this__8721.shift,this__8721.root,this__8721.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8722 = cljs.core.array_for.call(null,coll,(this__8721.cnt - 2));
var nr__8723 = cljs.core.pop_tail.call(null,coll,this__8721.shift,this__8721.root);
var new_root__8724 = (((nr__8723 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8723);
var cnt_1__8725 = (this__8721.cnt - 1);
if((function (){var and__3822__auto____8726 = (5 < this__8721.shift);
if(and__3822__auto____8726)
{return (cljs.core.pv_aget.call(null,new_root__8724,1) == null);
} else
{return and__3822__auto____8726;
}
})())
{return (new cljs.core.PersistentVector(this__8721.meta,cnt_1__8725,(this__8721.shift - 5),cljs.core.pv_aget.call(null,new_root__8724,0),new_tail__8722,null));
} else
{return (new cljs.core.PersistentVector(this__8721.meta,cnt_1__8725,this__8721.shift,new_root__8724,new_tail__8722,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8727 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8728 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8729 = this;
return (new cljs.core.PersistentVector(meta,this__8729.cnt,this__8729.shift,this__8729.root,this__8729.tail,this__8729.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8730 = this;
return this__8730.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8731 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8732 = this;
if((function (){var and__3822__auto____8733 = (0 <= n);
if(and__3822__auto____8733)
{return (n < this__8732.cnt);
} else
{return and__3822__auto____8733;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8734 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8734.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8739 = xs.length;
var xs__8740 = (((no_clone === true))?xs:xs.slice());
if((l__8739 < 32))
{return (new cljs.core.PersistentVector(null,l__8739,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8740,null));
} else
{var node__8741 = xs__8740.slice(0,32);
var v__8742 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8741,null));
var i__8743 = 32;
var out__8744 = cljs.core._as_transient.call(null,v__8742);
while(true){
if((i__8743 < l__8739))
{{
var G__8745 = (i__8743 + 1);
var G__8746 = cljs.core.conj_BANG_.call(null,out__8744,(xs__8740[i__8743]));
i__8743 = G__8745;
out__8744 = G__8746;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8744);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__8747){
var args = cljs.core.seq(arglist__8747);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8748 = this;
if(((this__8748.off + 1) < this__8748.node.length))
{var s__8749 = cljs.core.chunked_seq.call(null,this__8748.vec,this__8748.node,this__8748.i,(this__8748.off + 1));
if((s__8749 == null))
{return null;
} else
{return s__8749;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8750 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8751 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8752 = this;
return (this__8752.node[this__8752.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8753 = this;
if(((this__8753.off + 1) < this__8753.node.length))
{var s__8754 = cljs.core.chunked_seq.call(null,this__8753.vec,this__8753.node,this__8753.i,(this__8753.off + 1));
if((s__8754 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8754;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8755 = this;
var l__8756 = this__8755.node.length;
var s__8757 = ((((this__8755.i + l__8756) < cljs.core._count.call(null,this__8755.vec)))?cljs.core.chunked_seq.call(null,this__8755.vec,(this__8755.i + l__8756),0):null);
if((s__8757 == null))
{return null;
} else
{return s__8757;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8758 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8759 = this;
return cljs.core.chunked_seq.call(null,this__8759.vec,this__8759.node,this__8759.i,this__8759.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8760 = this;
return this__8760.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8761 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8761.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8762 = this;
return cljs.core.array_chunk.call(null,this__8762.node,this__8762.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8763 = this;
var l__8764 = this__8763.node.length;
var s__8765 = ((((this__8763.i + l__8764) < cljs.core._count.call(null,this__8763.vec)))?cljs.core.chunked_seq.call(null,this__8763.vec,(this__8763.i + l__8764),0):null);
if((s__8765 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8765;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8768 = this;
var h__2190__auto____8769 = this__8768.__hash;
if(!((h__2190__auto____8769 == null)))
{return h__2190__auto____8769;
} else
{var h__2190__auto____8770 = cljs.core.hash_coll.call(null,coll);
this__8768.__hash = h__2190__auto____8770;
return h__2190__auto____8770;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8771 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8772 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8773 = this;
var v_pos__8774 = (this__8773.start + key);
return (new cljs.core.Subvec(this__8773.meta,cljs.core._assoc.call(null,this__8773.v,v_pos__8774,val),this__8773.start,((this__8773.end > (v_pos__8774 + 1)) ? this__8773.end : (v_pos__8774 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8800 = null;
var G__8800__2 = (function (this_sym8775,k){
var this__8777 = this;
var this_sym8775__8778 = this;
var coll__8779 = this_sym8775__8778;
return coll__8779.cljs$core$ILookup$_lookup$arity$2(coll__8779,k);
});
var G__8800__3 = (function (this_sym8776,k,not_found){
var this__8777 = this;
var this_sym8776__8780 = this;
var coll__8781 = this_sym8776__8780;
return coll__8781.cljs$core$ILookup$_lookup$arity$3(coll__8781,k,not_found);
});
G__8800 = function(this_sym8776,k,not_found){
switch(arguments.length){
case 2:
return G__8800__2.call(this,this_sym8776,k);
case 3:
return G__8800__3.call(this,this_sym8776,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8800;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8766,args8767){
var this__8782 = this;
return this_sym8766.call.apply(this_sym8766,[this_sym8766].concat(args8767.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8783 = this;
return (new cljs.core.Subvec(this__8783.meta,cljs.core._assoc_n.call(null,this__8783.v,this__8783.end,o),this__8783.start,(this__8783.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8784 = this;
var this__8785 = this;
return cljs.core.pr_str.call(null,this__8785);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8786 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8787 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8788 = this;
var subvec_seq__8789 = (function subvec_seq(i){
if((i === this__8788.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8788.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8789.call(null,this__8788.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8790 = this;
return (this__8790.end - this__8790.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8791 = this;
return cljs.core._nth.call(null,this__8791.v,(this__8791.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8792 = this;
if((this__8792.start === this__8792.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8792.meta,this__8792.v,this__8792.start,(this__8792.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8793 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8794 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8795 = this;
return (new cljs.core.Subvec(meta,this__8795.v,this__8795.start,this__8795.end,this__8795.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8796 = this;
return this__8796.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8797 = this;
return cljs.core._nth.call(null,this__8797.v,(this__8797.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8798 = this;
return cljs.core._nth.call(null,this__8798.v,(this__8798.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8799 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8799.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__8802 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8802,0,tl.length);
return ret__8802;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8806 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8807 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8806,subidx__8807,(((level === 5))?tail_node:(function (){var child__8808 = cljs.core.pv_aget.call(null,ret__8806,subidx__8807);
if(!((child__8808 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8808,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8806;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8813 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8814 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8815 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8813,subidx__8814));
if((function (){var and__3822__auto____8816 = (new_child__8815 == null);
if(and__3822__auto____8816)
{return (subidx__8814 === 0);
} else
{return and__3822__auto____8816;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8813,subidx__8814,new_child__8815);
return node__8813;
}
} else
{if((subidx__8814 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8813,subidx__8814,null);
return node__8813;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8821 = (0 <= i);
if(and__3822__auto____8821)
{return (i < tv.cnt);
} else
{return and__3822__auto____8821;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8822 = tv.root;
var node__8823 = root__8822;
var level__8824 = tv.shift;
while(true){
if((level__8824 > 0))
{{
var G__8825 = cljs.core.tv_ensure_editable.call(null,root__8822.edit,cljs.core.pv_aget.call(null,node__8823,((i >>> level__8824) & 31)));
var G__8826 = (level__8824 - 5);
node__8823 = G__8825;
level__8824 = G__8826;
continue;
}
} else
{return node__8823.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8866 = null;
var G__8866__2 = (function (this_sym8829,k){
var this__8831 = this;
var this_sym8829__8832 = this;
var coll__8833 = this_sym8829__8832;
return coll__8833.cljs$core$ILookup$_lookup$arity$2(coll__8833,k);
});
var G__8866__3 = (function (this_sym8830,k,not_found){
var this__8831 = this;
var this_sym8830__8834 = this;
var coll__8835 = this_sym8830__8834;
return coll__8835.cljs$core$ILookup$_lookup$arity$3(coll__8835,k,not_found);
});
G__8866 = function(this_sym8830,k,not_found){
switch(arguments.length){
case 2:
return G__8866__2.call(this,this_sym8830,k);
case 3:
return G__8866__3.call(this,this_sym8830,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8866;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8827,args8828){
var this__8836 = this;
return this_sym8827.call.apply(this_sym8827,[this_sym8827].concat(args8828.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8837 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8838 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8839 = this;
if(this__8839.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8840 = this;
if((function (){var and__3822__auto____8841 = (0 <= n);
if(and__3822__auto____8841)
{return (n < this__8840.cnt);
} else
{return and__3822__auto____8841;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8842 = this;
if(this__8842.root.edit)
{return this__8842.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8843 = this;
if(this__8843.root.edit)
{if((function (){var and__3822__auto____8844 = (0 <= n);
if(and__3822__auto____8844)
{return (n < this__8843.cnt);
} else
{return and__3822__auto____8844;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8843.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8849 = (function go(level,node){
var node__8847 = cljs.core.tv_ensure_editable.call(null,this__8843.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8847,(n & 31),val);
return node__8847;
} else
{var subidx__8848 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8847,subidx__8848,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8847,subidx__8848)));
return node__8847;
}
}).call(null,this__8843.shift,this__8843.root);
this__8843.root = new_root__8849;
return tcoll;
}
} else
{if((n === this__8843.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8843.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__8850 = this;
if(this__8850.root.edit)
{if((this__8850.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8850.cnt))
{this__8850.cnt = 0;
return tcoll;
} else
{if((((this__8850.cnt - 1) & 31) > 0))
{this__8850.cnt = (this__8850.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8851 = cljs.core.editable_array_for.call(null,tcoll,(this__8850.cnt - 2));
var new_root__8853 = (function (){var nr__8852 = cljs.core.tv_pop_tail.call(null,tcoll,this__8850.shift,this__8850.root);
if(!((nr__8852 == null)))
{return nr__8852;
} else
{return (new cljs.core.VectorNode(this__8850.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8854 = (5 < this__8850.shift);
if(and__3822__auto____8854)
{return (cljs.core.pv_aget.call(null,new_root__8853,1) == null);
} else
{return and__3822__auto____8854;
}
})())
{var new_root__8855 = cljs.core.tv_ensure_editable.call(null,this__8850.root.edit,cljs.core.pv_aget.call(null,new_root__8853,0));
this__8850.root = new_root__8855;
this__8850.shift = (this__8850.shift - 5);
this__8850.cnt = (this__8850.cnt - 1);
this__8850.tail = new_tail__8851;
return tcoll;
} else
{this__8850.root = new_root__8853;
this__8850.cnt = (this__8850.cnt - 1);
this__8850.tail = new_tail__8851;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8856 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8857 = this;
if(this__8857.root.edit)
{if(((this__8857.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8857.tail[(this__8857.cnt & 31)] = o);
this__8857.cnt = (this__8857.cnt + 1);
return tcoll;
} else
{var tail_node__8858 = (new cljs.core.VectorNode(this__8857.root.edit,this__8857.tail));
var new_tail__8859 = cljs.core.make_array.call(null,32);
(new_tail__8859[0] = o);
this__8857.tail = new_tail__8859;
if(((this__8857.cnt >>> 5) > (1 << this__8857.shift)))
{var new_root_array__8860 = cljs.core.make_array.call(null,32);
var new_shift__8861 = (this__8857.shift + 5);
(new_root_array__8860[0] = this__8857.root);
(new_root_array__8860[1] = cljs.core.new_path.call(null,this__8857.root.edit,this__8857.shift,tail_node__8858));
this__8857.root = (new cljs.core.VectorNode(this__8857.root.edit,new_root_array__8860));
this__8857.shift = new_shift__8861;
this__8857.cnt = (this__8857.cnt + 1);
return tcoll;
} else
{var new_root__8862 = cljs.core.tv_push_tail.call(null,tcoll,this__8857.shift,this__8857.root,tail_node__8858);
this__8857.root = new_root__8862;
this__8857.cnt = (this__8857.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8863 = this;
if(this__8863.root.edit)
{this__8863.root.edit = null;
var len__8864 = (this__8863.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8865 = cljs.core.make_array.call(null,len__8864);
cljs.core.array_copy.call(null,this__8863.tail,0,trimmed_tail__8865,0,len__8864);
return (new cljs.core.PersistentVector(null,this__8863.cnt,this__8863.shift,this__8863.root,trimmed_tail__8865,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8867 = this;
var h__2190__auto____8868 = this__8867.__hash;
if(!((h__2190__auto____8868 == null)))
{return h__2190__auto____8868;
} else
{var h__2190__auto____8869 = cljs.core.hash_coll.call(null,coll);
this__8867.__hash = h__2190__auto____8869;
return h__2190__auto____8869;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8870 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8871 = this;
var this__8872 = this;
return cljs.core.pr_str.call(null,this__8872);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8873 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8874 = this;
return cljs.core._first.call(null,this__8874.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8875 = this;
var temp__3971__auto____8876 = cljs.core.next.call(null,this__8875.front);
if(temp__3971__auto____8876)
{var f1__8877 = temp__3971__auto____8876;
return (new cljs.core.PersistentQueueSeq(this__8875.meta,f1__8877,this__8875.rear,null));
} else
{if((this__8875.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8875.meta,this__8875.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8878 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8879 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8879.front,this__8879.rear,this__8879.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8880 = this;
return this__8880.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8881 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8881.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8882 = this;
var h__2190__auto____8883 = this__8882.__hash;
if(!((h__2190__auto____8883 == null)))
{return h__2190__auto____8883;
} else
{var h__2190__auto____8884 = cljs.core.hash_coll.call(null,coll);
this__8882.__hash = h__2190__auto____8884;
return h__2190__auto____8884;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8885 = this;
if(cljs.core.truth_(this__8885.front))
{return (new cljs.core.PersistentQueue(this__8885.meta,(this__8885.count + 1),this__8885.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8886 = this__8885.rear;
if(cljs.core.truth_(or__3824__auto____8886))
{return or__3824__auto____8886;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8885.meta,(this__8885.count + 1),cljs.core.conj.call(null,this__8885.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8887 = this;
var this__8888 = this;
return cljs.core.pr_str.call(null,this__8888);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8889 = this;
var rear__8890 = cljs.core.seq.call(null,this__8889.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8891 = this__8889.front;
if(cljs.core.truth_(or__3824__auto____8891))
{return or__3824__auto____8891;
} else
{return rear__8890;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8889.front,cljs.core.seq.call(null,rear__8890),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8892 = this;
return this__8892.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8893 = this;
return cljs.core._first.call(null,this__8893.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8894 = this;
if(cljs.core.truth_(this__8894.front))
{var temp__3971__auto____8895 = cljs.core.next.call(null,this__8894.front);
if(temp__3971__auto____8895)
{var f1__8896 = temp__3971__auto____8895;
return (new cljs.core.PersistentQueue(this__8894.meta,(this__8894.count - 1),f1__8896,this__8894.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8894.meta,(this__8894.count - 1),cljs.core.seq.call(null,this__8894.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8897 = this;
return cljs.core.first.call(null,this__8897.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8898 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8899 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8900 = this;
return (new cljs.core.PersistentQueue(meta,this__8900.count,this__8900.front,this__8900.rear,this__8900.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8901 = this;
return this__8901.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8902 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8903 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__8906 = array.length;
var i__8907 = 0;
while(true){
if((i__8907 < len__8906))
{if((k === (array[i__8907])))
{return i__8907;
} else
{{
var G__8908 = (i__8907 + incr);
i__8907 = G__8908;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8911 = cljs.core.hash.call(null,a);
var b__8912 = cljs.core.hash.call(null,b);
if((a__8911 < b__8912))
{return -1;
} else
{if((a__8911 > b__8912))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__8920 = m.keys;
var len__8921 = ks__8920.length;
var so__8922 = m.strobj;
var out__8923 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8924 = 0;
var out__8925 = cljs.core.transient$.call(null,out__8923);
while(true){
if((i__8924 < len__8921))
{var k__8926 = (ks__8920[i__8924]);
{
var G__8927 = (i__8924 + 1);
var G__8928 = cljs.core.assoc_BANG_.call(null,out__8925,k__8926,(so__8922[k__8926]));
i__8924 = G__8927;
out__8925 = G__8928;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8925,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8934 = {};
var l__8935 = ks.length;
var i__8936 = 0;
while(true){
if((i__8936 < l__8935))
{var k__8937 = (ks[i__8936]);
(new_obj__8934[k__8937] = (obj[k__8937]));
{
var G__8938 = (i__8936 + 1);
i__8936 = G__8938;
continue;
}
} else
{}
break;
}
return new_obj__8934;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8941 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8942 = this;
var h__2190__auto____8943 = this__8942.__hash;
if(!((h__2190__auto____8943 == null)))
{return h__2190__auto____8943;
} else
{var h__2190__auto____8944 = cljs.core.hash_imap.call(null,coll);
this__8942.__hash = h__2190__auto____8944;
return h__2190__auto____8944;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8945 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8946 = this;
if((function (){var and__3822__auto____8947 = goog.isString(k);
if(and__3822__auto____8947)
{return !((cljs.core.scan_array.call(null,1,k,this__8946.keys) == null));
} else
{return and__3822__auto____8947;
}
})())
{return (this__8946.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8948 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8949 = (this__8948.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8949)
{return or__3824__auto____8949;
} else
{return (this__8948.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8948.keys) == null)))
{var new_strobj__8950 = cljs.core.obj_clone.call(null,this__8948.strobj,this__8948.keys);
(new_strobj__8950[k] = v);
return (new cljs.core.ObjMap(this__8948.meta,this__8948.keys,new_strobj__8950,(this__8948.update_count + 1),null));
} else
{var new_strobj__8951 = cljs.core.obj_clone.call(null,this__8948.strobj,this__8948.keys);
var new_keys__8952 = this__8948.keys.slice();
(new_strobj__8951[k] = v);
new_keys__8952.push(k);
return (new cljs.core.ObjMap(this__8948.meta,new_keys__8952,new_strobj__8951,(this__8948.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8953 = this;
if((function (){var and__3822__auto____8954 = goog.isString(k);
if(and__3822__auto____8954)
{return !((cljs.core.scan_array.call(null,1,k,this__8953.keys) == null));
} else
{return and__3822__auto____8954;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8976 = null;
var G__8976__2 = (function (this_sym8955,k){
var this__8957 = this;
var this_sym8955__8958 = this;
var coll__8959 = this_sym8955__8958;
return coll__8959.cljs$core$ILookup$_lookup$arity$2(coll__8959,k);
});
var G__8976__3 = (function (this_sym8956,k,not_found){
var this__8957 = this;
var this_sym8956__8960 = this;
var coll__8961 = this_sym8956__8960;
return coll__8961.cljs$core$ILookup$_lookup$arity$3(coll__8961,k,not_found);
});
G__8976 = function(this_sym8956,k,not_found){
switch(arguments.length){
case 2:
return G__8976__2.call(this,this_sym8956,k);
case 3:
return G__8976__3.call(this,this_sym8956,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8976;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8939,args8940){
var this__8962 = this;
return this_sym8939.call.apply(this_sym8939,[this_sym8939].concat(args8940.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8963 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8964 = this;
var this__8965 = this;
return cljs.core.pr_str.call(null,this__8965);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8966 = this;
if((this__8966.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8929_SHARP_){
return cljs.core.vector.call(null,p1__8929_SHARP_,(this__8966.strobj[p1__8929_SHARP_]));
}),this__8966.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8967 = this;
return this__8967.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8968 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8969 = this;
return (new cljs.core.ObjMap(meta,this__8969.keys,this__8969.strobj,this__8969.update_count,this__8969.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8970 = this;
return this__8970.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8971 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8971.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8972 = this;
if((function (){var and__3822__auto____8973 = goog.isString(k);
if(and__3822__auto____8973)
{return !((cljs.core.scan_array.call(null,1,k,this__8972.keys) == null));
} else
{return and__3822__auto____8973;
}
})())
{var new_keys__8974 = this__8972.keys.slice();
var new_strobj__8975 = cljs.core.obj_clone.call(null,this__8972.strobj,this__8972.keys);
new_keys__8974.splice(cljs.core.scan_array.call(null,1,k,new_keys__8974),1);
cljs.core.js_delete.call(null,new_strobj__8975,k);
return (new cljs.core.ObjMap(this__8972.meta,new_keys__8974,new_strobj__8975,(this__8972.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8980 = this;
var h__2190__auto____8981 = this__8980.__hash;
if(!((h__2190__auto____8981 == null)))
{return h__2190__auto____8981;
} else
{var h__2190__auto____8982 = cljs.core.hash_imap.call(null,coll);
this__8980.__hash = h__2190__auto____8982;
return h__2190__auto____8982;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8983 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8984 = this;
var bucket__8985 = (this__8984.hashobj[cljs.core.hash.call(null,k)]);
var i__8986 = (cljs.core.truth_(bucket__8985)?cljs.core.scan_array.call(null,2,k,bucket__8985):null);
if(cljs.core.truth_(i__8986))
{return (bucket__8985[(i__8986 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8987 = this;
var h__8988 = cljs.core.hash.call(null,k);
var bucket__8989 = (this__8987.hashobj[h__8988]);
if(cljs.core.truth_(bucket__8989))
{var new_bucket__8990 = bucket__8989.slice();
var new_hashobj__8991 = goog.object.clone(this__8987.hashobj);
(new_hashobj__8991[h__8988] = new_bucket__8990);
var temp__3971__auto____8992 = cljs.core.scan_array.call(null,2,k,new_bucket__8990);
if(cljs.core.truth_(temp__3971__auto____8992))
{var i__8993 = temp__3971__auto____8992;
(new_bucket__8990[(i__8993 + 1)] = v);
return (new cljs.core.HashMap(this__8987.meta,this__8987.count,new_hashobj__8991,null));
} else
{new_bucket__8990.push(k,v);
return (new cljs.core.HashMap(this__8987.meta,(this__8987.count + 1),new_hashobj__8991,null));
}
} else
{var new_hashobj__8994 = goog.object.clone(this__8987.hashobj);
(new_hashobj__8994[h__8988] = [k,v]);
return (new cljs.core.HashMap(this__8987.meta,(this__8987.count + 1),new_hashobj__8994,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8995 = this;
var bucket__8996 = (this__8995.hashobj[cljs.core.hash.call(null,k)]);
var i__8997 = (cljs.core.truth_(bucket__8996)?cljs.core.scan_array.call(null,2,k,bucket__8996):null);
if(cljs.core.truth_(i__8997))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__9022 = null;
var G__9022__2 = (function (this_sym8998,k){
var this__9000 = this;
var this_sym8998__9001 = this;
var coll__9002 = this_sym8998__9001;
return coll__9002.cljs$core$ILookup$_lookup$arity$2(coll__9002,k);
});
var G__9022__3 = (function (this_sym8999,k,not_found){
var this__9000 = this;
var this_sym8999__9003 = this;
var coll__9004 = this_sym8999__9003;
return coll__9004.cljs$core$ILookup$_lookup$arity$3(coll__9004,k,not_found);
});
G__9022 = function(this_sym8999,k,not_found){
switch(arguments.length){
case 2:
return G__9022__2.call(this,this_sym8999,k);
case 3:
return G__9022__3.call(this,this_sym8999,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9022;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8978,args8979){
var this__9005 = this;
return this_sym8978.call.apply(this_sym8978,[this_sym8978].concat(args8979.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9006 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__9007 = this;
var this__9008 = this;
return cljs.core.pr_str.call(null,this__9008);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9009 = this;
if((this__9009.count > 0))
{var hashes__9010 = cljs.core.js_keys.call(null,this__9009.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8977_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__9009.hashobj[p1__8977_SHARP_])));
}),hashes__9010);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9011 = this;
return this__9011.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9012 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9013 = this;
return (new cljs.core.HashMap(meta,this__9013.count,this__9013.hashobj,this__9013.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9014 = this;
return this__9014.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9015 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__9015.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9016 = this;
var h__9017 = cljs.core.hash.call(null,k);
var bucket__9018 = (this__9016.hashobj[h__9017]);
var i__9019 = (cljs.core.truth_(bucket__9018)?cljs.core.scan_array.call(null,2,k,bucket__9018):null);
if(cljs.core.not.call(null,i__9019))
{return coll;
} else
{var new_hashobj__9020 = goog.object.clone(this__9016.hashobj);
if((3 > bucket__9018.length))
{cljs.core.js_delete.call(null,new_hashobj__9020,h__9017);
} else
{var new_bucket__9021 = bucket__9018.slice();
new_bucket__9021.splice(i__9019,2);
(new_hashobj__9020[h__9017] = new_bucket__9021);
}
return (new cljs.core.HashMap(this__9016.meta,(this__9016.count - 1),new_hashobj__9020,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__9023 = ks.length;
var i__9024 = 0;
var out__9025 = cljs.core.HashMap.EMPTY;
while(true){
if((i__9024 < len__9023))
{{
var G__9026 = (i__9024 + 1);
var G__9027 = cljs.core.assoc.call(null,out__9025,(ks[i__9024]),(vs[i__9024]));
i__9024 = G__9026;
out__9025 = G__9027;
continue;
}
} else
{return out__9025;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__9031 = m.arr;
var len__9032 = arr__9031.length;
var i__9033 = 0;
while(true){
if((len__9032 <= i__9033))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__9031[i__9033]),k))
{return i__9033;
} else
{if("\uFDD0'else")
{{
var G__9034 = (i__9033 + 2);
i__9033 = G__9034;
continue;
}
} else
{return null;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9037 = this;
return (new cljs.core.TransientArrayMap({},this__9037.arr.length,this__9037.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9038 = this;
var h__2190__auto____9039 = this__9038.__hash;
if(!((h__2190__auto____9039 == null)))
{return h__2190__auto____9039;
} else
{var h__2190__auto____9040 = cljs.core.hash_imap.call(null,coll);
this__9038.__hash = h__2190__auto____9040;
return h__2190__auto____9040;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9041 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9042 = this;
var idx__9043 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9043 === -1))
{return not_found;
} else
{return (this__9042.arr[(idx__9043 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9044 = this;
var idx__9045 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9045 === -1))
{if((this__9044.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__9044.meta,(this__9044.cnt + 1),(function (){var G__9046__9047 = this__9044.arr.slice();
G__9046__9047.push(k);
G__9046__9047.push(v);
return G__9046__9047;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__9044.arr[(idx__9045 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__9044.meta,this__9044.cnt,(function (){var G__9048__9049 = this__9044.arr.slice();
(G__9048__9049[(idx__9045 + 1)] = v);
return G__9048__9049;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9050 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__9082 = null;
var G__9082__2 = (function (this_sym9051,k){
var this__9053 = this;
var this_sym9051__9054 = this;
var coll__9055 = this_sym9051__9054;
return coll__9055.cljs$core$ILookup$_lookup$arity$2(coll__9055,k);
});
var G__9082__3 = (function (this_sym9052,k,not_found){
var this__9053 = this;
var this_sym9052__9056 = this;
var coll__9057 = this_sym9052__9056;
return coll__9057.cljs$core$ILookup$_lookup$arity$3(coll__9057,k,not_found);
});
G__9082 = function(this_sym9052,k,not_found){
switch(arguments.length){
case 2:
return G__9082__2.call(this,this_sym9052,k);
case 3:
return G__9082__3.call(this,this_sym9052,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9082;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym9035,args9036){
var this__9058 = this;
return this_sym9035.call.apply(this_sym9035,[this_sym9035].concat(args9036.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9059 = this;
var len__9060 = this__9059.arr.length;
var i__9061 = 0;
var init__9062 = init;
while(true){
if((i__9061 < len__9060))
{var init__9063 = f.call(null,init__9062,(this__9059.arr[i__9061]),(this__9059.arr[(i__9061 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__9063))
{return cljs.core.deref.call(null,init__9063);
} else
{{
var G__9083 = (i__9061 + 2);
var G__9084 = init__9063;
i__9061 = G__9083;
init__9062 = G__9084;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9064 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__9065 = this;
var this__9066 = this;
return cljs.core.pr_str.call(null,this__9066);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9067 = this;
if((this__9067.cnt > 0))
{var len__9068 = this__9067.arr.length;
var array_map_seq__9069 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__9068))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__9067.arr[i]),(this__9067.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__9069.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9070 = this;
return this__9070.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9071 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9072 = this;
return (new cljs.core.PersistentArrayMap(meta,this__9072.cnt,this__9072.arr,this__9072.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9073 = this;
return this__9073.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9074 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9074.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9075 = this;
var idx__9076 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9076 >= 0))
{var len__9077 = this__9075.arr.length;
var new_len__9078 = (len__9077 - 2);
if((new_len__9078 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__9079 = cljs.core.make_array.call(null,new_len__9078);
var s__9080 = 0;
var d__9081 = 0;
while(true){
if((s__9080 >= len__9077))
{return (new cljs.core.PersistentArrayMap(this__9075.meta,(this__9075.cnt - 1),new_arr__9079,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__9075.arr[s__9080])))
{{
var G__9085 = (s__9080 + 2);
var G__9086 = d__9081;
s__9080 = G__9085;
d__9081 = G__9086;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__9079[d__9081] = (this__9075.arr[s__9080]));
(new_arr__9079[(d__9081 + 1)] = (this__9075.arr[(s__9080 + 1)]));
{
var G__9087 = (s__9080 + 2);
var G__9088 = (d__9081 + 2);
s__9080 = G__9087;
d__9081 = G__9088;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__9089 = cljs.core.count.call(null,ks);
var i__9090 = 0;
var out__9091 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__9090 < len__9089))
{{
var G__9092 = (i__9090 + 1);
var G__9093 = cljs.core.assoc_BANG_.call(null,out__9091,(ks[i__9090]),(vs[i__9090]));
i__9090 = G__9092;
out__9091 = G__9093;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9091);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9094 = this;
if(cljs.core.truth_(this__9094.editable_QMARK_))
{var idx__9095 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9095 >= 0))
{(this__9094.arr[idx__9095] = (this__9094.arr[(this__9094.len - 2)]));
(this__9094.arr[(idx__9095 + 1)] = (this__9094.arr[(this__9094.len - 1)]));
var G__9096__9097 = this__9094.arr;
G__9096__9097.pop();
G__9096__9097.pop();
G__9096__9097;
this__9094.len = (this__9094.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9098 = this;
if(cljs.core.truth_(this__9098.editable_QMARK_))
{var idx__9099 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9099 === -1))
{if(((this__9098.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9098.len = (this__9098.len + 2);
this__9098.arr.push(key);
this__9098.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__9098.len,this__9098.arr),key,val);
}
} else
{if((val === (this__9098.arr[(idx__9099 + 1)])))
{return tcoll;
} else
{(this__9098.arr[(idx__9099 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9100 = this;
if(cljs.core.truth_(this__9100.editable_QMARK_))
{if((function (){var G__9101__9102 = o;
if(G__9101__9102)
{if((function (){var or__3824__auto____9103 = (G__9101__9102.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9103)
{return or__3824__auto____9103;
} else
{return G__9101__9102.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9101__9102.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9101__9102);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9101__9102);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9104 = cljs.core.seq.call(null,o);
var tcoll__9105 = tcoll;
while(true){
var temp__3971__auto____9106 = cljs.core.first.call(null,es__9104);
if(cljs.core.truth_(temp__3971__auto____9106))
{var e__9107 = temp__3971__auto____9106;
{
var G__9113 = cljs.core.next.call(null,es__9104);
var G__9114 = tcoll__9105.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9105,cljs.core.key.call(null,e__9107),cljs.core.val.call(null,e__9107));
es__9104 = G__9113;
tcoll__9105 = G__9114;
continue;
}
} else
{return tcoll__9105;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9108 = this;
if(cljs.core.truth_(this__9108.editable_QMARK_))
{this__9108.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__9108.len,2),this__9108.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9109 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9110 = this;
if(cljs.core.truth_(this__9110.editable_QMARK_))
{var idx__9111 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__9111 === -1))
{return not_found;
} else
{return (this__9110.arr[(idx__9111 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9112 = this;
if(cljs.core.truth_(this__9112.editable_QMARK_))
{return cljs.core.quot.call(null,this__9112.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9117 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__9118 = 0;
while(true){
if((i__9118 < len))
{{
var G__9119 = cljs.core.assoc_BANG_.call(null,out__9117,(arr[i__9118]),(arr[(i__9118 + 1)]));
var G__9120 = (i__9118 + 2);
out__9117 = G__9119;
i__9118 = G__9120;
continue;
}
} else
{return out__9117;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2308__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__9125__9126 = arr.slice();
(G__9125__9126[i] = a);
return G__9125__9126;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9127__9128 = arr.slice();
(G__9127__9128[i] = a);
(G__9127__9128[j] = b);
return G__9127__9128;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__9130 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__9130,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__9130,(2 * i),(new_arr__9130.length - (2 * i)));
return new_arr__9130;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__9133 = inode.ensure_editable(edit);
(editable__9133.arr[i] = a);
return editable__9133;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9134 = inode.ensure_editable(edit);
(editable__9134.arr[i] = a);
(editable__9134.arr[j] = b);
return editable__9134;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__9141 = arr.length;
var i__9142 = 0;
var init__9143 = init;
while(true){
if((i__9142 < len__9141))
{var init__9146 = (function (){var k__9144 = (arr[i__9142]);
if(!((k__9144 == null)))
{return f.call(null,init__9143,k__9144,(arr[(i__9142 + 1)]));
} else
{var node__9145 = (arr[(i__9142 + 1)]);
if(!((node__9145 == null)))
{return node__9145.kv_reduce(f,init__9143);
} else
{return init__9143;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9146))
{return cljs.core.deref.call(null,init__9146);
} else
{{
var G__9147 = (i__9142 + 2);
var G__9148 = init__9146;
i__9142 = G__9147;
init__9143 = G__9148;
continue;
}
}
} else
{return init__9143;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__9149 = this;
var inode__9150 = this;
if((this__9149.bitmap === bit))
{return null;
} else
{var editable__9151 = inode__9150.ensure_editable(e);
var earr__9152 = editable__9151.arr;
var len__9153 = earr__9152.length;
editable__9151.bitmap = (bit ^ editable__9151.bitmap);
cljs.core.array_copy.call(null,earr__9152,(2 * (i + 1)),earr__9152,(2 * i),(len__9153 - (2 * (i + 1))));
(earr__9152[(len__9153 - 2)] = null);
(earr__9152[(len__9153 - 1)] = null);
return editable__9151;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9154 = this;
var inode__9155 = this;
var bit__9156 = (1 << ((hash >>> shift) & 0x01f));
var idx__9157 = cljs.core.bitmap_indexed_node_index.call(null,this__9154.bitmap,bit__9156);
if(((this__9154.bitmap & bit__9156) === 0))
{var n__9158 = cljs.core.bit_count.call(null,this__9154.bitmap);
if(((2 * n__9158) < this__9154.arr.length))
{var editable__9159 = inode__9155.ensure_editable(edit);
var earr__9160 = editable__9159.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9160,(2 * idx__9157),earr__9160,(2 * (idx__9157 + 1)),(2 * (n__9158 - idx__9157)));
(earr__9160[(2 * idx__9157)] = key);
(earr__9160[((2 * idx__9157) + 1)] = val);
editable__9159.bitmap = (editable__9159.bitmap | bit__9156);
return editable__9159;
} else
{if((n__9158 >= 16))
{var nodes__9161 = cljs.core.make_array.call(null,32);
var jdx__9162 = ((hash >>> shift) & 0x01f);
(nodes__9161[jdx__9162] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9163 = 0;
var j__9164 = 0;
while(true){
if((i__9163 < 32))
{if((((this__9154.bitmap >>> i__9163) & 1) === 0))
{{
var G__9217 = (i__9163 + 1);
var G__9218 = j__9164;
i__9163 = G__9217;
j__9164 = G__9218;
continue;
}
} else
{(nodes__9161[i__9163] = ((!(((this__9154.arr[j__9164]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9154.arr[j__9164])),(this__9154.arr[j__9164]),(this__9154.arr[(j__9164 + 1)]),added_leaf_QMARK_):(this__9154.arr[(j__9164 + 1)])));
{
var G__9219 = (i__9163 + 1);
var G__9220 = (j__9164 + 2);
i__9163 = G__9219;
j__9164 = G__9220;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9158 + 1),nodes__9161));
} else
{if("\uFDD0'else")
{var new_arr__9165 = cljs.core.make_array.call(null,(2 * (n__9158 + 4)));
cljs.core.array_copy.call(null,this__9154.arr,0,new_arr__9165,0,(2 * idx__9157));
(new_arr__9165[(2 * idx__9157)] = key);
(new_arr__9165[((2 * idx__9157) + 1)] = val);
cljs.core.array_copy.call(null,this__9154.arr,(2 * idx__9157),new_arr__9165,(2 * (idx__9157 + 1)),(2 * (n__9158 - idx__9157)));
added_leaf_QMARK_.val = true;
var editable__9166 = inode__9155.ensure_editable(edit);
editable__9166.arr = new_arr__9165;
editable__9166.bitmap = (editable__9166.bitmap | bit__9156);
return editable__9166;
} else
{return null;
}
}
}
} else
{var key_or_nil__9167 = (this__9154.arr[(2 * idx__9157)]);
var val_or_node__9168 = (this__9154.arr[((2 * idx__9157) + 1)]);
if((key_or_nil__9167 == null))
{var n__9169 = val_or_node__9168.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9169 === val_or_node__9168))
{return inode__9155;
} else
{return cljs.core.edit_and_set.call(null,inode__9155,edit,((2 * idx__9157) + 1),n__9169);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9167))
{if((val === val_or_node__9168))
{return inode__9155;
} else
{return cljs.core.edit_and_set.call(null,inode__9155,edit,((2 * idx__9157) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9155,edit,(2 * idx__9157),null,((2 * idx__9157) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9167,val_or_node__9168,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9170 = this;
var inode__9171 = this;
return cljs.core.create_inode_seq.call(null,this__9170.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9172 = this;
var inode__9173 = this;
var bit__9174 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9172.bitmap & bit__9174) === 0))
{return inode__9173;
} else
{var idx__9175 = cljs.core.bitmap_indexed_node_index.call(null,this__9172.bitmap,bit__9174);
var key_or_nil__9176 = (this__9172.arr[(2 * idx__9175)]);
var val_or_node__9177 = (this__9172.arr[((2 * idx__9175) + 1)]);
if((key_or_nil__9176 == null))
{var n__9178 = val_or_node__9177.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9178 === val_or_node__9177))
{return inode__9173;
} else
{if(!((n__9178 == null)))
{return cljs.core.edit_and_set.call(null,inode__9173,edit,((2 * idx__9175) + 1),n__9178);
} else
{if((this__9172.bitmap === bit__9174))
{return null;
} else
{if("\uFDD0'else")
{return inode__9173.edit_and_remove_pair(edit,bit__9174,idx__9175);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9176))
{(removed_leaf_QMARK_[0] = true);
return inode__9173.edit_and_remove_pair(edit,bit__9174,idx__9175);
} else
{if("\uFDD0'else")
{return inode__9173;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9179 = this;
var inode__9180 = this;
if((e === this__9179.edit))
{return inode__9180;
} else
{var n__9181 = cljs.core.bit_count.call(null,this__9179.bitmap);
var new_arr__9182 = cljs.core.make_array.call(null,(((n__9181 < 0))?4:(2 * (n__9181 + 1))));
cljs.core.array_copy.call(null,this__9179.arr,0,new_arr__9182,0,(2 * n__9181));
return (new cljs.core.BitmapIndexedNode(e,this__9179.bitmap,new_arr__9182));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9183 = this;
var inode__9184 = this;
return cljs.core.inode_kv_reduce.call(null,this__9183.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9185 = this;
var inode__9186 = this;
var bit__9187 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9185.bitmap & bit__9187) === 0))
{return not_found;
} else
{var idx__9188 = cljs.core.bitmap_indexed_node_index.call(null,this__9185.bitmap,bit__9187);
var key_or_nil__9189 = (this__9185.arr[(2 * idx__9188)]);
var val_or_node__9190 = (this__9185.arr[((2 * idx__9188) + 1)]);
if((key_or_nil__9189 == null))
{return val_or_node__9190.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9189))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9189,val_or_node__9190], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__9191 = this;
var inode__9192 = this;
var bit__9193 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9191.bitmap & bit__9193) === 0))
{return inode__9192;
} else
{var idx__9194 = cljs.core.bitmap_indexed_node_index.call(null,this__9191.bitmap,bit__9193);
var key_or_nil__9195 = (this__9191.arr[(2 * idx__9194)]);
var val_or_node__9196 = (this__9191.arr[((2 * idx__9194) + 1)]);
if((key_or_nil__9195 == null))
{var n__9197 = val_or_node__9196.inode_without((shift + 5),hash,key);
if((n__9197 === val_or_node__9196))
{return inode__9192;
} else
{if(!((n__9197 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9191.bitmap,cljs.core.clone_and_set.call(null,this__9191.arr,((2 * idx__9194) + 1),n__9197)));
} else
{if((this__9191.bitmap === bit__9193))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9191.bitmap ^ bit__9193),cljs.core.remove_pair.call(null,this__9191.arr,idx__9194)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9195))
{return (new cljs.core.BitmapIndexedNode(null,(this__9191.bitmap ^ bit__9193),cljs.core.remove_pair.call(null,this__9191.arr,idx__9194)));
} else
{if("\uFDD0'else")
{return inode__9192;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9198 = this;
var inode__9199 = this;
var bit__9200 = (1 << ((hash >>> shift) & 0x01f));
var idx__9201 = cljs.core.bitmap_indexed_node_index.call(null,this__9198.bitmap,bit__9200);
if(((this__9198.bitmap & bit__9200) === 0))
{var n__9202 = cljs.core.bit_count.call(null,this__9198.bitmap);
if((n__9202 >= 16))
{var nodes__9203 = cljs.core.make_array.call(null,32);
var jdx__9204 = ((hash >>> shift) & 0x01f);
(nodes__9203[jdx__9204] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9205 = 0;
var j__9206 = 0;
while(true){
if((i__9205 < 32))
{if((((this__9198.bitmap >>> i__9205) & 1) === 0))
{{
var G__9221 = (i__9205 + 1);
var G__9222 = j__9206;
i__9205 = G__9221;
j__9206 = G__9222;
continue;
}
} else
{(nodes__9203[i__9205] = ((!(((this__9198.arr[j__9206]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9198.arr[j__9206])),(this__9198.arr[j__9206]),(this__9198.arr[(j__9206 + 1)]),added_leaf_QMARK_):(this__9198.arr[(j__9206 + 1)])));
{
var G__9223 = (i__9205 + 1);
var G__9224 = (j__9206 + 2);
i__9205 = G__9223;
j__9206 = G__9224;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9202 + 1),nodes__9203));
} else
{var new_arr__9207 = cljs.core.make_array.call(null,(2 * (n__9202 + 1)));
cljs.core.array_copy.call(null,this__9198.arr,0,new_arr__9207,0,(2 * idx__9201));
(new_arr__9207[(2 * idx__9201)] = key);
(new_arr__9207[((2 * idx__9201) + 1)] = val);
cljs.core.array_copy.call(null,this__9198.arr,(2 * idx__9201),new_arr__9207,(2 * (idx__9201 + 1)),(2 * (n__9202 - idx__9201)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9198.bitmap | bit__9200),new_arr__9207));
}
} else
{var key_or_nil__9208 = (this__9198.arr[(2 * idx__9201)]);
var val_or_node__9209 = (this__9198.arr[((2 * idx__9201) + 1)]);
if((key_or_nil__9208 == null))
{var n__9210 = val_or_node__9209.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9210 === val_or_node__9209))
{return inode__9199;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9198.bitmap,cljs.core.clone_and_set.call(null,this__9198.arr,((2 * idx__9201) + 1),n__9210)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9208))
{if((val === val_or_node__9209))
{return inode__9199;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9198.bitmap,cljs.core.clone_and_set.call(null,this__9198.arr,((2 * idx__9201) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9198.bitmap,cljs.core.clone_and_set.call(null,this__9198.arr,(2 * idx__9201),null,((2 * idx__9201) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9208,val_or_node__9209,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9211 = this;
var inode__9212 = this;
var bit__9213 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9211.bitmap & bit__9213) === 0))
{return not_found;
} else
{var idx__9214 = cljs.core.bitmap_indexed_node_index.call(null,this__9211.bitmap,bit__9213);
var key_or_nil__9215 = (this__9211.arr[(2 * idx__9214)]);
var val_or_node__9216 = (this__9211.arr[((2 * idx__9214) + 1)]);
if((key_or_nil__9215 == null))
{return val_or_node__9216.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9215))
{return val_or_node__9216;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__9232 = array_node.arr;
var len__9233 = (2 * (array_node.cnt - 1));
var new_arr__9234 = cljs.core.make_array.call(null,len__9233);
var i__9235 = 0;
var j__9236 = 1;
var bitmap__9237 = 0;
while(true){
if((i__9235 < len__9233))
{if((function (){var and__3822__auto____9238 = !((i__9235 === idx));
if(and__3822__auto____9238)
{return !(((arr__9232[i__9235]) == null));
} else
{return and__3822__auto____9238;
}
})())
{(new_arr__9234[j__9236] = (arr__9232[i__9235]));
{
var G__9239 = (i__9235 + 1);
var G__9240 = (j__9236 + 2);
var G__9241 = (bitmap__9237 | (1 << i__9235));
i__9235 = G__9239;
j__9236 = G__9240;
bitmap__9237 = G__9241;
continue;
}
} else
{{
var G__9242 = (i__9235 + 1);
var G__9243 = j__9236;
var G__9244 = bitmap__9237;
i__9235 = G__9242;
j__9236 = G__9243;
bitmap__9237 = G__9244;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9237,new_arr__9234));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9245 = this;
var inode__9246 = this;
var idx__9247 = ((hash >>> shift) & 0x01f);
var node__9248 = (this__9245.arr[idx__9247]);
if((node__9248 == null))
{var editable__9249 = cljs.core.edit_and_set.call(null,inode__9246,edit,idx__9247,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9249.cnt = (editable__9249.cnt + 1);
return editable__9249;
} else
{var n__9250 = node__9248.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9250 === node__9248))
{return inode__9246;
} else
{return cljs.core.edit_and_set.call(null,inode__9246,edit,idx__9247,n__9250);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9251 = this;
var inode__9252 = this;
return cljs.core.create_array_node_seq.call(null,this__9251.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9253 = this;
var inode__9254 = this;
var idx__9255 = ((hash >>> shift) & 0x01f);
var node__9256 = (this__9253.arr[idx__9255]);
if((node__9256 == null))
{return inode__9254;
} else
{var n__9257 = node__9256.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9257 === node__9256))
{return inode__9254;
} else
{if((n__9257 == null))
{if((this__9253.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9254,edit,idx__9255);
} else
{var editable__9258 = cljs.core.edit_and_set.call(null,inode__9254,edit,idx__9255,n__9257);
editable__9258.cnt = (editable__9258.cnt - 1);
return editable__9258;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__9254,edit,idx__9255,n__9257);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9259 = this;
var inode__9260 = this;
if((e === this__9259.edit))
{return inode__9260;
} else
{return (new cljs.core.ArrayNode(e,this__9259.cnt,this__9259.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9261 = this;
var inode__9262 = this;
var len__9263 = this__9261.arr.length;
var i__9264 = 0;
var init__9265 = init;
while(true){
if((i__9264 < len__9263))
{var node__9266 = (this__9261.arr[i__9264]);
if(!((node__9266 == null)))
{var init__9267 = node__9266.kv_reduce(f,init__9265);
if(cljs.core.reduced_QMARK_.call(null,init__9267))
{return cljs.core.deref.call(null,init__9267);
} else
{{
var G__9286 = (i__9264 + 1);
var G__9287 = init__9267;
i__9264 = G__9286;
init__9265 = G__9287;
continue;
}
}
} else
{return null;
}
} else
{return init__9265;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9268 = this;
var inode__9269 = this;
var idx__9270 = ((hash >>> shift) & 0x01f);
var node__9271 = (this__9268.arr[idx__9270]);
if(!((node__9271 == null)))
{return node__9271.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9272 = this;
var inode__9273 = this;
var idx__9274 = ((hash >>> shift) & 0x01f);
var node__9275 = (this__9272.arr[idx__9274]);
if(!((node__9275 == null)))
{var n__9276 = node__9275.inode_without((shift + 5),hash,key);
if((n__9276 === node__9275))
{return inode__9273;
} else
{if((n__9276 == null))
{if((this__9272.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9273,null,idx__9274);
} else
{return (new cljs.core.ArrayNode(null,(this__9272.cnt - 1),cljs.core.clone_and_set.call(null,this__9272.arr,idx__9274,n__9276)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9272.cnt,cljs.core.clone_and_set.call(null,this__9272.arr,idx__9274,n__9276)));
} else
{return null;
}
}
}
} else
{return inode__9273;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9277 = this;
var inode__9278 = this;
var idx__9279 = ((hash >>> shift) & 0x01f);
var node__9280 = (this__9277.arr[idx__9279]);
if((node__9280 == null))
{return (new cljs.core.ArrayNode(null,(this__9277.cnt + 1),cljs.core.clone_and_set.call(null,this__9277.arr,idx__9279,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9281 = node__9280.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9281 === node__9280))
{return inode__9278;
} else
{return (new cljs.core.ArrayNode(null,this__9277.cnt,cljs.core.clone_and_set.call(null,this__9277.arr,idx__9279,n__9281)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9282 = this;
var inode__9283 = this;
var idx__9284 = ((hash >>> shift) & 0x01f);
var node__9285 = (this__9282.arr[idx__9284]);
if(!((node__9285 == null)))
{return node__9285.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9290 = (2 * cnt);
var i__9291 = 0;
while(true){
if((i__9291 < lim__9290))
{if(cljs.core.key_test.call(null,key,(arr[i__9291])))
{return i__9291;
} else
{{
var G__9292 = (i__9291 + 2);
i__9291 = G__9292;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9293 = this;
var inode__9294 = this;
if((hash === this__9293.collision_hash))
{var idx__9295 = cljs.core.hash_collision_node_find_index.call(null,this__9293.arr,this__9293.cnt,key);
if((idx__9295 === -1))
{if((this__9293.arr.length > (2 * this__9293.cnt)))
{var editable__9296 = cljs.core.edit_and_set.call(null,inode__9294,edit,(2 * this__9293.cnt),key,((2 * this__9293.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9296.cnt = (editable__9296.cnt + 1);
return editable__9296;
} else
{var len__9297 = this__9293.arr.length;
var new_arr__9298 = cljs.core.make_array.call(null,(len__9297 + 2));
cljs.core.array_copy.call(null,this__9293.arr,0,new_arr__9298,0,len__9297);
(new_arr__9298[len__9297] = key);
(new_arr__9298[(len__9297 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9294.ensure_editable_array(edit,(this__9293.cnt + 1),new_arr__9298);
}
} else
{if(((this__9293.arr[(idx__9295 + 1)]) === val))
{return inode__9294;
} else
{return cljs.core.edit_and_set.call(null,inode__9294,edit,(idx__9295 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9293.collision_hash >>> shift) & 0x01f)),[null,inode__9294,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9299 = this;
var inode__9300 = this;
return cljs.core.create_inode_seq.call(null,this__9299.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9301 = this;
var inode__9302 = this;
var idx__9303 = cljs.core.hash_collision_node_find_index.call(null,this__9301.arr,this__9301.cnt,key);
if((idx__9303 === -1))
{return inode__9302;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9301.cnt === 1))
{return null;
} else
{var editable__9304 = inode__9302.ensure_editable(edit);
var earr__9305 = editable__9304.arr;
(earr__9305[idx__9303] = (earr__9305[((2 * this__9301.cnt) - 2)]));
(earr__9305[(idx__9303 + 1)] = (earr__9305[((2 * this__9301.cnt) - 1)]));
(earr__9305[((2 * this__9301.cnt) - 1)] = null);
(earr__9305[((2 * this__9301.cnt) - 2)] = null);
editable__9304.cnt = (editable__9304.cnt - 1);
return editable__9304;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9306 = this;
var inode__9307 = this;
if((e === this__9306.edit))
{return inode__9307;
} else
{var new_arr__9308 = cljs.core.make_array.call(null,(2 * (this__9306.cnt + 1)));
cljs.core.array_copy.call(null,this__9306.arr,0,new_arr__9308,0,(2 * this__9306.cnt));
return (new cljs.core.HashCollisionNode(e,this__9306.collision_hash,this__9306.cnt,new_arr__9308));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9309 = this;
var inode__9310 = this;
return cljs.core.inode_kv_reduce.call(null,this__9309.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9311 = this;
var inode__9312 = this;
var idx__9313 = cljs.core.hash_collision_node_find_index.call(null,this__9311.arr,this__9311.cnt,key);
if((idx__9313 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9311.arr[idx__9313])))
{return cljs.core.PersistentVector.fromArray([(this__9311.arr[idx__9313]),(this__9311.arr[(idx__9313 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__9314 = this;
var inode__9315 = this;
var idx__9316 = cljs.core.hash_collision_node_find_index.call(null,this__9314.arr,this__9314.cnt,key);
if((idx__9316 === -1))
{return inode__9315;
} else
{if((this__9314.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9314.collision_hash,(this__9314.cnt - 1),cljs.core.remove_pair.call(null,this__9314.arr,cljs.core.quot.call(null,idx__9316,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9317 = this;
var inode__9318 = this;
if((hash === this__9317.collision_hash))
{var idx__9319 = cljs.core.hash_collision_node_find_index.call(null,this__9317.arr,this__9317.cnt,key);
if((idx__9319 === -1))
{var len__9320 = this__9317.arr.length;
var new_arr__9321 = cljs.core.make_array.call(null,(len__9320 + 2));
cljs.core.array_copy.call(null,this__9317.arr,0,new_arr__9321,0,len__9320);
(new_arr__9321[len__9320] = key);
(new_arr__9321[(len__9320 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9317.collision_hash,(this__9317.cnt + 1),new_arr__9321));
} else
{if(cljs.core._EQ_.call(null,(this__9317.arr[idx__9319]),val))
{return inode__9318;
} else
{return (new cljs.core.HashCollisionNode(null,this__9317.collision_hash,this__9317.cnt,cljs.core.clone_and_set.call(null,this__9317.arr,(idx__9319 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9317.collision_hash >>> shift) & 0x01f)),[null,inode__9318])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9322 = this;
var inode__9323 = this;
var idx__9324 = cljs.core.hash_collision_node_find_index.call(null,this__9322.arr,this__9322.cnt,key);
if((idx__9324 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9322.arr[idx__9324])))
{return (this__9322.arr[(idx__9324 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__9325 = this;
var inode__9326 = this;
if((e === this__9325.edit))
{this__9325.arr = array;
this__9325.cnt = count;
return inode__9326;
} else
{return (new cljs.core.HashCollisionNode(this__9325.edit,this__9325.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9331 = cljs.core.hash.call(null,key1);
if((key1hash__9331 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9331,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9332 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9331,key1,val1,added_leaf_QMARK___9332).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9332);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9333 = cljs.core.hash.call(null,key1);
if((key1hash__9333 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9333,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9334 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9333,key1,val1,added_leaf_QMARK___9334).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9334);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9335 = this;
var h__2190__auto____9336 = this__9335.__hash;
if(!((h__2190__auto____9336 == null)))
{return h__2190__auto____9336;
} else
{var h__2190__auto____9337 = cljs.core.hash_coll.call(null,coll);
this__9335.__hash = h__2190__auto____9337;
return h__2190__auto____9337;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9338 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9339 = this;
var this__9340 = this;
return cljs.core.pr_str.call(null,this__9340);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9341 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9342 = this;
if((this__9342.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9342.nodes[this__9342.i]),(this__9342.nodes[(this__9342.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__9342.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9343 = this;
if((this__9343.s == null))
{return cljs.core.create_inode_seq.call(null,this__9343.nodes,(this__9343.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9343.nodes,this__9343.i,cljs.core.next.call(null,this__9343.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9344 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9345 = this;
return (new cljs.core.NodeSeq(meta,this__9345.nodes,this__9345.i,this__9345.s,this__9345.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9346 = this;
return this__9346.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9347 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9347.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9354 = nodes.length;
var j__9355 = i;
while(true){
if((j__9355 < len__9354))
{if(!(((nodes[j__9355]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9355,null,null));
} else
{var temp__3971__auto____9356 = (nodes[(j__9355 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9356))
{var node__9357 = temp__3971__auto____9356;
var temp__3971__auto____9358 = node__9357.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9358))
{var node_seq__9359 = temp__3971__auto____9358;
return (new cljs.core.NodeSeq(null,nodes,(j__9355 + 2),node_seq__9359,null));
} else
{{
var G__9360 = (j__9355 + 2);
j__9355 = G__9360;
continue;
}
}
} else
{{
var G__9361 = (j__9355 + 2);
j__9355 = G__9361;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9362 = this;
var h__2190__auto____9363 = this__9362.__hash;
if(!((h__2190__auto____9363 == null)))
{return h__2190__auto____9363;
} else
{var h__2190__auto____9364 = cljs.core.hash_coll.call(null,coll);
this__9362.__hash = h__2190__auto____9364;
return h__2190__auto____9364;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9365 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9366 = this;
var this__9367 = this;
return cljs.core.pr_str.call(null,this__9367);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9368 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9369 = this;
return cljs.core.first.call(null,this__9369.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9370 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9370.nodes,this__9370.i,cljs.core.next.call(null,this__9370.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9371 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9372 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9372.nodes,this__9372.i,this__9372.s,this__9372.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9373 = this;
return this__9373.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9374 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9374.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9381 = nodes.length;
var j__9382 = i;
while(true){
if((j__9382 < len__9381))
{var temp__3971__auto____9383 = (nodes[j__9382]);
if(cljs.core.truth_(temp__3971__auto____9383))
{var nj__9384 = temp__3971__auto____9383;
var temp__3971__auto____9385 = nj__9384.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9385))
{var ns__9386 = temp__3971__auto____9385;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9382 + 1),ns__9386,null));
} else
{{
var G__9387 = (j__9382 + 1);
j__9382 = G__9387;
continue;
}
}
} else
{{
var G__9388 = (j__9382 + 1);
j__9382 = G__9388;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9391 = this;
return (new cljs.core.TransientHashMap({},this__9391.root,this__9391.cnt,this__9391.has_nil_QMARK_,this__9391.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9392 = this;
var h__2190__auto____9393 = this__9392.__hash;
if(!((h__2190__auto____9393 == null)))
{return h__2190__auto____9393;
} else
{var h__2190__auto____9394 = cljs.core.hash_imap.call(null,coll);
this__9392.__hash = h__2190__auto____9394;
return h__2190__auto____9394;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9395 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9396 = this;
if((k == null))
{if(this__9396.has_nil_QMARK_)
{return this__9396.nil_val;
} else
{return not_found;
}
} else
{if((this__9396.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9396.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9397 = this;
if((k == null))
{if((function (){var and__3822__auto____9398 = this__9397.has_nil_QMARK_;
if(and__3822__auto____9398)
{return (v === this__9397.nil_val);
} else
{return and__3822__auto____9398;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9397.meta,((this__9397.has_nil_QMARK_)?this__9397.cnt:(this__9397.cnt + 1)),this__9397.root,true,v,null));
}
} else
{var added_leaf_QMARK___9399 = (new cljs.core.Box(false));
var new_root__9400 = (((this__9397.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9397.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9399);
if((new_root__9400 === this__9397.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9397.meta,((added_leaf_QMARK___9399.val)?(this__9397.cnt + 1):this__9397.cnt),new_root__9400,this__9397.has_nil_QMARK_,this__9397.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9401 = this;
if((k == null))
{return this__9401.has_nil_QMARK_;
} else
{if((this__9401.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9401.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9424 = null;
var G__9424__2 = (function (this_sym9402,k){
var this__9404 = this;
var this_sym9402__9405 = this;
var coll__9406 = this_sym9402__9405;
return coll__9406.cljs$core$ILookup$_lookup$arity$2(coll__9406,k);
});
var G__9424__3 = (function (this_sym9403,k,not_found){
var this__9404 = this;
var this_sym9403__9407 = this;
var coll__9408 = this_sym9403__9407;
return coll__9408.cljs$core$ILookup$_lookup$arity$3(coll__9408,k,not_found);
});
G__9424 = function(this_sym9403,k,not_found){
switch(arguments.length){
case 2:
return G__9424__2.call(this,this_sym9403,k);
case 3:
return G__9424__3.call(this,this_sym9403,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9424;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9389,args9390){
var this__9409 = this;
return this_sym9389.call.apply(this_sym9389,[this_sym9389].concat(args9390.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9410 = this;
var init__9411 = ((this__9410.has_nil_QMARK_)?f.call(null,init,null,this__9410.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9411))
{return cljs.core.deref.call(null,init__9411);
} else
{if(!((this__9410.root == null)))
{return this__9410.root.kv_reduce(f,init__9411);
} else
{if("\uFDD0'else")
{return init__9411;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9412 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9413 = this;
var this__9414 = this;
return cljs.core.pr_str.call(null,this__9414);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9415 = this;
if((this__9415.cnt > 0))
{var s__9416 = ((!((this__9415.root == null)))?this__9415.root.inode_seq():null);
if(this__9415.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9415.nil_val], true),s__9416);
} else
{return s__9416;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9417 = this;
return this__9417.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9418 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9419 = this;
return (new cljs.core.PersistentHashMap(meta,this__9419.cnt,this__9419.root,this__9419.has_nil_QMARK_,this__9419.nil_val,this__9419.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9420 = this;
return this__9420.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9421 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9421.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9422 = this;
if((k == null))
{if(this__9422.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9422.meta,(this__9422.cnt - 1),this__9422.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9422.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9423 = this__9422.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9423 === this__9422.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9422.meta,(this__9422.cnt - 1),new_root__9423,this__9422.has_nil_QMARK_,this__9422.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__9425 = ks.length;
var i__9426 = 0;
var out__9427 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9426 < len__9425))
{{
var G__9428 = (i__9426 + 1);
var G__9429 = cljs.core.assoc_BANG_.call(null,out__9427,(ks[i__9426]),(vs[i__9426]));
i__9426 = G__9428;
out__9427 = G__9429;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9427);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9430 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9431 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9432 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9433 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9434 = this;
if((k == null))
{if(this__9434.has_nil_QMARK_)
{return this__9434.nil_val;
} else
{return null;
}
} else
{if((this__9434.root == null))
{return null;
} else
{return this__9434.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9435 = this;
if((k == null))
{if(this__9435.has_nil_QMARK_)
{return this__9435.nil_val;
} else
{return not_found;
}
} else
{if((this__9435.root == null))
{return not_found;
} else
{return this__9435.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9436 = this;
if(this__9436.edit)
{return this__9436.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9437 = this;
var tcoll__9438 = this;
if(this__9437.edit)
{if((function (){var G__9439__9440 = o;
if(G__9439__9440)
{if((function (){var or__3824__auto____9441 = (G__9439__9440.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9441)
{return or__3824__auto____9441;
} else
{return G__9439__9440.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9439__9440.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9439__9440);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9439__9440);
}
})())
{return tcoll__9438.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9442 = cljs.core.seq.call(null,o);
var tcoll__9443 = tcoll__9438;
while(true){
var temp__3971__auto____9444 = cljs.core.first.call(null,es__9442);
if(cljs.core.truth_(temp__3971__auto____9444))
{var e__9445 = temp__3971__auto____9444;
{
var G__9456 = cljs.core.next.call(null,es__9442);
var G__9457 = tcoll__9443.assoc_BANG_(cljs.core.key.call(null,e__9445),cljs.core.val.call(null,e__9445));
es__9442 = G__9456;
tcoll__9443 = G__9457;
continue;
}
} else
{return tcoll__9443;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9446 = this;
var tcoll__9447 = this;
if(this__9446.edit)
{if((k == null))
{if((this__9446.nil_val === v))
{} else
{this__9446.nil_val = v;
}
if(this__9446.has_nil_QMARK_)
{} else
{this__9446.count = (this__9446.count + 1);
this__9446.has_nil_QMARK_ = true;
}
return tcoll__9447;
} else
{var added_leaf_QMARK___9448 = (new cljs.core.Box(false));
var node__9449 = (((this__9446.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9446.root).inode_assoc_BANG_(this__9446.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9448);
if((node__9449 === this__9446.root))
{} else
{this__9446.root = node__9449;
}
if(added_leaf_QMARK___9448.val)
{this__9446.count = (this__9446.count + 1);
} else
{}
return tcoll__9447;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9450 = this;
var tcoll__9451 = this;
if(this__9450.edit)
{if((k == null))
{if(this__9450.has_nil_QMARK_)
{this__9450.has_nil_QMARK_ = false;
this__9450.nil_val = null;
this__9450.count = (this__9450.count - 1);
return tcoll__9451;
} else
{return tcoll__9451;
}
} else
{if((this__9450.root == null))
{return tcoll__9451;
} else
{var removed_leaf_QMARK___9452 = (new cljs.core.Box(false));
var node__9453 = this__9450.root.inode_without_BANG_(this__9450.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9452);
if((node__9453 === this__9450.root))
{} else
{this__9450.root = node__9453;
}
if(cljs.core.truth_((removed_leaf_QMARK___9452[0])))
{this__9450.count = (this__9450.count - 1);
} else
{}
return tcoll__9451;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9454 = this;
var tcoll__9455 = this;
if(this__9454.edit)
{this__9454.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9454.count,this__9454.root,this__9454.has_nil_QMARK_,this__9454.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9460 = node;
var stack__9461 = stack;
while(true){
if(!((t__9460 == null)))
{{
var G__9462 = ((ascending_QMARK_)?t__9460.left:t__9460.right);
var G__9463 = cljs.core.conj.call(null,stack__9461,t__9460);
t__9460 = G__9462;
stack__9461 = G__9463;
continue;
}
} else
{return stack__9461;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9464 = this;
var h__2190__auto____9465 = this__9464.__hash;
if(!((h__2190__auto____9465 == null)))
{return h__2190__auto____9465;
} else
{var h__2190__auto____9466 = cljs.core.hash_coll.call(null,coll);
this__9464.__hash = h__2190__auto____9466;
return h__2190__auto____9466;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9467 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9468 = this;
var this__9469 = this;
return cljs.core.pr_str.call(null,this__9469);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9470 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9471 = this;
if((this__9471.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9471.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9472 = this;
return cljs.core.peek.call(null,this__9472.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9473 = this;
var t__9474 = cljs.core.first.call(null,this__9473.stack);
var next_stack__9475 = cljs.core.tree_map_seq_push.call(null,((this__9473.ascending_QMARK_)?t__9474.right:t__9474.left),cljs.core.next.call(null,this__9473.stack),this__9473.ascending_QMARK_);
if(!((next_stack__9475 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9475,this__9473.ascending_QMARK_,(this__9473.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9476 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9477 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9477.stack,this__9477.ascending_QMARK_,this__9477.cnt,this__9477.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9478 = this;
return this__9478.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____9480 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9480)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9480;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____9482 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9482)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9482;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__9486 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9486))
{return cljs.core.deref.call(null,init__9486);
} else
{var init__9487 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9486):init__9486);
if(cljs.core.reduced_QMARK_.call(null,init__9487))
{return cljs.core.deref.call(null,init__9487);
} else
{var init__9488 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9487):init__9487);
if(cljs.core.reduced_QMARK_.call(null,init__9488))
{return cljs.core.deref.call(null,init__9488);
} else
{return init__9488;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9491 = this;
var h__2190__auto____9492 = this__9491.__hash;
if(!((h__2190__auto____9492 == null)))
{return h__2190__auto____9492;
} else
{var h__2190__auto____9493 = cljs.core.hash_coll.call(null,coll);
this__9491.__hash = h__2190__auto____9493;
return h__2190__auto____9493;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9494 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9495 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9496 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9496.key,this__9496.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9544 = null;
var G__9544__2 = (function (this_sym9497,k){
var this__9499 = this;
var this_sym9497__9500 = this;
var node__9501 = this_sym9497__9500;
return node__9501.cljs$core$ILookup$_lookup$arity$2(node__9501,k);
});
var G__9544__3 = (function (this_sym9498,k,not_found){
var this__9499 = this;
var this_sym9498__9502 = this;
var node__9503 = this_sym9498__9502;
return node__9503.cljs$core$ILookup$_lookup$arity$3(node__9503,k,not_found);
});
G__9544 = function(this_sym9498,k,not_found){
switch(arguments.length){
case 2:
return G__9544__2.call(this,this_sym9498,k);
case 3:
return G__9544__3.call(this,this_sym9498,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9544;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9489,args9490){
var this__9504 = this;
return this_sym9489.call.apply(this_sym9489,[this_sym9489].concat(args9490.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9505 = this;
return cljs.core.PersistentVector.fromArray([this__9505.key,this__9505.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9506 = this;
return this__9506.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9507 = this;
return this__9507.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9508 = this;
var node__9509 = this;
return ins.balance_right(node__9509);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9510 = this;
var node__9511 = this;
return (new cljs.core.RedNode(this__9510.key,this__9510.val,this__9510.left,this__9510.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9512 = this;
var node__9513 = this;
return cljs.core.balance_right_del.call(null,this__9512.key,this__9512.val,this__9512.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9514 = this;
var node__9515 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9516 = this;
var node__9517 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9517,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9518 = this;
var node__9519 = this;
return cljs.core.balance_left_del.call(null,this__9518.key,this__9518.val,del,this__9518.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9520 = this;
var node__9521 = this;
return ins.balance_left(node__9521);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9522 = this;
var node__9523 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9523,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9545 = null;
var G__9545__0 = (function (){
var this__9524 = this;
var this__9526 = this;
return cljs.core.pr_str.call(null,this__9526);
});
G__9545 = function(){
switch(arguments.length){
case 0:
return G__9545__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9545;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9527 = this;
var node__9528 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9528,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9529 = this;
var node__9530 = this;
return node__9530;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9531 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9532 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9533 = this;
return cljs.core.list.call(null,this__9533.key,this__9533.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9534 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9535 = this;
return this__9535.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9536 = this;
return cljs.core.PersistentVector.fromArray([this__9536.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9537 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9537.key,this__9537.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9538 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9539 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9539.key,this__9539.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9540 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9541 = this;
if((n === 0))
{return this__9541.key;
} else
{if((n === 1))
{return this__9541.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9542 = this;
if((n === 0))
{return this__9542.key;
} else
{if((n === 1))
{return this__9542.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9543 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9548 = this;
var h__2190__auto____9549 = this__9548.__hash;
if(!((h__2190__auto____9549 == null)))
{return h__2190__auto____9549;
} else
{var h__2190__auto____9550 = cljs.core.hash_coll.call(null,coll);
this__9548.__hash = h__2190__auto____9550;
return h__2190__auto____9550;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9551 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9552 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9553 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9553.key,this__9553.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9601 = null;
var G__9601__2 = (function (this_sym9554,k){
var this__9556 = this;
var this_sym9554__9557 = this;
var node__9558 = this_sym9554__9557;
return node__9558.cljs$core$ILookup$_lookup$arity$2(node__9558,k);
});
var G__9601__3 = (function (this_sym9555,k,not_found){
var this__9556 = this;
var this_sym9555__9559 = this;
var node__9560 = this_sym9555__9559;
return node__9560.cljs$core$ILookup$_lookup$arity$3(node__9560,k,not_found);
});
G__9601 = function(this_sym9555,k,not_found){
switch(arguments.length){
case 2:
return G__9601__2.call(this,this_sym9555,k);
case 3:
return G__9601__3.call(this,this_sym9555,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9601;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9546,args9547){
var this__9561 = this;
return this_sym9546.call.apply(this_sym9546,[this_sym9546].concat(args9547.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9562 = this;
return cljs.core.PersistentVector.fromArray([this__9562.key,this__9562.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9563 = this;
return this__9563.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9564 = this;
return this__9564.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9565 = this;
var node__9566 = this;
return (new cljs.core.RedNode(this__9565.key,this__9565.val,this__9565.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9567 = this;
var node__9568 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9569 = this;
var node__9570 = this;
return (new cljs.core.RedNode(this__9569.key,this__9569.val,this__9569.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9571 = this;
var node__9572 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9573 = this;
var node__9574 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9574,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9575 = this;
var node__9576 = this;
return (new cljs.core.RedNode(this__9575.key,this__9575.val,del,this__9575.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9577 = this;
var node__9578 = this;
return (new cljs.core.RedNode(this__9577.key,this__9577.val,ins,this__9577.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9579 = this;
var node__9580 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9579.left))
{return (new cljs.core.RedNode(this__9579.key,this__9579.val,this__9579.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9579.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9579.right))
{return (new cljs.core.RedNode(this__9579.right.key,this__9579.right.val,(new cljs.core.BlackNode(this__9579.key,this__9579.val,this__9579.left,this__9579.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9579.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9580,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9602 = null;
var G__9602__0 = (function (){
var this__9581 = this;
var this__9583 = this;
return cljs.core.pr_str.call(null,this__9583);
});
G__9602 = function(){
switch(arguments.length){
case 0:
return G__9602__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9602;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9584 = this;
var node__9585 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9584.right))
{return (new cljs.core.RedNode(this__9584.key,this__9584.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9584.left,null)),this__9584.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9584.left))
{return (new cljs.core.RedNode(this__9584.left.key,this__9584.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9584.left.left,null)),(new cljs.core.BlackNode(this__9584.key,this__9584.val,this__9584.left.right,this__9584.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9585,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9586 = this;
var node__9587 = this;
return (new cljs.core.BlackNode(this__9586.key,this__9586.val,this__9586.left,this__9586.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9588 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9589 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9590 = this;
return cljs.core.list.call(null,this__9590.key,this__9590.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9591 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9592 = this;
return this__9592.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9593 = this;
return cljs.core.PersistentVector.fromArray([this__9593.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9594 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9594.key,this__9594.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9595 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9596 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9596.key,this__9596.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9597 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9598 = this;
if((n === 0))
{return this__9598.key;
} else
{if((n === 1))
{return this__9598.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9599 = this;
if((n === 0))
{return this__9599.key;
} else
{if((n === 1))
{return this__9599.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9600 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9606 = comp.call(null,k,tree.key);
if((c__9606 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9606 < 0))
{var ins__9607 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9607 == null)))
{return tree.add_left(ins__9607);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9608 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9608 == null)))
{return tree.add_right(ins__9608);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__9611 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9611))
{return (new cljs.core.RedNode(app__9611.key,app__9611.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9611.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9611.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9611,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9612 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9612))
{return (new cljs.core.RedNode(app__9612.key,app__9612.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9612.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9612.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9612,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__9618 = comp.call(null,k,tree.key);
if((c__9618 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9618 < 0))
{var del__9619 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9620 = !((del__9619 == null));
if(or__3824__auto____9620)
{return or__3824__auto____9620;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9619,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9619,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9621 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9622 = !((del__9621 == null));
if(or__3824__auto____9622)
{return or__3824__auto____9622;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9621);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9621,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__9625 = tree.key;
var c__9626 = comp.call(null,k,tk__9625);
if((c__9626 === 0))
{return tree.replace(tk__9625,v,tree.left,tree.right);
} else
{if((c__9626 < 0))
{return tree.replace(tk__9625,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9625,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9629 = this;
var h__2190__auto____9630 = this__9629.__hash;
if(!((h__2190__auto____9630 == null)))
{return h__2190__auto____9630;
} else
{var h__2190__auto____9631 = cljs.core.hash_imap.call(null,coll);
this__9629.__hash = h__2190__auto____9631;
return h__2190__auto____9631;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9632 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9633 = this;
var n__9634 = coll.entry_at(k);
if(!((n__9634 == null)))
{return n__9634.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9635 = this;
var found__9636 = [null];
var t__9637 = cljs.core.tree_map_add.call(null,this__9635.comp,this__9635.tree,k,v,found__9636);
if((t__9637 == null))
{var found_node__9638 = cljs.core.nth.call(null,found__9636,0);
if(cljs.core._EQ_.call(null,v,found_node__9638.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9635.comp,cljs.core.tree_map_replace.call(null,this__9635.comp,this__9635.tree,k,v),this__9635.cnt,this__9635.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9635.comp,t__9637.blacken(),(this__9635.cnt + 1),this__9635.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9639 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9673 = null;
var G__9673__2 = (function (this_sym9640,k){
var this__9642 = this;
var this_sym9640__9643 = this;
var coll__9644 = this_sym9640__9643;
return coll__9644.cljs$core$ILookup$_lookup$arity$2(coll__9644,k);
});
var G__9673__3 = (function (this_sym9641,k,not_found){
var this__9642 = this;
var this_sym9641__9645 = this;
var coll__9646 = this_sym9641__9645;
return coll__9646.cljs$core$ILookup$_lookup$arity$3(coll__9646,k,not_found);
});
G__9673 = function(this_sym9641,k,not_found){
switch(arguments.length){
case 2:
return G__9673__2.call(this,this_sym9641,k);
case 3:
return G__9673__3.call(this,this_sym9641,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9673;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9627,args9628){
var this__9647 = this;
return this_sym9627.call.apply(this_sym9627,[this_sym9627].concat(args9628.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9648 = this;
if(!((this__9648.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9648.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9649 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9650 = this;
if((this__9650.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9650.tree,false,this__9650.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9651 = this;
var this__9652 = this;
return cljs.core.pr_str.call(null,this__9652);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9653 = this;
var coll__9654 = this;
var t__9655 = this__9653.tree;
while(true){
if(!((t__9655 == null)))
{var c__9656 = this__9653.comp.call(null,k,t__9655.key);
if((c__9656 === 0))
{return t__9655;
} else
{if((c__9656 < 0))
{{
var G__9674 = t__9655.left;
t__9655 = G__9674;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9675 = t__9655.right;
t__9655 = G__9675;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9657 = this;
if((this__9657.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9657.tree,ascending_QMARK_,this__9657.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9658 = this;
if((this__9658.cnt > 0))
{var stack__9659 = null;
var t__9660 = this__9658.tree;
while(true){
if(!((t__9660 == null)))
{var c__9661 = this__9658.comp.call(null,k,t__9660.key);
if((c__9661 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9659,t__9660),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9661 < 0))
{{
var G__9676 = cljs.core.conj.call(null,stack__9659,t__9660);
var G__9677 = t__9660.left;
stack__9659 = G__9676;
t__9660 = G__9677;
continue;
}
} else
{{
var G__9678 = stack__9659;
var G__9679 = t__9660.right;
stack__9659 = G__9678;
t__9660 = G__9679;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9661 > 0))
{{
var G__9680 = cljs.core.conj.call(null,stack__9659,t__9660);
var G__9681 = t__9660.right;
stack__9659 = G__9680;
t__9660 = G__9681;
continue;
}
} else
{{
var G__9682 = stack__9659;
var G__9683 = t__9660.left;
stack__9659 = G__9682;
t__9660 = G__9683;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9659 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9659,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9662 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9663 = this;
return this__9663.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9664 = this;
if((this__9664.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9664.tree,true,this__9664.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9665 = this;
return this__9665.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9666 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9667 = this;
return (new cljs.core.PersistentTreeMap(this__9667.comp,this__9667.tree,this__9667.cnt,meta,this__9667.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9668 = this;
return this__9668.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9669 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9669.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9670 = this;
var found__9671 = [null];
var t__9672 = cljs.core.tree_map_remove.call(null,this__9670.comp,this__9670.tree,k,found__9671);
if((t__9672 == null))
{if((cljs.core.nth.call(null,found__9671,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9670.comp,null,0,this__9670.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9670.comp,t__9672.blacken(),(this__9670.cnt - 1),this__9670.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__9686 = cljs.core.seq.call(null,keyvals);
var out__9687 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9686)
{{
var G__9688 = cljs.core.nnext.call(null,in__9686);
var G__9689 = cljs.core.assoc_BANG_.call(null,out__9687,cljs.core.first.call(null,in__9686),cljs.core.second.call(null,in__9686));
in__9686 = G__9688;
out__9687 = G__9689;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9687);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__9690){
var keyvals = cljs.core.seq(arglist__9690);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__9691){
var keyvals = cljs.core.seq(arglist__9691);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__9695 = [];
var obj__9696 = {};
var kvs__9697 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__9697)
{ks__9695.push(cljs.core.first.call(null,kvs__9697));
(obj__9696[cljs.core.first.call(null,kvs__9697)] = cljs.core.second.call(null,kvs__9697));
{
var G__9698 = cljs.core.nnext.call(null,kvs__9697);
kvs__9697 = G__9698;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__9695,obj__9696);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__9699){
var keyvals = cljs.core.seq(arglist__9699);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__9702 = cljs.core.seq.call(null,keyvals);
var out__9703 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9702)
{{
var G__9704 = cljs.core.nnext.call(null,in__9702);
var G__9705 = cljs.core.assoc.call(null,out__9703,cljs.core.first.call(null,in__9702),cljs.core.second.call(null,in__9702));
in__9702 = G__9704;
out__9703 = G__9705;
continue;
}
} else
{return out__9703;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__9706){
var keyvals = cljs.core.seq(arglist__9706);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__9709 = cljs.core.seq.call(null,keyvals);
var out__9710 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9709)
{{
var G__9711 = cljs.core.nnext.call(null,in__9709);
var G__9712 = cljs.core.assoc.call(null,out__9710,cljs.core.first.call(null,in__9709),cljs.core.second.call(null,in__9709));
in__9709 = G__9711;
out__9710 = G__9712;
continue;
}
} else
{return out__9710;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__9713){
var comparator = cljs.core.first(arglist__9713);
var keyvals = cljs.core.rest(arglist__9713);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__9714_SHARP_,p2__9715_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9717 = p1__9714_SHARP_;
if(cljs.core.truth_(or__3824__auto____9717))
{return or__3824__auto____9717;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9715_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__9718){
var maps = cljs.core.seq(arglist__9718);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__9726 = (function (m,e){
var k__9724 = cljs.core.first.call(null,e);
var v__9725 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9724))
{return cljs.core.assoc.call(null,m,k__9724,f.call(null,cljs.core._lookup.call(null,m,k__9724,null),v__9725));
} else
{return cljs.core.assoc.call(null,m,k__9724,v__9725);
}
});
var merge2__9728 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9726,(function (){var or__3824__auto____9727 = m1;
if(cljs.core.truth_(or__3824__auto____9727))
{return or__3824__auto____9727;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9728,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__9729){
var f = cljs.core.first(arglist__9729);
var maps = cljs.core.rest(arglist__9729);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__9734 = cljs.core.ObjMap.EMPTY;
var keys__9735 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9735)
{var key__9736 = cljs.core.first.call(null,keys__9735);
var entry__9737 = cljs.core._lookup.call(null,map,key__9736,"\uFDD0'user/not-found");
{
var G__9738 = ((cljs.core.not_EQ_.call(null,entry__9737,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__9734,key__9736,entry__9737):ret__9734);
var G__9739 = cljs.core.next.call(null,keys__9735);
ret__9734 = G__9738;
keys__9735 = G__9739;
continue;
}
} else
{return ret__9734;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9743 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9743.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9744 = this;
var h__2190__auto____9745 = this__9744.__hash;
if(!((h__2190__auto____9745 == null)))
{return h__2190__auto____9745;
} else
{var h__2190__auto____9746 = cljs.core.hash_iset.call(null,coll);
this__9744.__hash = h__2190__auto____9746;
return h__2190__auto____9746;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9747 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9748 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9748.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9769 = null;
var G__9769__2 = (function (this_sym9749,k){
var this__9751 = this;
var this_sym9749__9752 = this;
var coll__9753 = this_sym9749__9752;
return coll__9753.cljs$core$ILookup$_lookup$arity$2(coll__9753,k);
});
var G__9769__3 = (function (this_sym9750,k,not_found){
var this__9751 = this;
var this_sym9750__9754 = this;
var coll__9755 = this_sym9750__9754;
return coll__9755.cljs$core$ILookup$_lookup$arity$3(coll__9755,k,not_found);
});
G__9769 = function(this_sym9750,k,not_found){
switch(arguments.length){
case 2:
return G__9769__2.call(this,this_sym9750,k);
case 3:
return G__9769__3.call(this,this_sym9750,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9769;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9741,args9742){
var this__9756 = this;
return this_sym9741.call.apply(this_sym9741,[this_sym9741].concat(args9742.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9757 = this;
return (new cljs.core.PersistentHashSet(this__9757.meta,cljs.core.assoc.call(null,this__9757.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9758 = this;
var this__9759 = this;
return cljs.core.pr_str.call(null,this__9759);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9760 = this;
return cljs.core.keys.call(null,this__9760.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9761 = this;
return (new cljs.core.PersistentHashSet(this__9761.meta,cljs.core.dissoc.call(null,this__9761.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9762 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9763 = this;
var and__3822__auto____9764 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9764)
{var and__3822__auto____9765 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9765)
{return cljs.core.every_QMARK_.call(null,(function (p1__9740_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9740_SHARP_);
}),other);
} else
{return and__3822__auto____9765;
}
} else
{return and__3822__auto____9764;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9766 = this;
return (new cljs.core.PersistentHashSet(meta,this__9766.hash_map,this__9766.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9767 = this;
return this__9767.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9768 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9768.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__9770 = cljs.core.count.call(null,items);
var i__9771 = 0;
var out__9772 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__9771 < len__9770))
{{
var G__9773 = (i__9771 + 1);
var G__9774 = cljs.core.conj_BANG_.call(null,out__9772,(items[i__9771]));
i__9771 = G__9773;
out__9772 = G__9774;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9772);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9792 = null;
var G__9792__2 = (function (this_sym9778,k){
var this__9780 = this;
var this_sym9778__9781 = this;
var tcoll__9782 = this_sym9778__9781;
if((cljs.core._lookup.call(null,this__9780.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9792__3 = (function (this_sym9779,k,not_found){
var this__9780 = this;
var this_sym9779__9783 = this;
var tcoll__9784 = this_sym9779__9783;
if((cljs.core._lookup.call(null,this__9780.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9792 = function(this_sym9779,k,not_found){
switch(arguments.length){
case 2:
return G__9792__2.call(this,this_sym9779,k);
case 3:
return G__9792__3.call(this,this_sym9779,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9792;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9776,args9777){
var this__9785 = this;
return this_sym9776.call.apply(this_sym9776,[this_sym9776].concat(args9777.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9786 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9787 = this;
if((cljs.core._lookup.call(null,this__9787.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9788 = this;
return cljs.core.count.call(null,this__9788.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9789 = this;
this__9789.transient_map = cljs.core.dissoc_BANG_.call(null,this__9789.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9790 = this;
this__9790.transient_map = cljs.core.assoc_BANG_.call(null,this__9790.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9791 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9791.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9795 = this;
var h__2190__auto____9796 = this__9795.__hash;
if(!((h__2190__auto____9796 == null)))
{return h__2190__auto____9796;
} else
{var h__2190__auto____9797 = cljs.core.hash_iset.call(null,coll);
this__9795.__hash = h__2190__auto____9797;
return h__2190__auto____9797;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9798 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9799 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9799.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9825 = null;
var G__9825__2 = (function (this_sym9800,k){
var this__9802 = this;
var this_sym9800__9803 = this;
var coll__9804 = this_sym9800__9803;
return coll__9804.cljs$core$ILookup$_lookup$arity$2(coll__9804,k);
});
var G__9825__3 = (function (this_sym9801,k,not_found){
var this__9802 = this;
var this_sym9801__9805 = this;
var coll__9806 = this_sym9801__9805;
return coll__9806.cljs$core$ILookup$_lookup$arity$3(coll__9806,k,not_found);
});
G__9825 = function(this_sym9801,k,not_found){
switch(arguments.length){
case 2:
return G__9825__2.call(this,this_sym9801,k);
case 3:
return G__9825__3.call(this,this_sym9801,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9825;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9793,args9794){
var this__9807 = this;
return this_sym9793.call.apply(this_sym9793,[this_sym9793].concat(args9794.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9808 = this;
return (new cljs.core.PersistentTreeSet(this__9808.meta,cljs.core.assoc.call(null,this__9808.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9809 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9809.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9810 = this;
var this__9811 = this;
return cljs.core.pr_str.call(null,this__9811);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9812 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9812.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9813 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9813.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9814 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9815 = this;
return cljs.core._comparator.call(null,this__9815.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9816 = this;
return cljs.core.keys.call(null,this__9816.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9817 = this;
return (new cljs.core.PersistentTreeSet(this__9817.meta,cljs.core.dissoc.call(null,this__9817.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9818 = this;
return cljs.core.count.call(null,this__9818.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9819 = this;
var and__3822__auto____9820 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9820)
{var and__3822__auto____9821 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9821)
{return cljs.core.every_QMARK_.call(null,(function (p1__9775_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9775_SHARP_);
}),other);
} else
{return and__3822__auto____9821;
}
} else
{return and__3822__auto____9820;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9822 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9822.tree_map,this__9822.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9823 = this;
return this__9823.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9824 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9824.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__9830__delegate = function (keys){
var in__9828 = cljs.core.seq.call(null,keys);
var out__9829 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9828))
{{
var G__9831 = cljs.core.next.call(null,in__9828);
var G__9832 = cljs.core.conj_BANG_.call(null,out__9829,cljs.core.first.call(null,in__9828));
in__9828 = G__9831;
out__9829 = G__9832;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9829);
}
break;
}
};
var G__9830 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9830__delegate.call(this, keys);
};
G__9830.cljs$lang$maxFixedArity = 0;
G__9830.cljs$lang$applyTo = (function (arglist__9833){
var keys = cljs.core.seq(arglist__9833);;
return G__9830__delegate(keys);
});
G__9830.cljs$lang$arity$variadic = G__9830__delegate;
return G__9830;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__9834){
var keys = cljs.core.seq(arglist__9834);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__9836){
var comparator = cljs.core.first(arglist__9836);
var keys = cljs.core.rest(arglist__9836);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__9842 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9843 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9843))
{var e__9844 = temp__3971__auto____9843;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9844));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9842,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9835_SHARP_){
var temp__3971__auto____9845 = cljs.core.find.call(null,smap,p1__9835_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9845))
{var e__9846 = temp__3971__auto____9845;
return cljs.core.second.call(null,e__9846);
} else
{return p1__9835_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9876 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9869,seen){
while(true){
var vec__9870__9871 = p__9869;
var f__9872 = cljs.core.nth.call(null,vec__9870__9871,0,null);
var xs__9873 = vec__9870__9871;
var temp__3974__auto____9874 = cljs.core.seq.call(null,xs__9873);
if(temp__3974__auto____9874)
{var s__9875 = temp__3974__auto____9874;
if(cljs.core.contains_QMARK_.call(null,seen,f__9872))
{{
var G__9877 = cljs.core.rest.call(null,s__9875);
var G__9878 = seen;
p__9869 = G__9877;
seen = G__9878;
continue;
}
} else
{return cljs.core.cons.call(null,f__9872,step.call(null,cljs.core.rest.call(null,s__9875),cljs.core.conj.call(null,seen,f__9872)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9876.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__9881 = cljs.core.PersistentVector.EMPTY;
var s__9882 = s;
while(true){
if(cljs.core.next.call(null,s__9882))
{{
var G__9883 = cljs.core.conj.call(null,ret__9881,cljs.core.first.call(null,s__9882));
var G__9884 = cljs.core.next.call(null,s__9882);
ret__9881 = G__9883;
s__9882 = G__9884;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9881);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____9887 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9887)
{return or__3824__auto____9887;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9888 = x.lastIndexOf("/");
if((i__9888 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9888 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____9891 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9891)
{return or__3824__auto____9891;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9892 = x.lastIndexOf("/");
if((i__9892 > -1))
{return cljs.core.subs.call(null,x,2,i__9892);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__9899 = cljs.core.ObjMap.EMPTY;
var ks__9900 = cljs.core.seq.call(null,keys);
var vs__9901 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9902 = ks__9900;
if(and__3822__auto____9902)
{return vs__9901;
} else
{return and__3822__auto____9902;
}
})())
{{
var G__9903 = cljs.core.assoc.call(null,map__9899,cljs.core.first.call(null,ks__9900),cljs.core.first.call(null,vs__9901));
var G__9904 = cljs.core.next.call(null,ks__9900);
var G__9905 = cljs.core.next.call(null,vs__9901);
map__9899 = G__9903;
ks__9900 = G__9904;
vs__9901 = G__9905;
continue;
}
} else
{return map__9899;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__9908__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9893_SHARP_,p2__9894_SHARP_){
return max_key.call(null,k,p1__9893_SHARP_,p2__9894_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9908 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9908__delegate.call(this, k, x, y, more);
};
G__9908.cljs$lang$maxFixedArity = 3;
G__9908.cljs$lang$applyTo = (function (arglist__9909){
var k = cljs.core.first(arglist__9909);
var x = cljs.core.first(cljs.core.next(arglist__9909));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9909)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9909)));
return G__9908__delegate(k, x, y, more);
});
G__9908.cljs$lang$arity$variadic = G__9908__delegate;
return G__9908;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__9910__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9906_SHARP_,p2__9907_SHARP_){
return min_key.call(null,k,p1__9906_SHARP_,p2__9907_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9910 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9910__delegate.call(this, k, x, y, more);
};
G__9910.cljs$lang$maxFixedArity = 3;
G__9910.cljs$lang$applyTo = (function (arglist__9911){
var k = cljs.core.first(arglist__9911);
var x = cljs.core.first(cljs.core.next(arglist__9911));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9911)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9911)));
return G__9910__delegate(k, x, y, more);
});
G__9910.cljs$lang$arity$variadic = G__9910__delegate;
return G__9910;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9914 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9914)
{var s__9915 = temp__3974__auto____9914;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9915),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9915)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9918 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9918)
{var s__9919 = temp__3974__auto____9918;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9919))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9919),take_while.call(null,pred,cljs.core.rest.call(null,s__9919)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__9921 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9921.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__9933 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9934 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9934))
{var vec__9935__9936 = temp__3974__auto____9934;
var e__9937 = cljs.core.nth.call(null,vec__9935__9936,0,null);
var s__9938 = vec__9935__9936;
if(cljs.core.truth_(include__9933.call(null,e__9937)))
{return s__9938;
} else
{return cljs.core.next.call(null,s__9938);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9933,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9939 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9939))
{var vec__9940__9941 = temp__3974__auto____9939;
var e__9942 = cljs.core.nth.call(null,vec__9940__9941,0,null);
var s__9943 = vec__9940__9941;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9942))?s__9943:cljs.core.next.call(null,s__9943)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__9955 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9956 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9956))
{var vec__9957__9958 = temp__3974__auto____9956;
var e__9959 = cljs.core.nth.call(null,vec__9957__9958,0,null);
var s__9960 = vec__9957__9958;
if(cljs.core.truth_(include__9955.call(null,e__9959)))
{return s__9960;
} else
{return cljs.core.next.call(null,s__9960);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9955,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9961 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9961))
{var vec__9962__9963 = temp__3974__auto____9961;
var e__9964 = cljs.core.nth.call(null,vec__9962__9963,0,null);
var s__9965 = vec__9962__9963;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9964))?s__9965:cljs.core.next.call(null,s__9965)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9966 = this;
var h__2190__auto____9967 = this__9966.__hash;
if(!((h__2190__auto____9967 == null)))
{return h__2190__auto____9967;
} else
{var h__2190__auto____9968 = cljs.core.hash_coll.call(null,rng);
this__9966.__hash = h__2190__auto____9968;
return h__2190__auto____9968;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9969 = this;
if((this__9969.step > 0))
{if(((this__9969.start + this__9969.step) < this__9969.end))
{return (new cljs.core.Range(this__9969.meta,(this__9969.start + this__9969.step),this__9969.end,this__9969.step,null));
} else
{return null;
}
} else
{if(((this__9969.start + this__9969.step) > this__9969.end))
{return (new cljs.core.Range(this__9969.meta,(this__9969.start + this__9969.step),this__9969.end,this__9969.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9970 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9971 = this;
var this__9972 = this;
return cljs.core.pr_str.call(null,this__9972);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9973 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9974 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9975 = this;
if((this__9975.step > 0))
{if((this__9975.start < this__9975.end))
{return rng;
} else
{return null;
}
} else
{if((this__9975.start > this__9975.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9976 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9976.end - this__9976.start) / this__9976.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9977 = this;
return this__9977.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9978 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9978.meta,(this__9978.start + this__9978.step),this__9978.end,this__9978.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9979 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9980 = this;
return (new cljs.core.Range(meta,this__9980.start,this__9980.end,this__9980.step,this__9980.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9981 = this;
return this__9981.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9982 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9982.start + (n * this__9982.step));
} else
{if((function (){var and__3822__auto____9983 = (this__9982.start > this__9982.end);
if(and__3822__auto____9983)
{return (this__9982.step === 0);
} else
{return and__3822__auto____9983;
}
})())
{return this__9982.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9984 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9984.start + (n * this__9984.step));
} else
{if((function (){var and__3822__auto____9985 = (this__9984.start > this__9984.end);
if(and__3822__auto____9985)
{return (this__9984.step === 0);
} else
{return and__3822__auto____9985;
}
})())
{return this__9984.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9986 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9986.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9989 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9989)
{var s__9990 = temp__3974__auto____9989;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9990),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9990)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9997 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9997)
{var s__9998 = temp__3974__auto____9997;
var fst__9999 = cljs.core.first.call(null,s__9998);
var fv__10000 = f.call(null,fst__9999);
var run__10001 = cljs.core.cons.call(null,fst__9999,cljs.core.take_while.call(null,(function (p1__9991_SHARP_){
return cljs.core._EQ_.call(null,fv__10000,f.call(null,p1__9991_SHARP_));
}),cljs.core.next.call(null,s__9998)));
return cljs.core.cons.call(null,run__10001,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__10001),s__9998))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____10016 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____10016)
{var s__10017 = temp__3971__auto____10016;
return reductions.call(null,f,cljs.core.first.call(null,s__10017),cljs.core.rest.call(null,s__10017));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10018 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10018)
{var s__10019 = temp__3974__auto____10018;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__10019)),cljs.core.rest.call(null,s__10019));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__10022 = null;
var G__10022__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__10022__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__10022__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__10022__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__10022__4 = (function() { 
var G__10023__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__10023 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10023__delegate.call(this, x, y, z, args);
};
G__10023.cljs$lang$maxFixedArity = 3;
G__10023.cljs$lang$applyTo = (function (arglist__10024){
var x = cljs.core.first(arglist__10024);
var y = cljs.core.first(cljs.core.next(arglist__10024));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10024)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10024)));
return G__10023__delegate(x, y, z, args);
});
G__10023.cljs$lang$arity$variadic = G__10023__delegate;
return G__10023;
})()
;
G__10022 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10022__0.call(this);
case 1:
return G__10022__1.call(this,x);
case 2:
return G__10022__2.call(this,x,y);
case 3:
return G__10022__3.call(this,x,y,z);
default:
return G__10022__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10022.cljs$lang$maxFixedArity = 3;
G__10022.cljs$lang$applyTo = G__10022__4.cljs$lang$applyTo;
return G__10022;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__10025 = null;
var G__10025__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__10025__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__10025__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__10025__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__10025__4 = (function() { 
var G__10026__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10026 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10026__delegate.call(this, x, y, z, args);
};
G__10026.cljs$lang$maxFixedArity = 3;
G__10026.cljs$lang$applyTo = (function (arglist__10027){
var x = cljs.core.first(arglist__10027);
var y = cljs.core.first(cljs.core.next(arglist__10027));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10027)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10027)));
return G__10026__delegate(x, y, z, args);
});
G__10026.cljs$lang$arity$variadic = G__10026__delegate;
return G__10026;
})()
;
G__10025 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10025__0.call(this);
case 1:
return G__10025__1.call(this,x);
case 2:
return G__10025__2.call(this,x,y);
case 3:
return G__10025__3.call(this,x,y,z);
default:
return G__10025__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10025.cljs$lang$maxFixedArity = 3;
G__10025.cljs$lang$applyTo = G__10025__4.cljs$lang$applyTo;
return G__10025;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__10028 = null;
var G__10028__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__10028__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__10028__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__10028__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__10028__4 = (function() { 
var G__10029__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__10029 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10029__delegate.call(this, x, y, z, args);
};
G__10029.cljs$lang$maxFixedArity = 3;
G__10029.cljs$lang$applyTo = (function (arglist__10030){
var x = cljs.core.first(arglist__10030);
var y = cljs.core.first(cljs.core.next(arglist__10030));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10030)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10030)));
return G__10029__delegate(x, y, z, args);
});
G__10029.cljs$lang$arity$variadic = G__10029__delegate;
return G__10029;
})()
;
G__10028 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10028__0.call(this);
case 1:
return G__10028__1.call(this,x);
case 2:
return G__10028__2.call(this,x,y);
case 3:
return G__10028__3.call(this,x,y,z);
default:
return G__10028__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10028.cljs$lang$maxFixedArity = 3;
G__10028.cljs$lang$applyTo = G__10028__4.cljs$lang$applyTo;
return G__10028;
})()
});
var juxt__4 = (function() { 
var G__10031__delegate = function (f,g,h,fs){
var fs__10021 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__10032 = null;
var G__10032__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__10002_SHARP_,p2__10003_SHARP_){
return cljs.core.conj.call(null,p1__10002_SHARP_,p2__10003_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__10021);
});
var G__10032__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__10004_SHARP_,p2__10005_SHARP_){
return cljs.core.conj.call(null,p1__10004_SHARP_,p2__10005_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__10021);
});
var G__10032__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__10006_SHARP_,p2__10007_SHARP_){
return cljs.core.conj.call(null,p1__10006_SHARP_,p2__10007_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__10021);
});
var G__10032__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__10008_SHARP_,p2__10009_SHARP_){
return cljs.core.conj.call(null,p1__10008_SHARP_,p2__10009_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__10021);
});
var G__10032__4 = (function() { 
var G__10033__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__10010_SHARP_,p2__10011_SHARP_){
return cljs.core.conj.call(null,p1__10010_SHARP_,cljs.core.apply.call(null,p2__10011_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__10021);
};
var G__10033 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10033__delegate.call(this, x, y, z, args);
};
G__10033.cljs$lang$maxFixedArity = 3;
G__10033.cljs$lang$applyTo = (function (arglist__10034){
var x = cljs.core.first(arglist__10034);
var y = cljs.core.first(cljs.core.next(arglist__10034));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10034)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10034)));
return G__10033__delegate(x, y, z, args);
});
G__10033.cljs$lang$arity$variadic = G__10033__delegate;
return G__10033;
})()
;
G__10032 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10032__0.call(this);
case 1:
return G__10032__1.call(this,x);
case 2:
return G__10032__2.call(this,x,y);
case 3:
return G__10032__3.call(this,x,y,z);
default:
return G__10032__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10032.cljs$lang$maxFixedArity = 3;
G__10032.cljs$lang$applyTo = G__10032__4.cljs$lang$applyTo;
return G__10032;
})()
};
var G__10031 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10031__delegate.call(this, f, g, h, fs);
};
G__10031.cljs$lang$maxFixedArity = 3;
G__10031.cljs$lang$applyTo = (function (arglist__10035){
var f = cljs.core.first(arglist__10035);
var g = cljs.core.first(cljs.core.next(arglist__10035));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10035)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10035)));
return G__10031__delegate(f, g, h, fs);
});
G__10031.cljs$lang$arity$variadic = G__10031__delegate;
return G__10031;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__10038 = cljs.core.next.call(null,coll);
coll = G__10038;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____10037 = cljs.core.seq.call(null,coll);
if(and__3822__auto____10037)
{return (n > 0);
} else
{return and__3822__auto____10037;
}
})()))
{{
var G__10039 = (n - 1);
var G__10040 = cljs.core.next.call(null,coll);
n = G__10039;
coll = G__10040;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__10042 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__10042),s))
{if((cljs.core.count.call(null,matches__10042) === 1))
{return cljs.core.first.call(null,matches__10042);
} else
{return cljs.core.vec.call(null,matches__10042);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__10044 = re.exec(s);
if((matches__10044 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__10044) === 1))
{return cljs.core.first.call(null,matches__10044);
} else
{return cljs.core.vec.call(null,matches__10044);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__10049 = cljs.core.re_find.call(null,re,s);
var match_idx__10050 = s.search(re);
var match_str__10051 = ((cljs.core.coll_QMARK_.call(null,match_data__10049))?cljs.core.first.call(null,match_data__10049):match_data__10049);
var post_match__10052 = cljs.core.subs.call(null,s,(match_idx__10050 + cljs.core.count.call(null,match_str__10051)));
if(cljs.core.truth_(match_data__10049))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__10049,re_seq.call(null,re,post_match__10052));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__10059__10060 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___10061 = cljs.core.nth.call(null,vec__10059__10060,0,null);
var flags__10062 = cljs.core.nth.call(null,vec__10059__10060,1,null);
var pattern__10063 = cljs.core.nth.call(null,vec__10059__10060,2,null);
return (new RegExp(pattern__10063,flags__10062));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__10053_SHARP_){
return print_one.call(null,p1__10053_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____10073 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____10073))
{var and__3822__auto____10077 = (function (){var G__10074__10075 = obj;
if(G__10074__10075)
{if((function (){var or__3824__auto____10076 = (G__10074__10075.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____10076)
{return or__3824__auto____10076;
} else
{return G__10074__10075.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__10074__10075.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10074__10075);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10074__10075);
}
})();
if(cljs.core.truth_(and__3822__auto____10077))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____10077;
}
} else
{return and__3822__auto____10073;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____10078 = !((obj == null));
if(and__3822__auto____10078)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____10078;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__10079__10080 = obj;
if(G__10079__10080)
{if((function (){var or__3824__auto____10081 = (G__10079__10080.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____10081)
{return or__3824__auto____10081;
} else
{return G__10079__10080.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__10079__10080.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10079__10080);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10079__10080);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__10101 = (new goog.string.StringBuffer());
var G__10102__10103 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10102__10103)
{var string__10104 = cljs.core.first.call(null,G__10102__10103);
var G__10102__10105 = G__10102__10103;
while(true){
sb__10101.append(string__10104);
var temp__3974__auto____10106 = cljs.core.next.call(null,G__10102__10105);
if(temp__3974__auto____10106)
{var G__10102__10107 = temp__3974__auto____10106;
{
var G__10120 = cljs.core.first.call(null,G__10102__10107);
var G__10121 = G__10102__10107;
string__10104 = G__10120;
G__10102__10105 = G__10121;
continue;
}
} else
{}
break;
}
} else
{}
var G__10108__10109 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10108__10109)
{var obj__10110 = cljs.core.first.call(null,G__10108__10109);
var G__10108__10111 = G__10108__10109;
while(true){
sb__10101.append(" ");
var G__10112__10113 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10110,opts));
if(G__10112__10113)
{var string__10114 = cljs.core.first.call(null,G__10112__10113);
var G__10112__10115 = G__10112__10113;
while(true){
sb__10101.append(string__10114);
var temp__3974__auto____10116 = cljs.core.next.call(null,G__10112__10115);
if(temp__3974__auto____10116)
{var G__10112__10117 = temp__3974__auto____10116;
{
var G__10122 = cljs.core.first.call(null,G__10112__10117);
var G__10123 = G__10112__10117;
string__10114 = G__10122;
G__10112__10115 = G__10123;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10118 = cljs.core.next.call(null,G__10108__10111);
if(temp__3974__auto____10118)
{var G__10108__10119 = temp__3974__auto____10118;
{
var G__10124 = cljs.core.first.call(null,G__10108__10119);
var G__10125 = G__10108__10119;
obj__10110 = G__10124;
G__10108__10111 = G__10125;
continue;
}
} else
{}
break;
}
} else
{}
return sb__10101;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__10127 = cljs.core.pr_sb.call(null,objs,opts);
sb__10127.append("\n");
return [cljs.core.str(sb__10127)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__10146__10147 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10146__10147)
{var string__10148 = cljs.core.first.call(null,G__10146__10147);
var G__10146__10149 = G__10146__10147;
while(true){
cljs.core.string_print.call(null,string__10148);
var temp__3974__auto____10150 = cljs.core.next.call(null,G__10146__10149);
if(temp__3974__auto____10150)
{var G__10146__10151 = temp__3974__auto____10150;
{
var G__10164 = cljs.core.first.call(null,G__10146__10151);
var G__10165 = G__10146__10151;
string__10148 = G__10164;
G__10146__10149 = G__10165;
continue;
}
} else
{}
break;
}
} else
{}
var G__10152__10153 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10152__10153)
{var obj__10154 = cljs.core.first.call(null,G__10152__10153);
var G__10152__10155 = G__10152__10153;
while(true){
cljs.core.string_print.call(null," ");
var G__10156__10157 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10154,opts));
if(G__10156__10157)
{var string__10158 = cljs.core.first.call(null,G__10156__10157);
var G__10156__10159 = G__10156__10157;
while(true){
cljs.core.string_print.call(null,string__10158);
var temp__3974__auto____10160 = cljs.core.next.call(null,G__10156__10159);
if(temp__3974__auto____10160)
{var G__10156__10161 = temp__3974__auto____10160;
{
var G__10166 = cljs.core.first.call(null,G__10156__10161);
var G__10167 = G__10156__10161;
string__10158 = G__10166;
G__10156__10159 = G__10167;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10162 = cljs.core.next.call(null,G__10152__10155);
if(temp__3974__auto____10162)
{var G__10152__10163 = temp__3974__auto____10162;
{
var G__10168 = cljs.core.first.call(null,G__10152__10163);
var G__10169 = G__10152__10163;
obj__10154 = G__10168;
G__10152__10155 = G__10169;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__10170){
var objs = cljs.core.seq(arglist__10170);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__10171){
var objs = cljs.core.seq(arglist__10171);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__10172){
var objs = cljs.core.seq(arglist__10172);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__10173){
var objs = cljs.core.seq(arglist__10173);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__10174){
var objs = cljs.core.seq(arglist__10174);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__10175){
var objs = cljs.core.seq(arglist__10175);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__10176){
var objs = cljs.core.seq(arglist__10176);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__10177){
var objs = cljs.core.seq(arglist__10177);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__10178){
var fmt = cljs.core.first(arglist__10178);
var args = cljs.core.rest(arglist__10178);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10179 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10179,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10180 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10180,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10181 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10181,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10182 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10182))
{var nspc__10183 = temp__3974__auto____10182;
return [cljs.core.str(nspc__10183),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____10184 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10184))
{var nspc__10185 = temp__3974__auto____10184;
return [cljs.core.str(nspc__10185),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10186 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10186,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__10188 = (function (n,len){
var ns__10187 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10187) < len))
{{
var G__10190 = [cljs.core.str("0"),cljs.core.str(ns__10187)].join('');
ns__10187 = G__10190;
continue;
}
} else
{return ns__10187;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10188.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10188.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10188.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10188.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10188.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10188.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10189 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10189,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10191 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10192 = this;
var G__10193__10194 = cljs.core.seq.call(null,this__10192.watches);
if(G__10193__10194)
{var G__10196__10198 = cljs.core.first.call(null,G__10193__10194);
var vec__10197__10199 = G__10196__10198;
var key__10200 = cljs.core.nth.call(null,vec__10197__10199,0,null);
var f__10201 = cljs.core.nth.call(null,vec__10197__10199,1,null);
var G__10193__10202 = G__10193__10194;
var G__10196__10203 = G__10196__10198;
var G__10193__10204 = G__10193__10202;
while(true){
var vec__10205__10206 = G__10196__10203;
var key__10207 = cljs.core.nth.call(null,vec__10205__10206,0,null);
var f__10208 = cljs.core.nth.call(null,vec__10205__10206,1,null);
var G__10193__10209 = G__10193__10204;
f__10208.call(null,key__10207,this$,oldval,newval);
var temp__3974__auto____10210 = cljs.core.next.call(null,G__10193__10209);
if(temp__3974__auto____10210)
{var G__10193__10211 = temp__3974__auto____10210;
{
var G__10218 = cljs.core.first.call(null,G__10193__10211);
var G__10219 = G__10193__10211;
G__10196__10203 = G__10218;
G__10193__10204 = G__10219;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__10212 = this;
return this$.watches = cljs.core.assoc.call(null,this__10212.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10213 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10213.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10214 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10214.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10215 = this;
return this__10215.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10216 = this;
return this__10216.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10217 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__10231__delegate = function (x,p__10220){
var map__10226__10227 = p__10220;
var map__10226__10228 = ((cljs.core.seq_QMARK_.call(null,map__10226__10227))?cljs.core.apply.call(null,cljs.core.hash_map,map__10226__10227):map__10226__10227);
var validator__10229 = cljs.core._lookup.call(null,map__10226__10228,"\uFDD0'validator",null);
var meta__10230 = cljs.core._lookup.call(null,map__10226__10228,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10230,validator__10229,null));
};
var G__10231 = function (x,var_args){
var p__10220 = null;
if (goog.isDef(var_args)) {
  p__10220 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10231__delegate.call(this, x, p__10220);
};
G__10231.cljs$lang$maxFixedArity = 1;
G__10231.cljs$lang$applyTo = (function (arglist__10232){
var x = cljs.core.first(arglist__10232);
var p__10220 = cljs.core.rest(arglist__10232);
return G__10231__delegate(x, p__10220);
});
G__10231.cljs$lang$arity$variadic = G__10231__delegate;
return G__10231;
})()
;
atom = function(x,var_args){
var p__10220 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____10236 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10236))
{var validate__10237 = temp__3974__auto____10236;
if(cljs.core.truth_(validate__10237.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__10238 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__10238,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__10239__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__10239 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10239__delegate.call(this, a, f, x, y, z, more);
};
G__10239.cljs$lang$maxFixedArity = 5;
G__10239.cljs$lang$applyTo = (function (arglist__10240){
var a = cljs.core.first(arglist__10240);
var f = cljs.core.first(cljs.core.next(arglist__10240));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10240)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10240))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10240)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10240)))));
return G__10239__delegate(a, f, x, y, z, more);
});
G__10239.cljs$lang$arity$variadic = G__10239__delegate;
return G__10239;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10241){
var iref = cljs.core.first(arglist__10241);
var f = cljs.core.first(cljs.core.next(arglist__10241));
var args = cljs.core.rest(cljs.core.next(arglist__10241));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__10242 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__10242.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10243 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__10243.state,(function (p__10244){
var map__10245__10246 = p__10244;
var map__10245__10247 = ((cljs.core.seq_QMARK_.call(null,map__10245__10246))?cljs.core.apply.call(null,cljs.core.hash_map,map__10245__10246):map__10245__10246);
var curr_state__10248 = map__10245__10247;
var done__10249 = cljs.core._lookup.call(null,map__10245__10247,"\uFDD0'done",null);
if(cljs.core.truth_(done__10249))
{return curr_state__10248;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__10243.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__10270__10271 = options;
var map__10270__10272 = ((cljs.core.seq_QMARK_.call(null,map__10270__10271))?cljs.core.apply.call(null,cljs.core.hash_map,map__10270__10271):map__10270__10271);
var keywordize_keys__10273 = cljs.core._lookup.call(null,map__10270__10272,"\uFDD0'keywordize-keys",null);
var keyfn__10274 = (cljs.core.truth_(keywordize_keys__10273)?cljs.core.keyword:cljs.core.str);
var f__10289 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2460__auto____10288 = (function iter__10282(s__10283){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10283__10286 = s__10283;
while(true){
if(cljs.core.seq.call(null,s__10283__10286))
{var k__10287 = cljs.core.first.call(null,s__10283__10286);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__10274.call(null,k__10287),thisfn.call(null,(x[k__10287]))], true),iter__10282.call(null,cljs.core.rest.call(null,s__10283__10286)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2460__auto____10288.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__10289.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10290){
var x = cljs.core.first(arglist__10290);
var options = cljs.core.rest(arglist__10290);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__10295 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10299__delegate = function (args){
var temp__3971__auto____10296 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__10295),args,null);
if(cljs.core.truth_(temp__3971__auto____10296))
{var v__10297 = temp__3971__auto____10296;
return v__10297;
} else
{var ret__10298 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__10295,cljs.core.assoc,args,ret__10298);
return ret__10298;
}
};
var G__10299 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10299__delegate.call(this, args);
};
G__10299.cljs$lang$maxFixedArity = 0;
G__10299.cljs$lang$applyTo = (function (arglist__10300){
var args = cljs.core.seq(arglist__10300);;
return G__10299__delegate(args);
});
G__10299.cljs$lang$arity$variadic = G__10299__delegate;
return G__10299;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__10302 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__10302))
{{
var G__10303 = ret__10302;
f = G__10303;
continue;
}
} else
{return ret__10302;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10304__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__10304 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10304__delegate.call(this, f, args);
};
G__10304.cljs$lang$maxFixedArity = 1;
G__10304.cljs$lang$applyTo = (function (arglist__10305){
var f = cljs.core.first(arglist__10305);
var args = cljs.core.rest(arglist__10305);
return G__10304__delegate(f, args);
});
G__10304.cljs$lang$arity$variadic = G__10304__delegate;
return G__10304;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__10307 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__10307,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__10307,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____10316 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____10316)
{return or__3824__auto____10316;
} else
{var or__3824__auto____10317 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10317)
{return or__3824__auto____10317;
} else
{var and__3822__auto____10318 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____10318)
{var and__3822__auto____10319 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____10319)
{var and__3822__auto____10320 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____10320)
{var ret__10321 = true;
var i__10322 = 0;
while(true){
if((function (){var or__3824__auto____10323 = cljs.core.not.call(null,ret__10321);
if(or__3824__auto____10323)
{return or__3824__auto____10323;
} else
{return (i__10322 === cljs.core.count.call(null,parent));
}
})())
{return ret__10321;
} else
{{
var G__10324 = isa_QMARK_.call(null,h,child.call(null,i__10322),parent.call(null,i__10322));
var G__10325 = (i__10322 + 1);
ret__10321 = G__10324;
i__10322 = G__10325;
continue;
}
}
break;
}
} else
{return and__3822__auto____10320;
}
} else
{return and__3822__auto____10319;
}
} else
{return and__3822__auto____10318;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728))))].join('')));
}
var tp__10334 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10335 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10336 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10337 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____10338 = ((cljs.core.contains_QMARK_.call(null,tp__10334.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__10336.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__10336.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__10334,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__10337.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10335,parent,ta__10336),"\uFDD0'descendants":tf__10337.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10336,tag,td__10335)});
})());
if(cljs.core.truth_(or__3824__auto____10338))
{return or__3824__auto____10338;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__10343 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10344 = (cljs.core.truth_(parentMap__10343.call(null,tag))?cljs.core.disj.call(null,parentMap__10343.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__10345 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10344))?cljs.core.assoc.call(null,parentMap__10343,tag,childsParents__10344):cljs.core.dissoc.call(null,parentMap__10343,tag));
var deriv_seq__10346 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10326_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10326_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10326_SHARP_),cljs.core.second.call(null,p1__10326_SHARP_)));
}),cljs.core.seq.call(null,newParents__10345)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10343.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__10327_SHARP_,p2__10328_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__10327_SHARP_,p2__10328_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10346));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__10354 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____10356 = (cljs.core.truth_((function (){var and__3822__auto____10355 = xprefs__10354;
if(cljs.core.truth_(and__3822__auto____10355))
{return xprefs__10354.call(null,y);
} else
{return and__3822__auto____10355;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10356))
{return or__3824__auto____10356;
} else
{var or__3824__auto____10358 = (function (){var ps__10357 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10357) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10357),prefer_table)))
{} else
{}
{
var G__10361 = cljs.core.rest.call(null,ps__10357);
ps__10357 = G__10361;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10358))
{return or__3824__auto____10358;
} else
{var or__3824__auto____10360 = (function (){var ps__10359 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10359) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10359),y,prefer_table)))
{} else
{}
{
var G__10362 = cljs.core.rest.call(null,ps__10359);
ps__10359 = G__10362;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10360))
{return or__3824__auto____10360;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10364 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10364))
{return or__3824__auto____10364;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10382 = cljs.core.reduce.call(null,(function (be,p__10374){
var vec__10375__10376 = p__10374;
var k__10377 = cljs.core.nth.call(null,vec__10375__10376,0,null);
var ___10378 = cljs.core.nth.call(null,vec__10375__10376,1,null);
var e__10379 = vec__10375__10376;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10377))
{var be2__10381 = (cljs.core.truth_((function (){var or__3824__auto____10380 = (be == null);
if(or__3824__auto____10380)
{return or__3824__auto____10380;
} else
{return cljs.core.dominates.call(null,k__10377,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10379:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10381),k__10377,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10377),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10381)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10381;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10382))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10382));
return cljs.core.second.call(null,best_entry__10382);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____10387 = mf;
if(and__3822__auto____10387)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10387;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2361__auto____10388 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10389 = (cljs.core._reset[goog.typeOf(x__2361__auto____10388)]);
if(or__3824__auto____10389)
{return or__3824__auto____10389;
} else
{var or__3824__auto____10390 = (cljs.core._reset["_"]);
if(or__3824__auto____10390)
{return or__3824__auto____10390;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10395 = mf;
if(and__3822__auto____10395)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10395;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2361__auto____10396 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10397 = (cljs.core._add_method[goog.typeOf(x__2361__auto____10396)]);
if(or__3824__auto____10397)
{return or__3824__auto____10397;
} else
{var or__3824__auto____10398 = (cljs.core._add_method["_"]);
if(or__3824__auto____10398)
{return or__3824__auto____10398;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10403 = mf;
if(and__3822__auto____10403)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10403;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2361__auto____10404 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10405 = (cljs.core._remove_method[goog.typeOf(x__2361__auto____10404)]);
if(or__3824__auto____10405)
{return or__3824__auto____10405;
} else
{var or__3824__auto____10406 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10406)
{return or__3824__auto____10406;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10411 = mf;
if(and__3822__auto____10411)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10411;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2361__auto____10412 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10413 = (cljs.core._prefer_method[goog.typeOf(x__2361__auto____10412)]);
if(or__3824__auto____10413)
{return or__3824__auto____10413;
} else
{var or__3824__auto____10414 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10414)
{return or__3824__auto____10414;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10419 = mf;
if(and__3822__auto____10419)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10419;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2361__auto____10420 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10421 = (cljs.core._get_method[goog.typeOf(x__2361__auto____10420)]);
if(or__3824__auto____10421)
{return or__3824__auto____10421;
} else
{var or__3824__auto____10422 = (cljs.core._get_method["_"]);
if(or__3824__auto____10422)
{return or__3824__auto____10422;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10427 = mf;
if(and__3822__auto____10427)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10427;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2361__auto____10428 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10429 = (cljs.core._methods[goog.typeOf(x__2361__auto____10428)]);
if(or__3824__auto____10429)
{return or__3824__auto____10429;
} else
{var or__3824__auto____10430 = (cljs.core._methods["_"]);
if(or__3824__auto____10430)
{return or__3824__auto____10430;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10435 = mf;
if(and__3822__auto____10435)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10435;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2361__auto____10436 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10437 = (cljs.core._prefers[goog.typeOf(x__2361__auto____10436)]);
if(or__3824__auto____10437)
{return or__3824__auto____10437;
} else
{var or__3824__auto____10438 = (cljs.core._prefers["_"]);
if(or__3824__auto____10438)
{return or__3824__auto____10438;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10443 = mf;
if(and__3822__auto____10443)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10443;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2361__auto____10444 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10445 = (cljs.core._dispatch[goog.typeOf(x__2361__auto____10444)]);
if(or__3824__auto____10445)
{return or__3824__auto____10445;
} else
{var or__3824__auto____10446 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10446)
{return or__3824__auto____10446;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10449 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10450 = cljs.core._get_method.call(null,mf,dispatch_val__10449);
if(cljs.core.truth_(target_fn__10450))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10449)].join('')));
}
return cljs.core.apply.call(null,target_fn__10450,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10451 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10452 = this;
cljs.core.swap_BANG_.call(null,this__10452.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10452.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10452.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10452.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10453 = this;
cljs.core.swap_BANG_.call(null,this__10453.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10453.method_cache,this__10453.method_table,this__10453.cached_hierarchy,this__10453.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10454 = this;
cljs.core.swap_BANG_.call(null,this__10454.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10454.method_cache,this__10454.method_table,this__10454.cached_hierarchy,this__10454.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10455 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10455.cached_hierarchy),cljs.core.deref.call(null,this__10455.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10455.method_cache,this__10455.method_table,this__10455.cached_hierarchy,this__10455.hierarchy);
}
var temp__3971__auto____10456 = cljs.core.deref.call(null,this__10455.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10456))
{var target_fn__10457 = temp__3971__auto____10456;
return target_fn__10457;
} else
{var temp__3971__auto____10458 = cljs.core.find_and_cache_best_method.call(null,this__10455.name,dispatch_val,this__10455.hierarchy,this__10455.method_table,this__10455.prefer_table,this__10455.method_cache,this__10455.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10458))
{var target_fn__10459 = temp__3971__auto____10458;
return target_fn__10459;
} else
{return cljs.core.deref.call(null,this__10455.method_table).call(null,this__10455.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10460 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10460.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10460.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10460.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10460.method_cache,this__10460.method_table,this__10460.cached_hierarchy,this__10460.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10461 = this;
return cljs.core.deref.call(null,this__10461.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10462 = this;
return cljs.core.deref.call(null,this__10462.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10463 = this;
return cljs.core.do_dispatch.call(null,mf,this__10463.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10465__delegate = function (_,args){
var self__10464 = this;
return cljs.core._dispatch.call(null,self__10464,args);
};
var G__10465 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10465__delegate.call(this, _, args);
};
G__10465.cljs$lang$maxFixedArity = 1;
G__10465.cljs$lang$applyTo = (function (arglist__10466){
var _ = cljs.core.first(arglist__10466);
var args = cljs.core.rest(arglist__10466);
return G__10465__delegate(_, args);
});
G__10465.cljs$lang$arity$variadic = G__10465__delegate;
return G__10465;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10467 = this;
return cljs.core._dispatch.call(null,self__10467,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10468 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10470,_){
var this__10469 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10469.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10471 = this;
var and__3822__auto____10472 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____10472)
{return (this__10471.uuid === other.uuid);
} else
{return and__3822__auto____10472;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__10473 = this;
var this__10474 = this;
return cljs.core.pr_str.call(null,this__10474);
});
cljs.core.UUID;
