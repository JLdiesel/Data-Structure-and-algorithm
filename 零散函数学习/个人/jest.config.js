const path = require('path')
 
module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: ['vue', 'js', 'json'],
  /* 
  moduleNameMapper 类似于webpack的alias。当webpack中使用了alias，项目中用的都是别名，
  但是jest运行单元测试时不经过webpack，怎么找到别名对应的模块，就需要用这个属性进行配置
  */
  moduleNameMapper: {
    '@/(.*)$': '/src/$1',
    'static/(.*)$': '/static/$1',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  /* 
  transform 类似于webpack的loader，另外如果项目中有不想测试的模块可以转换掉。
  比如项目中会这样引图片，但是图片是不需要被测试的，就可以这样转换掉。 
  */
  transform: {
    '^.+\\.js$': '/node_modules/babel-jest',
    '.*\\.(vue)$': '/node_modules/vue-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '/test/unit/fileTransformer.js',
  },
  setupFiles: ['/test/unit/setup'],
  coverageDirectory: '/test/unit/coverage',
  collectCoverage: true,
  // testMatch: ['/**/*/(batchCreate.)+(spec|test).[jt]s?(x)'],
  // coverageReporters: ['text'],
  collectCoverageFrom: [
    '/src/**/*/*.{vue, js}',
    '!/src/main.js',
    '!/src/router/index.js',
    '!**/node_modules/**',
  ],
}



 
// 另外如果一个文件在上面被匹配到则不会继续向下查找。
// （3）setupFiles在所有的测试用例执行之前执行，一般项目中main.js文件中使用的插件会在这里面绑定。
// （4）coverageDirectory单元测试覆盖率统计的数据保存的目录。
// （5） collectCoverage是否统计单测覆盖率，如果写了个测试用例，想测试一下是否可以通过时可以先将这个值设为false。
// （6） testMatch 单元测试文件匹配规则
//     (default: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ])
//     （7） coverageReporters 单元测试报告格式，不需要单独配置，开发时可根据需要定制
//     Default: ["json", "lcov", "text", "clover"]
//     test: 只在控制台输出覆盖率
//  （8） collectCoverageFrom 哪些文件计入单元测试覆盖率统计
 
 
//  最后，在package.json中指定运行jest时使用的配置文件
 
//  "scripts": {
//      "test": "jest --no-cache --config test/unit/jest.conf.js",
//    },


/* 
配置babel
{
    "env": {
      "test": {
        "presets": [["env", { "targets": { "node": "current" } }]]
      }
    }
  }
   */
