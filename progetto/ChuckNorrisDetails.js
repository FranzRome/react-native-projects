import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, View, TextInput, Button} from "react-native";
import {useNavigation, useNavigationState} from '@react-navigation/native';

const ChuckNorrisDetails = ({route}) => {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        fetchRandomJokeFromCategory(route.params.category).then((data) => setJoke(data.value))
    }, [])

    const fetchRandomJokeFromCategory = async (category) => {
        const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
        const data = await response.json();
        return data;
    }

    return(
        <View style={{ borderWidth: 1, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{joke}</Text>
        </View>
    );
}

export default ChuckNorrisDetails