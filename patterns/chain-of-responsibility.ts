


interface HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
}



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.auth.getAuthorizationToken();

        // Делаем копию запроса с добавленным хедером
        const authReq = req.clone({
            headers: req.headers.set('Authorization', authToken)
        });

        // вызываем следующий обработчик
        return next.handle(authReq); // возвращает Observable
    }
}
