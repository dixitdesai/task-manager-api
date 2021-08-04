const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (name, email) => {
    sgMail.send({
        to: email,
        from: 'dixitpatel2354@gmail.com',
        subject: `Welcome ${name}`,
        text: `Thanks for joining in ${name}. Let me know how you get along with the app.` 
    })
}

const sendCancelationEmail = (name, email) => {
    sgMail.send({
        to: email,
        from: 'dixitpatel2354@gmail.com',
        subject: `Good Bye ${name}`,
        text: `Sorry to see you go. A very good bye ${name}. We hope to see you back sometime soon.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}