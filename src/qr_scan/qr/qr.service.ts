import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';

@Injectable()
export class QrService {
    async generateQrCode(url: string): Promise<string> {
        try {
          const qrCodeDataURL = await QRCode.toDataURL(url);
          return qrCodeDataURL;  // return base64 type
        } catch (error) {
          console.log("Err: "+ error);
          throw new Error('QR code generation failed');
        }
      }
}
