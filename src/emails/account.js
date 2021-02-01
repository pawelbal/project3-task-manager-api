const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pawelbal@Op.pl',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendGoodByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pawelbal@Op.pl',
        subject: 'Your account has been succesfully deleted!',
        text: `Hi, ${name}. thanks for using our app! Hope to see you again!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodByeEmail
}