//Library
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

//Props
import { BorderlessButtonProps } from 'react-native-gesture-handler'

//hooks
import { useTheme } from 'styled-components'

//Components

//Styles Components
import { Container } from './styles'

//interfaces
interface Props extends BorderlessButtonProps {
    color?: string;
    onPress: () => void;
}

export function BackButton({color, onPress, ...rest}: Props) {
    const theme = useTheme();
    return (
        <Container {...rest}>
            <MaterialIcons 
            name="chevron-left"
            size={24}
            color={color ? color : theme.colors.text}
            onPress={onPress}
            />
        </Container>
    )
}