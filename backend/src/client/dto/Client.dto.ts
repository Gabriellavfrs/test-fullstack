import { ClientEntity } from '../entities/client.entity';

export class ClientDTO {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phoneNumber: string;
  status: string;

  static fromEntity(entity: ClientEntity): ClientDTO {
    const client = new ClientDTO();
    Object.assign(client, entity);
    return client;
  }
}
