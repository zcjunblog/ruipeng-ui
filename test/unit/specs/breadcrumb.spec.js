import { createVue, destroyVM } from '../util'

describe('Breadcrumb', () => {
    let vm
    afterEach(() => {
        destroyVM(vm)
    })

    it('create', done => {
        vm = createVue(`
      <rp-breadcrumb separator=">">
        <rp-breadcrumb-item to="/">首页</rp-breadcrumb-item>
        <rp-breadcrumb-item>活动管理</rp-breadcrumb-item>
        <rp-breadcrumb-item>活动列表</rp-breadcrumb-item>
        <rp-breadcrumb-item>活动详情</rp-breadcrumb-item>
      </rp-breadcrumb>
    `)
        vm.$nextTick(_ => {
            expect(vm.$el.querySelector('.rp-breadcrumb__separator').innerText).to.equal('>')
            done()
        })
    })
})
