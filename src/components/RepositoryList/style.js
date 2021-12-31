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
  userInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "50px auto",
  },
  user_img: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  user_bio_wrapper: {
    paddingLeft: 20,
  },
  user_name: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
  },
  user_bio: {
    fontSize: 17,
    marginBottom: 10,
  },
  user_website: {
    fontWeight: 400,
    textDecoration: "none",
    color: "lightgray",
  },
  backlink: {
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "gray",
    padding: "10px 30px",
    borderRadius: 10,
  },
  repoListTitle: {
    display: "flex",
    alignItems: "center",
  },
});
