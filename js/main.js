var addBtn = document.querySelector('#addTodo');

//grabbing element for button
addBtn.addEventListener('click', function(event){   
    var addItem = document.querySelector('input[name = "addTodo"]').value;
    //Console log to check if item is being grabbed
    // console.log(addItem);
    var receipeList = document.querySelector('#receipeList');
    var listItem = document.createElement('li');
    //check if ul list is being grabbd
    // console.log(receipeList);
    receipeList.appendChild(listItem);
    listItem.innerHTML = addItem;
    clear.value="";

    // listItem.onclick = function(){
        // this.remove();
    // }
    itemsToRemove();
})


function itemsToRemove(){
var removeItems = document.querySelector('#receipeList');
console.log(removeItems);
removeItems.addEventListener('click', function(event){
    // console.log(event.target);
    var item = event.target;
    console.log(item);
    item.remove();
})
// removeItems.onclick =function(){
//     this.remove();
}
 itemsToRemove();
// // removeItems.forEach(function(itemText){
// // })

// for (let i=0; i < removeItems.length; i++){
//     removeItems[i].addEventListener('click', function(event){
//         document.querySelector(removeItems[i].remove());
//     })
// }
// }

// itemsToRemove();

// document.querySelector('#receipeList').addEventListener('click',function(event){
//     // console.log(event.target);
//     let items = event.target;
//     console.log(items);
//     // if(items.tag.toUpperCase() = "LI"){
//     //     items.parentNode.removeChild(items);
//     // }
//     // items.forEach(function(item){
//     //     items[i].remove();
//     // })
//     // document.querySelector(items).remove();
    
// })

