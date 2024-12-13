# MicroserviceArchitecture

A Microservice startup build with ExpressJs utilizing typescript

## Architecture

```ts
microservice/
├── src/
│   ├── config/
│   │   └── index.ts             # Configuration management
│   ├── controllers/
│   │   └── user.controller.ts   # Controller for User management
│   ├── database/
│   │   ├── connection.ts        # Database connection setup
│   │   └── models/
│   │       └── user.model.ts    # Sequelize model for User
│   ├── middlewares/
│   │   └── error.middleware.ts  # Global error handling
│   ├── routes/
│   │   └── user.route.ts        # Routes for User operations
│   ├── services/
│   │   └── user.service.ts      # Business logic for User
│   ├── utils/
│   │   └── response.ts          # Standardized response structure
│   ├── app.ts                   # Main app setup
│   └── server.ts                # Server entry point
├── .env                         # Environment variables
├── .gitignore                   # Ignore files/folders
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Documentation
```

### Setup

1. Install Dependencies

```ts
  npm install express mysql2 sequelize
  npm install --save-dev sequelize-cli @types/sequelize
```

2. Configure Environment Variables (.env)

```ts
PORT = 3000;
DB_HOST = localhost;
DB_USER = root;
DB_PASSWORD = password;
DB_NAME = microservice;
DB_PORT = 3306;
```
