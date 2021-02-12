"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _belvo = require('belvo'); var _belvo2 = _interopRequireDefault(_belvo);

class Auth {
    async getToken(req, res){
        try {
            let client;
            let token

            switch(req.headers.mode) {
                case 'sandbox':
                    client = new (0, _belvo2.default)(
                        process.env.SANDSECRETKEYID,
                        process.env.SANDSECRETKEYPASSWORD,
                        'https://sandbox.belvo.com'
                    );
                    await client.connect();
                    break;

                case 'live':
                    client = new (0, _belvo2.default)(
                        process.env.PRODSECRETKEYID,
                        process.env.PRODSECRETKEYPASSWORD,
                        'https://api.belvo.com'
                    );
                    await client.connect();
                    break;
            }

            token = await client.widgetToken.create();

            return res.json(token);

        } catch (err) {
            return res.status(400).json({message: err})
        }
    
    }

    
}

exports. default = new Auth();