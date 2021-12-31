import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_FOR_USERS } from "../../queries/query";

// components
import User from "../User/User";

// @material-ui components/icons
import {
  TextField,
  InputAdornment,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// styles
import { useStyles } from "./style";

const UserList = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const [getUsers, { loading, error, data }] = useLazyQuery(SEARCH_FOR_USERS);

  return (
    <div className={classes.container}>
      {/** ------------ SearchBar ------------- */}
      <div className={classes.searchWrapper}>
        <TextField
          className={classes.input}
          label="Search for users..."
          type="search"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          className={classes.searchButton}
          variant="contained"
          disabled={value.trim() === ""}
          onClick={() => getUsers({ variables: { name: value } })}
          color="primary"
        >
          Search
        </Button>
      </div>
      {/** ------------ Content -------------- */}
      <div className="content">
        {loading ? (
          <div className={classes.spinnerContainer}>
            <CircularProgress />
          </div>
        ) : !data?.search?.userCount ? (
          <Typography
            variant={"overline"}
            className={classes.note}
            component={"div"}
          >
            There are no such users!
          </Typography>
        ) : (
          <div className={classes.userList}>
            {data.search.edges.map((data, id) => (
              <User key={id} user={data} />
            ))}
          </div>
        )}
        {error && (
          <Typography
            variant={"overline"}
            className={classes.note}
            component={"div"}
            color={"error"}
          >
            {error}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default UserList;
