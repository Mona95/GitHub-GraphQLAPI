import { Link } from "react-router-dom";

// @material-ui components/icons
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ListIcon from "@material-ui/icons/List";

// styles
import { useStyles } from "./style.js";

const User = ({ user }) => {
  const classes = useStyles();
  const {
    node: { login },
  } = user;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.card}>
        <div className={classes.user_img_wrapper}>
          <img
            className={classes.user_img}
            src={`https://github.com/${login}.png`}
            alt={`${login}`}
          />
        </div>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {login}
        </Typography>
      </CardContent>
      <CardActions>
        <Link className={classes.repoLink} to={`/${login}`}>
          <ListIcon />
          See Repositories
        </Link>
      </CardActions>
    </Card>
  );
};

export default User;
