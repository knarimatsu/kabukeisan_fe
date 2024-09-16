import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "../../app/components/Card";

const mockedUseRouter = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => mockedUseRouter(),
  usePathname: vi.fn().mockReturnValue("/"),
}));
test("Card Component テスト", () => {
  render(<Card title="あああ" description="これは説明です" path="/" />);
  expect(screen.getByText("これは説明です")).toBeDefined();
});

test("Card Conponent ボタンテスト", () => {
  render(<Card title="あああ" description="これは説明です" path="/" />);
  expect(screen.getAllByRole("button", { name: "あああ" })).toBeDefined();
});
