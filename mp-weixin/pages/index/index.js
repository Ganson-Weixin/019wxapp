(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"2f11":function(n,t,e){"use strict";e.r(t);var i=e("4bf0"),a=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=a.a},"2f80":function(n,t,e){"use strict";e.r(t);var i=e("f9a3"),a=e("2f11");for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);e("5f91");var u,o=e("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);t["default"]=c.exports},"336a":function(n,t,e){"use strict";(function(n){e("c45c"),e("921b");i(e("66fd"));var t=i(e("2f80"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"4bf0":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,t,e,i,a,r,u){try{var o=n[r](u),c=o.value}catch(s){return void e(s)}o.done?t(c):Promise.resolve(c).then(i,a)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(i,a){var u=n.apply(t,e);function o(n){r(u,i,a,o,c,"next",n)}function c(n){r(u,i,a,o,c,"throw",n)}o(void 0)}))}}e("61cb");var o=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("4ae9"))}.bind(null,e)).catch(e.oe)},c={components:{uniIcons:o},data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[],homekechengxinxilist:[],news:[]}},onShow:function(){var n=u(i.default.mark((function n(){var t,e,a,r,u,o,c,s;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=[],n.next=3,this.$api.page("config",{page:1,limit:5});case 3:for(e=n.sent,a=!0,r=!1,u=void 0,n.prev=7,o=e.data.list[Symbol.iterator]();!(a=(c=o.next()).done);a=!0)s=c.value,s.name.indexOf("picture")>=0&&s.value&&""!=s.value&&null!=s.value&&(console.log(s),t.push({img:s.value}));n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](7),r=!0,u=n.t0;case 15:n.prev=15,n.prev=16,a||null==o.return||o.return();case 18:if(n.prev=18,!r){n.next=21;break}throw u;case 21:return n.finish(18);case 22:return n.finish(15);case 23:return t&&(this.swiperList=t),n.next=26,this.$api.list("news",{page:1,limit:3});case 26:return e=n.sent,this.news=e.data.list,n.next=30,this.$api.list("kechengxinxi",{page:1,limit:6});case 30:e=n.sent,this.homekechengxinxilist=e.data.list;case 32:case"end":return n.stop()}}),n,this,[[7,11,15,23],[16,,18,22]])})));function t(){return n.apply(this,arguments)}return t}(),methods:{onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})}}};t.default=c}).call(this,e("543d")["default"])},"5f91":function(n,t,e){"use strict";var i=e("73d9"),a=e.n(i);a.a},"73d9":function(n,t,e){},f9a3:function(n,t,e){"use strict";var i,a=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.homekechengxinxilist,(function(t,e){var i=t.tupian.split(",");return{$orig:n.__get_orig(t),g0:i}}))),i=n.__map(n.homekechengxinxilist,(function(t,e){var i=t.tupian.split(",");return{$orig:n.__get_orig(t),g1:i}}));n.$mp.data=Object.assign({},{$root:{l0:e,l1:i}})},r=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return i}))}},[["336a","common/runtime","common/vendor"]]]);