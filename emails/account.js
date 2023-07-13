const sgMail = require('@sendgrid/mail')
const cron = require('node-cron')
const SENDGRID_API_KEY = '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'
sgMail.setApiKey(SENDGRID_API_KEY)
const msg = {
    to: 'hirwanshuti40@gmail.com', // Change to your recipient
    from: 'hirwalandry77@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
cron.schedule('* * * * * *', () => {
    sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

})


