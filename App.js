import React from 'react';
import {TabNavigator} from 'react-navigation';

import {home} from './Components/home';
import {heroes} from './Components/heroes';
import {setting} from './Components/setting';

const Tab = TabNavigator({
  home: {
    screen: home,
  },
  heroes: {
    screen: heroes,
  },
  settings: {
    screen: setting,
  }
},{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: '#f8f8f8',
    activeBackgroundColor: '#586589',
    inactiveTintColor: '#1234',
    style:{
      backgroundColor:'#6EB0C0',
    },

    labelStyle: {
      fontSize: 10,
      color: 'white',
      padding: 5,
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Tab/>
    );
  }
}