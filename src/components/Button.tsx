import { Text, Button as ButtonNativeBase, IIconButtonProps, Icon, useTheme } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

type Props = IIconButtonProps & {
  title: string;
  variant: 'solid' | 'outline' | 'ghost';
  iconLeft?: boolean;
  iconRight?: boolean;
  nameIcon?: keyof typeof MaterialIcons.glyphMap;
}

export function Button({ title, variant, iconLeft = true, iconRight = false, nameIcon, ...rest }: Props) {
  const { colors, fontSizes } = useTheme();

  return (
    <ButtonNativeBase
      w='full'
      h={10}
      bg={variant === 'outline' ? 'gray.300' : variant === 'ghost' ? 'gray.700' : 'blue.500'}
      rounded='sm'
      _pressed={{
        bg: variant === "outline" ? 'gray.400' : 'blue.700'
      }}
      leftIcon={
        iconLeft ? <Icon as={<MaterialIcons color={colors.danger[500]} size={fontSizes.md} name={nameIcon} />} /> : <></>
      }
      rightIcon={
        iconRight ? <Icon as={<MaterialIcons color={colors.danger[500]} size={fontSizes.md} name={nameIcon} />} /> : <></>
      }
      {...rest}>
      <Text
        color={variant === 'outline' ? 'gray.600' : 'white'}
        fontFamily='body'
        fontSize='sm'
        fontWeight='bold'>
        {title}
      </Text>
    </ButtonNativeBase>
  )
}