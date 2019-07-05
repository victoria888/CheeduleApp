import Scheduled from "./scheduled";
import CompletedTask from "./TaskList";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const TabNaviator = createBottomTabNavigator({
  Scheduled: Scheduled,
  Completed: CompletedTask
});
const Tabstack = createAppContainer(TabNaviator);
export default Tabstack;
