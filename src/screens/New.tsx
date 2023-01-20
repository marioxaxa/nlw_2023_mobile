import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import React from 'react'
import BackButton from '../components/BackButton'
import CheckBox from '../components/CheckBox'
import colors from 'tailwindcss/colors'

type Props = {}

const availableWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

const New = (props: Props) => {

    const [weekDays, setWeekDays] = React.useState<number[]>([])

    function handleToggleWeekDay(weekDayIndex: number) {
        if (weekDays.includes(weekDayIndex)) {
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
        } else {
            setWeekDays(prevState => [...prevState, weekDayIndex])
        }
    }


    return (
        <View className='flex-1 bg-background px-8 pt-16'>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <BackButton />

                <Text className='mt-6 text-white font-extrabold text-3xl'>
                    Criar hábito
                </Text>

                <Text className='mt-6 text-white font-semibold text-base'>
                    Qual o seu comprometimento?
                </Text>

                <TextInput
                    className='h-12 pl-4 mt-3 rounded-lg bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600'
                    placeholder='Exercícios, dormir bem, etc..'
                    placeholderTextColor={colors.zinc[400]}
                />

                <Text className='mt-4 mb-3 text-white font-semibold text-base'>
                    Qual a recorrência?
                </Text>

                {availableWeekDays.map((weekDay, index) => {
                    return (
                        <CheckBox
                            key={weekDay}
                            title={weekDay}
                            checked={weekDays.includes(index)}
                            onPress={() => handleToggleWeekDay(index)}
                        />
                    )

                })}

                <TouchableOpacity
                    className='w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6'
                >
                    <Feather
                        name='check'
                        size={20}
                        color={colors.white}
                    />

                    <Text className='font-semibold text-base text-white ml-2'>
                        Confirmar
                    </Text>
                </TouchableOpacity>


            </ScrollView>
        </View>
    )
}

export default New