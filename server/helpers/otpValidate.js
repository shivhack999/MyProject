const otpVerification = async (otpTime) =>{
    try {
        const cDateTime = new Date();
        let differenceValue = (otpTime - cDateTime.getTime()) / 1000;
        differenceValue /= 60;
        const minutes = Math.abs(differenceValue);
        // console.log(minutes);
        if(minutes > 2){
            return true;
        }
        return false;
    } catch (error) {
        console.log(error.message);
    }
};

module.exports ={
    otpVerification
};