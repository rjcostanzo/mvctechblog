const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const sequelizeToStore = require('connect-session-sequelize')(session.Store);

const app = express();

app.listen(process.env.PORT || 3000, function(){
    console.log("Listening on port ", this.address().port, app.settings.env);
  });

const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'this is the secret for the blog',    
    cookie: { maxAge: null },
    resave: false,
    saveUninitialized: true,
    store: new sequelizeToStore({
        db: sequelize
    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}.`));
});