# Anywhere-Fitness Backend

## [https://anywhere-fitnesssite.herokuapp.com/](https://anywhere-fitnesssite.herokuapp.com/)

# Endpoints

## POST /login

#### Expected Payload:

```
{
  "username": "janedoe",
  "password": "abc12345"
}
```

#### Returns:

```
{
  "message": "Welcome janedoe!"
}
```

## POST /users

#### Expected Payload:

```
{
  "username": "janedoe",
  "password": "abc12345"
}
```

#### Returns:

```
{
  "id": 1,
  "username": "janedoe"
}
```
## GET /

#### Expected Payload:

```

```

#### Returns:

```
[
  {
    "id": 1,
    "username": "janedoe"
  }
  
]
```
