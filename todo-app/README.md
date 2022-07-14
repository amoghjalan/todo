APIs

1. Insert 1 Item

```
mutation MyMutation {
  insert_Items_one(object: {title: "", severity: "", description: ""}) {
    updatedAt
    title
    severity
    isCompleted
    id
    dueDate
    description
    createdAt
  }
}
```

2. Get All Items

```
query MyQuery {
  Items {
    description
    dueDate
    id
    isCompleted
    severity
    title
  }
}
```

3. Delete 1 Item by ID

```
mutation MyMutation {
  delete_Items_by_pk(id: )
}
```

4. Update 1 Item by ID

```
mutation MyMutation {
  update_Items_by_pk(pk_columns: {id: }, _set: {description: "", dueDate: "", isCompleted: , severity: "", title: ""}) {
    id
    title
  }
}
```

5. Get Items by Filter

```
query MyQuery {
  Items(where: {severity: {_eq: ""}, title: {_ilike: ""}, dueDate: {_eq: ""}}) {
    title
    severity
    isCompleted
    id
    dueDate
    description
  }
}
```
