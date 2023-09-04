import { useState } from "react";
import styled from "styled-components";

function Comment({ post, setPost }) {
  const deleteComment = () => {
    // const deletedComment = post.Comments.filter((item) => item.myComment === false);
    // setPost(deletedComment);
  };
  return post.Comments.map((item) => (
    <S.CommentItem>
      <p>
        작성자: <span>{item.User.nickname}</span>
      </p>
      <p>
        댓글 내용: <span>{item.content}</span>
      </p>
      <p>
        <button type="button">수정</button>
      </p>
      <p>
        <button type="button" onClick={deleteComment}>
          삭제
        </button>
      </p>
    </S.CommentItem>
  ));
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};
