import { createRoot } from "react-dom/client";
import { App } from "@/components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LazyAbout } from "@/pages/about/About.lazy";
import { Shop } from "@/pages/shop";
import { Suspense } from "react";

const root = document.getElementById("root") as HTMLElement;

if (!root) {
  throw new Error("Root not found");
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={"loading...."}>
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={"Loading...."}>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
