const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const {database}=require('./database')

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {


      const text='SELECT * FROM users WHERE email=$1'
      const values = [email]

      database.query(text, values)
      .then(response => {

        const user=response.rows[0]

        if (!user) return done(null, false, console.log('That email is not registered'));
        
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) return done(null, user);
          else return done(null, false, console.log('Password incorrect'));
        });
      });
    })
  )

  passport.serializeUser((user, done) =>{
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done)=> {
    const text='SELECT * FROM users WHERE id=$1'
    const values = [id]

    database.query(text, values)
    .then(response=>{
      const user=response.rows[0]
      return done(null, user);
    })
  
  });
}