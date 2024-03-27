//Query selections for items
const list = document.querySelectorAll("ul");

const input = document.querySelectorAll("input");

const buttons = document.querySelectorAll("button");


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        aFunction(e);
    });
});





function aFunction() {
    //Get input from user
    const thisValue = input.textContent;
    input.textContent = "";
    //Create three buttons
    const listItem = document.createElement("li");
    const aSpan = document.createElement("span");
    const anotherButton = document.createElement("button");
    //Add Button to 
    listItem.append(aSpan, anotherButton);

    aSpan.textContent = thisValue;
    anotherButton.textContent = "delete";
    list.append(listItem);

    anotherButton.addEventListener("click", list.removeChild(listItem));
}