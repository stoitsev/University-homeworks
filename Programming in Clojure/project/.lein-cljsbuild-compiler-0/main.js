goog.provide('main');
goog.require('cljs.core');
goog.require('clojure.string');
main.handle_response = (function handle_response(data){
if(cljs.core._EQ_.call(null,data,""))
{return null;
} else
{console.log("Response");
console.log(data);
jQuery("#website-info").hide();
jQuery("#results").show();
jQuery(".result_container").text("");
var temp__3971__auto____55622 = clojure.string.replace.call(null,(data["whois"]),"\n","<br/>");
if(cljs.core.truth_(temp__3971__auto____55622))
{var whois__55623 = temp__3971__auto____55622;
return jQuery("#whois").html(whois__55623);
} else
{return null;
}
}
});
main.submit_handler = (function submit_handler(){
var input_field__55627 = jQuery("#inputURL");
var error__55628 = jQuery("#error");
error__55628.text("");
var value__55629 = input_field__55627.val();
if(cljs.core._EQ_.call(null,value__55629,""))
{error__55628.text("Please enter valid URL!");
} else
{jQuery.get([cljs.core.str("/input/"),cljs.core.str(value__55629)].join(''),main.handle_response);
}
return false;
});
var submit_button__55630 = jQuery("#submit");
submit_button__55630.on("click",main.submit_handler);
