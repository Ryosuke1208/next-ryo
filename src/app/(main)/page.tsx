import { Button, Card, CardActions, CardContent, Grid } from "@mui/material";

const page = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <h2>Dialog Sample Page</h2>
          </CardContent>
          <CardActions>
            <Button size="small" href="/dialog">
              Move Dialog Page
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <h2>Dialogs Sample Page</h2>
          </CardContent>
          <CardActions>
            <Button size="small" href="/dialogs">
              Move Dialogs Page
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default page;
