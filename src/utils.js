import * as dotenv from 'dotenv';

dotenv.config({
    path: '../.env'
})

export const mailSettings = {
    port: 465,
    host: process.env.MAIL_SERVER,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
    secure: true
}