document.addEventListener("DOMContentLoaded",(function(){(()=>{let t=new Date;const e=document.querySelectorAll(".fullDate");let n,g;const a=(e=null,n)=>{t=new Date;let g=t.getDate();return t.setDate(g-e),"yy"==n?t.getFullYear()+"."+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"."+(t.getDate()<10?"0"+t.getDate():t.getDate()):"mm"==n?(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"."+(t.getDate()<10?"0"+t.getDate():t.getDate())+"."+t.getFullYear():"year"==n?t.getFullYear():(t.getDate()<10?"0"+t.getDate():t.getDate())+"."+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"."+t.getFullYear()};e&&e.length>0&&(n=null,g=null,e.forEach((t=>{t.getAttribute("minDays")?(n=+t.getAttribute("minDays"),g=t.getAttribute("dateMode"),t.innerHTML=a(n,g)):t.innerHTML=a(0)})))})()}));