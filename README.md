# 泉风站最小可运行分发包

这个目录已经是独立分发包，拿出去后只需要安装依赖即可单独运行。

## 本地启动
1. 把这个目录放到任意位置
2. 在这个目录内打开终端
3. 安装依赖：`npm install`
4. 启动开发环境：`npm run dev`
5. 打开：`http://localhost:3000`

## 生产构建
1. `npm run build`
2. 静态文件会输出到 `out/`，可直接用于 GitHub Pages

## 目录内容
- `src/`：泉风站运行所需源码
- `public/`：泉风站图片、视频等静态资源
- `package.json`：最小运行依赖与脚本
- `.github/workflows/pages.yml`：推送到 `main` 后自动发布 GitHub Pages

## 已移除内容
- 主模板的多站点脚手架
- 抓取与研究脚本
- 研究文档
- 非运行必需的站点源码归档目录

## 说明
- 英文站首页：`/`
- 中文站首页：`/cn`
- 英文分页示例：`/category/55/page/2`
- 中文分页示例：`/cn/category/2/page/6`

## 上传到 GitHub
1. 在 GitHub 新建一个仓库，例如 `quanfeng-site`
2. 在当前目录打开终端
3. 依次执行：

```powershell
git init
git branch -M main
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

如果你想用 SSH，把 `origin` 地址换成：

```powershell
git remote add origin git@github.com:你的用户名/你的仓库名.git
```

## GitHub Pages 部署
这个项目已经改成静态导出，并且已加入 GitHub Actions 自动部署工作流。

1. 推送代码到 GitHub 的 `main` 分支
2. 打开仓库的 `Settings > Pages`
3. 在 `Source` 里选择 `GitHub Actions`
4. 等待仓库里的 `Deploy GitHub Pages` 工作流跑完
5. 部署成功后，访问：
   - 仓库名如果是普通仓库：`https://你的用户名.github.io/你的仓库名/`
   - 仓库名如果是 `你的用户名.github.io`：`https://你的用户名.github.io/`

## 补充说明
- 这个项目现在会在 GitHub Actions 构建时自动识别仓库名，并处理 GitHub Pages 的子路径。
- 如果你后续改了仓库名，Pages 地址会跟着变，重新推送一次即可重新部署。
- 本地执行 `npm run build` 时，也会生成和 Pages 部署一致的 `out/` 目录。
