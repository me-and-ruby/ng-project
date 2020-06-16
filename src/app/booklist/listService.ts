
import { Injectable } from '@angular/core';

import { books } from './model';


@Injectable()
export class listService {
     
    constructor(private books: books[]) { }

    

    getAllBooks():books[]{
        return books;
    }
     
}