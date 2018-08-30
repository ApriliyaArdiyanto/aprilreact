import React from 'react';
import {Text} from 'react-native';

export default class Judul extends React.Component{
    render(){
        return (
            <Text style={salon.judul}>Biodata</Text>
        )
    }
}

const salon = {
    judul:{
        color:'#ff7373',
        fontSize: 75,
        fontWeight: 'bold',
    }
}