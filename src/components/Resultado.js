import React from 'react';
import Visor from './Visor.js'
import {
  StyleSheet,
  Text
} from 'react-native';

const Resultado = props => (
    <Visor resultado={props.resultado}/>
)

export {Resultado}