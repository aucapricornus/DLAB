export const swaggerDocument = {
  definition:{
    openapi: "3.0.0",
    info: {
      version: '1.0.0',
      title: 'Devsafio API Document',
      description: 'Endpoints documentation'
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: 'Local server'
      }
    ],
  },
  apis: ["./src/modules/*/*.swagger.ts"]
}