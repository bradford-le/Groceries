"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.register = function (user) {
        alert("About to register: " + user.email);
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBS3pDO0lBQUE7SUFJQSxDQUFDO0lBSEMsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFDakIsS0FBSyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBSFUsV0FBVztRQUR2QixpQkFBVSxFQUFFO09BQ0EsV0FBVyxDQUl2QjtJQUFELGtCQUFDO0NBQUEsQUFKRCxJQUlDO0FBSlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XHJcbiAgICBhbGVydChcIkFib3V0IHRvIHJlZ2lzdGVyOiBcIiArIHVzZXIuZW1haWwpO1xyXG4gIH1cclxufSJdfQ==