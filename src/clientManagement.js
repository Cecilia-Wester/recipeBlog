import * as contentful from 'contentful-management';

export const clientManagement = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: 'CFPAT-z-8ByzrMNN15gUbHJyc0Zu519sbZgUp8Gwu1rziWOOM',
})