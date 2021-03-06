import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";

// components
import IssueList from "../IssueList/IssueList";

// queries
import { GET_REPO_ISSUES } from "../../queries/query";

// @material-ui components/icons
import { Typography, Chip, Button } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import PeopleIcon from "@material-ui/icons/People";

// styles
import { useStyles } from "./style.js";

const Repository = ({ repo }) => {
  const classes = useStyles();

  const {
    node: {
      id,
      name,
      descriptionHTML,
      owner: { login },
      stargazers: { totalCount: totalStarCount },
    },
  } = repo;
  // defines the modal state
  const [open, setOpen] = useState(false);

  const [getIssues, { data }] = useLazyQuery(GET_REPO_ISSUES);

  // fetch the issues list
  const fetchIssues = () => {
    getIssues({ variables: { name: name, owner: login } });
  };

  // to opens the modal and fetch the issues 
  const handleClickOpen = () => {
    setOpen(true);
    fetchIssues();
  };

  // to close the modal and update the state of it
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.summaryContainer}>
          <div className={classes.summaryHeader}>
            <Typography variant={"h5"}>{name}</Typography>
            <div>
              <Chip
                label={`by ${login}`}
                avatar={<PeopleIcon />}
                className={classes.chip}
              />
              <Chip
                label={totalStarCount}
                avatar={<StarIcon />}
                className={classes.chip}
              />
            </div>
          </div>
          <Typography
            variant={"caption"}
            className={classes.repoDescription}
            dangerouslySetInnerHTML={{ __html: descriptionHTML }}
            component={"div"}
          />
          <div className={classes.issue_button_wrapper}>
            <Button className={classes.issue_button} onClick={handleClickOpen}>
              Check Issues
            </Button>
          </div>
        </div>
      </div>
      <IssueList
        open={open}
        repoId={id}
        fetchIssues={fetchIssues}
        handleClose={handleClose}
        issues={data}
      />
    </>
  );
};

export default Repository;
