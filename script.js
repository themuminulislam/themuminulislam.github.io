var count=0;
var badge=document.getElementById('cart-count');
document.querySelectorAll('.add-cart').forEach(function(b){
  b.addEventListener('click',function(){count++;badge.textContent=count;b.textContent='যোগ হয়েছে ✓';setTimeout(function(){b.textContent='কার্টে যোগ করো'},1200);});
});
var f=document.getElementById('contact-form');
if(f){f.addEventListener('submit',function(e){e.preventDefault();document.getElementById('msg').textContent='ধন্যবাদ! তোমার বার্তা পাওয়া গেছে।';f.reset();});}
var s=document.getElementById('signin');
if(s){s.addEventListener('click',function(){alert('সাইন ইন সুবিধা শীঘ্রই আসছে।');});}
