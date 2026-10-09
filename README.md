# Yujie Yang — Academic Homepage

English academic homepage based on [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io).

- Website: https://yujieyang-zju.github.io/
- Owner: YujieYang-ZJU
- Confirmed information: Yujie Yang, Ph.D. student in Control Science and Engineering at Zhejiang University; supervised by Prof. Yang Zhu and Prof. Lei Wang in Prof. Hongye Su's research group. B.Eng. degrees from Zhejiang Gongshang University and the University of Sussex (2025). Research: energy management for fuel cell hybrid power systems.
- Other sections contain explicit temporary placeholders; replace them when the information is ready.

## 更新内容

- 姓名、单位、头像、邮箱和社交账号：`_config.yml`
- 简介、研究方向、动态、论文、教育经历和荣誉：`_pages/about.md`
- 顶部导航：`_data/navigation.yml`
- 头像：将照片放入 `images/`，并修改 `_config.yml` 的 `author.avatar`。
- PDF / 简历：放入 `files/` 后在主页添加链接。

现在的头像是姓名首字母 YY，邮箱及 Google Scholar 尚未填写。
Google Scholar 引用统计默认关闭；以后配置 Scholar ID 后再开启。

## GitHub Pages

仓库名：`yujieyang-zju.github.io`。
在 Settings → Pages 中选择 Deploy from a branch，分支 `main`、目录 `/ (root)`。
提交修改后，GitHub Pages 会重新构建网站。

## Local preview

With Ruby 3.x and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

## Credits

Based on AcadHomepage, influenced by AcademicPages and Minimal Mistakes.
The original license is preserved in `LICENSE`.
