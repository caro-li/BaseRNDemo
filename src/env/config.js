/**
 * Date: 2022/2/7 下午3:11
 * Author: caro
 * Description: 环境变量
 * */
const envConfig = {
  test: {
    value: 'test',
    host: 'http://127.0.0.1:8080',
  },
  staging: {
    value: 'staging',
    host: 'http://test.carolee.top',
  },
  production: {
    value: 'production',
    host: 'http://prod.carolee.top',
  },
};

export default envConfig;
