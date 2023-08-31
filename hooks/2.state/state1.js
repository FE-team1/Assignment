import { useState } from "react";
import PlayListMock from "../../__mock__/playList.json";

function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  console.log(PlayListMock.playlist);
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

  const [{ title, singer }, setAddUser] = useState({
    title: "",
    singer: "",
  });

  const onAddUser = (e) => {
    console.log(e.target.title, e.target.singer);
  };

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {/* list */}
        {/* 예시 데이터입니다 */}
        <li>
          <h3>Summer</h3>
          <p>Joe Hisaishi</p>
        </li>
      </ul>
      <div>
        <p>
          곡명 : <input name="title" />
        </p>
        <p>
          가수/작곡 : <input name="singer" />
        </p>
        <p>
          <button onClick={onAddUser}>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
