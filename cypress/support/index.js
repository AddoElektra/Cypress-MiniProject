const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const xpath = require('cypress-xpath');

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  on('task', {
    xpath,
  });
};

Cypress.env('name', 'sayani.pramanik004@gmail.com');

export function configureEnvironment(env) {
  env.BASE_URL = 'http://localhost:3000';
}

import './commands';
import 'cypress-file-upload/commands';

module.exports = { video: true }