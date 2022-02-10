import { createVue, destroyVM } from '../util'

describe('Checkbox', () => {
    let vm
    afterEach(() => {
        destroyVM(vm)
    })

    it('create', done => {
        vm = createVue(
            {
                template: `
        <rp-checkbox v-model="checked">
        </rp-checkbox>
      `,
                data() {
                    return {
                        checked: false
                    }
                }
            },
            true
        )
        let checkboxElm = vm.$el
        expect(checkboxElm.classList.contains('rp-checkbox')).to.be.true
        checkboxElm.click()
        vm.$nextTick(_ => {
            expect(checkboxElm.querySelector('.is-checked')).to.be.ok
            done()
        })
    })
    it('disabled', () => {
        vm = createVue(
            {
                template: `
        <rp-checkbox
          v-model="checked"
          disabled
        >
        </rp-checkbox>
      `,
                data() {
                    return {
                        checked: false
                    }
                }
            },
            true
        )
        let checkboxElm = vm.$el
        expect(checkboxElm.querySelector('.is-disabled')).to.be.ok
    })
    it('change event', done => {
        vm = createVue(
            {
                template: `
        <rp-checkbox v-model="checked" @change="onChange">
        </rp-checkbox>
      `,
                methods: {
                    onChange(val) {
                        this.data = val
                    }
                },
                data() {
                    return {
                        data: '',
                        checked: false
                    }
                }
            },
            true
        )
        let checkboxElm = vm.$el
        checkboxElm.click()
        setTimeout(_ => {
            expect(vm.data).to.true
            vm.checked = false
            setTimeout(_ => {
                expect(vm.data).to.true
                done()
            }, 10)
        }, 10)
    })
    it('checkbox group', done => {
        vm = createVue(
            {
                template: `
        <rp-checkbox-group v-model="checkList">
          <rp-checkbox label="a" ref="a"></rp-checkbox>
          <rp-checkbox label="b" ref="b"></rp-checkbox>
          <rp-checkbox label="c" ref="c"></rp-checkbox>
          <rp-checkbox label="d" ref="d"></rp-checkbox>
        </rp-checkbox-group>
      `,
                data() {
                    return {
                        checkList: []
                    }
                }
            },
            true
        )
        expect(vm.checkList.length === 0).to.be.true
        vm.$refs.a.$el.click()
        vm.$nextTick(_ => {
            expect(vm.checkList.indexOf('a') !== -1).to.be.true
            done()
        })
    })

    it('checkbox group change event', done => {
        vm = createVue(
            {
                template: `
        <rp-checkbox-group v-model="checkList" @change="onChange">
          <rp-checkbox label="a" ref="a"></rp-checkbox>
          <rp-checkbox label="b" ref="b"></rp-checkbox>
        </rp-checkbox-group>
      `,
                methods: {
                    onChange(val) {
                        this.data = val
                    }
                },
                data() {
                    return {
                        data: '',
                        checkList: []
                    }
                }
            },
            true
        )
        vm.$refs.a.$el.click()
        setTimeout(_ => {
            expect(vm.data).to.deep.equal(['a'])
            vm.checkList = ['b']
            done()
        }, 10)
    })

    it('checkbox group minimum and maximum', done => {
        vm = createVue(
            {
                template: `
        <rp-checkbox-group 
          v-model="checkList" 
          :min="1" 
          :max="2"
        >
          <rp-checkbox label="a" ref="a"></rp-checkbox>
          <rp-checkbox label="b" ref="b"></rp-checkbox>
          <rp-checkbox label="c" ref="c"></rp-checkbox>
          <rp-checkbox label="d" ref="d"></rp-checkbox>
        </rp-checkbox-group>
      `,
                data() {
                    return {
                        checkList: ['a'],
                        lastEvent: null
                    }
                }
            },
            true
        )
        expect(vm.checkList.length === 1).to.be.true
        expect(vm.$refs.a.isDisabled).to.be.true
        vm.$refs.a.$el.click()
        vm.$nextTick(() => {
            expect(vm.checkList.indexOf('a') !== -1).to.be.true
            vm.$refs.b.$el.click()
            vm.$nextTick(() => {
                expect(vm.checkList.indexOf('a') !== -1).to.be.true
                expect(vm.checkList.indexOf('b') !== -1).to.be.true
                vm.$refs.c.$el.click()
                vm.$nextTick(() => {
                    expect(vm.checkList.indexOf('c') !== -1).to.be.false
                    expect(vm.checkList.indexOf('d') !== -1).to.be.false
                    expect(vm.$refs.c.isDisabled).to.be.true
                    expect(vm.$refs.d.isDisabled).to.be.true
                    done()
                })
            })
        })
    })

    it('nested group', done => {
        vm = createVue(
            {
                template: `
        <rp-checkbox-group v-model="checkList">
          <rp-row>
            <rp-checkbox label="a" ref="a"></rp-checkbox>
            <rp-checkbox label="b" ref="b"></rp-checkbox>
            <rp-checkbox label="c" ref="c"></rp-checkbox>
            <rp-checkbox label="d" ref="d"></rp-checkbox>
          </rp-row>
        </rp-checkbox-group>
      `,
                data() {
                    return {
                        checkList: []
                    }
                }
            },
            true
        )
        expect(vm.checkList.length === 0).to.be.true
        vm.$refs.a.$el.click()
        vm.$nextTick(_ => {
            expect(vm.checkList.indexOf('a') !== -1).to.be.true
            done()
        })
    })

    it('true false label', done => {
        vm = createVue(
            {
                template: `
        <rp-checkbox true-label="a" :false-label="3" v-model="checked"></rp-checkbox>
      `,
                data() {
                    return {
                        checked: 'a'
                    }
                }
            },
            true
        )
        vm.$el.click()
        vm.$nextTick(_ => {
            expect(vm.checked === 3).to.be.true
            done()
        })
    })
    it('checked', () => {
        vm = createVue(
            {
                template: `
        <div>
          <rp-checkbox v-model="checked" checked></rp-checkbox>
          <rp-checkbox-group v-model="checklist">
            <rp-checkbox checked label="a"></rp-checkbox>
          </rp-checkbox-group>
        </div>
      `,
                data() {
                    return {
                        checked: false,
                        checklist: []
                    }
                }
            },
            true
        )
        expect(vm.checked).to.be.true
        expect(vm.checklist.indexOf('a') !== -1).to.be.true
    })

    describe('checkbox-button', () => {
        let vm
        afterEach(() => {
            destroyVM(vm)
        })

        it('create', done => {
            vm = createVue(
                {
                    template: `
          <rp-checkbox-button v-model="checked">
          </rp-checkbox-button>
        `,
                    data() {
                        return {
                            checked: false
                        }
                    }
                },
                true
            )
            let checkboxElm = vm.$el
            expect(checkboxElm.classList.contains('rp-checkbox-button')).to.be.true
            checkboxElm.click()
            vm.$nextTick(_ => {
                expect(checkboxElm.classList.contains('is-checked')).to.be.ok
                done()
            })
        })
        it('disabled', () => {
            vm = createVue(
                {
                    template: `
          <rp-checkbox-button
            v-model="checked"
            disabled
          >
          </rp-checkbox-button>
        `,
                    data() {
                        return {
                            checked: false
                        }
                    }
                },
                true
            )
            let checkboxElm = vm.$el
            expect(checkboxElm.classList.contains('is-disabled')).to.be.ok
        })

        it('change event', done => {
            vm = createVue(
                {
                    template: `
        <rp-checkbox-button v-model="checked" @change="onChange">
        </rp-checkbox-button>
      `,
                    methods: {
                        onChange(val) {
                            this.data = val
                        }
                    },
                    data() {
                        return {
                            data: '',
                            checked: false
                        }
                    }
                },
                true
            )
            let checkboxElm = vm.$el
            checkboxElm.click()
            setTimeout(_ => {
                expect(vm.data).to.true
                vm.checked = false
                setTimeout(_ => {
                    expect(vm.data).to.true
                    done()
                }, 10)
            }, 10)
        })

        it('checkbox group', done => {
            vm = createVue(
                {
                    template: `
          <rp-checkbox-group v-model="checkList">
            <rp-checkbox-button label="a" ref="a"></rp-checkbox-button>
            <rp-checkbox-button label="b" ref="b"></rp-checkbox-button>
            <rp-checkbox-button label="c" ref="c"></rp-checkbox-button>
            <rp-checkbox-button label="d" ref="d"></rp-checkbox-button>
          </rp-checkbox-group>
        `,
                    data() {
                        return {
                            checkList: []
                        }
                    }
                },
                true
            )
            expect(vm.checkList.length === 0).to.be.true
            vm.$refs.a.$el.click()
            vm.$nextTick(_ => {
                expect(vm.checkList.indexOf('a') !== -1).to.be.true
                vm.$refs.b.$el.click()
                vm.$nextTick(_ => {
                    expect(vm.checkList.indexOf('a') !== -1).to.be.true
                    expect(vm.checkList.indexOf('b') !== -1).to.be.true
                    done()
                })
            })
        })

        it('checkbox-button group change event', done => {
            vm = createVue(
                {
                    template: `
        <rp-checkbox-group v-model="checkList" @change="onChange">
          <rp-checkbox-button label="a" ref="a"></rp-checkbox-button>
          <rp-checkbox-button label="b" ref="b"></rp-checkbox-button>
          <rp-checkbox-button label="c" ref="c"></rp-checkbox-button>
          <rp-checkbox-button label="d" ref="d"></rp-checkbox-button>
        </rp-checkbox-group>
      `,
                    methods: {
                        onChange(val) {
                            this.data = val
                        }
                    },
                    data() {
                        return {
                            data: '',
                            checkList: []
                        }
                    }
                },
                true
            )
            vm.$refs.a.$el.click()
            setTimeout(_ => {
                expect(vm.data).to.deep.equal(['a'])
                vm.checkList = ['b']
                setTimeout(_ => {
                    expect(vm.data).to.deep.equal(['a'])
                    done()
                }, 10)
            }, 10)
        })

        it('checkbox group props', () => {
            vm = createVue(
                {
                    template: `
          <rp-checkbox-group v-model="checkList" size="large" fill="#FF0000" text-color="#000">
            <rp-checkbox-button label="a" ref="a"></rp-checkbox-button>
            <rp-checkbox-button label="b" ref="b"></rp-checkbox-button>
            <rp-checkbox-button label="c" ref="c"></rp-checkbox-button>
            <rp-checkbox-button label="d" ref="d"></rp-checkbox-button>
          </rp-checkbox-group>
        `,
                    data() {
                        return {
                            checkList: ['a', 'd']
                        }
                    }
                },
                true
            )
            expect(vm.checkList.length === 2).to.be.true
            expect(vm.$refs.a.$el.classList.contains('is-checked')).to.be.true
            expect(vm.$refs.a.$el.classList.contains('rp-checkbox-button--large')).to.be.true
            expect(vm.$refs.a.$el.querySelector('.rp-checkbox-button__inner').style.backgroundColor).to.be.eql('rgb(255, 0, 0)')
            expect(vm.$refs.a.$el.querySelector('.rp-checkbox-button__inner').style.boxShadow).to.be.eql('rgb(255, 0, 0) -1px 0px 0px 0px')
            expect(vm.$refs.a.$el.querySelector('.rp-checkbox-button__inner').style.borderColor).to.be.eql('rgb(255, 0, 0)')
            expect(vm.$refs.a.$el.querySelector('.rp-checkbox-button__inner').style.color).to.be.eql('rgb(0, 0, 0)')
            expect(vm.$refs.b.$el.classList.contains('is-checked')).to.be.false
            expect(vm.$refs.c.$el.classList.contains('is-checked')).to.be.false
            expect(vm.$refs.d.$el.classList.contains('is-checked')).to.be.true
        })

        it('checkbox group minimum and maximum', done => {
            vm = createVue(
                {
                    template: `
          <rp-checkbox-group 
            v-model="checkList" 
            :min="1" 
            :max="2"
          >
            <rp-checkbox-button label="a" ref="a"></rp-checkbox-button>
            <rp-checkbox-button label="b" ref="b"></rp-checkbox-button>
            <rp-checkbox-button label="c" ref="c"></rp-checkbox-button>
            <rp-checkbox-button label="d" ref="d"></rp-checkbox-button>
          </rp-checkbox-group>
        `,
                    data() {
                        return {
                            checkList: ['a'],
                            lastEvent: null
                        }
                    }
                },
                true
            )
            expect(vm.checkList.length === 1).to.be.true
            vm.$refs.a.$el.click()
            vm.$nextTick(() => {
                expect(vm.checkList.indexOf('a') !== -1).to.be.true
                vm.$refs.b.$el.click()
                vm.$nextTick(() => {
                    expect(vm.checkList.indexOf('a') !== -1).to.be.true
                    expect(vm.checkList.indexOf('b') !== -1).to.be.true
                    vm.$refs.c.$el.click()
                    vm.$nextTick(() => {
                        expect(vm.checkList.indexOf('c') !== -1).to.be.false
                        expect(vm.checkList.indexOf('d') !== -1).to.be.false
                        done()
                    })
                })
            })
        })

        it('nested group', done => {
            vm = createVue(
                {
                    template: `
          <rp-checkbox-group v-model="checkList">
            <rp-row>
              <rp-checkbox-button label="a" ref="a"></rp-checkbox-button>
              <rp-checkbox-button label="b" ref="b"></rp-checkbox-button>
              <rp-checkbox-button label="c" ref="c"></rp-checkbox-button>
              <rp-checkbox-button label="d" ref="d"></rp-checkbox-button>
            </rp-row>
          </rp-checkbox-group>
        `,
                    data() {
                        return {
                            checkList: []
                        }
                    }
                },
                true
            )
            expect(vm.checkList.length === 0).to.be.true
            vm.$refs.a.$el.click()
            vm.$nextTick(_ => {
                expect(vm.checkList.indexOf('a') !== -1).to.be.true
                done()
            })
        })

        it('true false label', done => {
            vm = createVue(
                {
                    template: `
          <rp-checkbox-button 
            true-label="a" 
            :false-label="3" 
            v-model="checked"
          ></rp-checkbox-button>
        `,
                    data() {
                        return {
                            checked: 'a'
                        }
                    }
                },
                true
            )
            vm.$el.click()
            vm.$nextTick(_ => {
                expect(vm.checked === 3).to.be.true
                done()
            })
        })
        it('checked', () => {
            vm = createVue(
                {
                    template: `
          <div>
            <rp-checkbox-button v-model="checked" checked></rp-checkbox-button>
            <rp-checkbox-group v-model="checklist">
              <rp-checkbox-button checked label="a"></rp-checkbox-button>
            </rp-checkbox-group>
          </div>
        `,
                    data() {
                        return {
                            checked: false,
                            checklist: []
                        }
                    }
                },
                true
            )
            expect(vm.checked).to.be.true
            expect(vm.checklist.indexOf('a') !== -1).to.be.true
        })
    })
})
