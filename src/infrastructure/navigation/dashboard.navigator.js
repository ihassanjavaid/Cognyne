import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { DashboardScreen } from "../../features/dashboard/screens/dashboard.screen";
import { ClassInfoScreen } from "../../features/class/screens/class-info.screen";
import { ClassCameraScreen } from "../../features/class/screens/camera-class.screen";

const DashboardStack = createStackNavigator();

export const DashboardNavigator = () => {
  return (
    <DashboardStack.Navigator
      screenOptions={
        Platform.OS === "ios"
          ? { ...TransitionPresets.ModalPresentationIOS }
          : { ...TransitionPresets.RevealFromBottomAndroid }
      }
      mode="modal"
    >
      <DashboardStack.Screen
        options={{
          header: () => null,
        }}
        name="DashboardScreen"
        component={DashboardScreen}
      />
      <DashboardStack.Screen
        options={{
          title: "Enter Class Info",
        }}
        name="ClassInfoScreen"
        component={ClassInfoScreen}
      />
      <DashboardStack.Screen
        options={{
          title: "Verify Face",
        }}
        name="ClassCameraScreen"
        component={ClassCameraScreen}
      />
    </DashboardStack.Navigator>
  );
};
