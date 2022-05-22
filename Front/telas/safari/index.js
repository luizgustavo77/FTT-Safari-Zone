import { useEffect, useState } from 'react';
import {
    Alert, ScrollView, Text, TouchableOpacity, View
} from 'react-native';
import CardPokemon from '../../componentes/cardPokemon/index';
import api from '../../service/api';
import pokeApi from '../../service/pokeApi';
import styles from './styles';

export default function Safari({ navigation }) {

    const [lista, setLista] = useState([]);
    const [load, setLoad] = useState(false);
    const [areas, setAreas] = useState(0);

    useEffect(
        () => {
            carregaLista();
        }, []);

    async function carregaLista(clean = false) {
        if (clean) {
            lista.pop(0);
            lista.pop(1);
            lista.pop(2);
            lista.pop(3);
        }

        try {
            let area = areas;
            area = area + 1;

            setAreas(area);
            setLoad(true);

            for (let i = 0; i < 4; i++) {
                let id = Math.floor((Math.random() * 151) + 1);
                let pokemon = await pokeApi.get('/' + id);
                lista.push(pokemon.data);
            }

            setLoad(false);
        } catch (e) {
            Alert.alert(e.toString());
        }
    }

    function capturar(pokemon) {
        Alert.alert('Atenção', 'Deseja tentar capturar o ' + pokemon.name + ' ?',
            [
                {
                    text: 'Sim',
                    onPress: () => addPokemon(pokemon.id),
                },
                {
                    text: 'Não',
                    style: 'cancel',
                }
            ]);
    }

    async function addPokemon(externalNumber) {
        let pokemon = {
            externalNumber: externalNumber,
            area: areas,
            hora: new Date().getDate().toString() + '/' + (new Date().getMonth() + 1).toString(),
        };

        await api.post('/pokemonControll/pokemon', pokemon)
            .then(() => carregaLista(true))
            .catch(error => console.log(error));

    }

    function pokemonList() {
        navigation.navigate('PokemonList');
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                {
                    <TouchableOpacity style={styles.botaoHeader} onPress={() => pokemonList()}>
                        <Text style={styles.cirtuloBotao}>
                            🏡
                        </Text>
                    </TouchableOpacity>
                }
            </View>

            <ScrollView style={styles.areaScroolView}>
                <Text style={styles.textoArea}> Área atual: {areas} </Text>
                {
                    lista.map((pokemon, index) => (
                        <CardPokemon key={index.toString()} pokemon={pokemon} capturar={capturar} ></CardPokemon>
                    )
                    )
                }
            </ScrollView >
            <View style={styles.containerFooter}>
                <TouchableOpacity style={styles.botao} onPress={() => carregaLista(true)}>
                    <Text style={styles.textoBotao}> Próximo Área </Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}