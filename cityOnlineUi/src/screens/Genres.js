import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { ScrollView, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import GenresCard from '../components/GenresCard';

const Genres = ({navigation}) => {

    const [allGenres, setAllGenres] = useState(null);
    useEffect(() => {
        axios.get('http://10.0.2.2:5555/genere').then((data) => setAllGenres(data.data)).catch((err)=> console.log("err",err))
        navigation.setOptions({ title: " Genres" })

    }, [])

   
    if(!allGenres){
        return (<Text>Loading...</Text>)
    }
    return (
        <ScrollView>
            {allGenres.map(({id, name}) => (
                <TouchableOpacity key={id} onPress={() => navigation.navigate('singlegenre', {id: id, name: name})}>
                    <GenresCard name={name} />
                </TouchableOpacity>)
            )}
         </ScrollView>
    )
}

export default Genres

const styles = StyleSheet.create({})
