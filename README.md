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

## antd-mobile

主题色定制(全局，局部):

```css
// theme.css
:root:root {
    --adm-color-primary: #xxx;
}
```

## Redux

### 基于RTK管理账目列表

```js
const billStore = createSlice({
    name: 'bill',
    // 数据状态 state 
    initialState: {
        billList: []
    },
    reducers: {
        // 通过state 可以获取billList
        setBillList(state, action) {
            state.billList = action.payload
        }
    }
})
```

## Tabbar
feat: 配合路由 : useNavigate()
nofix: 激活color

## Month组件
nofix: 未居中，靠左侧

### 弹框

1. 点击打开事件选择弹框（√）
2. 点击取消/却惹按钮以及蒙层区域都可以关闭弹框(用组件的属性√)
3. 根据当前弹框打开的状态控制 expend 类名是否存在(动态类名√)
```js
<span className="arrow expand" 更改为 {classNames('arrow', visible && 'expand')}></span>
```
### 时间

1. dayjs 做时间格式化，管理当前年月
```js
const formatDate = dayjs(date).format('YYYY-MM')
```