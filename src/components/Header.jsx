import { Button, AppBar, Box, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              DevJob
            </Typography>
            <Button color="inherit">로그인</Button>
            <Button color="inherit" variant="outlined">
              채용공고올리기
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
