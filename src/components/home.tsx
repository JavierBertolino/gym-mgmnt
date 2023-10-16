import React from 'react';
import i18n from '../translation';
import { StyledView, StyledText } from '../styles/homeStyles';

const Home: React.FC = () => {
    return (
        <StyledView className="flex-1 items-center justify-center">
            <StyledText className="text-lg">
                {i18n.t('notificationsPanel')}
            </StyledText>
        </StyledView>
    );
};

export default Home;
