let userName = [
    { "name": "John Doe", "username": "johndoe", "password": "pass123" },
    { "name": "Jane Smith", "username": "janesmith", "password": "secure456" },
    { "name": "Mike Johnson", "username": "mikejohnson", "password": "login789" },
    { "name": "Emily Brown", "username": "emilybrown", "password": "access101" },
    { "name": "Chris Davis", "username": "chrisdavis", "password": "myPass202" },
    { "name": "Sarah Miller", "username": "sarahmiller", "password": "welcome303" },
    { "name": "David Wilson", "username": "davidwilson", "password": "hello404" },
    { "name": "Linda Taylor", "username": "lindataylor", "password": "admin505" },
    { "name": "James Anderson", "username": "jamesanderson", "password": "guest606" },
    { "name": "Patricia Thomas", "username": "patriciathomas", "password": "pass707" },
    { "name": "Robert Moore", "username": "robertmoore", "password": "secure808" },
    { "name": "Jennifer Lee", "username": "jenniferlee", "password": "login909" },
    { "name": "Michael Clark", "username": "michaelclark", "password": "access010" },
    { "name": "Elizabeth Harris", "username": "elizabethharris", "password": "myPass112" },
    { "name": "William Martinez", "username": "williammartinez", "password": "welcome223" },
    { "name": "Barbara Lewis", "username": "barbaralewis", "password": "hello334" },
    { "name": "Joseph Young", "username": "josephyoung", "password": "admin445" },
    { "name": "Nancy Walker", "username": "nancywalker", "password": "guest556" },
    { "name": "Thomas Allen", "username": "thomasallen", "password": "pass667" },
    { "name": "Karen King", "username": "karenking", "password": "secure778" }
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
        // console.log(userName[i].name)
        if(z == userName[i].username && z1 == userName[i].password){
            // console.log("found")
            t = true
            break
        }
    }

    if(t){
        x.classList.add("disnone")
        x1.classList.remove("disnone")
        x1.classList.add("disblock")
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
        spanx.innerText = "Login Falied"
        spanx.classList.add("fs-11", "text-light" , "failed" ,"bg-danger")
        div11.appendChild(spanx)


    }

    console.log(spanx)
    
    y.value   = ""
    y1.value  = ""
    

}

x.addEventListener("click", fun1)