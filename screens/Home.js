import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { COLORS } from '../constants'
import Header from '../components/Header'
import BottomSheet from '../components/BottomSheet'

const Home = () => {
    const refRBSheet = useRef();
    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: COLORS.white
        }}>
            <View style={{
                flex: 1, backgroundColor: COLORS.white
            }}>
                <Header title="Home" onPress={() => refRBSheet.current.open()} />

            </View>
            <BottomSheet bottomSheetRef={refRBSheet}>
                <Text>Hello</Text>
            </BottomSheet>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})