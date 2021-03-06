import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transactionExists = await transactionsRepository.findOne({
      where: { id },
    });

    if (!transactionExists)
      throw new AppError("This transaction ID doesn't exists");

    transactionsRepository.delete(id);
  }
}

export default DeleteTransactionService;
