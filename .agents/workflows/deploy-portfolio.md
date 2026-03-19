---
description: How to commit and deploy your portfolio to GitHub Pages
---

Follow these steps to upload your code to GitHub and see it live:

1.  **Initialize Git** (only if you haven't yet in this folder):
    ```powershell
    git init
    ```

2.  **Add your GitHub repository as origin** (replace `USERNAME` with your GitHub username):
    ```powershell
    git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
    ```

3.  **Add and Commit your files**:
    ```powershell
    git add .
    git commit -m "Initial commit: Premium Portfolio with Framer Motion"
    ```

4.  **Push the source code to the main branch**:
    ```powershell
    git branch -M main
    git push -u origin main
    ```

5.  **Deploy to GitHub Pages**:
    ```powershell
    npm run deploy
    ```

> [!NOTE]
> The `npm run deploy` command will use the `gh-pages` package to build your site and push it to a special branch that GitHub uses to host your website. It may take a minute or two for the changes to appear at https://USERNAME.github.io.
