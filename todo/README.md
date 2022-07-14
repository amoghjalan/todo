# Backend of ToDo Application

## Utilities

1. NodeJS
2. PostgreSQL
3. Sequelize

## Models

### Item

| Field                | Properties                  |
| -------------------- | --------------------------- |
| ID                   | String, Unique, NOT NULL    |
| title                | String, NOT NULL            |
| description          | String                      |
| dueDate              | Date,Time                   |
| severity             | String                      |
| isCompleted          | Boolean (Default: False)    |
| createdAt            | Date/TimeStamp              |
| assignedTo (Pending) | Object (Person) / Person id |

### Person (Pending)

| Field | Properties               |
| ----- | ------------------------ |
| ID    | String, Unique, NOT NULL |
| name  | String                   |
| email | String, Unique, NOT NULL |
| items | Array                    |
