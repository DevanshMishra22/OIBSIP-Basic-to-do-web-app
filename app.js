let inptbx =document.querySelector('#inptbx');
let list = document.querySelector('#list');
inptbx.addEventListener("keyup",function(event){
    if(event.key== "Enter"){
        addItem(this.value)
        this.value = ""
    }
})
let addItem = (inptbx)=>{
    let listItem = document.createElement("li");
    listItem.innerHTML =`${inptbx}<i></i>`;
        listItem.addEventListener("click",function(){
            this.classList.toggle('done');

        })
        listItem.querySelector("i").addEventListener("click",function(){
            listItem.remove();
        })
        list.appendChild(listItem);
}