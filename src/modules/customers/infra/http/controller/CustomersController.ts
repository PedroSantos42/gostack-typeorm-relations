import { Request, Response } from 'express';

import CreateCustomerService from '@modules/customers/services/CreateCustomerService';

import { container } from 'tsyringe';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createCustomer = container.resolve(CreateCustomerService);

    const { email, name } = request.body;

    const result = await createCustomer.execute({ name, email });

    return response.status(201).json(result);
  }
}
