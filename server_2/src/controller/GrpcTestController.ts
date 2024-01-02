import {Request, response, Response} from 'express'
import {add} from "../service/grpc/addition.service";

export class GrpcTestController {
    public static async sum(req: Request, res: Response) {
        try {
            const grpcResponse = await add(6, 5)
            return res.json({
                success: true,
                message: `The sum is ${grpcResponse?.sum || 0}`
            })
        } catch (exception) {
            return res.json({
                success: false,
                error: exception
            }).status(400)
        }

    }
}
