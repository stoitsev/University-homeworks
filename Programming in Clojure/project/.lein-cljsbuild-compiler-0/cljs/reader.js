goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3822__auto____10647 = reader;
if(and__3822__auto____10647)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3822__auto____10647;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__2361__auto____10648 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____10649 = (cljs.reader.read_char[goog.typeOf(x__2361__auto____10648)]);
if(or__3824__auto____10649)
{return or__3824__auto____10649;
} else
{var or__3824__auto____10650 = (cljs.reader.read_char["_"]);
if(or__3824__auto____10650)
{return or__3824__auto____10650;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3822__auto____10655 = reader;
if(and__3822__auto____10655)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3822__auto____10655;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__2361__auto____10656 = (((reader == null))?null:reader);
return (function (){var or__3824__auto____10657 = (cljs.reader.unread[goog.typeOf(x__2361__auto____10656)]);
if(or__3824__auto____10657)
{return or__3824__auto____10657;
} else
{var or__3824__auto____10658 = (cljs.reader.unread["_"]);
if(or__3824__auto____10658)
{return or__3824__auto____10658;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__2307__auto__){
return cljs.core.list.call(null,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__10659 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__10659.buffer_atom)))
{var idx__10660 = cljs.core.deref.call(null,this__10659.index_atom);
cljs.core.swap_BANG_.call(null,this__10659.index_atom,cljs.core.inc);
return (this__10659.s[idx__10660]);
} else
{var buf__10661 = cljs.core.deref.call(null,this__10659.buffer_atom);
cljs.core.swap_BANG_.call(null,this__10659.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__10661);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__10662 = this;
return cljs.core.swap_BANG_.call(null,this__10662.buffer_atom,(function (p1__10642_SHARP_){
return cljs.core.cons.call(null,ch,p1__10642_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3824__auto____10664 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3824__auto____10664))
{return or__3824__auto____10664;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric(ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3824__auto____10669 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3824__auto____10669)
{return or__3824__auto____10669;
} else
{var and__3822__auto____10671 = (function (){var or__3824__auto____10670 = ("+" === initch);
if(or__3824__auto____10670)
{return or__3824__auto____10670;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3822__auto____10671))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__10672 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__10672);
return next_ch__10672;
})());
} else
{return and__3822__auto____10671;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,msg)));
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__10673){
var rdr = cljs.core.first(arglist__10673);
var msg = cljs.core.rest(arglist__10673);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3822__auto____10677 = !((ch === "#"));
if(and__3822__auto____10677)
{var and__3822__auto____10678 = !((ch === "'"));
if(and__3822__auto____10678)
{var and__3822__auto____10679 = !((ch === ":"));
if(and__3822__auto____10679)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3822__auto____10679;
}
} else
{return and__3822__auto____10678;
}
} else
{return and__3822__auto____10677;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__10684 = (new goog.string.StringBuffer(initch));
var ch__10685 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3824__auto____10686 = (ch__10685 == null);
if(or__3824__auto____10686)
{return or__3824__auto____10686;
} else
{var or__3824__auto____10687 = cljs.reader.whitespace_QMARK_.call(null,ch__10685);
if(or__3824__auto____10687)
{return or__3824__auto____10687;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__10685);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__10685);
return sb__10684.toString();
} else
{{
var G__10688 = (function (){sb__10684.append(ch__10685);
return sb__10684;
})();
var G__10689 = cljs.reader.read_char.call(null,rdr);
sb__10684 = G__10688;
ch__10685 = G__10689;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){
while(true){
var ch__10693 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3824__auto____10694 = (ch__10693 === "n");
if(or__3824__auto____10694)
{return or__3824__auto____10694;
} else
{var or__3824__auto____10695 = (ch__10693 === "r");
if(or__3824__auto____10695)
{return or__3824__auto____10695;
} else
{return (ch__10693 == null);
}
}
})())
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.re_find_STAR_ = (function re_find_STAR_(re,s){
var matches__10697 = re.exec(s);
if((matches__10697 == null))
{return null;
} else
{if((matches__10697.length === 1))
{return (matches__10697[0]);
} else
{return matches__10697;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__10705 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__10706 = (groups__10705[2]);
if(!((function (){var or__3824__auto____10707 = (group3__10706 == null);
if(or__3824__auto____10707)
{return or__3824__auto____10707;
} else
{return (group3__10706.length < 1);
}
})()))
{return 0;
} else
{var negate__10708 = ((("-" === (groups__10705[1])))?-1:1);
var a__10709 = (cljs.core.truth_((groups__10705[3]))?[(groups__10705[3]),10]:(cljs.core.truth_((groups__10705[4]))?[(groups__10705[4]),16]:(cljs.core.truth_((groups__10705[5]))?[(groups__10705[5]),8]:(cljs.core.truth_((groups__10705[7]))?[(groups__10705[7]),parseInt((groups__10705[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__10710 = (a__10709[0]);
var radix__10711 = (a__10709[1]);
if((n__10710 == null))
{return null;
} else
{return (negate__10708 * parseInt(n__10710,radix__10711));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__10715 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__10716 = (groups__10715[1]);
var denominator__10717 = (groups__10715[2]);
return (parseInt(numinator__10716) / parseInt(denominator__10717));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__10720 = re.exec(s);
if((function (){var and__3822__auto____10721 = !((matches__10720 == null));
if(and__3822__auto____10721)
{return ((matches__10720[0]) === s);
} else
{return and__3822__auto____10721;
}
})())
{if((matches__10720.length === 1))
{return (matches__10720[0]);
} else
{return matches__10720;
}
} else
{return null;
}
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){
if((c === "t"))
{return "\t";
} else
{if((c === "r"))
{return "\r";
} else
{if((c === "n"))
{return "\n";
} else
{if((c === "\\"))
{return "\\";
} else
{if((c === "\""))
{return "\"";
} else
{if((c === "b"))
{return "\b";
} else
{if((c === "f"))
{return "\f";
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function read_2_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.read_4_chars = (function read_4_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{2}");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{4}");
cljs.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljs.core.truth_(cljs.core.re_matches.call(null,unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",escape_char,unicode_str);
}
});
cljs.reader.make_unicode_char = (function make_unicode_char(code_str){
var code__10723 = parseInt(code_str,16);
return String.fromCharCode(code__10723);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__10726 = cljs.reader.read_char.call(null,reader);
var mapresult__10727 = cljs.reader.escape_char_map.call(null,ch__10726);
if(cljs.core.truth_(mapresult__10727))
{return mapresult__10727;
} else
{if((ch__10726 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__10726,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__10726 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__10726,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__10726))
{return String.fromCharCode(ch__10726);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__10726);
} else
{return null;
}
}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__10729 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__10729)))
{{
var G__10730 = cljs.reader.read_char.call(null,rdr);
ch__10729 = G__10730;
continue;
}
} else
{return ch__10729;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__10737 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__10738 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__10738))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if((delim === ch__10738))
{return cljs.core.persistent_BANG_.call(null,a__10737);
} else
{var temp__3971__auto____10739 = cljs.reader.macros.call(null,ch__10738);
if(cljs.core.truth_(temp__3971__auto____10739))
{var macrofn__10740 = temp__3971__auto____10739;
var mret__10741 = macrofn__10740.call(null,rdr,ch__10738);
{
var G__10743 = (((mret__10741 === rdr))?a__10737:cljs.core.conj_BANG_.call(null,a__10737,mret__10741));
a__10737 = G__10743;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__10738);
var o__10742 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__10744 = (((o__10742 === rdr))?a__10737:cljs.core.conj_BANG_.call(null,a__10737,o__10742));
a__10737 = G__10744;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__10749 = cljs.reader.read_char.call(null,rdr);
var dm__10750 = cljs.reader.dispatch_macros.call(null,ch__10749);
if(cljs.core.truth_(dm__10750))
{return dm__10750.call(null,rdr,_);
} else
{var temp__3971__auto____10751 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__10749);
if(cljs.core.truth_(temp__3971__auto____10751))
{var obj__10752 = temp__3971__auto____10751;
return obj__10752;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__10749);
}
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__10754 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__10754)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__10754);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__10761 = (new goog.string.StringBuffer(initch));
var ch__10762 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3824__auto____10763 = (ch__10762 == null);
if(or__3824__auto____10763)
{return or__3824__auto____10763;
} else
{var or__3824__auto____10764 = cljs.reader.whitespace_QMARK_.call(null,ch__10762);
if(or__3824__auto____10764)
{return or__3824__auto____10764;
} else
{return cljs.reader.macros.call(null,ch__10762);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__10762);
var s__10765 = buffer__10761.toString();
var or__3824__auto____10766 = cljs.reader.match_number.call(null,s__10765);
if(cljs.core.truth_(or__3824__auto____10766))
{return or__3824__auto____10766;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__10765,"]");
}
} else
{{
var G__10767 = (function (){buffer__10761.append(ch__10762);
return buffer__10761;
})();
var G__10768 = cljs.reader.read_char.call(null,reader);
buffer__10761 = G__10767;
ch__10762 = G__10768;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__10771 = (new goog.string.StringBuffer());
var ch__10772 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__10772 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(("\\" === ch__10772))
{{
var G__10773 = (function (){buffer__10771.append(cljs.reader.escape_char.call(null,buffer__10771,reader));
return buffer__10771;
})();
var G__10774 = cljs.reader.read_char.call(null,reader);
buffer__10771 = G__10773;
ch__10772 = G__10774;
continue;
}
} else
{if(("\"" === ch__10772))
{return buffer__10771.toString();
} else
{if("\uFDD0'default")
{{
var G__10775 = (function (){buffer__10771.append(ch__10772);
return buffer__10771;
})();
var G__10776 = cljs.reader.read_char.call(null,reader);
buffer__10771 = G__10775;
ch__10772 = G__10776;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = (function special_symbols(t,not_found){
if((t === "nil"))
{return null;
} else
{if((t === "true"))
{return true;
} else
{if((t === "false"))
{return false;
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
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__10778 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__10778,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__10778,0,token__10778.indexOf("/")),cljs.core.subs.call(null,token__10778,(token__10778.indexOf("/") + 1),token__10778.length));
} else
{return cljs.reader.special_symbols.call(null,token__10778,cljs.core.symbol.call(null,token__10778));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__10788 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__10789 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__10788);
var token__10790 = (a__10789[0]);
var ns__10791 = (a__10789[1]);
var name__10792 = (a__10789[2]);
if(cljs.core.truth_((function (){var or__3824__auto____10794 = (function (){var and__3822__auto____10793 = !((void 0 === ns__10791));
if(and__3822__auto____10793)
{return (ns__10791.substring((ns__10791.length - 2),ns__10791.length) === ":/");
} else
{return and__3822__auto____10793;
}
})();
if(cljs.core.truth_(or__3824__auto____10794))
{return or__3824__auto____10794;
} else
{var or__3824__auto____10795 = ((name__10792[(name__10792.length - 1)]) === ":");
if(or__3824__auto____10795)
{return or__3824__auto____10795;
} else
{return !((token__10790.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__10790);
} else
{if((function (){var and__3822__auto____10796 = !((ns__10791 == null));
if(and__3822__auto____10796)
{return (ns__10791.length > 0);
} else
{return and__3822__auto____10796;
}
})())
{return cljs.core.keyword.call(null,ns__10791.substring(0,ns__10791.indexOf("/")),name__10792);
} else
{return cljs.core.keyword.call(null,token__10790);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.symbol_QMARK_.call(null,f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.string_QMARK_.call(null,f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.keyword_QMARK_.call(null,f))
{return cljs.core.PersistentArrayMap.fromArrays([f],[true]);
} else
{if("\uFDD0'else")
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__10802 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__10802))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__10803 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__10804__10805 = o__10803;
if(G__10804__10805)
{if((function (){var or__3824__auto____10806 = (G__10804__10805.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3824__auto____10806)
{return or__3824__auto____10806;
} else
{return G__10804__10805.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__10804__10805.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__10804__10805);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__10804__10805);
}
})())
{return cljs.core.with_meta.call(null,o__10803,cljs.core.merge.call(null,cljs.core.meta.call(null,o__10803),m__10802));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string_STAR_.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = (function macros(c){
if((c === "\""))
{return cljs.reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljs.reader.read_keyword;
} else
{if((c === ";"))
{return cljs.reader.not_implemented;
} else
{if((c === "'"))
{return cljs.reader.wrapping_reader.call(null,"\uFDD1'quote");
} else
{if((c === "@"))
{return cljs.reader.wrapping_reader.call(null,"\uFDD1'deref");
} else
{if((c === "^"))
{return cljs.reader.read_meta;
} else
{if((c === "`"))
{return cljs.reader.not_implemented;
} else
{if((c === "~"))
{return cljs.reader.not_implemented;
} else
{if((c === "("))
{return cljs.reader.read_list;
} else
{if((c === ")"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljs.reader.read_vector;
} else
{if((c === "]"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljs.reader.read_map;
} else
{if((c === "}"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljs.reader.read_char;
} else
{if((c === "%"))
{return cljs.reader.not_implemented;
} else
{if((c === "#"))
{return cljs.reader.read_dispatch;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
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
cljs.reader.dispatch_macros = (function dispatch_macros(s){
if((s === "{"))
{return cljs.reader.read_set;
} else
{if((s === "<"))
{return cljs.reader.throwing_reader.call(null,"Unreadable form");
} else
{if((s === "\""))
{return cljs.reader.read_regex;
} else
{if((s === "!"))
{return cljs.reader.read_comment;
} else
{if((s === "_"))
{return cljs.reader.read_discard;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__10810 = cljs.reader.read_char.call(null,reader);
if((ch__10810 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__10810))
{{
var G__10813 = reader;
var G__10814 = eof_is_error;
var G__10815 = sentinel;
var G__10816 = is_recursive;
reader = G__10813;
eof_is_error = G__10814;
sentinel = G__10815;
is_recursive = G__10816;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__10810))
{{
var G__10817 = cljs.reader.read_comment.call(null,reader,ch__10810);
var G__10818 = eof_is_error;
var G__10819 = sentinel;
var G__10820 = is_recursive;
reader = G__10817;
eof_is_error = G__10818;
sentinel = G__10819;
is_recursive = G__10820;
continue;
}
} else
{if("\uFDD0'else")
{var f__10811 = cljs.reader.macros.call(null,ch__10810);
var res__10812 = (cljs.core.truth_(f__10811)?f__10811.call(null,reader,ch__10810):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__10810))?cljs.reader.read_number.call(null,reader,ch__10810):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__10810):null)));
if((res__10812 === reader))
{{
var G__10821 = reader;
var G__10822 = eof_is_error;
var G__10823 = sentinel;
var G__10824 = is_recursive;
reader = G__10821;
eof_is_error = G__10822;
sentinel = G__10823;
is_recursive = G__10824;
continue;
}
} else
{return res__10812;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__10826 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__10826,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__10828 = (new goog.string.StringBuffer(s));
while(true){
if((b__10828.getLength() < width))
{{
var G__10829 = b__10828.append("0");
b__10828 = G__10829;
continue;
}
} else
{return b__10828.toString();
}
break;
}
} else
{return null;
}
}
}
});
cljs.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){
return ((num % div) === 0);
});
cljs.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){
return cljs.core.not.call(null,cljs.reader.divisible_QMARK_.call(null,num,div));
});
cljs.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){
var and__3822__auto____10832 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3822__auto____10832))
{var or__3824__auto____10833 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3824__auto____10833))
{return or__3824__auto____10833;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3822__auto____10832;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__10838 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__10839 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__10839:dim_norm__10838),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__10840 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__10842 = (function (low,n,high,msg){
if((function (){var and__3822__auto____10841 = (low <= n);
if(and__3822__auto____10841)
{return (n <= high);
} else
{return and__3822__auto____10841;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474))))].join('')));
}
return n;
});
return (function (ts){
var temp__3974__auto____10843 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__10840,ts)));
if(cljs.core.truth_(temp__3974__auto____10843))
{var vec__10844__10847 = temp__3974__auto____10843;
var vec__10845__10848 = cljs.core.nth.call(null,vec__10844__10847,0,null);
var ___10849 = cljs.core.nth.call(null,vec__10845__10848,0,null);
var years__10850 = cljs.core.nth.call(null,vec__10845__10848,1,null);
var months__10851 = cljs.core.nth.call(null,vec__10845__10848,2,null);
var days__10852 = cljs.core.nth.call(null,vec__10845__10848,3,null);
var hours__10853 = cljs.core.nth.call(null,vec__10845__10848,4,null);
var minutes__10854 = cljs.core.nth.call(null,vec__10845__10848,5,null);
var seconds__10855 = cljs.core.nth.call(null,vec__10845__10848,6,null);
var milliseconds__10856 = cljs.core.nth.call(null,vec__10845__10848,7,null);
var vec__10846__10857 = cljs.core.nth.call(null,vec__10844__10847,1,null);
var ___10858 = cljs.core.nth.call(null,vec__10846__10857,0,null);
var ___10859 = cljs.core.nth.call(null,vec__10846__10857,1,null);
var ___10860 = cljs.core.nth.call(null,vec__10846__10857,2,null);
var V__10861 = vec__10844__10847;
var vec__10862__10865 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__10837_SHARP_){
return parseInt(p1__10837_SHARP_);
}),v);
}),cljs.core.map.call(null,(function (p1__10835_SHARP_,p2__10834_SHARP_){
return cljs.core.update_in.call(null,p2__10834_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__10835_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__10836_SHARP_){
if(cljs.core._EQ_.call(null,p1__10836_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__10861));
var vec__10863__10866 = cljs.core.nth.call(null,vec__10862__10865,0,null);
var ___10867 = cljs.core.nth.call(null,vec__10863__10866,0,null);
var y__10868 = cljs.core.nth.call(null,vec__10863__10866,1,null);
var mo__10869 = cljs.core.nth.call(null,vec__10863__10866,2,null);
var d__10870 = cljs.core.nth.call(null,vec__10863__10866,3,null);
var h__10871 = cljs.core.nth.call(null,vec__10863__10866,4,null);
var m__10872 = cljs.core.nth.call(null,vec__10863__10866,5,null);
var s__10873 = cljs.core.nth.call(null,vec__10863__10866,6,null);
var ms__10874 = cljs.core.nth.call(null,vec__10863__10866,7,null);
var vec__10864__10875 = cljs.core.nth.call(null,vec__10862__10865,1,null);
var offset_sign__10876 = cljs.core.nth.call(null,vec__10864__10875,0,null);
var offset_hours__10877 = cljs.core.nth.call(null,vec__10864__10875,1,null);
var offset_minutes__10878 = cljs.core.nth.call(null,vec__10864__10875,2,null);
var offset__10879 = (offset_sign__10876 * ((offset_hours__10877 * 60) + offset_minutes__10878));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__10850))?1970:y__10868),((cljs.core.not.call(null,months__10851))?1:check__10842.call(null,1,mo__10869,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__10852))?1:check__10842.call(null,1,d__10870,cljs.reader.days_in_month.call(null,mo__10869,cljs.reader.leap_year_QMARK_.call(null,y__10868)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__10853))?0:check__10842.call(null,0,h__10871,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__10854))?0:check__10842.call(null,0,m__10872,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__10855))?0:check__10842.call(null,0,s__10873,((cljs.core._EQ_.call(null,m__10872,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__10856))?0:check__10842.call(null,0,ms__10874,999,"timestamp millisecond field must be in range 0..999")),offset__10879], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__3971__auto____10891 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__3971__auto____10891))
{var vec__10892__10893 = temp__3971__auto____10891;
var years__10894 = cljs.core.nth.call(null,vec__10892__10893,0,null);
var months__10895 = cljs.core.nth.call(null,vec__10892__10893,1,null);
var days__10896 = cljs.core.nth.call(null,vec__10892__10893,2,null);
var hours__10897 = cljs.core.nth.call(null,vec__10892__10893,3,null);
var minutes__10898 = cljs.core.nth.call(null,vec__10892__10893,4,null);
var seconds__10899 = cljs.core.nth.call(null,vec__10892__10893,5,null);
var ms__10900 = cljs.core.nth.call(null,vec__10892__10893,6,null);
var offset__10901 = cljs.core.nth.call(null,vec__10892__10893,7,null);
return (new Date((Date.UTC(years__10894,(months__10895 - 1),days__10896,hours__10897,minutes__10898,seconds__10899,ms__10900) - ((offset__10901 * 60) * 1000))));
} else
{return cljs.reader.reader_error.call(null,null,[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join(''));
}
});
cljs.reader.read_date = (function read_date(s){
if(cljs.core.string_QMARK_.call(null,s))
{return cljs.reader.parse_timestamp.call(null,s);
} else
{return cljs.reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.");
}
});
cljs.reader.read_queue = (function read_queue(elems){
if(cljs.core.vector_QMARK_.call(null,elems))
{return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else
{return cljs.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
cljs.reader.read_uuid = (function read_uuid(uuid){
if(cljs.core.string_QMARK_.call(null,uuid))
{return (new cljs.core.UUID(uuid));
} else
{return cljs.reader.reader_error.call(null,null,"UUID literal expects a string as its representation.");
}
});
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["inst","uuid","queue"],{"inst":cljs.reader.read_date,"uuid":cljs.reader.read_uuid,"queue":cljs.reader.read_queue}));
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){
var tag__10905 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__3971__auto____10906 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__10905),null);
if(cljs.core.truth_(temp__3971__auto____10906))
{var pfn__10907 = temp__3971__auto____10906;
return pfn__10907.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__10905)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__10910 = cljs.core.name.call(null,tag);
var old_parser__10911 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__10910,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__10910,f);
return old_parser__10911;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__10914 = cljs.core.name.call(null,tag);
var old_parser__10915 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__10914,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__10914);
return old_parser__10915;
});
