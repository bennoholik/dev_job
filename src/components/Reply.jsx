import { Paper, Grid, Avatar, Button, TextField } from "@mui/material";

function Reply({ recomment }) {
  return (
    <Paper style={{ padding: "40px 20px", background: "#eee" }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="user" />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>{recomment.username}</h4>

          <p style={{ textAlign: "left", color: "gray" }}>
            {recomment.content}
          </p>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Reply;
