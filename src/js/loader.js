const loaderEL = document.querySelector(".loader")

const loaderToggle = (info) => {
    if(info){
        loaderEL.classList.remove("hidden")
    }else{
        loaderEL.classList.add("hidden")
    }
}

export default loaderToggle