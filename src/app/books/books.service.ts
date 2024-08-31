import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }
  getBooks(){
    return [
      {
        name:'clean code',
  author:'robert c martin',
  image:'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
  amount: 700,
  
      },
      {
      name:'The Pragmatic Programmer',
      author:'Andrew Hunt',
      image:'https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/rokimg_20151107_104615.gif',
      amount: 800,
  
      },
      {
      name:'Atomic Habits',
      author:'James Clear ',
      image:'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
      amount: 360,
  
      },
      {
      name:'The Psychology of Money',
      author:'Morgan Housel',
      image:'https://m.media-amazon.com/images/P/0857197681.01._SCLZZZZZZZ_SX500_.jpg',
      amount: 219,
  
      },
    
    ]
  }
}
