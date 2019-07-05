import React,{Component} from "react";
import Home from "./index";
import AddScreen from "./addscreen";
import { createStackNavigator, createAppContainer } from "react-navigation";
// export default class App extends Component {
//   render() {
//     return <Home />;
//   }
// }
// export default function App() {
//   return <Home />;
// }
const App = createStackNavigator(
  {
    Home: { screen: Home },

    AddScreen: { screen: AddScreen }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(App);
