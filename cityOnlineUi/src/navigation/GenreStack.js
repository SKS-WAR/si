import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Genre from '../screens/Genres';
import SingleGenre from '../screens/SingleGenre';

const Navigation = createStackNavigator();

const GenreStack = () => {
    return (
        <Navigation.Navigator>
            <Navigation.Screen name="home" component={Genre} options={{
                    title: 'Movies',
                    headerTitleStyle: {
                    color: '#fff',
                    },
                    headerStyle: {
                    backgroundColor: '#52373B',
                    },
                }}/>
            <Navigation.Screen name="singlegenre" component={SingleGenre} options={{ title: 'Single Genre' }} options={{
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

export default GenreStack

const styles = StyleSheet.create({})
