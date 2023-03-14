export { default as ModalSuccess } from '../../components/ModalSuccess.vue'
export { default as SearchForm } from '../../components/SearchForm.vue'
export { default as LayoutsFooter } from '../../components/Layouts/Footer.vue'
export { default as LayoutsHeader } from '../../components/Layouts/Header.vue'
export { default as LayoutsLayoutDefault } from '../../components/Layouts/LayoutDefault.vue'
export { default as ListPostsCardPost } from '../../components/ListPosts/CardPost.vue'
export { default as ListPost } from '../../components/ListPosts/ListPost.vue'
export { default as ListCartProduct } from '../../components/ListCart/CartProduct.vue'
export { default as ListCartEmptyCart } from '../../components/ListCart/EmptyCart.vue'
export { default as ListCart } from '../../components/ListCart/ListCart.vue'
export { default as Preload } from '../../components/Preload/Index.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
