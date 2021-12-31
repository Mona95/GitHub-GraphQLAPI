import React, { useState } from "react";
import { useMutation } from "@apollo/client";

// components
import Issue from "../Issue/Issue";

// queries
import { CREATE_ISSUE } from "../../queries/query";

// @material-ui components/icons
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import { Typography, Button } from "@material-ui/core";

// styles
import { useStyles } from "./style.js";

// implement the transition effect for the modal to be opened/closed
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const IssueList = ({ open, handleClose, fetchIssues, issues, repoId }) => {
  const [createForm, setCreateForm] = useState(false);
  const [formValues, setFormValues] = useState({
    title: "",
    body: "",
  });

  const classes = useStyles();

  const [addIssue] = useMutation(CREATE_ISSUE);

  // update the create issue form values (title & body)
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  // in Modal, toggles between create form and issue list 
  const displayForm = () => {
    setCreateForm(!createForm);
    // resets the values inside form inputs
    setFormValues({
      title: "",
      body: "",
    });
  };

  // after closing the modal, resets the state of form
  const handleCloseModal = () => {
    setCreateForm(false);
    handleClose();
  };

  // handles adding the issue with the provided values
  const handleSubmitIssue = (e) => {
    e.preventDefault();
    addIssue({
      variables: {
        repo_id: repoId,
        title: formValues.title,
        body: formValues.body,
      },
    });
    setCreateForm(false);
    // fetch the issues after creating, so we can have the updated list
    fetchIssues();
  };
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleCloseModal}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleCloseModal}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Open Issues
          </Typography>
          <Button
            autoFocus
            color="inherit"
            className={classes.create_issue_form_button}
            onClick={displayForm}
          >
            {!createForm ? "New issue" : "Back to issues list"}
          </Button>
        </Toolbar>
      </AppBar>
      {!createForm ? (
        <List className={classes.issues_list}>
          {issues &&
            issues.repository.issues.nodes.map((issue, i) => (
              <Issue key={i} issue={issue} />
            ))}
        </List>
      ) : (
        <form
          className={classes.form}
          onSubmit={handleSubmitIssue}
          autoComplete="off"
        >
          <Typography variant="h5">Open a new issue</Typography>
          <TextField
            value={formValues.title}
            className={classes.input_field}
            onChange={handleChange}
            required
            id="title"
            name="title"
            label="Title"
          />
          <TextField
            id="description"
            name="body"
            label="Description"
            multiline
            maxRows={10}
            value={formValues.body}
            className={classes.input_field}
            onChange={handleChange}
            variant="outlined"
          />
          <div className={classes.form_buttons}>
            <Button type="submit" className={classes.create_issue_button}>
              Create
            </Button>
            <Button
              onClick={() => setCreateForm(false)}
              className={classes.cancel_button}
            >
              Cancel
            </Button>
          </div>
        </form>
      )}
    </Dialog>
  );
};

export default IssueList;
