import { useState } from "react";
import { useEffect } from "react";
import Q3components from "../../components/1.basic/q3components";
import { useEffect } from "react";
// https://velog.io/@dianestar/JavaScript-React-React%EC%97%90%EC%84%9C-setInterval%EC%9D%98-%ED%99%9C%EC%9A%A9

function Q3() {
//   // 2초 간격으로 callbackFunc을 실행
// // callbackFunc에 첫 번째 인자로 "first", 두 번째 인자로 "second" 값을 넘겨줌
// const intervalID = setInterval(callbackFunc, 2000, "first", "second");

// function callbackFunc(a, b) {
//   console.log(a); // first
//   console.log(b); // second
// }

// clearInterval(intervalID); // clearInterval() 실행 시 반복 호출이 멈춤

const [count, setCount] = useState(0);
const [btn, setBtn] = useState(false);
const [pause, setPause] = useState(false);

const handleResume = () => {
  setBtn(!btn)
  setCount(0)
};

let timer;
useEffect(() => {
  if(btn){
    console.log('타이머 진행중')
    timer = setInterval(() => {
    setCount((count)=> count + 1);
    },2000);
  }
  return() => clearInterval(timer);
},[btn])
// 의존성 배열 : btn이 변경될 때만 호출된다



  return (
    <>
      <h1>문제3</h1>
      <div>
        <p> 줄넘기 횟수 : {count} </p>
        {btn ? '' : <Q3components/>}
        <p>
          {!btn && <Q3components/>}
          {/* button의 onClick에 같은 이벤트 함수 놓음으로써 해결! */}
          <button onClick={handleResume}>줄넘기 시작</button>
        </p>
        <p>
          <button onClick={handleResume}>줄넘기 중지</button>
        </p>
      </div>
    </>
  );

};

export default Q3;
