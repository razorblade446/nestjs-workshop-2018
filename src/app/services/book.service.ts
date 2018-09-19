import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IBook } from '../interfaces/book.interface';


@Injectable()
export class BookService {
  constructor(
    @InjectModel('tokenBookSchema')
    private readonly model: Model<IBook>
  ) {
  }

  public find(conditions) {
    return this.model.find(conditions).exec();
  }

  public create(book) {
    const newBook = new this.model(book);
    newBook.save();
  }

}
