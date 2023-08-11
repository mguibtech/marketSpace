import { Text, VStack, Image, Center, Icon } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

import LogoSvg from '@assets/Logo.svg'
import LabelImg from '@assets/marketspace..svg'
import { Input } from '@components/Input'
import React, { useState } from 'react';
import { Pressable, ScrollView } from 'react-native';
import { Button } from '@components/Button'

import {useNavigation} from '@react-navigation/native'

import AvatarDefaltSvg from '@assets/Avatar.svg'
import { THEME } from '../theme/index'

export function SignUp() {
  const [show, setShow] = React.useState(false);

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack()
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} bg='gray.200'>


        <Center mt={16}>
          <LogoSvg width={60} height={40} />
          <Text color='gray.700' fontFamily='heading' fontSize='xl'>
            Boas vindas!
          </Text>
          <Text color='gray.700' fontFamily='body' fontSize='sm' textAlign='center'>
            Crie sua conta e use o espaço para comprar itens variados e vender seus produtos
          </Text>
        </Center>

        <Center mt={8}>
          <AvatarDefaltSvg
            style={{marginBottom: 12}}
          />
          <Button
            title='Editar foto'
            variant='ghost'
            w='1/2 '
            
          >
          </Button>

          <Input
            placeholder='Nome'
            keyboardType='default'
            autoCapitalize='words'
          />
          <Input
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Input
            placeholder='Telefone'
            keyboardType='phone-pad'
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
          <Input
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" />
              </Pressable>}
            placeholder="Confirmar senha"
          />

          <Button
            variant='ghost'
            mt={4}
            title='Criar'
          />

          <Text color='gray.700' mt={12} mb={4} fontFamily='body' fontSize='sm'>
            Já tem uma conta?
          </Text>
          <Button
            variant='outline'
            title='Ir para o login'
            marginBottom={8}
            onPress={handleGoBack}
          />

        </Center>
      </VStack>


    </ScrollView>
  )
}