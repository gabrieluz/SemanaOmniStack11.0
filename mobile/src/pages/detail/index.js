import React from 'react'
import { Feather } from '@expo/vector-icons'
import {View, Image,TouchableOpacity, Text, Linking} from 'react-native'
import style from './style'
import logoimg from '../../assets/logo.png'
import {useNavigation, useRoute} from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

export default function Detail(){

const navigation = useNavigation()
const route = useRoute()
const incident = route.params.incident

const message= `ola ${incident.name}, texto grande no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style : 'currency' , currency: 'BRL' }).format(incident.value)}`

function navigateback(){
    navigation.goBack()
}
function sendMail(){
 MailComposer.composeAsync({
     subject:`heroi do caso : ${incident.title}`,
     recipients:[incident.email],
     body: message,
 })
}
function sendWhat(){
    Linking.openULR(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
}

    return(
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoimg}/>
                <TouchableOpacity
                onPress={navigateback}
                >
                   <Feather name="arrow-left" size={28}  color='#e02041'/>
                </TouchableOpacity>
            </View>
            <View style={style.incident}>

                    <Text  style={[style.incidentProperty, {marginTop: 0}]}>Ong:</Text>
    <Text  style={style.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                    <Text  style={style.incidentProperty}>caso:</Text>
    <Text  style={style.incidentValue}>{incident.title}</Text>

                    <Text  style={style.incidentProperty}>valor:</Text>
                    <Text  style={style.incidentValue}>{Intl.NumberFormat('pt-BR', { style : 'currency' , currency: 'BRL' }).format(incident.value)}</Text>
            </View>
<View style={style.contactbox}>
    <Text style={style.herotitle}> salve o dia</Text>

    <Text style={style.herotitle}> seja o heroi desse caso</Text>
    
    <Text style={style.herodesc}> entre em contato</Text>

    <View style={style.actions}>
    <TouchableOpacity
    style={style.action}
                onPress={()=>{}}
                >
                    <Text style={style.actiont} onPress={sendWhat}> whats</Text>
                   
                </TouchableOpacity>

                <TouchableOpacity
    style={style.action}
                onPress={()=>{}}
                >
                    <Text style={style.actiont} onPress={sendMail}> email</Text>
                   
                </TouchableOpacity>
    </View>
</View>
        </View>
    )
}