import { createVue, destroyVM } from '../util'

describe('Col', () => {
    let vm
    afterEach(() => {
        destroyVM(vm)
    })

    it('create', () => {
        vm = createVue(
            {
                template: `
        <rp-col :span="12">
        </rp-col>
      `
            },
            true
        )
        let colElm = vm.$el
        expect(colElm.classList.contains('rp-col')).to.be.true
    })
    it('span', () => {
        vm = createVue(
            {
                template: `
        <rp-col :span="12">
        </rp-col>
      `
            },
            true
        )
        let colElm = vm.$el
        expect(colElm.classList.contains('rp-col-12')).to.be.true
    })
    it('pull', () => {
        vm = createVue(
            {
                template: `
        <rp-col :span="12" :pull="3">
        </rp-col>
      `
            },
            true
        )
        let colElm = vm.$el
        expect(colElm.classList.contains('rp-col-pull-3')).to.be.true
    })
    it('push', () => {
        vm = createVue(
            {
                template: `
        <rp-col :span="12" :push="3">
        </rp-col>
      `
            },
            true
        )
        let colElm = vm.$el
        expect(colElm.classList.contains('rp-col-push-3')).to.be.true
    })
    it('gutter', () => {
        vm = createVue(
            {
                template: `
        <rp-row :gutter="20">
          <rp-col :span="12" ref="col">
          </rp-col>
        </rp-row>
      `
            },
            true
        )
        let colElm = vm.$refs.col.$el
        expect(colElm.style.paddingLeft === '10px').to.be.true
        expect(colElm.style.paddingRight === '10px').to.be.true
    })
    it('responsive', () => {
        vm = createVue(
            {
                template: `
        <rp-row :gutter="20">
          <rp-col ref="col" :sm="{ span: 4, offset: 2 }" :md="8" :lg="{ span: 6, offset: 3 }">
          </rp-col>
        </rp-row>
      `
            },
            true
        )
        let colElm = vm.$refs.col.$el
        expect(colElm.classList.contains('rp-col-sm-4')).to.be.true
        expect(colElm.classList.contains('rp-col-sm-offset-2')).to.be.true
        expect(colElm.classList.contains('rp-col-lg-6')).to.be.true
        expect(colElm.classList.contains('rp-col-lg-offset-3')).to.be.true
        expect(colElm.classList.contains('rp-col-md-8')).to.be.true
    })
})
