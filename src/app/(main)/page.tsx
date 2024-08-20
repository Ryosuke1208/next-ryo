import { Button, Card, CardActions, CardContent, Grid } from "@mui/material";

const Page = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <h2>Dialog</h2>
          </CardContent>
          <CardActions>
            <Button href="/dialog">Move Dialog Page</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <h2>Dialogs</h2>
          </CardContent>
          <CardActions>
            <Button href="/dialogs">Move Dialogs Page</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <h2>ErrorBoundary</h2>
          </CardContent>
          <CardActions>
            <Button href="/error-boundary">Move ErrorBoundary Page</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <h2>Calendar</h2>
          </CardContent>
          <CardActions>
            <Button href="/calendar">Move Calendar Page</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <h2>Parallel</h2>
          </CardContent>
          <CardActions>
            <Button href="/parallel">Move Parallel Page</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <h2>Parallel-Default</h2>
          </CardContent>
          <CardActions>
            <Button href="/parallel-default">Move Parallel-Default Page</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <h2>Parallel-Catch-All</h2>
          </CardContent>
          <CardActions>
            <Button href="/parallel-catch-all">Move Parallel-Catch-All</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <h2>Intercepting</h2>
          </CardContent>
          <CardActions>
            <Button href="/intercepting">Intercepting</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <h2>Form</h2>
          </CardContent>
          <CardActions>
            <Button href="/form">Form</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <h2>SideBar</h2>
          </CardContent>
          <CardActions>
            <Button href="/sidebar">SideBar</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <h2>SideBar-Layout</h2>
          </CardContent>
          <CardActions>
            <Button href="/sidebar-layout">SideBar-Layout</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Page;
