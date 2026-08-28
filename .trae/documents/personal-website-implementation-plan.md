# 个人网站实现计划

## 背景与目标

根据《个人网站技术文档.md》的要求，将现有 Next.js 项目改造为暗色系科技感个人单页网站。现有项目已具备 Next.js 14 + App Router + next-intl + Tailwind + Framer Motion + Lenis 的基础架构，但视觉风格、3D 背景、自定义光标、各 section 内容与文档要求存在差异。本计划按文档精确调整颜色、字体、动效、组件与文案。

## 当前状态

- 项目路径：`d:\桌面\新建文件夹`
- 已存在：Next.js 14.2.5、`app/[locale]` 路由、i18n（zh/en）、Lenis 平滑滚动、2D canvas 粒子背景、光标光晕、玻璃卡片、磁吸按钮、各 section 组件。
- 与文档不符：颜色/字体、3D 粒子球、自定义光标、Hero/About/Skills/Education/Contact 内容与结构、存在 Projects section 与 Preloader。

## 实现方案

### 1. 依赖调整

新增依赖：

- `three`
- `@react-three/fiber`
- `@react-three/drei`
- `@types/three`
- `lucide-react`

移除/不再使用：

- 移除 Preloader、Projects section、Theme 切换（文档仅要求暗色主题，保留代码最少改动）。

### 2. 设计令牌更新

更新 `app/globals.css` 与 `tailwind.config.ts`：

- 背景：`#070B14` → `#0D1424` 渐变（主背景 `#0A0F1E`）
- 卡片：`rgba(16, 26, 46, 0.7)` + `backdrop-filter: blur(10px)`
- 主文字：`#E6EDF3`
- 次级文字：`#8B9BB4`
- 绿色：`#2EE6A8`
- 橙色：`#FF6B35`
- 边框：`rgba(46, 230, 168, 0.2)` / `rgba(255, 107, 53, 0.2)`
- 字体：标题 `Space Grotesk`，正文 `Inter`（通过 `next/font`）

### 3. 布局与全局组件

- `app/[locale]/layout.tsx`：加载 Space Grotesk + Inter，移除 JetBrains Mono / Sora；保留 next-intl  provider；强制 `data-theme="dark"`。
- `app/[locale]/page.tsx`：移除 Preloader 与 Projects；调整 section 顺序为 Hero → About → Skills → Education → Contact → Footer。
- `components/ParticleBackground.tsx`：使用 `@react-three/fiber` + `three` 实现 3D 粒子球（1000–1500 点），颜色为深蓝、绿、橙点缀；整体缓慢旋转；鼠标移动时相机/粒子群轻微偏移；移动端隐藏，降级为静态渐变背景。
- `components/CustomCursor.tsx`：替换 `CursorGlow`，实现内圆点（绿色）+ 外环（半透明白），悬停交互元素时外环放大并变色；移动端禁用。
- `components/ScrollProgress.tsx`：顶部绿色到橙色渐变进度条（如尚未独立，则提取）。
- `components/Button.tsx`：统一按钮组件，主按钮绿色、次按钮描边，hover 发光上浮。
- `components/GlassCard.tsx`：基于现有 `GradientBorderCard` 调整为文档指定玻璃拟态样式（半透明深蓝背景 + 1px 发光边框）。

### 4. Section 改造

#### 4.1 Navbar

- 左侧：姓名首字母“甘”或“Gan Yu”纯文字
- 中间/右侧：关于、技能、教育、联系
- 最右侧：GitHub 外链图标
- 滚动后背景半透明模糊；移动端折叠为汉堡按钮，展开全屏玻璃菜单

#### 4.2 Hero

- 大标题“甘宇”（Space Grotesk）
- 身份：学生 · 青岛大学 · 人工智能教育专业
- 中英文精简介绍
- 主 CTA：绿色“联系我”（滚动至 #contact）
- 次 CTA：描边“查看 GitHub”（外链）
- 背景为 3D 粒子球

#### 4.3 About

- 中文 + 英文双段落
- 3 个数据卡片：青岛大学（大一新生）、人工智能教育（专业）、达摩院人工智能训练师（证书）
- 使用 GlassCard，hover 发光上浮

#### 4.4 Skills

- 图标网格展示：Python、机器学习基础、数据分析（Pandas/NumPy）、AI 教育工具、Office、基础前端（HTML/CSS/JS）、Git/GitHub
- 使用 `lucide-react` 图标或字母徽章
- hover 图标发光、上浮

#### 4.5 Education

- 时间轴形式
- 2026.09 - 至今：青岛大学，人工智能教育专业（在读）
- 2025：阿里巴巴达摩院人工智能训练师证书（自主考取）
- 滚动进入时线条生长、节点弹入

#### 4.6 Contact / Footer

- 大号绿色 CTA“联系我”
- 邮箱：showboat_55@qq.com（主）、2874970163@qq.com（备用）
- GitHub 图标链接
- 版权信息
- 删除联系表单

### 5. 国际化文案更新

更新 `messages/zh.json` 与 `messages/en.json`：

- 移除 `projects` 命名空间
- 调整 `hero`、`about`、`skills`、`education`、`contact` 文案与文档一致
- 增加备用邮箱字段

### 6. 性能与响应式

- 移动端隐藏 3D Canvas，使用静态渐变 + CSS 光斑
- 自定义光标在移动端禁用
- 滚动动画仅使用 transform/opacity
- 图片（如有）使用 next/image 并提供 webp
- 3D Canvas 帧率控制，低端设备降级

## 关键文件清单

- `package.json`
- `app/globals.css`
- `tailwind.config.ts`
- `app/[locale]/layout.tsx`
- `app/[locale]/page.tsx`
- `components/ParticleBackground.tsx`（重写为 Three.js 3D 球）
- `components/CustomCursor.tsx`（替换 CursorGlow）
- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/About.tsx`
- `components/Skills.tsx`
- `components/Education.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`
- `components/GlassCard.tsx`
- `components/Button.tsx`
- `components/ScrollProgress.tsx`
- `messages/zh.json`
- `messages/en.json`
- 删除：`components/Preloader.tsx`、`components/Projects.tsx`、`components/CursorGlow.tsx`、`components/MagneticButton.tsx`（功能并入 Button）

## 验证方式

1. 安装依赖：`npm install`（或 `pnpm install`）
2. 本地开发：`npm run dev`
3. 浏览器访问 `http://localhost:3000/zh`
4. 检查清单：
   - 深蓝背景 + 绿色按钮 + 橙色强调文字
   - Lenis 平滑滚动生效
   - 各 section 滚动进入动画正常
   - 3D 粒子球在桌面端可见并缓慢旋转，移动端隐藏
   - 自定义光标在桌面端跟随并悬停放大变色
   - 顶部进度条随滚动更新
   - 导航栏滚动后背景变化，移动端菜单可用
   - 文案与文档一致（姓名、学校、专业、证书、邮箱）
   - 响应式布局在常见宽度下正常
5. 构建验证：`npm run build` 无错误。
