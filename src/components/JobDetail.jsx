import {
  Card,
  CardContent,
  Typography,
  Chip,
  Grid,
  Avatar,
  Button,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getRecruitsData } from "../redux/modules/recruitSlice";
import { getRecruitDetail, sendComment } from "../redux/modules/detailSlice";
import { getUserData } from "../storage/Cookie";

function JobDetail() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { recDetail, isFinish } = useSelector((state) => state.recDetail);

  const [comment, setComment] = useState("");
  // const rec = recruits.find((r) => r.id === Number(id));

  useEffect(() => {
    dispatch(getRecruitDetail(Number(id)));
  }, [dispatch, id]);

  const onSendComment = () => {
    const data = {
      pid: Number(id),
      content: comment,
    };
    dispatch(sendComment(data));
  };

  const userdata = getUserData();
  let userCheck;

  if (userdata) {
    userCheck = userdata.authority;
  } else {
    userCheck = "";
  }

  if (isFinish) {
    return (
      <Card sx={{ maxWidth: 800 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {recDetail.jobTitle}
          </Typography>
          <Grid container>
            <Grid item xs="1.5">
              {" "}
              <Avatar
                alt="toss"
                src="https://play-lh.googleusercontent.com/oPjTaNy7bQEoq8B7iMr7qbWfHuTGp3l4F5dfQ74YOwSf5Lxul9hUYS8nmIRiVVsUHfYc=w480-h960-rw"
              />{" "}
            </Grid>
            <Grid>
              {" "}
              <Typography gutterBottom variant="h6" component="div">
                Toss
              </Typography>
            </Grid>
          </Grid>

          <br />
          <Typography>{recDetail.createdAt}</Typography>
          <br />

          <Typography variant="body1" color="text.secondary">
            {recDetail.description}
          </Typography>
        </CardContent>

        {userCheck === "ROLE_JOB_SEEKER" ? (
          <Grid container sx={{ px: "10px", my: "10px" }}>
            <Grid item xs="9.5">
              <TextField
                fullWidth
                id="fullwidth"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                value={comment}
                sx={{ height: "50px" }}
                label="문의사항"
                required
              />
            </Grid>

            <Grid item xs="2">
              <Button
                variant="contained"
                onClick={() => {
                  onSendComment();
                }}
                sx={{ height: "50px", mx: "10px" }}
              >
                <SendIcon />
              </Button>
            </Grid>
          </Grid>
        ) : null}

        {recDetail.commentList &&
          recDetail.commentList.map((c) => (
            <Comment comment={c} recDetail={recDetail} postId={Number(id)} />
          ))}
        {/* {recDetail.commentList.map((c) => {
          console.log(c);
        })} */}
      </Card>
    );
  }
}

export default JobDetail;
