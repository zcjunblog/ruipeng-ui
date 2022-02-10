import { createVue, destroyVM } from '../util'

describe('Timeline', () => {
    let vm
    afterEach(() => {
        destroyVM(vm)
    })

    it('create', () => {
        vm = createVue(
            {
                template: `
        <rp-timeline>
          <rp-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp">
            {{activity.content}}
          </rp-timeline-item>
        </rp-timeline>
      `,
                data() {
                    return {
                        activities: [
                            {
                                content: '创建成功',
                                timestamp: '2018-04-11'
                            },
                            {
                                content: '通过审核',
                                timestamp: '2018-04-13'
                            },
                            {
                                content: '活动按期开始',
                                timestamp: '2018-04-15'
                            }
                        ]
                    }
                }
            },
            true
        )
        let contentElms = vm.$el.querySelectorAll('.rp-timeline-item__content')
        contentElms.forEach((elm, index) => {
            expect(elm.innerText).to.equal(vm.activities[index].content)
        })
        let timestampElms = vm.$el.querySelectorAll('.rp-timeline-item__timestamp')
        timestampElms.forEach((elm, index) => {
            expect(elm.innerText).to.equal(vm.activities[index].timestamp)
        })
    })

    it('reverse', done => {
        vm = createVue(
            {
                template: `
        <rp-timeline :reverse="reverse">
          <rp-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp">
            {{activity.content}}
          </rp-timeline-item>
        </rp-timeline>
      `,

                data() {
                    return {
                        reverse: true,
                        activities: [
                            {
                                content: '创建成功',
                                timestamp: '2018-04-11'
                            },
                            {
                                content: '通过审核',
                                timestamp: '2018-04-13'
                            },
                            {
                                content: '活动按期开始',
                                timestamp: '2018-04-15'
                            }
                        ]
                    }
                }
            },
            true
        )

        const contentElms = vm.$el.querySelectorAll('.rp-timeline-item__content')
        contentElms.forEach((elm, index) => {
            expect(elm.innerText).to.equal(vm.activities[vm.activities.length - index - 1].content)
        })

        vm.reverse = false
        vm.$nextTick(() => {
            const contentElms = vm.$el.querySelectorAll('.rp-timeline-item__content')
            contentElms.forEach((elm, index) => {
                expect(elm.innerText).to.equal(vm.activities[index].content)
            })
            done()
        })
    })

    it('placement', () => {
        vm = createVue(
            {
                template: `
        <rp-timeline>
          <rp-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
            :placement="activity.placement">
            {{activity.content}}
          </rp-timeline-item>
        </rp-timeline>
      `,

                data() {
                    return {
                        activities: [
                            {
                                content: '创建成功',
                                timestamp: '2018-04-11',
                                placement: 'top'
                            },
                            {
                                content: '通过审核',
                                timestamp: '2018-04-13'
                            },
                            {
                                content: '活动按期开始',
                                timestamp: '2018-04-15'
                            }
                        ]
                    }
                }
            },
            true
        )

        const timestampElm = vm.$el.querySelectorAll('.rp-timeline-item__timestamp')[0]
        expect(timestampElm.classList.contains('is-top')).to.true
    })

    it('hide-timestamp', () => {
        vm = createVue(
            {
                template: `
        <rp-timeline>
          <rp-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
            :hide-timestamp="activity.hideTimestamp">
            {{activity.content}}
          </rp-timeline-item>
        </rp-timeline>
      `,

                data() {
                    return {
                        activities: [
                            {
                                content: '创建成功',
                                timestamp: '2018-04-11',
                                hideTimestamp: true
                            },
                            {
                                content: '通过审核',
                                timestamp: '2018-04-13'
                            },
                            {
                                content: '活动按期开始',
                                timestamp: '2018-04-15'
                            }
                        ]
                    }
                }
            },
            true
        )

        const timestampElms = vm.$el.querySelectorAll('.rp-timeline-item__timestamp')
        expect(timestampElms.length).to.equal(2)
    })

    it('color', () => {
        vm = createVue(
            {
                template: `
        <rp-timeline>
          <rp-timeline-item
            timestamp="2018-04-11"
            color="#f00">
            创建成功
          </rp-timeline-item>
        </rp-timeline>
      `
            },
            true
        )

        const nodeElm = vm.$el.querySelector('.rp-timeline-item__node')
        expect(nodeElm.style.backgroundColor).to.equal('rgb(255, 0, 0)')
    })

    it('type', () => {
        vm = createVue(
            {
                template: `
        <rp-timeline>
          <rp-timeline-item
            timestamp="2018-04-11"
            type="primary">
            创建成功
          </rp-timeline-item>
        </rp-timeline>
      `
            },
            true
        )

        const nodeElm = vm.$el.querySelector('.rp-timeline-item__node')
        expect(nodeElm.classList.contains('rp-timeline-item__node--primary')).to.true
    })

    it('size', () => {
        vm = createVue(
            {
                template: `
        <rp-timeline>
          <rp-timeline-item
            timestamp="2018-04-11"
            type="large">
            创建成功
          </rp-timeline-item>
        </rp-timeline>
      `
            },
            true
        )

        const nodeElm = vm.$el.querySelector('.rp-timeline-item__node')
        expect(nodeElm.classList.contains('rp-timeline-item__node--large')).to.true
    })

    it('icon', () => {
        vm = createVue(
            {
                template: `
        <rp-timeline>
          <rp-timeline-item
            timestamp="2018-04-11"
            icon="rp-icon-more">
            创建成功
          </rp-timeline-item>
        </rp-timeline>
      `
            },
            true
        )

        const nodeElm = vm.$el.querySelector('.rp-timeline-item__icon')
        expect(nodeElm.classList.contains('rp-icon-more')).to.true
    })
})
