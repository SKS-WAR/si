import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Movies from '../screens/Movies';
import Genres from '../screens/Genres';
import MovieStack from './MovieStack';
import GenreStack from './GenreStack';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                                activeTintColor: '#e91e63',
                            }}
            >
                <Tab.Screen name="Home" component={MovieStack} options={{
                    tabBarLabel: 'Movies',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />

                    ),
                    }}/>
                <Tab.Screen name="Genres" component={GenreStack} options={{
                    tabBarLabel: 'Generes',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="movie" color={color} size={size} />

                    ),
                    }}
/>
                {/* <Tab.Screen name="Genres" component={Genres} /> */}
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomTab

const styles = StyleSheet.create({})
