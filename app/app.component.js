"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.email = 'yourEmail@something.com';
        this.isLoggingIn = true;
    }
    AppComponent.prototype.submit = function () {
        alert('You\'re using: ' + this.email);
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n  <StackLayout>\n    <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n    <TextField [(ngModel)]=\"email\" hint=\"Email Address\" keyboardType=\"email\"\n      autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n    <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n    <Button [text]=\"isLoggingIn ? 'Sign in' : 'Sign up'\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n    <Button [text]=\"isLoggingIn ? 'Sign up' : 'Back to login'\" (tap)=\"toggleDisplay()\"></Button>\n  \n  </StackLayout>\n  ",
            styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFrQjFDO0lBaEJBO1FBaUJFLFVBQUssR0FBQyx5QkFBeUIsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLElBQUksQ0FBQztJQVFyQixDQUFDO0lBTkMsNkJBQU0sR0FBTjtRQUNFLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELG9DQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBVFUsWUFBWTtRQWhCeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxpa0JBV1Q7WUFDRCxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBQyx1QkFBdUIsQ0FBQztTQUNwRSxDQUFDO09BQ1csWUFBWSxDQVV4QjtJQUFELG1CQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gIDxTdGFja0xheW91dD5cbiAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vbG9nb19sb2dpblwiIHN0cmV0Y2g9XCJub25lXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiPjwvSW1hZ2U+XG4gICAgPFRleHRGaWVsZCBbKG5nTW9kZWwpXT1cImVtYWlsXCIgaGludD1cIkVtYWlsIEFkZHJlc3NcIiBrZXlib2FyZFR5cGU9XCJlbWFpbFwiXG4gICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIj48L1RleHRGaWVsZD5cbiAgICA8VGV4dEZpZWxkIGhpbnQ9XCJQYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIj48L1RleHRGaWVsZD5cblxuICAgIDxCdXR0b24gW3RleHRdPVwiaXNMb2dnaW5nSW4gPyAnU2lnbiBpbicgOiAnU2lnbiB1cCdcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIiAodGFwKT1cInN1Ym1pdCgpXCI+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBbdGV4dF09XCJpc0xvZ2dpbmdJbiA/ICdTaWduIHVwJyA6ICdCYWNrIHRvIGxvZ2luJ1wiICh0YXApPVwidG9nZ2xlRGlzcGxheSgpXCI+PC9CdXR0b24+XG4gIFxuICA8L1N0YWNrTGF5b3V0PlxuICBgLFxuICBzdHlsZVVybHM6IFsncGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzcycsJ3BhZ2VzL2xvZ2luL2xvZ2luLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGVtYWlsPSd5b3VyRW1haWxAc29tZXRoaW5nLmNvbSc7XG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcblxuICBzdWJtaXQoKSB7XG4gICAgYWxlcnQoJ1lvdVxcJ3JlIHVzaW5nOiAnICsgdGhpcy5lbWFpbCk7XG4gIH1cbiAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gIH1cbn0iXX0=