free-bussiness
===

`Bootstrap` 截止目前已经升级到了 `v4.0.0-beta.2`，粗略的看了一下，`API` 有比较大的更新，于是随便找了个 [psd](https://pan.baidu.com/s/1nvpAa4T) 练练手，密码是 `251m`，顺便熟悉下新的 `API`，这个项目暂时只涉及到 `css` 布局方面，没有牵涉到任何 `js` 事件，可能以后有空会在这个项目的基础上更新吧~~

Tips
---

1. 有的时候你可能会很反感 `row` 和 `col` 所产生的的间隙，我在源码中找到了 `no-gutters`，使用方式是在 `row` 后面加一个 `no-gutters`.
``` css
.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.no-gutters > .col,
.no-gutters > [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}
```

