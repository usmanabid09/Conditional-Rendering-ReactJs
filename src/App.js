import {DefaultMain} from "./components/Default";
import {StudentMain} from "./components/Student";
import {TeacherMain} from "./components/Teacher";

function App() {
  const {role} = {role: "nothing"};
  return Containers.getView(role)()
}

const Containers = {
  student : StudentMain,
  teacher : TeacherMain,
  default: DefaultMain,
  getView: (role) => Containers[role] ? Containers[role] : Containers.default
}

export default App;
