import React from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';
import i18n from '../translation';

const StyledView = styled(View);
const StyledText = styled(Text);

const Training: React.FC = () => {
    return (
        <StyledView className="flex-1 items-center justify-center">
            <StyledText className="text-lg">
                {i18n.t('instagramFeed')}
            </StyledText>
        </StyledView>
    );
};

export default Training;
