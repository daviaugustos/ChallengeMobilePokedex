import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
} from 'react-native';
import PropTypes from 'prop-types';

const MainInfos = ({ item }) => (
    <>
        <Text style={styles.itemDetailNumber} >#{item.id}</Text>
        <Text style={styles.itemDetailTitle}>{item.title}</Text>
        <View style={styles.itemBadgesView}>
        {item.badges && 
            item.badges.map((BadgeComponent, index) => (
            <View key={index} style={styles.badgeView}>
                <BadgeComponent />
            </View>
            ))}
        </View>
    </>
);

MainInfos.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        badges: PropTypes.arrayOf(PropTypes.func).isRequired,
    }).isRequired,
};

const styles = StyleSheet.create({
    itemDetailNumber: {
        fontFamily: Platform.OS === 'ios' ? 'SFProDisplay-Bold' : 'SF Pro Display Bold',
        fontSize: 12,
        color: 'rgba(23, 23, 27, 0.6);'
    },
    itemDetailTitle: {
        fontFamily: Platform.OS === 'ios' ? 'SFProDisplay-Bold' : 'SF Pro Display Bold',
        fontSize: 25,
        color: '#FFF'
    },
    itemBadgesView: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    badgeView: {
        paddingRight: 5
    },
});

export default MainInfos;