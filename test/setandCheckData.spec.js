import { mount } from '@vue/test-utils'
import Login from '@/pages/Login.vue'

test('setData try', async () =>{
    const wrapper = mount (Login)

    await wrapper.setData({ userName: 'Seyda'})

    expect(wrapper.vm.userName).toBe('Seyda')
})