import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    margin: "100px auto",
  },
  note: {
    marginTop: "1rem",
    textAlign: "center",
  },
  spinnerContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "1rem",
  },
  searchWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 80,
  },
  input: {
    flex: 8,
    marginRight: 20,
  },
  searchButton: {
    flex: 2,
    height: "100%",
    padding: "15px",
  },
  userList: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridRowGap: "13px",
  },
});
