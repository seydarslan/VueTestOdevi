import { mount } from '@vue/test-utils'
import Login from '@/pages/Login'
import Header from '@/components/Header'


describe('Login', () => {
    it('is correct', ()=>{
        const wrapper = mount(Login)
        expect(wrapper.name()).toBe('Login')
    })
})


describe('Header', () => {
    it('is correct', ()=>{
        const wrapper = mount(Header)
        expect(wrapper.name()).toBe('Header')
    })
})


