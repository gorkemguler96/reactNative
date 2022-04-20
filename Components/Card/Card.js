import React from 'react';
import {View, Text, Button, StyleSheet,Alert} from 'react-native'
import styles from './Card.style'

const Card = ({title,text}) => {
    return(
        <View style={styles.card_container}>
            <Text style={styles.headerText}>{title}</Text>
            <Text style={{paddingBottom: 25}}>{text}</Text>
            <Button
                onPress={()=>Alert.alert("Merhaba "+title)}
                title="I liked"
                color={'#20abee'}
            />
        </View>
    )
}

export default Card;
