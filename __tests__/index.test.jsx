import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AdminHeader from "../components/AdminHeader";
// import Register from "../pages";

test("Username / Unis Badri should be rendered", () => {
  render(<AdminHeader />);
  const text = screen.getByText("Unis Badri");
  expect(text).toBeInTheDocument();
});

test("User Icon Profile should be rendered", () => {
  render(<AdminHeader />);
  const iconProfile = screen.getByAltText("iconAdmin");
  expect(iconProfile).toBeInTheDocument();
});

// register and login mock testing always failed because error :

// D:\Kuliah\BinarAcademy\KMFrontEndJS\Activities\challenge-06\node_modules\firebase\app\dist\index.esm.js:1
//     ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import { registerVersion } from '@firebase/app';
//                                                                                       ^^^^^^

//     SyntaxError: Cannot use import statement outside a module

// test("Mock Register", () => {
//   render(<Register />);
// });
