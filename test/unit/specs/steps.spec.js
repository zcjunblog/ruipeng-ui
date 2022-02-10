import { createVue, destroyVM, waitImmediate } from '../util'

describe('Steps', () => {
    let vm
    afterEach(() => {
        destroyVM(vm)
    })

    it('create', () => {
        vm = createVue(`
      <rp-steps>
        <rp-step title="step1"></rp-step>
        <rp-step title="step2"></rp-step>
        <rp-step title="step3"></rp-step>
      </rp-steps>
    `)

        expect(vm.$el.querySelectorAll('.rp-step')).to.length(3)
    })

    it('space', async () => {
        vm = createVue(
            `
      <rp-steps>
        <rp-step title="step1"></rp-step>
        <rp-step title="step2"></rp-step>
        <rp-step title="step3"></rp-step>
      </rp-steps>
    `,
            true
        )

        const vm2 = createVue(
            `
      <rp-steps :space="100">
        <rp-step title="step1"></rp-step>
        <rp-step title="step2"></rp-step>
        <rp-step title="step3"></rp-step>
        <rp-step title="step4"></rp-step>
      </rp-steps>
    `,
            true
        )

        await waitImmediate()
        const stepElm = vm.$el.querySelector('.rp-step')
        const stepElm2 = vm2.$el.querySelector('.rp-step')
        expect(getComputedStyle(stepElm).flexBasis).to.equal('50%')
        expect(getComputedStyle(stepElm2).flexBasis).to.equal('100px')
    })

    it('processStatus', done => {
        vm = createVue(`
      <rp-steps :active="1" process-status="error">
        <rp-step title="step1"></rp-step>
        <rp-step title="step2"></rp-step>
        <rp-step title="step3"></rp-step>
      </rp-steps>
    `)

        vm.$nextTick(_ => {
            expect(vm.$el.querySelectorAll('.rp-step__head.is-error')).to.length(1)
            done()
        })
    })

    it('update processStatus', done => {
        vm = createVue({
            template: `
        <rp-steps :active="1" :process-status="processStatus">
          <rp-step title="abc"></rp-step>
          <rp-step title="abc2"></rp-step>
        </rp-steps>
      `,
            data() {
                return { processStatus: 'error' }
            }
        })

        vm.$nextTick(_ => {
            expect(vm.$el.querySelectorAll('.rp-step__head.is-error')).to.length(1)
            vm.processStatus = 'process'
            vm.$nextTick(_ => {
                expect(vm.$el.querySelectorAll('.rp-step__head.is-process')).to.length(1)
                done()
            })
        })
    })

    it('finishStatus', done => {
        vm = createVue(`
      <rp-steps :active="1" finish-status="error">
        <rp-step title="abc"></rp-step>
        <rp-step title="abc2"></rp-step>
      </rp-steps>
    `)

        vm.$nextTick(_ => {
            expect(vm.$el.querySelectorAll('.rp-step__head.is-error')).to.length(1)
            done()
        })
    })

    it('active', done => {
        vm = createVue({
            template: `
        <rp-steps :active="active" finish-status="error">
          <rp-step title="abc"></rp-step>
          <rp-step title="abc2"></rp-step>
        </rp-steps>
      `,

            data() {
                return { active: 0 }
            }
        })

        vm.$nextTick(_ => {
            expect(vm.$el.querySelectorAll('.rp-step__head.is-error')).to.length(0)
            vm.active = 2
            vm.$nextTick(_ => {
                expect(vm.$el.querySelectorAll('.rp-step__head.is-error')).to.length(2)
                done()
            })
        })
    })

    it('create vertical', () => {
        vm = createVue(`
      <rp-steps direction="vertical">
        <rp-step title="aaa"></rp-step>
        <rp-step title="bbb"></rp-step>
      </rp-steps>
    `)

        expect(vm.$el.querySelector('.is-vertical')).to.exist
    })

    it('vertical:height', async () => {
        vm = createVue(
            `
      <rp-steps direction="vertical" :space="200">
        <rp-step title="aaa"></rp-step>
        <rp-step title="bbb"></rp-step>
      </rp-steps>
    `,
            true
        )

        await waitImmediate()
        const stepElm = vm.$el.querySelector('.rp-step')
        expect(getComputedStyle(stepElm).flexBasis).to.equal('200px')
    })

    it('step:status=error', done => {
        vm = createVue(`
      <rp-steps :active="2" process-status="process" finish-status="success" direction="horizontal">
        <rp-step title="step1"></rp-step>
        <rp-step title="step2" status="error"></rp-step>
        <rp-step title="step3"></rp-step>
      </rp-steps>
    `)

        vm.$nextTick(_ => {
            const errorLine = vm.$el.querySelector('.rp-step:nth-child(2) .rp-step__line-inner')
            expect(errorLine.getBoundingClientRect().width).to.equal(0)
            const nextStep = vm.$el.querySelector('.rp-step:nth-child(3) .rp-step__head')
            expect(nextStep.classList.contains('is-wait')).to.equal(true)
            done()
        })
    })
})
