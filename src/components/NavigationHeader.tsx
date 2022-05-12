import React, { memo } from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import styled from 'styled-components';

export enum NavigationHeaderPosition {
    Center,
    Left,
}

interface IProps {
    title?: string;
    position?: NavigationHeaderPosition;
    hasBackButton?: boolean;
    onPressBackButton?: () => void;
    headerLeft?: () => React.ReactNode;
    headerRight?: () => React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

const NavigationHeader = ({ title, hasBackButton = true, position = NavigationHeaderPosition.Left, onPressBackButton, headerLeft, headerRight, style, }: IProps) => {
    return (
        <HeaderContainer style={[{ justifyContent: position === NavigationHeaderPosition.Left ? 'space-between' : 'center', }, style]}>
            {position === NavigationHeaderPosition.Left && <>
                <View style={{ flexDirection: 'row', }}>
                    {hasBackButton && <TouchableOpacity onPress={onPressBackButton}>
                        {/* <IconBlackLeftArrow width={20} height={20} style={{ marginRight: 16, }} /> */}
                    </TouchableOpacity>}
                    {headerLeft && headerLeft()}
                    {!!title && <Text style={{color: '#363A3D'}} >{title}</Text>}
                </View>
                <View>
                    {headerRight && headerRight()}
                </View>
            </>}
        </HeaderContainer>
    );
};

const HeaderContainer = styled.View({
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 16,
})

export default memo(NavigationHeader);