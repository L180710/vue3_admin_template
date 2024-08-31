// 定义用户数据的 ts 类型
export interface loginFormData {
  username: string
  password: string
}

// 定义全部接口返回数据都拥有 ts 类型
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

// 定义登录接口返回数据类型
export interface loginResponseData extends ResponseData {
  data: string
}

// 定义获取用户信息返回数据类型
export interface userInfoResponseData extends ResponseData {
  {
  "code": 200,
  "message": "成功",
  "data": {
    "routes": [
      "aaa",
      "test-2",
      "User",
      "Category",
      "Discount",
      "ActivityEdit",
      "CouponRule",
      "bh",
      "Product",
      "Activity",
      "CouponAdd",
      "Trademark",
      "test1",
      "Attr",
      "ActivityAdd",
      "ASD ",
      "CouponEdit",
      "OrderShow",
      "111",
      "Permission",
      "Spu",
      "UserList",
      "ClientUser",
      "Order",
      "33",
      "t't",
      "Coupon",
      "permision",
      "6123",
      "Acl",
      "ActivityRule",
      "Role",
      "RoleAuth",
      "222",
      "Refund",
      "1223",
      "x",
      "OrderList",
      "Sku"
    ],
    "buttons": [
      "cuser.detail",
      "cuser.update",
      "cuser.delete",
      "btn.User.add",
      "btn.User.remove",
      "btn.User.update",
      "btn.User.assgin",
      "btn.Role.assgin",
      "btn.Role.add",
      "btn.Role.update",
      "btn.Role.remove",
      "btn.Permission.add",
      "btn.Permission.update",
      "btn.Permission.remove",
      "btn.Activity.add",
      "btn.Activity.update",
      "btn.Activity.rule",
      "btn.Coupon.add",
      "btn.Coupon.update",
      "btn.Coupon.rule",
      "btn.OrderList.detail",
      "btn.OrderList.Refund",
      "btn.UserList.lock",
      "btn.Category.add",
      "btn.Category.update",
      "btn.Category.remove",
      "btn.Trademark.add",
      "btn.Trademark.update",
      "btn.Trademark.remove",
      "btn.Attr.add",
      "btn.Attr.update",
      "btn.Attr.remove",
      "btn.Spu.add",
      "btn.Spu.addsku",
      "btn.Spu.update",
      "btn.Spu.skus",
      "btn.Spu.delete",
      "btn.Sku.updown",
      "btn.Sku.update",
      "btn.Sku.detail",
      "btn.Sku.remove",
      "btn.all",
      "btn.test.2",
      "aaabbb",
      "",
      "22223333444",
      "btn.Trademark.search"
    ],
    "roles": [
      "超级管理员"
    ],
    "name": "admin",
    "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
  },
  "ok": true
}
}

// // 登录接口需要携带参数 ts 类型
// export interface loginForm {
//   username: string
//   password: string
// }

// interface dataType {
//   token?: string
//   message?: string
// }

// // 登录接口返回数据类型
// export interface loginResponseData {
//   code: number
//   data: dataType
// }

// interface userInfo {
//   userId: number
//   avatar: string
//   username: string
//   password: string
//   desc: string
//   roles: string[]
//   buttons: string[]
//   routes: string[]
//   token: string
// }

// // 定义服务器返回用户信息相关的数据类型
// interface user {
//   checkUser: userInfo
// }

// export interface userResponseData {
//   code: number
//   data: user
// }
