<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    :collapse="($store.state.tap as any).isCollapse"
    unique-opened
    background-color="$aside-bgcolor"
    text-color="#f0f0f0"
    :collapse-transition="false"
    router
  >
    <el-menu-item index="/">
      <el-icon><setting /></el-icon>
      <template #title>
        首页
      </template>
    </el-menu-item>
    <el-sub-menu index="/product">
      <template #title>
        <el-icon><location /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">
        <el-icon><setting /></el-icon>
        <template #title>
          商品管理
        </template>
      </el-menu-item>
      <el-menu-item index="/product/product_classify">
        <el-icon><setting /></el-icon>
        <template #title>
          商品分类
        </template>
      </el-menu-item>
      <el-menu-item index="/product/product_attr">
        <el-icon><setting /></el-icon>
        <template #title>
          商品规格
        </template>
      </el-menu-item>
      <el-menu-item index="/product/product_reply">
        <el-icon><setting /></el-icon>
        <template #title>
          商品评论
        </template>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/order">
      <template #title>
        <el-icon><location /></el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="/order/order_list">
        <el-icon><setting /></el-icon>
        <template #title>
          订单列表
        </template>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/media/media_index">
      <el-icon><setting /></el-icon>
      <template #title>
        媒体
      </template>
    </el-menu-item>
    <el-sub-menu index="/permission">
      <template #title>
        <el-icon><location /></el-icon>
        <span>权限</span>
      </template>
      <el-menu-item index="/permission/permission_role">
        <el-icon><setting /></el-icon>
        <template #title>
          角色
        </template>
      </el-menu-item>
      <el-menu-item index="/permission/permission_admin">
        <el-icon><setting /></el-icon>
        <template #title>
          管理员
        </template>
      </el-menu-item>
      <el-menu-item index="/permission/permission_rule">
        <el-icon><setting /></el-icon>
        <template #title>
          权限规则
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Location,
  Setting
} from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;

}
.el-menu-vertical-demo {
  background-color: $aside-bgcolor;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu--popup-container {
  background-color: $aside-bgcolor;
}

</style>
