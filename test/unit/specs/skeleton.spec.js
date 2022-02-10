import Skeleton from 'packages/skeleton'
import { createTest, destroyVM, createVue, waitImmediate, wait } from '../util'

const content = 'content'

describe('Skeleton.vue', () => {
    let vm

    afterEach(() => {
        destroyVM(vm)
    })

    it('render test', () => {
        vm = createTest(Skeleton, true)
        const el = vm.$el
        expect(el.querySelectorAll('.rp-skeleton__p').length).to.equal(4)
        expect(Array.from(el.children[0].classList)).to.contain('rp-skeleton')
    })

    it('should render with animation', () => {
        vm = createTest(
            Skeleton,
            {
                animated: true
            },
            true
        )

        const el = vm.$el

        expect(Array.from(el.children[0].classList)).to.contain('is-animated')
    })

    it('should render x times', async () => {
        vm = createVue(
            {
                template: `
        <rp-skeleton :count="count"></rp-skeleton>
      `,
                data() {
                    return {
                        count: 1
                    }
                }
            },
            true
        )

        const wrapper = vm.$el
        expect(wrapper.querySelectorAll('.rp-skeleton__p').length).to.equal(4)

        vm.count = 2

        await waitImmediate()
        expect(wrapper.querySelectorAll('.rp-skeleton__p').length).to.equal(8)
    })

    it('should render x rows', () => {
        vm = createTest(
            Skeleton,
            {
                rows: 5
            },
            true
        )

        expect(vm.$el.querySelectorAll('.rp-skeleton__p').length).to.equal(5)
    })

    it('should render default slots', () => {
        vm = createVue(
            {
                template: `
        <rp-skeleton :loading="loading">{{content}}</rp-skeleton>
      `,
                data() {
                    return {
                        loading: false,
                        content
                    }
                }
            },
            true
        )
        expect(vm.$el.textContent).to.be.equal(content)
    })

    it('should render template slots', () => {
        vm = createVue(
            {
                template: `
        <rp-skeleton :loading="loading"><template slot="template">{{content}}</template></rp-skeleton>
      `,
                data() {
                    return {
                        loading: true,
                        content
                    }
                }
            },
            true
        )
        expect(vm.$el.querySelector('.rp-skeleton').textContent).to.be.equal(content)
    })

    it('should throttle rendering', async () => {
        vm = createTest(
            Skeleton,
            {
                throttle: 500
            },
            true
        )

        expect(vm.uiLoading).to.be.equal(false)
        await wait(600)

        expect(vm.uiLoading).to.be.equal(true)
    })
})
