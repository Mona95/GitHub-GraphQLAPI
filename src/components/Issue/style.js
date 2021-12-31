import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  item_wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    margin: "auto",
    border: "1px solid lightgray",
    borderRadius: 10,
    padding: "20px",
    marginBottom: 10,
  },
  item_title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  item_created_info: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontStyle: "italic",
  },
  item_createdAt: {
    marginRight: 7,
    color: "gray",
  },
  item_createdBy: {
    fontWeight: "bold",
  },
});
