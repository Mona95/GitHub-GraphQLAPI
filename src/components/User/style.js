import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
    minHeight: 295,
    boxShadow: "none",
    border: "1px solid lightgray",
    margin: "auto",
    borderRadius: 15,
    "&:hover": {
      boxShadow: "-2px 1px 11px -3px rgba(0,0,0,0.73)",
    },
  },
  card: {
    padding: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 800,
    textAlign: "center",
    marginTop: 10,
  },
  pos: {
    marginBottom: 12,
  },
  user_img_wrapper: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  user_img: {
    width: "100%",
    height: "100%",
    minHeight: 205,
    objectFit: "cover",
  },
  repoLink: {
    textDecoration: "none",
    color: "gray",

    display: "flex",
    alignItems: "center",
    transition: "all 300ms",
    "&:hover": {
      color: "#000",
      transition: "all 300ms",
      transform: "scale(1.2)",
    },
  },
});
