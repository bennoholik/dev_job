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

function JobDetail() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { isLoading, error, recruits, isFinish } = useSelector(
    (state) => state.recruits
  );

  useEffect(() => {
    dispatch(getRecruitsData());
  }, []);

  if (error) {
    return <div>{error.message}</div>;
  }

  const rec = recruits.find((r) => r.id === Number(id));

  if (isFinish) {
    return (
      <Card sx={{ maxWidth: 800 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {rec.jobTitle}
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
          <Typography>{rec.createdAt}</Typography>
          <br />

          <br />
          <br />
          <Typography variant="body1" color="text.secondary">
            {rec.description}
          </Typography>
        </CardContent>

        <Grid container sx={{ px: "10px", my: "10px" }}>
          <Grid item xs="9.5">
            <TextField
              fullWidth
              id="fullwidth"
              sx={{ height: "50px" }}
              label="문의사항"
            />
          </Grid>

          <Grid item xs="2">
            <Button variant="contained" sx={{ height: "50px", mx: "10px" }}>
              <SendIcon />
            </Button>
          </Grid>
        </Grid>

        <Comment></Comment>
        <Comment />
      </Card>
    );
  }
}

export default JobDetail;
