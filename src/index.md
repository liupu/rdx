#### 未完待续
#### color panel


#### 模板字字符串的复习
`es6中引入了模板字面量`

`模板字面量是允许嵌入表达式的字符串字面量。你可以使用多行字符串和字符串插值功能`

`语法`

```
`string text`
`string text line 1`
`string text ${expression} string text`
tag `string text ${expression} string text`
```

`描述`

`模板字符串使用反引号（``）来代替普通字符串中的双引号和单引号，模板字符串可以包含特定的语法（${expression}）占位符`

#### react组件中使用style需要注意事项

`style的值要用两个大括号包含，内部可以使用模板字符串表示一个变动的属性,示例如下：`

```
<div style={{"backgroundColor":`rgb(${this.props.r},${this.props.g},${this.props.b})`}}></div>
```
```
简写：
const { r, g, b} = this.props;
<div style={{"backgroundColor":`rgb(${r},${g},${b})`}}></div>
```
`最终得到的结果是：`

```
style="background-color: rgb(20, 220, 220);"
```