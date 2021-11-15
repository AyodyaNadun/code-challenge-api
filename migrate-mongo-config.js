// In this file you can configure migrate-mongo
const dotenv = require("dotenv");

dotenv.config({path: `app/config/${process.env.NODE_ENV}.env`});

const HOST = process.env.HOST;
const MONGO_PORT = process.env.MONGO_PORT;
const DATABASE = process.env.DATABASE;
const MIGRATION_DIR = process.env.MIGRATION_DIR;

let connURL;

switch (process.env.NODE_ENV) {
  case 'development':
    connURL = `mongodb://${HOST}:${MONGO_PORT}/${DATABASE}`;
    break;
  case "staging":
    // connURL should be testing environment mongodb url
    break;
  case "production":
    // connURL should be production environment mongodb url
      break;
}

const config = {
  mongodb: {
    url: connURL,
    databaseName: `${DATABASE}`,
    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      useUnifiedTopology: true, // removes a deprecating warning when connecting
    }
  },

  // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
  migrationsDir: `app/${MIGRATION_DIR}`,

  // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
  changelogCollectionName: "changelog",

  // The file extension to create migrations and search for in migration dir
  migrationFileExtension: ".js"
};

// Return the config as a promise
module.exports = config;
