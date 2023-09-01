import { useRef } from "react";
import { useState } from "react";

function Q2() {
  const [arr, setArr] = useState([]);
  const [forceRender, setForceRender] = useState(false);
  const [add, setAdd] = useState(false);
  const index = useRef('');

  console.log('rendering🎨')
  console.log(arr);

  const onAddList = () => {
    setForceRender((prev) => !prev);
    setArr([...arr, index.current.value])
    // 현재 배열에 값 추가
  };

  const onSubmitList = () => {
    setAdd(true);
    // useState 랜더링 발생
  };
  const pRef = useRef(null);

  const handleColorChange = () => {
    pRef.current.style = 'color:skyblue';
  }

  return (
    <>
      <h1>문제2</h1>
      <div>
        <h2>문제 2-1</h2>
        <p>
          <input ref={index}/>
        </p>
        <p>
          <button onClick={onAddList}>추가</button>
        </p>
        <p>
          <button onClick={onSubmitList}>제출</button>
        </p>
        {arr.length === 0 ? '제출된 목록이 없습니다' : 
        <ul>{add ? arr.map((list) => <li>{list}</li>) : ''}</ul>}
        
      
      </div>
      <div>
        <h2>문제 2-2</h2>
        <p ref={pRef}> 이 문구는 아래 버튼을 누르면 색상이 바뀝니다</p>
        <button onClick={handleColorChange}>변경</button>
      </div>
    </>
  );
}
export default Q2;
