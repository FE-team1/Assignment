import { useState } from "react";
import PlayListMock from "../../__mock__/playList.json";

function State1() {
  console.log(PlayListMock.playlist);
  const[playList, setPlayList] = useState(PlayListMock.playlist);
  const[title, setTitle] = useState('');
  const[signer, setSigner] = useState('');
  // playListMock(10)과 playListMock의 차이점?

  const onAddSong = (e) => {
    e.preventDefault();
    const newSong = {title, signer}
    setPlayList((prev) => [...prev, newSong]);
    // inputBox 비워주기
    setTitle("");
    setSigner("");
  }

  const onRemoveSong = (song) => {
      const newList = [];
      for(let i=0; i<playList.length; i++) {
        // playList[i].title 하면 인덱스의 title을 가져옴
        if(playList[i].title !== song.title) {
          console.log(song.title)
          newList.push(playList[i])
        }
      }
      setPlayList(newList);
    }


  return (
    <>
      <h1>문제1</h1>
      <ul>
      {/* index 인자는 배열안의 인덱스(몇 번째)를 의미하며 item 에는 배열안의 값들이 하나씩 순서대로 담긴다. */}
      {/* https://tlsdnjs12.tistory.com/56 => map오류 해결*/}
        {playList && playList.map((song, i) => (
          // song으로 목데이터 하나하나 가져온다
          // https://beomy.tistory.com/29 -> key값에 대한 설명
          <li key={i}>
            <h3>{song.title}</h3>
            <p>{song.signer}</p>
            {/* 강의에서 보면 매개변수로 이렇게 넘겼다! */}
            <button onClick={() => onRemoveSong(song)}>삭제</button>
          </li>
        ))}
      </ul>
      <form onSubmit={onAddSong}>
        <p>
          곡명 : <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </p>
        <p>
          가수/작곡 : <input type="text" value={signer} onChange={(e) => setSigner(e.target.value)}/>
        </p>
        <p>
          <button type="submit">추가</button>
        </p>
      </form>
    </>
  );
}
export default State1;
