import React, { useState } from 'react';
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { SafeContainer } from '../../components/container/SafeContainer';
import NavigationBody from '../../components/NavigationBody';
import NavigationHeader from '../../components/NavigationHeader';

export namespace DailyType {
    export enum CurrentTab {
        Home = '홈',
        Environment = '입지환경',
        Investment = '투자가치',
        Product = '상품특화',
        Layout = '배치도'
    }
}


const Home = () => {
    const [currentTab, setCurrentTab] = useState<DailyType.CurrentTab>(DailyType.CurrentTab.Home);

    return (
        <SafeContainer style={{ backgroundColor: 'white' }}>
            <NavigationHeader
                title={''}
                hasBackButton={false}
                headerLeft={() => {
                    return (
                        <View style={{ flexDirection: 'row', }}>
                            <Text>그랑리세 여의도</Text>
                        </View>
                    )
                }}
                headerRight={() => {
                    return (
                        <View>
                            <Text>알림</Text>
                        </View>
                    )
                }}
            />
             <NavigationBody
                title={''}
                hasBackButton={false}
                headerLeft={() => {
                    return (
                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {
                                setCurrentTab(DailyType.CurrentTab.Home);
                            }}>
                                <View style={{ height: 60, justifyContent: 'center', marginRight: 25, marginLeft: 10}}>
                                    <Text
                                    style={{ color: currentTab === DailyType.CurrentTab.Home ? '#000000' : '#CED3D6', }}>
                                        홈
                                    </Text>
                                    {currentTab === DailyType.CurrentTab.Home && <View style={{ width: '100%', height: 2, backgroundColor: 'black', position: 'absolute', bottom: 0, }} />}
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setCurrentTab(DailyType.CurrentTab.Environment);
                            }}>
                                <View style={{ height: 60, justifyContent: 'center', marginRight: 25,}}>
                                <Text
                                    style={{ color: currentTab === DailyType.CurrentTab.Environment ? '#000000' : '#CED3D6', }}>
                                        입지환경
                                    </Text>
                                    {currentTab === DailyType.CurrentTab.Environment && <View style={{ width: '100%', height: 2, backgroundColor: '#000000', position: 'absolute', bottom: 0, }} />}
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setCurrentTab(DailyType.CurrentTab.Investment);
                            }}>
                                <View style={{ height: 60, justifyContent: 'center', marginRight: 25,}}>
                                <Text
                                    style={{ color: currentTab === DailyType.CurrentTab.Investment ? '#000000' : '#CED3D6', }}>
                                        투자가치
                                    </Text>
                                    {currentTab === DailyType.CurrentTab.Investment && <View style={{ width: '100%', height: 2, backgroundColor: '#000000', position: 'absolute', bottom: 0, }} />}
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setCurrentTab(DailyType.CurrentTab.Product);
                            }}>
                                <View style={{ height: 60, justifyContent: 'center', marginRight: 25,}}>
                                <Text
                                    style={{ color: currentTab === DailyType.CurrentTab.Product ? '#000000' : '#CED3D6', }}>
                                        상품특화
                                    </Text>
                                    {currentTab === DailyType.CurrentTab.Product && <View style={{ width: '100%', height: 2, backgroundColor: '#000000', position: 'absolute', bottom: 0, }} />}
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setCurrentTab(DailyType.CurrentTab.Layout);
                            }}>
                                <View style={{ height: 60, justifyContent: 'center', marginRight: 25,}}>
                                <Text
                                    style={{ color: currentTab === DailyType.CurrentTab.Layout ? '#000000' : '#CED3D6', }}>
                                        배치도
                                    </Text>
                                    {currentTab === DailyType.CurrentTab.Layout && <View style={{ width: '100%', height: 2, backgroundColor: '#000000', position: 'absolute', bottom: 0, }} />}
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </SafeContainer>
    );
};

export default Home;
