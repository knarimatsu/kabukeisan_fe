import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../../app/components/Header";
import { usePathname } from "next/navigation";

const mockedUseRouter = vi.fn();
vi.mock("next/navigation", () => ({
    useRouter: () => mockedUseRouter(),
    usePathname: vi.fn().mockReturnValue("/"),
}));

test("ヘッダーのコンポーネントテスト", () => {
    render(<Header />);
    expect(screen.getByText("株計算ドットコム")).toBeDefined();
});
