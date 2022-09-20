<script setup lang="ts">
import { ParseSheet } from "../helpers";
import XLSX from "xlsx";

async function OnFileLoad(e) {
  try {
    const data = await e.target.files[0].arrayBuffer();
    const workbook = XLSX.read(data);
    const sheet = ParseSheet(workbook.Sheets[workbook.SheetNames[0]]);
    console.dir(sheet);
    return;
  } catch (err) {
    console.error(err);
  }
}
</script>

<template>
  <div class="transcript-loader">
    transcript loader
    <input type="file" id="fileLoader" @change="OnFileLoad" />
  </div>
</template>
