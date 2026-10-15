/**
 * @swagger
 * components:
 *   schemas:
 *     SoftSkill:   
 *       type: object 
 *       properties:
 *         id: 
 *           type: number
 *           description: Auto-generated id 
 *         name: 
 *           type: string
 *           description: Name Skill 
 *       required:
 *         - name
 *     NewSoftSkill:   
 *       type: object 
 *       properties:
 *         name: 
 *           type: string
 *           description: SoftSkillname
 *       required:
 *         - name
 *     ResourceNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: Resource not found   
 *   parameters:
 *     softSkillId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: SoftSkill id  
 */
 
 /**
 * @swagger
 * tags:
 *   name: SoftSkill
 *   description: SoftSkill endpoint
 */

 /**
 * @swagger
 * /softskill/{id}:
 *  get:
 *      summary: Return a softskill
 *      tags: [SoftSkill]
 *      parameters:
 *        - $ref: '#/components/parameters/softSkillId'
 *      responses:
 *        200:
 *          description: SoftSkill was found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/SoftSkill'
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */
 
 /**
 * @swagger
 * /softskill:
 *  get:
 *      summary: Return the softskills list
 *      tags: [SoftSkill]
 *      responses:
 *        200:
 *          description: List of softskills
 *          content:
 *            application/json: 
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/SoftSkill'  
 */

 /**
 * @swagger
 * /softskill:
 *  post:
 *      summary: Create a new softskill
 *      tags: [SoftSkill]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewSoftSkill'
 *      responses:
 *        200:
 *          description: SoftSkill successfully created
 *          content:
 *            application/json: 
 *              schema:
 *                $ref: '#/components/schemas/SoftSkill'  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /softskill/{id}:
 *  put:
 *      summary: Update a softskill
 *      tags: [SoftSkill]
 *      parameters:
 *        - $ref: '#/components/parameters/softSkillId'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json: 
 *              schema:
 *                $ref: '#/components/schemas/NewSoftSkill'
 *      responses:
 *        200:
 *          description: SoftSkill successfully updated  
 *        500: 
 *          description: Server error
 *        404: 
 *          description: Resource could not be found
 */

 /**
 * @swagger
 * /softskill/{id}:
 *  delete:
 *      summary: Delete a softskill
 *      tags: [SoftSkill]
 *      parameters:
 *        - $ref: '#/components/parameters/softSkillId'
 *      responses:
 *        200:
 *          description: SoftSkill was deleted
 *        404: 
 *          description: Resource could not be found
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResourceNotFound'  
 * */