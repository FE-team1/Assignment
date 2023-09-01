import { useState } from "react";
import PlayListMock from "../../__mock__/playList.json";

function Article (props) {
  <>
    <h3>{props.title}</h3>
    <p>{props.signer}</p>
  </>
}

function Create (props) {
  return(
    <>
    <form onSubmit={(e) => {
      e.preventDefault();
      const title = e.target.title.value;
      const signer = e.target.signer.value;
      props.onCreate(title, signer);
    }}>
      <p>
        곡명 : <input type='text' name="title"/>
      </p>
      <p>
        가수/작곡 : <input type='text' name="signer"/>
      </p>
        <p>
        <input type='submit' value='추가'/>
      </p>
      </form>
      </>
  )
}


function Ul (props) {
  const lis = []
  for(let i=0; i<props.playLists.length; i++){
    let p = props.playLists[i];
    lis.push(<li key={p.id}>
      <a id={p.id} href={"/read/"+p.id} style={{textDecoration:'none', color:'red'}} onClick={(e) => {
        e.preventDefault();
        // mode 바꾸기 위해 props로 전달받음
        props.onChangeMode();
        props.onChangeMode(Number(e.target.id))
      }}>
        <h3>{p.title}</h3><p>{p.signer}</p></a></li>)
  }
  return (
    <ol style={{listStyle:'none'}}>
      {lis}
    </ol>
  )
}

function State1() {
  console.log(PlayListMock.playlist);

  const [mode, setMode] = useState('CREATE');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(2);
  const [playLists, setPlayLists] = useState([
    {id: 1, title: 'Summer', signer: 'Joe Hisaishi'},
  ])
  
  let content = null;
  if (mode === 'CREATE') {
    content = 
    <Create onCreate={(_title, _signer) => {
      const newSong  = {id:nextId, title:_title, signer:_signer}
      const newSongs = [...playLists];
      newSongs.push(newSong);
      setPlayLists(newSongs)
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  }
  else if (mode === 'READ') {
    let title, signer = null;
    for (let i=0; i<playLists.length; i++) {
      if(playLists[i].id === id){
        title = playLists[i].title;
        signer = playLists[i].signer;
        console.log(playLists[i].id, id)
      }
    }
    content = 
    <>
    <Article title={title} signer={signer}></Article>
    <Create></Create>
    <input type="button" value='삭제' 
    onClick={() => {
      const newPlayLists = [];
      for(let i=0; i<playLists.length; i++) {
        if(playLists[i].id !== id) {
          newPlayLists.push(playLists[i])
        }
      }
      setPlayLists(newPlayLists);
      setMode('READ')}}
    />
    </>
  }


  return (
    <>
      <h1>문제1</h1>
      <Ul playLists={playLists} onChangeMode={(_id) => {
          setMode('READ');
          setId(_id);
        }}>
        {/* list */}
        {/* 예시 데이터입니다 */}
        <li >
        </li>
      </Ul>
      <Article></Article>
      {content}
    </>
  );
}
export default State1;
