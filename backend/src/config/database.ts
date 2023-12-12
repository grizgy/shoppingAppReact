import {Sequelize} from 'sequelize';
import config from './configs';
import setupModels from '../models';

const connection = async () => {

    const sequelize = new Sequelize (

        config.dbName,
        config.dbUser,
        config.dbPassword, 

        {
            host: config.dbHost,
            dialect: 'postgres'
        }

    );

    setupModels(sequelize)

}

export default connection;