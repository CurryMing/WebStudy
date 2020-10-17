import Vue from "vue";
import {
  Card,
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Main,
  Aside,
  Menu,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Pagination,
  Dialog, MessageBox, Tag, Tree, Select, Option, Cascader
} from "element-ui";

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Container);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Switch);
Vue.use(Tooltip);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Select);
Vue.use(Option);
Vue.use(Cascader)

// 全局挂载（挂载到Vue的原型对象上，这样每个组件都可以通过this来访问$message）
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm