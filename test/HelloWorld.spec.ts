import { describe, expect, it } from "vitest";
// @ts-ignore
import { mount, shallowMount } from "@vue/test-utils";
import Header from "@components/header/Header.vue";

describe("All sections should appear with data", () => {
  it("Header section must be visible", () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.isVisible()).toBe(true)
  });
});
