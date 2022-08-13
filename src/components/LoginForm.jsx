import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ButtonGroup, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

export const LoginForm = () => {

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
        로그인
        </Typography>
        <TextField margin="normal" label="User ID" name="userId" required fullWidth  sx={{mt:5 , mb:3}}/>
        <TextField margin="normal" label="Password" name="pw" type="password" required fullWidth />
        <ButtonGroup fullWidth sx={{mt:5}}>  
          <Button type="submit" variant='contained' >회원가입</Button>
          <Button type="submit" variant='outlined' >로그인</Button>
        </ButtonGroup>
        </Box>
    </StBox>
  )
}

export default LoginForm;


const StBox = styled.div`
  width: 600px;
  height : 390px;
  border : 1px solid gray;
  border-radius: 8px;
  margin: 0 auto;
  margin-top : 200px;
  padding: 1em;
`;
