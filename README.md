## 路径解析配置
需要借助插件 -carco

1. 安装craco
```bash
npm i -D @craco/craco
```
2. 根目录创建配置文件`craco.config.js`
3. 配置文件中添加路径解析配置
4. 包文件中配置启动和打包命令

## 联想路径配置

项目目录下添加`jsconfig.json`

```ts
{
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@/*": [
                "src/*"
            ]
        }
    }
}
```

## json-server 实现数据mock

1. 安装 json-server
```bash
npm i -D json-server
```
2. 准备一个 json 文件
3. 添加启动命令

```json
"server": "json-server ./server/data.json --port 888"
```
4. 访问接口进行测试

## RouterProvider

要用package-lock的版本，不然会报错

# antd-mobile

主题色定制(全局，局部):

```css
// theme.css
:root:root {
    --adm-color-primary: #xxx;
}
```