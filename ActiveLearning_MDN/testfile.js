//Query selections for items
const list = document.querySelectorAll("ul");

const input = document.querySelectorAll("input");

const buttons = document.querySelectorAll("button");



    buttons.addEventListener("click", () => {
        //Get input from user
    const userInput = input.textContent;
    input.textContent = "";
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



