# cl-admin-export 导出按钮

可导出当页表格的数据为 Excel 文件

## 安装

```shell
yarn add cl-admin-export
```

## 参数

| 参数           | 类型             | 说明                                      | 默认                         |
| -------------- | ---------------- | ----------------------------------------- | ---------------------------- |
| filename       | Function, String | 导出文件名                                | yyyy-MM-dd HH_mm_ss          |
| autoWidth      | Boolean          | 自动调节宽度                              | true                         |
| bookType       | String           | 类型                                      | xlsx                         |
| header         | Array            | 表头                                      | 默认使用 table.column[label] |
| fields         | Array            | 字段                                      | 默认使用 table.column[prop]  |
| data           | Function, Array  | 数据                                      | 默认使用 page 获取数据       |
| maxExportLimit | Number           | 最大导出条数，不传或者小于等于 0 为不限制 | 0                            |
| size           | String           | 按钮尺寸                                  | mini                         |
| disabled       | Boolean          | 是否禁用                                  | false                        |
| type           | String           | 按钮类型                                  | default                      |
| plain          | Boolean          | 按钮镂空                                  | false                        |
| round          | Boolean          | 按钮圆角                                  | false                        |
| circle         | Boolean          | 按钮圆形                                  | false                        |
| icon           | String           | 按钮图标                                  | null                         |

## 示例

全局使用

```js
// cool/index.js

import AdminExport from "cl-admin-export";

export default {
	components: [["admin-export", AdminExport]],
};
```

注册后就能使用 `cl-export-btn` 组件

```html
<template>
	<cl-crud>
		<cl-export-btn />
	</cl-crud>
</template>
```

局部使用

```html
<template>
	<cl-crud>
		<cl-export-btn />
	</cl-crud>
</template>

<script>
	import { ExportBtn } from "cl-admin-export";

	export default {
		components: {
			"cl-export-btn": ExportBtn,
		},
	};
</script>
```
