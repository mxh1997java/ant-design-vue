<template>
  <a-form
    class="form"
    :form="form"
    :label-col="{ span: 5 }"
    :wrapper-col="{ span: 12 }"
    @submit="handleSubmit"
  >
    <a-form-item label="用户名">
      <a-input allowClear v-decorator="['username', { rules: [{ required: true, message: '请输入用户名!' }] }]" />
    </a-form-item>
    <a-form-item label="密码">
      <a-input allowClear v-decorator="['password', { rules: [{ required: true, message: '请输入密码!' }] }]" />
    </a-form-item>
    <a-form-item label="年龄" has-feedback validate-status="success">
      <a-input-number
        style="width: 100%"
        placeholder="请输入年龄"
        v-decorator="['age', { rules: [{ required: true, message: '请输入年龄!' }] }]"
      />
    </a-form-item>
    <a-form-item label="性别" has-feedback validate-status="success">
      <a-input
        allow-clear
        placeholder="请输入性别"
        v-decorator="['sex', { rules: [{ required: true, message: '请输入性别!' }] }]"
      />
    </a-form-item>
    <a-form-item label="下拉框">
      <a-select
        :default-value="itemList[0]"
        style="width: 100%"
        @change="handleChange"
        v-decorator="['select', { rules: [{ required: true, message: '请选择下拉框!' }] }]"
      >
        <a-select-option v-for="item in itemList" :key="item" :value="item">{{ item }}</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="复杂下拉框">
      <a-select
        mode="tags"
        :default-value="itemList[0]"
        :token-separators="[',']"
        style="width: 100%"
        placeholder="请选择下拉框"
        @change="handleChange"
        v-decorator="['select1', { rules: [{ required: true, message: '请选择下拉框!' }] }]"
      >
        <a-select-option v-for="item in itemList" :key="item" :value="item">{{ item }}</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="复杂下拉框1">
      <a-select mode="tags" style="width: 100%" :token-separators="[',']" @change="handleChange">
        <a-select-option v-for="item in itemList" :key="item">{{ item }}</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="复杂下拉框2">
      <a-select mode="multiple" style="width: 100%" :token-separators="[',']" @change="handleChange">
        <a-select-option v-for="item in itemList" :key="item">{{ item }}</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="日期">
      <a-date-picker v-decorator="['date-picker', config]" />
    </a-form-item>
    <a-form-item label="日期范围" style="margin-bottom:0;">
      <a-form-item
        placeholder="请选择开始日期!"
        :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }"
      >
        <a-date-picker style="width: 100%" />
      </a-form-item>
      <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }">-</span>
      <a-form-item placeholder="请选择结束日期!" :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
        <a-date-picker style="width: 100%" />
      </a-form-item>
    </a-form-item>
    <a-form-item label="Switch">
      <a-switch v-decorator="['switch', { valuePropName: 'checked' }]" default-checked checked-children="开" un-checked-children="关" />
    </a-form-item>
    <a-form-item label="文本域">
      <a-textarea
      allowClear
      v-model="areaValue"
      placeholder="Controlled autosize"
      :auto-size="{ minRows: 3, maxRows: 5 }"
      @pressEnter="changeArea"
    />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }" style="text-align:center">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      itemList: ["name", "age"],
      config: {
        rules: [{ type: "object", required: true, message: "请选择时间!" }]
      },
      areaValue: ''
    };
  },
  methods: {
    /**
     * @description 提交表单数据方法
     */
    handleSubmit(e) {
      e.preventDefault();
      //获取表单数据
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("表单数据: ", values);
        }
      });
    },

    /**
     * 获取下拉框子项
     */
    handleChange(value) {
      console.log(value);
    },

    /**
     * 文本域按下回车的回调
     */
    changeArea(e) {
      console.log(e);
    }
  }
};
</script>
<style lang="less">
#app {
  .form {
    margin-top: 60px;
    .ant-form-explain {
      color: #f5222d;
    }
  }
}
</style>