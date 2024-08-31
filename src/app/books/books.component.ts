import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private bookService:BooksService) {}
  books:Book[]=[];


// name2:String='The Pragmatic Programmer';
// author2:String='Andrew Hunt';
// src2:String='https://m.media-amazon.com/images/I/51A8l+FxFNL.jpg'

isDisabled:boolean=false;

 
  
  ngOnInit(): void {
    this.books=this.bookService.getBooks();
  }
  //  handleClick()
  // {
  //   this.isDisabled=true;
  //   // alert("I am working!!!")
  // }
  // myName: String=" ";
  isShowing:boolean=true;

  // toggleBooks()
  // {
  //   this.isShowing=!this.isShowing;
  // }
  
}

