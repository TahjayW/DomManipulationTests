//Query selections for items
const list = document.querySelector("ul");

const input = document.querySelector("input");

const buttons = document.querySelector("button");



    buttons.addEventListener("click", () => {
        //Get input from user
    const userInput = input.value;
    input.value = "";
    //Create three buttons
    const listItem = document.createElement("li");
    const foodName = document.createElement("span");
    const deleteButton = document.createElement("button");
    //Add Button to 
    listItem.append(foodName, deleteButton);

    foodName.textContent = userInput;
    deleteButton.textContent = "Delete";
    //Append new item to lists
    list.appendChild(listItem);

    //remove Item from list
    deleteButton.addEventListener("click",()=>{listItem.remove()} );

        input.focus();
    });



