'use strict'

//inputの値を元にワニを揃える
/**
 * @param {number} num 
 * @returns {"🐊"} num数分のワニ
 */

function gatorsMaker(num) {
  let gators = "";
  if (num > 0) {
    for (let i = 1; i <= num; i ++) {
      if (i === 1) {
        gators = "🐊";
      } else if (i > 1 ) {
        gators = gators + " 🐊";
      }
    }
  } else if(num <= 0) {
    gators = "";
  } else {
    gators = "Please, input numbers!";
  }
  return gators;
}

test(gatorsMaker(0), "");
test(gatorsMaker(1), "🐊");
test(gatorsMaker(3), "🐊 🐊 🐊");
test(gatorsMaker(5), "🐊 🐊 🐊 🐊 🐊");
test(gatorsMaker(-5), "");
test(gatorsMaker("a"),"Please, input numbers!");

/**
 * @param {function} 
*/
function gatorsRelease() {
  const howMany = document.getElementsByName("howMany")[0].value; console.log("howMany : ", howMany);
  const howManyGators = parseInt(howMany, 10); console.log("howManyGators :", howManyGators);
  const lake = document.getElementsByClassName("lake")[0]; console.log("lake : ", lake);
  lake.innerText = gatorsMaker(howManyGators); console.log("lake.innerText : ", lake.innerText);
}

const gatorsReleaseAct = document.getElementsByTagName("button")[0];
gatorsReleaseAct.addEventListener("click",gatorsRelease);
