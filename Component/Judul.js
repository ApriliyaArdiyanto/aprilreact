import React from 'react';
import {Text} from 'react-native';

export default class Judul extends React.Component{
    render(){
        return (
            <Text style={salon.judul}>{this.props.title}</Text>
        )
    }
}

const salon = {
    judul:{
        color:'pink',
        fontSize: 75,
        fontWeight: 'bold',
    }
}