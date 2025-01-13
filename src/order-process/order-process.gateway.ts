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

  afterInit(server: Server) {
    console.log('WebSocket Gateway initialized');
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('ws_order')
  handleOrder(@MessageBody() data: any): void {
    console.log('Order received:', data);
    this.server.emit('orderUpdate', data);
  }

  @SubscribeMessage('ws_confirm')
  handleConfirm(@MessageBody() data: string): void {
    console.log('Order type:', data);
    this.server.emit('orderConfirm', data);
  }
}