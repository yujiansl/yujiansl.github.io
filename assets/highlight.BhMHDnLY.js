function n(n,e){if(!n||!e)return n;const i=e.split("").filter(Boolean).join("|"),t=new RegExp(i,"ig");return n=n.replace(t,(n=>`<span class="highlight">${n}</span>`))}export{n as g};
