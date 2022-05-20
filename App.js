import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import FeedScreen from "./screens/feed";
import  CreatePostScreen from "./screens/CreatePost";
import ProfileScreen from "./screens/profile";





const AppSwitchNavigator = createSwitchNavigator({
  FeedScreen: FeedScreen,
 CreatePostScreen: CreatePostScreen,
  ProfileScreen: ProfileScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}
