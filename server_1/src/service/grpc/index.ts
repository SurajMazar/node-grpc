import * as grpc from '@grpc/grpc-js'
import {AdditionService} from "./addition.service";
import {APP_PORT} from "../../config/app.config";

class GRPC {
    public init() {
        const server = new grpc.Server();

        const additionService = AdditionService()
        server.addService(additionService.service, {
            Addition: additionService?.callback
        })

        server.bindAsync(`0.0.0.0:${APP_PORT}`, grpc.ServerCredentials.createInsecure(), () => {
            server.start();
            console.log(`Server started at 0.0.0.0:${APP_PORT}`)
        });
    }
}

export default GRPC
