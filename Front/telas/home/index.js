import { useEffect, useState } from 'react';
import {
    Alert, ScrollView, Text, TouchableOpacity, View, Image
} from 'react-native';
import CardPokemon from '../../componentes/cardPokemon/index';
import api from '../../service/api';
import pokeApi from '../../service/pokeApi';
import styles from './styles';

export default function Safari({ navigation }) {

    function start() {
        navigation.navigate('Safari');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touch} onPress={() => start()}>
                <View style={styles.containerHeader}>
                    < Image source={require('../../assets/home.png')} />
                    <Text style={styles.texto}> Toque para começar! </Text>
                </View>
            </TouchableOpacity>
        </View >
    );
}