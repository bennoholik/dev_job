import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";
import { useSelector } from "react-redux";

function JobCard({ rec, i }) {
  return (
    <Card key={rec.id}>
      <CardActionArea href="#">
        <CardContent sx={{ p: "20px" }}>
          <Typography gutterBottom variant="h5" component="div">
            {rec.jobTitle}
          </Typography>
          <br />

          <Chip label={rec.techStackList[0]} color="primary" />
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
