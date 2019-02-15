import React from 'react';
import MeetingView from './MeetingView';
import MeetingForm from './MeetingForm';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
    list: {
      screen: MeetingView,
      navigationOptions: () => ({
        title: 'Program',
        headerStyle: {
            backgroundColor: '#0077B5',
        },
        headerTintColor: '#fff',
        headerForceInset: { top: 'never', bottom: 'never' }
      })
    },
    form: {
        screen: MeetingForm,
        navigationOptions: () => ({
          title: 'Add Meeting Program',
          headerStyle: {
              backgroundColor: '#0077B5',
          },
          headerTintColor: '#fff',
          headerForceInset: { top: 'never', bottom: 'never' }
        })
      },
},
{
    initialRouteName: "list"
  });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;