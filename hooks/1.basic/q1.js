import { useState } from 'react';
import styled from 'styled-components';


function Q1() {
    const [valid, setValid] = useState(false);
    const [show, setShow] = useState(false);
    const onBtnClick = () => setShow(!show)

    const onChangeValue = (e) => { 
        if (e.target.value === e.target.placeholder)
        setValid(true);
        else setValid(false);
    };

    let content = null;
    if (show) {
        content = '보이기';
    } else {
        content = '숨기기'
    }

    return (
        <>
            <h1>문제1</h1>
            <div>
                <h2>문제1-1.</h2>
                <input
                    type="text"
                    placeholder={"김가영"}
                    style={{ textAlign: "center" }}
                    onChange={onChangeValue}
        />
                <S.Message valid={valid}> 
                {/* props 전달! */}
                    {valid ? '올바르게 입력하셨습니다.' : '올바르게 글을 작성해주세요.'}
                </S.Message>
            </div>

            <div>
                <h2>문제1-2. </h2>
                <button value={show} onClick={() => {
                    onBtnClick();
                }}>{content}</button>
                <p>
                    {show ? '' : '이 문구는 보이기 상태일 때만 볼 수 있습니다'}
                </p>
            </div>
        </>
    );
}
export default Q1;

const Message = styled.p`
    color : ${(props) => (props.valid ? "green" : "red")};
;`

const S = {
    Message,
};
