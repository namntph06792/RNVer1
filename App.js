import React from "react";
import { TouchableOpacity, Image, Button } from "react-native";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Feed from "./screens/Feed";
import Register from "./screens/Register";
import Admin from "./screens/Admin";
import Post from "./screens/Post";
import Camera from "./components/Capture";
import firebase from 'firebase';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      }
    },
    Capture: {
      screen: Camera,
      navigationOptions: {
        header: null,
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        header: null,
      }
    },
    Feed: {
      screen: Feed,
      navigationOptions: ({ navigate, navigation }) => ({
        headerLeft: (
          <Button
            title="Log out"
            onPress={() => {
              firebase.auth().signOut()
                .then(e => { navigation.navigate('Login') })
                .catch(err => alert(err))
            }}
          />
        ),
        headerTitle: (
          <Image source={require('./assets/react-native-logo.png')} style={{ width: 30, height: 30 }} />
        ),
        headerRight: (
          <TouchableOpacity activeOpacity={0.5}>
            <Image source={require('./assets/hamburger.png')} style={{ width: 25, height: 25, marginRight: 5 }} />
          </TouchableOpacity>
        )
      })
    },
    // FeedDetail: {
    //   screen: FeedDetail,
    //   navigationOptions: {
    //     header: null,
    //   }
    // },
    Admin: {
      screen: Admin,
      navigationOptions: ({ navigate, navigation }) => ({
        headerLeft: (
          <Button
            title="Log out"
            onPress={() => {
              firebase.auth().signOut()
                .then(e => { navigation.navigate('Login') })
                .catch(err => alert(err))
            }}
          />
        ),
        title: 'DashBoard',
        headerRight: (
          <TouchableOpacity activeOpacity={0.5} onPress={() => { navigation.navigate("Post") }}>
            <Image
              source={require('./assets/plus.png')}
              style={{ width: 30, height: 30, marginRight: 10 }}
            />
          </TouchableOpacity>
        ),
      })
    },
    Post: {
      screen: Post,
      navigationOptions: {
        title: 'New Post',
        headerRight: (
          <TouchableOpacity activeOpacity={0.5}>
            <Image
              source={require('./assets/hamburger.png')}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        ),
      }
    },
  }, {
    defaultNavigationOptions: {
      gesturesEnabled: false,
      swipeEnabled: false,
      cardStack: {
        gesturesEnabled: false,
        swipeEnabled: false,
      }
    }
  }, {
    mode: 'modal',
    //headerMode: null,
  });

const AppContainer = createAppContainer(MainNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}


