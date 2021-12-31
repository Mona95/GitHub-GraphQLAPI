import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

// components
import Repository from "../Repository/Repository";

// queries
import { SERACH_REPO_BY_OWNER } from "../../queries/query";

// @material-ui components/icons
import { Typography, CircularProgress } from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";

// styles
import { useStyles } from "./style.js";

const RepositoryList = () => {
  const classes = useStyles();
  const params = useParams();

  const [getRepos, { loading, error, data }] =
    useLazyQuery(SERACH_REPO_BY_OWNER);

  useEffect(() => {
    getRepos({ variables: { username: params.username } });
  }, [getRepos, params.username]);

  if (loading) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Typography
        variant={"overline"}
        className={classes.note}
        component={"div"}
        color={"error"}
      >
        {error}
      </Typography>
    );
  }

  if (!data?.user?.repositories.totalCount) {
    return (
      <Typography
        variant={"overline"}
        className={classes.note}
        component={"div"}
      >
        There are no repositories for this user!
      </Typography>
    );
  }

  return (
    <div className={classes.container}>
      <Link className={classes.backlink} to="/">
        Back to home
      </Link>
      <div className={classes.userInfo}>
        <div className={classes.user_img}>
          <img
            className={classes.user_img}
            src={`https://github.com/${data.user.login}.png`}
            alt={`${data.user.login.trim()}`}
          />
        </div>
        <div className={classes.user_bio_wrapper}>
          <div className={classes.user_name}>{data.user.name}</div>
          <div className={classes.user_bio}>{data.user.bio}</div>
          {data.user.websiteUrl && (
            <div>
              <a className={classes.user_website} href={data.user.websiteUrl}>
                {data.user.websiteUrl}
              </a>
            </div>
          )}
        </div>
      </div>
      <Typography
        component={"div"}
        className={classes.repoListTitle}
        variant={"h5"}
      >
        <ListIcon />
        Repositories
      </Typography>
      {data.user.repositories.edges.map((repo, i) => (
        <Repository repo={repo} key={i} />
      ))}
    </div>
  );
};

export default RepositoryList;
