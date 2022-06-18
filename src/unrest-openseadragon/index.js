import Openseadragon from './OpenSeadragon'
import HtmlOverlay from './HtmlOverlay'
import ZoomControls from './ZoomControls'


const _module = {
  prefix: 'Unrest',
  install(app) {
    app.component(_module.prefix + 'Openseadragon', Openseadragon)
    app.component(_module.prefix + 'HtmlOverlay', HtmlOverlay)
    app.component(_module.prefix + 'ZoomControls', ZoomControls)
  }
}

export default _module