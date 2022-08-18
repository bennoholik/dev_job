import { Button, AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getCookieToken,
  getUserData,
  removeCookieToken,
  removeUserData,
} from "../storage/Cookie";

function Header() {
  const cookie = getCookieToken();

  if (cookie) {
    console.log("i have cookie");
  }

  const userdata = getUserData();

  const navigate = useNavigate();

  const logout = () => {
    removeCookieToken();
    removeUserData();
    window.location.href = "/";
  };

  let userCheck;

  if (userdata) {
    userCheck = userdata;
  } else {
    userCheck = "";
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                to="/"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  underliine: "none",
                }}
              >
                DevJob
              </Link>
            </Typography>

            {cookie ? (
              <>
                <Typography>{userCheck.username}님 안녕하세요!</Typography>
                <Button
                  color="inherit"
                  onClick={() => {
                    logout();
                  }}
                >
                  로그아웃
                </Button>
              </>
            ) : (
              <Button color="inherit">
                <Link
                  to="/login"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    underliine: "none",
                  }}
                >
                  로그인
                </Link>
              </Button>
            )}
            {userCheck.authority === "ROLE_RECRUITER" ? (
              <>
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
              </>
            ) : null}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
