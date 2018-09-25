import { Controller, Get, Query, Post, Body, /*Inject, forwardRef*/ } from '@nestjs/common';
import { BookService } from '../services/book.service';
import { IBook } from '../interfaces/book.interface';

@Controller('api/v1/books')
export class BookController {
  constructor(/*@Inject(forwardRef(() => BookService))*/ private readonly bookService: BookService) {
  }

  @Get('')
  public list(@Query('author') author?: string) {
    const conditions: any = {};
    if (author) {
      conditions.author = author;
    }
    return this.bookService.find(conditions);
  }

  @Post()
  public create(@Body() book: IBook) {
    return this.bookService.create(book);
  }
}
