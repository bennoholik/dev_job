import { Button, AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
              <Link
                to="/recruit"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  underliine: "none",
                }}
              >
                채용공고올리기
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
