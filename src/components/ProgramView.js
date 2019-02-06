import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList, Text, StyleSheet, View, Image } from 'react-native';

class ProgramView extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { members } = this.props;

        return (
            <View>
                <Text>
                    Here you'll see the program for assignations
            </Text>
            </View>
        );
    }
}

ProgramView.propTypes = {
    members: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {

    return {
        members: state.members
    };
}

export default connect(mapStateToProps)(ProgramView);