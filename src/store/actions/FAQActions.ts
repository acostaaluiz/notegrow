import { Dispatch } from 'redux';
import { ActionPayload } from '../../interfaces/redux';
import { FAQ_FETCH_PENDING, FAQ_FETCH_SUCCESS } from '../types';
import { getMockFAQ } from '../../services/FAQ';
import FAQModel, { FAQInterface } from '../../models/FAQ';
//import MOCK_FAQ from '../../mocks/FAQ.json';

export type HomeActionTypes = ActionPayload<number[]>;

function FAQFetchPending() {
    return { type: FAQ_FETCH_PENDING }
}

function FAQFetchSuccess(faq: FAQInterface[]) {
    return {
        type: FAQ_FETCH_SUCCESS,
        payload: faq
    }
}

export function loadFAQList(dispatch: Dispatch) {
    return async () => {
        dispatch(FAQFetchPending())

        const data = getMockFAQ();
        const faq = FAQModel(data);

        if (faq) {
            dispatch(FAQFetchSuccess(data))
        }
        else {
            // ...
        }
    }
}


