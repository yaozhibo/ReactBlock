(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{nYpT:function(e,a,t){"use strict";var r=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=r(t("d6i3")),n=t("dCQc"),u={namespace:"users",state:{userinfo:{}},effects:{submitLogout:s.default.mark(function e(a,t){var r,u,c,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,u=a.callback,c=t.call,e.next=4,c(n.logoutUser,r);case 4:o=e.sent,5e4!==o.data.status&&u&&u(o);case 6:case"end":return e.stop()}},e)}),fetchCurrUser:s.default.mark(function e(a,t){var r,u,c,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,u=a.callback,c=t.call,e.next=4,c(n.infoCurrUser,r);case 4:o=e.sent,5e4!==o.data.status&&u&&u(o);case 6:case"end":return e.stop()}},e)})},reducers:{}};a.default=u}}]);