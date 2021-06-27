// Development specific configuration
module.exports = {
    // MongoDB connection url
    mongo: {
        uri: process.env.MONGO_URI || 'mongodb://localhost/iloviou-dev',
    },

    //auth
    auth: {
        salt: process.env.AUTH_SALT
    },

    //social
    social: {
        facebook: {
            appId: process.env.FACEBOOK_APP_ID,
            appSecret: process.env.FACEBOOK_APP_SECRET
        },
        google: {
            apiKey: process.env.GOOGLE_API_KEY,
            clientId: process.env.GOOGLE_CLIENT_ID,
            secret: process.env.GOOGLE_CLIENT_SECRET
        }
    },

    //AWS connection options
    aws: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
        s3Bucket: process.env.AWS_S3_BUCKET
    },

    twilio: {
        accountSid: process.env.TWILIO_ACCOUNT_SID,
        authToken: process.env.TWILIO_AUTH_TOKEN,
        fromPhone: process.env.TWILIO_PHONE
    },

    sendGrid: {
        apiKey: process.env.SENDGRID_API_KEY,
        mailFrom: "info@iloviou.com",
        templatesIds: {
            forgotPassword: "d-392920e6e8b745a393124fd7a3eb9336" //forgot password
        }
    },

    //jwt 
    jwt: {
        expiresIn: 24 * 60 * 60 //24 hours
    },

    //Stripe options
    stripeOptions: {

    }
}