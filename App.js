import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import { Header, Icon } from 'react-native-elements'

const Home = () => <Text style={styles.header}>Home</Text>;

const About = () => <Text style={styles.header}>About</Text>;

const Topic = ({ match }) => (
  <Text style={styles.topic}>{match.params.topicId}</Text>
);

const Topics = ({ match }) => (
  <View>
    <Text style={styles.header}>Topics</Text>
    <View>
      <Link
        to={`${match.url}/rendering`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Rendering with React</Text>
      </Link>
      <Link
        to={`${match.url}/components`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Components</Text>
      </Link>
      <Link
        to={`${match.url}/props-v-state`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Props v. State</Text>
      </Link>
    </View>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => (
        <Text style={styles.topic}>Please select a topic.</Text>
      )}
    />
  </View>
);

const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Header
          placement="left"
          leftComponent={
          <View style={styles.leftContain}>
            <Icon
              name='menu'
              color='#fff' />
          </View>
          }
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        />
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Home</Text>
        </Link>
        <Link
          to="/about"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>About</Text>
        </Link>
        <Link
          to="/topics"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>Topics</Text>
        </Link>
        <Link
          to="/topics"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>Toxic</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </View>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  header: {
    fontSize: 20
  },
  leftContain: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App;