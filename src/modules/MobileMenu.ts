export class MobileMenu {
  selectors = {
    root: '[data-js-mobile-menu]',
    overlay: '[data-js-mobile-menu-overlay]',
    burgerButton: '[data-js-mobile-menu-burger-button]',
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  rootElement!: HTMLElement | null
  overlayElement!: HTMLElement | null
  burgerButtonElement!: HTMLElement | null

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)

    if (!this.rootElement) {
      return
    }

    this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    )

    if (!this.overlayElement || !this.burgerButtonElement) {
      return
    }

    this.bindEvents()
  }

  onBurgerButtonClick = () => {
    this.overlayElement!.classList.toggle(this.stateClasses.isActive)
    this.burgerButtonElement!.classList.toggle(this.stateClasses.isActive)
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  }

  bindEvents() {
    this.burgerButtonElement!.addEventListener(
      'click',
      this.onBurgerButtonClick
    )
  }
}
