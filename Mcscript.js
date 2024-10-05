let userName = [
    { "name": "Girish Tomar", "username": "thegravious", "password": "thegravious" },
    { "name": "Rahul Singh Tomar", "username": "thugslane", "password": "thugslane" },
    { "name": "Radha Tomar", "username": "radharani", "password": "radharani" },
    { "name": "Thakur shab", "username": "papa", "password": "radharani" },
]

let x = document.getElementById("btn1")
let x1 = document.getElementById("btn2")
let p = document.getElementById("para1")
let y = document.getElementById("inp1")
let y1 = document.getElementById("inp2")
let z = y.value
let z1 = y1.value
let div11 = document.getElementById("div1")
let div12 = document.getElementById("div2")

fun1 = () => {
    z = y.value
    z1 = y1.value

    t = false

    for(i = 0; i < userName.length; i++){
        console.log(userName[i].name)
        if(z == userName[i].username && z1 == userName[i].password){
            console.log("found")
            t = true
            break
        }
    }

    if(t){
        x.classList.add("disnone")
        x1.classList.remove("disnone")
        x1.classList.add("disblock")
        // x1.innerText = "welcome :" + document.createElement("br") + userName[i].name
        x1.innerHTML = "welcome :<br>" + userName[i].name;
        y.classList.add("disnone")
        y1.classList.add("disnone")
        x.classList.add("disnone")
        p.classList.add("disnone")
        div12.classList.remove("justify-content-around")
        div12.classList.add("justify-content-center")


        y.value = ""
        y1.value = ""

    }else{
        y.classList.add("disnone")
        y1.classList.add("disnone")
        x.classList.add("disnone")
        p.classList.add("disnone")
        div12.classList.remove("justify-content-around")
        div12.classList.add("justify-content-center")


        let spanx = document.createElement("span")
        spanx.innerText = "Login Failed"
        spanx.classList.add("fs-1", "text-danger" , "failed" , "bungee-regular")
        div11.appendChild(spanx)


    }

    
    y.value   = ""
    y1.value  = ""
    

}

x.addEventListener("click", fun1)