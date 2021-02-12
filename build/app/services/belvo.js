"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

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

 const live = _axios2.default.create({
    baseURL: 'https://api.belvo.com',
    headers: {
        Authorization: `Basic ${liveConverted()}`,
        'Content-Type': 'Application/json',
    }
}); exports.live = live;

 const sandbox = _axios2.default.create({
    baseURL: 'https://sandbox.belvo.com',
    headers: {
        Authorization: `Basic ${sandboxConverted()}`,
        'Content-Type': 'Application/json',
    }

}); exports.sandbox = sandbox