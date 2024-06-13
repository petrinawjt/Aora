import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { router, Link } from 'expo-router';

const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  // LOADING STATE
  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[75vh] px-4 my-6">

          {/* LOGO */}
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode='contain'
          />

          {/* SIGN IN TEXT */}
          <Text className="text-2xl text-white font-psemibold mt-10">
            Sign Up
          </Text>

          {/* USERNAME FIELD */}
          <FormField 
            title="Username"
            value={form.username}
            handleChangeText ={(e) => setForm({...form, username: e})}
            otherStyles="mt-7"
            placeholder="Your unique username"
          />

          {/* EMAIL FIELD */}
          <FormField 
            title="Email"
            value={form.email}
            handleChangeText ={(e) => setForm({...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder="Your email"
          />

          {/* PASSWORD FIELD */}
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText ={(e) => setForm({...form, password: e})}
            otherStyles="mt-7"
            placeholder="Your password"
          />


          {/* SIGNUP BUTTON */}
          <CustomButton
            title="Sign Up"
            handlePress = {submit}
            containerStyles="w-full mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-gray-100 text-lg font-pregular">
              Already have an account?
            </Text>
            <Link href={'/sign-in'} className="text-lg font-psemibold text-secondary">
              Sign In
            </Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp