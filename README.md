# 甘宇个人网站

基于 Next.js 14 + TypeScript + Tailwind CSS 构建的暗色系科技感个人主页。

## 在线预览

- 开发环境：`npm run dev` 后访问 http://localhost:3000
- 中文页面：http://localhost:3000/zh
- 英文页面：http://localhost:3000/en

## 技术栈

- **框架**：Next.js 14 (App Router)
- **语言**：TypeScript
- **样式**：Tailwind CSS
- **动画**：Framer Motion
- **平滑滚动**：Lenis
- **3D 背景**：Three.js + @react-three/fiber
- **图标**：lucide-react
- **国际化**：next-intl

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 构建

```bash
npm run build
```

构建输出目录为 `dist/`，可直接部署到 Netlify 等静态托管平台。

## 部署到 Netlify

### 方式一：拖拽部署（最快）

1. 执行 `npm run build` 生成 `dist/` 目录
2. 打开 https://app.netlify.com/drop
3. 将 `dist/` 文件夹拖入页面
4. 获得 `xxx.netlify.app` 临时域名，即可访问

### 方式二：GitHub 自动部署（推荐）

1. 将本项目推送到 GitHub 仓库
2. 登录 https://app.netlify.com/
3. 选择 **Add new site → Import an existing project**
4. 选择对应的 GitHub 仓库
5. 配置：
   - Build command: `npm run build`
   - Publish directory: `dist`
6. 点击 Deploy

每次推送到 GitHub 主分支，Netlify 会自动重新构建并部署。

### 方式三：GitHub Actions 自动部署（已配置）

本项目已包含 `.github/workflows/deploy.yml`，推送到 `main` 分支时会自动构建并部署到 Netlify。

#### 1. 获取 Netlify Auth Token

访问 https://app.netlify.com/user/applications/personal

点击 **New access token**：
- **Name**: `GitHub Actions Deploy`
- 点击 **Generate token**
- **立即复制并保存**，关闭页面后无法再次查看

这个就是 `NETLIFY_AUTH_TOKEN`。

#### 2. 创建 Netlify 站点

**方式 A：通过 GitHub 导入（推荐）**

1. 登录 https://app.netlify.com/
2. 点击 **Add new site → Import an existing project**
3. 选择 GitHub 仓库 `gan-yu/gan-yu-website`
4. 配置：
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. 点击 **Deploy site**

**方式 B：手动创建空站点**

1. 登录 https://app.netlify.com/
2. 点击 **Add new site → Add manually**
3. 输入 Site name，例如 `gan-yu-website`
4. 点击 **Add site**

#### 3. 获取 Netlify Site ID

1. 进入站点后台
2. 点击 **Site configuration**
3. 在 **Site details** 下找到 **Site ID**
4. 复制该字符串，这个就是 `NETLIFY_SITE_ID`

#### 4. 在 GitHub 添加 Secrets

推送代码后，打开仓库 Secrets 页面：

`https://github.com/gan-yu/gan-yu-website/settings/secrets/actions`

点击 **New repository secret**，分别添加：

| Name | Value |
|------|-------|
| `NETLIFY_AUTH_TOKEN` | 步骤 1 复制的 token |
| `NETLIFY_SITE_ID` | 步骤 3 复制的 site ID |

#### 5. 触发自动部署

1. 推送代码到 `main` 分支：
   ```bash
   git push origin main
   ```
2. 打开仓库 **Actions** 页面
3. 确认 `Deploy to Netlify` 工作流正在运行
4. 部署成功后，访问 Netlify 生成的域名即可

工作流文件位置：[.github/workflows/deploy.yml](.github/workflows/deploy.yml)

## 个性化修改

网站主要内容集中在 `messages/zh.json` 和 `messages/en.json` 中，修改对应字段即可更新：

- 姓名、身份介绍
- 关于我中英文内容
- 技能列表
- 教育与证书信息
- 邮箱、GitHub
- 备案号（`footer.icp`）

## 备案说明

当前页脚已预留 ICP 备案号位置，默认显示：

```
京ICP备XXXXXXXX号-1（备案号待填写）
```

完成国内域名和服务器备案后，将 `messages/zh.json` 和 `messages/en.json` 中的 `footer.icp` 替换为真实备案号即可。

## 项目结构

```
app/
  [locale]/
    layout.tsx    # 根布局，加载字体
    page.tsx      # 首页，组合各 section
  globals.css     # 全局样式与 CSS 变量
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Skills.tsx
  Education.tsx
  Contact.tsx
  Footer.tsx
  ParticleBackground.tsx   # 3D 粒子球背景
  CustomCursor.tsx         # 自定义光标
  ScrollProgress.tsx       # 顶部滚动进度条
  Button.tsx               # 通用按钮
  GlassCard.tsx            # 玻璃拟态卡片
messages/
  zh.json         # 中文文案
  en.json         # 英文文案
public/           # 静态资源
next.config.mjs   # Next.js 配置
netlify.toml      # Netlify 部署配置
```

## 许可证

保留所有权利。
