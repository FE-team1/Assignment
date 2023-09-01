import { useState , useRef , useEffect} from "react";

function Q2() {
  const arr = [];
  const [forceRender, setForceRender] = useState(false);
  const Input = useRef();
  const [text, setText] = useState("");
  const [showList, setShowList] = useState(false);

  const onAddList = () => {
    setForceRender((prev) => !prev);
    if (Input.current.value === "") return;
    arr.current.push(Input.current.value);
    //input 비워주기 중요!!!
    Input.current.value = "";
  };
  // list 에 추가

  const onSubmit = () => {
    setShowList(true);
  };

  /* 
    문제2

    2-1)
        useRef에 관련한 문제입니다.

        추가 버튼을 누르면 input에 있던 value는 배열 arr에 추가됩니다.
        그러나, 추가 버튼을 누를 때마다 강제 랜더링 상태가 무조건 적으로 업데이트 됩니다.

        이러한 상황에서 제출버튼을 누르면

        지금까지 추가하였던 목록 배열(arr)이 
        <ul>의 li의 항목으로 추가되어야합니다.

        만약 제출되었을 때 아무런 항목이 없다면
        <p>제출된 목록이 없습니다</p>이 노출되어야하며

        제출된 항목이 있다면
        <ul>만 노출되어야 합니다

        이를 useRef의 특성을 고려하여 풀이해보세요 :)

        onclick => onAddList
        input value = 배열 arr

    2-2)
        문제 2-2는 변경 버튼을 클릭하면
        p태그의 색상이 다른 색상으로 변경됩니다.
        
        이는 state를 사용하는 것이 가장 올바른 방법이지만
        어를 사용할 수 없는 어쩔 수 없는 상황에 놓여있습니다.

        따라서 useRef는 사용하여 해당 문구의 색상을 변경해보세요 :)
  */


  const targetText = useRef();
  const onClickChangeColor = () => {
    targetText.current.style.color = "red";
  };

  return (
    <>
      <h1>문제2</h1>
      <div>
        <h2>문제 2-1</h2>
        <p>
          <input ref={Input} />
        </p>
        <p>
          <button onClick={onAddList}>추가</button>
        </p>
        <p>
          <button onClick={onSubmit}>제출</button>
        </p>

        <ul>
          {showList && !arr.current.length && (
            <div>제출된 목록이 없습니다.</div>
          )}
       
          {showList &&
            arr.length !== 0 &&
            arr.current.map((text) => <li>{text}</li>)}
        </ul>
      </div>
      <div>
        <h2>문제 2-2</h2>
        <p ref={targetText}> 이 문구는 아래 버튼을 누르면 색상이 바뀝니다</p>
        <button onClick={onClickChangeColor}>변경</button>
      </div>
    </>
  );
}
export default Q2;



// import { useRef } from "react";
// import { useState } from "react";

// function Q2() {
//   const [arr, setArr] = useState([]);
//   const [forceRender, setForceRender] = useState(false);
//   const [add, setAdd] = useState(false);
//   const index = useRef('');

//   console.log('rendering🎨')
//   console.log(arr);

//   const onAddList = () => {
//     setForceRender((prev) => !prev);
//     setArr([...arr, index.current.value])
//     // 현재 배열에 값 추가
//   };

//   const onSubmitList = () => {
//     setAdd(true);
//     // useState 랜더링 발생
//   };
//   const pRef = useRef(null);

//   const handleColorChange = () => {
//     pRef.current.style = 'color:skyblue';
//   }

//   return (
//     <>
//       <h1>문제2</h1>
//       <div>
//         <h2>문제 2-1</h2>
//         <p>
//           <input ref={index}/>
//         </p>
//         <p>
//           <button onClick={onAddList}>추가</button>
//         </p>
//         <p>
//           <button onClick={onSubmitList}>제출</button>
//         </p>
//         {arr.length === 0 ? '제출된 목록이 없습니다' : <ul>{add ? arr.map((list) => <li>{list}</li>) : ''}</ul>}


//       </div>
//       <div>
//         <h2>문제 2-2</h2>
//         <p ref={pRef}> 이 문구는 아래 버튼을 누르면 색상이 바뀝니다</p>
//         <button onClick={handleColorChange}>변경</button>
//       </div>
//     </>
//   );
// }
// export default Q2;