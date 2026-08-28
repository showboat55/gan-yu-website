# 甘宇个人简介网站 — 执行计划（v2）

## Context（背景）

用户希望基于 `d:\桌面\新建文件夹\个人简介.md` 及其整理版 `个人简介_整理.md` 生成一个可直接运行的个人简介网站。该目录下已存在一个初始化好的 Next.js 14 项目骨架（`package.json`、`next.config.mjs`、`tailwind.config.ts`、`tsconfig.json`），但尚未实现页面、组件、样式与多语言内容。本计划的目标是按 spec 完成全部开发，交付可运行的单页网站。

- **项目位置**：`d:\桌面\新建文件夹`
- **包管理器**：pnpm
- **交付范围**：完整实现 spec 中所有 15 个组件、主题切换、中/英多语言、平滑滚动、Canvas 粒子背景与响应式布局

## 推荐技术栈

沿用已初始化项目中的配置：

- Next.js 14（App Router） + TypeScript
- Tailwind CSS 3.4 + CSS Variables（主题切换）
- Framer Motion（动画）+ Lenis（平滑滚动）
- next-intl（中/英多语言，默认中文）
- next/font（Google Fonts：Sora / Inter / JetBrains Mono）
- 原生 Canvas（粒子背景）

## 实施步骤

### Step 1：补齐项目基础设施

在现有配置文件基础上，创建缺失的核心文件：

- `i18n.ts`：next-intl 配置，指定 `locales: ['zh', 'en']`，默认 `zh`
- `messages/zh.json` + `messages/en.json`：集中维护所有双语文案（导航、Hero、About、Skills、Projects、Education、Contact、Footer）
- `app/globals.css`：定义暗色 / 亮色两套 CSS 变量（来自 spec 2.1 色彩表），通过 `data-theme="dark"` / `data-theme="light"` 切换，并加入全局过渡动画
- `app/[locale]/layout.tsx`：根布局，挂载 ThemeProvider、next-intl Provider、Lenis 平滑滚动、Google 字体加载、SEO meta / OG / hreflang
- `app/[locale]/page.tsx`：单页入口，按顺序组合所有 section 组件
- `lib/theme.ts` / `components/ThemeProvider.tsx`：主题 context + provider，`localStorage` 持久化，首次渲染前注入主题（避免闪烁）
- `lib/lenis.ts`：Lenis 初始化与清理逻辑

### Step 2：通用/可复用组件

- `components/SectionHeading.tsx`：序号 + 标题组件，带 `whileInView` 显现动画
- `components/GradientBorderCard.tsx`：1px 渐变边框 + 内发光卡片（spec 2.3）
- `components/MagneticButton.tsx`：磁吸按钮 + 悬停光效扫过 + 箭头位移
- `components/LanguageSwitcher.tsx`：中/EN 切换按钮
- `components/ThemeSwitcher.tsx`：太阳/月亮切换按钮
- `components/CursorGlow.tsx`：鼠标光晕跟随（桌面端启用，触屏禁用）
- `components/ParticleBackground.tsx`：Canvas 粒子系统（约 60 个粒子），随主题变色，页面不可见时暂停，鼠标轻微互动（桌面端）

### Step 3：页面 Section 组件（按 spec 第 3 节）

- `components/Preloader.tsx`：首屏加载动画，"GY" SVG 描边绘制 + 进度数字，完成后淡出揭示主页
- `components/Navbar.tsx`：固定顶部导航，滚动后切换为玻璃态模糊；左侧姓名链接；中间/右侧导航链接；右侧语言/主题切换 + 绿色呼吸状态灯；移动端汉堡菜单全屏展开
- `components/Hero.tsx`：左侧标签、超大双语标题、一句话介绍、双 CTA 按钮；右侧抽象科技感光晕图形 + 浮动技术徽章；底部滚动指示器
- `components/About.tsx`：序号 01 + 标题；左侧高亮数字卡片；右侧中英文简介；当前状态卡片（绿色呼吸灯）；达摩院人工智能训练师证书卡片
- `components/Skills.tsx`：网格布局展示技术栈，分类为编程语言 / 框架工具 / 人工智能 / 其他；每个卡片含图标、名称、渐变熟练度条；悬停发光上浮
- `components/Projects.tsx`：纵向交错卡片布局；项目卡片含占位缩略图、标题、描述、技术标签、链接；滚动时从两侧滑入；悬停放大缩略图并显示"查看详情"
- `components/Education.tsx`：垂直时间轴，渐变线条；青岛大学节点 + 达摩院证书节点，圆点橙/绿交替
- `components/Contact.tsx`：大标题 LET'S WORK TOGETHER / 一起合作；邮箱 showboat_55@qq.com；GitHub showboat55；可选联系表单；底部版权
- `components/Footer.tsx`：简约页脚，社交图标，返回顶部按钮

### Step 4：动效与交互整合

- 全局 Lenis 平滑滚动
- 顶部橙色渐变滚动进度条
- Framer Motion `whileInView`：区块标题逐行显现、卡片从模糊/位移进入清晰、clip-path 展开
- 按钮/链接/卡片/输入框微交互（spec 5.3）
- 粒子背景与主题色联动

### Step 5：响应式、性能与 SEO

- Tailwind 断点：`max-w-[1200px]` 桌面居中；移动端单列；技能网格移动端 2 列；平板 2 列
- 触屏设备关闭 `CursorGlow` 与鼠标粒子交互
- 图片使用 `next/image` 或懒加载占位
- 字体使用 `next/font` 加载
- 完整 meta、OG 标签、hreflang

## 关键文件清单

```text
d:\桌面\新建文件夹\
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── i18n.ts
├── messages/
│   ├── zh.json
│   └── en.json
├── lib/
│   ├── theme.ts
│   └── lenis.ts
├── app/
│   ├── globals.css
│   └── [locale]/
│       ├── layout.tsx
│       └── page.tsx
└── components/
    ├── ThemeProvider.tsx
    ├── Preloader.tsx
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Skills.tsx
    ├── Projects.tsx
    ├── Education.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    ├── ParticleBackground.tsx
    ├── CursorGlow.tsx
    ├── SectionHeading.tsx
    ├── GradientBorderCard.tsx
    ├── MagneticButton.tsx
    ├── LanguageSwitcher.tsx
    └── ThemeSwitcher.tsx
```

## 验证方式

1. `cd "d:\桌面\新建文件夹"` 后运行 `pnpm install`
2. `pnpm dev` 启动开发服务器
3. 浏览器访问 http://localhost:3000/zh 验证：
   - Preloader → Hero → About → Skills → Projects → Education → Contact → Footer 依次呈现
   - 暗色/亮色切换正常且刷新后保持
   - 中文/English 切换正常且刷新后保持
   - 平滑滚动、滚动触发动画、粒子背景、磁吸按钮悬停光效正常
   - 移动端响应式布局正确
4. `pnpm build` 通过生产构建

## 备注

- Skills 具体技能列表、Projects 具体项目、教育时间/GPA/课程亮点在 spec 中标注为"待补充"，将使用占位数据并加 TODO 注释，便于后续替换。
- Hero 右侧视觉严格遵循 spec 2.3：不使用姓名缩写作为装饰，使用通用科技感光晕图形。
