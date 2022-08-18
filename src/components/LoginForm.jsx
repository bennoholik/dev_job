import React from "react";
import styled from "styled-components";

import Button from "@mui/material/Button";
import { ButtonGroup, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { __signIn } from "../redux/modules/signInSlice";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    if (username === "" || password === "") {
      return window.alert("사용자와 비밀번호를 모두 입력해주세요.");
    }
    try {
      dispatch(
        __signIn({
          username,
          password,
        })
      );
      navigate("/");
      // window.location.replace("/");
    } catch (err) {
      navigate("signin");
      window.alert("아이디 또는 비밀번호를 확인해주세요.");
      console.log(err);
    }
  };

  const goSignup = () => {
    window.location.replace("/signup");
  };

  return (
    <StBox>
      <Box
        sx={{
          marginTop: 0.5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#39f" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <TextField
          margin="normal"
          label="User ID"
          name="userId"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          required
          fullWidth
          sx={{ mt: 5, mb: 3 }}
        />
        <TextField
          margin="normal"
          label="Password"
          name="pw"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
          fullWidth
        />
        <ButtonGroup fullWidth sx={{ mt: 5 }}>
          <Button type="submit" variant="contained" onClick={handleLogin}>
            로그인
          </Button>
        </ButtonGroup>
        <Button type="submit" onClick={goSignup}>
          회원가입
        </Button>
      </Box>
    </StBox>
  );
};

export default LoginForm;

const StBox = styled.div`
  width: 600px;
  height: 390px;
  border: 1px solid gray;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 200px;
  padding: 1em;
`;
