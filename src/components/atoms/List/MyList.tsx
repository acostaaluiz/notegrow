import React, { MutableRefObject, Component } from 'react';
import { FlatList, View, Text, Alert, StyleSheet, FlatListProperties } from 'react-native';
import { StyledList } from './List.styles';
import ListItem from './ListItem';
import { FAQInterface } from '../../../models/FAQ';

interface MyListTemplateProps {
    faq: FAQInterface[];
}

export default function MyList({ faq }: MyListTemplateProps) {

    return (
        <View>
            <FlatList
                data={faq}
                renderItem={({ item }) => (<ListItem key={item.title} value={item.title} />)}
            />
        </View>
    )
}
