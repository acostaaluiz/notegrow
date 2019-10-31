import Config from 'react-native-config';
import API from "../utils/api";
import { FAQInterface } from '../models/FAQ';

const { SECRET_KEY } = Config;

export function getFAQ() {
    return API.get('getFAQ')
}

export function getMockFAQ(): FAQInterface[] {
    return [
        {
            title: "FAQ Question 1"
        },
        {
            title: "FAQ Question 1"
        },
        {
            title: "FAQ Question 1"
        }
    ]
}