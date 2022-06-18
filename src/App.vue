<template>
  <unrest-openseadragon :options="viewer_options" />
</template>

<script>
export default {
  computed: {
    viewer_options() {
      return {
        maxZoomPixelRatio: 4,
        navigatorAutoFade: false,
        showNavigator: true,
        showZoomControl: false,
        showHomeControl: false,
        showFullPageControl: false,
        showRotationControl: false,
        debugmode: false,
        clickTimeThreshold: 1000,
        gestureSettingsMouse: {
          clickToZoom: false,
          dblClickToZoom: false,
        },
        prefixUrl: '/media/',
        tileSources: '/media/the-geologic-map-of-the-moon-at-1-25m-scale-pre-proof.dzi',
      }
    },
  },
}
</script>
