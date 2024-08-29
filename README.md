CoinTrack : 

Petit projet permettant l'affichage des 10meilleurs crypto-monnaies via l'utilisation de l'API coinmarketcap. 

Project Initialization

    In VSCode, install plugins Prettier - Code formatter and ESLint and configure them
    Clone this repo, enter it
    If you are using yarn or pnpm, adapt the config/cli in package.json
    Run command npm install
    NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in backend/.env.sample

Available Commands

    migrate : Run the database migration script
    dev : Starts both servers (frontend + backend) in one terminal
    dev-front : Starts the React frontend server
    dev-back : Starts the Express backend server
    lint : Runs validation tools, and refuses unclean code (will be executed on every commit)
    fix : Fixes linter errors (run it if lint growls on your code !)

FAQ
Tools

    Concurrently : Allows for several commands to run concurrently in the same CLI
    Husky : Allows to execute specific commands that trigger on git events
    Vite : Alternative to Create-React-App, packaging less tools for a more fluid experience
    ESLint : "Quality of code" tool, ensures chosen rules will be enforced
    Prettier : "Quality of code" tool as well, focuses on the styleguide
    _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
    Nodemon : Allows to restart the server everytime a .js file is udated
