`RESTFUL API`

**RESTful = URL表示资源 + HTTP方法表示操作**

非restful`/getUser`，接口命名中有操作的意思

restful`GET /users/1`

```
GET    /users/1
POST   /users
DELETE /users/1
```

一个完整的HTTP请求结构

```http
请求行（Request Line）
请求头（Headers）
空行
请求体（Body）

POST /users/1?active=true HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Authorization: Bearer xxx

{
  "name": "ma1zer",
  "age": 20
}
```

- `params`：写在路径中的变量

| 类型   | 位置              | 用途        |
| ------ | ----------------- | ----------- |
| params | 路径 `/users/:id` | 标识资源    |
| query  | `?page=1`         | 过滤 / 条件 |
| body   | 请求体            | 提交数据    |

对比示例：

```html
GET /users/1 → params（找某个用户） GET /users?page=1 → query（分页） POST
/users → body（创建用户）
```

请求头Headers，其中包括：

- `Content-Type`：请求体是什么格式
- `Authorization`：身份认证（JWT)

请求体传具体数据，需要请求头来配合一下

## node基础
