import belvo from 'belvo';

class Auth {
    async getToken(req, res){
        try {
            let client;
            let token

            switch(req.headers.mode) {
                case 'sandbox':
                    client = new belvo(
                        process.env.SANDSECRETKEYID,
                        process.env.SANDSECRETKEYPASSWORD,
                        'https://sandbox.belvo.com'
                    );
                    await client.connect();
                    break;

                case 'live':
                    client = new belvo(
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
            return res.status(400).json({message: err.response.data})
        }
    
    }

    
}

export default new Auth();