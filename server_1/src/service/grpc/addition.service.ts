import * as path from "path";
import * as protoLoader from '@grpc/proto-loader'
import * as grpc from '@grpc/grpc-js'

export const AdditionService = () => {
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

    return {
        service: (add as any).Add.service,
        callback: (call: {
            request: {
                first: number,
                second: number
            }
        }, callback: any) => {
            callback(null, {
                sum: call?.request?.first + call?.request?.second
            })
        }
    }

}
