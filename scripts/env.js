const program = require('commander');
const fs = require('fs');

program
  .usage('[options]')
  .description('配置环境修改脚本')
  .option('-e, --Environment [String]', 'production | test | staging')
  .parse(process.argv);

if (!program.Environment || !/production|staging|/.test(program.Environment)) {
  return new Error('缺失环境参数[-e]值为 production | test | staging');
}

const ENV = program.Environment;

const envPath = './src/utils/index.js';
const envFile = fs.readFileSync(envPath, 'utf8');
const envReg = /(ENV)(.+'|"\s*'|")(.+)('|"\s*;)/g;
const newEnvFile = envFile.replace(envReg, () => {
  console.log(`ENV = '${ENV}'`);
  return `ENV = '${ENV}'`;
});
fs.writeFileSync(envPath, newEnvFile, 'utf8');
return true;
