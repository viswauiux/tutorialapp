import ReactDom from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Home from "./components/Home";
import Whyus from "./components/Whyus";
import Courses from "./components/Courses";
import Quiz from "./components/Quiz";
import Testimonals from "./components/Testimonals";
import Contact from "./components/Contact";
import Physics from "./components/Features/Physics";
import Maths from "./components/Features/Maths";
import Social from "./components/Features/Social";
import PhysicsVideos from "./components/Features/Physics/PhysicsVideos";
import PhysicsTheory from "./components/Features/Physics/PhysicsTheory";
import MathsVideos from "./components/Features/Maths/MathsVideos";
import MathsTheory from "./components/Features/Maths/MathsTheory";
import SocialVideos from "./components/Features/Social/SocialVideos";
import SocialTheory from "./components/Features/Social/SocialTheory";
import PhysicsQuiz from "./components/Features/Physics/PhysicsQuiz";
import SocialQuiz from "./components/Features/Social/SocialQuiz";
import MathsQuiz from "./components/Features/Maths/MathsQuiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "whyus",
            element: <Whyus />,
          },
          {
            path: "courses",
            element: <Courses />,
            children: [
              {
                path: "physics",
                element: <Physics />,
                children: [
                  {
                    path: "/courses/physics",
                    element: <PhysicsVideos />,
                  },
                  {
                    path: "physicsTheory",
                    element: <PhysicsTheory />,
                  },
                ],
              },
              {
                path: "mathematics",
                element: <Maths />,
                children: [
                  {
                    path: "/courses/mathematics",
                    element: <MathsVideos />,
                  },
                  {
                    path: "mathstheory",
                    element: <MathsTheory />,
                  },
                ],
              },
              {
                path: "social",
                element: <Social />,
                children: [
                  {
                    path: "/courses/social",
                    element: <SocialVideos />,
                  },
                  {
                    path: "socialtheory",
                    element: <SocialTheory />,
                  },
                ],
              },
            ],
          },
          {
            path: "quiz",
            element: <Quiz />,
            children: [
                {
                  path: "/quiz",
                  element: <PhysicsQuiz />,
                },
                {
                    path: "socialquiz",
                    element: <SocialQuiz />,
                },
                {
                    path: "mathematicsquiz",
                    element: <MathsQuiz />,
                }
              ]
            

          },
          {
            path: "tesimonals",
            element: <Testimonals />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}></RouterProvider>);
