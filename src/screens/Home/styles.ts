import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList, Platform, StatusBar} from 'react-native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const Title = styled.Text`
    font-size: 30px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const HeaderContent = styled.View`
    justify-content: space-between;
    flex-direction: row;
`;

export const Header = styled.View`
    width: 100%;
    height: 113px;
    background-color: ${({ theme }) => theme.colors.header};
    justify-content: flex-end;
    padding: 32px 24px;
`;

export const TotalCars = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text}; 
`;

export const CarList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})`
    
`;