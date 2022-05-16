var themeDots= document.getElementsByClassName('theme-dot');
var themeStyle = document.getElementById('theme-style');

let theme = localStorage.getItem('usertheme');


theme == null ? themeStyle.href = "{%static 'css/base.css'%}": themeStyle.href = theme

for(var i=0; themeDots.length>i; i++){
    themeDots[i].addEventListener('click', function(){
     let mode = this.dataset.mode
     themeStyle.href = mode;
     localStorage.setItem('usertheme', mode)
     
    })
 
   }
   
