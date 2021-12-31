import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    marginTop: "1rem",
  },
  appBar: {
    position: "relative",
  },
  summaryContainer: {
    flexDirection: "column",
    borderBottom: "1px solid lightgray",
    padding: "10px 0",
    marginBottom: 10,
  },
  summaryHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "0.3rem",
  },
  repoDescription: {
    fontSize: 15,
    color: "gray",
  },
  chip: {
    marginLeft: "0.5rem",
  },
  issue_button_wrapper: {
    marginTop: 20,
  },
  issue_button: {
    color: "#fff",
    textTransform: "none",
    fontWeight: "bold",
    transition: "all 300ms",
    padding: "3px 20px",
    backgroundColor: "#000",
    width: "max-content",
    borderRadius: "15px",
    "&:hover": {
      color: "#000",
    },
  },
});
