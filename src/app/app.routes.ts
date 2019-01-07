import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DemoComponent } from './demo/demo.component';

export const rootRouterConfig: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  // { 
  //   path: 'demo',
  //   component: DemoComponent
  // },
  { 
    path : '',
    component : MainComponent,
    children: [ 
      {
        path : 'home',
        loadChildren: './shop/shop.module#ShopModule'
      },
      { 
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      },
      { 
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'home/one'
  }
];

