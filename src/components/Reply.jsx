import { Paper, Grid, Avatar, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteReply, editReply } from "../redux/modules/detailSlice";

function Reply({ recomment, userCheck, comment }) {
  const dispatch = useDispatch();
  const onDeleteReply = () => {
    dispatch(deleteReply(replydata));
  };

  const [replyEditToggle, setReplyEditToggle] = useState(false);
  const [replyEditedComment, setReplyEditedComment] = useState("");
  const replydata = {
    commentId: comment.id,
    recommentId: recomment.id,
    editedContent: replyEditedComment,
  };

  const onEditReply = () => {
    dispatch(editReply(replydata));
    setReplyEditToggle(false);
    setReplyEditedComment("");
  };

  return (
    <Paper style={{ padding: "40px 20px", background: "#eee" }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="user" src={recomment.profileImageUrl} />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>{recomment.username}</h4>

          {replyEditToggle === false ? (
            <p style={{ textAlign: "left", color: "gray" }}>
              {recomment.content}
            </p>
          ) : (
            <>
              <TextField
                onChange={(e) => {
                  setReplyEditedComment(e.target.value);
                }}
                value={replyEditedComment}
              />
              <Button
                onClick={() => {
                  onEditReply();
                }}
              >
                편집완료
              </Button>
            </>
          )}

          {userCheck === recomment.username && replyEditToggle === false ? (
            <>
              <Button
                color="warning"
                onClick={() => {
                  onDeleteReply();
                }}
              >
                Delete
              </Button>
              <Button onClick={() => setReplyEditToggle(true)}>Edit</Button>
            </>
          ) : null}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Reply;
