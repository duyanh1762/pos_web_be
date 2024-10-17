import { Body, Controller, Post } from '@nestjs/common';
import { QrService } from './qr.service';
interface DataQR{
    money:number,
    staff:string,
    table:string, 
}
@Controller('qr')
export class QrController {
    constructor(private qrService: QrService){}

    @Post('get')
    getCode(@Body() data:DataQR){
        let url = "https://github.com/duyanh1762";
        return this.qrService.generateQrCode(url);
    }
}
