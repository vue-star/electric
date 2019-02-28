<template>
    <div class="portlet-body">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
            <Row :gutter="24" class='row-wrap'>
                <Col span="10" class='col-wrap'>
                <FormItem label="配电室编号" prop="distributionRoomNumber">
                    <Input v-model="formValidate.distributionRoomNumber" placeholder="请输入配电室编号"></Input>
                </FormItem>
                </Col>
                <Col span="10" class='col-wrap'>
                <FormItem label="配电室名称" prop="distributionRoomName">
                    <Input v-model="formValidate.distributionRoomName" placeholder="请输入配电室名称"></Input>
                </FormItem>
                </Col>
            </Row>
            <Row :gutter="24" class='row-wrap'>
                <Col span="10" class='col-wrap'>
                <FormItem label="表计户号" prop="meterNumber">
                    <Input v-model="formValidate.meterNumber" number placeholder="请输入表计户号"></Input>
                </FormItem>
                </Col>
                <Col span="10" class='col-wrap'>
                <FormItem label="组织" prop="organizationUnitId">
                    <Select v-model="formValidate.organizationUnitId">
                        <Option v-for="item in organizationUnitIdList" :value="item.id" :key="item.id">{{
                            item.displayName }}</Option>
                    </Select>
                </FormItem>
                </Col>
            </Row>
        </Form>
        <div class="button-gropEl">
            <Button type="primary" @click="handleClickSure('formValidate')" :disabled="clickEvent">保存</Button>
            <Button @click='handleClickback' style="margin:20px">返回</Button>
        </div>
    </div>
</template>
<script>
    import {
        getOrganizationList
    } from '@/api/data'
    import {
        formatData,
        objEqual
    } from '@/libs/tools'
    import {
        addPowerDistribution,
        updataPowerDistribution
    } from '@/api/powerDistribution'
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
            return {
                clickEvent: false, // 按钮事件防止多次点击控制
                formValidate: {},
                ruleValidate: {
                    distributionRoomNumber: [{
                        required: true,
                        message: '请输入电力设施名称',
                        trigger: 'blur'
                    } ],
                    distributionRoomName: [{
                        required: true,
                        message: '请输入进线电源',
                        trigger: 'blur'
                    }]
                },
                isBack: false,
                organizationUnitIdList: []
            }
        },
        mounted() {
            this.getOrganizationUnits(2)
        },
        methods: {
            init() {
                if (this.isEdit) {
                    this.formValidate = this.editData
                    // this.$delete(this.formValidate,"isUseText")
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
            handleClickback() {
                this.$emit('back')
            },
            handleClickSure(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        if (this.isEdit) {
                            return new Promise((resolve, reject) => {
                                updataPowerDistribution(this.formValidate).then(
                                    res => {
                                        this.$Message.success('修改成功')
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
                                addPowerDistribution(this.formValidate).then(
                                    res => {
                                        this.$Message.success('创建成功')
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
        height: auto
    }

    .control-group {
        height: 55px;

        .error_text {
            color: red;
            padding-left: 10px
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
        margin-right: 10px
    }

    .symbol {
        display: inline-block;
        vertical-align: middle;
        width: 7px;
        text-align: right;
        height: 25px;
        color: red;
        line-height: 25px;
        font-size: 14px
    }

    .form_operate {
        padding-left: 180px;
        margin: 20px 0
    }

    .col-wrap {
        min-height: 56px;
        height: auto
    }

    .button-gropEl {
        text-align: center
    }

</style>
