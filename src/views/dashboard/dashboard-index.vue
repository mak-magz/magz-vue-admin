<script lang="ts" setup>
// @ts-ignore
import pdfMake from "pdfmake/build/pdfmake";
// @ts-ignore
import pdfFonts from 'pdfmake/build/vfs_fonts';

const blobToBase64 = async (blob: Blob): Promise<any> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = function() {
      // const result = this.result.split('base64,')[1]
      const result = reader.result?.toString().split('base64,')[1]
      // const result = reader.result?.slice(reader.result?.toString().indexOf(',') + 1)
      return resolve(result)
    };
  
    reader.readAsDataURL(blob)
  })
}

async function createPdf() {
  if(pdfMake.vfs == null) {
    const response = await fetch("./ipaexg.ttf", {
    headers: {
      'Content-Type': 'application/x-font-ttf',
    }
  })
    if(response.status !== 200) {
      return
    }
    const blob = await response.blob()
    const font = await blobToBase64(blob)
    pdfMake.vfs = {"ipaexg.ttf": font}
    pdfMake.fonts = {
      IPAEXGothic: {
        normal: 'ipaexg.ttf',
      },
    };
  }
  
  const docDefinition = {
    content: [`テスト出力`],
    defaultStyle: {
      font: 'IPAEXGothic',
    },
  };

  pdfMake.createPdf(docDefinition).download();
}

</script>

<template>
  <div class="dashboard-container">Dashboard</div>
  <el-button type="primary" size="default" @click="createPdf">PDF</el-button>
  
</template>
