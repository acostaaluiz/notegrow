import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/reducers';
import { NavigationPageProp } from '../interfaces/navigation';
import { FAQTemplate } from '../components/templates';
import { AuthGuard } from '../components/utils';
import { loadFAQList } from '../store/actions/FAQActions';

interface FAQScreenProps {
    navigation: NavigationPageProp;
}

function FAQScreen({ navigation }: FAQScreenProps) {
    const { pending, data } = useSelector(({ faq }: AppState) => faq);

    const dispatch = useDispatch();
    const requestFAQ = loadFAQList(dispatch);

    requestFAQ();

    if (!data) return null;

    return (

        <FAQTemplate
            pending={pending}
            faq={data}
        />

    );
}

export default FAQScreen;
