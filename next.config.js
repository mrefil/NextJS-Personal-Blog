const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'testUser',
                mongodb_password: 'testUser123456',
                mongodb_clusterID: 'cluster0',
                mongodb_database: 'my-site-dev'
            }            
        }
    }

    return {
        env: {
            mongodb_username: 'testUser',
            mongodb_password: 'testUser123456',
            mongodb_clusterID: 'cluster0',
            mongodb_database: 'my-site-prod'
        }
    }
};