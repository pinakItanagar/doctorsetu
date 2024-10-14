const cors = require('cors');
let express = require('express');
let bodyparser = require('body-parser');
let config = require('config');
let redisConnect = require('redis-connetctions-manager');
let mongoConnect = require('mongoclient-manager');
const swaggerUi = require('swagger-ui-express');
const doctorLoginRoute = require('./routes/doctor/login');
const patientAppointmentRoute = require('./routes/patient/appointment'); 
const patientProfileRoute = require('./routes/patient/profile'); 

const usersRegistrationRoute = require('./routes/users/registration'); 
const usersProfileRoute = require('./routes/users/profile');
const webUserOtpRoute = require('./routes/users/webotp');

const doctorScheduleRoute = require('./routes/doctor/schedule');
const doctorProfileRoute = require('./routes/doctor/profile');
const doctorAppointmentRoute = require('./routes/doctor/appointment');
const specialization = require('./routes/specialization/specialization');
const hospital = require('./routes/hospitals/hospitals');
const symptoms = require('./routes/symptom');
const language = require('./routes/language');
const admin = require('./routes/admin');


const openApiDocumentation = require("./API-Swagger.json");
//const openApiDocumentation = require("./swagger.json");



var app = express();
app.use(cors());
global.__basedir = __dirname;
app.use(express.static('public'));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiDocumentation));
/*
let redis_connections_credentials = [
  {
    name: "OTPSTORE",
    credentials: {
      host: config.get("DB.session.host"),
      port: config.get("DB.session.port"),
      no_ready_check: true,
      password: config.get("DB.session.password"),
    },
  },
];
*/

let redis_connections_credentials = [
  {
    name: "OTPSTORE",
    credentials: {
      host: config.get("DB.session.host"),
      port: config.get("DB.session.port"),
      no_ready_check: true
    },
  },
];

var mongo_connections_credentials = {
  app: config.get("DB.datastore.url"),
};
redisConnect
  .connect(redis_connections_credentials)
  .then((redis_connections) => {
    if (redis_connections) {
      mongoConnect
        .connect({ urls: mongo_connections_credentials })
        .then((mongo_connections) => {
          if (mongo_connections) {
            app.use(bodyparser.urlencoded({ extended: false }));
            app.use(bodyparser.json());

            app.use("/users", usersRegistrationRoute);
            app.use("/users/profile", usersProfileRoute);
            app.use("/doctors", doctorLoginRoute);
            app.use("/doctor/profile", doctorProfileRoute);
            app.use("/doctor/appointment", doctorAppointmentRoute);
            app.use("/doctor/schedule", doctorScheduleRoute);

            app.use("/patient/appointment", patientAppointmentRoute);
            app.use("/patient/profile", patientProfileRoute);

            app.use("/specialization", specialization);
            app.use("/hospital", hospital);
            app.use("/symptoms",symptoms);
            app.use("/language",language);
            app.use("/admin",admin);
            app.use("/users/webotp", webUserOtpRoute );


            app.listen(config.get("APP.port"), config.get("APP.host"), () => {
              let appURL = `http://${config.get("APP.host")}:${config.get(
                "APP.port"
              )}`;

             // let dbPassword = config.get("DB.session.password");
              console.log(`server started at ${appURL}`);
            //  console.log(`server password ${dbPassword}` );
            });
          }
        });
    }
  });
