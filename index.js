let ham= document.getElementById('ham')
let navMenu= document.querySelector('.navMenu')
ham.addEventListener('click', function(){
    console.log(navMenu)
    navMenu.style.transform= 'translateY(0%)'
})

let navList= document.querySelectorAll('.navList')
console.log(navList)
navList.forEach( function(ele){
    ele.addEventListener('click',function(){
        navMenu.style.transform= "translateY(-100%)"
    })
})

let cross= document.getElementById('cross')
cross.addEventListener('click',function(){
    navMenu.style.transform= "translateY(-100%)"
})