import React, { MutableRefObject } from 'react';
import { TextStyle, TextProperties } from 'react-native';
import { StyledListItem } from './List.styles';

interface ListItemProps extends TextProperties {
    value: string;
}

function ListItem({ value, ...props }: ListItemProps) {
    return (
        <StyledListItem {...props}>
            {value}
        </StyledListItem>
    );
}

ListItem.defaultProps = {
    value: '',
} as Partial<ListItemProps>;

export default ListItem;
