# Node Express Service

Start commands at development time

> npm run dev

Start commands at product env

> pm2 start app/index.js --name="app_name"

## API

### login

path: ${domain}/api/login

method: GET

params: query

| param | required | value  |
| ----- | -------- | ------ |
| uid   | true     | string |

response:

```json
{
  "ret_code": 0,
  "ret_msg": "",
  "sdk_error_code": 0,
  "data": {
    "user": {
      "uid": "1234",
      "nick_name": "user_1234",
      "gender": "female",
      "avatar": "https://api.multiavatar.com/1234.png?apikey=GFPxsS8iJhQy2X",
      "is_login": true,
      "coins": 10000,
      "is_ai": 0
    }
  }
}
```

example:

> ${domain}/api/login?uid=1234

### get_code

path: ${domain}/api/get_code

method: GET

params: query

| param | required | value  |
| ----- | -------- | ------ |
| uid   | true     | string |

example:

> ${domain}/api/get_code?uid=1234

response:

```json
{
  "ret_code": 0,
  "ret_msg": "",
  "sdk_error_code": 0,
  "data": {
    "code": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiIxNjQ4NjI5OTI5NTQ4MDQyMjQxIiwidWlkIjoiMTIzNCIsImV4cCI6MTY4MjQ4NDgxOSwiaWF0IjoxNjgyNDc3NjE5fQ.P9XZsOcS5JL9fE3vBiVwQafAl1kPqeXWrKDAEhSSUy4",
    "expire_date": 1682484819000
  }
}
```

### coins_consumption

path: ${domain}/api/coins_consumption

method: GET

params: query

| param | required | value  |
| ----- | -------- | ------ |
| uid   | true     | string |
| coins | true     | string |

example:

> ${domain}/api/coins_consumption?uid=1234&coins=200

response:

```json
{
  "ret_code": 0,
  "ret_msg": "",
  "sdk_error_code": 0,
  "data": {}
}
```

### player_match

path: ${domain}/api/player_match

method: GET

params: query

| param | required | value  |
| ----- | -------- | ------ |
| uid   | true     | string |
| gm_id | true     | string |

example:

> ${domain}/api/player_match?uid=1234&gm_id=1468180338417074177

response:

```json
{
  "ret_code": 0,
  "ret_msg": "matching",
  "sdk_error_code": 0,
  "data": {}
}
```

### stop_match

path: ${domain}/api/stop_match

method: GET

params: query

| param | required | value  |
| ----- | -------- | ------ |
| uid   | true     | string |
| gm_id | true     | string |

example:

> ${domain}/api/stop_match?uid=789&gm_id=1468180338417074177

response:

```json
{
  "ret_code": 0,
  "ret_msg": "matching",
  "sdk_error_code": 0,
  "data": {}
}
```
