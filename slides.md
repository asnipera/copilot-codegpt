---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /neotrident.jpg
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS (experimental)
css: unocss
---

<img src="/copilot_logo.png" alt="copilot" width="100" height="100" m-auto inline mr150px/>
<img src="/gpt_circle.png" alt="codeGPT" width="100" height="100" m-auto inline/>

# Copilot & CodeGPT

您的 AI 编程助手

<div class="pt-50">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
  </span>
  <div class="abs-br flex gap-2" left="49%" bottom="70px">
  <a href="https://github.com/asnipera/copilot-labs" target="_blank" alt="GitHub"
    class="text-xl icon-btn  opacity-50">
    <carbon-logo-github color-black/>
  </a>
</div>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->
<style>
  h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 47%, #146b8c 53%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  .slidev-page-1{
    background-image: url(/neotrident.jpg) !important;
  }
  p{
    color: #000;
  }
</style>

---

# 什么是 copilot?

Copilot 基于 OpenAI 的 Codex 模型，实时地为您提供代码建议。

- 📝 **注释生成代码** - 根据注释或函数名，生成代码块或者函数
- 📝 **为函数编写单元测试** - 读取函数上下文，快速编写单元测试
- 🤖 **智能补全代码** - 基于项目上下文，提供代码补全，减少手动输入代码的时间和错误率
- 📖 **梳理代码逻辑** - 解释代码的逻辑，帮助您快速理解代码
- 😀 **可读性** - 改变代码风格和结构，使代码更易读
- 💪 **健壮性** - 为代码添加异常处理，使代码更健壮
- ✋ **建议** - 提供代码重构建议，帮助开发人员优化代码结构和性能

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
  .slidev-page-2{
    background-image: url(/neotrident.jpg) !important;
    background-size: cover;
  }
</style>

---

# 根据注释生成代码

```ts {1|2-12|all}
//写一个函数，获取数组中的最小的两个值
export function getMinTwo(arr: number[]) {
  //获取最小值
  const min = Math.min(...arr);
  //获取最小值的索引
  const minIndex = arr.indexOf(min);
  //删除最小值
  arr.splice(minIndex, 1);
  //获取第二小的值
  const minTwo = Math.min(...arr);
  return [min, minTwo];
}
```

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
  .slidev-page-3{
    background-image: url(/neotrident.jpg) !important;
    background-size: cover;
  }
</style>

---

# 为函数编写单元测试

##### 根据上下文快速编写单元测试

```ts {1|3-11|all}
describe("1-comment-to-code", () => {
  it("should get min two numbers", () => {
    expect(getMinTwo([1, 2, 3])).toEqual([1, 2]);
    // 再写一个测试用例
    expect(getMinTwo([1, 2, 3, 4])).toEqual([1, 2]);
    // 再写一个数组中是三位数的测试用例
    expect(getMinTwo([100, 200, 300])).toEqual([100, 200]);
    // 再写一个数组中是负数的测试用例
    expect(getMinTwo([-1, -2, -3])).toEqual([-3, -2]);
    // 再写一个数组中是负数和正数的测试用例
    expect(getMinTwo([-1, 2, -3])).toEqual([-3, -1]);
  });
});
```

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
  .slidev-page-6{
    background-image: url(/neotrident.jpg) !important;
    background-size: cover;
  }
</style>

---

# 智能补全代码

```ts {1-9,11|all}
interface User {
  ID: string;
  Name: string;
  Dept: {
    DeptName: string;
    DeptId: number;
  };
}
function getUserInfo(user: User, path: string) {
  return path.split('.')?;
}
```

<arrow v-after x1="650" y1="375" x2="480" y2="285" color="#564" width="3" arrowSize="1" />
<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
  .slidev-page-4{
    background-image: url(/neotrident.jpg) !important;
    background-size: cover;
  }
</style>

---

# 梳理代码逻辑

```ts {3-|1|2|all}
// q: somelogicalFunction是用来干嘛的？
// a: ?
function somelogicalFunction(arr: number[]) {
  let longestSubsequence: number[] = [];
  let currentSubsequence: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      currentSubsequence.push(arr[i]);
    } else {
      if (currentSubsequence.length > longestSubsequence.length) {
        longestSubsequence = currentSubsequence;
      }
      currentSubsequence = [arr[i]];
    }
  }
  return longestSubsequence;
}
```

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
  .slidev-page-5{
    background-image: url(/neotrident.jpg) !important;
    background-size: cover;
  }
</style>

---

# 可读性

```ts
function ascending(a, b) {
  return a == null || b == null
    ? NaN
    : a < b
    ? -1
    : a > b
    : NaN;
}
```

通过 copilot brushes 的 READABLE 按钮，将上述代码转换为可读性更高的代码

```ts {1,11|2-10|all}
function ascending(a, b) {
  if (a == null || b == null) {
    return NaN;
  } else if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else if (a >= b) {
    return NaN;
  }
}
```

  <style>
  h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
    .slidev-page-2{
      background-image: url(/neotrident.jpg) !important;
      background-size: cover;
    }
  </style>

---

# 健壮性

```ts
function add(x, y) {
  return x + y;
}
```

通过 copilot brushes 的 MAKE ROBUS 按钮，快速添加判断条件，增强代码的健壮性

```ts {1,5-|2-4|all}
function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("x and y must be numbers");
  }
  return x + y;
}
```

  <style>
  h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
    .slidev-page-2{
      background-image: url(/neotrident.jpg) !important;
      background-size: cover;
    }
  </style>

---

# 代码一键重构

```ts
function getUser(usersList: User[][], id: string) {
  for (let i = 0; i < usersList.length; i++) {
    const userList = usersList[i];
    for (let j = 0; j < userList.length; j++) {
      const user = userList[j];
      if (user.ID === id) {
        return user;
      }
    }
  }
}
```

通过 copilot brushes 的 CHUNK 按钮，快速重构代码

```ts {1,4-|all}
function getUser(usersList: User[][], id: string) {
  const userList = getUserList(usersList, id);
  return getUserFromList(userList!, id);
}
```

  <style>
  h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
    .slidev-page-2{
      background-image: url(/neotrident.jpg) !important;
      background-size: cover;
    }
  </style>

---

# 什么是 Code GPT?

Code GPT 基于 OpenAI 的 gpt-3.5-turbo 模型，在您的集成开发环境中使用人工智能。

- 🤖 **Code GPT Chat** - 通过会话的方式让 ChatGPT 给出解决方案
- 🤖 **生成代码** - 通过注释获取代码（cmd + shift + i）
- 🤖 **生成代码** - 通过输入问题生成代码文件（cmd + shift + P）
- 🤖 **生成代码** - 通过选择代码+输入问题生成代码文件
- 🤖 **解释代码** - 让 GPT 解释选中的代码
- 🤖 **重构代码** - 让 GPT 重构选中的代码
- 🤖 **发现问题** - 让 GPT 在选中的代码中发现 bug 或者问题
- 🤖 **单元测试** - 让 GPT 为选中的代码生成单元测试
- 🤖 **StackOverflow** - 在 StackOverflow 中搜索问题
- 🤖 **编译运行代码** - 选中代码，编译运行

使用文档: https://www.codegpt.co/docs/category/features

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
  .slidev-page-2{
    background-image: url(/neotrident.jpg) !important;
    background-size: cover;
  }
</style>

---

# 使用心得

- copilot 基于代码上下文，codeGPT 基于会话上下文
- copilot 侧重于编码过程中的智能补全，codeGPT 侧重于会话的方式解决问题
- copilot 最大程度地提高编码速度，codeGPT 最大程度地解决编码过程中的问题
- 99%的情况下 codeGPT 的解决方案都是可行的。但是有时候基于碎片化搜索的结果，可能会更准确
- 总结使用技巧，可以大大提高开发效率
- 工具为辅，开发为主

<style>
  h1 {
    background-color: #2B90B6;
    background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
    .slidev-page-2{
      background-image: url(/neotrident.jpg) !important;
      background-size: cover;
    }
  </style>

---

# Respect

##### 分享中用到的插件

- <div mt20px>
    <img src="/copilot_logo.png" w10 h10 inline mr6px /> GitHub Copilot
      <br/>
      说明：Your AI pair programmer
      <br/>
      
  <span> VS Marketplace：https://marketplace.visualstudio.com/items?itemName=GitHub.copilot </span>
    </div>

- <div mt20px>
  <img src="/gpt_circle.png" w40px h40px inline mr6px> Code GPT
    <div>说明：Use the Official OpenAI API inside VSCode</div>

  <span>VS Marketplace：https://marketplace.visualstudio.com/items?itemName=DanielSanMedium.dscodegpt</span>
   </div>
    <style>
    h1 {
      background-color: #2B90B6;
      background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }
      .slidev-page-2{
        background-image: url(/neotrident.jpg) !important;
        background-size: cover;
      }
    </style>

---
