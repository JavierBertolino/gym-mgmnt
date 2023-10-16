import React from 'react';
import i18n from '../translation';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, View } from 'react-native';
import { StyledView, StyledText, StyledInput, StyledButton, StyledIcon } from '../styles/logInStyles';
import logo from '../../images/logo.png';
type RootStackParamList = {
    Main: undefined;
};

type LogInScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Main'
>;

const LogIn: React.FC = () => {
    const navigation = useNavigation<LogInScreenNavigationProp>();

    const handleLogin = () => {
        navigation.replace('Main');
    };

    return (
        <StyledView style={{ flex: 1, paddingTop: 0 }} className="bg-orange-500">
            {/* Centered Logo */}
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 20 }}>
                <Image source={logo} style={{ width: '80%', resizeMode: 'contain' }} />
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', paddingHorizontal: 40 }}>
                <View style={{ marginBottom: 24, width: '100%', borderColor: 'black', borderWidth: 1, borderRadius: 8, flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                    <StyledIcon name="user" size={24} color="black" style={{ marginRight: 10 }} />
                    <StyledInput
                        style={{ flex: 1, borderColor: 'black', color: 'black' }}
                        className="border-none p-2 rounded"
                        placeholder={i18n.t('username')}
                    />
                </View>

                <View style={{ marginBottom: 24, width: '100%', borderColor: 'black', borderWidth: 1, borderRadius: 8, flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                    <StyledIcon name="lock" size={24} color="black" style={{ marginRight: 10 }} />
                    <StyledInput
                        style={{ flex: 1, borderColor: 'black', color: 'black' }}
                        className="border-none p-2 rounded"
                        placeholder={i18n.t('password')}
                        secureTextEntry={true}
                    />
                </View>

                <StyledButton onPress={handleLogin} className="bg-black p-4 rounded w-full">
                    <StyledText style={{ color: 'orange', textAlign: 'center' }} className="text-xl">
                        {i18n.t('login')}
                    </StyledText>
                </StyledButton>
            </View>
        </StyledView>
    );
};



export default LogIn;
