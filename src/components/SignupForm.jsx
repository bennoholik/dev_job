import React from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { __signUp } from '../redux/modules/signUpSlice';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    
    //  구인자, 구직자
    const [authority, setAuthority] = useState("");
    const [profileImageUrl, setProfileImageUrl] = useState("");
    const [websiteUrl, setWebsiteUrl] = useState("");

    //회원가입 정보
    const [signupData, setSignData] = useState({

    })

    const handleSignup = async (event) => {
        event.preventDefault();

        if (email === "" || username === "" || password === "" || passwordConfirm ==="") {
            return window.alert("이름, 비밀번호를 모두 입력해주세요.")
        } else if(password !== passwordConfirm){
            return window.alert("비밀번호와 비밀번호확인이 같아야 합니다.")
        }
        dispatch(
          __signUp({
            email,
            username,
            password,
            passwordConfirm,
            authority,
            profileImageUrl,
            websiteUrl,
          })
        );
        navigate("/");
        console.log(email, username, authority)
    }

    const checkOnlyOne = (checkThis) => {
      const checkboxes = document.getElementsByName('test')
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkThis) {
          checkboxes[i].checked = false
        }
      }
    }

  return (
    <StBox>
        <Box
          sx={{
            marginTop: 0.5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

        <Avatar sx={{ m: 1, bgcolor: '#39f' }}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        회원가입
        </Typography>
        <TextField margin="normal" label="Email" name="Email" value={email} onChange={(event) => {
            setEmail(event.target.value)
            // console.log(event.target.value)
        }} required fullWidth  />
        <TextField margin="normal" label="Name" name="userName" value={username} onChange={(event) => {
            setUsername(event.target.value)
        }} required fullWidth />

      <div>
        <input type="checkbox" name="test" value="구직자" onChange={(e) => checkOnlyOne(e.target)} /> 구직자
        <input type="checkbox" name="test" value="사업자" onChange={(e) => checkOnlyOne(e.target)} /> 사업자
      </div>

        <TextField margin="normal" label="Password" name="pw" value={password} type="password" onChange={(event) => {
            setPassword(event.target.value)
        }} required fullWidth />
        <TextField margin="normal" label="PasswordCheck" name="pwCheck" type="password" value={passwordConfirm} onChange={(event) => {
            setPasswordConfirm(event.target.value)
        }} required fullWidth />
        <Button type="submit" variant='contained' fullWidth sx={{mt:3, mb:1}} onClick={handleSignup}>회원가입</Button>
        <Button type="submit" variant='outlined' fullWidth>취소</Button>
        </Box>
    </StBox>
  )
}

export default LoginForm;


const StBox = styled.div`
  width: 600px;
  height : 550px;
  border : 1px solid gray;
  border-radius: 8px;
  margin: 0 auto;
  margin-top : 200px;
  padding: 1em;
`;
