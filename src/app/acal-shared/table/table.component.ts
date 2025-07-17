import { Component } from "@angular/core";

@Component({
    selector: 'app-table',
    template: `
    <div class="table-responsive table-card">
        <table class="table align-middle table-nowrap mb-0 table-gridjs">
            <ng-content select="[table-header]"></ng-content>
            <ng-content select="[table-body]"></ng-content>
        </table>
    </div>
  `,
    standalone: false
})
export class TableComponent {}