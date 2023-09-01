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

  const [playList, setPlayList] = useState(PlayListMock.playlist);
  // const [title, setTitle] = useState("");
  // const [signer, setSinger] = useState("");

  // state 값 하나로 묶어서 사용하기
  const [song, setSong] = useState({
    title: "",
    signer: "",
  });

    
  // 객체 전체를 업데이트 해야함
  const onChangeValue = (e) => {
    const { name, value } = e.target;
    setSong((prevSong) => ({ ...prevSong, [name]: value }));
  };

    // 추가하는데 추가후 input값 비워주기 추가할 것
  const onAddPlayList = () => {
    const newSong = { title: song.title, signer: song.signer };
    setPlayList((prevList) => [...prevList, newSong]); // 기존값은 그대로 복사, 기존값 뒤에 객체 형태의 newSong을 추가하여 클릭 이벤트시 UI에 보여줌
    setSong({ title: "", signer: "" }); // 추가 후 input값 비워주기
  };

    // 삭제 로직 작동이 안된다. 데이터를 filter 처리해서 없애는 작동이 잘 안된다.
  // 선택한 li 삭제 함수, <li key = {i}>의 i 값과 json 데이터의 인텍스가 같지 않은 것만 보여주게해라, 즉 같은 인덱스이면 안보이게해서 삭제된 것처럼 보여주기
  const onRemovePlayList = (i) => {
    setPlayList(playList.filter((_, idx) => idx !== i));
    // setPlayList((prevList) => prevList.filter((_, idx) => idx !== i));
  };

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {playList.map((list, i) => (
          <li key={i}>
            <h3>{list.title}</h3>
            <p>{list.signer}</p>
            <button onClick={() => onRemovePlayList(i)}>삭제</button>
          </li>
        ))}
        <li>
          <h3>Summer</h3>
          <p>Joe Hisaishi</p>
        </li>
      </ul>
      <div>
        <p>
          곡명 :{" "}
          <input name="title" value={song.title} onChange={onChangeValue} />
        </p>
        <p>
          가수/작곡 :{" "}
          <input name="signer" value={song.signer} onChange={onChangeValue} />
        </p>
        <p>
          <button onClick={onAddPlayList}>추가</button>
        </p>
      </div>
    </>
  );
}

export default State1;
