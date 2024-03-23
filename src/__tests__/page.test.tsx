import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

test("Home", async () => {
    const onkabuCard = {
        name: "恩株",
        count: 1,
    };
    await render(<Home />);
    await expect(onkabuCard).toEqual({
        name: expect.stringContaining("恩株"),
        count: 1,
    });
});
