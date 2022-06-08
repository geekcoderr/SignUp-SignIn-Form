function over(item) {
    if (document.querySelector('.btn').value === "1") {
        var tempItem = item.children[0].innerHTML;
        item.children[0].className = "div-2";
        item.children[0].innerHTML = item.children[1].innerHTML;
        item.children[1].className = "div-1";
        item.children[1].innerHTML = tempItem;
        if (screen.width <= 1360) {
            item.children[0].style.height="50%";
            item.children[1].style.height="50%"; 
            item.children[0].style.borderRadius = "10vh 10vh 0% 0%";
            item.children[1].style.borderRadius = "0% 0% 10vh 20vh";
            item.style.borderRadius = "10vh 10vh 10vh 20vh";
        }
        else{

            item.children[1].style.borderRadius = "0% 30vh 50px 0%";
            item.children[0].style.borderRadius = "50px 0% 0% 30vh";
            item.style.borderRadius = "50px 30vh 50px 30vh";
        }
        document.querySelector('.signInBtn').style.display = "none";
        document.querySelector('.signUpBtn').style.display = "block";
        document.querySelector('.sign').innerHTML = "Sign Up";
        document.querySelector('.emailInput').style.display = "block";
        document.querySelector('.confirmPasswordInput').style.display = "block";
        document.querySelector('.btn').value = "0";
    }
}
function out(item) {
    if (document.querySelector('.btn').value === "0") {
        var tempItem = item.children[1].innerHTML;
        item.children[1].className = "div-2";
        item.children[1].innerHTML = item.children[0].innerHTML;
        item.children[0].className = "div-1";
        item.children[0].innerHTML = tempItem;
        if (screen.width <= 1360) {
            item.children[0].style.height="40%";
            item.children[1].style.height="60%"; 
            item.children[0].style.borderRadius = "10vh 10vh 0vh 0vh";
            item.children[1].style.borderRadius = "0vh 0vh 10vh 10vh";
            item.style.borderRadius = "20vh 10vh 20vh 10vh";
        }
        else{
            item.children[1].style.borderRadius = "0% 50px 30vh 0%";
            item.children[0].style.borderRadius = "30vh 0% 0% 50px";
            item.style.borderRadius = "30vh 50px 30vh 50px";
        }
        document.querySelector('.signInBtn').style.display = "block";
        document.querySelector('.signUpBtn').style.display = "none";
        document.querySelector('.sign').innerHTML = "Sign In";
        document.querySelector('.emailInput').style.display = "none";
        document.querySelector('.confirmPasswordInput').style.display = "none";
        document.querySelector('.btn').value = "1";
    }
}
