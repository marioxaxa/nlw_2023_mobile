import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import HabitDay, { DAY_SIZE } from '../components/HabitDay'
import Header from '../components/Header'

import { generateRangeDatesFromYearStart } from '../utils/generate-range-between-dates'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const datesFromYearStart = generateRangeDatesFromYearStart()

const minimumSummaryDatesSize = 18 * 9
const amountOfDaysToFill = minimumSummaryDatesSize - datesFromYearStart.length

type Props = {}

export default function Home({ }: Props) {

    const { navigate } = useNavigation()

    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <Header />

            <View className='flex-row mt-6 mb-2'>
                {weekDays.map((weekDays, i) => {
                    return (
                        <Text
                            key={i}
                            className='text-zinc-400 text-xl font-bold text-center mx-1'
                            style={{ width: DAY_SIZE }}
                        >
                            {weekDays}
                        </Text>
                    )
                })}
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <View
                    className='flex-row flex-wrap'
                >
                    {
                        datesFromYearStart.map((date, i) => {
                            return (
                                <HabitDay
                                    key={date.toISOString()}
                                    onPress={() => navigate('habit', { date: date.toISOString() })}
                                />
                            )
                        })
                    }

                    {
                        amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, index) => {
                            return (
                                <View
                                    className='bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40'
                                    style={{ width: DAY_SIZE, height: DAY_SIZE }}
                                    key={index}
                                />
                            )
                        })
                    }
                </View>
            </ScrollView>



        </View>
    )
}