import { createVue, createTest, destroyVM, waitImmediate } from '../util'
import Empty from 'packages/empty'

const AXIOM = 'Rem is the best girl'

describe('Empty', () => {
    let vm
    afterEach(() => {
        destroyVM(vm)
    })
    it('render test', () => {
        vm = createVue(
            {
                template: '<rp-empty>{{ AXIOM }}</rp-empty>',
                data() {
                    return {
                        AXIOM
                    }
                }
            },
            true
        )
        expect(vm.$el.querySelector('.rp-empty__image')).to.exist
        expect(vm.$el.querySelector('.rp-empty__description')).to.exist
        expect(vm.$el.querySelector('.rp-empty__bottom')).to.exist
    })

    it('should render image props', () => {
        vm = createTest(
            Empty,
            {
                image: AXIOM
            },
            true
        )
        expect(vm.$el.querySelector('.rp-empty__image img')).to.exist
    })

    it('should render imageSize props', async () => {
        vm = createVue(
            {
                template: '<rp-empty :image-size="imageSize"></rp-empty>',
                data() {
                    return {
                        imageSize: 500
                    }
                }
            },
            true
        )
        expect(vm.$el.querySelector('.rp-empty__image').getAttribute('style')).to.contain('width: 500px')
        vm.imageSize = 200
        await waitImmediate()
        expect(vm.$el.querySelector('.rp-empty__image').getAttribute('style')).to.contain('width: 200px')
    })

    it('should render description props', () => {
        vm = createTest(
            Empty,
            {
                description: AXIOM
            },
            true
        )
        expect(vm.$el.querySelector('.rp-empty__description').innerText).to.equal(AXIOM)
    })

    it('should render image slots', () => {
        vm = createVue(
            {
                template: '<rp-empty><template slot="image">{{AXIOM}}</template></rp-empty>',
                data() {
                    return {
                        AXIOM
                    }
                }
            },
            true
        )
        expect(vm.$el.querySelector('.rp-empty__image').innerText).to.equal(AXIOM)
    })

    it('should render description slots', () => {
        vm = createVue(
            {
                template: '<rp-empty><template slot="description">{{AXIOM}}</template></rp-empty>',
                data() {
                    return {
                        AXIOM
                    }
                }
            },
            true
        )
        expect(vm.$el.querySelector('.rp-empty__description').innerText).to.equal(AXIOM)
    })

    it('should render default slots', () => {
        vm = createVue(
            {
                template: '<rp-empty>{{AXIOM}}</rp-empty>',
                data() {
                    return {
                        AXIOM
                    }
                }
            },
            true
        )
        expect(vm.$el.querySelector('.rp-empty__bottom').innerText).to.equal(AXIOM)
    })
})
