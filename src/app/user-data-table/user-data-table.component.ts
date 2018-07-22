import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user-data-table',
  templateUrl: './user-data-table.component.html',
  styleUrls: ['./user-data-table.component.css']
})
export class UserDataTableComponent implements OnInit {
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['select', 'name', 'email', 'phone', 'company'];
  selection = new SelectionModel<User>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: DataService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selectes all rows if they are not all selected; otherwise clear selection */
  masterToggle(): void {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => {
      this.selection.select(row);
    });
  }
}

export class UserDataSource extends MatTableDataSource<any> {
  constructor(private userService: DataService) {
    super();

    this.userService.loadUsers();
  }
  connect(): BehaviorSubject<User[]> {
    return this.userService.UsersDataSource;
  }
  disconnect() { }
}