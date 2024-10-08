import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true }) // CORS: Nếu cần mở quyền truy cập từ client
export class OrderProcessGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  
  @WebSocketServer()
  server: Server;

  // Hàm này được gọi khi gateway được khởi tạo
  afterInit(server: Server) {
    console.log('WebSocket Gateway initialized');
  }

  // Hàm này được gọi khi client kết nối
  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  // Hàm này được gọi khi client ngắt kết nối
  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  // Nhận message từ client
  @SubscribeMessage('ws_order')
  handleOrder(@MessageBody() data: string): void {
    console.log('Order received:', data);
    // Phát thông điệp tới tất cả các client khác
    this.server.emit('orderUpdate', data);
  }
}