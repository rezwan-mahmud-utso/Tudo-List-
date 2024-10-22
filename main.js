  let input = document.querySelector(".input")
  let addBtn = document.querySelector(".addbtn")
  let list =document.querySelector("ul")
  let update = document.querySelector(".update")

  let tudo =[]
  let id;


  addBtn.addEventListener("click",()=>{
      tudo.push(input.value)
      input.value =""
      addTudo()
      
      
  })
  update.addEventListener("click",()=>{
  
  })

  function addTudo(){
      list.innerHTML =""
      tudo.map((item)=>{
        list.innerHTML += `<li> ${item}   <button class="delet">Delet</button><button class="edit">edit</button></li>`
          
      })
    let maindlt =document.querySelectorAll(".delet")
    let mainedit =document.querySelectorAll(".edit")

    let deletarr= Array.from(maindlt)
    let editarr= Array.from(mainedit)
    

    deletarr.map((ditem,index)=>{
      ditem.addEventListener("click",()=>{
        tudo.splice(index,1)
        addTudo()
      })
    })
    editarr.map((eitem ,index)=>{
      eitem.addEventListener("click",()=>{
        input.value = tudo[index]
        id=index

      })
    })
    

  }