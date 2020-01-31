import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../shared_service/user.service';
import { from, Observable } from 'rxjs';
import { User } from '../../user';
import { MatTableDataSource, MatSort, MatPaginatorModule, MatPaginator } from '@angular/material';
import { identifierModuleUrl } from '@angular/compiler';
import { DataSource } from '@angular/cdk/table';
 @Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {

  private users=[];

  constructor(private userService:UserService) { }
  listData = new MatTableDataSource<User>();
  displayedColumns:string[]=['aid',
                            'fname',
                            'lname',
                            'actions'
                       ];
@ViewChild(MatSort, {static: true}) sort: MatSort;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild('content', {static: true}) content: ElementRef;
searchKey:string;




  ngOnInit() {
    // https://code-maze.com/angular-material-table/
    this.getUsers();
   }

   deleteUser(id) {  
    this.userService.deleteUser(id)  
      .subscribe(  
        data => {  
          console.log(data);  
      
          this.userService.getUsers()
          .subscribe(res => {
            this.listData.data = res as User[];
          })
        },  
        error => console.log(error));  
  }

public doFilter = (value: string) => {
    this.listData.filter = value.trim().toLocaleLowerCase();
  }
   ngAfterViewInit(): void {
    this.listData.sort = this.sort;
    this.listData.paginator=this.paginator;
  }

  public getUsers = () => {
    this.userService.getUsers()
    .subscribe(res => {
      this.listData.data = res as User[];
    })
  }
  
  }   


 


 



