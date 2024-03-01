import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Dashboard from "../views/Dashboard";
import Destination from "../views/Destination";
import Pickup from "../views/Pickup";
import CarSelection from "../views/CarSelection";

import Call from "../views/Call";
import Chat from "../views/Chat";
import Status from "../views/Status";

import RideHistory from "../views/RideHistory";
import RideHistoryDetail from "../views/RideHistoryDetail";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Dashboard" component={DashboardNavigator} />
        <Drawer.Screen name="RideHistory" component={HistoryNavigator} />
      </Drawer.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="Call" component={Call} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Status" component={Status} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}

function DashboardNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DashboardScreen" component={Dashboard} />
      <Stack.Screen name="BottomNavigationTabs" component={BottomTabs} />
      <Stack.Screen name="Destination" component={Destination} />
      <Stack.Screen name="Pickup" component={Pickup} />
      <Stack.Screen name="CarSelection" component={CarSelection} />
    </Stack.Navigator>
  );
}

function HistoryNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RideHistoryScreen" component={RideHistory} />
      <Stack.Screen
        name="RideHistoryDetailScreen"
        component={RideHistoryDetail}
      />
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Call" component={Call} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Status" component={Status} />
    </Tab.Navigator>
  );
}
