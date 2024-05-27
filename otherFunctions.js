'use strict'


function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}


function counter(num1) {
    num1--;
    console.log(num1);
}

function randomNumber(rand) {
  return Math.floor(Math.random() * (rand + 1));
}

function arrayOfRandomNumber(num) {
  const resultArray = [];
  for(let i=0; i<=num; i++) {
    resultArray.push(randomNumber(19));
  }
  return resultArray;
}


/**
 * @param {number} resultArrayLength
 * @returns 
 */

function arrayOfUniqueRandomNumber(resultArrayLength) {
  const resultArray = [];
  const intermediateArray = [];

  //indexと同じ数字を値に持つ配列
  for(let i=0; i<resultArrayLength; i++) {
    intermediateArray.push(i);
  }

  //一意なランダム整数を持つ配列作成。売れ残りがintermediateArrayに集まる
  for(let i = 0, len = intermediateArray.length; i < resultArrayLength ; i++ , len--) {
    let rndNum = randomNumber(len - 1);
    resultArray.push(intermediateArray[rndNum]); //resultArrayに生成されたランダム整数がindexのintermidiatetArrayの値を渡す
    intermediateArray[rndNum] = intermediateArray[len - 1]; //console.log(`len : ${len} ${intermediateArray}`); //値をresultArrayに渡した要素に最後の要素を渡す
  }
  console.log(resultArray);
  return resultArray;
}




const getAreaWithoutGator = (num) => { return areaWithoutGator[num];};
const getAreaWithGator = (num) => { return areaWithGator[num];};
const getAreaCatchedGators = (num) => { return areaCatchedGators[num];};
const reactString = (strOfElement) => {return areaCatchedGators[strOfElement];} 

test(getAreaWithoutGator(3), '🤔😀🤢🚩✅🏷️🥵⬅️🎟️🦺🟡💚😆😐🤑👇😠🧑🍏🤡');
test(reactString('😐<a class="gator">🐊</a>😀🤢🚩✅🏷️🥵⬅️🤑👇😠🧑🍏🤡💚🎟️🦺🟡😆'), '😐&emsp;&thinsp;&thinsp;😀🤢🚩✅🏷️🥵⬅️🤑👇😠🧑🍏🤡💚🎟️🦺🟡😆')

