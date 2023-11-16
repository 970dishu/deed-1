const nameSubmitButton = document.querySelector(".add-name-button")

const nameinput = document.getElementById("name")

const LoggedUser = document.querySelector(".logged-user")

nameSubmitButton.addEventListener("click",()=>{
    console.log(nameinput.value)
    LoggedUser.innerHTML = nameinput.value

})