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

function JobDetail() {
  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          [토스] - 프론트 엔드 개발자 채용
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
              비바리퍼블리카
            </Typography>
          </Grid>
        </Grid>

        <br />
        <Typography>2022/2/18</Typography>
        <br />
        <Chip label="React" color="primary" />
        <br />
        <br />
        <Typography variant="body1" color="text.secondary">
          토스(비바리퍼블리카)는 2015년 2월 공인인증서 없이 쉽고 빠르게 송금할
          수 있는 간편 송금 서비스 ‘토스’를 선보인 이래, 보험과 결제, 증권, 은행
          부문에서 여러 계열사를 출범시키며 국내 대표 핀테크 기업으로
          성장했습니다. 대한민국 금융 혁신을 선도하고 있는 토스에는 각 분야 최고
          수준의 역량을 갖춘 인재들이 모여 자율과 책임의 원칙 아래 상호 신뢰의
          문화에서 일하고 있습니다. 어렵고 복잡한 금융 경험을 혁신해 가슴 뛰는
          변화를 함께 만들어 나가며, 최고의 동료들과 함께 성장할 수 있는 곳에서
          일하고 싶지 않으신가요? 대한민국 금융 혁신을 위해 새로운 도전을 함께
          할 멋진 동료를 기다립니다.
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

export default JobDetail;
