import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateClientDTO } from './dto/CreateClient.dto';
import { ClientService } from './client.service';
import { UpdateClientDTO } from './dto/UpdateClient.dto';

@Controller('/clients')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get()
  async getClients() {
    const result = await this.clientService.findAll();
    return result;
  }

  @Post()
  async createClient(@Body() clientData: CreateClientDTO) {
    const result = await this.clientService.create(clientData);
    return result;
  }

  @Put('/:id')
  async updateClient(
    @Param('id') id: string,
    @Body() clientData: UpdateClientDTO,
  ) {
    const result = await this.clientService.update(id, clientData);
    return result;
  }
}
