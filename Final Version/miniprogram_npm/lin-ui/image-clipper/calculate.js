export function determineDirection(t,e,i,c,h,a){let n;const r=h>t+i-24&&h<t+i+24,l=h>t-24&&h<t+24,o=a>e+c-24&&a<e+c+24,g=a>e-24&&a<e+24;return r&&o?n=1:r&&g?n=2:l&&g?n=3:l&&o&&(n=4),n}export function calcImageOffset(t,e){let i=t.imageLeft,c=t.imageTop;e=e||t.scale;let h=t.imageWidth,a=t.imageHeight;t.angle/90%2&&(h=t.imageHeight,a=t.imageWidth);const{cutX:n,clipWidth:r,cutY:l,clipHeight:o}=t,g=t=>t*e/2,u=g(h),d=g(a);return i=n+u>=i?i:n+u,i=n+r-u<=i?i:n+r-u,c=l+d>=c?c:l+d,c=l+o-d<=c?c:l+o-d,{left:i,top:c,scale:e}}export function calcImageScale(t,e){e=e||t.scale;let i=t.imageWidth,c=t.imageHeight;return t.angle/90%2&&(i=t.imageHeight,c=t.imageWidth),i*e<t.clipWidth&&(e=t.clipWidth/i),c*e<t.clipHeight&&(e=Math.max(e,t.clipHeight/c)),e}export function calcImageSize(t,e,i){let c=t,h=e;if(c&&h)c/h>(i.clipWidth||i.width)/(i.clipWidth||i.height)?(h=i.clipHeight||i.height,c=t/e*h):(c=i.clipWidth||i.width,h=e/t*c);else{c=(i._SYS_INFO||wx.getSystemInfoSync()).windowWidth,h=0}return{imageWidth:c,imageHeight:h}}export function calcPythagoreanTheorem(t,e){return Math.sqrt(Math.pow(t,2)+Math.pow(e,2))}export function clipTouchMoveOfCalculate(t,e){const i=e.touches[0].clientX,c=e.touches[0].clientY,{clipWidth:h,clipHeight:a,cutY:n,cutX:r,_CUT_START:l,lockRatio:o}=t;let{maxWidth:g,minWidth:u,maxHeight:d,minHeight:p}=t;g/=2,u/=2,p/=2,d/=2;let m=h,f=a,s=n,x=r,w=()=>{m=m<=g?m>=u?m:u:g,f=f<=d?f>=p?f:p:d},W=()=>(m>g||m<u||f>d||f<p)&&o?(w(),!1):(w(),!0);switch(f=l.height+(l.corner>1&&l.corner<4?1:-1)*(l.y-c),l.corner){case 1:if(m=l.width-l.x+i,o&&(f=m/(h/a)),!W())return;break;case 2:if(m=l.width-l.x+i,o&&(f=m/(h/a)),!W())return;s=l.cutY-(f-l.height);break;case 3:if(m=l.width+l.x-i,o&&(f=m/(h/a)),!W())return;s=l.cutY-(f-l.height),x=l.cutX-(m-l.width);break;case 4:if(m=l.width+l.x-i,o&&(f=m/(h/a)),!W())return;x=l.cutX-(m-l.width)}return{width:m,height:f,cutX:x,cutY:s}}export function imageTouchMoveOfCalcOffset(t,e,i){return{left:e-t._touchRelative[0].x,top:i-t._touchRelative[0].y}}