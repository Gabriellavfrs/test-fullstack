import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from './entities/client.entity';
import { Repository } from 'typeorm';
import { ClientDTO } from './dto/Client.dto';
import { CreateClientDTO } from './dto/CreateClient.dto';
import { UpdateClientDTO } from './dto/UpdateClient.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
  ) {}

  async findAll() {
    const result = await this.clientRepository.find();
    const clients = result.map((client) => {
      return ClientDTO.fromEntity(client);
    });
    return clients;
  }

  async create(createClientDto: CreateClientDTO) {
    const newClient = ClientEntity.fromDto(createClientDto);
    const result = await this.clientRepository.save(newClient);
    return result;
  }

  async update(id: string, clientData: UpdateClientDTO) {
    const result = await this.clientRepository.update(id, clientData);
    return result;
  }
}
