const app = require('./app')

const { envs } = require('./config/enviroments/enviroments')


console.log(process.env.PORT)

//4. Set the server to listen on a port
app.listen(envs.PORT, () => {
    console.log("Server running on port: " + envs.PORT);
  });
  