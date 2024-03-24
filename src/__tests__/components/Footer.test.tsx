import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../../app/components/Footer";

test("Footerのコンポーネントテスト", () => {
    render(<Footer />);
    expect(screen.getByText("© 2023 Kazuki Narimatsu")).toBeDefined();
});
