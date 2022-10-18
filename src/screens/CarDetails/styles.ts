import { RFValue } from 'react-native-responsive-fontsize';
import { CarImage } from './../../components/Car/styles';
import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

export const Container = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_secondary};
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
    margin-left: 24px;
`;

export const CarImages = styled.View`
    margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        padding: 24,
        alignItems: 'center'
    },
    showsVerticalScrollIndicator: false
})`
  margin-top: 150px;
`;

export const Details = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(25)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.main};
    font-size: ${RFValue(25)}px;
`;

export const About = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(15)}px;
    text-align: justify;
    line-height: ${RFValue(25)}px;
    margin-top: 23px;
`;

export const Accessories = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
`;

export const Footer = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_secondary};
    padding: 24px 24px;
    margin-bottom: 24px;
`;