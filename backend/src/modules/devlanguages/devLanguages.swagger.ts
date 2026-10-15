/**
 * @swagger
 * components:
 *   schemas:
 *     DevLanguages:   
 *       type: object 
 *       properties:
 *         id: 
 *           type: number
 *           description: Auto-generated id 
 *         name: 
 *           type: string
 *           description: Name DevLangauge 
 *       required:
 *         - name
 *     NewDevLanguage:   
 *       type: object 
 *       properties:
 *         name: 
 *           type: string
 *           description: DevLanguageName
 *       required:
 *         - name
 *     ResourceNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: Resource not found   
 *   parameters:
 *     DevLanguageId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: DevLanguage id  
 */
 
 /**
 * @swagger
 * tags:
 *   name: DevLanguage
 *   description: DevLanguage endpoint
 */

 /**
 * @swagger
 * /DevLanguages/{id}:
 *  get:
 *      summary: Return a DevLanguage
 *      tags: [DevLanguage]
 *      parameters:
 *        - $ref: '#/components/parameters/DevLanguageId'
 *      responses:
 *        200:
 *          description: DevLanguage was found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/DevLanguage'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */
 
 /**
 * @swagger
 * /DevLanguages:
 *  get:
 *      summary: Return the DevLanguages list
 *      tags: [DevLanguages]
 *      responses:
 *        200:
 *          description: List of DevLanguages
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/DevLanguages'  
 */

 /**
 * @swagger
 * /DevLanguages:
 *  post:
 *      summary: Create a new DevLanguage
 *      tags: [DevLanguage]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewDevLanguage'
 *      responses:
 *        200:
 *          description: DevLanguage successfully created
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/DevLanguage'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /DevLanguages/{id}:
 *  put:
 *      summary: Update a DevLanguage
 *      tags: [DevLanguage]
 *      parameters:
 *        - $ref: '#/components/parameters/DevLanguageId'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewDevLanguage'
 *      responses:
 *        200:
 *          description: DevLanguage successfully updated  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /DevLanguages/{id}:
 *  delete:
 *      summary: Delete a DevLanguage
 *      tags: [DevLanguage]
 *      parameters:
 *        - $ref: '#/components/parameters/DevLanguageId'
 *      responses:
 *        200:
 *          description: DevLangauge was deleted
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */