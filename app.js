const path = require("path");

const express = require("express");
const morgan = require("morgan");
//const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
//const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
//const hpp = require("hpp");
//const cors = require("cors");

//Require Routes

const app = express();

//app.enable('trust proxy');

app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));

// 1) GLOBAL MIDDLEWARES
// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// Set security http headers
app.use(helmet());

//Logs all requests
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

// Limit requests from same IP
/*const limiter = rateLimit({
	max: 100,
	windowMs: 60 * 60 * 1000,
	message: 'Too many requests from this IP. Please try again in an hour!'
});*/

// Body parser, reads data from the body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Data sanitization against nosql query injection
//app.use(mongoSanitize());

// Data sanitization against XSS attacks
app.use(xss());

//Prevent parameter pollution
/*app.use(
	hpp({
		whitelist: [ 'duration', 'ratingsQuantity', 'ratingsAverage', 'maxGroupSize', 'difficulty', 'price' ]
	})
);*/

// Abilitate cors
/*app.use(cors());
app.options('*', cors());*/

/*app.use(compression());*/
//Testing middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.requestTime);
  next();
});

// 2) ROUTE HANDLERS

// Users routes handlers

// 3) ROUTES
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/about.html"));
});

app.get("/guests", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/guests.html"));
});
/*app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouter);

app.all('*', (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);*/

module.exports = app;
