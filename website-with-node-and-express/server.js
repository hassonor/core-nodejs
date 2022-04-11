const path = require('path');
const express = require('express');
const cookieSession = require('cookie-session');
const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json');

const routes = require('./routes/index');

const app = express();
const PORT = 3003 || process.env.PORT;

app.set('trust proxy', 1);

app.use(
  cookieSession({
    name: 'session',
    keys: ['OrHasson777', 'OrHasson555'],
  })
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.locals.siteName = 'OR Meetups';

app.use(express.static(path.join(__dirname, './static')));

app.use((request, response, next) => {
  response.locals.someVariable = 'Or Hasson';
  return next();
});

app.use(
  '/',
  routes({
    feedbackService,
    speakersService,
  })
);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
