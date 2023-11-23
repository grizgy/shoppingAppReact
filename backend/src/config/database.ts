import {Sequelize} from 'sequelize';
import config from './configs';
import setupModels from '../models';

const sequelize = new Sequelize (

    config.dbName,
    config.dbUser,
    config.dbPassword, 
    {
        host: config.dbHost,
        dialect: 'postgres'
    }

);

sequelize.sync();
setupModels(sequelize);

export default sequelize;