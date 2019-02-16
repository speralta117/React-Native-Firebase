import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList, Text, StyleSheet, View, Image } from 'react-native';
import ActionButton from 'react-native-action-button';
import MeetingDetail from './MeetingDetail';
import { formatDate } from '../utilities/DateUtilities';


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

class MeetingView extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('form');
    } 
    
    render() {
        const { meetings } = this.props;

        return <View style={styles.container}>
            <FlatList
                data={meetings}
                renderItem={({ item }) => <MeetingDetail meeting = {item} />}
                keyExtractor=
                {item => item.id} />

            <ActionButton
                onPress={this.handleAddEvent}
                buttonColor="#0077B5"
            />
            
        </View>
    }
}

MeetingView.propTypes = {
    meetings: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {

    let meetings = state.meetings;
    meetings.forEach((elem) => {
        elem.title = `Semana del ${formatDate(elem.from)} al ${formatDate(elem.to)}`
    });

    return { 
        meetings: state.meetings,
       
    };
}

export default connect(mapStateToProps)(MeetingView);