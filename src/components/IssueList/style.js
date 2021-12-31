import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  appBar: {
    position: "fixed",
    backgroundColor: "#000",
  },
  create_issue_form_button: {
    position: "absolute",
    right: 30,
    textTransform: "none",
    fontSize: 17,
    fontWeight: "bold",
    backgroundColor: "#2C974B",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#2C974B",
      color: "#fff",
    },
  },
  issues_list: {
    marginTop: 80,
  },
  form: {
    margin: 80,
    display: "flex",
    flexDirection: "column",
  },
  form_buttons: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input_field: {
    marginBottom: 40,
  },
  create_issue_button: {
    width: "45%",
    backgroundColor: "#2C974B",
    border: "1px solid #2C974B",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#2C974B",
    },
  },
  cancel_button: {
    width: "45%",
    backgroundColor: "lightgray",
    border: "1px solid lightgray",
  },
  errors: {
    marginTop: 20,
    color: "#e86c63",
    fontSize: 17,
  },
});
