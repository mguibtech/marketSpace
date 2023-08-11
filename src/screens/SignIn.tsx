import { Text, VStack, Image, Center, Icon } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

import LogoSvg from '@assets/Logo.svg'
import LabelImg from '@assets/marketspace..svg'
import { Input } from '@components/Input'
import React, { useState } from 'react';
import { Pressable, ScrollView } from 'react-native';
import { Button } from '@components/Button'

import { useNavigation } from '@react-navigation/native'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

export function SignIn() {
  const [show, setShow] = React.useState(false);

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount(){
    navigation.navigate('signUp')
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1} bg='white'>

        <VStack px={10} mb={20} paddingBottom={16} bg='gray.200' borderBottomRightRadius={24} borderBottomLeftRadius={24}>
          <Center mt={16}>
            <LogoSvg />
            <LabelImg style={{ marginTop: 20 }} />
            <Text color='gray.700' fontFamily='body' fontSize='sm'>Seu espaço de compra e venda</Text>
          </Center>

          <Center mt={16}>
            <Text color='gray.700' mb={6} fontFamily='body' fontSize='sm'>Acesse sua conta</Text>

            <Input
              placeholder='E-mail'
              keyboardType='email-address'
              autoCapitalize='none'
            />
            <Input
              type={show ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" />
                </Pressable>}
              placeholder="Senha"
            />

            <Button
              variant='solid'
              mt={4}
              title='Entrar'
            />

          </Center>

        </VStack>

        <Center px={10}>
          <Text color='gray.700' mb={4} fontFamily='body' fontSize='sm'>
            Ainda não tem acesso?
          </Text>
          <Button
            variant='outline'
            title='Cirar uma conta'
            marginBottom={8}
            onPress={handleNewAccount}
          />
        </Center>

      </VStack>
    </ScrollView>
  )
}