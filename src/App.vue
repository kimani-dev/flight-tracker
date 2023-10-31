<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <el-container theme="dark">
    <el-header>
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
      <h1>Flight Tracker</h1>
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>
