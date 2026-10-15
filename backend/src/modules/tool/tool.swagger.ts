/**
 * @swagger
 * components:
 *   schemas:
 *     Tool:   
 *       type: object 
 *       properties:
 *         id: 
 *           type: number
 *           description: Auto-generated id 
 *         name: 
 *           type: string
 *           description: Tool name
 
 *       required:
 *         - name
 *     NewTool:   
 *       type: object 
 *       properties:
 *         name: 
 *           type: string
 *           description: Tool name
 *       required:
 *         - name 
 *     ResourceNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: Resource not found   
 *   parameters:
 *     toolId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: Tool id  
 */
 
 /**
 * @swagger
 * tags:
 *   name: Tool
 *   description: Tool endpoint
 */

 /**
 * @swagger
 * /tool/{id}:
 *  get:
 *      summary: Return a tool
 *      tags: [Tool]
 *      parameters:
 *        - $ref: '#/components/parameters/toolId'
 *      responses:
 *        200:
 *          description: Tool was found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Tool'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */
 
 /**
 * @swagger
 * /tool:
 *  get:
 *      summary: Return the tools list
 *      tags: [Tool]
 *      responses:
 *        200:
 *          description: List of tools
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Tool'  
 */

 /**
 * @swagger
 * /tool:
 *  post:
 *      summary: Create a new tool
 *      tags: [Tool]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewTool'
 *      responses:
 *        200:
 *          description: Tool succesfully created
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/Tool'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /tool/{id}:
 *  put:
 *      summary: Update a tool
 *      tags: [Tool]
 *      parameters:
 *        - $ref: '#/components/parameters/toolId'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewTool'
 *      responses:
 *        200:
 *          description: Tool succesfully updated
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/Tool'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /tool/{id}:
 *  delete:
 *      summary: Delete a tool
 *      tags: [Tool]
 *      parameters:
 *        - $ref: '#/components/parameters/toolId'
 *      responses:
 *        200:
 *          description: Tool was deleted
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Tool'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */