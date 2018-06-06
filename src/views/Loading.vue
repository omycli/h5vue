<template>
  <page>
    <div class="loading">
      <div class="inner">
        <i class="before"></i>
        <i class="after"></i>
        </div>
        <div class="text">{{progress}}%</div>
    </div>
  </page>
</template>
<script>
import Page from '@/components/Page';

export default {
    components: {
        page: Page
    },

    props: {
        progress: {
            type: Number,
            default: 0
        }
    }
};
</script>
