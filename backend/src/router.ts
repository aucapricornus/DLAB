import { Router } from 'express';
import authRouter from './modules/auth/auth.routes';
import userRouter from './modules/user/user.routes';
import statusRouter from './modules/status/status.routes';
import roleRouter from './modules/role/role.routes';
import softSkillRouter from './modules/softskill/softskill.routes';
import toolRouter from './modules/tool/tool.routes'
import DevLanguages  from './modules/devlanguages/devLanguages.routes';

const apiRouter = Router();

// modules
apiRouter.use('/auth', authRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/Status', statusRouter);
apiRouter.use('/role', roleRouter);
apiRouter.use('/softskill', softSkillRouter);
apiRouter.use('/DevLanguages', DevLanguages);
apiRouter.use('/tool', toolRouter);


export default apiRouter;
