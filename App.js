import React from "react";
import { TouchableOpacity, Image, Button } from "react-native";
import LoadingScreen from "./components/LoadingScreen";
import LoginScreen from "./components/LoginScreen";
import UserScreen from "./components/UserScreen";
import RegisterScreen from "./components/RegisterScreen";
import ListPostScreen from "./components/ListPostScreen";
import PostScreen from "./components/PostScreen";
import SetCamera from "./components/SetCamera";
import firebase from 'firebase';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
    Loading: {
      screen: LoadingScreen,
      navigationOptions: {
        header: null,
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      }
    },
    SetCamera: {
      screen: SetCamera,
      navigationOptions: {
        header: null,
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        header: null,
      }
    },
    User: {
      screen: UserScreen,
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
    ListPost: {
      screen: ListPostScreen,
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
      screen: PostScreen,
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


