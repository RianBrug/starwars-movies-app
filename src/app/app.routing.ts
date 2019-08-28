import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from './_helpers';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
    { path: '', component: PostsComponent, canActivate: [AuthGuard] },
    { path: 'details/:id', component: DetailsComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user', component: HomeComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
