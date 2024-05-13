addBtn = document.querySelector('.js-btn')
addInput = document.querySelector('.js-input')
taskContain = document.querySelector('.task-container')
doneContain = document.querySelector('.done-container')
taskContent =document.querySelector('.js-task')
doneIt = document.querySelector('.js-done')
let count = 0;

let finish = 0;
let taskUp=[]
let taskDone = []

const func12= ()=>{
  count ++
  taskContent.innerHTML = `Tasks  - ${count}`
  keepIt = addInput.value
  taskUp.push(`<p class="js-value">${keepIt}</p> <div class="container-img"> <img src="/check-mark-svgrepo-com.svg" alt="check mark" class="mark-check"> <img src="/dust-bin-svgrepo-com.svg" alt="covered dust bin" class="dust-bin"> </div>`)
  const divTag = document.createElement('div')
  divTag.classList.add('todoContainer')
  
  const divTag2 = document.createElement('div')
    
  
  taskUp.forEach(e => {
    divTag.innerHTML =e

    const dustBtn = divTag.querySelector('.dust-bin')
    
  
    dustBtn.addEventListener('click',()=>{
      index = taskUp.indexOf(e)
      console.log(index)
      divTag.remove(index)
    })

    const markBtn =divTag.querySelector('.mark-check')
    markBtn.addEventListener('click',()=>{
      divTag2.classList.add('todoContainer2')
      
      finish++
      doneIt.innerHTML = `Done - ${finish}`
      wee = e.replace('<div class="container-img"> <img src="/check-mark-svgrepo-com.svg" alt="check mark" class="mark-check"> <img src="/dust-bin-svgrepo-com.svg" alt="covered dust bin" class="dust-bin"> </div>','');
      divTag2.innerHTML =`<p class="taskComplete">${wee}</p>
      <div class="container-img">
      <img src="/reverse-left-svgrepo-com.svg" alt="reverse icon" class="reverse">`
      divTag.remove()

      reverse = divTag2.querySelector('.reverse')
      reverse.addEventListener('click',()=>{
        
        divTag2.remove()
        
        // const divTag = document.createElement('div')
        // divTag.classList.add('todoContainer')

        console.log(taskUp)
        console.log(e)
        console.log(divTag2)
        divTag.innerHTML=e
 
        // finish--
        // doneIt.innerHTML = `Done - ${finish}`
        // if (finish===0){doneIt.remove()}
        taskContain.appendChild(divTag)
      

      });
      
      doneContain.appendChild(divTag2)
    
    })


  });
  taskContain.appendChild(divTag)
  

  
}

addBtn.addEventListener('click',func12
  )