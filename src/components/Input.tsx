import { Input as InputNativeBase, IInputProps } from "native-base"


export function Input({...rest}: IInputProps){
  return(
    <InputNativeBase
      bg='gray.100'
      h={12}
      borderWidth={0}
      fontSize='md'
      color='gray.600'
      fontFamily='body'
      mb={4}
      placeholderTextColor='gray.400'
      _focus={{
        bg:'gray.100',
        borderWidth: 1,
        borderColor: 'gray.500'
      }}
      {...rest}
    />
  )
}