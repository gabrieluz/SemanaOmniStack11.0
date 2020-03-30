import React, {useEffect, useState} from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {View,FlatList, Image, Text, TouchableOpacity} from 'react-native'
import api from '../../services/api'
import logoimg from '../../assets/logo.png'

import styles from './style'
// import { HitTestResultTypes } from 'expo/build/AR'

export default function Incidents(){
    const [total, sett] = useState(0)
    const [incidents, setinci] = useState([]);
    const [page, setp]=useState(1);
    const [loading, setl]=useState(false)
    const navigation = useNavigation();

    function navigateToDetail(incident ){
        navigation.navigate('Detail',{ incident })
    }

    async function load(){
        if(loading){
            return
        }
if(total > 0 && incidents.length ==total){
    return
}
setl(true)

        const response = await api.get('incidents', {
            params: {page}
        })

        setinci([... incidents, ... response.data])
        sett(response.headers['x-total-count'])
        setp(page + 1)
        setl(false)
    }
useEffect(()=>{
load()

}, [])
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoimg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.bold} >casos ={total} </Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.description}>escolha um dos casos a baixo</Text>
            <FlatList 
            data={incidents}
            style={styles.incidentsList}
            keyExtractor={incident => String(incident.id)}
            //showsVerticalScrollIndicator={false}
            onEndReached={load}
            onEndReachedThreshold={0.2}
            renderItem={( {item: incident} )=>(

                <View style={styles.incident}>

                    <Text  style={styles.incidentProperty}>Ong:</Text>
                    <Text  style={styles.incidentValue}>{incident.name}</Text>

                    <Text  style={styles.incidentProperty}>caso:</Text>
                    <Text  style={styles.incidentValue}>{incident.title}</Text>

                    <Text  style={styles.incidentProperty}>valor:</Text>
                    <Text  style={styles.incidentValue}>{
                    Intl.NumberFormat('pt-BR', { style : 'currency' , currency: 'BRL' }).format(incident.value)}</Text>

                    <TouchableOpacity 
                    style={styles.detailsButton} 
                    onPress={()=>navigateToDetail(incident)} >
                        <Text 
                        style={styles.detalhes}> Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#e02041" />
                    </TouchableOpacity>

                </View>
            )}
            />
            
        </View>
    )
}