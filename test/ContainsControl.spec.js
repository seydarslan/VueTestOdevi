import { mount } from '@vue/test-utils'
import Login from '@/pages/Login'


describe('Login', () => {
    it('shows a v-row', ()=>{
        const wrapper = mount(Login)
        expect(wrapper.contains('v-row')).toBe(true)
    })
})




  
