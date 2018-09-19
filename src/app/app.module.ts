import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { bookSchema } from './schemas/book.schema';
import { BookService } from './services/book.service';
import { BookController } from './controllers/book.controller';

@Module({
  controllers: [AppController, BookController],
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nestjs-workshop-2018', {useNewUrlParser: true}),
    MongooseModule.forFeature([
      {name: 'tokenBookSchema', schema: bookSchema}
    ])
  ],
  providers: [
    BookService
  ]
})
export class AppModule {
}
