import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';

const dateString = (date) => {
    console.log('MemoDetailScreen ', date);
    return date.toDate().toISOString().split('T')[0];
};

class MemoDetailScreen extends React.Component {
    state = {
        memo: {},
    }

    componentWillMount() {
        const { params } = this.props.navigation.state;
        this.setState({ memo: params.memo });
    }

    returnMemo(memo) {
        this.setState({ memo }); // We can use shorthand instead of { memo : memo }
    }

    render() {
        const { memo } = this.state;
        console.log('MemoDetailScreen memo -> ', memo);
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.memoHeader}>
                        <View>
                            <Text style={styles.memoHeaderTitle}>{memo.body.substring(0, 10)}</Text>
                            <Text style={styles.memoHeaderDate}>{dateString(memo.createdOn)}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.memoContent}>
                    <Text style={styles.memoBody}>
                        {memo.body}
                    </Text>
                </View>
                <CircleButton
                    color="white"
                    style={styles.editButton}
                    onPress={() => { this.props.navigation.navigate('MemoEdit', { ...memo, returnMemo: this.returnMemo.bind(this) }); }}>
                    {'\uf303'}
                </CircleButton>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    memoHeader: {
        height: 100,
        backgroundColor: '#17313C',
        justifyContent: 'center',
        padding: 10,
    },
    memoHeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    memoHeaderDate: {
        fontSize: 12,
        color: '#fff',
    },
    memoContent: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: '#fff',
        flex: 1,
    },
    memoBody: {
        lineHeight: 20,
        fontSize: 15,
    },
    editButton: {
        top: 75,
    },
});
export default MemoDetailScreen;