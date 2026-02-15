import { SiCsswizardry } from 'react-icons/si';
import { RiJavascriptFill } from 'react-icons/ri';
import { GrReactjs } from 'react-icons/gr';
import { FaHtml5 } from 'react-icons/fa';
import { FaGithubAlt } from 'react-icons/fa';


export default function Icons() {
  return (
    <div id="icons">
      <RiJavascriptFill size={50} color="rgba(233, 118, 83, 1)" />
      <GrReactjs size={50} color="rgba(8, 59, 126, 1)" />
      <SiCsswizardry size={50} color="rgba(50, 129, 233, 1)" />
      <FaHtml5 size={50} color="rgba(216, 40, 40, 1)" />
      <FaGithubAlt size={50} color="rgba(74, 74, 74, 1)" />
    </div>
  );
}