/**
 * @swagger
 * components:
 *   schemas:
 *     UserCredentials:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: User email
 *         password:
 *           type: string
 *           description: User password

 *   parameters:
 *     auth-token:
 *       in: header
 *       name: 'auth-token'
 *       required: true
 *       schema:
 *         type: string
 * 
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints
 */


/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserCredentials'
 *     responses:
 *       200:
 *         description: Successful login
 *       401:
 *         description :  Unauthorized
 *       500:
 *         description : Server error
 */

/**
 * @swagger
 * /auth/reset-password:
 *   post:
 *     summary: Send reset password link
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reset password link sent successfully
 *       500:
 *          description: Server error
*/
/**
 * @swagger
 * /auth/reset-password/{token}:
 *   put:
 *     summary: Reset password
 *     tags: [Auth]
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: Reset password token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 description: New password
 *     responses:
 *       200:
 *         description: Password reset successful
 *       500:
 *          description: Server error
*/
/**
 * @swagger
 * /auth/change-password:
 *   put:
 *     summary: Change password
 *     tags: [Auth]
 *     parameters:
 *       - $ref: '#/components/parameters/auth-token'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 description: Current password
 *               newPassword:
 *                 type: string
 *                 description: New password
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       401:
 *         description :  Unauthorized
 *       500:
 *          description: Server error
*/