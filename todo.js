class Todo {
#todo
constructor(){
this.#todo=[];
}
set addTodos(title)
{
    let item={
        title:title,
        status:false,
        id:Date.now() + title,
    }
    this.#todo.push(item);
}
get todos(){
    return this.#todo;
}

deleteItem(id){
    this.#todo=this.#todo.filter((todo)=>todo.id !==id);
}
 toggleStatus(id){
    this.#todo=this.#todo.map((el)=>
    el.id===id ? {...el, status:!el.status}:el) 
    
}


}


let todo=new Todo();


let addTodo=()=>{
    let task=document.getElementById("todo").value;
    task.innerHTML=null
    todo.addTodos=task;
    console.log(todo.todos)
    renderDom(todo.todos);
}


let renderDom=(todos)=>{
    let cont=document.getElementById("container");
    cont.innerHTML=null;
    todos.forEach(({id,status,title})=>{
      let div=document.createElement('div');
      let h3=document.createElement("h3");
      h3.innerText=title;
      let p=document.createElement('p');
      p.innerText=status;
      let deleteBtn=document.createElement('button');
      deleteBtn.innerText="Delete";
       
       deleteBtn.style.backgroundColor="red";
       deleteBtn.style.border="none";
       deleteBtn.style.outline="none";
       deleteBtn.style.color="#ffff";
       deleteBtn.style.padding="6px";
       deleteBtn.style.marginRight="3px"

      deleteBtn.addEventListener("click",()=>{
        todo.deleteItem(id);
        renderDom(todo.todos)
      })
    //   deleteBtn.onclick=()=>{
    //     todo.deleteItem(id);
    //     renderDom(todo.todos);
    //   }
      let togglebtn=document.createElement('button');
      togglebtn.innerText="Toggle";

      togglebtn.style.backgroundColor="green";
      togglebtn.style.border="none";
      togglebtn.style.outline="none";
      togglebtn.style.color="#ffff";
      togglebtn.style.padding="6px";
      togglebtn.style.marginLeft="3px";

      togglebtn.addEventListener("click",()=>{
        todo. toggleStatus(id)
        renderDom(todo.todos)
      })
    //   togglebtn.onclick=()=>{
    //     todo. toggleStatus(id)
    //     renderDom(todo.todos)
    //   }
      div.append(h3,p,deleteBtn,togglebtn);
      cont.append(div);
    })
}