import { defineConfig } from "@umijs/max";

const routes = [
  ["01 Counter", "Counter"],
  ["01 UserList", "UserList"],
  ["04 Timer", "Timer"],
  ["04 SearchUserList", "SearchUserList"],
  ["04 ThemeSwitch", "ThemeSwitch"],
  ["06 UseCounter", "UseCounter"],
  // ['06 UseAsync', 'UseAsync'],
  ["06 UseScroll", "UseScroll"],
  ["06 BlogList", "BlogList"],
  ["07 PureRedux", "PureRedux"],
  ["07 ReduxCounter", "ReduxCounter"],
  ["08 FilterList", "FilterList"],
  ["08 SearchBox", "SearchBox"],
  ["08 PriceInput", "PriceInput"],
  ["09 ArticleView", "ArticleView"],
  ["10 UserList", "UserList2"],
  ["10 CounterRenderProps", "CounterRenderProps"],
  ["10 ListWithMore", "ListWithMore"],
  ["11 ToggleButton", "ToggleButton"],
  ["11 UseKeyPress", "UseKeyPress"],
  ["13 UncontrolledForm", "UncontrolledForm"],
  ["13 UseForm", "UseForm"],
  ["14 NiceModalExample", "NiceModalExample"],
  ["14 UsersLayout", "UsersLayout"],
  ["15 MyRouter", "MyRouter"],
  ["15 NestedRouting", "NestedRouting"],
  ["15 TabsPage", "TabsPage", "/:activeTab?"],
  ["15 RouterAuth", "RouterAuth"],
  ["16 LazyLoad", "LazyLoad"],
  ["19 Debounce", "Debounce"],
];

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: "@umijs/max",
  },

  routes: [
    {
      path: "/",
      redirect: "/home",
    },

    {
      name: "首页",
      path: "/home",
      component: "./Home",
    },

    {
      name: "ReactHookDemo",
      path: "/reactHook",
      // component: './Access',
      routes: routes.map((item) => {
        return {
          name: item[0],
          path: item[0].replace(/ /g, "/"),
          component: "./" + item[0].replace(/ /g, "/"),
        };
      }),
    },

    {
      name: "YeahMyKanBan",
      path: "/YeahMyKanBan/FinderSimulate",
      component: "./YeahMyKanBan/pages/FinderSimulate",
    },

    {
      name: " CRUD 示例",
      path: "/table",
      component: "./Table",
    },
  ],

  mfsu: { strategy: "normal" },
  npmClient: "pnpm",
  tailwindcss: {},
});

console.log("  ".replace(/ /g, "/"));