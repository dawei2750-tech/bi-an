# 数字资产交易所项目（全栈整理版）

> 前端 uni-app + Vue 2 + uView UI | 后端 Laravel 5.5 + PHP | MySQL 数据库
> 本文档仅为文件结构整理说明，不修改任何业务代码

## 项目结构

```
exchange-project/
├── frontend/          # 前端（uni-app + Vue 2.7 + uView UI）
│   ├── src/           # 源码目录
│   │   ├── pages/     # 业务页面（18模块，81页面）
│   │   ├── components/# 业务组件（9个）
│   │   ├── common/    # 公共逻辑（API/拦截器/9种语言包/工具）
│   │   ├── store/     # Vuex 状态管理
│   │   ├── js_sdk/    # 第三方 SDK（Socket.IO）
│   │   ├── static/    # 静态资源
│   │   ├── uview-ui/  # uView UI 组件库（90个组件）
│   │   ├── App.vue    # 应用入口
│   │   ├── main.js    # 入口初始化
│   │   ├── manifest.json # 应用标识配置
│   │   ├── pages.json # 页面路由配置
│   │   └── uni.scss   # 全局 SCSS 变量
│   ├── babel.config.js    # Babel 配置（含可选链/空值合并插件）
│   ├── package.json       # 前端依赖（已补全缺失依赖，固定版本）
│   ├── postcss.config.js  # PostCSS 配置（autoprefixer 9.x）
│   ├── vue.config.js      # Vue CLI 配置（transpileDependencies）
│   ├── template.h5.html   # H5 入口模板
│   ├── .nvmrc             # Node 版本指定（16）
│   └── .gitignore         # Git 忽略规则
│
├── backend/           # 后端（Laravel 5.5 + PHP >=7.0）
│   ├── app/           # 应用核心代码（Controllers/Models/Middleware）
│   │   ├── Api/       # 移动端 API 控制器
│   │   ├── Admin/     # 运营后台控制器（50+）
│   │   ├── Agent/     # 代理商控制器
│   │   ├── Manages/   # 新管理端控制器
│   │   └── Auth/      # 认证控制器
│   ├── bootstrap/     # 框架启动文件
│   ├── config/        # 配置文件
│   ├── database/      # 数据库迁移和种子
│   ├── public/        # 公共资源（后台模板/静态资源/上传目录）
│   ├── resources/     # 视图和语言包
│   ├── routes/        # 路由定义
│   ├── common/        # 公共函数库
│   ├── vendor/        # PHP 依赖
│   ├── tests/         # 测试
│   ├── artisan        # CLI 入口
│   ├── server.php     # 开发服务器入口
│   ├── composer.json  # PHP 依赖配置
│   ├── composer.lock  # PHP 依赖锁定
│   ├── phpunit.xml    # 测试配置
│   ├── .env.example   # 环境配置示例（生产需复制为 .env 并修改）
│   ├── start.sh       # 启动脚本
│   └── .htaccess      # Apache 重写规则
│
├── database/          # 数据库
│   └── exchange.sql   # 完整数据库表结构（原 test123.sql，120KB）
│
├── docs/              # 文档
│   ├── 交易所项目架构规划文档.md  # 架构规划与缺失统计
│   ├── lever.md       # 杠杆交易说明
│   └── wallet.md      # 钱包说明
│
├── _to_clean/         # 需要清理的文件（不纳入项目）
│   ├── temp_files/           # 临时文件（.DS_Store 等系统文件）
│   ├── deprecated/           # 前端弃用文件（vercel.json、DEPLOY.md、public/）
│   └── backend_deprecated/   # 后端弃用文件
│       ├── Laravel5/         # Laravel 5 备份（重复）
│       ├── .env              # 含敏感信息的环境配置（用 .env.example 代替）
│       ├── .swo .swp         # vim 临时文件
│       ├── execute_currency.log # 日志文件
│       ├── haoshi.txt        # 测试文件
│       ├── _ide_helper.php   # IDE 辅助文件
│       ├── composer          # composer.phar（不需要）
│       └── package.json      # 前端包配置（后端不需要）
│
└── README.md          # 本说明文件
```

## 文件统计

| 类别 | 数量 |
|------|------|
| 前端页面 | 81 个 .vue |
| 前端业务组件 | 9 个 |
| uView UI 组件 | 90 个 |
| 前端语言包 | 9 种 |
| 后端控制器 | 70+（Api/Admin/Agent/Manages/Auth） |
| 数据库表 | 完整结构（exchange.sql） |
| 文档 | 3 份 |

## 已做的整理

### 前端（frontend/）
- 保留全部前端源码和构建配置
- 更新 package.json：补全缺失依赖（@dcloudio 配套插件、cache-loader、html-webpack-plugin、regenerator-runtime 等），固定 PostCSS 7.x、autoprefixer 9.x、postcss-loader 3.x 版本，Vue 升级到 2.7.14
- 更新 babel.config.js：添加可选链和空值合并运算符插件
- 更新 postcss.config.js：添加 autoprefixer 配置
- 更新 vue.config.js：添加 transpileDependencies 和 css loaderOptions
- build 脚本添加 UNI_INPUT_DIR=src 环境变量
- 无用文件移至 _to_clean/deprecated/

### 后端（backend/）
- 保留全部核心代码（app/config/routes/database/resources/public/common/vendor）
- 移除重复的 Laravel5/ 备份目录
- 移除含敏感信息的 .env（保留 .env.example）
- 移除 vim 临时文件（.swo/.swp）、日志文件、测试文件
- 移除 composer.phar、后端不需要的 package.json
- 无用文件移至 _to_clean/backend_deprecated/

### 数据库（database/）
- 提取原仓库 test123.sql，重命名为 exchange.sql
- 包含完整数据库表结构

### 文档（docs/）
- 架构规划文档
- 杠杆交易说明（lever.md）
- 钱包说明（wallet.md）

## 部署前注意事项

1. **后端 .env 配置**：复制 `backend/.env.example` 为 `backend/.env`，修改数据库、Redis、区块链节点等配置
2. **数据库导入**：将 `database/exchange.sql` 导入 MySQL
3. **PHP 依赖**：后端 vendor/ 已包含，但如遇问题可运行 `composer install`
4. **前端依赖**：删除 `frontend/node_modules`（如有），运行 `npm install --legacy-peer-deps`
5. **前端构建**：`cd frontend && npm run build:h5`，Node 版本必须 16.x
6. **生产安全**：更换所有默认密码、密钥、API 密钥；配置 HTTPS；启用防火墙

## 下一步

- [ ] 后端 .env 配置
- [ ] 数据库导入验证
- [ ] 前端构建验证
- [ ] 后端 API 联调
- [ ] 安全审计（默认密码、SQL注入、XSS等）
- [ ] 区块链节点对接（ETH/TRON/BSC）
- [ ] 冷热钱包架构
- [ ] 提现风控系统

---

*文件整理时间：2026-08-29*
*整理原则：仅移动文件和更新配置，不修改任何业务代码*
