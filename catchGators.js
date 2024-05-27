'use strict';



/**
 * @param {number} num 
 * @returns {"🐊"} num数分のワニ
 */

function gatorsMaker(num) {
  let gators = "";
  if (num >= 0) {
    for (let i = 0; i <= num; i ++) {
      if (i === 0) {
        gators = "";
      } else if (i === 1) {
        gators = "🐊";
      } else if (i > 1 ) {
        gators = gators + " 🐊";
      }
    }
  } else if(num < 0) {
    gators = "自然数で数えてね！";
  } else {
    gators = "数字を入力してね！";
  }
  return gators;
}


function complete(num) {
  if(num == 0) {
    window.alert("クリアおめでとう！");
  }
}

function catch1() {
  const restANumber = document.querySelectorAll("#rest")[0];
  const targetNumber = document.querySelectorAll("#targetNum")[0];
  let resultNum = restANumber.innerHTML - 1; //console.log(resultNum);
  let getNum = targetNumber.innerHTML - resultNum;
  const eArea = document.querySelectorAll(".escapeArea")[2];
  const get = document.querySelectorAll("#gatorMaker")[0];
  const area = eArea.innerHTML;

  const getGator = gatorsMaker(getNum); //console.log(getGator);

  eArea.innerHTML = areaCatchedGators[area];
  restANumber.innerHTML = resultNum;
  get.innerHTML = getGator;
  complete(resultNum);
}

function catch2() {
  const restANumber = document.querySelectorAll("#rest")[0];
  const targetNumber = document.querySelectorAll("#targetNum")[0];
  let resultNum = restANumber.innerHTML - 1; console.log(resultNum);
  let getNum = targetNumber.innerHTML - resultNum;
  const eArea = document.querySelectorAll(".escapeArea")[4];
  const get = document.querySelectorAll("#gatorMaker")[0];
  const area = eArea.innerHTML;

  const getGator = gatorsMaker(getNum); console.log(getGator);

  eArea.innerHTML = areaCatchedGators[area];
  restANumber.innerHTML = resultNum;
  get.innerHTML = getGator;
  complete(resultNum);
}

function catch3() {
  const restANumber = document.querySelectorAll("#rest")[0];
  const targetNumber = document.querySelectorAll("#targetNum")[0];
  let resultNum = restANumber.innerHTML - 1; console.log(resultNum);
  let getNum = targetNumber.innerHTML - resultNum;
  const eArea = document.querySelectorAll(".escapeArea")[5];
  const get = document.querySelectorAll("#gatorMaker")[0];
  const area = eArea.innerHTML;

  const getGator = gatorsMaker(getNum); console.log(getGator);

  eArea.innerHTML = areaCatchedGators[area];
  restANumber.innerHTML = resultNum;
  get.innerHTML = getGator;
  complete(resultNum);
}

function catch4() {
  const restANumber = document.querySelectorAll("#rest")[0];
  const targetNumber = document.querySelectorAll("#targetNum")[0];
  let resultNum = restANumber.innerHTML - 1; console.log(resultNum);
  let getNum = targetNumber.innerHTML - resultNum;
  const eArea = document.querySelectorAll(".escapeArea")[6];
  const get = document.querySelectorAll("#gatorMaker")[0];
  const area = eArea.innerHTML;

  const getGator = gatorsMaker(getNum); console.log(getGator);

  eArea.innerHTML = areaCatchedGators[area];
  restANumber.innerHTML = resultNum;
  get.innerHTML = getGator;
  complete(resultNum);
}

function catch5() {
  const restANumber = document.querySelectorAll("#rest")[0];
  const targetNumber = document.querySelectorAll("#targetNum")[0];
  let resultNum = restANumber.innerHTML - 1; console.log(resultNum);
  let getNum = targetNumber.innerHTML - resultNum;
  const eArea = document.querySelectorAll(".escapeArea")[8];
  const get = document.querySelectorAll("#gatorMaker")[0];
  const area = eArea.innerHTML;

  const getGator = gatorsMaker(getNum); console.log(getGator);

  eArea.innerHTML = areaCatchedGators[area];
  restANumber.innerHTML = resultNum;
  get.innerHTML = getGator;
  complete(resultNum);
}

const gatorAll = document.querySelectorAll(".gator");
gatorAll[0].addEventListener("click",catch1);
gatorAll[1].addEventListener("click",catch2);
gatorAll[2].addEventListener("click",catch3);
gatorAll[3].addEventListener("click",catch4);
gatorAll[4].addEventListener("click",catch5);


