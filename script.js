const contextMenu=document.getElementById('contextMenu')

document.body.addEventListener('contextmenu' , (event)=>{

    event.preventDefault()

    if(contextMenu.style.display==='none'){

        contextMenu.style.left=event.pageX + 'px'
        contextMenu.style.top=event.pageY + 'px'

        contextMenu.style.display='block'
    }
    else{

        contextMenu.style.left=event.pageX + 'px'
        contextMenu.style.top=event.pageY + 'px'
    }
})
document.body.addEventListener('click' , ()=>{

    contextMenu.style.display='none'
})
document.body.addEventListener('keydown' , (event)=>{
    
    if(event.keyCode===27){
        contextMenu.style.display='none'
    }
})