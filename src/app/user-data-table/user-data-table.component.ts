import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { SelectionModel, CollectionViewer } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-user-data-table',
  templateUrl: './user-data-table.component.html',
  styleUrls: ['./user-data-table.component.css']
})
export class UserDataTableComponent implements OnInit {
  dataSource: UserDataSource<User>;
  displayedColumns = ['select', 'name', 'email', 'phone', 'company', 'star'];
  selection = new SelectionModel<User>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataSource = new UserDataSource<User>(this.dataService);
    this.dataSource.loadUsers();
    this.dataSource.connect().subscribe(res => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
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

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }
}

export class UserDataSource<T> extends MatTableDataSource<User> {
  private usersSubject = new BehaviorSubject<User[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private dataService: DataService) {
    super();
  }

  connect(): BehaviorSubject<User[]> {
    return this.usersSubject;
  }

  disconnect(): void {
    this.usersSubject.complete();
    this.loadingSubject.complete();
  }

  loadUsers(): void {
    this.loadingSubject.next(true);

    this.dataService.getUsers().pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe(users => this.usersSubject.next(users));
  }
}