APIs

1. Create User

```
mutation Mutation($username: String!, $email: String!) {
  createUser(username: $username, email: $email) {
    id
    username
    email
  }
}
```

```
{
  "data": {
    "createUser": {
      "id": "2ed599ed-8781-463a-9b43-d5b44bca0e40",
      "username": "Amogh",
      "email": "amogh@sprinto.com"
    }
  }
}
```

2. Delete User

```
mutation Mutation($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId)
}
```

```
{
  "data": {
    "deleteUser": 1
  }
}
```

3. Create Item

```
mutation Mutation($userId: ID!, $title: String!, $description: String, $severity: severityType, $dueDate: Date) {
  createItem(user_id: $userId, title: $title, description: $description, severity: $severity, dueDate: $dueDate) {
    id
    title
    description
    severity
    isCompleted
    dueDate
    user_id
  }
}
```

```
{
  "data": {
    "createItem": {
      "id": "bf67bf63-eb41-43fe-b668-1a8d77f0db30",
      "title": "Get this done",
      "description": "This needs to be done in following way",
      "severity": "low",
      "isCompleted": false,
      "dueDate": null,
      "user_id": "2ed599ed-8781-463a-9b43-d5b44bca0e40"
    }
  }
}
```

1ddc8975-ef93-43ae-be5b-6d87afdf8422

4. Update Item

```
mutation Mutation($updateItemId: ID!, $userId: ID, $title: String, $description: String, $severity: severityType, $isCompleted: Boolean, $dueDate: Date) {
  updateItem(id: $updateItemId, user_id: $userId, title: $title, description: $description, severity: $severity, isCompleted: $isCompleted, dueDate: $dueDate)
}
```

```
{
  "data": {
    "updateItem": [
      1
    ]
  }
}
```

5. Delete Item

```
mutation Mutation($deleteItemId: ID!) {
  deleteItem(id: $deleteItemId)
}
```

```
{
  "data": {
    "deleteItem": 1
  }
}
```

6. Find All Users

```
query Query {
  findAllUsers {
    id
    username
    email
  }
}
```

```
{
  "data": {
    "findAllUsers": [
      {
        "id": "2ed599ed-8781-463a-9b43-d5b44bca0e40",
        "username": "Amogh",
        "email": "amogh@sprinto.com"
      },
      {
        "id": "759a8e61-c762-428a-b63f-e12d2f9dab85",
        "username": "Ravi",
        "email": "ravi@sprinto.com"
      },
      {
        "id": "815846ce-a116-4038-90b0-129d33da016a",
        "username": "Srijan",
        "email": "srijan@sprinto.com"
      },
      {
        "id": "934333bf-74f2-4b2d-9179-6c76f521c1a3",
        "username": "Pulkit",
        "email": "pulkit@sprinto.com"
      },
      {
        "id": "180ababc-e1e8-4abc-b34f-e567370300e8",
        "username": "Rahul",
        "email": "rahul@sprinto.com"
      }
    ]
  }
}
```

7. Find User by ID

```
query Query($findUserByIdId: ID!) {
  findUserById(id: $findUserByIdId) {
    id
    username
    email
  }
}
```

```
{
  "data": {
    "findUserById": {
      "id": "2ed599ed-8781-463a-9b43-d5b44bca0e40",
      "username": "Amogh",
      "email": "amogh@sprinto.com"
    }
  }
}
```

8. Find User Items

```
query Query($userId: ID!) {
  findUserItems(user_id: $userId) {
    id
    title
    description
    severity
    isCompleted
    dueDate
    user_id
  }
}
```

```
{
  "data": {
    "findUserItems": [
      {
        "id": "bf67bf63-eb41-43fe-b668-1a8d77f0db30",
        "title": "Get this done",
        "description": "This needs to be done in following way",
        "severity": "low",
        "isCompleted": false,
        "dueDate": null,
        "user_id": "2ed599ed-8781-463a-9b43-d5b44bca0e40"
      },
      {
        "id": "395db372-c755-4466-be94-d4df33367d6a",
        "title": "ToDo",
        "description": null,
        "severity": null,
        "isCompleted": false,
        "dueDate": null,
        "user_id": "2ed599ed-8781-463a-9b43-d5b44bca0e40"
      }
    ]
  }
}
```
