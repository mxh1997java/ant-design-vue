<template>
  <div class="table">
    <a-button @click="add">增加</a-button>
    <a-table :columns="columns" :data-source="data" @change="onChange">
      <template  slot="operating" slot-scope="record">
        <a-button @click="edit(record)">编辑</a-button>
        <a-button @click="del">删除</a-button>
      </template>
    </a-table>

    <!-- 对话框 -->
    <a-modal
      title="Title"
      :visible="flag"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <!-- 表单 -->
      <a-form
        :form="form"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        @submit="handleSubmit"
      >
        <a-form-item label="名字">
          <a-input v-decorator="['name', { rules: [{ required: true, message: '请输入名字!' }] }]" />
        </a-form-item>
        <a-form-item label="年龄">
          <a-input-number 
          style="{width: 100%}"
          :defaultValue="1"
          :max="120"
          :min="1"
          :step="1"
          v-decorator="['age', { rules: [{ required: true, message: '请输入年龄!' }] }]" />
        </a-form-item>
        <a-form-item label="地址">
          <a-input v-decorator="['address', { rules: [{ required: true, message: '请输入地址!' }] }]" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">提交</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
let columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age
  },
  {
    title: "Address",
    dataIndex: "address",
    //排序
    sorter: (a, b) => a.address.length - b.address.length,
    //条件筛选
    filters: [
      {
        text: "address1",
        value: "address1"
      },
      {
        text: "address21",
        value: "address21"
      },
      {
        text: "小沟村",
        value: "小沟村"
      }
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0
  },
  {
    title: "Operating",
    dataIndex: "operating",
    scopedSlots: { customRender: "operating" }
  }
];
export default {
  data() {
    return {
      data: [
        { name: "maxinhai", age: "12", address: "小沟村" },
        { name: "majingjing", age: "14", address: "address1" },
        { name: "madeshen", age: "12", address: "address21" },
        { name: "mayali", age: "12", address: "小沟村" },
        { name: "maxinhai", age: "12", address: "address1" },
        { name: "majingjing", age: "14", address: "小沟村" },
        { name: "madeshen", age: "12", address: "小沟村" },
        { name: "mayali", age: "12", address: "address1" },
        { name: "maxinhai", age: "12", address: "address1" },
        { name: "majingjing", age: "14", address: "小沟村" },
        { name: "madeshen", age: "12", address: "address21" },
        { name: "mayali", age: "12", address: "address1" },
        { name: "maxinhai", age: "12", address: "address1" },
        { name: "majingjing", age: "14", address: "address1" },
        { name: "madeshen", age: "12", address: "address21" },
        { name: "mayali", age: "12", address: "address1" },
        { name: "maxinhai", age: "12", address: "小沟村" },
        { name: "majingjing", age: "14", address: "address1" },
        { name: "madeshen", age: "12", address: "address21" },
        { name: "mayali", age: "12", address: "address1" },
        { name: "maxinhai", age: "12", address: "address1" },
        { name: "majingjing", age: "14", address: "小沟村" },
        { name: "madeshen", age: "12", address: "address21" },
        { name: "mayali", age: "12", address: "address1" }
      ],
      columns,
      form: this.$form.createForm(this),
      flag: false,
      confirmLoading: false,
    };
  },

  methods: {
    /**
     * @description 显示对话框
     */
    showModal() {
      this.flag = true;
    },
    /**
     * @description 关闭对话框
     */
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.flag = false;
        this.confirmLoading = false;
      }, 2000);
    },
    /**
     * @description 关闭对话框
     */
    handleCancel(e) {
      this.flag = false;
    },
    onChange(pagination, filters, sorter) {
      console.log("params", pagination, filters, sorter);
    },
    edit(record) {
      this.$message.success("编辑成功!");
      console.log('编辑: ', record);
    },
    del(event) {
      console.log("del: ", event);
      //$message 全局提示组件
      this.$message.success("删除成功!");
    },
    /**
     * @description 打开增加数据表单
     */
    add() {
      this.$message.success("打开表单");
      this.flag = true;
    },

    /**
     * @description 获取表单数据，并添加到表格数组
     */
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("表单数据: ", values);
          let item = {
            name: values.name,
            age: values.age,
            address: values.address
          };
          this.data.push(item);
          //重置表单
          this.form.resetFields();
          //关闭弹窗
          this.handleCancel();
        }
      });
    }
  }
};
</script>