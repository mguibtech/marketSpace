import { HStack, Heading, Text, VStack } from "native-base";
import { UserPhoto } from "./UserPhoto";

import avatarUserDefault from '@assets/Avatar.svg'
import { Button } from "./Button";

export function HomeHeader() {
    return (
        <HStack bg='gray.500' pt={12} pb={5} px={6} alignItems='center' justifyContent='space-between'>
            <HStack>


                <UserPhoto
                    source={{ uri: 'https://github.com/mguibtech.png' }}
                    alt="Imagem do usuário"
                    marginRight={3}
                    size={12}
                />
                <VStack>
                    <Text color='gray.700' fontSize='md'>
                        Boas vindas,
                    </Text>
                    <Heading color='gray.700' fontSize='md'>
                        Maria!
                    </Heading>
                </VStack>
            </HStack>
            <Button
                variant="ghost"
                title="Criar anúncio"
                w={"1/2"}
                nameIcon="add"
                borderRadius={6}
                px={2}
            />
        </HStack>
    )
}