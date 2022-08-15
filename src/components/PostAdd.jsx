import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { TextField, MenuItem, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecruit } from "../redux/modules/recruitSlice";

export const PostAdd = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [stack, setStack] = useState([]);

  const now = Date.now();
  const date = new Date(now).toISOString();

  const dispatch = useDispatch();

  const postData = { date, title, stack, desc };

  let navigate = useNavigate();

  const onSubmitRecruit = () => {
    dispatch(addRecruit(postData));

    setTitle("");
    setDesc("");
    let empty = [];
    setStack(empty);
    let path = `/`;
    navigate(path);
  };

  const addStack = (event) => {
    let copy = [...stack];
    copy.push(event.target.value);
    setStack(copy);
  };

  const handleDelete = (i) => {
    console.log(i);
    let copy = [...stack];
    copy.splice(i, 1);
    setStack(copy);
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
        <Button type="submit" variant="outlined">
          <Link
            to="/"
            style={{
              color: "inherit",
              textDecoration: "none",
              underliine: "none",
            }}
          >
            뒤로
          </Link>
        </Button>

        <Avatar sx={{ m: 1, bgcolor: "#39f" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          채용공고
        </Typography>

        <TextField
          margin="normal"
          label="채용 분야 제목"
          name="companyName"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          required
          fullWidth
        />

        <TextField
          sx={{ mt: 2, mb: 2 }}
          fullWidth
          label="필수스텍"
          select
          value={stack}
          onChange={addStack}
          color="secondary"
          helperText="필수스텍 하나 이상 선택하세요."
        >
          <MenuItem value="JavaScript">JavaScript</MenuItem>
          <MenuItem value="TypeScript">TypeScript</MenuItem>
          <MenuItem value="jQuery">jQuery</MenuItem>
          <MenuItem value="Vue">Vue</MenuItem>
          <MenuItem value="HTML5">HTML5</MenuItem>
          <MenuItem value="React">React</MenuItem>
          <MenuItem value="Spring">Spring</MenuItem>
          <MenuItem value="Java">Java</MenuItem>
          <MenuItem value="Docker">Docker</MenuItem>
          <MenuItem value="node.js">node.js</MenuItem>
        </TextField>
        <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
          {stack.map((s, i) => (
            <Chip
              label={s}
              onDelete={() => {
                handleDelete(i);
              }}
            />
          ))}
        </Stack>
        <TextField
          id="outlined-multiline-static"
          label="상세정보"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          value={desc}
          multiline
          rows={10}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 1.5, mb: 1 }}
          onClick={() => {
            onSubmitRecruit();
          }}
        >
          작성
        </Button>
      </Box>
    </StBox>
  );
};

export default PostAdd;

const StBox = styled.div`
  width: 600px;
  height: 680px;
  border: 1px solid gray;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 200px;
  padding: 1em;
`;
