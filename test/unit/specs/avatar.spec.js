import { createTest, createVue, destroyVM, wait } from '../util'
import Avatar from 'packages/avatar'
import { IMAGE_SUCCESS, IMAGE_FAIL } from '../mocks/uri'

describe('Avatar', () => {
    let vm
    afterEach(() => {
        destroyVM(vm)
    })

    it('create', () => {
        vm = createTest(Avatar)
        expect(vm.$el).to.exist
    })

    it('size is number', () => {
        vm = createVue(
            {
                template: `
        <rp-avatar :size="50">
        </rp-avatar>
      `
            },
            true
        )
        const avatarElm = vm.$el
        expect(avatarElm.style.height).to.equal('50px')
    })

    it('size is string', () => {
        vm = createVue(
            {
                template: `
        <rp-avatar size="small">
          user
        </rp-avatar>
      `
            },
            true
        )
        const avatarElm = vm.$el
        expect(avatarElm.classList.contains('rp-avatar--small')).to.be.true
    })

    it('shape', () => {
        vm = createVue(
            {
                template: `
        <rp-avatar size="small" shape="square">
          user
        </rp-avatar>
      `
            },
            true
        )
        const avatarElm = vm.$el
        expect(avatarElm.classList.contains('rp-avatar--square')).to.be.true
    })

    it('icon avatar', () => {
        vm = createVue(
            {
                template: `
        <rp-avatar icon="rp-icon-user-solid">
        </rp-avatar>
      `
            },
            true
        )
        const avatarElm = vm.$el
        const iconELm = avatarElm.children[0]
        expect(avatarElm.classList.contains('rp-avatar--icon')).to.be.true
        expect(iconELm.classList.contains('rp-icon-user-solid')).to.be.true
    })

    it('image avatar', () => {
        vm = createVue(
            {
                template: `
        <rp-avatar src="${IMAGE_SUCCESS}"></rp-avatar>
      `
            },
            true
        )
        const imgElm = vm.$el.children[0]
        expect(imgElm.tagName.toUpperCase()).to.equal('IMG')
        expect(imgElm.src).to.equal(IMAGE_SUCCESS)
    })

    it('image fallback', async () => {
        vm = createVue(
            {
                template: `
        <rp-avatar src="${IMAGE_FAIL}" @error="errorHandler">
          fallback
        </rp-avatar>
      `,
                methods: {
                    errorHandler() {
                        return true
                    }
                }
            },
            true
        )
        await wait()
        const avatarElm = vm.$el
        expect(avatarElm.textContent.trim()).to.equal('fallback')
    })

    it('image fit', async () => {
        vm = createVue(
            {
                template: `
        <div>
          <rp-avatar :src="url"></rp-avatar>
          <rp-avatar :src="url" v-for="fit in fits" :fit="fit" :key="fit"></rp-avatar>
        </div>
        
      `,
                data() {
                    return {
                        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                        url: IMAGE_SUCCESS
                    }
                }
            },
            true
        )
        await wait()
        const containerElm = vm.$el
        expect(containerElm.children[0].children[0].style.objectFit).to.equal('cover')
        expect(containerElm.children[1].children[0].style.objectFit).to.equal('fill')
        expect(containerElm.children[2].children[0].style.objectFit).to.equal('contain')
        expect(containerElm.children[3].children[0].style.objectFit).to.equal('cover')
        expect(containerElm.children[4].children[0].style.objectFit).to.equal('none')
        expect(containerElm.children[5].children[0].style.objectFit).to.equal('scale-down')
    })
})
