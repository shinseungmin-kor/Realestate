import React from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import ImageSet from '../images';
import { Color } from '../styles/Color';

const TabBar = (props: any) => {
    const { state, descriptors, navigation } = props;
    const insets = useSafeAreaInsets();

    const {
        home,
        homeActive,
        lounge,
        loungeActive,
        myPage,
        myPageActive,
        party,
        partyActive,
        judge,
        judgeActive,
        affinity,
        affinityActive,
    } = ImageSet.BottomTab;

    const getIcon = (name: string, focused: boolean) => {
        if (name === 'Home') {
            if (!focused) return home;
            return homeActive;
        } else if (name === 'Mypage') {
            if (!focused) return affinity;
            return affinityActive;
        } else if (name === 'SalesHelper') {
            if (!focused) return lounge;
            return loungeActive;
        } else if (name === 'News') {
            if (!focused) return judge;
            return judgeActive;
        } 
    }
    return (
        <Container style={{ height: 60 + insets.bottom, }}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const icon = getIcon(route.name, isFocused);

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    };
                }

                return (
                    <TouchableOpacity
                        key={index}
                        onPress={onPress}
                        style={{ flex: 1, alignItems: 'center',}}
                    >
                        {/* {route.name === 'Party' && <New width={12} height={12} style={{ position: 'absolute', top: -5, transform: [{ translateX: 12, }], alignSelf: 'center', zIndex: 1, }} />} */}
                        <Image source={icon} />
                    </TouchableOpacity>
                )
            })}
        </Container>
    );
};

export default TabBar;

const Container = styled.View({
    flexDirection: 'row',
    backgroundColor: Color.Gray10,
    borderTopWidth: 0.5,
    borderTopColor: Color.Gray40,
    paddingTop: 20,
});