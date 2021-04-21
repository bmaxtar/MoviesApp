import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'

const Tab = createBottomTabNavigator();

class Navigation extends React.Component {
  render() {
    return (
       /* <Stack.Navigator>
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="FilmDetail" component={FilmDetail} />
        </Stack.Navigator> */
        <Tab.Navigator>
        <Tab.Screen name="Search" component={Search} style={width= 30, height= 30} />
        <Tab.Screen name="FilmDetail" component={FilmDetail} />
      </Tab.Navigator>

    );
  }
}


export default Navigation