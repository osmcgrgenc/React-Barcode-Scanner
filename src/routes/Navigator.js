import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon from '../views/BarcodeScanner/barcodeScanner';
import HomeScreen from '../views/mainpage';
import SearchScreen from '../views/Products/productList';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// $FlowFixMe

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const HomeStack = createStackNavigator();
function Navigasyon() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
export {Navigasyon};
// const TabNavigator = createBottomTabNavigator(
//   {
//     Home: HomeStack,
//     Search: SearchStack,
//     Notifications: NotificationsStack,
//   },
//   {
//     navigationOptions: ({navigation}) => ({
//       tabBarIcon: () => {
//         const {routeName} = navigation.state;
//         if (routeName === 'Home') {
//           return (
//             <FontAwesome5
//               style={styles.buttonIcon}
//               name="rocketchat"
//               size={this.iconSize}
//               color="black"
//             />
//           );
//         } else if (routeName === 'Search') {
//           return (
//             <FontAwesome5
//               style={styles.buttonIcon}
//               name="rocketchat"
//               size={this.iconSize}
//               color="black"
//             />
//           );
//         } else if (routeName === 'Notifications') {
//           return (
//             <FontAwesome5
//               style={styles.buttonIcon}
//               name="rocketchat"
//               size={this.iconSize}
//               color="black"
//             />
//           );
//         }
//       },
//     }),
//     initialRouteName: 'Home',
//   },
// );

// const doNotShowHeaderOption = {
//   navigationOptions: {
//     header: null,
//   },
// };

// const Navigation = createStackNavigator({
//   Tabs: {
//     screen: TabNavigator,
//     ...doNotShowHeaderOption,
//   },
//   SinglePost: {screen: SinglePostScreen},
//   NewPost: {screen: StatusUpdateScreen},
//   EditProfile: {screen: EditProfileScreen},
// });

// export default Navigation;
