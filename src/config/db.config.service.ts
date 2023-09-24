import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class DBConfigService implements TypeOrmOptionsFactory{
    constructor(private configService:ConfigService){}
    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return{
            type:'mysql',
            host:this.configService.get<string>('DB_HOST'),
            port:this.configService.get<number>('DB_PORT'),
            username:this.configService.get<string>('DB_USER'),
            password:this.configService.get<string>('DB_PASSWORD'),
            database:this.configService.get<string>('DB_DATABASE'),
            entities:[__dirname+'/**/*.entity{.js,.ts}'],
            synchronize:true
        }
    }

   

}