import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory{
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return{
            type: 'mysql',
            host: process.env.HOST || "",
            port: parseInt(process.env.PORT || ""),
            username: process.env.USER || "",
            password: process.env.PASSWORD || "",
            database: process.env.DATABASE || "",
            autoLoadEntities: true,
            synchronize: true,
        };
    }
}