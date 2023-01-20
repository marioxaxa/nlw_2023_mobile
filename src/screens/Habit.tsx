import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import BackButton from '../components/BackButton'
import dayjs from 'dayjs'
import ProgressBar from '../components/ProgressBar'
import CheckBox from '../components/CheckBox'

interface Props {
    date: string
}

const Habit = (props: Props) => {
    const route = useRoute()
    const { date } = route.params as Props

    const parseDate = dayjs(date)
    const dayOfWeek = parseDate.format('dddd')
    const dayAndMonth = parseDate.format('DD/MM')

    return (
        <View className='flex-1 bg-background px-8 pt-16'>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <BackButton />
                <Text className='mt-6 text-zinc-400 - font-semibold text-base lowercase'>
                    {dayOfWeek}
                </Text>
                <Text className='text-white font-extrabold text-3xl'>
                    {dayAndMonth}
                </Text>
                <ProgressBar 
                    progress={50}
                />

                <View className='mt-6'>
                    <CheckBox 
                        title='Beber 2l de agua'
                        checked={true}
                    />
                    <CheckBox 
                        title='Caminhar'
                        checked={false}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default Habit