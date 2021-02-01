import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import MainSlider from '@/components/MainSlider.vue'
import Menu from '@/components/Menu.vue'
import ProductCard from '@/components/ProductCard'
import SideMenu from '@/components/SideMenu'
import Login from '@/pages/Login'
import Pagination from '@/pages/Pagination'
import index from '@/pages/index'

describe('Header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Header)
    expect(wrapper.vm).toBeTruthy()
  })
});

describe('MainSlider', () => {
  test('is ok', () => {
    const wrapper = mount(MainSlider)
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('Menu', () => {
  test('is ok', () => {
    const wrapper = mount(Menu)
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('ProductCard', () => {
  test('is ok', () => {
    const wrapper = mount(ProductCard)
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('SideMenu', () => {
  test('is ok', () => {
    const wrapper = mount(SideMenu)
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('Login', () => {
  test('is ok', () => {
    const wrapper = mount(Login)
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('Pagination', () => {
  test('is ok', () => {
    const wrapper = mount(Pagination)
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('Index', () => {
  test('is ok', () => {
    const wrapper = mount(index)
    expect(wrapper.vm).toBeTruthy()
  })
})

