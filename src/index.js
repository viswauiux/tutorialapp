import ReactDom from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Components/Body";
import Home from "./Components/Home";
import Whyus from "./Components/Whyus";
import Courses from "./Components/Courses";
import Quiz from "./Components/Quiz";
import Testimonals from "./Components/Testimonals";
import Contact from "./Components/Contact";
import Physics from "./Components/Features/Physics";
import Maths from "./Components/Features/Maths";
import Social from "./Components/Features/Social";
import PhysicsVideos from "./Components/Features/Physics/PhysicsVideos";
import PhysicsTheory from "./Components/Features/Physics/PhysicsTheory";
import MathsVideos from "./Components/Features/Maths/MathsVideos";
import MathsTheory from "./Components/Features/Maths/MathsTheory";
import SocialVideos from "./Components/Features/Social/SocialVideos";
import SocialTheory from "./Components/Features/Social/SocialTheory";
import PhysicsQuiz from "./Components/Features/Physics/PhysicsQuiz";
import SocialQuiz from "./Components/Features/Social/SocialQuiz";
import MathsQuiz from "./Components/Features/Maths/MathsQuiz";

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
                  path: "physicsquiz",
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
