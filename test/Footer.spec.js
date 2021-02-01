import { mount } from "@vue/test-utils";
import Footer from "@/components/Footer";

describe("footer.vue", () => {
  let wrapper = mount(Footer);
  it("Kategoriler test", () => {
    expect(wrapper.text()).toContain("KATEGORİLER");
  });
  it("Hızlı erişim test", () => {
    expect(wrapper.text()).toContain("HIZLI ERİŞİM");
  });
  it("Önemli bilgiler test", () => {
    expect(wrapper.text()).toContain("ÖNEMLİ BİLGİLER");
  });
});



