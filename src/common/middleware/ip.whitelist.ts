import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class IpWhitelistMiddleware implements NestMiddleware {
    private readonly allowedIps = ['ALLOWED_IP_1', 'ALLOWED_IP_2']; // Replace with your IPs

    use(req: Request, res: Response, next: NextFunction) {
        const clientIp = req.ip || req.socket.remoteAddress;
        console.log("Request IP: " + req.ip)
        console.log("Request socket IP: " + req.socket.remoteAddress)
        // if (!this.allowedIps.includes(clientIp)) {
        //     throw new UnauthorizedException('IP not allowed');
        // }
        next();
    }
}