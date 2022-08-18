import { Paper, Grid, Avatar, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteComment,
  editComment,
  sendReply,
} from "../redux/modules/detailSlice";
import { getUserData } from "../storage/Cookie";
import Reply from "./Reply";

function Comment({ comment, postId, recDetail }) {
  const dispatch = useDispatch();
  const userdata = getUserData();

  let userCheck;

  if (userdata) {
    userCheck = userdata.username;
  } else {
    userCheck = "";
  }
  const [editToggle, setEditedToggle] = useState(false);
  const [editedComment, setEditedComment] = useState("");

  const [reply, setReply] = useState("");

  const ids = {
    postid: postId,
    commentId: comment.id,
    content: editedComment,
    replyContent: reply,
  };

  const onDeleteComment = () => {
    dispatch(deleteComment(ids));
  };

  const onToggleEdit = () => {
    setEditedToggle(true);
  };

  const onFinishEdit = () => {
    dispatch(editComment(ids));
    setEditedToggle(false);
  };

  const onFinishReply = () => {
    setReply("");
    dispatch(sendReply(ids));
  };

  return (
    <Paper style={{ padding: "40px 20px" }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="user" src={comment.user.profileImageUrl} />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>
            {comment.user.username}
          </h4>
          {editToggle === false ? (
            <p style={{ textAlign: "left" }}>{comment.content}</p>
          ) : (
            <>
              <TextField
                onChange={(e) => {
                  setEditedComment(e.target.value);
                }}
                value={editedComment}
              />
              <Button
                onClick={() => {
                  onFinishEdit();
                }}
              >
                편집완료
              </Button>
            </>
          )}

          <p style={{ textAlign: "left", color: "gray" }}>
            {comment.createdAt}
          </p>

          {userCheck === comment.user.username ? (
            <>
              <Button
                color="warning"
                onClick={() => {
                  onDeleteComment();
                }}
              >
                Delete
              </Button>
              <Button
                onClick={() => {
                  setEditedToggle(true);
                }}
              >
                Edit
              </Button>
            </>
          ) : null}

          {recDetail.user.username === userCheck ? (
            <>
              <TextField
                onChange={(e) => {
                  setReply(e.target.value);
                }}
                value={reply}
                fullWidth
              />
              <Button
                onClick={() => {
                  onFinishReply();
                }}
              >
                답변완료
              </Button>
            </>
          ) : null}

          {comment.recommentList &&
            comment.recommentList.map((r) => (
              <Reply recomment={r} comment={comment} userCheck={userCheck} />
            ))}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Comment;
