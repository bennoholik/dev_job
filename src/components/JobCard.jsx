import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Chip,
  Avatar,
  Grid,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

function JobCard({ rec, i }) {
  return (
    <Card key={rec.id}>
      <CardActionArea component={RouterLink} to={`/${rec.id}`}>
        <CardContent sx={{ p: "20px" }}>
          <Typography gutterBottom variant="h5" component="div">
            <Grid container>
              <Grid item xs="1">
                <Avatar
                  alt="toss"
                  src="https://seeklogo.com/images/K/kakao-talk-logo-7542043DFC-seeklogo.com.png"
                />{" "}
              </Grid>
              <Grid>
                {" "}
                <Typography gutterBottom variant="h6" component="div">
                  {rec.jobTitle}
                </Typography>
              </Grid>
            </Grid>
          </Typography>
          <br />

          {rec.techStackList.stackList.map((s, i) => (
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
    </Card>
  );
}

export default JobCard;
