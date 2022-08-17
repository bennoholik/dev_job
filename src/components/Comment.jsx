import { Paper, Grid, Avatar } from "@mui/material";

function Comment({ comment }) {
  return (
    <Paper style={{ padding: "40px 20px" }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar
            alt="Remy Sharp"
            src="https://play-lh.googleusercontent.com/oPjTaNy7bQEoq8B7iMr7qbWfHuTGp3l4F5dfQ74YOwSf5Lxul9hUYS8nmIRiVVsUHfYc=w480-h960-rw"
          />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>{comment.content}</h4>
          <p style={{ textAlign: "left" }}>
            문의주셔서 감사합니다. 질문에 대한 답은 이메일을 통해
            전달드렸습니다.
          </p>
          <p style={{ textAlign: "left", color: "gray" }}>
            posted 1 minute ago
          </p>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Comment;
