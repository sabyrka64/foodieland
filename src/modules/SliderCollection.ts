import Swiper from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow } from 'swiper/modules'
import { getAttrNameFromSelector } from '@/utils'

const rootSelector = '[data-js-slider]'

class Slider {
  rootElement: HTMLElement
  config: Record<string, never>

  constructor(rootElement: Element) {
    if (!(rootElement instanceof HTMLElement)) {
      throw new Error('Invalid root element')
    }

    this.rootElement = rootElement

    const attr = this.rootElement.getAttribute(
      getAttrNameFromSelector(rootSelector)
    )

    this.config = attr ? JSON.parse(attr) : {}

    this.init()
  }

  init() {
    new Swiper(this.rootElement, {
      modules: [EffectCoverflow],
      ...this.config,
    })
  }
}

export class SliderCollection {
  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Slider(element)
    })
  }

  constructor() {
    this.init()
  }
}
