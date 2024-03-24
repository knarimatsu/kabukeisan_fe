import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../../app/components/Header";
import { usePathname } from "next/navigation";

const mockedUserRouter = vi.fn();
vi.mock("next/navigation", () => ({
    useRouter: () => mockedUserRouter(),
    usePathname: vi.fn().mockReturnValue("/"),
}));

test("ヘッダーのコンポーネントテスト", () => {
    render(<Header />);
    expect(screen.getByText("株計算ドットコム")).toBeDefined();
});
