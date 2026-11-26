const fs = require('node:fs');
const path = require('node:path');

const parallel = Number(process.env.CUCUMBER_PARALLEL || 1);

if (!Number.isInteger(parallel) || parallel < 1) {
    throw new Error('CUCUMBER_PARALLEL must be a positive integer');
}

fs.mkdirSync(path.join(__dirname, 'reports'), { recursive: true });

module.exports = {
    default: {
        paths: ['features/**/*.feature'],
        require: [
            'support/world.js',
            'support/hooks.js',
            'step-definitions/**/*.js',
        ],
        format: [
            'progress',
            'json:reports/cucumber-report.json',
            'html:reports/cucumber-report.html',
        ],
        parallel,
    },
};
