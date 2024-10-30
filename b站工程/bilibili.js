const dtAll = document.querySelector('.dongtai-all')
const dtVideo = document.querySelector('.dongtai-video')
const dtAct = document.querySelector('.dongtai-action')
const dtCol = document.querySelector('.dongtai-columns')

const connavAll = document.querySelector('.connav-all')
const connavVideo = document.querySelector('.connav-video')
const connavAct = document.querySelector('.connav-action')
const connavCol = document.querySelector('.connav-columns')

const folLine = document.querySelector('.follow-line')
const conNav = document.querySelector('.con-nav')

conNav.addEventListener('click',function(e){
    if (e.target.tagName === 'SPAN'){
        const spanWidth = e.target.offsetWidth;
        const offsetLeft = e.target.offsetLeft;
        const targetPos = (spanWidth/2) + offsetLeft;
        console.log(targetPos);
        folLine.style.transform = `translateX(${targetPos - (folLine.offsetWidth / 2)}px)`;  
    }
    
})

dtAll.style.display = 'block'
connavAll.style.color ='rgb(0, 174, 236)'

connavAll.addEventListener('click',function(e){
    dtAll.style.display = 'block'
    dtVideo.style.display = 'none'
    dtAct.style.display = 'none' 
    dtCol.style.display = 'none'

    connavAll.style.color ='rgb(0, 174, 236)'
    connavVideo.style.color = 'black'
    connavAct.style.color = 'black'
    connavCol.style.color = 'black'
})
connavVideo.addEventListener('click',function(){
    dtAll.style.display = 'none'
    dtVideo.style.display = 'block'
    dtAct.style.display = 'none'
    dtCol.style.display = 'none'

    connavAll.style.color ='black'
    connavVideo.style.color ='rgb(0, 174, 236)'
    connavAct.style.color = 'black'
    connavCol.style.color = 'black'
})
connavAct.addEventListener('click',function(){
    dtAll.style.display = 'none'
    dtVideo.style.display = 'none'
    dtAct.style.display = 'block'
    dtCol.style.display = 'none'

    connavAll.style.color ='black'
    connavVideo.style.color ='black'
    connavAct.style.color ='rgb(0, 174, 236)'
    connavCol.style.color = 'black'
})
connavCol.addEventListener('click',function(){
    dtAll.style.display = 'none'
    dtVideo.style.display = 'none'
    dtAct.style.display = 'none'
    dtCol.style.display = 'block'

    connavAll.style.color ='black'
    connavVideo.style.color ='black'
    connavAct.style.color ='black'
    connavCol.style.color ='rgb(0, 174, 236)'
})



// ----------------------------
const backTop = document.querySelector('.back-top')
const liveBox = document.querySelector('.live-box')
const initialOffset = liveBox.offsetTop;
let navHeight = document.querySelector('.nav').offsetHeight;
let isLiveBoxFixed = false;

backTop.style.display = 'none'
window.addEventListener('scroll',function(e){
    const scrollTop = document.documentElement.scrollTop;
    backTop.style.display = scrollTop >= 500 ? 'block' : 'none';
    
    navHeight = document.querySelector('.nav').offsetHeight;
    
    if (scrollTop + navHeight >= initialOffset && !isLiveBoxFixed) {
        liveBox.style.position = 'fixed';
        liveBox.style.top = (navHeight + 10) + 'px';
        isLiveBoxFixed = true;
    } else if (scrollTop + navHeight < initialOffset && isLiveBoxFixed) {
        liveBox.style.position = 'static';
        isLiveBoxFixed = false;
    }
})
backTop.addEventListener('click',function(){
    window.scrollTo(0,0)
})

    




