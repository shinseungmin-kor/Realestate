import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeContainer } from '../../components/container/SafeContainer';

const SalesHelper = (props: { navigation: any }) => {
    const { navigation } = props;
    return (
        <SafeContainer style={{ backgroundColor: 'white' }}>
            <TouchableOpacity onPress={() => { navigation.navigate('SalesHelperDetail')}}>
                <View>
                    <Text>영업자료 다운로드</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Calculator')}}>
                <View>
                    <Text>계산기</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View>
                    <Text>상담/청약 신청 현황</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View>
                    <Text>사용자 회원가입 (문자발송가능)</Text>
                </View>
            </TouchableOpacity>
        </SafeContainer>
    );
};

export default SalesHelper;
