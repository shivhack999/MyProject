const twilio = require('twilio');

require('dotenv').config();
const TAT = process.env.TWILIO_AUTH_TOKEN;
const TAS = process.env.TWILIO_ACCOUNT_SID;
const TPN = process.env.TWILIO_PHONE_NUMBER;

const twilioClient = new twilio(TAS,TAT);
const otpSender = async(mobileNumber,OTP) =>{
    try {

        await twilioClient.messages.create({
            body: `Your Verification OTP is ${OTP}`,
            to: mobileNumber,
            from : TPN
          });
          return true;

    } catch (error) {
        console.log(error.message);
        return false;
    }
};

module.exports = {
    otpSender
}

