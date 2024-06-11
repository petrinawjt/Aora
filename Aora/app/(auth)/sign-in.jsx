import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants';
import FormField from '../../components/FormField';

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">

          {/* LOGO */}
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode='contain'
          />

          {/* SIGN IN TEXT */}
          <Text className="text-2xl text-white font-psemibold mt-10">
            Sign In
          </Text>

          {/* FORM FIELD */}
          <FormField 
            title="Email"
            value={form.email}
            handleChangeText ={(e) => setForm({...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          {/* PASSWORD FIELD */}
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText ={(e) => setForm({...form, password: e})}
            otherStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn