import moment from "moment";

// @material-ui components/icons
import ListItem from "@material-ui/core/ListItem";

// styles
import { useStyles } from "./style.js";

const Issue = ({ issue }) => {
  const classes = useStyles();
  const {
    title,
    createdAt,
    author: { login },
  } = issue;
  return (
    <ListItem className={classes.item_wrapper}>
      <div className={classes.item_title}># {title}</div>
      <div className={classes.item_created_info}>
        <div className={classes.item_createdAt}>
          {moment(createdAt).fromNow()}{" "}
        </div>
        <div className={classes.item_createdBy}> by {login}</div>
      </div>
    </ListItem>
  );
};

export default Issue;
