import { ApolloProvider } from "@apollo/client";
import client from "./client/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import RepositoryList from "./components/RepositoryList/RepositoryList";
import UserList from "./components/UserList/UserList";

// @material-ui components/icons
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <>
      {/** providing apollo/client to the app components */}
      <ApolloProvider client={client}>
        <Container maxWidth={"md"}>
          {/** defining application routes */}
          <Router>
            <Routes>
              <Route exact path="/" element={<UserList />} />
              <Route exact path="/:username" element={<RepositoryList />} />
            </Routes>
          </Router>
        </Container>
      </ApolloProvider>
    </>
  );
};

export default App;
