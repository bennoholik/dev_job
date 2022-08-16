import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Chip,
  Avatar,
  Grid,
  IconButton,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteRecruit } from "../redux/modules/recruitSlice";
import { getUserData } from "../storage/Cookie";

function JobCard({ rec, i }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onDeletePost = () => {
    dispatch(deleteRecruit(rec.id));
    window.location.href = "/";
  };

  const userdata = getUserData();

  let userCheck;

  if (userdata) {
    userCheck = userdata.username;
  } else {
    userCheck = "";
  }

  return (
    <Card key={rec.id}>
      <CardActionArea component={RouterLink} to={`/${rec.id}`}>
        <CardContent sx={{ p: "20px" }}>
          <Typography gutterBottom variant="h5" component="div">
            <Grid container>
              <Grid item xs="1">
                <Avatar alt="toss" src={rec.user.profileImageUrl} />{" "}
              </Grid>
              <Grid item xs="10">
                {" "}
                <Typography gutterBottom variant="h6" component="div">
                  [{rec.user.username}]{rec.jobTitle}
                </Typography>
              </Grid>
              <Grid item xs="1">
                {userCheck === rec.user.username ? (
                  <>
                    <IconButton
                      aria-label="delete"
                      size="large"
                      color="warning"
                      onClick={() => {
                        onDeletePost();
                      }}
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </>
                ) : null}
              </Grid>
            </Grid>
          </Typography>
          <br />

          {rec.stackList.map((s, i) => (
            <Chip label={s} color="primary" sx={{ m: "4px" }} />
          ))}

          <br />
          <br />
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textOverflow: "ellipsis" }}
          >
            {rec.description}
          </Typography>

          <Typography>{rec.createdAt}</Typography>
        </CardContent>
      </CardActionArea>
      <TextField />
      <TextField
        sx={{ mt: 2, mb: 2 }}
        fullWidth
        label="필수스텍"
        select
        // value={stackList}
        // onChange={addStack}
        color="secondary"
        helperText="필수스텍 하나 이상 선택하세요."
      >
        <MenuItem value="JavaScript">JavaScript</MenuItem>
        <MenuItem value="TypeScript">TypeScript</MenuItem>
        <MenuItem value="jQuery">jQuery</MenuItem>
        <MenuItem value="Vue">Vue</MenuItem>
        <MenuItem value="HTML5">HTML5</MenuItem>
        <MenuItem value="React">React</MenuItem>
        <MenuItem value="Spring">Spring</MenuItem>
        <MenuItem value="Java">Java</MenuItem>
        <MenuItem value="Docker">Docker</MenuItem>
        <MenuItem value="node.js">node.js</MenuItem>
      </TextField>
    </Card>
  );
}

export default JobCard;
