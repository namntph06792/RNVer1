import React from "react";
import { TouchableOpacity, Image, Button } from "react-native";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Admin from "./screens/Admin";
import Post from "./screens/Post";
import Camera from "./components/Capture";
import Feed from "./fragments/Feed";
import Profile from "./fragments/Profile";
import Setting from "./fragments/Setting";
import { Ionicons } from 'react-native-vector-icons';
import firebase from 'firebase';

import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

const HomeNavigator = createBottomTabNavigator(
  {
    Feed: {
      screen: Feed
    },
    Profile: {
      screen: Profile
    },
    Setting: {
      screen: Setting
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Feed') {
          iconName = `ios-home`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === 'Profile') {
          iconName = 'ios-contact';
        } else if (routeName === 'Setting') {
          iconName = 'ios-menu';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  }
)

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
    Home: {
      screen: HomeNavigator,
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


