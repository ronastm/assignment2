import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainActivity from './src/MainActivity';
import ShowStudentListActivity from './src/ShowStudentListActivity';
import EditStudentRecordActivity from './src/EditStudentRecordActivity';



const RootStack = createStackNavigator(
  {

    EditStudentRecordActivity: {
      screen: EditStudentRecordActivity,
      navigationOptions: {

      }
    },   
    MainActivity: {
      screen: MainActivity,
      navigationOptions: {

      }
    },

    ShowStudentListActivity: {
      screen: ShowStudentListActivity,
      navigationOptions: {

      }
    },
   
  },
  {
    initialRouteName: 'MainActivity', // ini root
  }
);

const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {

  render() {
    return <AppContainer />;
  }
}