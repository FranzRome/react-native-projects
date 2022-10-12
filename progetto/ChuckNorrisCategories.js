import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation, useNavigationState } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ChuckNorrisCategories = () => {
    const navigation = useNavigation();

    const [categories, setCategories] = useState([]);
    const [joke, setJoke] = useState('');

    const fetchCategories = async () => {
        const response = await fetch('https://api.chucknorris.io/jokes/categories');
        const data = await response.json();
        return data;
    }

    const fetchRandomJoke = async () => {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        fetchCategories().then((data) => setCategories(data))
        fetchRandomJoke().then((data) => setJoke(data.value))
    }, [])
    //let joke = fetchRandomJoke().then((data) => data);

    //console.log(joke);

    const getIcon = (category) => {
        switch (category) {
            case 'animal':
                console.log('animal');
                return 'paw';
            default:
                return 'md-checkmark-circle';
        }
    }

    return (


        <View style={{ borderWidth: 1, flex: 1, justifyContent: 'center' }}>
            <FlatList
                style={{ margin: 24 }}
                data={categories}
                renderItem={({ item }) =>

                    <TouchableOpacity onPress={() => { console.log(item); navigation.navigate('Detail', { category: item }); }} style={{ textAlign: 'center', paddingHorizontal: 50, backgroundColor: '#00A0FF', borderRadius: 10 }}>
                        <Text style={{ marginVertical: 20 }}>
                            {item} <Ionicons name={getIcon()} size={32} color="green" style={{ textAlign: 'center' }} />
                        </Text>
                    </TouchableOpacity>
                }
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            />
        </View>

    );
};
export default ChuckNorrisCategories;