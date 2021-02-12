import axios from 'axios';

const sandboxConverted = () => {
    const buff = Buffer.from(`${process.env.SANDSECRETKEYID}:${process.env.SANDSECRETKEYPASSWORD}`)
    const credentialsParsed = buff.toString('base64');

    return credentialsParsed;
}

const liveConverted = () => {
    const buff = Buffer.from(`${process.env.PRODSECRETKEYID}:${process.env.PRODSECRETKEYPASSWORD}`)
    const credentialsParsed = buff.toString('base64');

    return credentialsParsed;
}

export const live = axios.create({
    baseURL: 'https://api.belvo.com',
    headers: {
        Authorization: `Basic ${liveConverted()}`,
        'Content-Type': 'Application/json',
    }
});

export const sandbox = axios.create({
    baseURL: 'https://sandbox.belvo.com',
    headers: {
        Authorization: `Basic ${sandboxConverted()}`,
        'Content-Type': 'Application/json',
    }

})