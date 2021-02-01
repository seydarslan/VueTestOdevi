
import { mount } from "@vue/test-utils";

import Menu from "@/components/Menu";

describe("Menu.vue", () => {
  let wrapper = mount(Menu);
  it("ilk", () => {
    expect(wrapper.text()).toContain("DJ Ürünleri");
  });
  it("ikinci", () => {
    expect(wrapper.text()).toContain("Piyanolar");
  });
  it("ucuncu", () => {
    expect(wrapper.text()).toContain("Gitarlar");
  });
  it("dorduncu", () => {
    expect(wrapper.text()).toContain("Klavyeler");
  });
   it("besinci", () => {
    expect(wrapper.text()).toContain("Nefesli Çalgılar");
  });
   it("altinci", () => {
    expect(wrapper.text()).toContain("Yaylı Çalgılar");
  });
   it("yedinci", () => {
    expect(wrapper.text()).toContain("Perküsyon Ürünleri");
  });
   it("sekizinci", () => {
    expect(wrapper.text()).toContain("Aksesuarlar");
  });
});