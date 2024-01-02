import * as path from "path";
import * as protoLoader from '@grpc/proto-loader'
import * as grpc from '@grpc/grpc-js'
import {GRPC_SERVER_PORT} from "../../config/app.config";

export const add = async (a: number, b: number): Promise<{ sum: number }> => {
    return new Promise((resolve, reject) => {
        /*** PATH OF THE PROTO FILE */
        const proto_path: string = path.join(__dirname, '../../../../Addition.proto')

        const packageDefinition = protoLoader.loadSync(
            proto_path,
            {
                keepCase: true,
                longs: String,
                enums: String,
                defaults: true,
                oneofs: true
            });

        const add = grpc.loadPackageDefinition(packageDefinition).addition

        const client = new (add as any).Add(`0.0.0.0:${GRPC_SERVER_PORT}`,
            grpc.credentials.createInsecure());

        /** GRPC CALL */
        client.Addition({first: a, second: b}, (err: any, response: any) => {
            if(err){
                reject(err)
            }
            resolve(response as { sum: number })
        })
    })
}
