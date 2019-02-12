import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FlatList, Text, StyleSheet, View, Image} from 'react-native';
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

class ProgramView extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {members} = this.props;

        return (
            <Query query={gql ` { feed { id url description } } `}>
                {({loading, error, data}) => {
                    if (loading) 
                        return <Text>Loading...</Text>;
                    if (error) 
                        return <Text>Error :(</Text>;
                    
                    // console.log(data)
                    return (
                        <View>
                          
                            <FlatList
                                data={data.feed}
                                renderItem={({item}) => <Text
                                style={{
                                flex: 1
                            }}>{item.description}</Text>}
                                keyExtractor=
                                {item => item.id}/>
                            
                           
                                 <Text>
                                     Here you'll see the program for assignations
                                 </Text>
                        </View>
                                    
                    );
                }
            }
            </Query>
        );
    }
}

ProgramView.propTypes = {
    members: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {

    return {members: state.members};
}

export default connect(mapStateToProps)(ProgramView);