import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Movies from '../screens/Movies';
import SingleMovie from '../screens/SingleMovie';

const Navigation = createStackNavigator();

const MovieStack = () => {
    return (
        <Navigation.Navigator>
            <Navigation.Screen name="home" component={Movies} options={{
                    title: 'Movies',
                    headerTitleStyle: {
                    color: '#fff',
                    },
                    headerStyle: {
                    backgroundColor: '#52373B',
                    },
                }}/>
            <Navigation.Screen name="singlemovie" component={SingleMovie} options={{
                    title: 'Movies',
                    headerTitleStyle: {
                    color: '#fff',
                    },
                    headerStyle: {
                    backgroundColor: '#52373B',
                    },
                }}/>
        </Navigation.Navigator>
    )
}

export default MovieStack

const styles = StyleSheet.create({})
