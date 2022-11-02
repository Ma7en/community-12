


/* start box-2 */


let btmLanLi = document.querySelector(".bullets_landing li");
let btmLanLiArray = Array.from(btmLanLi);

let indexValue = 1;
showCont(indexValue);


function btm_landing(e) {
    showCont(indexValue = e);
}

function showCont(e) {
    let i;
    let content = document.querySelectorAll(".page .box-2 .cont-1 .cont");
    let bultesLi = document.querySelectorAll(".page .box-2 .bullets_landing li")

    if (e > content.length) {
        indexValue = 1;
    } 
    
    if (e < 1) {
        indexValue = content.length;
    }

    for(i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    for(i = 0; i < bultesLi.length; i++) {
        bultesLi[i].style.background = "transparent";
        bultesLi[i].style.borderColor = "#fff";
    }

    content[indexValue - 1].style.display = "block";
    bultesLi[indexValue - 1].style.background = "var(--color-sign, #19c8fa)";
    bultesLi[indexValue - 1].style.borderColor = "var(--color-sign, #19c8fa)";
}


/* end box-2 */



