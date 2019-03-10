<template>
    <div class="distribution-detail">
        <div class="portlet-title">
            <Icon type="person-stalker"></Icon>
            <span class='title_text'>箱变明细</span>
        </div>

        <!--基本信息列表-->
        <div class="list">
            <Row>
                <Col span="21" offset="1" v-if="boxTransformerId">
                <Button type="primary" @click='addHighDataClick' style="margin: 0 0 20px 8px">新增高压设备信息</Button>
                </Col>
            </Row>
            <Row>
                <Col span="21" offset="1">
                <div class='table-wrap'>
                    <i-table stripe highlight-row :columns="columns1" :data="listData">
                    </i-table>

                    <Spin :fix='true' v-show='isLoading'>
                        <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                        <div>Loading</div>
                    </Spin>
                </div>
                </Col>
            </Row>
        </div>
        <div class="list">
            <Row>
                <Col span="21" offset="1" v-if="boxTransformerId">
                <Button type="primary" @click='addLowDataClick' style="margin: 0 0 20px 8px">新增低压设备信息</Button>
                </Col>
            </Row>
            <Row>
                <Col span="21" offset="1">
                <div class='table-wrap'>
                    <i-table stripe highlight-row :columns="columns2" :data="listData2">
                    </i-table>

                    <Spin :fix='true' v-show='isLoading'>
                        <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                        <div>Loading</div>
                    </Spin>
                </div>
                </Col>
            </Row>
        </div>
        <div class="list">
            <Row>
                <Col span="21" offset="1" v-if="boxTransformerId">
                <Button type="primary" @click='addTransDataClick' style="margin: 0 0 20px 8px">新增变压器信息</Button>
                </Col>
            </Row>
            <Row>
                <Col span="21" offset="1">
                <div class='table-wrap'>
                    <i-table stripe highlight-row :columns="columns3" :data="listData3">
                    </i-table>

                    <Spin :fix='true' v-show='isLoading'>
                        <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                        <div>Loading</div>
                    </Spin>
                </div>
                </Col>
            </Row>
        </div>
        <Modal v-model="deletteModelStatus" width="310" :styles="{top: '250px'}">
            <p slot="header" style="color:#2db7f5;text-align:left">
                <span>提示</span>
            </p>
            <div>
                <h3>确认删除吗?</h3>
            </div>
            <div slot="footer">
                <Button type="info" size="large" @click="cancelDel">
                    取消
                </Button>
                <Button type="info" size="large" @click="sureDel">
                    确定
                </Button>
            </div>
        </Modal>

        <Modal v-model="showAddOrEditHighItems" width="930" :styles="{top: '100px'}">
            <p slot="header" style="color:#2db7f5;text-align:left">
                <span>{{modelTitle}}</span>
            </p>
            <div class="couplet-card">
                <Tabs active-key="key1" type="card" value="formLoadSwitchValidate" v-model="tabsName" style="height: 100%">
                    <Tab-pane label="新增负荷开关" key="key1" name="formLoadSwitchValidate">
                        <div>
                            <Form ref="formLoadSwitchValidate" :model="formLoadSwitchValidate" :rules="ruleLoadSwitchValidate"
                                :label-width="100">
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                        <FormItem label="产品型号" prop="productType">
                                            <Input v-model="formLoadSwitchValidate.productType" :maxlength=20
                                                placeholder="请输入产品型号"></Input>
                                        </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                        <FormItem label="生产厂商" prop="productManufacturer">
                                            <Select v-model="formLoadSwitchValidate.productManufacturer">
                                                <Option v-for="item in manufacturerLoadSwitchList" :value="item.name" :key="item.id">{{
                                                    item.name }}</Option>
                                            </Select>
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                        <FormItem label="生产编号" prop="productionCode">
                                            <Input v-model="formLoadSwitchValidate.productionCode" :maxlength=20
                                                placeholder="请输入生产编号"></Input>
                                        </FormItem>
                                    </Col>  
                                    <Col span="10" class='col-wrap'>
                                        <FormItem label="额定电流" prop="ratedCurrent">
                                            <Input v-model="formLoadSwitchValidate.ratedCurrent" :maxlength=20
                                                placeholder="请输入额定电流"></Input>
                                        </FormItem>
                                    </Col>  
                                </Row>
                            </Form>
                        </div>
                    </Tab-pane>
                    <Tab-pane label="新增断路器" key="key2" name="formBreakerValidate">
                        <div>
                            <Form ref="formBreakerValidate" :model="formBreakerValidate" :rules="ruleBreakerValidate"
                                :label-width="100">
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="产品型号" prop="productType">
                                        <Input v-model="formBreakerValidate.productType" :maxlength=200 placeholder="请输入产品型号"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="生产厂商" prop="productManufacturer">
                                        <Select v-model="formBreakerValidate.productManufacturer">
                                            <Option v-for="item in manufacturerBreakerList" :value="item.name" :key="item.id">{{
                                                item.name }}</Option>
                                        </Select>
                                    </FormItem>
                                    </Col>
                                </Row>
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="生产编号" prop="productionCode">
                                        <Input v-model="formBreakerValidate.productionCode" :maxlength=200
                                            placeholder="请输入生产编号"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="额定电流" prop="ratedCurrent">
                                        <Input v-model="formBreakerValidate.ratedCurrent" number :maxlength=50
                                            placeholder="请输入额定电流"></Input>
                                    </FormItem>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Tab-pane>
                    <Tab-pane label="新增隔离开关" key="key3" name="formIsolationSwitchValidate">
                        <div>
                            <Form ref="formIsolationSwitchValidate" :model="formIsolationSwitchValidate" :rules="ruleIsolationSwitchValidate"
                                :label-width="100">
                                <Row :gutter="24" class='row-wrap'>
                                     <Col span="10" class='col-wrap'>
                                    <FormItem label="产品型号" prop="productType">
                                        <Input v-model="formIsolationSwitchValidate.productType" :maxlength=200
                                            placeholder="请输入产品型号"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="生产厂商" prop="productManufacturer">
                                        <Select v-model="formIsolationSwitchValidate.productManufacturer">
                                            <Option v-for="item in manufacturerIsolationSwitchList" :value="item.name"
                                                :key="item.id">{{ item.name }}</Option>
                                        </Select>
                                    </FormItem>
                                    </Col>
                                </Row>
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="生产编号" prop="productionCode">
                                        <Input v-model="formIsolationSwitchValidate.productionCode"
                                            :maxlength=50 placeholder="请输入生产编号"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="额定电流" prop="ratedCurrent">
                                        <Input v-model="formIsolationSwitchValidate.ratedCurrent" :maxlength=200 placeholder="请输入备注信息"></Input>
                                    </FormItem>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Tab-pane>
                    <Tab-pane label="新增电流互感器" key="key4" name="formCurrentTransValidate">
                        <div>
                            <Form ref="formCurrentTransValidate" :model="formCurrentTransValidate" :rules="ruleCurrentTransValidate"
                                :label-width="100">
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="产品型号" prop="productType">
                                        <Input v-model="formCurrentTransValidate.productType" :maxlength=20
                                            placeholder="请输入产品型号"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="生产厂商" prop="productManufacturer">
                                        <Select v-model="formCurrentTransValidate.productManufacturer">
                                            <Option v-for="item in manufacturerCurrentTransList" :value="item.name"
                                                :key="item.id">{{ item.name }}</Option>
                                        </Select>
                                    </FormItem>
                                    </Col>
                                </Row>
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                        <FormItem label="生产编号" prop="productionCode">
                                            <Input v-model="formCurrentTransValidate.productionCode"
                                                :maxlength=20 placeholder="请输入生产编号"></Input>
                                        </FormItem>
                                    </Col>  
                                    <Col span="10" class='col-wrap'>
                                        <FormItem label="变比" prop="ratio">
                                            <Input v-model="formCurrentTransValidate.ratio"
                                                :maxlength=20 placeholder="请输入变比"></Input>
                                        </FormItem>
                                    </Col>  
                                </Row>
                            </Form>
                        </div>
                    </Tab-pane>
                    <Tab-pane label="新增电压互感器" key="key5" name="formVoltageTransValidate">
                        <div>
                            <Form ref="formVoltageTransValidate" :model="formVoltageTransValidate" :rules="ruleVoltageTransValidate"
                                :label-width="100">
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="产品型号" prop="productType">
                                        <Input v-model="formVoltageTransValidate.productType" :maxlength=20
                                            placeholder="请输入产品型号"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="生产厂商" prop="productManufacturer">
                                        <Select v-model="formVoltageTransValidate.productManufacturer">
                                            <Option v-for="item in manufacturerVoltageTransList" :value="item.name"
                                                :key="item.id">{{ item.name }}</Option>
                                        </Select>
                                    </FormItem>
                                    </Col>
                                </Row>
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="生产编号" prop="productionCode">
                                        <Input v-model="formVoltageTransValidate.productionCode"
                                            :maxlength=20 placeholder="请输入生产编号"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="变比" prop="ratio">
                                        <Input v-model="formVoltageTransValidate.ratio"
                                            :maxlength=20 placeholder="请输入变比"></Input>
                                    </FormItem>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Tab-pane>
                    <Tab-pane label="新增高压熔断器" key="key6" name="formHighVoltageFuseValidate">
                        <div>
                            <Form ref="formHighVoltageFuseValidate" :model="formHighVoltageFuseValidate" :rules="ruleHighVoltageFuseValidate"
                                :label-width="100">
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="产品型号" prop="productType">
                                        <Input v-model="formHighVoltageFuseValidate.productType" :maxlength=20
                                            placeholder="请输入产品型号"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="生产厂商" prop="productManufacturer">
                                        <Select v-model="formHighVoltageFuseValidate.productManufacturer">
                                            <Option v-for="item in manufacturerHighVoltageFuseList" :value="item.name"
                                                :key="item.id">{{ item.name }}</Option>
                                        </Select>
                                    </FormItem>
                                    </Col>
                                </Row>
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="额定电流" prop="ratedCurrent">
                                        <Input v-model="formHighVoltageFuseValidate.ratedCurrent" :maxlength=20
                                            placeholder="请输入额定电流"></Input>
                                    </FormItem>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Tab-pane>
                    <Tab-pane label="新增高压电缆" key="key7" name="formCableValidate">
                        <div>
                            <Form ref="formCableValidate" :model="formCableValidate" :rules="ruleCableValidate"
                                :label-width="100">
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="电缆名称" prop="cableName">
                                        <Input v-model="formCableValidate.cableName" :maxlength=20 placeholder="请输入电缆名称"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="生产厂商" prop="productManufacturer">
                                        <Select v-model="formCableValidate.productManufacturer">
                                            <Option v-for="item in manufacturerOutCableList" :value="item.name" :key="item.id">{{
                                                item.name }}</Option>
                                        </Select>
                                    </FormItem>
                                    </Col>
                                </Row>
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="电缆型号" prop="productType">
                                        <Input v-model="formCableValidate.productType" :maxlength=20 placeholder="请输入电缆类型"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="电缆长度" prop="cableLength">
                                        <Input v-model="formCableValidate.cableLength" number :maxlength=20 placeholder="请输入电缆长度"></Input>
                                    </FormItem>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Tab-pane>
                </Tabs>
            </div>

            <div slot="footer">
                <Button type="info" size="large" @click="handleCancle(tabsName)">
                    返回
                </Button>
                <Button type="info" size="large" @click="handelSaveItems(tabsName)" :loading="loading">
                    保存
                </Button>
            </div>
        </Modal>
        <Modal v-model="showAddOrEditLowItems" width="710" :styles="{top: '100px'}">
            <p slot="header" style="color:#2db7f5;text-align:left">
                <span>{{modelTitle}}</span>
            </p>
            <div class="couplet-card">
                <Tabs active-key="key1" type="card" value="formBreakerValidate" v-model="tabsName" style="height: 100%">
                    <Tab-pane label="新增断路器" key="key1" name="formBreakerValidate">
                        <div>
                            <Form ref="formBreakerValidate" :model="formBreakerValidate" :rules="ruleBreakerValidate"
                                :label-width="100">
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="产品型号" prop="productType">
                                        <Input v-model="formBreakerValidate.productType" :maxlength=200 placeholder="请输入产品型号"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="生产厂商" prop="productManufacturer">
                                        <Select v-model="formBreakerValidate.productManufacturer">
                                            <Option v-for="item in manufacturerBreakerList" :value="item.name" :key="item.id">{{
                                                item.name }}</Option>
                                        </Select>
                                    </FormItem>
                                    </Col>
                                </Row>
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="生产编号" prop="productionCode">
                                        <Input v-model="formBreakerValidate.productionCode" :maxlength=200
                                            placeholder="请输入生产编号"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="额定电流" prop="ratedCurrent">
                                        <Input v-model="formBreakerValidate.ratedCurrent" number :maxlength=50
                                            placeholder="请输入额定电流"></Input>
                                    </FormItem>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Tab-pane>
                    <Tab-pane label="新增隔离开关" key="key3" name="formIsolationSwitchValidate">
                        <div>
                            <Form ref="formIsolationSwitchValidate" :model="formIsolationSwitchValidate" :rules="ruleIsolationSwitchValidate"
                                :label-width="100">
                                <Row :gutter="24" class='row-wrap'>
                                     <Col span="10" class='col-wrap'>
                                    <FormItem label="产品型号" prop="productType">
                                        <Input v-model="formIsolationSwitchValidate.productType" :maxlength=200
                                            placeholder="请输入产品型号"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="生产厂商" prop="productManufacturer">
                                        <Select v-model="formIsolationSwitchValidate.productManufacturer">
                                            <Option v-for="item in manufacturerIsolationSwitchList" :value="item.name"
                                                :key="item.id">{{ item.name }}</Option>
                                        </Select>
                                    </FormItem>
                                    </Col>
                                </Row>
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="生产编号" prop="productionCode">
                                        <Input v-model="formIsolationSwitchValidate.productionCode"
                                            :maxlength=50 placeholder="请输入生产编号"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="额定电流" prop="ratedCurrent">
                                        <Input v-model="formIsolationSwitchValidate.ratedCurrent" :maxlength=200 placeholder="请输入备注信息"></Input>
                                    </FormItem>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Tab-pane>
                    <Tab-pane label="新增电容器" key="key2" name="formCapacitorValidate">
                        <div>
                            <Form ref="formCapacitorValidate" :model="formCapacitorValidate" :rules="ruleCapacitorValidate"
                                :label-width="100">
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="产品型号" prop="productType">
                                        <Input v-model="formCapacitorValidate.productType" :maxlength=200 placeholder="请输入产品型号"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="生产厂商" prop="productManufacturer">
                                        <Select v-model="formCapacitorValidate.productManufacturer">
                                            <Option v-for="item in manufacturerCapacitorList" :value="item.name" :key="item.id">{{
                                                item.name }}</Option>
                                        </Select>
                                    </FormItem>
                                    </Col>
                                </Row>
                                <Row :gutter="24" class='row-wrap'>
                                     <Col span="10" class='col-wrap'>
                                    <FormItem label="生产编号" prop="productionCode">
                                        <Input v-model="formCapacitorValidate.productionCode" :maxlength=200
                                            placeholder="请输入生产编号"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="电容容量" prop="capacitorCapacity">
                                        <Input v-model="formCapacitorValidate.capacitorCapacity" number :maxlength=200
                                            placeholder="请输入电容容量"></Input>
                                    </FormItem>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Tab-pane>
                    
                    <Tab-pane label="新增低压电缆" key="key5" name="formOutCableValidate">
                        <div>
                            <Form ref="formOutCableValidate" :model="formOutCableValidate" :rules="ruleOutCableValidate"
                                :label-width="100">
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="电缆名称" prop="cableName">
                                        <Input v-model="formOutCableValidate.cableName" :maxlength=50 placeholder="请输入电缆名称"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="生产厂商" prop="productManufacturer">
                                        <Select v-model="formOutCableValidate.productManufacturer">
                                            <Option v-for="item in manufacturerOutCableList" :value="item.name" :key="item.id">{{
                                                item.name }}</Option>
                                        </Select>
                                    </FormItem>
                                    </Col>
                                    
                                </Row>
                                <Row :gutter="24" class='row-wrap'>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="电缆型号" prop="productType">
                                        <Input v-model="formOutCableValidate.productType" :maxlength=200 placeholder="请输入电缆类型"></Input>
                                    </FormItem>
                                    </Col>
                                    <Col span="10" class='col-wrap'>
                                    <FormItem label="电缆长度" prop="cableLength">
                                        <Input v-model="formOutCableValidate.cableLength" number :maxlength=20 placeholder="请输入电缆长度"></Input>
                                    </FormItem>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Tab-pane>
                </Tabs>
            </div>
            <div slot="footer">
                <Button type="info" size="large" @click="handleCancle(tabsName)">
                    返回
                </Button>
                <Button type="info" size="large" @click="handelSaveItems(tabsName)" :loading="loading">
                    保存
                </Button>
            </div>
        </Modal>

        <Modal v-model="showAddOrEditHighVoltage" :closable="false" width="800">
            <p slot="header" style="color:#2db7f5;text-align:left">
                <span>{{modelTitle}}</span>
            </p>
            <div>
                <Form ref="formHighValidate" :model="formHighValidate" :rules="ruleHighValidate" :label-width="100">
                    <Row :gutter="24" class='row-wrap'>
                        <Col span="10" class='col-wrap'>
                            <FormItem label="设备名称" prop="deviceName">
                                <Input v-model="formHighValidate.deviceName" :maxlength=20 placeholder="请输入设备名称"></Input>
                            </FormItem>
                        </Col>
                        <Col span="10" class='col-wrap'>
                            <FormItem label="设备编号" prop="deviceNumber">
                                <Input v-model="formHighValidate.deviceNumber" :maxlength=20 placeholder="请输入设备编号"></Input>
                            </FormItem>
                        </Col>
                        
                        
                    </Row>
                    <Row :gutter="24" class='row-wrap'>
                        <Col span="10" class='col-wrap'>
                            <FormItem label="设备型号" prop="productType">
                                <Input v-model="formHighValidate.productType" :maxlength=20 placeholder="请输入产品型号"></Input>
                            </FormItem>
                        </Col>
                        <Col span="10" class='col-wrap'>
                            <FormItem label="生产厂商" prop="manufacturer">
                                <Select v-model="formHighValidate.manufacturer">
                                    <Option v-for="item in manufacturerHighList" :value="item.name" :key="item.id">{{
                                        item.name }}</Option>
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="24" class='row-wrap'>
                        <Col span="10" class='col-wrap'>
                            <FormItem label="生产编号" prop="productionCode">
                                <Input v-model="formHighValidate.productionCode" :maxlength=20 placeholder="请输入生产编号"></Input>
                            </FormItem>
                        </Col>
                        <Col span="10" class='col-wrap'>
                            <FormItem label="出厂日期" prop="manufactureDate">
                                <DatePicker v-model="formHighValidate.manufactureDate" type="date" placeholder="请选择出厂日期"></DatePicker>
                            </FormItem>
                        </Col>
                    </Row>
                    <!-- <Row :gutter="24" class='row-wrap'>
                        <Col span="10" class='col-wrap'>
                            <FormItem label="设备功能" prop="deviceFunction">
                                <Input v-model="formHighValidate.deviceFunction" :maxlength=20 placeholder="请输入设备功能"></Input>
                            </FormItem>
                        </Col>
                    </Row> -->
                </Form>
            </div>
            <div slot="footer">
                <Button type="info" size="large" @click="handleCancle('formHighValidate')">
                    取消
                </Button>
                <Button type="info" size="large" :loading="loading" @click="handelSaveHighVoltage('formHighValidate')">
                    保存
                </Button>
            </div>
        </Modal>

        <Modal v-model="showAddOrEditLowVoltage" :closable="false" width="800">
            <p slot="header" style="color:#2db7f5;text-align:left">
                <span>{{modelTitle}}</span>
            </p>
            <div>
                <Form ref="formLowValidate" :model="formLowValidate" :rules="ruleLowValidate" :label-width="100">
                    <Row :gutter="24" class='row-wrap'>
                        <Col span="10" class='col-wrap'>
                        <FormItem label="生产厂商" prop="manufacturer">
                            <Select v-model="formLowValidate.manufacturer">
                                <Option v-for="item in manufacturerLowList" :value="item.name" :key="item.id">{{
                                    item.name }}</Option>
                            </Select>
                        </FormItem>
                        </Col>
                        <Col span="10" class='col-wrap'>
                        <FormItem label="设备名称" prop="deviceName">
                            <Input v-model="formLowValidate.deviceName" :maxlength=200 placeholder="请输入设备名称"></Input>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="24" class='row-wrap'>
                        <Col span="10" class='col-wrap'>
                        <FormItem label="设备功能" prop="deviceFunction">
                            <Input v-model="formLowValidate.deviceFunction" :maxlength=200 placeholder="请输入设备功能"></Input>
                        </FormItem>
                        </Col>
                        <Col span="10" class='col-wrap'>
                        <FormItem label="产品型号" prop="productType">
                            <Input v-model="formLowValidate.productType" :maxlength=200 placeholder="请输入产品型号"></Input>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="24" class='row-wrap'>
                        <Col span="10" class='col-wrap'>
                        <FormItem label="设备编号" prop="productionCode">
                            <Input v-model="formLowValidate.productionCode" :maxlength=200 placeholder="请输入设备编号"></Input>
                        </FormItem>
                        </Col>
                        <Col span="10" class='col-wrap'>
                        <FormItem label="出厂日期" prop="manufactureDate">
                            <DatePicker v-model="formLowValidate.manufactureDate" type="date" placeholder="请选择出厂日期"></DatePicker>
                        </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div slot="footer">
                <Button type="info" size="large" @click="handleCancle('formLowValidate')">
                    取消
                </Button>
                <Button type="info" size="large" @click="handelSaveLowVoltage('formLowValidate')" :loading="loading">
                    保存
                </Button>
            </div>
        </Modal>

        <Modal v-model="showAddOrEditTransformer" :closable="false" width="800">
            <p slot="header" style="color:#2db7f5;text-align:left">
                <span>新增变压设备信息</span>
            </p>
            <div>
                <Form ref="formTransValidate" :model="formTransValidate" :rules="ruleTransValidate" :label-width="100">
                    <Row :gutter="24" class='row-wrap'>
                        <Col span="10" class='col-wrap'>
                        <FormItem label="生产厂商" prop="capacitorManufacturer">
                            <Select v-model="formTransValidate.capacitorManufacturer">
                                <Option v-for="item in manufacturerTransList" :value="item.name" :key="item.id">{{
                                    item.name }}</Option>
                            </Select>
                        </FormItem>
                        </Col>
                        <Col span="10" class='col-wrap'>
                        <FormItem label="设备名称" prop="deviceName">
                            <Input v-model="formTransValidate.deviceName" :maxlength=20 placeholder="请输入设备名称"></Input>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="24" class='row-wrap'>
                        <Col span="10" class='col-wrap'>
                        <FormItem label="设备容量(kVA) " prop="deviceCapaticy">
                            <Input v-model="formTransValidate.deviceCapaticy" number :maxlength=5 placeholder="请输入设备容量 kVA"></Input>
                        </FormItem>
                        </Col>
                        <Col span="10" class='col-wrap'>
                        <FormItem label="设备型号" prop="deviceType">
                            <Input v-model="formTransValidate.deviceType" :maxlength=20 placeholder="请输入设备型号"></Input>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="24" class='row-wrap'>
                        <Col span="10" class='col-wrap'>
                        <FormItem label="联结组标" prop="connectionSymbol">
                            <Input v-model="formTransValidate.connectionSymbol" :maxlength=20 placeholder="请输入联结组标"></Input>
                        </FormItem>
                        </Col>
                        <Col span="10" class='col-wrap'>
                        <FormItem label="阻抗" prop="impedance">
                            <Input v-model="formTransValidate.impedance" :maxlength=20 placeholder="请输入阻抗"></Input>
                        </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="24" class='row-wrap'>
                        <Col span="10" class='col-wrap'>
                        <FormItem label="出厂编号" prop="productionCode">
                            <Input v-model="formTransValidate.productionCode" :maxlength=20 placeholder="请输入出厂编号"></Input>
                        </FormItem>
                        </Col>
                        <Col span="10" class='col-wrap'>
                        <FormItem label="出厂日期" prop="manufactureDate">
                            <DatePicker v-model="formTransValidate.manufactureDate" type="date" placeholder="请选择出厂日期"></DatePicker>
                        </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div slot="footer">
                <Button type="info" size="large" @click="handleCancle('formTransValidate')">
                    取消
                </Button>
                <Button type="info" size="large" @click="handelSaveTransformer('formTransValidate')" :loading="loading">
                    保存
                </Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import expandHighRow from './high-expend.vue'
    import expandLowRow from './low-expend.vue'
    import {
        getHighVoltageInformationList,
        addHighVoltageInformation,
        delHighVoltageInformation,
        updataHighVoltageInformation,
        addHighVoltageItems,
        updataHighVoltageItems,
        addCurrentTransformer,
        updataCurrentTransformer,
        addVoltageTransformer,
        updataVoltageTransformer,
        addHighVoltageFuse,
        updataHighVoltageFuse,
        addCable,
        updataCable
    } from '@/api/highVoltageInformation'
    import {
        getLowVoltageInformationList,
        addLowVoltageInformation,
        delLowVoltageInformation,
        updataLowVoltageInformation,
        createBreaker,
        updateBreaker,
        createCapacitor,
        updateCapacitor,
        createIsolationSwitch,
        updateIsolationSwitch,
        createOutCable,
        updateOutCable
    } from '@/api/lowVoltageInformation'
    import {
        getTransInformationList,
        addTransInformation,
        delTransInformation,
        updataTransInformation
    } from '@/api/transInformation'
    import {
        getDataDicConfigList
    } from '@/api/data'
    import {
        formatData
    } from '@/libs/tools'
    export default {
        name: 'distribution-detail',
        props: {
            boxTransformerId: {
                default: ''
            },
            isEdits: {
                type: Boolean,
                default: false
            }
        },
        data() {
            const validateNumber = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入,不能为空'))
                } else {
                    if (!Number.isInteger(+value)) {
                        callback(new Error('请输入数字值'))
                    }
                    callback()
                }
            }
            return {
                columns1: [{
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandHighRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {
                        title: '设备名称',
                        key: 'deviceName',
                        align: 'center'
                    },
                    {
                        title: '设备编号',
                        key: 'deviceNumber',
                        align: 'center'
                    },
                    {
                        title: '设备型号',
                        key: 'productType',
                        align: 'center'
                    },
                    {
                        title: '生产厂商',
                        key: 'manufacturer',
                        align: 'center'
                    },
                    {
                        title: '生产编号',
                        key: 'productionCode',
                        align: 'center'
                    },
                    {
                        title: '生产日期',
                        key: 'manufactureDate',
                        align: 'center'
                    },
                    // {
                    //     title: '设备功能',
                    //     key: 'deviceFunction',
                    //     align: 'center'
                    // },
                    {
                        title: '操作',
                        key: 'action',
                        width: 220,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },

                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.addHighItems(params.index)
                                        }
                                    }
                                }, '添加组件'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.editHigh(params.index)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(1, params.index)
                                        }
                                    }
                                }, '删除')
                            ])
                        }
                    }
                ],
                columns2: [{
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandLowRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                     {
                        title: '设备名称',
                        key: 'deviceFunction',
                        align: 'center'
                    },
                    {
                        title: '设备编号',
                        key: 'deviceName',
                        align: 'center'
                    },
                    {
                        title: '设备型号',
                        key: 'productType',
                        align: 'center'
                    },
                    {
                        title: '生产厂商',
                        key: 'manufacturer',
                        align: 'center'

                    },
                    {
                        title: '生产编号',
                        key: 'productionCode',
                        align: 'center'
                    },
                    {
                        title: '出厂日期',
                        key: 'manufactureDate',
                        align: 'center'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 220,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },

                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.addLowItems(params.index)
                                        }
                                    }
                                }, '添加组件'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.editLow(params.index)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(2, params.index)
                                        }
                                    }
                                }, '删除')
                            ])
                        }
                    }
                ],
                columns3: [{
                        title: '序号',
                        key: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '设备名称',
                        key: 'deviceName',
                        align: 'center'
                    },
                     {
                        title: '设备型号',
                        key: 'deviceType',
                        align: 'center'
                    },
                    {
                        title: '设备容量 kVA',
                        key: 'deviceCapaticy',
                        align: 'center'
                    },
                     {
                        title: '联结组标',
                        key: 'connectionSymbol',
                        align: 'center'
                    },
                     {
                        title: '阻抗',
                        key: 'impedance',
                        align: 'center'
                    },
                    {
                        title: '生产厂商',
                        key: 'capacitorManufacturer',
                        align: 'center'

                    },
                     {
                        title: '生产编号',
                        key: 'productionCode',
                        align: 'center'
                    },
                    {
                        title: '出厂日期',
                        key: 'manufactureDate',
                        align: 'center'
                    },
                   
                    {
                        title: '操作',
                        key: 'action',
                        width: 220,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.editTrans(params.index)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(3, params.index)
                                        }
                                    }
                                }, '删除')
                            ])
                        }
                    }
                ],
                listData: [],
                listData2: [],
                listData3: [],
                manufacturerHighList: [],
                manufacturerLowList: [],
                manufacturerTransList: [],
                manufacturerLoadSwitchList: [],
                manufacturerCurrentTransList: [],
                manufacturerVoltageTransList: [],
                manufacturerHighVoltageFuseList: [],
                manufacturerCableList: [],
                manufacturerBreakerList: [],
                manufacturerCapacitorList: [],
                manufacturerIsolationSwitchList: [],
                manufacturerOutCableList: [],
                data: {},
                modelTitle: '',
                tabsName: '',
                add: false, // 点击添加切换
                isEdit: false, // 点击编辑切换
                isLoading: false,
                loading: false,
                queryParam: {
                    'maxResultCount': 50,
                    'filter': '',
                    'pageNumber': 0,
                    'skipCount': 0
                },
                showAddOrEditHighVoltage: false,
                showAddOrEditLowVoltage: false,
                showAddOrEditTransformer: false,
                showAddOrEditHighItems: false,
                showAddOrEditLowItems: false,
                selectData: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                deletteModelStatus: false, // 删除弹出框控制
                delIndex: '', // 删除选项的index
                delType: 0,
                type: 2,
                formHighValidate: {
                    boxTransformerOrPowerDistributionRoomId: this.boxTransformerId,
                    deviceFunction:'暂时不显示',
                    belongType: 2
                },
                formLowValidate: {
                    boxTransformerOrPowerDistributionRoomId: this.boxTransformerId,
                    belongType: 2
                },
                formTransValidate: {
                    boxTransformerOrPowerDistributionRoomId: this.boxTransformerId,
                    belongType: 2
                },
                formLoadSwitchValidate: {
                    powerEquipmentComponentType: 1,
                    voltageType: 1
                },
                formCurrentTransValidate: {
                    powerEquipmentComponentType: 2,
                    voltageType: 1
                },
                formVoltageTransValidate: {
                    powerEquipmentComponentType: 3,
                    voltageType: 1
                },
                formHighVoltageFuseValidate: {
                    powerEquipmentComponentType: 4,
                    voltageType: 1
                },
                formCableValidate: {
                    powerEquipmentComponentType: 5,
                    voltageType: 1
                },
                formBreakerValidate: {
                    powerEquipmentComponentType: 6
                },
                formCapacitorValidate: {
                    powerEquipmentComponentType: 7,
                    voltageType: 2
                },
                formIsolationSwitchValidate: {
                    powerEquipmentComponentType: 8
                },
                formOutCableValidate: {
                    powerEquipmentComponentType: 9,
                    voltageType: 2
                },
                ruleHighValidate: {
                    // manufacturer: [{
                    //     required: true,
                    //     message: '请选择生产厂商',
                    //     trigger: 'blur'
                    // }],
                    // deviceNumber: [{
                    //     required: true,
                    //     message: '请输入生产编号',
                    //     trigger: 'blur'
                    // }],
                    // deviceName: [{
                    //     required: true,
                    //     message: '请输入设备名称',
                    //     trigger: 'blur'
                    // }],
                    // deviceFunction: [{
                    //     required: true,
                    //     message: '请输入设备功能',
                    //     trigger: 'blur'
                    // }],
                    // productType: [{
                    //     required: true,
                    //     message: '请输入产品型号',
                    //     trigger: 'blur'
                    // }]
                },
                ruleLowValidate: {
                    // manufacturer: [{
                    //     required: true,
                    //     message: '请选择生产厂商',
                    //     trigger: 'blur'
                    // }],
                    // productionCode: [{
                    //     required: true,
                    //     message: '请输入生产编号',
                    //     trigger: 'blur'
                    // }],
                    // productType: [{
                    //     required: true,
                    //     message: '请输入产品型号',
                    //     trigger: 'blur'
                    // }],
                    // deviceName: [{
                    //     required: true,
                    //     message: '请输入设备名称',
                    //     trigger: 'blur'
                    // }],
                    // deviceFunction: [{
                    //     required: true,
                    //     message: '请选择设备功能',
                    //     trigger: 'blur'
                    // }],
                    // manufactureDate: [{
                    //     required: true,
                    //     type: 'date',
                    //     message: '请选择出厂日期',
                    //     trigger: 'change'
                    // }]
                },
                ruleTransValidate: {
                    // deviceName: [{
                    //     required: true,
                    //     message: '请选择设备名称',
                    //     trigger: 'blur'
                    // }],
                    // capacitorManufacturer: [{
                    //     required: true,
                    //     message: '请选择生产厂商',
                    //     trigger: 'blur'
                    // }],
                    // connectionSymbol: [{
                    //     required: true,
                    //     message: '请选择联结组标',
                    //     trigger: 'blur'
                    // }],
                    // impedance: [{
                    //     required: true,
                    //     message: '请输入阻抗',
                    //     trigger: 'blur'
                    // }],
                    // productionCode: [{
                    //     required: true,
                    //     message: '请选择出厂编号',
                    //     trigger: 'blur'
                    // }],
                    // manufactureDate: [{
                    //     required: true,
                    //     type: 'date',
                    //     message: '请选择出厂日期',
                    //     trigger: 'change'
                    // }],
                    // deviceCapaticy: [{
                    //     validator: validateNumber,
                    //     trigger: 'change'
                    // }],
                    // deviceType: [{
                    //     required: true,
                    //     message: '请输入产品型号',
                    //     trigger: 'blur'
                    // }]
                },
                ruleLoadSwitchValidate: {
                    // loadSwitchManufacturer: [{
                    //     required: true,
                    //     message: '请选择生产厂商',
                    //     trigger: 'blur'
                    // }],
                    // loadSwitchProductionCode: [{
                    //     required: true,
                    //     message: '请输入生产编号',
                    //     trigger: 'blur'
                    // }],
                    // loadSwitchType: [{
                    //     required: true,
                    //     message: '请输入产品型号',
                    //     trigger: 'blur'
                    // }]
                },
                ruleCurrentTransValidate: {
                    // currentTransformerManufacturer: [{
                    //     required: true,
                    //     message: '请选择生产厂商',
                    //     trigger: 'blur'
                    // }],
                    // currentTransformerProductionCode: [{
                    //     required: true,
                    //     message: '请输入生产编号',
                    //     trigger: 'blur'
                    // }],
                    // currentTransformerType: [{
                    //     required: true,
                    //     message: '请输入产品型号',
                    //     trigger: 'blur'
                    // }]
                },
                ruleVoltageTransValidate: {
                    // voltageTransformerManufacturer: [{
                    //     required: true,
                    //     message: '请选择生产厂商',
                    //     trigger: 'blur'
                    // }],
                    // voltageTransformerProductionCode: [{
                    //     required: true,
                    //     message: '请输入生产编号',
                    //     trigger: 'blur'
                    // }],
                    // voltageTransformerType: [{
                    //     required: true,
                    //     message: '请输入产品型号',
                    //     trigger: 'blur'
                    // }]
                },
                ruleHighVoltageFuseValidate: {
                    // highVoltageFuseManufacturer: [{
                    //     required: true,
                    //     message: '请选择生产厂商',
                    //     trigger: 'blur'
                    // }],
                    // highVoltageFuseType: [{
                    //     required: true,
                    //     message: '请输入产品型号',
                    //     trigger: 'blur'
                    // }]
                },
                ruleCableValidate: {
                    // cableName: [{
                    //     required: true,
                    //     message: '请选择电缆名称',
                    //     trigger: 'blur'
                    // }],
                    // cableLength: [{
                    //     validator: validateNumber,
                    //     trigger: 'change'
                    // }],
                    // cableType: [{
                    //     required: true,
                    //     message: '请输入产品型号',
                    //     trigger: 'blur'
                    // }]
                },
                ruleBreakerValidate: {
                    // breakerManufacturer: [{
                    //     required: true,
                    //     message: '请选择生产厂商',
                    //     trigger: 'blur'
                    // }],
                    // breakerProductionCode: [{
                    //     required: true,
                    //     message: '请输入生产编号',
                    //     trigger: 'blur'
                    // }],
                    // breakerType: [{
                    //     required: true,
                    //     message: '请输入产品型号',
                    //     trigger: 'blur'
                    // }]
                },
                ruleCapacitorValidate: {
                    // capacitorManufacturer: [{
                    //     required: true,
                    //     message: '请选择生产厂商',
                    //     trigger: 'blur'
                    // }],
                    // capacitorProductionCode: [{
                    //     required: true,
                    //     message: '请输入生产编号',
                    //     trigger: 'blur'
                    // }],
                    // capacitorCapacity: [{
                    //     validator: validateNumber,
                    //     trigger: 'change'
                    // }],
                    // capacitorType: [{
                    //     required: true,
                    //     message: '请输入产品型号',
                    //     trigger: 'blur'
                    // }]
                },
                ruleIsolationSwitchValidate: {
                    // isolationSwitchManufacturer: [{
                    //     required: true,
                    //     message: '请选择生产厂商',
                    //     trigger: 'blur'
                    // }],
                    // isolationSwitchProductionCode: [{
                    //     required: true,
                    //     message: '请输入生产编号',
                    //     trigger: 'blur'
                    // }],
                    // isolationSwitchType: [{
                    //     required: true,
                    //     message: '请输入产品型号',
                    //     trigger: 'blur'
                    // }]
                },
                ruleOutCableValidate: {
                    // outCableManufacturer: [{
                    //     required: true,
                    //     message: '请选择生产厂商',
                    //     trigger: 'blur'
                    // }],
                    // lineName: [{
                    //     required: true,
                    //     message: '请输入线路名称',
                    //     trigger: 'blur'
                    // }],
                    // outCableType: [{
                    //     required: true,
                    //     message: '请输入产品型号',
                    //     trigger: 'blur'
                    // }]
                }
            }
        },
        methods: {
            init() {
                this.selectData.forEach(element => {
                    this.getDataDicConfigs(element)
                })
            },
            getDataDicConfigs(dictionaryType) {
                return new Promise((resolve, reject) => {
                    getDataDicConfigList(dictionaryType).then(
                        res => {
                            const data = res.data.result.items
                            this.selectedData(data, dictionaryType)
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
            selectedData(data, dictionaryType) {
                switch (dictionaryType) {
                    case 6:
                        this.manufacturerLoadSwitchList = data
                        break
                    case 7:
                        this.manufacturerCurrentTransList = data
                        break
                    case 8:
                        this.manufacturerVoltageTransList = data
                        break
                    case 9:
                        this.manufacturerHighVoltageFuseList = data
                        break
                    case 10:
                        this.manufacturerTransList = data
                        break
                    case 11:
                        this.manufacturerHighList = data
                        break
                    case 12:
                        this.manufacturerLowList = data 
                        break
                    case 13:
                        this.manufacturerIsolationSwitchList = data
                        break
                    case 14:
                        this.manufacturerBreakerList = data
                        break
                    case 15:
                        this.manufacturerOutCableList = data
                        break
                    case 16:
                        this.manufacturerCapacitorList = data
                        break
                    default:
                        break
                }
            },
            // 删除
            remove(type, index) {
                this.delIndex = index
                this.delType = type
                this.deletteModelStatus = true
            },
            // 取消删除
            cancelDel() {
                this.deletteModelStatus = false
            },
            // 确认删除
            sureDel() {
                this.isLoading = true
                let index = this.delIndex
                switch (this.delType) {
                    case 1:
                        this.delHighInfo(index)
                        break
                    case 2:
                        this.delLowInfo(index)
                        break
                    case 3:
                        this.delTransInfo(index)
                        break

                    default:
                        break
                }
            },
            // 删除高压信息
            delHighInfo(index) {
                return new Promise((resolve, reject) => {
                    delHighVoltageInformation(this.listData[index].id).then(
                            res => {
                                this.isLoading = false
                                this.deletteModelStatus = false
                                this.$Message.success('删除成功！')
                                // 删除成功,页面删除点击的那行，此时要取消选中行，隐藏修改和删除按钮
                                this.listData.splice(index, 1)
                                resolve()
                            },
                            error => {
                                this.$Message.error(error.error.message)
                                resolve()
                            })
                        .catch(error => {
                            this.$Message.error('处理错误！')
                            reject(error)
                        })
                })
            },
            // 删除低压信息
            delTransInfo(index) {
                return new Promise((resolve, reject) => {
                    delTransInformation(this.listData3[index].id).then(
                            res => {
                                this.isLoading = false
                                this.deletteModelStatus = false
                                this.$Message.success('删除成功！')
                                // 删除成功,页面删除点击的那行，此时要取消选中行，隐藏修改和删除按钮
                                this.listData3.splice(index, 1)
                                resolve()
                            },
                            error => {
                                this.$Message.error(error.error.message)
                                resolve()
                            })
                        .catch(error => {
                            this.$Message.error('处理错误！')
                            reject(error)
                        })
                })
            },
            // 删除变压信息
            delLowInfo(index) {
                return new Promise((resolve, reject) => {
                    delLowVoltageInformation(this.listData2[index].id).then(
                            res => {
                                this.isLoading = false
                                this.deletteModelStatus = false
                                this.$Message.success('删除成功！')
                                // 删除成功,页面删除点击的那行，此时要取消选中行，隐藏修改和删除按钮
                                this.listData2.splice(index, 1)
                                resolve()
                            },
                            error => {
                                this.$Message.error(error.error.message)
                                resolve()
                            })
                        .catch(error => {
                            this.$Message.error('处理错误！')
                            reject(error)
                        })
                })
            },
            // 新增高压组件
            addHighItems(index) {
                const highVInfoId = this.listData[index].id
                this.formLoadSwitchValidate.voltageInformationId = highVInfoId
                this.formBreakerValidate.VoltageInformationId = highVInfoId
                this.formIsolationSwitchValidate.VoltageInformationId = highVInfoId
                this.formBreakerValidate.voltageType = 1
                this.formIsolationSwitchValidate.voltageType = 1
                this.formCurrentTransValidate.voltageInformationId = highVInfoId
                this.formVoltageTransValidate.voltageInformationId = highVInfoId
                this.formHighVoltageFuseValidate.voltageInformationId = highVInfoId
                this.formCableValidate.voltageInformationId = highVInfoId
                this.showAddOrEditHighItems = true
                this.tabsName = 'formLoadSwitchValidate'
                this.modelTitle = '新增高压组件'
            },
            // 新增低压组件
            addLowItems(index) {
                const lowVInfoId = this.listData2[index].id
                this.formBreakerValidate.voltageInformationId = lowVInfoId
                this.formBreakerValidate.voltageType = 2
                this.formIsolationSwitchValidate.voltageType = 2
                this.formCapacitorValidate.voltageInformationId = lowVInfoId
                this.formIsolationSwitchValidate.voltageInformationId = lowVInfoId
                this.formOutCableValidate.voltageInformationId = lowVInfoId
                this.showAddOrEditLowItems = true
                this.tabsName = 'formBreakerValidate'
                this.modelTitle = '新增低压组件'
            },
            // 编辑高压
            editHigh(index) {
                Object.assign(this.formHighValidate, this.listData[index])
                this.showAddOrEditHighVoltage = true
                this.isEdit = true
                this.modelTitle = '编辑高压信息'
            },
            // 编辑低压
            editLow(index) {
                Object.assign(this.formLowValidate, this.listData2[index])
                this.showAddOrEditLowVoltage = true
                this.isEdit = true
                this.modelTitle = '编辑低压信息'
            },
            // 编辑变压
            editTrans(index) {
                Object.assign(this.formTransValidate, this.listData3[index])
                this.showAddOrEditTransformer = true
                this.isEdit = true
                this.modelTitle = '编辑变压信息'
            },
            // 保存组件
            handelSaveItems(name) {
                switch (name) {
                    case 'formLoadSwitchValidate':
                        this.saveLoadSwitch(name)
                        break
                    case 'formCurrentTransValidate':
                        this.saveCurrentTrans(name)
                        break
                    case 'formVoltageTransValidate':
                        this.saveVoltageTrans(name)
                        break
                    case 'formHighVoltageFuseValidate':
                        this.saveHighVoltageFuse(name)
                        break
                    case 'formCableValidate':
                        this.saveCable(name)
                        break
                    case 'formBreakerValidate':
                        this.saveBreaker(name)
                        break
                    case 'formCapacitorValidate':
                        this.saveCapacitor(name)
                        break
                    case 'formIsolationSwitchValidate':
                        this.saveIsolationSwitch(name)
                        break
                    case 'formOutCableValidate':
                        this.saveOutCable(name)
                        break

                    default:
                        break
                }
            },
            // 保存断路器
            saveBreaker(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.loading = true
                        if (this.isEdit) {
                            return new Promise((resolve, reject) => {
                                updataHighVoltageItems(this.formBreakerValidate).then(
                                    res => {
                                        this.$Message.success('修改成功')
                                        this.isEdit = false
                                        this.loading = false
                                        this.$refs[name].resetFields()
                                        this.getLowVoltageInfoData()
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
                                addHighVoltageItems(this.formBreakerValidate).then(
                                    res => {
                                        this.loading = false
                                        this.$Message.success('创建成功')
                                        this.$refs[name].resetFields()
                                        this.getLowVoltageInfoData()
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
            },
            // 保存电容器
            saveCapacitor(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.loading = true
                        if (this.isEdit) {
                            return new Promise((resolve, reject) => {
                                updataHighVoltageItems(this.formCapacitorValidate).then(
                                    res => {
                                        this.$Message.success('修改成功')
                                        this.isEdit = false
                                        this.loading = false
                                        this.$refs[name].resetFields()
                                        this.getLowVoltageInfoData()
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
                                addHighVoltageItems(this.formCapacitorValidate).then(
                                    res => {
                                        this.loading = false
                                        this.$Message.success('创建成功')
                                        this.$refs[name].resetFields()
                                        this.getLowVoltageInfoData()
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
            },
            // 保存隔离开关
            saveIsolationSwitch(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.loading = true
                        if (this.isEdit) {
                            return new Promise((resolve, reject) => {
                                updataHighVoltageItems(this.formIsolationSwitchValidate).then(
                                    res => {
                                        this.$Message.success('修改成功')
                                        this.isEdit = false
                                        this.loading = false
                                        this.$refs[name].resetFields()
                                        this.getLowVoltageInfoData()
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
                                addHighVoltageItems(this.formIsolationSwitchValidate).then(
                                    res => {
                                        this.loading = false
                                        this.$Message.success('创建成功')
                                        this.$refs[name].resetFields()
                                        this.getLowVoltageInfoData()
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
            },
            // 保存出线电缆
            saveOutCable(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.loading = true
                        if (this.isEdit) {
                            return new Promise((resolve, reject) => {
                                updataHighVoltageItems(this.formOutCableValidate).then(
                                    res => {
                                        this.$Message.success('修改成功')
                                        this.isEdit = false
                                        this.loading = false
                                        this.$refs[name].resetFields()
                                        this.getLowVoltageInfoData()
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
                                addHighVoltageItems(this.formOutCableValidate).then(
                                    res => {
                                        this.loading = false
                                        this.$Message.success('创建成功')
                                        this.$refs[name].resetFields()
                                        this.getLowVoltageInfoData()
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
            },
            // 保存负荷开关
            saveLoadSwitch(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.loading = true
                        if (this.isEdit) {
                            return new Promise((resolve, reject) => {
                                updataHighVoltageItems(this.formLoadSwitchValidate).then(
                                    res => {
                                        this.$Message.success('修改成功')
                                        this.isEdit = false
                                        this.loading = false
                                        this.$refs[name].resetFields()
                                        this.getHighVoltageInfoData()
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
                                addHighVoltageItems(this.formLoadSwitchValidate).then(
                                    res => {
                                        this.loading = false
                                        this.$Message.success('创建成功')
                                        this.$refs[name].resetFields()
                                        this.getHighVoltageInfoData()
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
            },
            // 保存电流互感器
            saveCurrentTrans(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.loading = true
                        if (this.isEdit) {
                            return new Promise((resolve, reject) => {
                                updataHighVoltageItems(this.formCurrentTransValidate).then(
                                    res => {
                                        this.$Message.success('修改成功')
                                        this.isEdit = false
                                        this.loading = false
                                        this.$refs[name].resetFields()
                                        this.getHighVoltageInfoData()
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
                                addHighVoltageItems(this.formCurrentTransValidate).then(
                                    res => {
                                        this.loading = false
                                        this.$Message.success('创建成功')
                                        this.$refs[name].resetFields()
                                        this.getHighVoltageInfoData()
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
            },
            // 保存电压互感器
            saveVoltageTrans(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.loading = true
                        if (this.isEdit) {
                            return new Promise((resolve, reject) => {
                                updataHighVoltageItems(this.formVoltageTransValidate).then(
                                    res => {
                                        this.$Message.success('修改成功')
                                        this.isEdit = false
                                        this.loading = false
                                        this.$refs[name].resetFields()
                                        this.getHighVoltageInfoData()
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
                                addHighVoltageItems(this.formVoltageTransValidate).then(
                                    res => {
                                        this.loading = false
                                        this.$Message.success('创建成功')
                                        this.$refs[name].resetFields()
                                        this.getHighVoltageInfoData()
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
            },
            // 保存高压熔断器
            saveHighVoltageFuse(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.loading = true
                        if (this.isEdit) {
                            return new Promise((resolve, reject) => {
                                updataHighVoltageItems(this.formHighVoltageFuseValidate).then(
                                    res => {
                                        this.$Message.success('修改成功')
                                        this.isEdit = false
                                        this.loading = false
                                        this.$refs[name].resetFields()
                                        this.getHighVoltageInfoData()
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
                                addHighVoltageItems(this.formHighVoltageFuseValidate).then(
                                    res => {
                                        this.loading = false
                                        this.$Message.success('创建成功')
                                        this.$refs[name].resetFields()
                                        this.getHighVoltageInfoData()
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
            },
            // 保存电缆
            saveCable(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.loading = true
                        if (this.isEdit) {
                            return new Promise((resolve, reject) => {
                                updataHighVoltageItems(this.formCableValidate).then(
                                    res => {
                                        this.$Message.success('修改成功')
                                        this.isEdit = false
                                        this.loading = false
                                        this.$refs[name].resetFields()
                                        this.getHighVoltageInfoData()
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
                                addHighVoltageItems(this.formCableValidate).then(
                                    res => {
                                        this.loading = false
                                        this.$Message.success('创建成功')
                                        this.$refs[name].resetFields()
                                        this.getHighVoltageInfoData()
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
            },
            // 保存高压
            handelSaveHighVoltage(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.loading = true
                        if (this.isEdit) {
                            return new Promise((resolve, reject) => {
                                updataHighVoltageInformation(this.formHighValidate).then(
                                    res => {
                                        this.$Message.success('修改成功')
                                        this.showAddOrEditHighVoltage = false
                                        this.isEdit = false
                                        this.loading = false
                                        this.$refs[name].resetFields()
                                        this.getHighVoltageInfoData()
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
                                addHighVoltageInformation(this.formHighValidate).then(
                                    res => {
                                        this.$Message.success('创建成功')
                                        this.showAddOrEditHighVoltage = false
                                        this.loading = false
                                        this.$refs[name].resetFields()
                                        this.getHighVoltageInfoData()
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
            },
            // 保存低压
            handelSaveLowVoltage(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.loading = true
                        if (this.isEdit) {
                            return new Promise((resolve, reject) => {
                                updataLowVoltageInformation(this.formLowValidate).then(
                                    res => {
                                        this.$Message.success('修改成功')
                                        this.showAddOrEditLowVoltage = false
                                        this.isEdit = false
                                        this.loading = false
                                        this.$refs[name].resetFields()
                                        this.getLowVoltageInfoData()
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
                                addLowVoltageInformation(this.formLowValidate).then(
                                    res => {
                                        this.$Message.success('创建成功')
                                        this.showAddOrEditLowVoltage = false
                                        this.loading = false
                                        this.$refs[name].resetFields()
                                        this.getLowVoltageInfoData()
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
            },
            // 保存变压
            handelSaveTransformer(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.loading = true
                        if (this.isEdit) {
                            return new Promise((resolve, reject) => {
                                updataTransInformation(this.formTransValidate).then(
                                    res => {
                                        this.$Message.success('修改成功')
                                        this.showAddOrEditTransformer = false
                                        this.isEdit = false
                                        this.loading = false
                                        this.$refs[name].resetFields()
                                        this.getTransInfoData()
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
                                addTransInformation(this.formTransValidate).then(
                                    res => {
                                        this.$Message.success('创建成功')
                                        this.showAddOrEditTransformer = false
                                        this.loading = false
                                        this.$refs[name].resetFields()
                                        this.getTransInfoData()
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
            },
            // 取消
            handleCancle(name) {
                this.showAddOrEditHighVoltage = false
                this.showAddOrEditLowVoltage = false
                this.showAddOrEditTransformer = false
                this.showAddOrEditHighItems = false
                this.showAddOrEditLowItems = false
                this.$refs[name].resetFields()
            },
            // 根据详细信息
            getListData() {
                this.isLoading = true
                this.getHighVoltageInfoData()
                this.getLowVoltageInfoData()
                this.getTransInfoData()
            },
            // 获取高压信息
            getHighVoltageInfoData() {
                return new Promise((resolve, reject) => {
                    getHighVoltageInformationList(this.boxTransformerId, this.queryParam, this.type).then(
                            res => {
                                this.isLoading = false
                                this.listData = res.data.result.items
                                this.listData.forEach((element) => {
                                    // 格式化时间
                                    element.manufactureDate = formatData(element.manufactureDate, 'day')
                                })
                                resolve()
                            },
                            error => {
                                this.$Message.error(error.error.message)
                                resolve()
                            })
                        .catch(error => {
                            this.$Message.error('服务器错误')
                            reject(error)
                        })
                })
            },
            // 获取低压信息
            getLowVoltageInfoData() {
                return new Promise((resolve, reject) => {
                    getLowVoltageInformationList(this.boxTransformerId, this.queryParam, this.type).then(
                            res => {
                                this.isLoading = false
                                this.listData2 = res.data.result.items
                                this.listData2.forEach((element) => {
                                    // 格式化时间
                                    element.manufactureDate = formatData(element.manufactureDate, 'day')
                                })
                                resolve()
                            },
                            error => {
                                this.$Message.error(error.error.message)
                                resolve()
                            })
                        .catch(error => {
                            this.$Message.error('服务器错误')
                            reject(error)
                        })
                })
            },
            // 获取变压信息
            getTransInfoData() {
                return new Promise((resolve, reject) => {
                    getTransInformationList(this.boxTransformerId, this.queryParam, this.type).then(
                            res => {
                                this.isLoading = false
                                this.listData3 = res.data.result.items
                                let size = this.queryParam.skipCount + 1
                                this.listData3.forEach((element) => {
                                    element.index = size++
                                    // 格式化时间
                                    element.manufactureDate = formatData(element.manufactureDate, 'day')
                                })
                                resolve()
                            },
                            error => {
                                this.$Message.error(error.error.message)
                                resolve()
                            })
                        .catch(error => {
                            this.$Message.error('服务器错误')
                            reject(error)
                        })
                })
            },
            // 新增高压
            addHighDataClick() {
                this.add = true
                this.showAddOrEditHighVoltage = true
                this.isEdit = false
                this.modelTitle = '新增高压信息'
            },
            // 新增低压详情
            addLowDataClick() {
                this.add = true
                this.showAddOrEditLowVoltage = true
                this.isEdit = false
                this.modelTitle = '新增低压设备信息'
            },
            // 新增变压详情
            addTransDataClick() {
                this.add = true
                this.showAddOrEditTransformer = true
                this.isEdit = false
                this.modelTitle = '新增变压信息'
            }
        },
        components: {},
        mounted() {
            this.init()
        },
        watch: {
            isEdits: {
                immediate: true,
                handler(curVal, oldVal) {
                    if (this.isEdits) {
                        this.getListData()
                    }
                }
            }
        }

    }

</script>

<style lang='less' scoped>
    .control-group {
        height: 55px;

        .error_text {
            color: red;
            padding-left: 110px;
        }
    }

    .list {
        width: 98%;
        margin: 0px auto;
        padding: 20px 0;
        position: relative;
    }

    .dec {
        display: inline-block;
        vertical-align: middle;
        width: 90px;
        text-align: right;
        height: 25px;
        line-height: 25px;
        font-size: 14px;
        margin-right: 10px;

        .symbol {
            color: red;
        }
    }

</style>
