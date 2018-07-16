"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("./shared/user/user");
var user_service_1 = require("./shared/user/user.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.isLoggingIn = true;
        this.user = new user_1.User();
    }
    AppComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    AppComponent.prototype.login = function () {
    };
    AppComponent.prototype.signUp = function () {
        this.userService.register(this.user);
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [user_service_1.UserService],
            templateUrl: 'pages/login/login.html',
            styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMkNBQTBDO0FBQzFDLDJEQUF1RDtBQVF2RDtJQUlFLHNCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUY1QyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUdqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNELDZCQUFNLEdBQU47UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFBLENBQUM7WUFDTCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFDRCw0QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELDZCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELG9DQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBdEJVLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBQyx1QkFBdUIsQ0FBQztTQUNwRSxDQUFDO3lDQUtpQywwQkFBVztPQUpqQyxZQUFZLENBdUJ4QjtJQUFELG1CQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6ICdwYWdlcy9sb2dpbi9sb2dpbi5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3BhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3MnLCdwYWdlcy9sb2dpbi9sb2dpbi5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICB1c2VyOiBVc2VyO1xuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICB9XG4gIHN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgdGhpcy5sb2dpbigpO1xuICAgIH0gZWxzZXtcbiAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgfVxuICB9XG4gIGxvZ2luKCl7XG5cbiAgfVxuICBzaWduVXAoKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpO1xuICB9XG4gIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICB9XG59Il19