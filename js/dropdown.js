 $(function(){
     $('.main-list li').hover(function(){
         $("ul:not(:animated)", this).slideDown(70);
     }, function(){
         $("ul.dropdwn_menu",this).slideUp(70);
     });
 });
