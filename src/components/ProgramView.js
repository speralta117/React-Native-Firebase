import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList, Text, StyleSheet, View, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

class ProgramView extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    render() {
        const { members } = this.props;

        return <View style={styles.container}>
            <FlatList
                data={members}
                renderItem={({ item }) => <Text style={styles.item}
                >{item.description}</Text>}
                keyExtractor=
                {item => item.id} />

            <Text>
                Here you'll see the program for assignations
               </Text>
        </View>
    }
}

ProgramView.propTypes = {
    members: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {

    return { members: state.members };
}

export default connect(mapStateToProps)(ProgramView);