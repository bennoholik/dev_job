import Header from "../components/Header";

import { Container, Grid } from "@mui/material";

import JobList from "../components/JobList";
import JobDetail from "../components/JobDetail";
import { Outlet } from "react-router-dom";

function Mainpage() {
  return (
    <Container maxWidth="xl">
      <Header />
      <Grid container>
        <Grid item xs="8">
          <JobList />
        </Grid>
        <Grid item xs="4">
          <Outlet></Outlet>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Mainpage;
