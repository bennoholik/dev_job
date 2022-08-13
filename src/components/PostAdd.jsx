import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { TextField, MenuItem} from '@mui/material';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { useState } from 'react';


export const LoginForm = () => {
    const [stack, setStack] = useState([])
    console.log({stack})
    // 전개전산자
    const handleChange = (event) => {
        // let copy = [...stack]
        // copy.push(event.target.value)
        // setStack(copy)
        const multiCheck = event.target.value
        setStack(typeof multiCheck == 'string' ? multiCheck.split(',') : multiCheck)
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
        <Button type="submit" variant='outlined'  >뒤로</Button>
        <Avatar sx={{ m: 1, bgcolor: '#39f' }}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        채용공고 
        </Typography>

        <TextField margin="normal" label="회사명" name="companyName" required fullWidth  />
        {/* <TextField margin="normal" label="필수스텍" name="stack" required fullWidth /> */}
        
    
        <TextField
         sx={{mt:2, mb:8}}fullWidth label='필수스텍' 
         select value={stack} onChange={handleChange}
         SelectProps={{
            multiple:true,
         }}
         color = 'secondary'
         helperText = '필수스텍 하나 이상 선택하세요.'
         error
         >
            <MenuItem value='JavaScript'>JavaScript</MenuItem>
            <MenuItem value='TypeScript'>TypeScript</MenuItem>
            <MenuItem value='jQuery'>jQuery</MenuItem> 
            <MenuItem value='Vue'>Vue</MenuItem>
            <MenuItem value='HTML5'>HTML5</MenuItem>
            <MenuItem value='React'>React</MenuItem>
            <MenuItem value='Spring'>Spring</MenuItem>
            <MenuItem value='Java'>Java</MenuItem>
            <MenuItem value='Docker'>Docker</MenuItem>
            <MenuItem value='node.js'>node.js</MenuItem>
        </TextField>

        <TextField
          id="outlined-multiline-static"
          label="상세정보"
          multiline
          rows={10}
          fullWidth
          
          
        />
        <Button type="submit" variant='outlined' fullWidth sx={{mt:1.5, mb:1}}>작성</Button>
        
        </Box>
    </StBox>
  )
}

export default LoginForm;


const StBox = styled.div`
  width: 600px;
  height : 680px;
  border : 1px solid gray;
  border-radius: 8px;
  margin: 0 auto;
  margin-top : 200px;
  padding: 1em;
`;
