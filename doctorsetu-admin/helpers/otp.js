let redisConnect = require('redis-connetctions-manager');
let config = require('config');
var smtpTransport = require("nodemailer-smtp-transport");
var nodemailer = require('nodemailer');
var sendinBlue = require('nodemailer-sendinblue-transport');
//var Nexmo = require('nexmo');
const Nexmo = require('nexmo')
const SendOtp = require('sendotp');

module.exports = {
    generateUniqueOTP: () => {
        let unique_otp = Math.floor(100000 + Math.random() * 900000);
        return new Promise((resolve, reject) => {
            redisConnect.getConnects().then((connetctions) => {
                connetctions['OTPSTORE'].select(config.get('DB.session.otpdb'), function (err, res) {
                    if (err)
                        reject(err);
                    else {
                        connetctions['OTPSTORE'].hexists(unique_otp, 'unique_otp', function (err, rep) {
                            if (rep === 1) {
                                module.exports.generateUniqueOTP();
                            } else {
                                resolve(unique_otp);
                            }
                        });
                    }
                });
            });
        });
    },
    saveOTP: (otp, data, expiry) => {
        return new Promise((resolve, reject) => {
            redisConnect.getConnects().then((connetctions) => {
                connetctions['OTPSTORE'].select(config.get('DB.session.otpdb'), function (err, res) {
                    if (err)
                        reject(err);
                    else {
                        connetctions['OTPSTORE'].hmset(otp, data, function (err, reply) {
                            if (err) {
                                reject(err);
                            } else {
                                connetctions['OTPSTORE'].expire(otp, expiry);
                                resolve();
                            }
                        });
                    }
                });
            });
        });
    },
    verifyOTP: (otp) => {
        return new Promise((resolve, reject) => {
            redisConnect.getConnects().then((connetctions) => {
                connetctions['OTPSTORE'].select(config.get('DB.session.otpdb'), function (err, res) {
                    if (err)
                        reject(err);
                    else {
                        connetctions['OTPSTORE'].hgetall(otp, function (err, obj) {
                            if (!obj) {
                                reject(err);
                            } else {
                                resolve(obj);
                                connetctions['OTPSTORE'].expire(otp, 0, function (err, obj) {
                                    if (err)
                                        reject(err);
                                    else
                                        resolve();
                                });
                            }
                        });
                    }
                });
            });
        });
    },
    deleteOTP: (otp) => {
        return new Promise((resolve, reject) => {
            redisConnect.getConnects().then((connetctions) => {
                connetctions['OTPSTORE'].select(config.get('DB.session.otpdb'), function (err, res) {
                    if (err)
                        reject(err);
                    else {
                        connetctions['OTPSTORE'].expire(otp, 0, function (err, obj) {
                            if (err)
                                reject(err);
                            else
                                resolve();
                        });
                    }
                });
            });
        });
    },

    sendOTP: (unqueOTP, logintype, emailorph) => {
        return new Promise((resolve, reject) => {
            console.log("otp sender email : " + emailorph)
            console.log("otp sender")
            if(logintype == 'email') {
                /*
                var transporterSendinBlue = nodemailer.createTransport({
                    host: "smtp-relay.sendinblue.com",
                    auth: {
                        user: 'pinak.nath@techinfy.in',
                        pass: '81zkEC42SIcWsPaG'
                    },
                    port: 587
                });

                transporterSendinBlue.sendMail({
                    from: 'noreply@doctorsetu.com',
                    to: emailorph,
                    subject: ' OTP Doctor setu ',
                    text: 'Hi,\n' + 'Greetings!\n\n' + 'You are just a step away from accessing your Doctor Setu account\n' + 'We are sharing an OTP to access your account. The code is valid for 30 minutes and usable only once.\n\n' + 'Your OTP:'+ unqueOTP +  '\nExpires in: 30 minutes\n\nBest Regards,\nTeam Doctor Setu'
                });
                */
              
                var transporter = nodemailer.createTransport(smtpTransport({
                  service: 'Gmail',
                  auth: {
                      user: 'doctorsetuotp@gmail.com',
                      pass: 'D0ctor@$etu'
                },
                port:25
                }));
             
                  transporter.sendMail({
                    from: 'doctorsetuotp@gmail.com',
                    to: emailorph,
                    subject: 'OTP Doctor Setu',
                    text: 'Hi,\n' + 'Greetings!\n\n' + 'You are just a step away from accessing your Doctor Setu account\n' + 'We are sharing an OTP to access your account. The code is valid for 30 minutes and usable only once.\n\n' + 'Your OTP:'+ unqueOTP +  '\nExpires in: 30 minutes\n\nBest Regards,\nTeam Doctor Setu'
                  });
                 console.log("send email "+ emailorph + unqueOTP)
                /*
                transporter.sendMail({
                    from: 'preksh@gmail.com',
                      to: emailorph,
                      subject: ' OTP Doctor setu ',
                      text:  unqueOTP + ' :  OTP!'
                    });
                    
                 */
                
            } else {
                  console.log("number")
                  const nexmo = new Nexmo({
                      apiKey: '5d1ab8aa',
                      apiSecret: 'JTYck98onKc9hyNy',
                  });
                  var to = "+91"+emailorph;
                  var from = 'Doctorsetu';
                  var text = 'Use '+ unqueOTP + ' as OTP to login Doctor setu app. This OTP is valid for 30 mins.';
                  console.log(to)
                 // nexmo.message.sendSms(from, to, text);

                  const sendOtp = new SendOtp('250830A8Gl1h5Gf7335c0a3e0a');
                  sendOtp.send(to, "PREKSH", unqueOTP,function (error, data) {
                    console.log("data");
                    console.log(error);
                    console.log(data)
                  }); //otp is optional if not sent it'll be generated automatically

             }



        });
    }
}