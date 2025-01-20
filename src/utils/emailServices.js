import { SENDER_NAME, BREVO_URI } from '../config/constants.js'
import asyncHandler from './asyncHandler.js'
import axios from 'axios'
import { generateVerificationEmail } from './index.template.js'
// npm install axios

const senderMail = process.env.MADGEAR_EMAIL
const API_KEY = process.env.BREVO_API_KEY

const sendVerificationLink = asyncHandler( async function(receipentEmail, name, verificationLink){
    const data = {
        sender: {
            email: senderMail,
            name: SENDER_NAME
        },
        to: [{
            email: receipentEmail,
            name
        }],
        subject: `Account Verification`,
        htmlContent: generateVerificationEmail(name, verificationLink)
    }

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'api-key': API_KEY
        }
    }
    
    const response = await axios.post(BREVO_URI, data, config)
    return {
        status: response.status,
        statusText: response.statusText
    }
    // console response successful but calling party getting undefined 
})

export default sendVerificationLink
