(()=>{var e,t={245:()=>{function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var a,r,o;return a=t,(r=[{key:"init",value:function(){$("input[data-key=email-config-status-btn]").on("change",(function(e){var t=$(e.currentTarget),a=t.prop("id"),r=t.data("change-url");$.ajax({type:"POST",url:r,data:{key:a,value:t.prop("checked")?1:0},success:function(e){e.error?Botble.showError(e.message):Botble.showSuccess(e.message)},error:function(e){Botble.handleError(e)}})})),$(document).on("change",".setting-select-options",(function(e){$(".setting-wrapper").addClass("hidden"),$(".setting-wrapper[data-type="+$(e.currentTarget).val()+"]").removeClass("hidden")})),$(".send-test-email-trigger-button").on("click",(function(e){e.preventDefault();var t=$(e.currentTarget),a=t.text();t.text(t.data("saving")),$.ajax({type:"POST",url:t.data("action"),data:t.closest("form").serialize(),success:function(e){e.error||$("#send-test-email-modal").modal("show"),t.text(a)},error:function(e){t.text(a)}})})),$("#send-test-email-btn").on("click",(function(e){e.preventDefault();var t=$(e.currentTarget);t.addClass("button-loading"),$.ajax({type:"POST",url:t.data("action"),data:{email:t.closest(".modal-content").find("input[name=email]").val()},success:function(e){e.error,t.removeClass("button-loading"),t.closest(".modal").modal("hide")},error:function(e){t.removeClass("button-loading"),t.closest(".modal").modal("hide")}})})),"undefined"!=typeof CodeMirror&&Botble.initCodeEditor("mail-template-editor"),$(document).on("click",".btn-trigger-reset-to-default",(function(e){e.preventDefault(),$("#reset-template-to-default-button").data("target",$(e.currentTarget).data("target")),$("#reset-template-to-default-modal").modal("show")})),$(document).on("click","#reset-template-to-default-button",(function(e){e.preventDefault();var t=$(e.currentTarget);t.addClass("button-loading"),$.ajax({type:"POST",cache:!1,url:t.data("target"),data:{email_subject_key:$("input[name=email_subject_key]").val(),template_path:$("input[name=template_path]").val()},success:function(e){e.error?Botble.showError(e.message):(Botble.showSuccess(e.message),setTimeout((function(){window.location.reload()}),1e3)),t.removeClass("button-loading"),$("#reset-template-to-default-modal").modal("hide")},error:function(e){Botble.handleError(e),t.removeClass("button-loading")}})}))}}])&&e(a.prototype,r),o&&e(a,o),Object.defineProperty(a,"prototype",{writable:!1}),t}();$(document).ready((function(){(new t).init()}))},218:()=>{},542:()=>{}},a={};function r(e){var o=a[e];if(void 0!==o)return o.exports;var n=a[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,a,o,n)=>{if(!a){var l=1/0;for(c=0;c<e.length;c++){for(var[a,o,n]=e[c],i=!0,s=0;s<a.length;s++)(!1&n||l>=n)&&Object.keys(r.O).every((e=>r.O[e](a[s])))?a.splice(s--,1):(i=!1,n<l&&(l=n));if(i){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,o,n]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={51:0,170:0,16:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var o,n,[l,i,s]=a,u=0;if(l.some((t=>0!==e[t]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(s)var c=s(r)}for(t&&t(a);u<l.length;u++)n=l[u],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),r.O(void 0,[170,16],(()=>r(245))),r.O(void 0,[170,16],(()=>r(218)));var o=r.O(void 0,[170,16],(()=>r(542)));o=r.O(o)})();