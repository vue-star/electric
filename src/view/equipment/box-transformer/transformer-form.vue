<template>
    <div class="portlet-body">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
            <Row :gutter="24" class='row-wrap'>
                <Col span="10" class='col-wrap'>
                <FormItem label="箱变编号" prop="boxTransformerNumber">
                    <Input v-model="formValidate.boxTransformerNumber" placeholder="请输入箱变编号"></Input>
                </FormItem>
                </Col>
                <Col span="10" class='col-wrap'>
                <FormItem label="箱变型号" prop="boxTransformerType">
                    <Input v-model="formValidate.boxTransformerType" placeholder="请输入箱变型号"></Input>
                </FormItem>
                </Col>
            </Row>
            <Row :gutter="24" class='row-wrap'>
                <Col span="10" class='col-wrap'>
                <FormItem label="出厂编号" prop="serialNumber">
                    <Input v-model="formValidate.serialNumber" placeholder="请输入出厂编号"></Input>
                </FormItem>
                </Col>
                <Col span="10" class='col-wrap'>
                <FormItem label="箱变厂家" prop="boxTransformerManufacturer">
                    <Select v-model="formValidate.boxTransformerManufacturer">
                        <Option v-for="item in boxTransformerManufacturerList" :value="item.name" :key="item.id">{{
                            item.name }}</Option>
                    </Select>
                </FormItem>
                </Col>
            </Row>
            <Row :gutter="24" class='row-wrap'>
                <Col span="10" class='col-wrap'>
                <FormItem label="表计户号" prop="meterNumber">
                    <Input v-model="formValidate.meterNumber" placeholder="请输入表计户号"></Input>
                </FormItem>
                </Col>
                <Col span="10" class='col-wrap'>
                <FormItem label="箱变类别" prop="boxTransformerCategory">
                    <RadioGroup v-model="formValidate.boxTransformerCategory">
                        <Radio v-for="item in boxData" :key='item.value' :label="item.value">
                            {{item.name}}
                        </Radio>
                    </RadioGroup>
                </FormItem>
                </Col>
            </Row>
            <Row :gutter="24" class='row-wrap'>
                <Col span="10" class='col-wrap'>
                <FormItem label="箱变容量" prop="boxTransformerCapacity">
                    <Input v-model="formValidate.boxTransformerCapacity" number placeholder="请输入箱变容量 (美式箱变才有)"></Input>
                </FormItem>
                </Col>
                <Col span="10" class='col-wrap'>
                <FormItem label="组织" prop="organizationUnitId">
                    <Select v-model="formValidate.organizationUnitId">
                        <Option v-for="item in organizationUnitIdList" :value="item.displayName" :key="item.id">{{
                            item.displayName }}</Option>
                    </Select>
                </FormItem>
                </Col>
            </Row>
            <Row :gutter="24" class='row-wrap'>
                <Col span="10" class='col-wrap'>
                <FormItem label="备注" prop="reamrk">
                    <Input type="textarea" :rows="3" v-model="formValidate.remark" :maxlength=200 placeholder=""></Input>
                </FormItem>
                </Col>
            </Row>
        </Form>
        <div class="button-gropEl">
            <Button type="primary" @click="handleClickSure('formValidate')" :loading="loading">保存</Button>
            <Button @click='handleClickback' style="margin:20px">返回</Button>
        </div>
    </div>
</template>
<script>
    import { getDataDicConfigList,getOrganizationList } from '@/api/data'
    import { objEqual } from '@/libs/tools'
    import {
        addBoxTransformer,
        updataBoxTransformer
    } from '@/api/boxTransformer'
    export default {
        name: 'distribution-form',
        props: {
            isEdit: {
                type: Boolean,
                default: false
            },
            editData: {
                type: Object,
                default: function () {
                    return {}
                }
            }

        },
        data() {
            const validateNumber = (rule, value, callback) => {
                if (!Number.isInteger(+value)) {
                    callback(new Error('请输入数字值'))
                } else {
                    callback()
                }
            }
            return {
                loading: false, // 按钮事件防止多次点击控制
                isBack: false,
                formValidate: {},
                ruleValidate: {
                    boxTransformerType: [{
                        required: true,
                        message: '请输入箱变型号',
                        trigger: 'blur'
                    }],
                    boxTransformerManufacturer: [{
                        required: true,
                        message: '请选择箱变厂家',
                        trigger: 'blur'
                    }],
                    serialNumber: [{
                        required: true,
                        message: '请输入出厂编号',
                        trigger: 'blur'
                    }],
                    meterNumber: [{
                        required: true,
                        message: '请输入表计户号',
                        trigger: 'blur'
                    }],
                    boxTransformerNumber: [{
                        required: true,
                        message: '请输入箱变编号',
                        trigger: 'blur'
                    }],
                    boxTransformerCapacity: [{
                        validator: validateNumber,
                        trigger: 'change'
                    }],
                    organizationUnitId: [{
                        required: true,
                        message: '请选择组织名称',
                        trigger: 'change'
                    }],
                },
                boxData: [{
                        value: 1,
                        name: '欧式'
                    },
                    {
                        value: 0,
                        name: '美式'
                    }
                ],
                boxTransformerManufacturerList: [],
                organizationUnitIdList: []
            }
        },
        mounted() {
            this.init()
            this.getDataDicConfigs(5)
            this.getOrganizationUnits(1)
        },
        methods: {
            init() {
                if (this.isEdit) {
                    Object.assign(this.formValidate, this.editData)
                    // this.$delete(this.formValidate,"isUseText");
                    this.boxTransformerManufacturerList.forEach(element => {
                        if (objEqual(this.formValidate.boxTransformerManufacturer, element.name)) {
                            this.formValidate.boxTransformerManufacturer = element.id
                        }
                    })
                    this.organizationUnitIdList.forEach(element => {
                        if (objEqual(this.formValidate.organizationUnitName, element.displayName)) {
                            this.formValidate.organizationUnitId = element.id
                        }
                    })
                }
            },
            getOrganizationUnits(OrganizationUnitType) {
                return new Promise((resolve, reject) => {
                    getOrganizationList(OrganizationUnitType).then(
                        res => {
                            const data = res.data.result.items
                            this.organizationUnitIdList = data
                            this.init()
                            resolve()
                        },
                        error => {
                            this.$Message.error(error.error.message)
                            resolve()
                        }).catch(err => {
                        reject(err)
                    })
                })
            },
            getDataDicConfigs(dictionaryType) {
                return new Promise((resolve, reject) => {
                    getDataDicConfigList(dictionaryType).then(
                        res => {
                            const data = res.data.result.items
                            this.boxTransformerManufacturerList = data
                            resolve()
                        },
                        error => {
                            this.$Message.error(error.error.message)
                            resolve()
                        }).catch(err => {
                        reject(err)
                    })
                })
            },
            handleClickback() {
                this.$emit('back')
            },
            handleClickSure(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.loading = true
                        if (this.isEdit) {
                            return new Promise((resolve, reject) => {
                                updataBoxTransformer(this.formValidate).then(
                                    res => {
                                        this.$Message.success('修改成功')
                                        this.loading = false
                                        resolve()
                                    },
                                    error => {
                                        this.$Message.error(error.error.message)
                                        resolve()
                                    }).catch(err => {
                                    reject(err)
                                })
                            })
                        } else {
                            return new Promise((resolve, reject) => {
                                addBoxTransformer(this.formValidate).then(
                                    res => {
                                        const boxTransformerId = res.data.result
                                        this.$Message.success('创建成功')
                                        this.$emit('save', boxTransformerId)
                                        this.loading = false
                                        resolve()
                                    },
                                    error => {
                                        this.$Message.error(error.error.message)
                                        resolve()
                                    }).catch(err => {
                                    reject(err)
                                })
                            })
                        }
                    } else {
                        this.$Message.error('输入有误!')
                    }
                })
            }
        }
    }

</script>
<style scoped lang='less'>
    .portlet-body {
        background-color: #fff;
        padding: 10px;
        height: auto;
    }

    .control-group {
        height: 55px;

        .error_text {
            color: red;
            padding-left: 10px;
        }
    }

    .dec {
        display: inline-block;
        vertical-align: middle;
        width: 160px;
        text-align: right;
        height: 25px;
        line-height: 25px;
        font-size: 14px;
        margin-right: 10px;
    }

    .symbol {
        display: inline-block;
        vertical-align: middle;
        width: 7px;
        text-align: right;
        height: 25px;
        color: red;
        line-height: 25px;
        font-size: 14px;
    }

    .form_operate {
        padding-left: 180px;
        margin: 20px 0;
    }

    .col-wrap {
        min-height: 56px;
        height: auto;
    }

    .button-gropEl {
        text-align: center;
    }

</style>
