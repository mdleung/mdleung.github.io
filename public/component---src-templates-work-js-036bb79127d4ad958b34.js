(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("f3/d"),a("0mN4");var r=a("tokG"),i=a("q1tI"),n=a.n(i),s=a("9eSz"),o=a.n(s),d=a("p3AD");t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author,i=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:a.name,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",{style:{marginTop:"auto",marginBottom:"auto"}},"Written by ",n.a.createElement("strong",null,a.name)," from"," ",n.a.createElement("a",{href:"https://22boxes.com",target:"blank"},"22Boxes.com")," ",n.a.createElement("br",null)," ",n.a.createElement("a",{href:"https://twitter.com/"+i.twitter},"Twitter")))}},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=g(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,S=y&&window.IntersectionObserver,v=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},A=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(V,(0,d.default)({src:t},i,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,r(a),s):s},V=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&S&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=g(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,S=e.Tag,v=e.itemProp,E=e.loading,L=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,d.default)({opacity:x?1:0,transition:j?"opacity "+y+"ms":"none"},o),B="boolean"==typeof b?"lightgray":b,N={transitionDelay:y+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},j&&N,{},o,{},f),z={title:t,alt:this.state.isVisible?"":a,style:T,className:g,itemProp:v};if(m){var P=m,q=p(m);return l.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},l.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),B&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:B,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&N)}),q.base64&&l.default.createElement(R,{ariaHidden:!0,src:q.base64,spreadProps:z,imageVariants:P,generateSources:O}),q.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,src:q.tracedSVG,spreadProps:z,imageVariants:P,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,w(P),l.default.createElement(V,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,d.default)({alt:a,title:t,loading:E},q,{imageVariants:P}))}}))}if(h){var C=h,U=p(h),G=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:U.width,height:U.height},n);return"inherit"===n.display&&delete G.display,l.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(U.srcSet)},B&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:B,width:U.width,opacity:this.state.imgLoaded?0:1,height:U.height},j&&N)}),U.base64&&l.default.createElement(R,{ariaHidden:!0,src:U.base64,spreadProps:z,imageVariants:C,generateSources:O}),U.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,src:U.tracedSVG,spreadProps:z,imageVariants:C,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,w(C),l.default.createElement(V,{alt:a,title:t,width:U.width,height:U.height,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,d.default)({alt:a,title:t,loading:E},U,{imageVariants:C}))}}))}return null},t}(l.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),B=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});j.propTypes={resolutions:k,sizes:B,fixed:c.default.oneOfType([k,c.default.arrayOf(k)]),fluid:c.default.oneOfType([B,c.default.arrayOf(B)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=j;t.default=N},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},SOgZ:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));a("91GP");var r=a("q1tI"),i=a.n(r),n=a("Bl7J"),s=a("vrFN"),o=a("p3AD"),d=a("6Gk8");var l=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title;return i.a.createElement(n.a,{location:this.props.location,title:t},i.a.createElement(s.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("article",{style:{padding:"0px 15px 15px 15px"}},i.a.createElement("header",null,i.a.createElement("h1",{style:{marginTop:Object(o.a)(1),marginBottom:0}},e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(o.b)(-.2),{display:"block",marginBottom:Object(o.a)(1),fontStyle:"italic"})},e.frontmatter.category)),i.a.createElement("section",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(o.a)(2),marginTop:Object(o.a)(2)}}),i.a.createElement("footer",null,i.a.createElement(d.a,null))))},r}(i.a.Component);t.default=l;var c="311629376"},tokG:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADfUlEQVQ4y4VUO0tjURA+WdhiC4ttbQQLC1EQQUT/gU0WhZUFGxEt0ohioZ2NayOCaCFYBN+rLIISXXygKPgAwReGxHeMr/h+xSjm3juzM+M94crusgOXe3Im892Z+b4ZFQ6HFdvy8rJCxA98rq6u/nh6evr17u7ux+PjY+jp6cngJxqNhunu59nZWUlnZ+cn/i/HrK+vC8bh4aG81dramosccj44OPhCQUH8j93f3++HQqFvyja/3+9yZibnSCTy3RFj2I9lmiZYlgV8dtyLUUyLBpVMdZka7OTkxGxtbTVra2uhqakJjo+PGUiey8tL6OjogLq6OmxoaDB3d3cF+Pz8vM0u/y3Lvb09NztWVlbMnJwciwO6u7uhpqYG0tLSkPxIfcP8/HysrKyErq4uqK+vx9TUVJifnxdQalWJ0gRQ46VnFxcXJgfaGYmRH6uqqtAOcrYRmpubsbi42OQfDw8PYZ/Pl6SYTUfPpDTDMDAWi8klZYScTaKxDl9jYyN4PB4dy/0sVywN/V8g4+a/vr7KxezsLGZlZeHV1ZX8JnIwHo/LORgMYkZGBu7s7IAGJOZ9inUm+RMWv3QAg2VmZuLGxsYfYJubm+KbmZlBuyIp++Xlxa9IsHEbEFgefB4eHpavb21tCQBnzIBsi4uLmJ6ejgsLC9rHoRL3/PwcZUDDzkD6Nzg4iHl5eYkynTY9PY25ubm4vb39jhxNIgHGFI+T7bBI+ZCcnIwFBQVYVlaGhYWF6Ha7hRgiD1NSUjA7O1t8RUVF4i8tLYWbmxvLBgwwKT81KeQAKheIflxdXRX9kXhFLtw/BqV5lVYwKeyjbJlELZ1figddA9LoIIHB1NSUlMWapDln9vD6+hrp4wLKPsqGyQGqMCEbmhiP4q1ByPt8QXNt9vX14fj4OE8DTk5OSqYjIyNI48gfw/b2duzt7cWenh7wer2cpWRHXETm5uY+y7Tw1uBLkogxMDAAS0tL2N/fDwQsoBMTEzg0NIScOd3j2NgYkP6QPg6jo6OikqOjowql9xm/qaQWezkYtBB0T4DUzz0SJvlNUwI0oqw5k0oUsNvbW29iOejlyEaktP1lfZm2TPX6Mp3ri/rq1fGBQOBt21BzXfqSUi9xSOmfRplGqJoKHUdEud6tbc5U7zPqURKVU86zyePEE8CipXOApcFsagI4RmdGyajffmnWUrBSJbwAAAAASUVORK5CYII=","width":80,"height":80,"src":"/static/36eb5b833f0683a0e02ed6e3f7f1fd5d/829e2/bio-pic.png","srcSet":"/static/36eb5b833f0683a0e02ed6e3f7f1fd5d/829e2/bio-pic.png 1x,\\n/static/36eb5b833f0683a0e02ed6e3f7f1fd5d/e94d6/bio-pic.png 1.5x,\\n/static/36eb5b833f0683a0e02ed6e3f7f1fd5d/af1a8/bio-pic.png 2x"}}},"site":{"siteMetadata":{"author":{"name":"Gagandeep Singh","summary":"22boxes.com"},"social":{"twitter":"twentytwoboxes"}}}}}')}}]);
//# sourceMappingURL=component---src-templates-work-js-036bb79127d4ad958b34.js.map