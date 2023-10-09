import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory{
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return{
            type: 'mysql',
            host: '38.17.53.105',
            port: 18485,
            username: 'admin',
            password: 'm9O6RXdU',
            database: 'db_ecorp',
            autoLoadEntities: true,
            synchronize: true,
        };
    }
}