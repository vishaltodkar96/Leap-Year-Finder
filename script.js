const input = document.querySelector("input");
const checkBtn = document.querySelector("button");
const result = document.querySelector(".result");

checkBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    result.style.display = "block";
    const year = input.value;

    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
        result.innerHTML = year + " is a Leap Year";
    }else{
        result.innerHTML = year + " is not a Leap Year";
    }

    if (year == '') {
        result.innerHTML = "Enter a Year";
    }
    document.querySelector("input").value = "";
})