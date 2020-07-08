<template>
  <div>
    <h3>抽屉--Drawer</h3>
    <a-button type="primary" @click="showDrawer">
      <a-icon type="plus" />展开抽屉
    </a-button>
    <a-drawer
      title="抽屉"
      :width="720"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <a-form :form="form" layout="vertical" hide-required-mark>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="名字">
              <a-input
                :maxLength="10"
                v-decorator="[
                  'name',
                  {
                    rules: [{ required: true, message: '请输入名字!' }],
                  },
                ]"
                placeholder="请输入名字!"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="性别">
              <a-switch checked-children="男" un-checked-children="女" default-checked 
              v-decorator="[
                  'sex',
                  {
                    rules: [{ required: true, message: '请输入性别!' }],
                  },
                ]"
                placeholder="请输入性别!"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="民族">
              <a-select
                v-decorator="[
                  'nation',
                  {
                    rules: [{ required: true, message: '请选择民族!' }],
                  },
                ]"
                placeholder="请选择民族!"
              >
                <a-select-option value="汉族">汉族</a-select-option>
                <a-select-option value="其他">其他</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="身份证号码">
              <a-input
                :maxLength="18"
                v-decorator="[
                  'ID_Card',
                  {
                    rules: [{ required: true, message: '请输入身份证号码!' }],
                  },
                ]"
                placeholder="请输入身份证号码!"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <!-- <a-col :span="12">
            <a-form-item label="Approver">
              <a-select
                v-decorator="[
                  'approver',
                  {
                    rules: [{ required: true, message: 'Please choose the approver' }],
                  },
                ]"
                placeholder="Please choose the approver"
              >
                <a-select-option value="jack">
                  Jack Ma
                </a-select-option>
                <a-select-option value="tom">
                  Tom Liu
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>-->
          <a-col :span="12">
            <a-form-item label="生日">
              <a-date-picker
                v-decorator="[
                  'birthday',
                  {
                    rules: [{ required: true, message: '请输入生日!' }],
                  },
                ]"
                style="width: 100%"
                :get-popup-container="trigger => trigger.parentNode"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="备注">
              <a-textarea
                v-decorator="[
                  'description',
                  {
                    rules: [{ required: true, message: '请输入备注!' }],
                  },
                ]"
                :rows="4"
                placeholder="请输入备注!"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose">关闭</a-button>
        <a-button type="primary" @click="getFormInfo">提交</a-button>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      visible: false
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    getFormInfo(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
            if(!err) {
                console.log('表单数据: ', values);
                console.log('性别: ', values.sex ? '男' : '女');
                this.onClose();
                //重置表单
                this.form.resetFields();
            }
        });
    }
  }
};
</script>
