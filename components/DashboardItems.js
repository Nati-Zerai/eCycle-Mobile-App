import { View, Text } from 'react-native'
import React from 'react'

const DashboardItems = ({title,value}) => {
  return (
    <View>
      <View className="flex items-center">
                <Text className="text-xl font-medium text-black">{title}</Text>
                <Text className="text-base text-black">{value}</Text>
            </View>
    </View>
  )
}

export default DashboardItems