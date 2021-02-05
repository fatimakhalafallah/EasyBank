const Hamburgerm = document.querySelector('#Hamburgerm');
const header =  document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
// so since the hader meneu  , overlay have the fadeout elements
const fadelms = document.querySelectorAll('.has-fade');
Hamburgerm.addEventListener('click',function(){
if(header.classList.contains('open')){ //close humber meneu
    header.classList.remove('open');
    body.classList.remove('noscroll');
    fadelms.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });
    }
else
    {
        //open humberger menu
        header.classList.add('open');
        body.classList.add('noscroll');
        fadelms.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
console.log('Running open')
});

