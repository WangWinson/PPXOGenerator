
//prism.js
/* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+markup-templating+php */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(g){var c=/\blang(?:uage)?-([\w-]+)\b/i,a=0,C={manual:g.Prism&&g.Prism.manual,disableWorkerMessageHandler:g.Prism&&g.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof M?new M(e.type,C.util.encode(e.content),e.alias):Array.isArray(e)?e.map(C.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function t(e,n){var r,a,i=C.util.type(e);switch(n=n||{},i){case"Object":if(a=C.util.objId(e),n[a])return n[a];for(var l in r={},n[a]=r,e)e.hasOwnProperty(l)&&(r[l]=t(e[l],n));return r;case"Array":return a=C.util.objId(e),n[a]?n[a]:(r=[],n[a]=r,e.forEach(function(e,a){r[a]=t(e,n)}),r);default:return e}}},languages:{extend:function(e,a){var t=C.util.clone(C.languages[e]);for(var n in a)t[n]=a[n];return t},insertBefore:function(t,e,a,n){var r=(n=n||C.languages)[t],i={};for(var l in r)if(r.hasOwnProperty(l)){if(l==e)for(var o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);a.hasOwnProperty(l)||(i[l]=r[l])}var s=n[t];return n[t]=i,C.languages.DFS(C.languages,function(e,a){a===s&&e!=t&&(this[e]=i)}),i},DFS:function e(a,t,n,r){r=r||{};var i=C.util.objId;for(var l in a)if(a.hasOwnProperty(l)){t.call(a,l,a[l],n||l);var o=a[l],s=C.util.type(o);"Object"!==s||r[i(o)]?"Array"!==s||r[i(o)]||(r[i(o)]=!0,e(o,t,l,r)):(r[i(o)]=!0,e(o,t,null,r))}}},plugins:{},highlightAll:function(e,a){C.highlightAllUnder(document,e,a)},highlightAllUnder:function(e,a,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};C.hooks.run("before-highlightall",n);for(var r,i=n.elements||e.querySelectorAll(n.selector),l=0;r=i[l++];)C.highlightElement(r,!0===a,n.callback)},highlightElement:function(e,a,t){for(var n,r,i=e;i&&!c.test(i.className);)i=i.parentNode;i&&(n=(i.className.match(c)||[,""])[1].toLowerCase(),r=C.languages[n]),e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+n,e.parentNode&&(i=e.parentNode,/pre/i.test(i.nodeName)&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+n));var l={element:e,language:n,grammar:r,code:e.textContent},o=function(e){l.highlightedCode=e,C.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,C.hooks.run("after-highlight",l),C.hooks.run("complete",l),t&&t.call(l.element)};if(C.hooks.run("before-sanity-check",l),l.code)if(C.hooks.run("before-highlight",l),l.grammar)if(a&&g.Worker){var s=new Worker(C.filename);s.onmessage=function(e){o(e.data)},s.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else o(C.highlight(l.code,l.grammar,l.language));else o(C.util.encode(l.code));else C.hooks.run("complete",l)},highlight:function(e,a,t){var n={code:e,grammar:a,language:t};return C.hooks.run("before-tokenize",n),n.tokens=C.tokenize(n.code,n.grammar),C.hooks.run("after-tokenize",n),M.stringify(C.util.encode(n.tokens),n.language)},matchGrammar:function(e,a,t,n,r,i,l){for(var o in t)if(t.hasOwnProperty(o)&&t[o]){if(o==l)return;var s=t[o];s="Array"===C.util.type(s)?s:[s];for(var g=0;g<s.length;++g){var c=s[g],u=c.inside,h=!!c.lookbehind,f=!!c.greedy,d=0,m=c.alias;if(f&&!c.pattern.global){var p=c.pattern.toString().match(/[imuy]*$/)[0];c.pattern=RegExp(c.pattern.source,p+"g")}c=c.pattern||c;for(var y=n,v=r;y<a.length;v+=a[y].length,++y){var k=a[y];if(a.length>e.length)return;if(!(k instanceof M)){if(f&&y!=a.length-1){if(c.lastIndex=v,!(x=c.exec(e)))break;for(var b=x.index+(h?x[1].length:0),w=x.index+x[0].length,A=y,P=v,O=a.length;A<O&&(P<w||!a[A].type&&!a[A-1].greedy);++A)(P+=a[A].length)<=b&&(++y,v=P);if(a[y]instanceof M)continue;N=A-y,k=e.slice(v,P),x.index-=v}else{c.lastIndex=0;var x=c.exec(k),N=1}if(x){h&&(d=x[1]?x[1].length:0);w=(b=x.index+d)+(x=x[0].slice(d)).length;var j=k.slice(0,b),S=k.slice(w),E=[y,N];j&&(++y,v+=j.length,E.push(j));var _=new M(o,u?C.tokenize(x,u):x,m,x,f);if(E.push(_),S&&E.push(S),Array.prototype.splice.apply(a,E),1!=N&&C.matchGrammar(e,a,t,y,v,!0,o),i)break}else if(i)break}}}}},tokenize:function(e,a){var t=[e],n=a.rest;if(n){for(var r in n)a[r]=n[r];delete a.rest}return C.matchGrammar(e,t,a,0,0,!1),t},hooks:{all:{},add:function(e,a){var t=C.hooks.all;t[e]=t[e]||[],t[e].push(a)},run:function(e,a){var t=C.hooks.all[e];if(t&&t.length)for(var n,r=0;n=t[r++];)n(a)}},Token:M};function M(e,a,t,n,r){this.type=e,this.content=a,this.alias=t,this.length=0|(n||"").length,this.greedy=!!r}if(g.Prism=C,M.stringify=function(e,a){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return M.stringify(e,a)}).join("");var t={type:e.type,content:M.stringify(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a};if(e.alias){var n=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(t.classes,n)}C.hooks.run("wrap",t);var r=Object.keys(t.attributes).map(function(e){return e+'="'+(t.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+t.tag+' class="'+t.classes.join(" ")+'"'+(r?" "+r:"")+">"+t.content+"</"+t.tag+">"},!g.document)return g.addEventListener&&(C.disableWorkerMessageHandler||g.addEventListener("message",function(e){var a=JSON.parse(e.data),t=a.language,n=a.code,r=a.immediateClose;g.postMessage(C.highlight(n,C.languages[t],t)),r&&g.close()},!1)),C;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(C.filename=e.src,C.manual||e.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(C.highlightAll):window.setTimeout(C.highlightAll,16):document.addEventListener("DOMContentLoaded",C.highlightAll))),C}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};n["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var i={};i[a]={pattern:RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g,a),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",i)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
!function(s){var e=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:RegExp("url\\((?:"+e.source+"|.*?)\\)","i"),selector:RegExp("[^{}\\s](?:[^{};\"']|"+e.source+")*?(?=\\s*\\{)"),string:{pattern:e,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var a=s.languages.markup;a&&(a.tag.addInlined("style","css"),s.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:s.languages.css}},alias:"language-css"}},a.tag))}(Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript;
!function(h){function v(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(h.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,r,e,o){if(a.language===r){var c=a.tokenStack=[];a.code=a.code.replace(e,function(e){if("function"==typeof o&&!o(e))return e;for(var n,t=c.length;-1!==a.code.indexOf(n=v(r,t));)++t;return c[t]=e,n}),a.grammar=h.languages.markup}}},tokenizePlaceholders:{value:function(p,k){if(p.language===k&&p.tokenStack){p.grammar=h.languages[k];var m=0,d=Object.keys(p.tokenStack);!function e(n){for(var t=0;t<n.length&&!(m>=d.length);t++){var a=n[t];if("string"==typeof a||a.content&&"string"==typeof a.content){var r=d[m],o=p.tokenStack[r],c="string"==typeof a?a:a.content,i=v(k,r),u=c.indexOf(i);if(-1<u){++m;var g=c.substring(0,u),l=new h.Token(k,h.tokenize(o,p.grammar),"language-"+k,o),s=c.substring(u+i.length),f=[];g&&f.push.apply(f,e([g])),f.push(l),s&&f.push.apply(f,e([s])),"string"==typeof a?n.splice.apply(n,[t,1].concat(f)):a.content=f}}else a.content&&e(a.content)}return n}(p.tokens)}}}})}(Prism);
!function(n){n.languages.php=n.languages.extend("clike",{keyword:/\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,boolean:{pattern:/\b(?:false|true)\b/i,alias:"constant"},constant:[/\b[A-Z_][A-Z0-9_]*\b/,/\b(?:null)\b/i],comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0}}),n.languages.insertBefore("php","string",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),n.languages.insertBefore("php","comment",{delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"}}),n.languages.insertBefore("php","keyword",{variable:/\$+(?:\w+\b|(?={))/i,package:{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),n.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}});var e={pattern:/{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,lookbehind:!0,inside:{rest:n.languages.php}};n.languages.insertBefore("php","string",{"nowdoc-string":{pattern:/<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},"heredoc-string":{pattern:/<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,greedy:!0,alias:"string",inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:e}},"single-quoted-string":{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,alias:"string",inside:{interpolation:e}}}),delete n.languages.php.string,n.hooks.add("before-tokenize",function(e){if(/<\?/.test(e.code)){n.languages["markup-templating"].buildPlaceholders(e,"php",/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi)}}),n.hooks.add("after-tokenize",function(e){n.languages["markup-templating"].tokenizePlaceholders(e,"php")})}(Prism);


// var testform = document.getElementById('form');
// var testButton = document.createElement('span');
// var modLnchBtn = document.createElement('button');
// modLnchBtn.className = "button is-primary is-large modal-button";
// modLnchBtn.id = "modLnchBtn";
// modLnchBtn.setAttribute("data-target", "modal");
// modLnchBtn.setAttribute("aria-haspopup", "true");
// modLnchBtn.text = "Launch Mod";
// document.body.appendChild(modLnchBtn);

var puDetails = null;
var totalAmount = 0;

function amazonDetail() {
    let amount = '';
    let productname = '';
    let quantity = '';
    let description = '';
    let currency = '';

    productname = $('#productTitle').text().substr(0, 100);
    amount = $('#cerberus-data-metrics').attr('data-asin-price');
    // amount = $('#priceblock_ourprice').text();
    currency = $('#cerberus-data-metrics').attr('data-asin-currency-code');
    quantity = parseInt($('#quantity').find("option:selected").text());

    let detail = {
        "unit_amount": { currency_code: currency, value: amount },
        "name": productname,
        "quantity": quantity
        //   "currency" : currency
    }
    return detail;
}

function amazonCartDetail() {
    let details = [];
    let wholelist = $("[data-name='Active Items'] > div")

    for (let index = 0; index < wholelist.length; index++) {
        let detail = {
            unit_amount: { currency_code: $(wholelist[index]).find(".sc-product-price").text().replace(/\s+/g, "").substr(0, 3), value: $(wholelist[index]).attr('data-price') },
            quantity: $(wholelist[index]).attr('data-quantity'),
            name: $(wholelist[index]).find(".sc-product-title").text().replace(/^\s+|\s+$/g, "").substr(0, 100)
            // currency: $(wholelist[index]).find(".sc-product-price").text().replace(/\s+/g,"").substr(0,3)
        }
        details.push(detail)
    }
    return details;
}

var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
};

function escapeHtml(string) {
    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
        return entityMap[s];
    });
}

if (document.getElementById("modal") != null) {
    document.getElementById("modal").className = "modal is-active";
}
else {
    //cart page
    if (location.href.indexOf("https://www.amazon.com/gp/cart/view.html") > -1) {
        var details = amazonCartDetail();
        for (var i = 0, l = details.length; i < l; i++) {
            totalAmount += details[i].unit_amount.value * details[i].quantity;
        }
        puDetails =
            {
                amount: {
                    value: totalAmount.toString(),
                    breakdown: { item_total: { currency_code: details[0].unit_amount.currency_code, value: totalAmount } }
                },
                items: details
            };
    }
    //item page
    else if (location.href.indexOf("pd_rd_i") > -1) {
        var detail = amazonDetail();

        puDetails =
            {
                amount: {
                    value: (detail.unit_amount.value).toString(),
                    breakdown: { item_total: { currency_code: detail[0].unit_amount.currency_code, value: detail[0].unit_amount.value } }
                },
                items: detail
            };
    }
    console.log(puDetails);
    console.log(JSON.stringify(puDetails));
    var mod = `<div class="modal-background" id="modBg"></div>
    <div class="modal-content">
         <pre class="brush:html;toolbar:false language-html">
            <code class="language-html">
            &lt;!DOCTYPE html&gt;

            &lt;head&gt;
                &lt;!-- Add meta tags for mobile and IE --&gt;
                &lt;meta name&#x3D;&quot;viewport&quot; content&#x3D;&quot;width&#x3D;device-width, initial-scale&#x3D;1&quot;&gt;
                &lt;meta http-equiv&#x3D;&quot;X-UA-Compatible&quot; content&#x3D;&quot;IE&#x3D;edge&quot; &#x2F;&gt;
            &lt;&#x2F;head&gt;

            &lt;body&gt;
                &lt;!-- Set up a container element for the button --&gt;
                &lt;div id&#x3D;&quot;paypal-button-container&quot;&gt;&lt;&#x2F;div&gt;

                &lt;!-- Include the PayPal JavaScript SDK --&gt;
                &lt;script src&#x3D;&quot;https:&#x2F;&#x2F;www.paypal.com&#x2F;sdk&#x2F;js?client-id&#x3D;sb&amp;currency&#x3D;USD&quot;&gt;&lt;&#x2F;script&gt;

                &lt;script&gt;
                    &#x2F;&#x2F; Render the PayPal button into #paypal-button-container
                    paypal.Buttons({

                        &#x2F;&#x2F; Set up the transaction
                        createOrder: function(data, actions) {
                            return actions.order.create({
                                purchase_units: [`
        +
        escapeHtml(JSON.stringify(puDetails))
        +
        `]
                            });
                        },

                        &#x2F;&#x2F; Finalize the transaction
                        onApprove: function(data, actions) {
                            return actions.order.capture().then(function(details) {
                                &#x2F;&#x2F; Show a success message to the buyer
                                alert(&#39;Transaction completed by &#39; + details.payer.name.given_name + &#39;!&#39;);
                            });
                        }


                    }).render(&#39;#paypal-button-container&#39;);
                &lt;&#x2F;script&gt;
            &lt;&#x2F;body&gt;
            </code>
        </pre>
      <a class="button is-success" id="injectBtn">Inject to website
      </a>
    </div>
    <button class="modal-close is-large" aria-label="close" id="closeBtn"></button>`;
    console.log(mod);
    var modContainer = document.createElement('div');
    modContainer.className = 'modal is-active';
    modContainer.id = "modal";
    modContainer.innerHTML = mod;
    modContainer.style.zIndex = 1000;
    // var modcss = document.createElement('link');
    // modcss.href = 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css';
    // modcss.rel = 'stylesheet';
    // modcss.type = 'text/css';
    // document.head.appendChild(modcss);
    document.body.appendChild(modContainer);
}
//instead of making or JS as text, make these 2 event as original JS
//later the param of actions.order.create would be generated based on
//the shopping cart web page 
var js = `paypal.Buttons({
    // Set up the transaction
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [`
    +

    JSON.stringify(puDetails)
    +
    `]
        });
    },

    // Finalize the transaction
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            // Show a success message to the buyer
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
        });
    }
}).render("#paypal-button-container");`

// console.log("js:");
// console.log(JSON.stringify(js));
// chrome.storage.local.set({puDetailsKey: puDetails},function(){});
// console.log(window['steps']);

document.getElementById("modBg").removeEventListener("click", function () { }, false);
document.getElementById("closeBtn").removeEventListener("click", function () { }, false);

document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("modal").className = "modal";
}, false);

document.getElementById("modBg").addEventListener("click", function () {
    document.getElementById("modal").className = "modal";
}, false);

document.getElementById("injectBtn").addEventListener("click", function () {
    // document.getElementById("modal").innerHTML="";
    document.getElementById("modal").className = "modal";
    injectBtn();
}, false);


//insert JS SDK
function injectBtn() {

    var testButton = document.createElement('span');
    testButton.innerHTML = '<div id="paypal-button-container"></div>';
    // document.body.appendChild(testButton);
    document.getElementById("activeCartViewForm").appendChild(testButton);

    var jssdk = document.createElement('script');
    jssdk.src = 'https://www.paypal.com/sdk/js?client-id=sb&currency=USD';
    jssdk.onload = function () {
        //once JS SDK loaded, insert render button script
        var render = document.createElement('script');

        render.text = js;
        document.body.appendChild(render);
    }

    document.body.appendChild(jssdk);

    paypal.Buttons({
        // Set up the transaction
        createOrder: function (data, actions) {
            return actions.order.create({
                purchase_units: [{ "amount": { "value": "356.98" }, "items": [{ "unit_amount": "6.99", "quantity": "1", "name": "iPhone 8 Plus Case, iPhone 7 Plus Case, Ansiwee Shockproof Armor iPhone 7 Plus Protective Defender Impact Resistant Slim Fit Rubber Bumper Case Cover for Apple iPhone 7 Plus /8 Plus 5.5\" (Rose Gold)" }, { "unit_amount": "349.99", "quantity": "1", "name": "Apple iPhone 7 Plus, GSM Unlocked, 32GB - Rose Gold (Refurbished)" }] }]
            });
        },

        // Finalize the transaction
        onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
                // Show a success message to the buyer
                alert('Transaction completed by ' + details.payer.name.given_name + '!');
            });
        }
    }).render("#paypal-button-container");

}


