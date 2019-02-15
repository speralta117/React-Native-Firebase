import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    card: {
        flex: 1,
        paddingTop: 5,
        marginTop: 5
    },
    info: {
        fontSize: 17,
    }
});

export default function AssigmentView({ assigment }) {
    return (
        <View style={styles.card}>
            <Text style={styles.info}>{assigment.name}</Text>
        </View>
    );
}