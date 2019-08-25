import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoList extends React.Component {
    render() {
        return (
            <View style={styles.memoList}>
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.memoDate}>2019/08/25</Text>
                </View>
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.memoDate}>2019/08/25</Text>
                </View>
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.memoDate}>2019/08/25</Text>
                </View>
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.memoDate}>2019/08/25</Text>
                </View>
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>React Native study2</Text>
                    <Text style={styles.memoDate}>2019/08/25</Text>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({

    memoList: {
        width: '100%',
        flex: 1,
    },
    memoListItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: '#fff',
    },
    memoTitle: {
        fontSize: 18,
        marginBottom: 4,
    },
    memoDate: {
        fontSize: 10,
        color: '#a2a2a2',
    },

});

export default MemoList;