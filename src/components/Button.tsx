import { Text, Button as ButtonNativeBase, IIconButtonProps } from 'native-base'

type Props = IIconButtonProps &{
  title: string;
  variant: 'solid' | 'outline' | 'ghost'
}

export function Button( {title, variant, ...rest} : Props ){
  return( 
    <ButtonNativeBase 
      w='full'
      h={10}
      bg={variant === 'outline' ? 'gray.300' : variant === 'ghost' ? 'gray.700' : 'blue.500'}
      rounded='sm'
      _pressed={{
        bg: variant === "outline" ? 'gray.400' : 'blue.700'
      }}
      {...rest}>
      <Text 
        color={ variant === 'outline' ? 'gray.600' : 'white' }
        fontFamily='body' 
        fontSize='sm' 
        fontWeight='bold'>
          {title}
        </Text>
    </ButtonNativeBase>
  )
}