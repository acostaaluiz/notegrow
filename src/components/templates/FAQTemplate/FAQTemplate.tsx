import React from 'react';
import { View, Text } from 'react-native';
import { MyList } from '../../atoms';
import { FAQInterface } from '../../../models/FAQ';

interface FAQTemplateProps {
    pending: boolean;
    faq: FAQInterface[]
}

function ListTemplate({ pending, faq }: FAQTemplateProps) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {pending && <Text>Loading FAQ...</Text>}
            <MyList faq={faq} />
        </View>
    );
}

export default ListTemplate;
