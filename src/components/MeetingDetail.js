import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import AssigmentsView from './AssigmentsView';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 20,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 19,
        fontWeight: 'bold'
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
    },
    date: {
        fontWeight: '200',
        fontSize: 15,
        color: '#bdbdbd',
        width: '30%',
        textAlign: 'right',
    },
});

export default function MeetingDetail({ meeting }) {
    return (
        <View style={styles.card}>
            <View>
                <Text style={{ flex: 1 }}
                    style={styles.title}
                >
                    {meeting.title}
                </Text>
                {
                    meeting.assigments.map((item) => <AssigmentsView key={item.id} assigment={item} />)
                }

            </View>
        </View>
    );
}