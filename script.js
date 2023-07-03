let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let phone = document.getElementById("phone")
let age = document.getElementById("age")
let gender = document.getElementById("gender")
let form = document.getElementById("myform")
let date = document.getElementById("date")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let userpara = document.getElementById("error")
    let userpara1 = document.getElementById("error1")
    let userpara2 = document.getElementById("error2")
    let userpara3 = document.getElementById("error3")
    let userpara4 = document.getElementById("error4")
    let usernameval = username.value
    let emailval = email.value
    let passwordval = password.value
    let phoneval = phone.value
    let ageval = age.value
    let genderval = gender.value
    let dateval = date.value
    if(usernameval.length<8){
        username.classList.add("border")
        userpara.innerHTML="Username should have 8 character"
        return false

    }else{
        username.classList.remove("border")
        userpara.innerHTML=""
        
    }
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(emailval)){
        email.classList.add("border")
        userpara1.innerHTML="Invalid email"
        return false
    }else{
        email.classList.remove("border")
        userpara1.innerHTML=""
    }
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if(!passwordRegex.test(passwordval)){
        password.classList.add("border")
        userpara2.innerHTML="Password must be at least 8 characters long,"
        return false
    }else{
        password.classList.remove("border")
        userpara2.innerHTML=""
    }
    if(phoneval.length<10 || phoneval.length>10){
        phone.classList.add("border")
        userpara3.innerHTMl="Invalid Number";
        return false

    }else{
        phone.classList.remove("border")
        userpara3.innerHTML=""
    }
    if(isNaN(ageval) || ageval<18 || age>100){
        age.classList.add("border")
        userpara4.innerHTML="Invalid age"
        return false

    }else{
        age.classList.remove("border")
        userpara4.innerHTML=""
    }
    if(genderval===""){
        gender.classList.add("border")
        return false
    }
    
    
    return form.submit()
})