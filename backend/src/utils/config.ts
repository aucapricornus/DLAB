interface SystemConfig {
  roles: { ADMIN: string; USER: string };
  privateKey: {
    user: string;
    resetPassword: string;
  };
  domain: string;
}

const config: SystemConfig = {
  roles: {
    ADMIN: 'admin',
    USER: 'user',
  },
  privateKey: {
    user: 'algo0.1',
    resetPassword: 'algo0.2',
  },
  domain: 'dominioDeLaWeb',
};

export default config;
