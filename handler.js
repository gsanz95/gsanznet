/*var CONTACT_ADDRESS = "gsanz95@gmail.com";
var queryString = require('queryString');

var mailer = require('nodemailer').createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL_ADDRESS,
        password: process.env.GMAIL_PASSWORD
    }
});

module.exports.contact = (event, context, callback) => {
    var body = queryString.parse(event.body);
    mailer.sendMail({
        from: body.from,
        to: [CONTACT_ADDRESS]
    })
}*/